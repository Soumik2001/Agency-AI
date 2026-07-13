import assets from "../assets/assets"
import ServiceCard from "./ServiceCard"
import Title from "./Title"


const Services = () => {

    const serviceData = [{
        title: "Web Development",
        description: "We offer top-notch web development services to create responsive and user-friendly websites that meet your business needs.",
        icon: assets.ads_icon
    },
    {
        title: "SEO Optimization",
        description: "We offer top-notch SEO optimization services to improve your website's visibility and ranking on search engines.",
        icon: assets.content_icon
    },
    {
        title: "Content Marketing",
        description: "We offer top-notch content marketing services to help you engage your audience and drive traffic to your website.",
        icon: assets.marketing_icon
    },
    {
        title: "Social Media Marketing",
        description: "We offer top-notch social media marketing services to help you connect with your audience and build your brand.",
        icon: assets.social_icon
    }

    ]

    return (
        <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 md:py-25 lg:py-28 lg:pb-10 text-gray-700 dark:text-white">
            <img src={assets.bgImage2} alt="Bg Image" className=" absolute -top-70 -left-70 -z-1 dark:hidden" />

            <Title title="Our Services" description="Discover the range of services we offer to help your business grow and succeed in the digital landscape." />
            <div className='flex flex-col gap-2 md:grid grid-cols-2'>
                {serviceData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Services