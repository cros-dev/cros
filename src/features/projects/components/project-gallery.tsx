import { Dialog } from "@base-ui/react/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import type { ProjectGalleryImage } from "~/features/projects/schemas/project";

export interface ProjectGalleryProps {
  projectTitle: string;
  images: readonly ProjectGalleryImage[];
}

interface GalleryLightboxContentProps {
  images: readonly ProjectGalleryImage[];
  startIndex: number;
}

const LIGHTBOX_BUTTON_CLASSES =
  "size-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60 focus-visible:ring-3 focus-visible:ring-white/50 focus-visible:outline-none";

function ChevronLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);
    return () => mediaQuery.removeEventListener("change", syncReducedMotion);
  }, []);

  return prefersReducedMotion;
}

function GalleryLightboxContent({
  images,
  startIndex,
}: GalleryLightboxContentProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex,
  });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    const handleSelect = () => {
      if (emblaApi.scrollSnapList().length === images.length) {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      }
    };
    emblaApi.on("select", handleSelect);
    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, images.length]);

  const handlePrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      return;
    }
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [emblaApi, images.length]);

  const handleNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [emblaApi, images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <RemoveScroll className="relative flex size-full items-center justify-center">
      <Dialog.Close
        aria-label="Fechar"
        className={`absolute top-4 right-4 z-10 inline-flex ${LIGHTBOX_BUTTON_CLASSES}`}
      >
        <CloseIcon />
      </Dialog.Close>

      <button
        type="button"
        aria-label="Imagem anterior"
        onClick={handlePrev}
        className={`absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 sm:left-5 sm:inline-flex ${LIGHTBOX_BUTTON_CLASSES}`}
      >
        <ChevronLeftIcon />
      </button>

      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex items-center">
          {images.map((image) => (
            <div
              key={image.src}
              className="flex min-w-0 shrink-0 grow-0 basis-full items-center justify-center px-0 sm:px-20"
            >
              <div className="max-w-full overflow-hidden rounded-md border-[0.5px] border-white/15 bg-black/20">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  decoding="async"
                  className="block h-auto max-h-[80svh] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Próxima imagem"
        onClick={handleNext}
        className={`absolute top-1/2 right-3 z-10 hidden -translate-y-1/2 sm:right-5 sm:inline-flex ${LIGHTBOX_BUTTON_CLASSES}`}
      >
        <ChevronRightIcon />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex w-max -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={handlePrev}
          className={`inline-flex sm:hidden ${LIGHTBOX_BUTTON_CLASSES}`}
        >
          <ChevronLeftIcon />
        </button>
        <div
          aria-live="polite"
          className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-caption font-medium whitespace-nowrap text-white"
        >
          {`${currentIndex + 1} / ${images.length}`}
        </div>
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={handleNext}
          className={`inline-flex sm:hidden ${LIGHTBOX_BUTTON_CLASSES}`}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </RemoveScroll>
  );
}

/** Galeria de miniaturas em rolagem contínua com visualização ampliada em diálogo modal. */
export function ProjectGallery({ projectTitle, images }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isOpen = openIndex !== null;
  const total = images.length;

  const renderThumbnail = (
    image: ProjectGalleryImage,
    index: number,
    isDuplicate: boolean,
  ) => (
    <button
      key={isDuplicate ? `copy-${image.src}` : image.src}
      type="button"
      aria-label={`Ampliar imagem ${index + 1} de ${total}`}
      aria-hidden={isDuplicate ? "true" : undefined}
      tabIndex={isDuplicate ? -1 : undefined}
      onClick={() => setOpenIndex(index)}
      className="h-28 shrink-0 cursor-pointer overflow-hidden rounded-md border-[0.5px] border-line bg-muted/30 transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block h-full w-auto max-w-none object-cover"
      />
    </button>
  );

  return (
    <div className="mt-4 overflow-hidden">
      <div
        data-paused={isOpen ? "true" : undefined}
        style={
          prefersReducedMotion
            ? undefined
            : { animationDuration: `${total * 4}s` }
        }
        className={
          prefersReducedMotion
            ? "flex gap-3 overflow-x-auto"
            : "project-gallery-track flex w-max gap-3 pr-3"
        }
      >
        {images.map((image, index) => renderThumbnail(image, index, false))}
        {!prefersReducedMotion &&
          images.map((image, index) => renderThumbnail(image, index, true))}
      </div>

      <Dialog.Root
        open={isOpen}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setOpenIndex(null);
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
          <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none sm:p-6">
            <Dialog.Title className="sr-only">
              {`Imagens — ${projectTitle}`}
            </Dialog.Title>
            {openIndex !== null && (
              <GalleryLightboxContent images={images} startIndex={openIndex} />
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
