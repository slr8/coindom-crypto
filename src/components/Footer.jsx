import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <div className="images">
                            <img src="/images/footer/footer-bg.png" />
                        </div>
                        <div className="content">
                            <ul>
                                <li><TwitterIcon /></li>
                                <li><FacebookIcon /></li>
                                <li><YouTubeIcon /></li>
                                <li><LinkedInIcon /></li>
                            </ul>
                            <br />
                            <div className="second">
                                <ul>
                                    <li>Privacy</li>
                                    <li>Terms of Use</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer