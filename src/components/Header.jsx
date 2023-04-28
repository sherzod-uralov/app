import { useState } from 'react'
import '../components/Heder.scss'
import Logo from '../images/IMAGE.svg'
import phone from '../images/IMAGE.png'
import playtore from '../images/IMAGE(1).svg'
import playmarket from '../images/IMAGE(2).svg'
import gsap, { Elastic } from 'gsap';
import { useRef, useEffect } from 'react'
import { Power4 } from 'gsap/gsap-core'

const Header = () => {
  const li1 = useRef(null)
  const li2 = useRef(null)
  const li3 = useRef(null)
  const li4 = useRef(null)
  const h1 = useRef(null)
  const p = useRef(null)
  const left_img = useRef(null)
    const right_img = useRef(null)
  useEffect(() => {
    gsap.fromTo(li1.current,{y:-100,},{y:0,duration:1,stagger:true,ease:Power4})
    gsap.fromTo(li2.current,{y:-100,},{y:0,duration:1,stagger:true, delay:0.1,ease:Power4})
    gsap.fromTo(li3.current,{y:-100,},{y:0,duration:1,stagger:true,delay:0.2,ease:Power4})
    gsap.fromTo(li4.current,{y:-100,},{y:0,duration:1,stagger:true,delay:0.3,ease:Power4})
    gsap.fromTo(h1.current,{y:-100,opacity:0},{y:0,opacity:1 ,duration:2,stagger:true,delay:1,ease:Power4})
    gsap.fromTo(p.current,{y:-50,opacity:0},{y:0,opacity:1 ,duration:1.5,stagger:true,delay:2.5,ease:Power4})
    gsap.fromTo(left_img.current,{opacity:0},{y:0,opacity:1 ,duration:1.5,stagger:true,delay:2.5,ease:Power4})
    gsap.fromTo(right_img.current,{y:50,scale:1.3,opacity:0},{scale:1,y:0,opacity:1 ,duration:1.5,stagger:true,delay:3.5,ease:Elastic})
  },[])
  const [darkmode,setDarkmode] = useState(false);
    const [burger,setBurger] = useState(true);
    document.body.className = darkmode ? 'darked' : 'lighed' 
    
    function changeCheckbox() {
      setDarkmode(!darkmode)
    }
    function changeBurger() {
      setBurger(!burger)
        if(burger){
          document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = ''
        }
    }
    
  return (
    <header>
        <nav className={`${darkmode ? 'darked' : 'lighed'}`}>
            <div className="container">
              <div className="navigation">
                    <div className="nav_left">
                      <img src={Logo} alt="" />
                        <ul  className={`${burger ? 'nav_left-ul' : 'left'}`}>
                            <li ref={li1}>Explore</li>
                            <li ref={li2}>Blog</li>
                            <li ref={li3}>Community</li>
                            <li ref={li4}>Careers</li>
                        </ul>
                    </div>
                   <div>
                    <div className='burger_and_toogle'>
                      <input onChange={changeCheckbox} checked={darkmode} type="checkbox" id="checkbox" className="checkbox" />
                    <label htmlFor="checkbox" className="checkbox-label">
                      <i className="fas fa-moon"></i>
                      <i className="fas fa-sun"></i>
                      <span className="ball"></span>
                      </label>
                   <div onClick={changeBurger} className="burger">
                    <span className='burger-item'></span>
                    <span className='burger-item'></span>
                    <span className='burger-item'></span>
                   </div>
                    </div>
                   </div>
                </div>
            </div>
        </nav>
        <div className=  {`${darkmode ? 'hero_bg' : 'hero_bg1'}`}>
            <div className="container">
                <div className="hero">
                    <div className="hero_left">
                        <div className="hero_left-text">
                            <h1 ref={h1}>Finally, an easy way to manage your borrowing</h1>
        
                                <p className='paragraph' ref={p}>Pay off loans and credit cards faster, reduce your interest 
                                  payments and reclaim your financial freedom.</p>
                    
                            <div ref={left_img} className="hero_btns">
                               <img src={playtore} alt="" />
                               <img src={playmarket} alt="" />

                            </div>
                        </div>
                    </div>
                    <div ref={right_img} className="hero_right">
                       <img className='hero_left_img1' src={phone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
