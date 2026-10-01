type ButtonProps = {
  variant?: "primary" | "secondary" | "cta";
  text: string;
  href: string;
};

export default function Button({
  variant = "primary",
  text,
  href,
}: ButtonProps) {
  const variants = {
    cta: "bg-secondary text-black font-semibold hover:bg-secondary hover:text-black",
    primary: "bg-black text-white hover:bg-secondary hover:text-black",
    secondary:
      "bg-background text-black border-2 hover:border-secondary hover:text-secondary",
  };

  return (
    <a
      className={`px-5 py-2.25 w-fit rounded-full capitalize border-2 border-black ${variants[variant]}`}
      href={href}
    >
      {text}
    </a>
  );
}
