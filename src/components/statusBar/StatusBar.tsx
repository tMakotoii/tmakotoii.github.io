import { TitleWithDot } from '../titleWithDot/TitleWithDot';

export const StatusBar = () => {
    return (
        <div className="flex flex-row justify-between px-6 pb-10">
            <TitleWithDot title="Web Разработчик" className="" />
            <div className="flex flex-row gap-1.5 bg-available rounded-full py-1.5 pr-3 pl-2 items-center text-xs font-bold">
                <div className="available-dot w-1.5 h-1.5 rounded-full"></div>
                <p className="available-text">Ищу заказы</p>
            </div>
        </div>
    )
}