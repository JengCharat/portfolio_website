import Navbar from "./components/Navbar"
import Image from "next/image"
export default function Home(){
    return (
        <>
            <Navbar/>
            <div className="flex justify-center m-5">

             <Image className="rounded-full"
                  src="/images/my-profile-img.jpg"
                  alt="profile image"
                  width={200}
                  height={200}
            />  
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-white">Hello I'm</h3>
              <h1 className="text-white text-3xl font-bold">
                Kaewpetcharat Sisan
              </h1>
            </div>
        </>
    )
}
