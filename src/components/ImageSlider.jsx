import React from "react";

const sliderImages = [
    { src: "/profilepic/pic1.jpeg", alt: "Receiving academic recognition / certificate - Warwick Business School" },
    { src: "/profilepic/pic2.jpeg", alt: "MSc Management Conference 2025 Presentation – Warwick Business School" },
    { src: "/profilepic/pic3.jpeg", alt: "Conference Presentation – Warwick Business School 2025" },
    { src: "/profilepic/pic6.jpeg", alt: "SDA Bocconi Luxury Management Certificate – Milan" },
];

// Card width + gap must stay in sync with CSS below
const CARD_W_MOBILE = 320;   // px  (w-[320px])
const CARD_W_TABLET = 400;   // px  (md:w-[400px])
const CARD_W_DESKTOP = 460;  // px  (lg:w-[460px])
const GAP = 24;              // px  (gap-6 = 1.5rem = 24px)

const ImageSlider = () => {
    // Triple the set so the track is always wider than any viewport
    const allImages = [...sliderImages, ...sliderImages, ...sliderImages];

    // One "set" width = N * card + (N) * gap  (gap after every card including last)
    const n = sliderImages.length;
    const setWidthMobile = n * (CARD_W_MOBILE + GAP);
    const setWidthTablet = n * (CARD_W_TABLET + GAP);
    const setWidthDesktop = n * (CARD_W_DESKTOP + GAP);

    return (
        <section className="py-16 bg-slate-50/30 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-slate-800">
                    Moments & Milestones
                </h3>
                <p className="text-slate-500 font-light mt-3 max-w-xl mx-auto">
                    Conference presentations, academic recognition, and global exposure.
                </p>
            </div>

            {/* Slider Track */}
            <div className="relative group">
                <div className="slider-track flex">
                    {allImages.map((img, index) => (
                        <div
                            key={index}
                            className="slider-card flex-shrink-0 w-[320px] md:w-[400px] lg:w-[460px] aspect-[3/2] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            style={{ marginRight: `${GAP}px` }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/90 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/90 to-transparent pointer-events-none z-10" />
            </div>

            {/*
              We slide by exactly 1 set-width so the second copy replaces the first
              seamlessly. Three copies guarantee no empty space on any screen size.
              We use CSS custom properties + media queries to match card widths.
            */}
            <style>{`
                .slider-track {
                    --set-width: ${setWidthMobile}px;
                    animation: slider-scroll 20s linear infinite;
                    will-change: transform;
                }
                .slider-track:hover {
                    animation-play-state: paused;
                }
                @media (min-width: 768px) {
                    .slider-track {
                        --set-width: ${setWidthTablet}px;
                    }
                }
                @media (min-width: 1024px) {
                    .slider-track {
                        --set-width: ${setWidthDesktop}px;
                    }
                }
                @keyframes slider-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(var(--set-width) * -1));
                    }
                }
            `}</style>
        </section>
    );
};

export default ImageSlider;
