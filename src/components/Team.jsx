import { teamData } from "../assets/assets"
import Title from "./Title"
import GlowCard from "./ui/GlowCard"

const Team = () => {
    return (
        <div id="team" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 md:py-25 lg:py-28 lg:pb-10 text-gray-700 dark:text-white">
            <Title title="Meet Our Team" description="Our team of experts is dedicated to delivering exceptional results and providing top-notch services to help your business thrive in the digital world." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    teamData.map((team, index) => (
                        <GlowCard
                            key={index}
                            className="p-4 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
                            glowSize={140}
                        >
                            <div className="flex max-sm:flex-col items-center gap-5">
                                <img src={team.image} alt={team.name} className="w-14 h-14 rounded-full object-cover object-top" />
                                <div className="text-center sm:text-start">
                                    <h3 className="text-[15px] md:text-lg font-bold">{team.name}</h3>
                                    <p className="text-[13px] md:text-lg text-gray-500 dark:text-white/60">{team.title}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))
                }
            </div>
        </div>
    )
}
export default Team