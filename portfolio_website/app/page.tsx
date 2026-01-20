'use client'
import { GitHubCalendar } from 'react-github-calendar'
import Navbar from "./components/Navbar"
import Image from "next/image"
import { useState } from "react"
import { FaPhone, FaEnvelope, FaGithub, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa"

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
    img:string[]
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
      { name: 'แข่งขันหุ่นยนต์ระดับสูง', detail:'แข่งขันหุ่นยนต์ระดับสูง ม.1-ม.3 (เหรียญเงิน) งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69 ปี 2562', img:'/images/certification/silapa69-high.png'},
      { name: 'แข่งหุ่นยนต์ระดับกลาง', detail:'แข่งขันหุ่นยนต์ระดับกลาง ม.1-ม.3 (เหรียญทองแดง) งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69 ปี 2562', img:'/images/certification/silapa69-middle.png'},
      { name: 'แข่งขันหุ่นยนต์ระผสม', detail:'แข่งขันหุ่นยนต์ระผสม ม.1-ม.3 (เหรียญเงิน) งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 69 ปี 2562', img:'/images/certification/silapa69-mix.png'},
      { name: 'ประกวดโครงงานระดับนานาชาติ', detail:'ประกวดโครงงานระดับนานาชาติ Indonesia Inventors Day 2022 (9th IYIA)', img:'/images/certification/farm_microcontroller.png'},
      { name: 'แข่งขันหุ่นยนต์ระดับสูง', detail:'แข่งขันหุ่นยนต์ระดับสูง ม.1-ม.3 (เหรียญเงิน) งานศิลปหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 68 ปี 2561', img:'/images/certification/silapa68-high.png'},
      { name: 'buffolo robot', detail:'แข่งขันหุ่นยนต์ควายตู้ระดับอุดมศึกษา มหาวิทยาลัยอุบลราชธานี', img:'/images/certification/buffolo.png'},
      { name: 'science project', detail:'ประกวดโครงงานวิทยาศาสตร์ สิ่งประดิษฐ์ทางวิทยาศาสตร์ รางวัลชมเชย', img:'/images/certification/science_project.png'},
      { name: 'ubu smart assistance', detail:'ประกวดโครงงานวิทยาศาสตร์ (เหรียญทองแดง) มหาวิทยาลัยอุบลราชธานี', img:'/images/certification/ubu_smart_assistance.png'},
      { name: 'cira core training', detail:'อบรมเชิงปฎิบัติการ CIRA Core สำหรับสร้างสรรค์โครงงานนวัตกรรม', img:'/images/certification/cira_core_training.png'},
      { name: 'micro controller training', detail:'อบรมสร้างเครื่องมือวัดปริมาณต่างๆ ด้วยบอร์ดไมโครคอนโทรลเลอร์', img:'/images/certification/microcontroller_training.png'},
      { name: 'ร่วมพัฒนาสถานศึกษา', detail:'ร่วมพัฒนาสถานศึกษาจนได้รับรางวัลพระราชทาน ปีการศึกษา 2561', img:'/images/certification/school.png'},
      { name: 'c language training', detail:'อบรมการเขียนโปรแกรมภาษา C สำหรับคอมพิวเตอร์โอลิมปิกวิชาการ ปี 2561', img:'/images/certification/c_lang_training.png'},
      { name: 'microcontroller for farm', detail:'อบรมเชิงปฎิบัติการใช้ไมโครคอนโทรลเลอร์สร้างนวัตกรรมฟาร์มอัจฉริยะ', img:'/images/certification/farm_microcontroller.png'},
    ]

        const activity_image: ActivityImageItem[] = [
            {
                name: 'กิจกรรมแข่งขันหุ่นยนต์',
                detail: 'ภาพกิจกรรมการแข่งขันหุ่นยนต์',
                img: '/images/activity_image/1.png'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/2.png'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/3.png'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/4.png'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/5.png'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/6.jpg'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/7.JPG'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/8.JPG'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/9.jpg'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/10.jpg'
            },

            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/11.JPG'
            },
            {
                name: 'กิจกรรมอบรม',
                detail: 'ภาพกิจกรรมการอบรมเชิงปฏิบัติการ',
                img: '/images/activity_image/12.JPG'
            }
        ]

    // กำหนดรูปภาพรายละเอียดสำหรับแต่ละโปรเจค
    const myproject:MyProjectItem[] = [
        {
            name:'TBL HACKATHON',
            detail:'hackathon project',
            img:[
                '/images/myproject/tbl_hackathon/4.png',
                '/images/myproject/tbl_hackathon/2.png',
                '/images/myproject/tbl_hackathon/3.png',
                '/images/myproject/tbl_hackathon/1.png'
            ]
        },
        {
            name:'kku ของหาย',
            detail:'web app project',
            img:[
                '/images/myproject/kku_missing/1.png',
                '/images/myproject/kku_missing/2.png',
                '/images/myproject/kku_missing/3.png',
                '/images/myproject/kku_missing/4.png',
                '/images/myproject/kku_missing/5.png',
                '/images/myproject/kku_missing/6.png',
                '/images/myproject/kku_missing/7.png',
            ]
        },
        {
            name:'foundly',
            detail:'web app project',
            img:[
                '/images/myproject/foundly/1.png',
                '/images/myproject/foundly/2.png',
                '/images/myproject/foundly/3.png',
                '/images/myproject/foundly/4.png',
                '/images/myproject/foundly/5.png',
                '/images/myproject/foundly/6.png',
                '/images/myproject/foundly/7.png',
                '/images/myproject/foundly/8.png',
                '/images/myproject/foundly/9.png',
                '/images/myproject/foundly/10.png',
            ]
        },
        {
            name:'TRAVEL CLUSTER',
            detail:'krungsri hackathon',
            img:[
                '/images/myproject/travelcluster/4.png',
                '/images/myproject/travelcluster/1.jpeg',
                '/images/myproject/travelcluster/2.png',
                '/images/myproject/travelcluster/3.png',
                '/images/myproject/travelcluster/5.png'
            ]
        },
        {
            name: 'petfolio',
            detail: 'data serialization project',
            img: [
                '/images/myproject/petfolio/1.png',
                '/images/myproject/petfolio/2.png',
                '/images/myproject/petfolio/3.png',
                '/images/myproject/petfolio/4.png',
                '/images/myproject/petfolio/5.png',
                '/images/myproject/petfolio/6.png',
                '/images/myproject/petfolio/7.png',
                '/images/myproject/petfolio/8.png',
                '/images/myproject/petfolio/9.png',
                '/images/myproject/petfolio/10.png',
                '/images/myproject/petfolio/11.png',
                '/images/myproject/petfolio/12.png',
                '/images/myproject/petfolio/13.png',
                '/images/myproject/petfolio/14.png',
                '/images/myproject/petfolio/15.png',
                '/images/myproject/petfolio/16.png',
                '/images/myproject/petfolio/17.png',
                '/images/myproject/petfolio/18.png',
                '/images/myproject/petfolio/19.png',
                '/images/myproject/petfolio/20.png',
                '/images/myproject/petfolio/21.png',
                '/images/myproject/petfolio/22.png',
                '/images/myproject/petfolio/23.png',
                '/images/myproject/petfolio/24.png',
                '/images/myproject/petfolio/25.png',
                '/images/myproject/petfolio/26.png',
                '/images/myproject/petfolio/27.png',
            ]
        },
        {
            name: 'vilapark',
            detail: 'web app project',
            img: [
                '/images/myproject/vilapark/1.png',
                '/images/myproject/vilapark/2.png',
                '/images/myproject/vilapark/3.png',
                '/images/myproject/vilapark/4.png',
                '/images/myproject/vilapark/5.png',
                '/images/myproject/vilapark/6.png',
                '/images/myproject/vilapark/7.png',
                '/images/myproject/vilapark/8.png',
                '/images/myproject/vilapark/9.png',
                '/images/myproject/vilapark/10.png',
                '/images/myproject/vilapark/11.png',
                '/images/myproject/vilapark/12.png',
            ]
        }
    ]

    const contact:ContactItem[] = [
      { name: 'โทรศัพท์', detail: ['088-670-7555'], img: '123' },
      { name: 'อีเมล', detail: ['kaewpetcharat.sisan@gmail.com','kaewpetcharat.s@kkumail.com'], img: '123'},
      { name: 'github', detail: ['github.com/JengCharat'], img: '123' },
    ]

    const technicalskill:TechnicalSkillItem[] = [
        {skill:'html'},{skill:'css'},{skill:'javascript'},{skill:'laravel'},
        {skill:'next js'},{skill:'express'},{skill:'mysql'},{skill:'kotlin'},
        {skill:'c++'},{skill:'java'},{skill:'java springboot'},
    ]

    const toolandplatform:ToolAndPlatformItem[] = [
        {skill:"neovim"},{skill:"git"},{skill:"lazygit"},{skill:"postman"},
    ]

    const softskill:SoftSkillItem[] = [
        {skill:"agile"},{skill:"teamwork"},{skill:"problem solving"},
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
                            }}><FaTimes className="text-white text-2xl" /></button>
                        </div>
                        
                        {/* รูปภาพหลัก */}
                        <div className="relative h-64 md:h-96 mb-4 rounded-lg overflow-hidden mx-6">
                            {'img' in selectedItem && Array.isArray(selectedItem.img) ? (
                                <Image 
                                    src={selectedItem.img[currentImageIndex]} 
                                    alt={`${selectedItem.name} - รูปที่ ${currentImageIndex + 1}`} 
                                    fill 
                                    className="object-contain bg-gray-900" 
                                />
                            ) : 'img' in selectedItem ? (
                                <Image 
                                    src={selectedItem.img as string} 
                                    alt={selectedItem.name} 
                                    fill 
                                    className="object-contain bg-gray-900" 
                                />
                            ) : null}
                            
                            {/* ปุ่มเลื่อนรูปถ้ามีหลายรูป */}
                            {'img' in selectedItem && Array.isArray(selectedItem.img) && selectedItem.img.length > 1 && (
                                <>
                                    <button 
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <button 
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
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
                                        className={`relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${index === currentImageIndex ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-80'}`}
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
                            <p className="text-gray-300 whitespace-pre-line">{selectedItem.detail}</p>
                            
                            {/* สำหรับโปรเจค แสดงเทคโนโลยีที่ใช้ */}
                            {'img' in selectedItem && Array.isArray(selectedItem.img) && (
                                <div className="mt-6">
                                    <h4 className="text-xl font-bold text-white mb-3">รายละเอียดเพิ่มเติม</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedItem.name === 'TBL HACKATHON' && (
                                            <>
                                                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">Next.js</span>
                                                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">Node.js</span>
                                                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">MongoDB</span>
                                            </>
                                        )}
                                        {selectedItem.name === 'kku ของหาย' && (
                                            <>
                                                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full">Laravel</span>
                                                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full">MySQL</span>
                                                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full">Bootstrap</span>
                                            </>
                                        )}
                                        {selectedItem.name === 'foundly' && (
                                            <>
                                                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full">React</span>
                                                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full">Express.js</span>
                                                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full">PostgreSQL</span>
                                            </>
                                        )}
                                        {selectedItem.name === 'TRAVEL CLUSTER' && (
                                            <>
                                                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full">Python</span>
                                                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full">Flask</span>
                                                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full">React Native</span>
                                            </>
                                        )}
                                        {selectedItem.name === 'petfolio' && (
                                            <>
                                                <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full">Kotlin</span>
                                                <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full">Spring Boot</span>
                                                <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full">Blockchain</span>
                                            </>
                                        )}
                                        {selectedItem.name === 'vilapark' && (
                                            <>
                                                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full">Next.js</span>
                                                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full">TypeScript</span>
                                                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full">Prisma</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            <div className="min-h-screen bg-gray-900 text-white p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 bg-gray-800 p-4 rounded-xl">
                        <h2 className="text-white text-center mb-4">GitHub Activity</h2>
                        <div className='flex justify-center'>
                            <GitHubCalendar username="jengcharat" blockSize={12} blockMargin={3} fontSize={12} colorScheme="dark" />
                        </div>
                    </div>

                    <div id="about" className="flex flex-col md:flex-row items-center gap-8 mb-12">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500">
                            <Image src="/images/my-profile-img.jpg" alt="profile" fill className="object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl mb-2">สวัสดีครับ <span className="text-blue-400">ผมเจ๋ง</span></h3>
                            <h1 className="text-3xl font-bold mb-4">แก้วเพ็ชรัตน์ สีสันต์</h1>
                            <p className="text-gray-300 mb-6">นักศึกษาปี 3 วิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น หลงใหลในการสร้างสรรค์เทคโนโลยี</p>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <a href="#myproject" className="px-6 py-2 bg-blue-600 rounded-lg">ดูผลงาน</a>
                                <a href="#contact" className="px-6 py-2 border border-blue-500 rounded-lg">ติดต่อ</a>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gray-800 p-3 rounded-lg" onClick={() => setSelectedItem(mathayom_certification[0])}>
                                    <div className="text-sm">เกียรติบัตร</div>
                                    <div className="text-2xl font-bold text-blue-400">{mathayom_certification.length}</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-lg" onClick={() => setSelectedItem(myproject[0])}>
                                    <div className="text-sm">โปรเจค</div>
                                    <div className="text-2xl font-bold text-green-400">{myproject.length}</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <div className="text-sm">ทักษะ</div>
                                    <div className="text-2xl font-bold text-purple-400">{technicalskill.length}</div>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <div className="text-sm">รางวัล</div>
                                    <div className="text-2xl font-bold text-yellow-400">{mathayom_certification.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="skill" className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">ทักษะและความสามารถ</h2>
                        <div className="grid gap-6">
                            <div className="bg-gray-800 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {technicalskill.map((item,i) => <span key={i} className="px-3 py-1 bg-blue-900/50 rounded-full">{item.skill}</span>)}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-800 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {toolandplatform.map((item,i) => <span key={i} className="px-3 py-1 bg-green-900/50 rounded-full">{item.skill}</span>)}
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {softskill.map((item,i) => <span key={i} className="px-3 py-1 bg-purple-900/50 rounded-full">{item.skill}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="certificate" className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">เกียรติบัตร & รางวัล</h2>
                        <div className="flex overflow-x-auto gap-4 pb-4">
                            {mathayom_certification.map((item,i) => (
                                <div key={i} className="min-w-64 bg-gray-800 rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedItem(item)}>
                                    <div className="relative h-40">
                                        <Image src={item.img} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold mb-2">{item.name}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold mt-8 mb-4">ภาพกิจกรรม</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {activity_image.map((item,i) => (
                                <div key={i} className="relative h-40 rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedItem(item)}>
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="myproject" className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">โปรเจคที่น่าสนใจ</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {myproject.map((item,i) => (
                                <div key={i} className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer" onClick={() => {
                                    setSelectedItem(item)
                                    setCurrentImageIndex(0)
                                }}>
                                    <div className="relative h-40">
                                        <Image src={item.img[0]} alt={item.name} fill className="object-cover" />
                                        {item.img.length > 1 && (
                                            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                                                +{item.img.length - 1} รูป
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold mb-2">{item.name}</h3>
                                        <p className="text-gray-400">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="contact" className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">ติดต่อ</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {contact.map((item,i) => (
                                <div key={i} className="bg-gray-800 p-6 rounded-xl text-center">
                                    <h3 className="font-bold mb-2">{item.name}</h3>
                                    <div>
                                        {item.detail?.map((d,idx) => (
                                            <p key={idx} className="text-gray-300 cursor-pointer" onClick={() => {
                                                if(item.name === 'github') window.open('https://github.com/JengCharat', '_blank')
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
