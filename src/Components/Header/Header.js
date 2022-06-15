import logo from '../../assets/GCNLogoTxt.svg'
import './Header.scss'

function Header() {
    return (
        <header className="grid grid-flow-col gap-3 bg-redPage text-white">
            <div className='col-span-3 px-1.5'>
                <a className="navbar-brand" href='/'>
                    <img alt="" style={{ padding: "12px 0px", maxWidth: "80px", maxHeight: "48px" }} src={logo}></img>
                </a>
            </div>
            <div className='flex flex-row justify-end gap-1 font-bold items-center pr-1 '>
                <a style={{backgroundColor: "white"}} className="text-xs rounded w-14 h-7 flex justify-center items-center" href="https://www.gcnevents.co">
                    <p>Events</p>
                </a>
                <a style={{backgroundColor: "white"}} className="text-xs rounded w-14 h-7 flex justify-center items-center" href="https://www.gcnclub.com">
                    <p>Club</p>
                </a>
                <a style={{backgroundColor: "white"}} className="text-xs rounded w-14 h-7 flex justify-center items-center" href="https://shop.globalcyclingnetwork.com">
                    <p>Shop</p>
                </a>
                <a style={{backgroundColor: "white"}} className="text-xs rounded w-14 h-7 flex justify-center items-center" href="https://www.youtube.com/subscription_center?add_user=globalcyclingnetwork">
                    <p>YouTube</p>
                </a>
            </div>
        </header>
    );
}

export default Header;