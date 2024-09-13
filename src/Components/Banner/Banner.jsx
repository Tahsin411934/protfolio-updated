import  { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyComponent from './MyComponent';
import bgImage from '../../../public/background.jpg';
import useTheme from '../../Hook/useTheme';
import { Button } from 'flowbite-react';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti';

const Banner = () => {
  const { theme } = useTheme();
  const [aosInitialized, setAosInitialized] = useState(false);

  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      });
      setAosInitialized(true);
    }
  }, [aosInitialized]);

  useEffect(() => {
   
    AOS.refresh();
  }, [theme]);

  return (
    <div className={`${theme === 'light' ? 'bg-blue-100' : 'bg-[#081927] text-gray-300'} m-0 h-full pb-10`}>
      <div className="lg:grid grid-cols-2 pt-16 mx-auto px-10 lg:w-[85%] items-center gap-0">
        <div data-aos="fade-right" className="mb-10">
          <h2 className="text-2xl mb-1 font-bold">Hello, It's Me</h2>
          <h1 className="lg:text-5xl text-4xl mb-1 font-bold">Abrar Fahim</h1>
          <MyComponent text="And I'm a " />
          <h1 className="pr-5 mt-6 font-semibold text-sm">
            Passionate MERN Stack Developer crafting seamless web solutions for enhanced user experiences and scalability.
          </h1>
          <div  className={`${theme === 'light' ? 'bg-blue-100 text-[#155E75]' : 'bg-[#081927] text-[#61dafb]'} flex items-center gap-4 py-4`}>
            <a href="https://www.facebook.com/tazin.tanim.7/"><PiFacebookLogoBold size={30} /></a>
            <a href="https://www.linkedin.com/in/abrar-fahim-af/"> <TiSocialLinkedinCircular size={36} /></a>
            <a href="https://github.com/Tahsin411934"><TiSocialGithubCircular size={36} /></a>
            <a href=""><TiSocialTwitterCircular size={36} /></a>
            
           
            
            
          </div>
          <Button className="font-semibold"><a href="https://drive.google.com/file/d/1XE_1jJgCyJhco5DjRAScXwxv4Qn67tuq/view?usp=sharing">Download CV</a></Button>
        </div>
        <div data-aos="fade-left" className="w-[80%] mx-auto">
          <img key={theme} width={400} height={400} className="bg-none rounded-full" src={bgImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
