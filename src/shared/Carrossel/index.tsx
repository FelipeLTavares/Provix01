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

const images: Image = {logo1, logo2, logo3, logo4, logo5}

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
        <motion.div className="carousel" whileTap={{ cursor: "grabbing"}}>
            <motion.div className="inner"
            drag="x" 
            dragConstraints={{ right:100, left: -250}}
            initial={{ x:200 }}
            animate={{ x:0 }}
            transition={{ duration: 0.8 }}>
                {Object.values(images).map((image: any) => (
                    <motion.div className="item" key={image}>
                        <img src={image} alt="logo"/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Carrossel;
