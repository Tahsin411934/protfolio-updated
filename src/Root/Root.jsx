import { Outlet } from "react-router-dom";
import useTheme from "../Hook/useTheme";
import Header from "../Components/Header/Header";


const Root = () => {
    const {theme}=useTheme()
    return (
        <div className={`${theme === 'light' ? 'bg-blue-100' : 'bg-[#081927] text-gray-300'} m-0 p-0 h-full`}>
          <Header></Header>
           <Outlet></Outlet> 
        </div>
    );
};
//bg-[#081927]
export default Root;