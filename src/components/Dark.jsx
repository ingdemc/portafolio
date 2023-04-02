import React, {useEffect,  useState} from 'react'
import { BsFillBrightnessHighFill, BsFillMoonStarsFill} from "react-icons/bs";

export default function Dark (){
    const [theme, setTheme] = useState(null);
    
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
    
          setTheme('dark');
        }else{
    
          setTheme('light');
        }
           
      },[]);
    
    
      useEffect(()=>{
        if(theme ==="dark"){
          document.documentElement.classList.add("dark");
          
          const boton_light = document.getElementById("Light");
          boton_light.style.display = "none";
          const boton_dark = document.getElementById("Dark");
          boton_dark.style.display = "block";
          
        }else{
          document.documentElement.classList.remove("dark");
         
          const boton_dark = document.getElementById("Dark");
          boton_dark.style.display = "none";
         
          const boton_light = document.getElementById("Light");
          boton_light.style.display = "block";
          
    
        }
    
      },[theme]);
    
    
      const handleThemeSwitch = () =>{
        setTheme(theme === "dark" ? "light": "dark");
    
    
      }
    return(
        <div 
    
        className='rounded-full '>
           <button  onClick={handleThemeSwitch}><BsFillMoonStarsFill className=' transition ease-in-out delay-150 text-[#31dde9]  hover:-translate-y-1 hover:scale-110 hover:text-[#4280f3] duration-300 ...' size='25' id='Dark'/> </button>
           <button  onClick={handleThemeSwitch}><BsFillBrightnessHighFill className=' transition ease-in-out delay-150 text-[#f5d20e] hover:-translate-y-1 hover:scale-110 hover:text-[#f0831e] duration-300 ' size='25' id='Light'/> </button>
           
        </div>
           
    );
}
