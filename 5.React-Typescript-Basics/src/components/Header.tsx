import {type ReactNode } from "react"


type HeaderProps = {
  image :{
    src:string;
    alt:string;
  }
  children :ReactNode
}

const Header:React.FC<HeaderProps> = ({children,image}) => {
  return <header>
    <img src= {image.src} alt={image.alt}/>
    {children}
  </header>
}

export default Header