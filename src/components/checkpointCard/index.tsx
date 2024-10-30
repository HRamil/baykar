import Image from 'next/image'
import React from 'react'

//image
import shoes from '@/images/shoes.svg'
import triangle from '@/images/Arrow Bottom.svg'

//style
import './checkpointCard.scss'

export default function CheckpointCard() {
    return (
        <div className='checkpointCard'>
            <Image className='shoes' src={shoes} alt='card' />
            <div className="text">
                Emma Simpson collected one pair of Cool Shoes.
            </div>
            <Image className='icon' src={triangle} alt='triangle' />
        </div>
    )
}
