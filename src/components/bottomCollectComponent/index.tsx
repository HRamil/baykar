import Image from 'next/image'

//style
import './bottomCollectComponent.scss'

//image
import img1 from '@/images/image1.svg'
import figure1 from '@/images/figure1.svg'
import img2 from '@/images/image2.svg'
import figure2 from '@/images/figure2.svg'
import img3 from '@/images/image3.svg'
import figure3 from '@/images/figure3.svg'

export default function BottomCollectComponent() {

    const arr = [
        {
            figure: figure1,
            image: img1,
            title: 'Nibh viverra',
            text: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
        },
        {
            figure: figure2,
            image: img2,
            title: 'Cursus amet',
            text: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
        },
        {
            figure: figure3,
            image: img3,
            title: 'Ipsum fermentum',
            text: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
        }
    ]

    return (
        <div className='bottomCollectComponent container-fluid d-flex justify-content-between'>
            {arr.map((el: any, index: number) => {
                return (
                    <div key={index}>
                        <Image className='figure' src={el.figure} alt='figure' />
                        <Image className='image' src={el.image} alt='image' />
                        <h3>{el.title}</h3>
                        <p>{el.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
