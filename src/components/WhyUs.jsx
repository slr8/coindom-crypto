import React from 'react'
import Card from './Card'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConstructionIcon from '@mui/icons-material/Construction';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import AppsIcon from '@mui/icons-material/Apps';

const WhyUs = () => {
    return (
        <>
            <div className="whyUs" id='choose'>
                <div className="container">
                    <div className="header">
                        <h1>Why <span>Choose us</span></h1>
                    </div>
                    <div className="whyUsBoxx">
                        <div className="whyUsLeft">
                            <Card
                                img={<AccountBalanceWalletIcon />}
                                title={"CONNECT YOUR WALLET"}
                                text={"Use Trust Wallet, Metamask or to connect to the app."}
                            />
                            <Card
                                img={<ConstructionIcon />}
                                title={"CONNECT YOUR WALLET"}
                                text={"Use Trust Wallet, Metamask or to connect to the app."}
                            />
                            <Card
                                img={<ElectricBoltIcon />}
                                title={"CONNECT YOUR WALLET"}
                                text={"Use Trust Wallet, Metamask or to connect to the app."}
                            />
                        </div>
                        <div className="whyUsMiddle">
                            <img src="images/chooseus/choose-main.png" />
                        </div>
                        <div className="whyUsRight">
                            <Card
                                img={<SatelliteAltIcon />}
                                title={"CONNECT YOUR WALLET"}
                                text={"Use Trust Wallet, Metamask or to connect to the app."}
                            />
                            <Card
                                img={<SpeedIcon />}
                                title={"CONNECT YOUR WALLET"}
                                text={"Use Trust Wallet, Metamask or to connect to the app."}
                            />
                            <Card
                                img={<AppsIcon />}
                                title={"CONNECT YOUR WALLET"}
                                text={"Use Trust Wallet, Metamask or to connect to the app."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs