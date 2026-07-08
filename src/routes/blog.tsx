import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { blogPosts, type BlogPost } from "~/lib/blog";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      {
        title: "Blog — Poole Intelligence Group",
      },
      {
        name: "description",
        content:
          "Practical AI insights for SMB companies. Cut through the noise with actionable advice on AI adoption, tools, and strategy.",
      },
    ],
  }),
});

function Blog() {
  // Extract slug from URL search params manually to avoid redirect
  const search = useSearch({ from: Route.id as any, strict: false });
  const slug = (search as any)?.slug || "";

  const post = slug ? blogPosts.find((p) => p.slug === slug) : null;

  if (post) {
    return <BlogPostDetail post={post} />;
  }

  return <BlogListing />;
}

function BlogListing() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-indigo-50/30 to-white pt-24 pb-24 dark:from-gray-950 dark:via-indigo-950/20 dark:to-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-indigo-950/50 dark:text-[#6B8DBF]">
            Insights
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Practical AI{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Insights
            </span>
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            No hype. No buzzwords. Just practical advice on AI adoption,
            strategy, and tools — written for SMB leaders.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog"
              search={{ slug: post.slug }}
              className="group block"
            >
              <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-[#C0C0C0] hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="text-gray-300 dark:text-gray-700">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-gray-900 transition group-hover:text-[#1B2A4A] dark:text-gray-100 dark:group-hover:text-[#6B8DBF]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1B2A4A] transition group-hover:gap-2 dark:text-[#6B8DBF]">
                  Read more &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPostDetail({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-indigo-50/30 to-white pt-24 pb-24 dark:from-gray-950 dark:via-indigo-950/20 dark:to-gray-950">
      <article className="mx-auto max-w-3xl px-6">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          &larr; Back to all posts
        </Link>

        <header>
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{post.date}</time>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="pt-4 text-xl font-bold text-gray-900 dark:text-gray-100"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return <p key={i}>{block}</p>;
          })}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="rounded-2xl bg-[#F5F7FA] p-8 text-center dark:bg-[#0A1628]/50">
            <p className="text-lg font-semibold text-[#1B2A4A] dark:text-[#6B8DBF]">
              Ready to put these insights into action?
            </p>
            <p className="mt-2 text-sm text-[#1B2A4A] dark:text-[#6B8DBF]">
              Let's talk about what this means for your business.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block rounded-xl bg-[#1B2A4A] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-[#2A3A5A]"
            >
              Schedule a Free Discovery Call
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}