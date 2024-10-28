import Image from 'next/image'

//style
import './choosenSneakers.scss'

//style
import playButton from '@/images/playButton.svg'
import sneakers from '@/images/sneakers.svg'

export default function ChoosenSneakers() {
    return (
        <div className='choosenSneakers'>
            <div className="container-fluid d-flex justify-content-between">
                <div className="textPart">
                    <h3>
                        Collectible Sneakers
                    </h3>
                    <p>
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </p>
                    <div className="buttons">
                        <div className="button">
                            Sign up now
                        </div>
                        <div className="watchVideo">
                            <Image src={playButton} alt='play button' />
                            <p>Watch Demo</p>
                        </div>
                    </div>
                </div>

                <div className="imagesPart">
                    <div className="images">
                    </div>
                    <Image src={sneakers} alt={'sneakers'} />
                </div>
            </div>
        </div>
    )
}
