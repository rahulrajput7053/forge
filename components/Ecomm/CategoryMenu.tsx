import React, { useRef, useState, useEffect } from 'react';

interface CategoryMenuProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, activeCategory, onSelectCategory }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const menu = menuRef.current;
        if (!menu) return;

        const onMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            menu.classList.add('cursor-grabbing');
            setStartX(e.pageX - menu.offsetLeft);
            setScrollLeft(menu.scrollLeft);
        };

        const onMouseLeaveOrUp = () => {
            setIsDragging(false);
            menu.classList.remove('cursor-grabbing');
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - menu.offsetLeft;
            const walk = (x - startX) * 2; // a multiplier to make dragging faster
            menu.scrollLeft = scrollLeft - walk;
        };
        
        menu.addEventListener('mousedown', onMouseDown);
        menu.addEventListener('mouseleave', onMouseLeaveOrUp);
        menu.addEventListener('mouseup', onMouseLeaveOrUp);
        menu.addEventListener('mousemove', onMouseMove);

        return () => {
            menu.removeEventListener('mousedown', onMouseDown);
            menu.removeEventListener('mouseleave', onMouseLeaveOrUp);
            menu.removeEventListener('mouseup', onMouseLeaveOrUp);
            menu.removeEventListener('mousemove', onMouseMove);
        };

    }, [isDragging, startX, scrollLeft]);


    return (
        <div 
            ref={menuRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar whitespace-nowrap cursor-pointer select-none border-b border-border-color pb-2"
        >
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                        activeCategory === category
                            ? 'bg-accent text-white'
                            : 'bg-component-bg text-text-secondary hover:bg-border-color hover:text-text-primary'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryMenu;
