

const Project = ({ project }) => {
    
    return (
        <div className="pb-10 ">
            <div data-aos="fade-right" className="flex container mx-auto  flex-col max-w-xl pb-5 p-6 space-y-6 overflow-hidden rounded-lg shadow-md border border-gray-700 bg-transparent">

                <div>
                    <img src={project.image} alt="" className="object-cover hover:scale-95 transition-transform duration-300 ease-in-out w-full mb-4 h-60 sm:h-96 " />
                    <h2 className="mb-1 text-xl font-semibold">{project.projectName}</h2>
                    <p className="text-sm dark:text-gray-600">{project.details}</p>
                </div>
                <div className="w-[40%] mx-auto lg:grid grid-cols-3 text-[#4AA9C5] ">
                <a  className="underline hover:text-[#4a4080]" href={project.liveLink}> Live  </a>
                <a className="underline hover:text-[#4a4080]" href={project.clientSite}> Client</a>
                <a className="underline hover:text-[#4a4080]" href={project.serverSiteLink}> Server</a>
                </div>
            </div>
        </div>
    );
};

export default Project;