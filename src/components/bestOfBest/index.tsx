import Image from 'next/image'
import Link from 'next/link'

//style
import './bestOfBest.scss'

//images
import best1 from '@/images/best1.svg'
import best2 from '@/images/best2.svg'
import best3 from '@/images/best3.svg'
import shoping from '@/images/shopping-cart.svg'

interface Item {
    image: string;
    title: string;
    text: string;
}

export default function BestOfBest() {
    const arr: Item[] = [
        {
            image: best1,
            title: 'Title',
            text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        },
        {
            image: best2,
            title: 'Title',
            text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        },
        {
            image: best3,
            title: 'Title',
            text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        }
    ]

    return (
        <div className='bestOfBest'>
            <div className="title d-flex justify-content-between align-items-center container-fluid">
                <h2 className="mb-0">The best of the best</h2>
                <Link href="#" className="btn border-white text-light d-flex justify-content-center align-items-center">Sign up now</Link>
            </div>
            <div className='bg'>
                <div className="container-fluid d-flex justify-content-between">
                    {arr.map((el, index) => (
                        <div className="card"key={index}>
                            <Image src={el.image} className="card-img-top" alt={el.title} />
                            <div className="card-body">
                                <h5 className="card-title">{el.title}</h5>
                                <p className="card-text">{el.text}</p>
                                <Link href="#" className="btn d-flex justify-content-center align-items-center">
                                    <Image src={shoping} alt='shoping' />
                                    <p>Buy Now</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}