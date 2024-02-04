import { getAvailableCategories } from "@/app/lib/blog";
import StackedList from "@/app/components/stacked-list";
import Breadcrumbs from "@/app/components/breadcrumbs";

const links = [
  { href: "/blog", name: "Blog", current: false },
  { href: "/blog/category", name: "Categories", current: true },
];

const CategoriesPage = () => {
  const categories = getAvailableCategories();

  return (
    <>
      <Breadcrumbs links={links} />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto container max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Blog Categories
              </h1>
            </div>
          </div>
          <StackedList items={categories} />
        </div>
      </section>
    </>
  );
};
export default CategoriesPage;
