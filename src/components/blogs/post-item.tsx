import { Calendar } from "lucide-react";
import Link from "next/link";
// import { buttonVariants } from "./ui/button";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  author: string;
  readingTime?: { text: string };
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  readingTime,
}: PostItemProps) {
  return (
    <article className="flex flex-col border-border border-b py-4">
      <div>
        <h2 className="text-lg font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground text-gray-500">
        <Link href={"/" + slug}>{description}</Link>
      </div>
      <div className="flex justify-between items-center">
        <dl>
        <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center ">
            <time dateTime={date} className="text-sm text-gray-600 mt-1">
              {formatDate(date)}
            </time>
            <div className="mx-2">•</div>
            <span className="flex items-center text-sm text-gray-600 mt-1">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
              {readingTime?.text
                ? `(${readingTime.text.replace(" read", " read")})`
                : "1 min"}
            </span>
          </dd>
        </dl>
      </div>
    </article>
  );
}
