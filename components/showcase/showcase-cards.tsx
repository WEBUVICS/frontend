import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

type ShowCaseCardProps = {
  id: string;
  image?: string;
  title: string;
  lomba: string;
  tags?: string[];
};

export default function ShowCaseCards({
  id,
  image,
  title,
  lomba,
  tags = [],
}: ShowCaseCardProps) {
  return (
    <Link href={`/showcase/${id}`} className="block">
      <div className="w-full max-w-xs mx-auto">
        <Card
          className={
            "w-full p-4 rounded-2xl shadow-md bg-white flex flex-col gap-3 cursor-pointer " +
            // hover for desktop, active for touch
            "transform-gpu transition-transform duration-150 ease-out hover:scale-105 active:scale-95 hover:shadow-lg"
          }
        >
          <div className="w-full h-32 rounded-2xl overflow-hidden bg-gray-300 relative">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            )}
          </div>

          <div>
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="italic text-gray-600 text-sm truncate">{lomba}</p>
          </div>

          {tags.length > 0 && (
            <div className="text-xs text-gray-500 flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < tags.length - 1 && <span className="mx-1">|</span>}
                </span>
              ))}
            </div>
          )}
        </Card>
      </div>
    </Link>
  );
}
