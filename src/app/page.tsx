import Carousel from "@/components/Carousel";
import Image from "next/image";
import Logo from "@/assets/Viole-Logo.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import Description from "@/components/Description";

export default function Home() {
    return (
        <>
            <nav className="w-full px-4 bg-white">
                <div className="w-full flex justify-between text-red-700 items-center">
                    <div>
                        <Image src={Logo} alt="logo-Violeta" width={65} />
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/violetasolariashours/" target="_blank">
                            <FaLinkedin size={'2rem'}/>
                        </a>
                        <a href="https://github.com/VioleHours" target="_blank">
                        <FaGithub size={'2rem'}/>
                        </a>
                        <a href="https://violetahours.vercel.app/" target="_blank">
                        <IoBagSharp size={'2rem'}/>
                        </a>
                    </div>
                </div>
            </nav>
            <Carousel />
            <Description />
        </>
    );
}
