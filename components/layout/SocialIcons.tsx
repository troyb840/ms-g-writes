import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

type Socials = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  pinterest?: string;
  linkedin?: string;
};

type IconProps = { size?: number; className?: string };
type IconComponent = React.ComponentType<IconProps>;

// TikTok and Pinterest aren't shipped in lucide-react — inline SVGs (simpleicons.org paths)
function TikTokIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.77 20.75a6.33 6.33 0 0 0 10.05-5.09V8.69a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1-.09z" />
    </svg>
  );
}

function PinterestIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.747 2.853c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C24.003 5.367 18.628.002 12.017.002z" />
    </svg>
  );
}

const ITEMS: Array<{
  key: keyof Socials;
  label: string;
  Icon: IconComponent;
}> = [
  { key: "instagram", label: "Instagram", Icon: Instagram as IconComponent },
  { key: "facebook", label: "Facebook", Icon: Facebook as IconComponent },
  { key: "tiktok", label: "TikTok", Icon: TikTokIcon },
  { key: "youtube", label: "YouTube", Icon: Youtube as IconComponent },
  { key: "pinterest", label: "Pinterest", Icon: PinterestIcon },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin as IconComponent },
];

type Props = {
  socials?: Socials;
  variant?: "muted" | "light";
  size?: number;
};

export function SocialIcons({ socials, variant = "muted", size = 18 }: Props) {
  if (!socials) return null;

  const hasAny = ITEMS.some(({ key }) => socials[key]);
  if (!hasAny) return null;

  const linkClass =
    variant === "light"
      ? "text-cream/70 hover:text-coral-200"
      : "text-olive hover:text-coral-400";

  return (
    <ul className="flex items-center gap-4">
      {ITEMS.map(({ key, label, Icon }) => {
        const href = socials[key];
        if (!href) return null;
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`inline-flex items-center justify-center transition-colors ${linkClass}`}
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
