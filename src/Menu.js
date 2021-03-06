
import MenuIcon from '@material-ui/icons/Menu';
import '../src/Stylesheet.css'
import React, {useState} from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Logo from './images/i.png'
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const Menu = () => {
    const[checkMenuIcon, setMenuIcon] = useState(true)
    const[expand, setExpand] = useState(true)
 
    function openIcon() {
        setMenuIcon(false)
        setExpand(false)

    }
    function closeIcon() {
       setMenuIcon(true)
       setExpand(true)
    }
    return (
        <>
        <div className = {expand ? "wrapper-inexpand":"wrapper"}>
            <span><svg className = {expand? "logo opacity-0":"logo opacity-1"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.79 48"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Artboard_5" data-name="Artboard 5"><path class="cls-1" d="M266.41,1.84V13H265c-7.86,0-15.73,0-23.59,0-1.06,0-2,.14-2.46,1.21a3.26,3.26,0,0,0,.33,3.43,2.89,2.89,0,0,0,2,.7c5,.06,9.91,0,14.86,0a13.17,13.17,0,0,1,13.15,10.1c2.1,8.93-2.91,15.6-9.68,17.29a13.15,13.15,0,0,1-3.25.4c-8.24,0-16.48,0-24.73,0-.22,0-.44,0-.73,0V35h24.7c2.37,0,3.3-1.1,2.92-3.43a2.06,2.06,0,0,0-2.31-2c-5.07,0-10.14,0-15.2,0a13.46,13.46,0,0,1-13.49-12c-.86-7.5,3.51-13.92,10.57-15.47a13.3,13.3,0,0,1,2.81-.32q12.36,0,24.73,0C265.87,1.78,266.09,1.81,266.41,1.84Z"/><path class="cls-1" d="M55.74,29.51a9.84,9.84,0,0,0,6.52,5.2,9.46,9.46,0,0,0,2.25.24c5.56,0,11.11,0,16.67,0h1.33V46a3,3,0,0,1-.52.09c-6,0-12,.12-18,0-8.81-.22-16.06-5.57-19.22-14-4.4-11.68,1.36-24.91,12.76-29a21.81,21.81,0,0,1,6.65-1.2C70.08,1.78,76,1.89,82,1.89c.15,0,.3,0,.55.05V13.08H81.23c-5.59,0-11.19,0-16.79,0a9.6,9.6,0,0,0-8.29,4.71,1.43,1.43,0,0,0-.16.3,1.58,1.58,0,0,0,0,.32H74.18v11.1Z"/><path class="cls-1" d="M86.08,2.22a4.45,4.45,0,0,1,.52-.07c8,0,16-.11,24,0,7.64.14,13.59,4.92,15.75,12.34,2.57,8.8-2.06,18.3-10.45,21.21a18,18,0,0,1-5.31.9c-4.16.13-8.32,0-12.48,0H97.06v9.2h-11Zm11,11V25.73h1.27c3.77,0,7.55-.1,11.32,0s5.79-2.44,6.33-5.24c.65-3.37-1.85-7.18-5-7.28C106.41,13.09,101.81,13.2,97.07,13.2Z"/><path class="cls-1" d="M11,36.68V45.9H0V2.24a2.65,2.65,0,0,1,.54-.09c8,0,16-.11,23.92,0,7.79.13,13.83,5,15.92,12.57C43,24.22,37.45,34,28.15,36.26a16,16,0,0,1-3.59.4c-4.08.05-8.16,0-12.24,0Zm0-11c.3,0,.56.07.81.07,4.16,0,8.31,0,12.47,0a5.13,5.13,0,0,0,4.34-2.27,6.47,6.47,0,0,0,.59-7,5.62,5.62,0,0,0-5.71-3.25c-3.74.11-7.48,0-11.22,0H11Z"/><path class="cls-1" d="M195.35,45.91H184.43V2.18c.2,0,.38-.06.56-.06,7.94,0,15.89-.1,23.83,0s14.12,5.23,16.06,13c2.24,9-2.82,18.32-11.37,20.83a17.64,17.64,0,0,1-4.57.65c-4.12.09-8.25,0-12.37,0h-1.22Zm0-20.21h12.81a5.83,5.83,0,0,0,6.08-4.95c.75-3.75-1.93-7.89-6.13-7.64-3.8.23-7.62.05-11.44.05-.43,0-.86.05-1.32.08Z"/><path class="cls-1" d="M172.73,41a24,24,0,1,1,0-33.94,24,24,0,0,1,0,33.94"/><path class="cls-2" d="M169.12,6.18a22.26,22.26,0,0,0-31.27,31,46.24,46.24,0,0,0,31.27-31"/><path class="cls-3" d="M174.45,11.89A15.54,15.54,0,0,1,168.74,29c-6.73,5-16.52,5-30.05,9.22a22.26,22.26,0,0,0,35.76-26.37"/></g></g></svg></span>
        {checkMenuIcon ?  <MenuIcon onClick = {openIcon} 
         style={{color: "white", fontSize: 30,marginRight: "10px", marginTop: "10px"}}/> :  <MenuIcon  onClick = {closeIcon}  style={{color: "white", fontSize: 30, marginRight: "192px", marginTop: "10px"}}/>}
       
           
            <div className = "name-box">
                <h6 className = "sub-name">VR</h6>
                <span className ={expand?"sn opacity-0": "sn opacity-1"}>VenkateshwarRao</span>
                <ExitToAppIcon className = "epi"/>
            </div>
            <div className = "icon-box">
                <div className = "name-box">
          
                <span className = {expand? "name opacity-0":"name opacity-1"}>Dashboard</span>
                </div>
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box">
            
                <span className = {expand? "name opacity-0":"name opacity-1"}>ITSM</span>
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box f">
                <span className = {expand? "name opacity-0":"name opacity-1"}>Optix </span>
                <div>{expand? "":<ArrowDropDownIcon className = "drop"/>}</div>
         
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box f">
                <span className = {expand? "name opacity-0":"name opacity-1"}>HybridIT</span>
                <div className ="drop">{expand?"":<ArrowDropDownIcon/>}</div>
            
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box">
                <span className = {expand? "name opacity-0":"name opacity-1"}>Security</span>
            
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box">
                <span className = {expand? "name opacity-0":"name opacity-1"}>Visibility</span>
            
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box">
                <span className = {expand? "name opacity-0":"name opacity-1"}>Collaboration</span>
            
                </div>
                
           
            </div>
            <div className = "icon-box i">
                <div className = "name-box f">
                <span className = {expand? "name opacity-0":"name opacity-1"}>ProjectManagement</span>
                <div className ="drop">{expand? "":<ArrowDropDownIcon/>}</div>
         
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box">
                <span className = {expand? "name opacity-0":"name opacity-1"}>AlarmXplorer</span>
              
                </div>
                
           
            </div>

            <div className = "icon-box i">
                <div className = "name-box">
                <span className = {expand? "name opacity-0":"name opacity-1"}>Settings</span>
            
                </div>
                
           
            </div>

            <div className = "bottom-wrapper">
        <img src={Logo} className = "van" />
        <span className = {expand? "bottom-content opacity-0":"bottom-content opacity-1"}>Powered by VantageX</span>
        </div>
            
        </div>
       
        </>
    )
    
}

export default Menu