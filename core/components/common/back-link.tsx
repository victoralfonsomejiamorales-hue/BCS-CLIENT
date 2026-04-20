import Link from "next/link";

interface BackLinkProps {
  href: string;
  label?: string;
}

const BackLink = ({ href, label = "Volver" }: Readonly<BackLinkProps>) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      {label}
    </Link>
  );
};

export default BackLink;
