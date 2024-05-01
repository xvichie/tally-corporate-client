import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  interval?: number; // Optional, defaults to 3000ms
}

const MainCarousel: React.FC<CarouselProps> = ({ children, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [itemsPerView, setItemsPerView] = useState(3);

    const updateItemsPerView = () => {
        const matchMedia = window.matchMedia("(max-width: 768px)").matches;
        setItemsPerView(matchMedia ? 1 : 3);
    };

    useEffect(() => {
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);

        return () => {
            window.removeEventListener('resize', updateItemsPerView);
        };
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                const nextIndex = (currentIndex + itemsPerView) % children.length;
                setCurrentIndex(nextIndex);
            },
            interval
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, children.length, interval, itemsPerView]);

    return (
        <div className="relative overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
                {React.Children.map(children, (child, index) => (
                    <div className={`flex-none w-${itemsPerView === 1 ? 'full' : '1/3'}`} key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCarousel;
