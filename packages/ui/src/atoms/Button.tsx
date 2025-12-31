import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

export function Button({
    children,
    variant = "primary",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700",
        secondary:
            "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 active:bg-zinc-400",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {children}
        </button>
    );
}
