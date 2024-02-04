import { getBlogPosts } from "@/app/lib/blog";
import StrategyCTA from "@/app/components/strategy-cta";
import { TopPostsGrid } from "@/app/components/posts-grid";
import Breadcrumbs from "@/app/components/breadcrumbs";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

const links = [{ href: "/blog", name: "Blog", current: true }];

export default function Blog() {
  let allBlogPosts = getBlogPosts();

  return (
    <>
      <Breadcrumbs links={links} />
      <TopPostsGrid posts={allBlogPosts} />
      <StrategyCTA />
    </>
  );
}
