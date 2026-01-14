import Navbar from "./components/Navbar"
import Image from "next/image"
export default function Home(){
    return (
        <>
            <Navbar/>
            <div className="flex flex-col flex-1 md:flex-row md:items-start justify-center items-center m-5">
                <div>
                     <Image className="relative rounded-full md:w-100"
                          src="/images/my-profile-img.jpg"
                          alt="profile image"
                          width={200}
                          height={200}
                    />  
                </div> 
                <div className="flex flex-col flex-1  items-center m-5 text-center md:items-start md:text-start">
                  <h3 className="text-white">Hello I'm</h3>
                  <h1 className="text-white text-3xl font-bold">
                    Kaewpetcharat Sisan
                  </h1>
                  <h1 className="text-white text-xl">
                    นักศึกษาชั้นปีที่ 3 สาขาวิทยาลัยการคอมพิวเตอร์คอมพิวเตอร์ สามขาวิทยาการคอมพิวเตอร์ หลงใหลในการสร้างสรรค์เทคโนโลยี มีประสบการณ์แข่งขันหุ่นยนต์ตั้งแต่มัธยม และพัฒนาโปรเจคหลากหลาย
                  </h1>
                  <div>
                        <button type="button" className="mt-5 rounded-3xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Purple to Blue</button>
                        <button type="button" className="ml-5 rounded-3xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Purple to Blue</button>
                  </div>



                  <div className="columns-2 m-5 md:flex">
                    <h1 className="border rounded-xl accent-red-600 text-white text-xl p-3 md:ml-5">test</h1>
                    <h1 className="border rounded-xl accent-red-600 text-white text-xl p-3 md:ml-5">test</h1>
                    <h1 className="border rounded-xl accent-red-600 text-white text-xl p-3 md:ml-5">test</h1>
                    <h1 className="border rounded-xl accent-red-600 text-white text-xl p-3 md:ml-5">test</h1>
                  </div>
                </div>
            </div>

            <div>
            <h1 className="text-xl text-white flex justify-center m-5">ทักษะและความสามารถ</h1>
                <div className="">
                        <div className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2">
                            <div className="row-span-2 border border-white">
                                <h1 className="text-white text-xl">Technical Skills</h1>
                                <div className="flex flex-wrap gap-5 p-5 text-white rounded-xl">
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                </div>
                            </div>
                            <div className="border border-white">
                                <h1 className="text-white text-xl">Tools & Platforms</h1>
                                <div className="flex flex-wrap gap-5 p-5 text-white rounded-xl">
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                </div>
                            </div>
                            <div className="border border-white">
                                <h1 className="text-white text-xl">Soft Skills</h1>
                                <div className="flex flex-wrap gap-5 p-5 text-white rounded-xl">
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                        <h1 className="text-white text-xl"> test</h1>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
