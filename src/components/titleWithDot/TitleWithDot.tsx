export const TitleWithDot = ({ title, className }: {title: string, className?: string}) => {
    return (
        <div className={`flex flex-row gap-2 items-center` + (className ? ' ' + className : '')}>
            <div className="dot-marker w-2 h-2 rounded-full"></div>
            <h3 className="text-left text-xl">{title}</h3>
        </div>
    )
}
