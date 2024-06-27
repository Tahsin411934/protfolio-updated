import useTheme from "../../Hook/useTheme";


const Footer = () => {
    const {theme}= useTheme()
    return (
        <div className={`${theme === 'light' ? 'bg-blue-100' : 'bg-[#081927] text-gray-300'} m-0 h-full pb-0`}>
             <div className="text-lg font-normal flex items-center justify-center p-10">
                <h1 className="">© 2024 All Rights Reserved. Abrar Fahim™ is a registered trademark.</h1>
            </div>
        </div>
    );
};

export default Footer;