import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import logo1 from '../../assets/SVG/Ativo 7.svg'
import logo2 from '../../assets/SVG/Ativo 8.svg'
import logo3 from '../../assets/SVG/Ativo 9.svg'
import logo4 from '../../assets/SVG/Ativo 10.svg'
import logo5 from '../../assets/SVG/Ativo 11.svg'

interface Image {
    [key: string]: any;
}

const images: Image = { logo1, logo2, logo3, logo4, logo5 }

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
