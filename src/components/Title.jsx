

const Title = ({ title, description }) => {
    return (
        <div>
            <h2 className="text-center text-[50px] sm:text-[60px] lg:text-[75px] font-medium text-gray-800 dark:text-white mb-2 md:mb-0 font-cookie">{title}</h2>
            <p className="max-w-xl text-lg text-center text-gray-500 dark:text-white/75 mb-6">{description}</p>
        </div>
    )
}

export default Title