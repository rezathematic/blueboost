import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogPost } from "@/app/lib/types";

export type PostsGridProps = {
  posts: BlogPost[];
  isBlog?: boolean | false;
};

export const TopPostsGrid: React.FC<PostsGridProps> = ({ posts, isBlog }) => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto container max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {isBlog ? (
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blog
            </h1>
          ) : (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Resources
            </h2>
          )}
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get the latest scoop on search trends and tactics straight from our
            SEO experts.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.metadata.updatedAt}
                  className="text-gray-500"
                >
                  {post.metadata.updatedAt}
                </time>
                <Link
                  href={`/blog/category/${post.metadata.categorySlug}` ?? "#"}
                  className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600  hover:bg-gray-200"
                >
                  {post.metadata.category}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-800 group-hover:text-gray-900 group-hover:underline">
                  <Link href={`/blog/${post?.slug}` ?? "#"}>
                    <span className="absolute inset-0" />
                    {post.metadata.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.metadata.summary}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  width={40}
                  height={40}
                  src={post.metadata.authorImage ?? "/placeholder.jpg"}
                  alt={post.metadata.author ?? "Reza Baharvand"}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={`/blog/${post?.slug}` ?? "#"}>
                      <span className="absolute inset-0" />
                      {post.metadata.author}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.metadata.authorRole}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
