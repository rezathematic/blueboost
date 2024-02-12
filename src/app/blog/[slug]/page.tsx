import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import Breadcrumbs from "@/app/components/breadcrumbs";
import { getBlogPosts } from "@/app/lib/blog";
import dayjs from "dayjs";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    updatedAt: modifiedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://blueboost.co${image}`
    : `https://blueboost.co/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      modifiedTime,
      url: `https://blueboost.co/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs links={post.breadcrumbs} />
      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto container max-w-7xl px-6 md:px-6 lg:px-8">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.metadata.title,
                datePublished: post.metadata.createdAt,
                dateModified: post.metadata.updatedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `https://blueboost.co${post.metadata.image}`
                  : `https://blueboost.co/og?title=${post.metadata.title}`,
                url: `https://blueboost.co/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: "Lee Robinson",
                },
              }),
            }}
          />
          <h1 className="title font-medium text-4xl md:text-6xl tracking-tighter md:leading-normal">
            {post.metadata.title}
          </h1>
          <div className="mt-4 mb-24 text-sm max-w-[650px]">
            <Suspense fallback={<p className="h-5" />}>
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
                    <span className="absolute inset-0" />
                    By: {post.metadata.author}
                  </p>
                  <p className="text-gray-600">
                    last updated on:{" "}
                    {dayjs(post.metadata.updatedAt).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
            </Suspense>
          </div>
          <article className="prose mx-auto prose-lg prose-quoteless prose-neutral">
            <CustomMDX source={post.content} />
          </article>
        </div>
      </section>
    </>
  );
}
