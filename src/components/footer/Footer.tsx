import { LogoTelegram } from '@gravity-ui/icons';
import { TitleWithDot } from '../titleWithDot/TitleWithDot';
import { Github, Vk } from '../../icons';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-6 px-2 py-12 items-center">
                <div className="flex flex-col gap-3 items-center">
                    <h2 className="text-3xl font-bold text-center">Нужен сайт, который<br/>работает на результат?</h2>
                    <p>Индивидуальный подход к каждому проекту</p>
                </div>
                <a 
                href="https://t.me/shetichechi" 
                target='_blank' 
                rel="noopener noreferrer"
                className="shadow-hover bg-black text-white font-medium py-2 px-4 text-sm rounded-md flex flex-row gap-1 items-center"
                >
                    <LogoTelegram width={16} height={16} />
                    Обсудить проект
                </a>
            </div>
            <div className="flex flex-row justify-between bg-secondary rounded-xl p-6">
                <TitleWithDot title="Мои соц. сети" />
                <div className="flex flex-row gap-2.5">
                    <a href="https://t.me/shetichechi" target='_blank' rel="noopener noreferrer">
                       <div className="shadow-hover main-plate rounded-full w-10 h-10 flex items-center justify-center p-2">
                            <LogoTelegram width={20} height={20} />
                        </div>
                    </a>
                    <a href="https://vk.com/itfuckcircussome" target='_blank' rel="noopener noreferrer">
                        <div className="shadow-hover main-plate rounded-full w-10 h-10 flex items-center justify-center p-1.5">
                            <Vk />
                        </div>
                    </a>
                    <a href="https://github.com/tMakotoii" target='_blank' rel="noopener noreferrer">
                        <div className="shadow-hover main-plate rounded-full w-10 h-10 flex items-center justify-center p-2">
                            <Github />
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-1 bg-secondary rounded-xl py-10 px-6 items-center">
                <span className="text-sm">© {currentYear} Stepan Vasinovich</span>
                <span className="text-sm">Сайты • Дизайн • Продвижение</span>
            </div>
        </div>
    )
}