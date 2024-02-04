import React from "react";

export type ServiceOverview = {
  title: string;
  serviceName?: string;
  description: string;
  href: string;
  icon: React.ElementType;
  iconBgColor: string;
  iconTextColor: string;
};

export type BlogPostMetadata = {
  title: string;
  createdAt: string;
  updatedAt: string;
  summary: string;
  image?: string;
  category?: string;
  categorySlug?: string;
  author?: string;
  authorImage?: string;
  authorRole?: string;
  featured?: boolean;
};

export type BlogBreadcrumb = {
  name: string;
  href: string;
  current: boolean;
};

export type BlogPost = {
  metadata: BlogPostMetadata;
  slug: string;
  tweetIds?: string[];
  content: string;
  breadcrumbs: BlogBreadcrumb[];
};
