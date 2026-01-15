import Navbar from "./components/Navbar"
import Image from "next/image"
type ContactItem = {
    name:string,
    detail?:string,
    img:string
}
type CertificateItem = {
    name:string,
    detail:string,
    img:string
}
type CollegeActivityItem = {
    name:string,
    detail:string,
    img:string
}
type MyProjectItem = {
    name:string,
    detail:string,
    img:string
}
export default function Home(){
    
    const mathayom_certification:CertificateItem[] = [
      { name: 'certification 1', detail:'string',img:'123'},
      { name: 'certification 2', detail:'string',img:'123'},
      { name: 'certification 3', detail:'string',img:'123'},
    ]
    const college_activity:CollegeActivityItem[] = [
        {name:'activity 1',detail:'hackathon',img:'123'},
        {name:'activity 2',detail:'hackathon',img:'123'}

    ]

    const myproject:MyProjectItem[] = [
        {name:'project 1',detail:'hackathon',img:'123'},
        {name:'project 2',detail:'hackathon',img:'123'}

    ]
    const contact:ContactItem[] = [
      { name: 'phone', detail: '0886707555', img: '123' },
      { name: 'email', detail: 'Kaewpetcharat.s@kkumail.com', img: '123'},
      { name: 'github', detail: 'jengcharat', img: '123' },
    ]
    
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
            <div className="m-5">
                <div className="flex flex-col flex-2 items-center">
                    <h1 className="text-2xl text-white">เกียรติบัตร & รางวัล</h1>
                    <h1 className="text-xl text-white">ผลงานตั้งแต่มัธยมศึกษาจนถึงระดับมหาวิทยาลัย</h1>
                </div>
                <div>
                    <h1 className="text-white text-xl">มัธยมศึกษา - การแข่งขันหุ่นยนต์ & โครงงาน</h1>
                    <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
                            {mathayom_certification.map((item,index)=>(
                               <div key={index} className="min-w-[200px] bg-blue-500 text-white p-4 rounded">
                                    <h1 className="text-2xl text-white">{item.name}</h1>
                               </div> 
                            ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-white text-xl">มหาวิทยาลัย - Hackathon & Competition</h1>
                    <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
                            {college_activity.map((item,index)=>(
                               <div key={index} className="min-w-[200px] bg-blue-500 text-white p-4 rounded">
                                    <h1 className="text-2xl text-white">{item.name}</h1>
                               </div> 
                            ))}
                    </div>
                </div>
            </div>
            <div className="m-5">
                <div className="flex flex-col flex-1 items-center">
                    <h1 className="text-3xl text-white">โปรเจค ที่น่าสนใจ</h1>
                    <h1 className="text-xl text-white">ผลงานที่คัดสรรมาแสดง</h1>
                </div>
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                            {myproject.map((item,index)=>(
                               <div key={index} className="bg-blue-500 text-white p-4 rounded">
                                    <h1 className="text-2xl text-white">{item.name}</h1>
                               </div> 
                            ))}
                </div>
            </div>
            <div>
                <div className="flex flex-col flex-1 items-center">
                    <h1 className="text-2xl text-white">ติดต่อ ผม</h1>
                    <h1 className="text-2xl text-white">สนใจร่วมงาน หรือมีคำถาม สามารถติดต่อได้เลยครับ!</h1>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-3 border border-white text-center">
                    {contact.map((item,index)=>(
                            <div key={index}>
                                ้ <h1 className="text-2xl text-white">{item.name}</h1>
                                ้ {item.detail && <h1 className="text-2xl text-white">{item.detail}</h1>}
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}
