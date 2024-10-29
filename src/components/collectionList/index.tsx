'use client'

import Image from 'next/image'
import { useState } from 'react'

//style
import './collectionList.scss'

//image
import search from '@/images/search.svg'
import shield from '@/images/shield-check.svg'
import rocket from '@/images/rocket.svg'
import screen from '@/images/screen.svg'
import podcast from '@/images/podcast.svg'
import settings from '@/images/settings-alt.svg'
import arrow from '@/images/arrow.svg'

interface Item {
    icon: string;
    text: string;
}

export default function CollectionList() {
    const [open, setOpen] = useState('Bibendum tellus')

    const arr: Item[] = [
        {
            icon: search,
            text: 'Bibendum tellus'
        },
        {
            icon: shield,
            text: 'Cras eget'
        },
        {
            icon: rocket,
            text: 'Dolor pharetra'
        },
        {
            icon: screen,
            text: 'Amet, fringilla'
        },
        {
            icon: podcast,
            text: 'Amet nibh'
        },
        {
            icon: settings,
            text: 'Sed velit'
        }
    ]
    return (
        <div className='collectionList'>
            {arr.map((el, index) => {
                return (
                    <div key={index} className={`${open === el.text ? 'active' : null} d-flex justify-content-between align-items-center`} onClick={() => setOpen(el.text)}>
                        <div className='d-flex align-items-center'>
                            <Image className='icon' src={el.icon} alt='icon' />
                            <p>{el.text}</p>
                        </div>
                        <Image className='arrow float-end' src={arrow} alt='arrow' />
                    </div>
                )
            })}
        </div>
    )
}