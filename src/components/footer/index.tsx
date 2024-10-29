import Link from 'next/link'
import Image from 'next/image'

//style
import './footer.scss'
import app from '@/images/App Store - Filled.svg'
import google from '@/images/Google Play.svg'
import youtube from '@/images/youtube.svg'
import facebook from '@/images/facebook.svg'
import twitter from '@/images/twitter.svg'
import instagram from '@/images/instagram.svg'
import linkedin from '@/images/linkedin.svg'
import world from '@/images/world.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container links d-flex">
                <div className="col">
                    <h3>Product</h3>
                    <Link href={'/'}>
                        Pricing
                    </Link>
                    <Link href={'/'}>
                        Overview
                    </Link>
                    <Link href={'/'}>
                        Browse
                    </Link>
                    <Link href={'/'}>
                        Accessibility
                    </Link>
                    <Link href={'/'}>
                        Five
                    </Link>
                </div>
                <div className="col">
                    <h3>Solutions</h3>
                    <Link href={'/'}>
                        Brainstorming
                    </Link>
                    <Link href={'/'}>
                        Ideation
                    </Link>
                    <Link href={'/'}>
                        Wireframing
                    </Link>
                    <Link href={'/'}>
                        Research
                    </Link>
                    <Link href={'/'}>
                        Design
                    </Link>
                </div>
                <div className="col">
                    <h3>Support</h3>
                    <Link href={'/'}>
                        Contact Us
                    </Link>
                    <Link href={'/'}>
                        Developers
                    </Link>
                    <Link href={'/'}>
                        Documentation
                    </Link>
                    <Link href={'/'}>
                        Integrations
                    </Link>
                    <Link href={'/'}>
                        Reports
                    </Link>
                </div>
                <div className="col">
                    <h3>
                        Get the App
                    </h3>
                    <div className="storeButtons d-flex">
                        <Link href={'/'}>
                            <Image src={app} alt='app store' />
                        </Link>
                        <Link href={'/'}>
                            <Image src={google} alt='google store' />
                        </Link>
                    </div>
                    <h4>
                        Follow Us
                    </h4>

                    <div className="soicalLink d-flex align-items-center">
                        <Link href={'/'}>
                            <Image src={youtube} alt='youtube' />
                        </Link>
                        <Link href={'/'}>
                            <Image src={facebook} alt='facebook' />
                        </Link>
                        <Link href={'/'}>
                            <Image src={twitter} alt='twitter' />
                        </Link>
                        <Link href={'/'}>
                            <Image src={instagram} alt='instagram' />
                        </Link>
                        <Link href={'/'}>
                            <Image src={linkedin} alt='linkedin' />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-between copyright align-items-center">
                <p>Collers @ 2023. All rights reserved.</p>

                <div className="bottomLinks d-flex align-items-center">
                    <Link href={'/'}>Terms</Link>
                    <Link href={'/'}>Privacy</Link>
                    <Link href={'/'}>Contact</Link>
                    <div className="language d-flex align-items-center">
                        <Image src={world} alt='world' />
                        <p>EN</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
