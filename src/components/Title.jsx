import { motion } from 'framer-motion';

const Title = ({ title, description }) => {
    const letters = title.split("");

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.03,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className="relative">
            <motion.h2
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-wrap justify-center text-center text-[50px] sm:text-[60px] lg:text-[75px] font-medium text-gray-800 dark:text-white mb-2 md:mb-0 font-cookie"
            >
                {letters.map((char, index) => (
                    <motion.span key={index} variants={letter}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: letters.length * 0.03 + 0.2, ease: 'easeOut' }}
                className="h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-4 rounded-full"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: letters.length * 0.03 + 0.35, ease: 'easeOut' }}
                className="max-w-xl text-lg text-center text-gray-500 dark:text-white/75 mb-6 mx-auto"
            >
                {description}
            </motion.p>
        </div>
    )
}
export default Title