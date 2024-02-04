import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPostsByCategorySlug } from "@/app/lib/blog";
import StackedList from "@/app/components/stacked-list";
import Breadcrumbs from "@/app/components/breadcrumbs";

const links = [
  { href: "/blog", name: "Blog", current: false },
  { href: "/blog/category", name: "Categories", current: false },
];

const CategoryPage = ({ params }) => {
  let posts = getPostsByCategorySlug(params.slug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        links={[
          ...links,
          {
            href: `/blog/category/${params.slug}`,
            name: posts[0].categoryName || params.slug,
            current: true,
          },
        ]}
      />
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto container max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <Suspense fallback={<p className="h-8">Loading...</p>}>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Blog Category: {posts[0].categoryName}
                </h1>
              </Suspense>
            </div>
          </div>
          <StackedList items={posts} />
        </div>
      </section>
    </>
  );
};
export default CategoryPage;
