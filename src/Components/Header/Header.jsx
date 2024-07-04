import { Button, Navbar } from 'flowbite-react';
import useTheme from '../../Hook/useTheme';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme(); // Example custom hook for theme

  return (
    <div  className="container mx-auto lg:w-[90%] p-3 border-b border-[#14222e] font-inter">
      <Navbar fluid rounded className="bg-transparent">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold font-Prata">A<span className="text-yellow-500">. </span>Fahim</span>
        </Navbar.Brand>
        <div  className="flex gap-5 md:order-2">
            <Link to="/Contract">  <Button>Contract</Button></Link>
        
          <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
            <span className="relative">
              <input onClick={toggleTheme} id="Toggle2" type="checkbox" className="hidden peer " />
              <div className="w-10 h-4 rounded-full shadow-xl bg-slate-700 dark:bg-gray-400 peer-checked:dark:bg-violet-600"></div>
              <div className={`${theme === 'light' ? 'bg-[#081927] text-gray-50' : 'bg-blue-100'} absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-600`}></div>
            </span>
          </label>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-xl">
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
          <NavLink to="/skills" activeClassName="active-link">Skills</NavLink>
          <NavLink to="/services" activeClassName="active-link">Services</NavLink>
          <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
          <NavLink to="/education" activeClassName="active-link">Education</NavLink>
          {/* <NavLink to="/education" activeClassName="active-link">Blog</NavLink> */}
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
