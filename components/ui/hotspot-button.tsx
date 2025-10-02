"use client";

interface HotspotButtonProps {
    label: string;
    left: string;
    top: string;
    description: string;
    onClick: () => void;
    isGray?: boolean;
    variant?: "circle" | "rounded" | "rectangle" | "square" | "adjust"; // ✅ add variant
}

export default function HotspotButton({
    label,
    left,
    top,
    description,
    onClick,
    isGray = false,
    variant = "square", // default square
    
}: HotspotButtonProps) {
    return (
        <button
            className={`absolute flex items-center justify-center text-[0.55rem] sm:text-xs text-white shadow-lg border border-green-400 font-bold ${isGray ? 'bg-gray-500' : 'bg-green-500/90'}`}
            style={{
    left,
    top,
    transform: "translate(-50%, -50%)",

    // Set width/height per variant
    width: variant === "circle" ? "5.6%"
           : variant === "rectangle" ? "6.4%"
           : variant === "rounded" ? "5.7%"
           : variant === "adjust" ? "6%"
           : "4.6%",   // default square
           

    height: variant === "circle" ? "7.6%"
           : variant === "rectangle" ? "3.4%"
           : variant === "rounded" ? "5.6%"
           : variant === "adjust" ? "7.5%"
           : "5.8%",

    // Only apply aspect ratio for circle, square, rounded
    aspectRatio: variant === "rectangle" ? undefined : "1",

    borderRadius: variant === "circle" ? "50%"
                 : variant === "rectangle" ? "4px"
                 : variant === "rounded" ? "5px"
                 : variant === "adjust" ? "2px"
                 : "%",

    backgroundColor: isGray ? '#6b7280' : 'transparent',
    opacity: 0.6,
    zIndex: 20,
}}

            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            title={description}
            aria-label={label}
        >
            <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                {label}
            </span>
        </button>
    );
}
