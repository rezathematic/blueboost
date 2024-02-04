import { Suspense } from "react";
import Link from "next/link";

interface StackedListProps {
  items: { name: string; slug: string }[];
}

const StackedList: React.FC<StackedListProps> = ({ items }) => (
  <ul role="list" className="divide-y divide-gray-200 max-w-xl">
    {items.map((item, i) => (
      <li key={i} className="relative flex justify-between gap-x-6 py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Link href={item.slug}>{item.name}</Link>
        </Suspense>
      </li>
    ))}
  </ul>
);

export default StackedList;
