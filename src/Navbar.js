

import React from 'react'
import '../src/Style.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CloudIcon from '@material-ui/icons/Cloud';
import SecurityIcon from '@material-ui/icons/Security';
import VisibilityIcon from '@material-ui/icons/Visibility';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Logo from './images/i.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { fontSize } from '@material-ui/system';
export const Navbar = () => {
    return (
        <>

            <div className="top">
                {/* <MenuIcon style={{ color: "white", fontSize:30}}/> */}
                <div className="box">
                    VR
                </div>
                <div className="content">
                    <p>Venkateshwar Rao</p>
                </div>
                <ExitToAppIcon className="logout" />
            </div>
            <div className="middle">

                <div>
                    <DashboardIcon style={{ color: "white", marginRight: "135px", marginTop: "30px" }} />
                    <span className="imp">Dashboard</span>
                </div>
                <div>
                    <AssignmentIcon style={{ color: "white", marginRight: "180px", marginTop: "30px" }} />
                    <span className="imp1">ITSM</span>
                </div>
                <div>
                    < SecurityIcon style={{ color: "white", marginRight: "150px", marginTop: "30px" }} />
                    <span className="imp2">Optix</span>
                    <ArrowDropDownIcon style={{ color: "white" }} />
                </div>
                <div>
                    <VisibilityIcon style={{ color: "white", marginRight: "125px", marginTop: "30px" }} />
                    <span className="imp3">Hybrid IT</span>
                    <ArrowDropDownIcon style={{ color: "white" }} />
                </div>
                <div>
                    <SecurityIcon style={{ color: "white", marginRight: "160px", marginTop: "30px" }} />
                    <span className="imp4">Security</span>
                </div>
                <div>
                    <VisibilityIcon style={{ color: "white", marginRight: "155px", marginTop: "30px" }} />
                    <span className="imp5">Visibility</span>
                </div>
                <div>
                    <ThumbUpIcon style={{ color: "white", marginRight: "120px", marginTop: "30px" }} />
                    <span className="imp6">Collaboration</span>
                </div>
                {/* <div>
 <AccountCircleIcon style={{ color: "white", marginRight: "165px", marginTop: "30px"}}/>
    <span className = "imp7">Project</span>
    <ArrowDropDownIcon style={{color: "white"}}/>
 </div> */}
                <div>
                    <NotificationsActiveIcon style={{ color: "white", marginRight: "120px", marginTop: "30px" }} />
                    <span className="imp8">Alarm Xplorer</span>
                </div>
                <div>
                    <SettingsIcon style={{ color: "white", marginRight: "160px", marginTop: "30px" }} />
                    <span className="imp9">Settings</span>
                </div>
                <span className="another">White theme Menu Finalized</span>
            </div>

            <div className="bottom">
                <img src={Logo} className="img" />
                <span className="p">Powered by VantageX</span>
            </div>
        </>
    )
}


export default Navbar