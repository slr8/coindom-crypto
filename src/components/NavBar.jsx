import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const NavBar = () => {
    const goTop = () => {
        window.scrollTo({
            top: (0, 0)
        });
    };
    return (
        <>
            <div className="nav">
                <div className="navLeft">
                    <span className="navLeftSpan" onClick={goTop}>coindom</span>
                </div>
                <div className="navMiddle">
                    <ul className="navMiddleUl">
                        <li className="navMiddleLi"><a href="#home" onClick={goTop}>Home</a></li>
                        <li className="navMiddleLi"><a href="#market">Market</a></li>
                        <li className="navMiddleLi"><a href="#choose">Choose Us</a></li>
                        <li className="navMiddleLi"><a href="#join">Join</a></li>
                    </ul>
                </div>
                <div className="navRight">
                    <div className="navIconOne">
                        <TwitterIcon />
                    </div>
                    <div className="navIconTwo">
                        <FacebookIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar