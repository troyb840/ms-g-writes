// Lightweight rich-text renderer — no Sanity/PortableText dependency.
// Accepts the PortableText block array shape so it's a drop-in replacement
// when Sanity is wired up later.

type Block = {
  _type?: string;
  style?: string;
  children?: Array<{ text?: string; marks?: string[] }>;
};

type Props = {
  value: Block[] | null | undefined;
  className?: string;
};

function renderChildren(children: Block["children"]) {
  return (children ?? []).map((span, i) => {
    const text = span.text ?? "";
    const marks = span.marks ?? [];
    let node: React.ReactNode = text;
    if (marks.includes("strong")) node = <strong key={i} className="font-semibold text-terracotta">{node}</strong>;
    if (marks.includes("em")) node = <em key={i} className="italic">{node}</em>;
    return node;
  });
}

export function RichText({ value, className }: Props) {
  if (!value?.length) return null;

  return (
    <div className={`space-y-5 ${className ?? ""}`}>
      {value.map((block, i) => {
        const children = renderChildren(block.children);
        switch (block.style) {
          case "h2":
            return <h2 key={i} className="font-display text-2xl text-olive md:text-3xl">{children}</h2>;
          case "h3":
            return <h3 key={i} className="font-display text-xl text-olive md:text-2xl">{children}</h3>;
          case "blockquote":
            return <blockquote key={i} className="border-l-4 border-coral pl-5 font-display text-xl italic text-terracotta/70">{children}</blockquote>;
          default:
            return <p key={i} className="text-base leading-relaxed text-terracotta/85 md:text-lg">{children}</p>;
        }
      })}
    </div>
  );
}
