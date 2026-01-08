import { House, Person, Picture, LogoTelegram } from '@gravity-ui/icons';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const NAV_ITEM_WIDTH = 40;
const NAV_ITEM_GAP = 16;
const ICON_SIZE = 24;

interface NavItem {
    path: string;
    icon: React.ComponentType<{ width: number; height: number; className?: string}>;
    label: string;
}

export const Header = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const navContainerRef = useRef<HTMLDivElement | null>(null);

    const navItems: NavItem[] = [
        {path: '/', icon: House, label: 'Главная'},
        {path: '/about', icon: Person, label: 'О себе'},
        {path: '/projects', icon: Picture, label: 'Работы'},
    ]

    const location = useLocation().pathname

    const activeIndex = navItems.findIndex(item => item.path === location);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!navContainerRef.current) return;

        const containerRect = navContainerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;

        const totalItemWidth = NAV_ITEM_WIDTH + NAV_ITEM_GAP;
        const index = Math.min(
            Math.floor(mouseX / totalItemWidth),
            navItems.length - 1
        )

        if (index >= 0 && index < navItems.length) {
            setHoverIndex(index);
        }
    }

    const handleMouseLeave = () => {
        setHoverIndex(null);
    }

    const getCircleStyle = (): React.CSSProperties => {
        const index = hoverIndex !== null ? hoverIndex : activeIndex;
        
        const totalItemWidth = NAV_ITEM_WIDTH + NAV_ITEM_GAP;
        const left = index * totalItemWidth;
        
        return {
            left: `${left}px`,
            width: `${NAV_ITEM_WIDTH}px`,
            height: `${NAV_ITEM_WIDTH}px`,
        };
    }
    
    return (
        <header className="main-plate flex flex-row items-center justify-between px-4 sticky top-4 mb-8 h-16 z-50">
            <div
                ref={navContainerRef} 
                className="flex flex-row gap-4 items-center relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div 
                    className="absolute icon-active-select rounded-full transition-all duration-450 ease-out z-0"
                    style={getCircleStyle()}
                />
                {navItems.map((item, index) => {
                    const IconComponent = item.icon
                    const isItemActive = index === activeIndex;

                    return (
                        <Link 
                            key={index} 
                            to={item.path}
                            className="relative z-10 p-2 rounded-full transition-colors"
                            >
                                <IconComponent 
                                    width={ICON_SIZE} 
                                    height={ICON_SIZE} 
                                    className={
                                        isItemActive 
                                            ? "icon-active" 
                                            : "icon-inactive"
                                    }/>
                        </Link>
                    )
                })}
            </div>
                <a 
                href="https://t.me/shetichechi" 
                target='_blank' 
                rel="noopener noreferrer"
                className="shadow-hover bg-black text-white font-medium py-2 px-4 text-sm rounded-md flex flex-row gap-1 items-center"
                >
                    <LogoTelegram width={16} height={16} />
                    Связаться
                </a>
        </header>
    )
}