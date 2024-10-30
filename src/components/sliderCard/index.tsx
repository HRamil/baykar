import Image from 'next/image'

// style
import './sliderCard.scss'

interface SliderCardProps {
    key: string | number;
    data: {
        icon: string;
        title: string;
        text: string;
        img: string;
        name: string;
        role: string;
    };
}

export default function SliderCard(props: SliderCardProps) {
    return (
        <div className='sliderCard d-flex' key={props.key}>
            <div className="icon d-flex align-items-center">
                <Image src={props.data.icon} alt={props.data.title} />
                <h4>
                    {props.data.title}
                </h4>
            </div>

            <p>
                {props.data.text}
            </p>
            <div className="userProfile d-flex align-items-center">
                <Image src={props.data.img} alt={props.data.name} />
                <div>
                    <h2>
                        {props.data.name}
                    </h2>
                    <h3>
                        {props.data.role}
                    </h3>
                </div>
            </div>
        </div>
    )
}
