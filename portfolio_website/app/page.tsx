import { collectMeta } from "next/dist/build/utils";
import Navbar from "./components/Navbar"
import Image from "next/image"
import Link from "next/link";
import { Certificate } from "node:crypto";
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
type TechnicalSkilItem = {
    skill:string
}
type ToolAndPlatFormItem = {
    skill:string
}
type SoftSkillItem = {
    skill:string
}

export default function Home(){
    
    const mathayom_certification:CertificateItem[] = [
      { name: 'แข่งขันหุ่นยนต์ระดับสูง', detail:`
          แข่งขันหุ่นยนต์ระดับสูงระดับชั้น ม.1 - ม.3
          (รางวัลเหรียญเงิน)
          งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69
          ปีการศึกษา 2562`
          ,img:'/images/certification/silapa69-high.png'},
      { name: 'แข่งหุ่นยนต์ระดับกลาง', detail:`
          แข่งขันหุ่นยนต์ระดับกลางระดับชั้น ม.1 - ม.3
          (รางวัลเหรียญทองแดง)
          งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69
          ปีการศึกษา 2562
          `,img:'/images/certification/silapa69-middle.png'},
      { name: 'แข่งขันหุ่นยนต์ระผสม', detail:`
          แข่งขันหุ่นยนต์ระผสมระดับชั้น ม.1 - ม.3
          (รางวัลเหรียญเงิน)
          งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69
          ปีการศึกษา 2562`
          ,img:'/images/certification/silapa69-mix.png'},
      { name: 'แข่งขันหุ่นยนต์ระดับสูง', detail:`
          แข่งขันหุ่นยนต์ระดับสูงระดับชั้น ม.1 - ม.3
          (รางวัลเหรียญเงิน)
          งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 68
          ปีการศึกษา 2561
          `,img:'/images/certification/silapa68-high.png'},
      { name: 'buffolo robot', detail:`
        เข้าร่วมแข่งขันหุ่นยนต์ควายตู้ระดับอุดมศึกษาในงานวันเทคโนโลยีวิศวกรรม มหาวิทยาลัยอุบลราชธานี คณะวิศวกรรมศาสตร์
          `,img:'/images/certification/buffolo.png'},
      { name: 'science project', detail:`
          ประกวดโครงงานวิทยาศาสตร์ 
          สิ่งประดิษฐ์ทางวิทยาศาสตร์
          รางวัลชมเชย
          (มหาวิทยาลัยราชภัฏอุบลราชธานี)`,img:'/images/certification/science_project.png'},
      { name: 'ubu smart assistance', detail:`
            แข่งขันประกวดโครงงานวิทยาศาสตร์ ระดับมัธยมศึกษาตอนต้น สาขาวิทยาศาสตรประยุกต์
            (เหรียญทองแดง)
            มหาวิยาลัยอุบลราชธานี
          `,img:'/images/certification/ubu_smart_assistance.png'},
      { name: 'cira core training', detail:`
          ผ่านการอบรมเชิงปฎิบัติการการประยุกต์ใช้โปรแกรมcira coreสำหรับสร้างสรรค์โครงงานสิ่งประดิษฐ์และนวัตกรรมอัจฉริยะ
          `,img:'/images/certification/cira_core_training.png'},
      { name: 'micro controller training', detail:`
          เข้าร่วมและผ่านการอบรมหลักสูตรการสร้างเครื่องมือวัดปริมาณต่างๆสำหรับงานวิทยาศาสตร์ด้วยบอร์ดไมโครคอนโทรลเลอร์
          `,img:'/images/certification/microcontroller_training.png'},
      { name: 'ร่วมกับผู้บริหารสถานศึกษา ครู และบุคคลากรทางการศึกษาพัฒนาสถานศึกษา', detail:`
          ร่วมกับผู้บริหารสถานศึกษา ครู และบุคคลากรทางการศึกษาพัฒนาสถานศึกษาจนได้รับรางวัลพระราชทาน ในโครงการคัดเลือกนักเรียนและสถานศึกษา ขนาดใหญ่เพื่อรับรางวัลพระราชทานประจำปีการศึกษา 2561
          `,img:'/images/certification/school.png'},
      { name: 'c language training', detail:`
          ผ่านการอบรมการเขียนโปรแกรมภาษา c สำหรับคอมพิวเติอร์โอลิมปิกวิชาการ ปี 2561 ณ โรงเรียนลือคำหาญวารินชำราบ
          `,img:'/images/certification/c_lang_training.png'},
      { name: 'microcontroller for farm', detail:`
          ผ่านการอบรมเชิงปฎิบัติการประยุกต์ใช้ไมโครคอลโทรเลอร์สร้างนวัตกรรมกับระบบฟาร์มอัจฉริยะ
          `,img:'/images/certification/farm_microcontroller.png'},
    ]
    const college_activity:CollegeActivityItem[] = [
        {name:'TA',detail:'teacher assistant',img:'123'},
        {name:'เข้าร่วมคัดตัวicpcของคณะ',detail:'icpc',img:'123'}

    ]

    const myproject:MyProjectItem[] = [
        {name:'TBL HACKATHON',detail:'hackathon',img:'/images/myproject/foundly-1.png'},
        {name:'kku ของหาย',detail:'web app project',img:'/images/myproject/foundly-1.png'},
        {name:'foundly',detail:'web app project',img:'/images/myproject/foundly-1.png'},
        {name:'TRAVEL CLUSTER',detail:'krungsri hackathon',img:'/images/myproject/foundly-1.png'},
        {name:'petfolio',detail:'data serialization project',img:'/images/myproject/foundly-1.png'},
        {name:'vilapark',detail:'web app project',img:'/images/myproject/foundly-1.png'},


    ]
    const contact:ContactItem[] = [
      { name: 'phone', detail: '0886707555', img: '123' },
      { name: 'email', detail: 'Kaewpetcharat.s@kkumail.com', img: '123'},
      { name: 'github', detail: 'jengcharat', img: '123' },
    ]
    const technicalskill:TechnicalSkilItem[] = [
        {skill:'html'},
        {skill:'css'},
        {skill:'javascript'},
        {skill:'laravel'},
        {skill:'next js'},
        {skill:'express'},
        {skill:'mysql'},
        {skill:'kotlin'},
        {skill:'c++'},
        {skill:'java'},
        {skill:'java springboot'},

    ]
    const toolandplatform:ToolAndPlatFormItem[] = [
        {skill:"neovim"},
        {skill:"git"},
        {skill:"lazygit"},
        {skill:"postman"},
    ]
    const softskill:SoftSkillItem[] = [
        {skill:"agile"}
    ]
    
    return (
        <>
            <Navbar/>
            <div id="about" className="flex flex-col flex-1 md:flex-row md:items-start justify-center items-center m-5">
                <div>
                     <Image className="relative rounded-full md:w-100"
                          src="/images/my-profile-img.jpg"
                          alt="profile image"
                          width={200}
                          height={200}
                    />  
                </div> 
                <div className="flex flex-col flex-1  items-center m-5 text-center md:items-start md:text-start">
                    <h3 className="text-white text-xl">
                      สวัสดีครับ{" "}
                      <span className="text-red-500">
                        ผมเจ๋ง
                      </span>
                    </h3>
                  <h1 className="text-white text-3xl font-bold">
                    แก้วเพ็ชรัตน์ สีสันต์
                  </h1>
                  <h1 className="text-white text-xl">
                    นักศึกษาชั้นปีที่ 3 สาขาวิทยาลัยการคอมพิวเตอร์คอมพิวเตอร์ สามขาวิทยาการคอมพิวเตอร์ หลงใหลในการสร้างสรรค์เทคโนโลยี มีประสบการณ์แข่งขันหุ่นยนต์ตั้งแต่มัธยม และพัฒนาโปรเจคหลากหลาย
                  </h1>
                  <div className="m-5 grid gap-5 grid-cols-2">
                    <a href="#myproject" className="text-xl text-white border border-blue-800 bg-blue-800 p-5 rounded-xl">
                        ดูผลงาน
                    </a>
                    <a href="#contact" className="text-xl text-white border border-blue-800 p-5 rounded-xl">
                      ติดต่อผม
                    </a>
                  </div>



                  <div className="grid grid-cols-2 gap-5 md:flex ">
                    <div className="items-center border border-white rounded-xl p-3">
                        <h1 className="text-white text-xl">my certificate</h1>
                        <h1 className="text-white text-xl p-3 md:ml-5">{mathayom_certification.length}</h1>
                    </div>
                    <div className="items-center border border-white rounded-xl p-3">
                        <h1 className="text-white text-xl">my project</h1>
                        <h1 className="text-white text-xl p-3 md:ml-5">{myproject.length}</h1>
                    </div>
                    <div className="items-center border border-white rounded-xl p-3">
                        <h1 className="text-white text-xl">my hackathon</h1>
                        <h1 className="text-white text-xl p-3 md:ml-5">{college_activity.length}</h1>
                    </div>
                    <div className="items-center border border-white rounded-xl p-3">
                        <h1 className="text-white text-xl">my technical skill</h1>
                        <h1 className="text-white text-xl p-3 md:ml-5">{technicalskill.length}</h1>
                    </div>
                  </div>
                </div>
            </div>

            <div>
            <h1 id="skill" className="text-xl text-white flex justify-center m-5">ทักษะและความสามารถ</h1>
                        <div className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2">
                            <div className="row-span-2 border border-white">
                                <h1 className="text-white text-xl">Technical Skills</h1>
                                <div className="flex flex-wrap gap-5 p-5 text-white rounded-xl">
                                        {technicalskill.map((item,index)=>(
                                            <h1 key = {index} className="text-white text-xl">{item.skill}</h1>
                                        ))}
                                </div>
                            </div>
                            <div className="border border-white">
                                <h1 className="text-white text-xl">Tools & Platforms</h1>
                                <div className="flex flex-wrap gap-5 p-5 text-white rounded-xl">
                                        {toolandplatform.map((item,index)=>(
                                            <h1 key = {index} className="text-white text-xl">{item.skill}</h1>
                                        ))}
                                </div>
                            </div>
                            <div className="border border-white">
                                <h1 className="text-white text-xl">Soft Skills</h1>
                                <div className="flex flex-wrap gap-5 p-5 text-white rounded-xl">
                                    {softskill.map((item,index)=>(
                                        <h1 key={index} className="text-white text-xl">{item.skill}</h1>
                                    ))}
                                </div>
                            </div>
                        </div>
            </div>
            <div id="certificate" className="m-5">
                <div className="flex flex-col flex-2 items-center">
                    <h1 className="text-2xl text-white">เกียรติบัตร & รางวัล</h1>
                    <h1 className="text-xl text-white">ผลงานตั้งแต่มัธยมศึกษาจนถึงระดับมหาวิทยาลัย</h1>
                </div>
                <div>
                    <h1 className="text-white text-xl">มัธยมศึกษา - การแข่งขันหุ่นยนต์ & โครงงาน</h1>
                    <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
                            {mathayom_certification.map((item,index)=>(
                               <div key={index} className="min-w-[200px] bg-blue-500 text-white p-4">
                                    <h1 className="text-2xl text-white">{item.name}</h1>
                                    <div>
                                         <Image className="relative md:w-100"
                                              src={item.img}
                                              alt={item.name}
                                              width={200}
                                              height={200}
                                        />  
                                    </div> 
                                    <div>
                                        <h1 className="text-xl text-white">{item.detail}</h1>
                                    </div>

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
            <div id = "myproject" className="m-5">
                <div className="flex flex-col flex-1 items-center">
                    <h1 className="text-3xl text-white">โปรเจค ที่น่าสนใจ</h1>
                    <h1 className="text-xl text-white">ผลงานที่คัดสรรมาแสดง</h1>
                </div>
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                            {myproject.map((item,index)=>(
                               <div key={index} className="min-w-[200px] bg-blue-500 text-white p-4">
                                    <h1 className="text-2xl text-white">{item.name}</h1>
                                    <div>
                                         <Image className="relative md:w-100"
                                              src={item.img}
                                              alt={item.name}
                                              width={200}
                                              height={200}
                                        />  
                                    </div> 
                                    <div>
                                        <h1 className="text-xl text-white">{item.detail}</h1>
                                    </div>

                               </div> 
                            ))}
                </div>
            </div>
            <div id="contact">
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
