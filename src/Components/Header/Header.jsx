import logo from '../../assets/GCNLogoTxt.svg'
import downArrow from '../../assets/down-arrow.svg'
import './Header.scss'

import { useState } from "react"; // import state

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    const [isFullArchiveOpen, setIsFullArchiveOpen] = useState(false);
    const [isPresentersOpen, setIsPresentersOpen] = useState(false);

    const scrollTop = () => window.scrollTo(0, 0);

    return (
        <header className={!isNavOpen ? 'sticky top-0 z-50' : ''}>
            <div style={{ backgroundColor: "#c30006" }} className="grid grid-flow-col gap-3 text-white">
                <nav className='py-4 max-w-0'>
                    <section className="flex lg:hidden pl-4">
                        <div
                            className="space-y-[5px]"
                            onClick={() => { 
                                setIsNavOpen((prev) => !prev);
                                 scrollTop();
                                 setIsFullArchiveOpen(false);
                                 setIsPresentersOpen(false);
                                }}
                        >
                            <span className="block h-0.5 w-5 bg-white"></span>
                            <span className="block h-0.5 w-5 bg-white"></span>
                            <span className="block h-0.5 w-5 bg-white"></span>
                        </div>

                        <div className={isNavOpen ? "block absolute w-full h-screen top-12 left-0 z-10 flex flex-col items-start" : "hidden"}>
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
                                <div style={{ borderBottom: "1px solid #333" }} className="relative bg-black text-white w-full text-left font-bold py-4 px-4 flex justify-between" role="menuitem" onClick={() => setIsPresentersOpen((prev) => !prev)}>
                                    Presenters
                                    <img className="invert" style={{ maxWidth: "20px" }} src={downArrow} alt="" srcset="" />
                                    <div className={isPresentersOpen ? "block absolute w-full top-14 left-0 z-10 flex flex-col items-start bg-zinc-900 text-white" : "hidden"}>
                                        <ul className='w-full'>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters">Summary</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/conor-dunne">Conor Dunne</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/daniel-lloyd">Daniel Lloyd</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/james-lw">James Lowsley-Williams</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/jon-cannings">Jon Cannings</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/manon-lloyd">Manon Lloyd</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/oliver-bridgewood">Oliver Bridgewood</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/simon-richardson">Simon Richardson</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12" role="menuitem"><a href="/presenters/tom-last">Tom Last</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ borderBottom: "1px solid #333" }} className="relative bg-black text-white w-full text-left font-bold py-4 px-4 flex justify-between" role="menuitem" onClick={() => setIsFullArchiveOpen((prev) => !prev)}>
                                    See full archive
                                    <img className="invert" style={{ maxWidth: "20px" }} src={downArrow} alt="" srcset="" />
                                    <div className={isFullArchiveOpen ? "block absolute w-full top-14 left-0 z-10 flex flex-col items-start bg-zinc-900 text-white" : "hidden"}>
                                        <ul className='w-full'>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2022/6">June 2022</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2022/5">May 2022</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2022/4">April 2022</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2022/3">March 2022</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2022/2">February 2022</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2022/1">January 2022</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2021/12">December 2021</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2021/11">November 2021</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2021/10">October 2021</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2021/9">September 2021</a></li>
                                            <li style={{ borderBottom: "1px solid #333" }} className="w-full text-left font-bold py-4 px-12"><a href="/archive/2021/8">August 2021</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </ul>
                        </div>
                    </section>
                </nav>
                <div className='col-span-2 px-1.5'>
                    <a className="navbar-brand" href='/'>
                        <img alt="" style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px" }} src={logo}></img>
                    </a>
                </div>
                <div className='flex flex-row justify-end gap-1 font-bold items-center pr-1 '>
                    <a className="text-xs rounded w-11 h-7 flex justify-center items-center text-white underline" href="https://www.gcnevents.co">
                        <p>Events</p>
                    </a>
                    <a className="text-xs rounded w-11 h-7 flex justify-center items-center text-white underline" href="https://www.gcnclub.com">
                        <p>Club</p>
                    </a>
                    <a className="text-xs rounded w-11 h-7 flex justify-center items-center text-white underline" href="https://shop.globalcyclingnetwork.com">
                        <p>Shop</p>
                    </a>
                </div>
            </div>
        </header>
    );
}