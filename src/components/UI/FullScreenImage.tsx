import { useEffect } from "react";

type FullscreenImageProps = {
  isOpen: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function FullscreenImage({
  isOpen,
  src,
  alt,
  onClose,
}: FullscreenImageProps) {
  // Close on Escape and prevent background scrolling while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // stops page scroll behind overlay

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Don't render anything if closed
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90"
      onClick={onClose} // clicking the background closes
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation(); // stops the background click handler
          onClose();
        }}
        aria-label="Close image"
      >
        ✕
      </button>

      {/* Image */}
      <div
        className="flex h-full w-full items-center justify-center p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt ?? ""}
          className="max-h-[90vh] max-w-[95vw] object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
