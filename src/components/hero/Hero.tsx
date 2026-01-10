import memoji from '../../assets/memoji.png'
import { LogoTelegram } from '@gravity-ui/icons';

export const Hero = () => {
    return (
        <div className="flex flex-col-reverse items-center gap-3
                        px-6 pb-10
                        md:flex-row md:justify-between md:gap-4 "
            >
            <div className="flex flex-col gap-6 justify-between">
                <div className="flex flex-col gap-3 md:gap-2 text-left w-80 md:w-70">
                    <h1 className="text-3xl text-center md:text-left md:text-2xl font-bold flex flex-row gap-1 items-center justify-center md:justify-start">
                        Степан Васинович
                    </h1>
                    <p className="text-lg text-center md:text-left">Разработка и продвижение сайтов под ключ</p>
                </div>
                <div className="flex flex-row gap-2 justify-center md:justify-start">
                    <a 
                    href="https://t.me/shetichechi" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="shadow-hover bg-black text-white font-medium py-2 px-4 text-sm rounded-md flex flex-row gap-1 items-center"
                    >
                        <LogoTelegram width={16} height={16} />
                        Связаться
                    </a>         
                </div>
            </div>
            <div className="rounded-full w-40 h-40 avatar-outline mb-4 md:mb-0">
                <img src={memoji} className='w-full h-full rounded-full object-cover overflow-hidden' />
            </div>
        </div>
    )
}