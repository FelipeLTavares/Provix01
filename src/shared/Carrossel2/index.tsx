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

  return (
    <div></div>
  );
};

export default Carrossel;
