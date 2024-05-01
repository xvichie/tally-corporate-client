import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  interval?: number; // Optional, defaults to 3000ms
}

const MainCarousel: React.FC<CarouselProps> = ({ children, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                // Calculate the next group index by adding 3, and wrap around using modulo
                const nextIndex = (currentIndex + 3) % children.length;
                setCurrentIndex(nextIndex);
            },
            interval
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, children.length, interval]);

    return (
        <div className="relative overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                {React.Children.map(children, (child, index) => (
                    <div className="flex-none w-1/3" key={index}> {/* Each child now takes up 1/3 of the width */}
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCarousel;
