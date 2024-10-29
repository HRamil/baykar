import Image from 'next/image'

//style
import './whyJoinUs.scss'

//image
import check from '@/images/check.svg'
import desktop from '@/images/desktop1.svg'
import icon from '@/images/Icon.svg'
import brown from '@/images/brownFigure.svg'
import rectangle from '@/images/rectangle.svg'
import blue from '@/images/blueFigure.svg'
import purple from '@/images/purpleFigure.svg'
import pink from '@/images/pinkFigure.svg'
import green from '@/images/greenFigure.svg'

export default function WhyJoinUs() {
    return (
        <div className='whyJoinUs'>
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div className="text d-flex">
                    <h4>
                        Why join us
                    </h4>
                    <div className="list">
                        <div className='d-flex'>
                            <Image src={check} alt='icon' />
                            <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
                        </div>
                        <div className='d-flex'>
                            <Image src={check} alt='icon' />
                            <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>
                        </div>
                        <div className='d-flex'>
                            <Image src={check} alt='icon' />
                            <p>Ullamcorper ornare in et egestas dolor orci.</p>
                        </div>
                    </div>
                    <button className="btn">
                        Sign up now
                    </button>
                </div>

                <div className="images">
                    <div className="video">
                        <Image className='screen' src={desktop} alt='desktop' />
                        <Image className='icon' src={icon} alt='video play button' />
                    </div>

                    <Image className='brown' src={brown} alt='figure' />
                    <Image className='rectangle' src={rectangle} alt='figure' />
                    <Image className='blue' src={blue} alt='figure'/>
                    <Image className='purple' src={purple} alt='figure'/>
                    <Image className='pink' src={pink} alt='figure'/>
                    <Image className='green' src={green} alt='figure'/>
                </div>
            </div>
        </div>
    )
}