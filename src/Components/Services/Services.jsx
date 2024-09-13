import { useQuery } from "@tanstack/react-query";
import useTheme from "../../Hook/useTheme";
import axios from "axios";
import Service from "./Service";


const Services = () => {
    const { theme } = useTheme()
    const { data, isLoading, error } = useQuery({
        queryKey: ['Service'],
        queryFn: async () => {
            const res = await axios.get('Services.json')
            return res.data;
        }
    })
   
    return (
        <div id="services"  className={`font-inter ${theme === 'light' ? 'bg-gray-200' : 'bg-[#111828] text-gray-300'}  m-0 pb-10 h-full`}>
            <div className="text-3xl font-bold flex items-center justify-center p-10">
                <h1 className="">My Services</h1>
            </div>
            <div className="w-[85%] mx-auto lg:grid grid-cols-3 items-center gap-5">
            {
                data?.map(service=><Service key={service.title} service={service}></Service>)
            }
            </div>
            

        </div>
    );
};

export default Services;