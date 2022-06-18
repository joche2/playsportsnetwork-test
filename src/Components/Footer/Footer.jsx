import logo from '../../assets/GCNLogo.svg'
import logoFacebook from '../../assets/IconCrc_Facebook.png'
import logoInstagram from '../../assets/IconCrc_Instagram.png'
import logoTwitter from '../../assets/IconCrc_Twitter.png'
import logoYoutube from '../../assets/YouTubeLogo.png'

export default function Footer() {

    return (
        <div>
            <div className='grid grid-flow-col gap-3 bg-black text-white'>
                <div className='col-span-2 px-1.5'>
                    <a className='navbar-brand' href='/'>
                        <img alt='' style={{ padding: '12px 0px', maxWidth: '80px', maxHeight: '48px' }} src={logo}></img>
                    </a>
                </div>
                <div className='flex flex-row justify-end gap-1 font-bold items-center pr-1 '>
                    <a className='w-10 h-7 flex justify-center items-center bg-white' href='https://facebook.com/globalcyclingnetwork'>
                        <img src={logoFacebook} style={{ padding: '12px 0px', maxWidth: '80px', maxHeight: '48px' }} alt='' />
                    </a>
                    <a className='w-10 h-7 flex justify-center items-center bg-white' href='https://instagram.com/globalcyclingnetwork/?hl=en'>
                        <img src={logoTwitter} style={{ padding: '12px 0px', maxWidth: '80px', maxHeight: '48px' }} alt='' />
                    </a>
                    <a className='w-10 h-7 flex justify-center items-center bg-white' href='https://twitter.com/gcntweet'>
                        <img src={logoInstagram} style={{ padding: '12px 0px', maxWidth: '80px', maxHeight: '48px' }} alt='' />
                    </a>
                    <a className='w-16 h-7 flex justify-center items-center bg-white' href='https://plus.google.com/b/108391701717886882981/108391701717886882981/posts'>
                        <img src={logoYoutube} style={{ padding: '12px 0px', maxWidth: '80px', maxHeight: '48px' }} alt='' />
                    </a>
                </div>
            </div>
            <div className='flex flex-col items-baseline text-xs bg-black text-white pl-4 pb-4'>
                <a className='py-0.5' href='http://www.playsportsnetwork.com/'>© 2022 Play Sports Network</a>
                <a className='py-0.5' href='/'>Home</a>
                <a className='py-0.5' href='/editorial'>Editorial policy</a>
                <a className='py-0.5' href='https://playsportsnetwork.com/privacy-policy/'>Privacy policy</a>
                <a className='py-0.5' href='https://playsportsnetwork.com/cookie-policy/'>Cookie policy</a>
                <a className='py-0.5' href='https://playsportsnetwork.com/ccpa-legal/'>California Do Not Sell My Personal Info </a>
                <a className='py-0.5' href='https://playsportsnetwork.com/privacy-policy/gcn-app-privacy-policy-usa/#10'>California Privacy Notice</a>
                <a className='py-0.5' href='/terms'>Terms and conditions</a>
                <a className='py-0.5' target='_blank' rel='noreferrer' href='https://www.youtube.com/t/terms'>YouTube Terms and conditions</a>
                <a className='py-0.5' href='/promotion-rules'>Promotion rules</a>
                <a className='pt-0.5 pb-4' href='mailto:info@playsportsnetwork.com'>info@playsportsnetwork.com</a>
                <button className='p-2.5 text-lime-600 border-2 border-lime-600' id='ot-sdk-btn' style={{display: 'block', position: 'relative'}}>Manage Preferences</button>
            </div>
        </div>

    )
}