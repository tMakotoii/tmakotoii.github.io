import { TitleWithDot } from "../../components/titleWithDot/TitleWithDot"
import about from '../../assets/about.jpg'
import { Footer } from "../../components/footer/Footer"
import { ProjectsList } from "../../components/projects/ProjectsList"

export const About = () => {
    return (
        <div className="main-plate px-2 pb-2 pt-2" >
            <div className="py-6 px-6">
                <TitleWithDot title="О себе" className="pb-10" />
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold">Обо мне</h1>
                        <p>Я - Степан Васинович, веб-разработчик с опытом более 3 лет. Моя специализация - полный цикл создания цифровых продуктов: от прототипирования и дизайна до программирования, тестирования и базового продвижения.</p>
                    </div>
                    <div className="shadow-[0_5px_10px_#0a0a0a0f] bg-white border-[#e6e6e6] border p-4 rounded-xl">
                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                            <img src={about} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold">Опыт и экспертиза</h2>
                        <p className="text-lg">Свой профессиональный подход я сформировал, работая в крупных российских IT-компаниях - Яндекс и СКБ Контур, где перенял высокие стандарты качества и работы с высоконагруженными проектами. Профильное образование по направлению «Бизнес-информатика», полученное в одном из ведущих вузов страны (УрФУ), позволяет мне создавать не просто технические продукты, а эффективные бизнес-решения, где каждая технологическая деталь оправдана с точки зрения логики и цели проекта.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold">Принципы работы</h2>
                        <p className="text-lg">Для меня важна абсолютная прозрачность в работе с клиентом. Я строго соблюдаю оговоренные сроки, а все этапы и технические решения объясняю простыми и понятными словами, без сложного жаргона. Моя главная цель - создать для вас рабочий, качественный инструмент, который будет решать поставленные задачи и приносить реальную пользу.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold">Портфолио</h2>
                        <p className="text-lg">Лучше всего о моих компетенциях говорят реализованные проекты. Ниже - часть из них, где наглядно видно, как технические решения превращаются в рабочие инструменты для бизнеса и какие результаты приносят.
                        </p>
                    </div>
                </div>
            </div>
            <ProjectsList isStatusBar={false} />
            <Footer />
        </div>
    )
}