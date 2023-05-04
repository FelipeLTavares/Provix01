import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import logo1 from '../../assets/SVG/Ativo 7.svg'
import logo2 from '../../assets/SVG/Ativo 8.svg'
import logo3 from '../../assets/SVG/Ativo 9.svg'
import logo4 from '../../assets/SVG/Ativo 10.svg'
import logo5 from '../../assets/SVG/Ativo 11.svg'
import logo7 from '../../assets/SVG/IMG_0610.png'
import logo8 from '../../assets/SVG/IMG_0611.png'
import logo9 from '../../assets/SVG/IMG_0612.png'
import logo10 from '../../assets/SVG/IMG_0613.png'
import logo11 from '../../assets/SVG/IMG_0614.png'
import logo12 from '../../assets/SVG/IMG_0615.png'
import logo13 from '../../assets/SVG/IMG_0616.webp'
import logo14 from '../../assets/SVG/IMG_0617.png'
import logo15 from '../../assets/SVG/IMG_0619.png'
import logo17 from '../../assets/SVG/IMG_0621.png'
import logo18 from '../../assets/SVG/IMG_0622.png'

interface Image {
    [key: string]: any;
}

const images: Image = { logo1, logo2, logo3, logo4, logo5, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo17, logo18 }

const repeatedImages = [...Object.values(images),...Object.values(images),...Object.values(images),...Object.values(images),...Object.values(images),...Object.values(images),...Object.values(images),...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images), ...Object.values(images)];

const Carrossel = (): JSX.Element => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);


    return (
        <div className="Geral">
            <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div className="inner"
                    drag="x"
                    dragConstraints={{ right: 200, left: -30700 }}
                    initial={{ x: 0 }}
                    animate={{ x: -11180 }}
                    transition={{ duration: 1 }}>
                    {repeatedImages.map((image: any, index: number) => (
                        <motion.div className="item" key={index}>
                            <img src={image} alt="logo" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Carrossel;
