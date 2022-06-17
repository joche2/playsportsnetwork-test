import logo from '../../assets/GCNLogoTxt.svg'
import logoFacebook from '../../assets/IconCrc_Facebook.png'
import logoInstagram from '../../assets/IconCrc_Instagram.png'
import logoTwitter from '../../assets/IconCrc_Twitter.png'
import logoYoutube from '../../assets/YouTubeLogo.png'
import './Header.scss'

import { useState } from "react"; // import state

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
        <header>
            <div style={{ backgroundColor: "#c30006" }} className="grid grid-flow-col gap-3 text-white">
                <div className='col-span-2 px-1.5'>
                    <a className="navbar-brand" href='/'>
                        <img alt="" style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px" }} src={logo}></img>
                    </a>
                </div>
                <div className='flex flex-row justify-end gap-1 font-bold items-center pr-1 '>
                    <a className="text-xs rounded w-14 h-7 flex justify-center items-center bg-white text-black" href="https://www.gcnevents.co">
                        <p>Events</p>
                    </a>
                    <a className="text-xs rounded w-14 h-7 flex justify-center items-center bg-white text-black" href="https://www.gcnclub.com">
                        <p>Club</p>
                    </a>
                    <a className="text-xs rounded w-14 h-7 flex justify-center items-center bg-white text-black" href="https://shop.globalcyclingnetwork.com">
                        <p>Shop</p>
                    </a>
                    <a className="text-xs rounded w-14 h-7 flex justify-center items-center bg-white text-black" href="https://www.youtube.com/subscription_center?add_user=globalcyclingnetwork">
                        <p>YouTube</p>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-between py-2 bg-black">
                <nav>
                    <section className="flex lg:hidden pl-4">
                        <div
                            className="space-y-[5px]"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-5 bg-white"></span>
                            <span className="block h-0.5 w-5 bg-white"></span>
                            <span className="block h-0.5 w-5 bg-white"></span>
                        </div>

                        <div className={isNavOpen ? "block absolute w-full h-screen top-20 left-0 z-10 flex flex-col items-start" : "hidden"}>
                            <ul className="flex flex-col items-start justify-between min-h-[250px] w-full">
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/">Home</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/gcn-show">GCN Show</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/how-to">How To</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/maintenance-mondays">Maintenance</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/ask-gcn">Ask GCN</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/train-with-gcn">Training</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/features">Features</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/top-10s">Top 10s</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/gcn-racing">GCN Racing</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/category/gcn-tech">GCN Tech</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters">Presenters</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/conor-dunne">Conor Dunne</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/daniel-lloyd">Daniel Lloyd</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/james-lw">James Lowsley-Williams</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/jon-cannings">Jon Cannings</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/manon-lloyd">Manon Lloyd</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/oliver-bridgewood">Oliver Bridgewood</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/simon-richardson">Simon Richardson</a></li>
                                <li style={{ borderBottom: "1px solid #333" }} className="bg-black text-white w-full text-left font-bold py-4 px-4" role="menuitem"><a href="/presenters/tom-last">Tom Last</a></li>
                            </ul>
                        </div>
                    </section>
                </nav>
                <div className='flex flex-row justify-end gap-1 font-bold items-center pr-1 '>
                    <a className="w-10 h-7 flex justify-center items-center" href="https://facebook.com/globalcyclingnetwork">
                        <img className="invert" src={logoFacebook} style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px"}} alt="" />
                    </a>
                    <a className="w-10 h-7 flex justify-center items-center" href="https://instagram.com/globalcyclingnetwork/?hl=en">
                        <img className="invert" src={logoTwitter} style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px"}} alt="" />
                    </a>
                    <a className="w-10 h-7 flex justify-center items-center" href="https://twitter.com/gcntweet">
                        <img className="invert" src={logoInstagram} style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px"}} alt="" />
                    </a>
                    <a className="rounded w-16 h-7 flex justify-center items-center bg-white" href="https://plus.google.com/b/108391701717886882981/108391701717886882981/posts">
                        <img src={logoYoutube} style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px" }} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
}