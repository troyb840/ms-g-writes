import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-base leading-relaxed text-terracotta/85 md:text-lg">
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-display text-2xl text-olive md:text-3xl">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display text-xl text-olive md:text-2xl">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-coral pl-5 font-display text-xl italic text-terracotta/70">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-terracotta">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-coral underline underline-offset-2 transition-colors hover:text-coral-400"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-5 list-disc space-y-1.5 text-base leading-relaxed text-terracotta/85">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-5 list-decimal space-y-1.5 text-base leading-relaxed text-terracotta/85">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
};

type Props = {
  value: PortableTextBlock[];
  className?: string;
};

export function RichText({ value, className }: Props) {
  return (
    <div className={`space-y-5 ${className ?? ""}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}
