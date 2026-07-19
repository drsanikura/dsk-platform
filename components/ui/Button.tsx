type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {

  const styles =
    variant === "primary"
      ? "bg-emerald-400 text-slate-950"
      : "border border-slate-400 text-white";

  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold transition ${styles}`}
    >
      {children}
    </button>
  );
}