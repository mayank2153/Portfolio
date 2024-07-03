import { Button } from "./moving-border.tsx"
import linkedin from "../assets/images/linkedinIcon.svg";

import twitter from "../assets/images/twitterIcon.svg";

import email from "../assets/images/emailIcon.svg";
const Contact=()=>{
    return(
        <div className="md:h-[88vh] h-max">
            <div className=" flex items-center justify-center md:py-40 py-40 px-5">
                <Button 
                    borderRadius="1.5rem" 
                    duration={3000} 
                    className="custom-button-class" 
                    containerClassName="custom-container-class" 
                    borderClassName="custom-border-class"
                >
                    <div className="flex flex-col ">
                        <h1 className="text-3xl font-bold text-white mt-20 mb-10">Say Hello</h1>
                        <div className="text-xl leading-10">
                            <div className="md:flex">
                                <div className="flex">
                                    <img src={email} className="md:w-4 md:h-4 md:mt-3 md:mr-2 mt-5 w-6 mr-4"></img>
                                    <p className="md:mr-2 mr-4">Email:</p>
                                </div>
                                <p className="text-[#45DBB7] ml-10 md:ml-0"><a href="mailto:msachdeva9april@gmail.com">msachdeva9april@gmail.com</a></p>
                            </div>
                            <div className="md:flex">
                                <div className="flex">
                                    <img src={twitter} className="md:w-4 md:h-4 md:mt-3 md:mr-2 mt-5 w-6 mr-4"></img>
                                    <p className="md:mr-2 ">DM on Twitter:</p>
                                </div>
                                <p className="text-[#45DBB7]  md:ml-0 mr-20"><a href="https://x.com/mayankbytes">@mayankbytes</a></p>
                            </div>
                            <div className="md:flex">
                                <div className="flex">
                                    <img src={linkedin} className="md:w-4 md:h-4 md:mt-3 md:mr-2 mt-5 w-6 mr-4"></img>
                                    <p className="md:mr-2 mr-4">Linkedin:</p>
                                </div>
                                <p className="text-[#45DBB7] mr-12 md:ml-0"><a href="https://www.linkedin.com/in/mayank-sachdeva-559537224/">Mayank Sachdeva</a></p>
                            </div>
                        </div>
                    </div>
                </Button>
            </div>
        </div>
    )
}
export default Contact