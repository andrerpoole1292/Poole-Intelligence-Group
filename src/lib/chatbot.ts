import { findBestAnswer, knowledgeBase } from "./knowledge-base";

// ── Configuration ──

const GRAVITY_API_URL = "https://api.gravityengine.ai/v1";
const GRAVITY_API_KEY = "";
const USE_API = GRAVITY_API_KEY.length > 0;

// ── Suggested starter questions ──

export const suggestedQuestions = [
  "What services do you offer?",
  "How much does it cost?",
  "Tell me about your chatbot solutions",
  "Who do you work with?",
  "How does your process work?",
  "What makes you different?",
];

// ── Types ──

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  relatedQuestion?: string;
}

// ── Knowledge base as context for the LLM ──

function buildSystemPrompt(): string {
  const entries = knowledgeBase.map(
    (e) => `Q: ${e.question}\nA: ${e.answer}`
  ).join("\n\n");

  return `You are the Poole Intelligence Group assistant — a helpful, professional AI that answers questions about the company's services, pricing, and approach.

Below is the company's knowledge base. Use it to answer user questions accurately. If the user asks something not covered by the knowledge base, politely say you don't have that information and suggest they ask about something you can help with.

KNOWLEDGE BASE:
${entries}

Guidelines:
- Be concise but thorough.
- Use markdown formatting for readability (bold, bullet points).
- Stay on-brand: practical, no hype, results-focused.
- If the user seems like a prospect, gently guide them toward booking a discovery call.`;
}

// ── API call to Gravity Engine ──

async function callGravityAPI(messages: { role: string; content: string }[]): Promise<string> {
  const response = await fetch(`${GRAVITY_API_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GRAVITY_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 800,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Gravity API error ${response.status}: ${text}`);
  }

  const data = await response.json() as {
    choices: { message: { content: string } }[];
  };
  return data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
}

// ── Chat response function ──

export async function getChatResponse(message: string): Promise<ChatMessage> {
  const sanitized = message.trim().slice(0, 500);
  
  if (USE_API) {
    // ── API mode ──
    await new Promise((r) => setTimeout(r, 300 + Math.random() * 500));

    const systemPrompt = buildSystemPrompt();
    try {
      const content = await callGravityAPI([
        { role: "system", content: systemPrompt },
        { role: "user", content: sanitized },
      ]);
      return {
        role: "assistant" as const,
        content,
        relatedQuestion: undefined,
      };
    } catch (err) {
      console.error("Gravity API error, falling back to knowledge base:", err);
    }
  }

  // ── Knowledge-base-only mode (fallback) ──
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 800));

  const result = findBestAnswer(sanitized);

  if (result) {
    return {
      role: "assistant" as const,
      content: result.answer,
      relatedQuestion: result.question,
    };
  }

  return {
    role: "assistant" as const,
    content:
      "I'm not sure I understood your question. I can help with questions about our services, pricing, approach, technology, and who we work with. Here are some things you can ask me:\n\n" +
      suggestedQuestions.map((q) => `• "${q}"`).join("\n") +
      "\n\nOr feel free to rephrase your question!",
    relatedQuestion: undefined,
  };
}