import React, {useEffect, useState} from 'react';

const useOverflowDetector = (ref: React.RefObject<HTMLDivElement>): string[] => {
    const [overflowingItems, setOverflowingItems] = useState<string[]>([]);

    useEffect(() => {
        const handleResize = () => {
            const navbar = ref.current;
            if (!navbar) return;

            const overflowingItemsArray: string[] = [];
            const navbarItems = navbar.children;
            for (let i = 0; i < navbarItems.length; i++) {
                const item = navbarItems[i] as HTMLElement;
                if (item.offsetLeft + item.offsetWidth > navbar.clientWidth) {
                    overflowingItemsArray.push(item.innerText);
                }
            }
            setOverflowingItems(overflowingItemsArray);
        };

        handleResize();

        const resizeListener = () => handleResize();
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [ref]);

    return overflowingItems;
}

export default useOverflowDetector;
