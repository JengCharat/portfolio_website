'use client'
import { GitHubCalendar } from 'react-github-calendar'
import Navbar from "./components/Navbar"
import Image from "next/image"
import { useState } from "react"
import { FaPhone, FaEnvelope, FaGithub, FaTimes, FaArrowLeft, FaArrowRight, FaTools, FaLightbulb, FaLink, FaExternalLinkAlt, FaGlobe } from "react-icons/fa"

type ContactItem = {
    name:string,
    detail?:string[],
    img:string
}
type CertificateItem = {
    name:string,
    detail:string,
    img:string
}
type ActivityImageItem = {
    name:string,
    detail:string,
    img:string
}
type MyProjectItem = {
    name:string,
    detail:string,
    img:string[],
    tech:string[],
    challenges:string,
    githubrepo?:string,
    websitelink?:string
}
type TechnicalSkillItem = {
    skill:string
}
type ToolAndPlatformItem = {
    skill:string
}
type SoftSkillItem = {
    skill:string
}

export default function Home(){
    const [selectedItem, setSelectedItem] = useState<CertificateItem | MyProjectItem | ActivityImageItem | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    const mathayom_certification:CertificateItem[] = [
      { name: 'การประกวดโครงงานระดับนานาชาติ ในงาน Indonesia Inventors Day 2022 (9th IYIA)', detail:`ได้รับเกียรติให้เข้าร่วมการประกวดโครงงานระดับนานาชาติ ในงาน Indonesia Inventors Day 2022 (9th IYIA) จากโครงงานเรื่อง "The Application of Artificial Intelligence for Analysis of Chillies Diseases, Nutrient Deficiencies, Pests Detection and Elimination with CIRA CORE Platform"
หน่วยงานที่จัด: INDONESIAN INVENTION AND INNOVATION PROMOTION ASSOCIATION (INNOPA)
วันที่: 29-31 ตุลาคม 2022
สถานที่: Udayana University, Bali, Indonesia`, img:'/images/certification/iyia.png'},
      { name: 'แข่งขันหุ่นยนต์ระดับสูง', detail:'ได้รับรางวัลเหรียญเงิน ในการแข่งขันหุ่นยนต์ระดับสูง ระดับชั้น ม.1-ม.3 งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69 ปีการศึกษา 2562', img:'/images/certification/silapa69-high.png'},
      { name: 'แข่งหุ่นยนต์ระดับกลาง', detail:'ได้รับรางวัลเหรียญทองแดง ในการแข่งขันหุ่นยนต์ระดับกลาง ระดับชั้น ม.1-ม.3 งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69 ปีการศึกษา 2562', img:'/images/certification/silapa69-middle.png'},
      { name: 'แข่งขันหุ่นยนต์ระผสม', detail:'ได้รับรางวัลเหรียญเงิน ในการแข่งขันหุ่นยนต์ระผสม ระดับชั้น ม.1-ม.3 งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69 ปีการศึกษา 2562', img:'/images/certification/silapa69-mix.png'},
      { name: 'แข่งขันหุ่นยนต์ระดับสูง', detail:'ได้รับรางวัลเหรียญเงิน ในการแข่งขันหุ่นยนต์ระดับสูง ระดับชั้น ม.1-ม.3 งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 68 ปีการศึกษา 2561', img:'/images/certification/silapa68-high.png'},
      { name: 'การแข่งขันหุ่นยนต์ Buffalo Robot', detail:'เข้าร่วมการแข่งขันหุ่นยนต์ควายตู้ ระดับอุดมศึกษา ในงานวันเทคโนโลยีวิศวกรรม มหาวิทยาลัยอุบลราชธานี คณะวิศวกรรมศาสตร์', img:'/images/certification/buffolo.png'},
      { name: 'การประกวดโครงงานวิทยาศาสตร์', detail:'ได้รับรางวัลชมเชย ในการประกวดโครงงานวิทยาศาสตร์และสิ่งประดิษฐ์ทางวิทยาศาสตร์ มหาวิทยาลัยราชภัฏอุบลราชธานี', img:'/images/certification/science_project.png'},
      { name: 'การประกวดโครงงานวิทยาศาสตร์ UBU Smart Assistance', detail:'ได้รับรางวัลเหรียญทองแดง ในการแข่งขันประกวดโครงงานวิทยาศาสตร์ ระดับมัธยมศึกษาตอนต้น สาขาวิทยาศาสตร์ประยุกต์ มหาวิทยาลัยอุบลราชธานี', img:'/images/certification/ubu_smart_assistance.png'},
      { name: 'การอบรม CIRA Core Training', detail:'ผ่านการอบรมเชิงปฏิบัติการ การประยุกต์ใช้โปรแกรม CIRA Core สำหรับสร้างสรรค์โครงงานสิ่งประดิษฐ์และนวัตกรรมอัจฉริยะ', img:'/images/certification/cira_core_training.png'},
      { name: 'การอบรม Micro Controller Training', detail:'ผ่านการอบรมหลักสูตรการสร้างเครื่องมือวัดปริมาณต่างๆ สำหรับงานวิทยาศาสตร์ด้วยบอร์ดไมโครคอนโทรลเลอร์', img:'/images/certification/microcontroller_training.png'},
      { name: 'การมีส่วนร่วมพัฒนาสถานศึกษา', detail:'มีส่วนร่วมในการพัฒนาสถานศึกษาร่วมกับผู้บริหาร ครู และบุคลากรทางการศึกษา จนสถานศึกษาได้รับรางวัลพระราชทาน ในโครงการคัดเลือกนักเรียนและสถานศึกษาขนาดใหญ่เพื่อรับรางวัลพระราชทานประจำปีการศึกษา 2561', img:'/images/certification/school.png'},
      { name: 'การอบรมภาษา C Programming', detail:'ผ่านการอบรมการเขียนโปรแกรมภาษา C สำหรับการแข่งขันคอมพิวเตอร์โอลิมปิกวิชาการ ปี 2561 ณ โรงเรียนลือคำหาญวารินชำราบ', img:'/images/certification/c_lang_training.png'},
      { name: 'การอบรม Microcontroller for Smart Farm', detail:'ผ่านการอบรมเชิงปฏิบัติการ ประยุกต์ใช้ไมโครคอนโทรลเลอร์สร้างนวัตกรรมกับระบบฟาร์มอัจฉริยะ', img:'/images/certification/farm_microcontroller.png'},
    ]

    const activity_image: ActivityImageItem[] = [
        { name: 'กิจกรรมฝึกซ้อมแข่งขันหุ่นยนต์', detail: 'ภาพกิจกรรมการฝึกซ้อมแข่งขันหุ่นยนต์เพื่อเตรียมความพร้อมก่อนการแข่งขัน', img: '/images/activity_image/1.png' },
        { name: 'กิจกรรมการอบรม CIRA Core', detail: 'ภาพกิจกรรมการเข้าร่วมอบรมเชิงปฏิบัติการ CIRA Core เพื่อพัฒนาทักษะด้าน AI และ IoT', img: '/images/activity_image/2.png' },
        { name: 'กิจกรรมการอบรม Microcontroller', detail: 'ภาพกิจกรรมการอบรมด้านไมโครคอนโทรลเลอร์และระบบสมองกลฝังตัว', img: '/images/activity_image/3.png' },
        { name: 'การผ่านเข้ารอบ Young Maker Contest', detail: 'ผ่านเข้ารอบ 20 ทีม สายสามัญระดับประเทศ ในโครงการ Young Maker Contest ครั้งที่ 4', img: '/images/activity_image/4.png' },
        { name: 'การประกวดโครงงานวิทยาศาสตร์และสิ่งประดิษฐ์', detail: 'ภาพกิจกรรมการประกวดโครงงานวิทยาศาสตร์และสิ่งประดิษฐ์ทางวิทยาศาสตร์', img: '/images/activity_image/5.png' },
        { name: 'การเข้าร่วม Krungsri Universe x Khonkaen University Hackathon', detail: 'เข้าร่วมการแข่งขัน Krungsri Universe x Khonkaen University Hackathon', img: '/images/activity_image/6.jpg' },
        { name: 'กิจกรรมการสอนและอบรม IoT Camp', detail: 'ทำหน้าที่เป็นผู้ช่วยอาจารย์ในการอบรมค่าย IoT ให้กับนักเรียนระดับมัธยมศึกษาปีที่ 4/11-12 ห้องเรียน Gifted Program', img: '/images/activity_image/7.JPG' },
        { name: 'การแข่งขันหุ่นยนต์ Buffalo Robot', detail: 'ภาพกิจกรรมการแข่งขันหุ่นยนต์ควายตู้ ณ มหาวิทยาลัยอุบลราชธานี', img: '/images/activity_image/8.JPG' },
        { name: 'การแข่งขันประกวดโครงงานวิทยาศาสตร์', detail: 'ภาพกิจกรรมการแข่งขันประกวดโครงงานวิทยาศาสตร์ ระดับมัธยมศึกษาตอนต้น สาขาวิทยาศาสตร์ประยุกต์ มหาวิทยาลัยอุบลราชธานี', img: '/images/activity_image/9.jpg' },
        { name: 'การประกวดโครงงานระดับนานาชาติ IYIA', detail: 'ภาพกิจกรรมการประกวดโครงงานระดับนานาชาติ ในงาน Indonesia Inventors Day 2022 (9th IYIA)', img: '/images/activity_image/10.jpg' },
        { name: 'การเข้าร่วม TBL Hackathon', detail: 'ภาพกิจกรรมการเข้าร่วมการแข่งขัน TBL Hackathon', img: '/images/activity_image/11.JPG' },
        { name: 'กิจกรรมพัฒนาโรงเรียน', detail: 'ภาพกิจกรรมการมีส่วนร่วมพัฒนาสถานศึกษาจนได้รับรางวัลพระราชทาน', img: '/images/activity_image/12.JPG' }
    ]

    const myproject:MyProjectItem[] = [
        {
            name:'TBL Hackathon Project',
            detail:'ระบบติดตามสถานะและจัดการรถขนส่งสำหรับคลังสินค้า โดยพัฒนาระบบ Real-time Tracking เพื่อแก้ไขปัญหาการสื่อสารข้อมูลที่กระจัดกระจายและลดความไม่แน่นอนในการวางแผนเวลา',
            img:['/images/myproject/tbl_hackathon/4.png','/images/myproject/tbl_hackathon/2.png','/images/myproject/tbl_hackathon/3.png','/images/myproject/tbl_hackathon/1.png'],
            tech:["Laravel", "Tailwind CSS", "MySQL"],
            challenges:"การทำงานภายใต้ความกดดันสูงกับผู้บริหารระดับองค์กร การประชุมรายวันเพื่ออัพเดตความคืบหน้า และการพัฒนาโซลูชันที่มีประสิทธิภาพภายในกรอบเวลาที่จำกัด",
            websitelink:"https://jengcharat.com/tbl_hackathon/public/map"
        },
        {
            name:'KKU Lost & Found System',
            detail:'แพลตฟอร์มจัดการของหายภายในมหาวิทยาลัยขอนแก่น เพื่อแก้ไขปัญหาการประกาศหาของหายผ่านช่องทางโซเชียลมีเดียที่ไม่เป็นระบบ โดยจัดระเบียบข้อมูลและเพิ่มประสิทธิภาพในการค้นหา',
            img:['/images/myproject/kku_missing/1.png','/images/myproject/kku_missing/2.png','/images/myproject/kku_missing/3.png','/images/myproject/kku_missing/4.png','/images/myproject/kku_missing/5.png','/images/myproject/kku_missing/6.png','/images/myproject/kku_missing/7.png'],
            tech:["Laravel", "Tailwind CSS", "MySQL"],
            challenges:"การปรับตัวกับสภาพแวดล้อมการพัฒนาใหม่ การแก้ไขปัญหา Configuration ระหว่างการย้ายระบบจาก Local Network ไปยัง Production Server และการเรียนรู้ Framework ใหม่ในเวลาจำกัด",
            websitelink:"https://webcs0567.cpkkuhost.com"
        },
        {
            name:'Foundly - Lost & Found Platform',
            detail:'ระบบจัดการของหายแบบครบวงจร พัฒนาจากประสบการณ์ในโครงการ KKU Lost & Found โดยเพิ่มฟังก์ชันการทำงานที่สมบูรณ์และเตรียมความพร้อมสำหรับการใช้งานจริงในวงกว้าง',
            img:['/images/myproject/foundly/1.png','/images/myproject/foundly/2.png','/images/myproject/foundly/3.png','/images/myproject/foundly/4.png','/images/myproject/foundly/5.png','/images/myproject/foundly/6.png','/images/myproject/foundly/7.png','/images/myproject/foundly/8.png','/images/myproject/foundly/9.png','/images/myproject/foundly/10.png'],
            tech:["Laravel", "React", "MySQL", "Tailwind CSS"],
            challenges:"การบริหารจัดการทีมการประสานงานระหว่างสมาชิกทีมที่มีความเร็วในการทำงานแตกต่างกัน และการออกแบบสถาปัตยกรรมระบบที่รองรับการขยายตัวในอนาคต",
            websitelink:"https://findlytest.xyz"
        },
        {
            name:'Travel Cluster - Tourism Assistant',
            detail:'แพลตฟอร์มแนะนำการท่องเที่ยวแบบกลุ่มคลัสเตอร์ สำหรับนักท่องเที่ยวชาวไทยและต่างชาติ โดยเพิ่มความปลอดภัยและประหยัดเวลาในการวางแผนการเดินทาง',
            img:['/images/myproject/travelcluster/4.png','/images/myproject/travelcluster/1.jpeg','/images/myproject/travelcluster/2.png','/images/myproject/travelcluster/3.png','/images/myproject/travelcluster/5.png'],
            tech:["Laravel", "React", "MySQL"],
            challenges:"การแข่งขันภายใต้ข้อจำกัดของเวลา การเก็บ Requirement ที่ไม่สมบูรณ์จากผู้ใช้งาน และการพัฒนาอัลกอริทึมที่ตอบโจทย์ความต้องการของผู้ใช้งานได้อย่างมีประสิทธิภาพ",
            websitelink:"https://travelcluster.app/map"
        },
        {
            name: 'Petfolio - Pet Management System',
            detail: 'ระบบจัดการประวัติสุขภาพสัตว์เลี้ยงแบบครบวงจร รวมถึงฟังก์ชันบันทึกข้อมูล สร้างชุมชนสัตว์เลี้ยง และระบบแจ้งเตือนการดูแลรักษา',
            img: ['/images/myproject/petfolio/1.png','/images/myproject/petfolio/2.png','/images/myproject/petfolio/3.png','/images/myproject/petfolio/4.png','/images/myproject/petfolio/5.png','/images/myproject/petfolio/6.png','/images/myproject/petfolio/7.png','/images/myproject/petfolio/8.png','/images/myproject/petfolio/9.png','/images/myproject/petfolio/10.png','/images/myproject/petfolio/11.png','/images/myproject/petfolio/12.png','/images/myproject/petfolio/13.png','/images/myproject/petfolio/14.png','/images/myproject/petfolio/15.png','/images/myproject/petfolio/16.png','/images/myproject/petfolio/17.png','/images/myproject/petfolio/18.png','/images/myproject/petfolio/19.png','/images/myproject/petfolio/20.png','/images/myproject/petfolio/21.png','/images/myproject/petfolio/22.png','/images/myproject/petfolio/23.png','/images/myproject/petfolio/24.png','/images/myproject/petfolio/25.png','/images/myproject/petfolio/26.png','/images/myproject/petfolio/27.png'],
            tech:["Next.js", "Express.js", "MongoDB", "JWT", "RESTful API"],
            challenges:"การเรียนรู้และปรับตัวกับการใช้ NoSQL Database ในการพัฒนาระบบขนาดใหญ่ การบริหารจัดการทีมที่มีความเร็วในการทำงานหลากหลาย และการออกแบบระบบที่รองรับการใช้งานจริง",
            githubrepo:"https://github.com/JengCharat/petfolio.git",
            websitelink:"https://petfolio.lol"
        },
        {
            name: 'Vilapark - Condominium Management System',
            detail: 'ระบบบริหารจัดการคอนโดมิเนียมสัตว์เลี้ยง ประกอบด้วยโมดูลสำหรับผู้เช่า ผู้จัดการ และผู้ดูแลระบบ เพื่อเพิ่มประสิทธิภาพในการจองห้องและจัดการทรัพย์สิน',
            img: ['/images/myproject/vilapark/1.png','/images/myproject/vilapark/2.png','/images/myproject/vilapark/3.png','/images/myproject/vilapark/4.png','/images/myproject/vilapark/5.png','/images/myproject/vilapark/6.png','/images/myproject/vilapark/7.png','/images/myproject/vilapark/8.png','/images/myproject/vilapark/9.png','/images/myproject/vilapark/10.png','/images/myproject/vilapark/11.png','/images/myproject/vilapark/12.png'],
            tech:["Next.js", "Spring Boot", "MySQL", "RESTful API"],
            challenges:"การเรียนรู้ Framework ใหม่ที่มีความซับซ้อนสูง การประสานงานระหว่าง Frontend และ Backend ที่ใช้เทคโนโลยีต่างกัน",
            githubrepo:"https://github.com/JengCharat/VilaPark.git",
            websitelink:"https://vilapark.app/signup"
        },
        {
          name: 'เกมแม่ใช้ไปซื้อน้ำปลา',
          detail: 'เด็กชายตื่นขึ้นเมื่อได้ยินแม่บอกให้ไปซื้อของใช้ โดยรู้สึกโมโหและไม่พอใจ แต่ก็ไม่สนใจเหตุผลที่แม่บอก ในตัวเด็กคิดว่าแม่ต้องการน้ำปลาอย่างแน่นอน จึงไม่ถามแม่และรีบไปซื้อของ เมื่อกลับมาหน้ามืดเขารู้สึกแปลกๆ พบว่าถือเทียนอยู่ รู้สึกต้องหนีออกจากที่นั้น และพบว่าสภาพแวดล้อมเปลี่ยนแปลงทั้งมืดมิดและรู้สึกว่ามีความอันตรายใกล้เข้ามา',
          img: [
            '/images/myproject/mcpcnp/1.png',
            '/images/myproject/mcpcnp/3.png',
            '/images/myproject/mcpcnp/4.png',
            '/images/myproject/mcpcnp/5.png',
            '/images/myproject/mcpcnp/6.png',
            '/images/myproject/mcpcnp/7.png',
            '/images/myproject/mcpcnp/8.png',
            '/images/myproject/mcpcnp/9.png',
            '/images/myproject/mcpcnp/10.png',
            '/images/myproject/mcpcnp/11.png',
            '/images/myproject/mcpcnp/12.png',
            '/images/myproject/mcpcnp/13.png',
            '/images/myproject/mcpcnp/14.png'
          ],
          tech: ['Java Swing'],
          challenges: 'การพัฒนาเกมด้วย Java Swing มีความซับซ้อนและต้องดำเนินงานภายใต้ข้อจำกัดด้านเวลา',
          githubrepo:"https://github.com/PANANG6425/MCPSNP.git",
        },
        {
          name: 'Velocity Guard',
          detail: 'ระบบคำนวณมุมเอียงของรถจักรยานยนต์เพื่อช่วยประเมินองศาที่เหมาะสมในการเข้าโค้งตามความเร็วที่กำหนด โดยมีเป้าหมายเพื่อลดความเสี่ยงในการล้มและเพิ่มความปลอดภัยในการขับขี่',
          img: [
            '/images/myproject/velocityguard/1.png',
            '/images/myproject/velocityguard/2.png',
            '/images/myproject/velocityguard/3.png',
            '/images/myproject/velocityguard/4.png',
            '/images/myproject/velocityguard/5.png',
            '/images/myproject/velocityguard/6.png',
            '/images/myproject/velocityguard/7.png',
            '/images/myproject/velocityguard/8.png',
            '/images/myproject/velocityguard/9.png',
            '/images/myproject/velocityguard/10.png',
            '/images/myproject/velocityguard/11.png',
            '/images/myproject/velocityguard/12.png',
            '/images/myproject/velocityguard/13.png',
            '/images/myproject/velocityguard/14.png',
            '/images/myproject/velocityguard/15.png',
            '/images/myproject/velocityguard/16.png',
            '/images/myproject/velocityguard/17.png',
            '/images/myproject/velocityguard/18.png',
            '/images/myproject/velocityguard/19.png',
            '/images/myproject/velocityguard/20.png',
            '/images/myproject/velocityguard/21.png',
            '/images/myproject/velocityguard/22.png',
            '/images/myproject/velocityguard/23.png',
            '/images/myproject/velocityguard/24.png',
            '/images/myproject/velocityguard/25.png',
            '/images/myproject/velocityguard/26.png',
            '/images/myproject/velocityguard/27.png',
            '/images/myproject/velocityguard/28.png',
            '/images/myproject/velocityguard/29.png'
          ],
          tech: ['Python 3', 'HTML'],
          challenges: 'ระบบจำเป็นต้องใช้ข้อมูลแผนที่และปัจจัยด้านสภาพพื้นผิวถนน ซึ่งมีผลต่อแรงยึดเกาะ เช่น คอนกรีตและยางมะตอย ทำให้การคำนวณมีความซับซ้อนมากขึ้น'
        },
        {
          name: 'การเขียนชุดทดสอบเพื่อเปรียบเทียบคุณภาพโค้ดระหว่างมนุษย์และ AI',
          detail: 'โครงการนี้มุ่งเน้นการออกแบบและเขียนชุดทดสอบ (Test Cases) เพื่อประเมินคุณภาพของซอร์สโค้ดที่เขียนโดยมนุษย์และระบบปัญญาประดิษฐ์ โดยใช้เครื่องมือวิเคราะห์โค้ดแบบสถิตและการทดสอบหน่วย เพื่อเปรียบเทียบด้านความซับซ้อนของโค้ด ความสามารถในการบำรุงรักษา และความถูกต้องของการทำงาน',
          img: [
            '/images/myproject/sqa/1.png',
            '/images/myproject/sqa/2.png',
            '/images/myproject/sqa/3.png',
            '/images/myproject/sqa/4.png',
            '/images/myproject/sqa/5.png',
            '/images/myproject/sqa/6.png',
            '/images/myproject/sqa/7.png',
            '/images/myproject/sqa/8.png',
            '/images/myproject/sqa/9.png',
            '/images/myproject/sqa/10.png',
            '/images/myproject/sqa/11.png',
            '/images/myproject/sqa/12.png',
            '/images/myproject/sqa/13.png',
            '/images/myproject/sqa/14.png',
            '/images/myproject/sqa/15.png',
            '/images/myproject/sqa/16.png',
            '/images/myproject/sqa/17.png',
            '/images/myproject/sqa/18.png',
            '/images/myproject/sqa/19.png',
            '/images/myproject/sqa/20.png',
            '/images/myproject/sqa/21.png',
            '/images/myproject/sqa/22.png',
            '/images/myproject/sqa/26.png',
            '/images/myproject/sqa/27.png',
            '/images/myproject/sqa/28.png',
            '/images/myproject/sqa/29.png',
            '/images/myproject/sqa/30.png',
            '/images/myproject/sqa/31.png',
            '/images/myproject/sqa/32.png'
          ],
          tech: [
            'Static Code Analysis Tools',
            'Cyclomatic Complexity Analysis',
            'JUnit'
          ],
          challenges: 'การวิเคราะห์ซอร์สโค้ดในเชิงลึกต้องใช้ความละเอียดรอบคอบและใช้เวลาค่อนข้างมาก ซึ่งอาจเป็นงานที่ท้าทายในแง่ของความต่อเนื่องและความน่าสนใจ',
          githubrepo:"https://github.com/JengCharat/sqa_project.git"
        }
    ]

    const contact:ContactItem[] = [
      { name: 'โทรศัพท์', detail: ['088-670-7555'], img: '123' },
      { name: 'อีเมล', detail: ['kaewpetcharat.sisan@gmail.com','kaewpetcharat.s@kkumail.com'], img: '123'},
      { name: 'GitHub', detail: ['github.com/JengCharat'], img: '123' },
    ]

    const technicalskill:TechnicalSkillItem[] = [
        {skill:'HTML'},{skill:'CSS'},{skill:'JavaScript'},{skill:'TypeScript'},{skill:'Laravel'},
        {skill:'Next.js'},{skill:'Express.js'},{skill:'MySQL'},{skill:"MongoDB"},{skill:'Kotlin'},
        {skill:'C Programming'},{skill:'Java'}, { skill: 'JUnit (Java Unit Testing)' },{ skill: 'Robot Framework (UAT / Automation Testing)' },{skill:'Spring Boot'},{skill:"Python"},{skill:'React'}
    ]

    const toolandplatform:ToolAndPlatformItem[] = [
        {skill:"Neovim"},{skill:"Git"},{skill:"GitHub"},{skill:"Postman"},
        {skill:"Burp Suite"},{skill:"Android Studio"},{skill:"Google Colab"},
        {skill:"Linux"}
    ]

    const softskill:SoftSkillItem[] = [
      { skill: "Agile Methodology" }, { skill: "Team Collaboration" }, { skill: "Problem Solving" }, 
     { skill: "Adaptability" }, { skill: "Time Management" }, 
     { skill: "Self-Directed Learning" }, { skill: "Leadership" },
    ]

    const handlePrevImage = () => {
        if (selectedItem && 'img' in selectedItem && Array.isArray(selectedItem.img)) {
            setCurrentImageIndex(prev => 
                prev === 0 ? selectedItem.img.length - 1 : prev - 1
            )
        }
    }

    const handleNextImage = () => {
        if (selectedItem && 'img' in selectedItem && Array.isArray(selectedItem.img)) {
            setCurrentImageIndex(prev => 
                prev === selectedItem.img.length - 1 ? 0 : prev + 1
            )
        }
    }
    
    return (
        <>
            <Navbar/>
            
            {selectedItem && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => {
                    setSelectedItem(null)
                    setCurrentImageIndex(0)
                }}>
                    <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-500" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4 p-6">
                            <h3 className="text-2xl font-bold text-white">{selectedItem.name}</h3>
                            <button onClick={() => {
                                setSelectedItem(null)
                                setCurrentImageIndex(0)
                            }} className="hover:bg-gray-700 p-2 rounded-lg transition-colors">
                                <FaTimes className="text-white text-2xl" />
                            </button>
                        </div>
                        
                        {/* รูปภาพหลัก */}
                        <div className="relative h-64 md:h-96 mb-4 rounded-lg overflow-hidden mx-6">
                            {'img' in selectedItem && Array.isArray(selectedItem.img) ? (
                                <Image 
                                    src={selectedItem.img[currentImageIndex]} 
                                    alt={`${selectedItem.name} - รูปที่ ${currentImageIndex + 1}`} 
                                    fill 
                                    className="object-contain bg-gray-900" 
                                    priority
                                />
                            ) : 'img' in selectedItem ? (
                                <Image 
                                    src={selectedItem.img as string} 
                                    alt={selectedItem.name} 
                                    fill 
                                    className="object-contain bg-gray-900" 
                                    priority
                                />
                            ) : null}
                            
                            {/* ปุ่มเลื่อนรูปถ้ามีหลายรูป */}
                            {'img' in selectedItem && Array.isArray(selectedItem.img) && selectedItem.img.length > 1 && (
                                <>
                                    <button 
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <button 
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <FaArrowRight />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                        {currentImageIndex + 1} / {selectedItem.img.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* รูปภาพย่อย (ถ้ามี) */}
                        {'img' in selectedItem && Array.isArray(selectedItem.img) && selectedItem.img.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-4 px-6">
                                {selectedItem.img.map((img, index) => (
                                    <div 
                                        key={index} 
                                        className={`relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${index === currentImageIndex ? 'ring-2 ring-blue-500 scale-105' : 'opacity-60 hover:opacity-80 hover:scale-102'}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    >
                                        <Image 
                                            src={img} 
                                            alt={`${selectedItem?.name} - รูปที่ ${index + 1}`} 
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="p-6">
                            <p className="text-gray-300 whitespace-pre-line mb-6 leading-relaxed">{selectedItem.detail}</p>
                            
                            {/* สำหรับโปรเจค แสดงเทคโนโลยีที่ใช้และความท้าทาย */}
                            {'img' in selectedItem && Array.isArray(selectedItem.img) && 'tech' in selectedItem && 'challenges' in selectedItem && (
                                <div className="space-y-6">
                                    {/* เทคโนโลยีที่ใช้ */}
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <FaTools className="text-blue-400" />
                                            เทคโนโลยีและเครื่องมือที่ใช้
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.tech.map((tech, index) => (
                                                <span key={index} className="px-3 py-1.5 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-700/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ลิงก์ GitHub และ Website */}
                                    <div className="flex flex-wrap gap-4">
                                        {'githubrepo' in selectedItem && selectedItem.githubrepo && (
                                            <a 
                                                href={selectedItem.githubrepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                                            >
                                                <FaGithub className="text-white" />
                                                <span>GitHub Repository</span>
                                                <FaExternalLinkAlt className="text-xs" />
                                            </a>
                                        )}
                                        {'websitelink' in selectedItem && selectedItem.websitelink && (
                                            <a 
                                                href={selectedItem.websitelink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                            >
                                                <FaGlobe className="text-white" />
                                                <span>Visit Website</span>
                                                <FaExternalLinkAlt className="text-xs" />
                                            </a>
                                        )}
                                    </div>

                                    {/* ความท้าทายและบทเรียนที่ได้รับ */}
                                    <div className="bg-gray-700/50 p-5 rounded-lg border border-gray-600">
                                        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <FaLightbulb className="text-yellow-400" />
                                            ความท้าทายและบทเรียนที่ได้รับ
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed">{selectedItem.challenges}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10 bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-white text-center mb-5">GitHub Activity</h2>
                        <div className='flex justify-center'>
                            <GitHubCalendar 
                                username="jengcharat" 
                                blockSize={12} 
                                blockMargin={3} 
                                fontSize={12} 
                                colorScheme="dark" 
                            />
                        </div>
                    </div>

                    <div id="about" className="flex flex-col md:flex-row items-center gap-10 mb-16">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                            <Image 
                                src="/images/my-profile-img.jpg" 
                                alt="profile" 
                                fill 
                                className="object-cover" 
                                priority
                            />
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-2xl mb-3">สวัสดีครับ <span className="text-blue-400 font-semibold text-5xl">ผมเจ๋ง</span></h3>
                            <h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                แก้วเพ็ชรัตน์ สีสันต์
                            </h1>
                            <p className="text-gray-300 mb-7 text-lg leading-relaxed">
                                นักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น 
                                มีความสนใจและความหลงใหลในการพัฒนาเทคโนโลยีสร้างสรรค์ 
                                มีประสบการณ์ในการแข่งขันด้านหุ่นยนต์และการพัฒนาโปรเจคเพื่อแก้ไขปัญหาจริง
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                                <a href="#myproject" className="px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
                                    ดูผลงานทั้งหมด
                                </a>
                                <a href="#contact" className="px-7 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all">
                                    ติดต่อ
                                </a>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gray-800/80 p-4 rounded-xl cursor-pointer hover:bg-gray-700/80 transition-colors" onClick={() => setSelectedItem(mathayom_certification[0])}>
                                    <div className="text-sm text-gray-400 mb-1">เกียรติบัตร</div>
                                    <div className="text-3xl font-bold text-blue-400">{mathayom_certification.length}</div>
                                </div>
                                <div className="bg-gray-800/80 p-4 rounded-xl cursor-pointer hover:bg-gray-700/80 transition-colors" onClick={() => setSelectedItem(myproject[0])}>
                                    <div className="text-sm text-gray-400 mb-1">โครงการ</div>
                                    <div className="text-3xl font-bold text-green-400">{myproject.length}</div>
                                </div>
                                <div className="bg-gray-800/80 p-4 rounded-xl">
                                    <div className="text-sm text-gray-400 mb-1">ทักษะทางเทคนิค</div>
                                    <div className="text-3xl font-bold text-purple-400">{technicalskill.length}</div>
                                </div>
                                <div className="bg-gray-800/80 p-4 rounded-xl">
                                    <div className="text-sm text-gray-400 mb-1">รางวัลที่ได้รับ</div>
                                    <div className="text-3xl font-bold text-yellow-400">{mathayom_certification.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="skill" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">ทักษะและความสามารถ</h2>
                        <div className="grid gap-8">
                            <div className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl border border-gray-700">
                                <h3 className="text-2xl font-bold mb-5 text-blue-400">ทักษะทางเทคนิค</h3>
                                <div className="flex flex-wrap gap-3">
                                    {technicalskill.map((item,i) => (
                                        <span key={i} className="px-4 py-2.5 bg-blue-900/30 text-blue-300 rounded-lg border border-blue-700/30">
                                            {item.skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl border border-gray-700">
                                    <h3 className="text-2xl font-bold mb-5 text-green-400">เครื่องมือและแพลตฟอร์ม</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {toolandplatform.map((item,i) => (
                                            <span key={i} className="px-4 py-2.5 bg-green-900/30 text-green-300 rounded-lg border border-green-700/30">
                                                {item.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl border border-gray-700">
                                    <h3 className="text-2xl font-bold mb-5 text-purple-400">ทักษะส่วนบุคคล</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {softskill.map((item,i) => (
                                            <span key={i} className="px-4 py-2.5 bg-purple-900/30 text-purple-300 rounded-lg border border-purple-700/30">
                                                {item.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="myproject" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-10">โครงการที่น่าสนใจ</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {myproject.map((item,i) => (
                                <div key={i} className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50" onClick={() => {
                                    setSelectedItem(item)
                                    setCurrentImageIndex(0)
                                }}>
                                    <div className="relative h-48">
                                        <Image src={item.img[0]} alt={item.name} fill className="object-cover" />
                                        <div className="absolute top-3 right-3 flex gap-1">
                                            {item.img.length > 1 && (
                                                <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                                                    +{item.img.length - 1} รูป
                                                </div>
                                            )}
                                            {item.githubrepo && (
                                                <div className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm border border-gray-600">
                                                    <FaGithub />
                                                </div>
                                            )}
                                            {item.websitelink && (
                                                <div className="bg-blue-600/90 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm border border-blue-500">
                                                    <FaLink />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">{item.detail}</p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {item.tech.slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="px-2.5 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                            {item.tech.length > 3 && (
                                                <span className="px-2.5 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                                                    +{item.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-1">
                                            คลิกเพื่อดูรายละเอียด →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="certificate" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-10">เกียรติบัตรและรางวัล</h2>
                        <div className="mb-10">
                            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
                                {mathayom_certification.map((item,i) => (
                                    <div key={i} className="min-w-72 snap-start bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-gray-700/80 transition-colors border border-gray-700" onClick={() => setSelectedItem(item)}>
                                        <div className="relative h-44">
                                            <Image src={item.img} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                                            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-8">ภาพกิจกรรมและประสบการณ์</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {activity_image.map((item,i) => (
                                <div key={i} className="relative h-48 rounded-xl overflow-hidden cursor-pointer group" onClick={() => setSelectedItem(item)}>
                                    <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h4 className="text-white font-bold">{item.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="contact" className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-10">ช่องทางการติดต่อ</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {contact.map((item,i) => (
                                <div key={i} className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl text-center hover:bg-gray-700/80 transition-colors border border-gray-700">
                                    <h3 className="font-bold text-xl mb-4 text-blue-400">{item.name}</h3>
                                    <div className="space-y-2">
                                        {item.detail?.map((d,idx) => (
                                            <p key={idx} className="text-gray-300 cursor-pointer hover:text-white transition-colors" onClick={() => {
                                                if(item.name === 'GitHub') window.open('https://github.com/JengCharat', '_blank')
                                                if(item.name === 'โทรศัพท์') window.location.href = `tel:${d}`
                                                if(item.name === 'อีเมล') window.location.href = `mailto:${d}`
                                            }}>
                                                {d}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
