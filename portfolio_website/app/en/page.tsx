'use client'
import { GitHubCalendar } from 'react-github-calendar'
import Navbar from '../components/Navbar'
import Image from "next/image"
import { useState } from "react"
import { FaPhone, FaEnvelope, FaGithub, FaTimes, FaArrowLeft, FaArrowRight, FaTools, FaLightbulb, FaLink, FaExternalLinkAlt, FaGlobe } from "react-icons/fa"

type ContactItem = {
    name: string,
    detail?: string[],
    img: string
}
type CertificateItem = {
    name: string,
    detail: string,
    img: string
}
type ActivityImageItem = {
    name: string,
    detail: string,
    img: string
}
type MyProjectItem = {
    name: string,
    detail: string,
    img: string[],
    tech: string[],
    challenges: string,
    githubrepo?: string,
    websitelink?: string
}
type TechnicalSkillItem = {
    skill: string
}
type ToolAndPlatformItem = {
    skill: string
}
type SoftSkillItem = {
    skill: string
}

export default function Home() {
    const [selectedItem, setSelectedItem] = useState<CertificateItem | MyProjectItem | ActivityImageItem | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const mathayom_certification: CertificateItem[] = [
        { name: 'International Project Competition at Indonesia Inventors Day 2022 (9th IYIA)', detail: `Invited to participate in the international project competition at Indonesia Inventors Day 2022 (9th IYIA) with the project "The Application of Artificial Intelligence for Analysis of Chillies Diseases, Nutrient Deficiencies, Pests Detection and Elimination with CIRA CORE Platform"
Organizer: INDONESIAN INVENTION AND INNOVATION PROMOTION ASSOCIATION (INNOPA)
Date: October 29-31, 2022
Location: Udayana University, Bali, Indonesia`, img: '/images/certification/iyia.png' },
        { name: 'Advanced Robot Competition', detail: 'Silver medal in Advanced Robot Competition for grades 7-9, 69th National Student Skills Competition 2019', img: '/images/certification/silapa69-high.png' },
        { name: 'Intermediate Robot Competition', detail: 'Bronze medal in Intermediate Robot Competition for grades 7-9, 69th National Student Skills Competition 2019', img: '/images/certification/silapa69-middle.png' },
        { name: 'Mixed Robot Competition', detail: 'Silver medal in Mixed Robot Competition for grades 7-9, 69th National Student Skills Competition 2019', img: '/images/certification/silapa69-mix.png' },
        { name: 'Advanced Robot Competition', detail: 'Silver medal in Advanced Robot Competition for grades 7-9, 68th National Student Skills Competition 2018', img: '/images/certification/silapa68-high.png' },
        { name: 'Buffalo Robot Competition', detail: 'Participated in Buffalo Robot Competition at university level, Engineering Technology Day, Faculty of Engineering, Ubon Ratchathani University', img: '/images/certification/buffolo.png' },
        { name: 'Science Project Competition', detail: 'Honorable Mention in Science Project and Innovation Competition, Ubon Ratchathani Rajabhat University', img: '/images/certification/science_project.png' },
        { name: 'UBU Smart Assistance Science Project Competition', detail: 'Bronze medal in Science Project Competition for junior high school students, Applied Science category, Ubon Ratchathani University', img: '/images/certification/ubu_smart_assistance.png' },
        { name: 'CIRA Core Training Workshop', detail: 'Completed practical workshop on applying CIRA Core program for innovative project creation and smart inventions', img: '/images/certification/cira_core_training.png' },
        { name: 'Micro Controller Training', detail: 'Completed training course on creating measurement tools for scientific work using microcontroller boards', img: '/images/certification/microcontroller_training.png' },
        { name: 'School Development Contribution', detail: 'Contributed to school development alongside administrators, teachers, and educational personnel, leading to the school receiving the Royal Award for large-sized schools in 2018', img: '/images/certification/school.png' },
        { name: 'C Programming Training', detail: 'Completed C Programming training for Computer Olympiad Academic Year 2018 at Luekhamhan Warinchamrab School', img: '/images/certification/c_lang_training.png' },
        { name: 'Microcontroller for Smart Farm Training', detail: 'Completed practical workshop on applying microcontrollers to create innovations for smart farming systems', img: '/images/certification/farm_microcontroller.png' },
    ]

    const activity_image: ActivityImageItem[] = [
        { name: 'Robot Competition Training Activities', detail: 'Robot competition training activities to prepare for competitions', img: '/images/activity_image/1.png' },
        { name: 'CIRA Core Training Activities', detail: 'Participated in CIRA Core practical workshop to develop AI and IoT skills', img: '/images/activity_image/2.png' },
        { name: 'Microcontroller Training Activities', detail: 'Microcontroller and embedded system training activities', img: '/images/activity_image/3.png' },
        { name: 'Young Maker Contest Final Round', detail: 'Top 20 national teams in ordinary education track, Young Maker Contest 4th edition', img: '/images/activity_image/4.png' },
        { name: 'Science Project and Innovation Competition', detail: 'Science project and innovation competition activities', img: '/images/activity_image/5.png' },
        { name: 'Krungsri Universe x Khonkaen University Hackathon', detail: 'Participated in Krungsri Universe x Khonkaen University Hackathon', img: '/images/activity_image/6.jpg' },
        { name: 'IoT Camp Teaching and Training Activities', detail: 'Served as teaching assistant for IoT camp for 10th grade Gifted Program students (classes 4/11-12)', img: '/images/activity_image/7.JPG' },
        { name: 'Buffalo Robot Competition', detail: 'Buffalo Robot competition activities at Ubon Ratchathani University', img: '/images/activity_image/8.JPG' },
        { name: 'Science Project Competition', detail: 'Science project competition activities for junior high school students, Applied Science category, Ubon Ratchathani University', img: '/images/activity_image/9.jpg' },
        { name: 'International IYIA Project Competition', detail: 'International project competition activities at Indonesia Inventors Day 2022 (9th IYIA)', img: '/images/activity_image/10.jpg' },
        { name: 'TBL Hackathon Participation', detail: 'TBL Hackathon competition participation activities', img: '/images/activity_image/11.JPG' },
        { name: 'School Development Activities', detail: 'School development activities leading to Royal Award recognition', img: '/images/activity_image/12.JPG' }
    ]

    const myproject: MyProjectItem[] = [
        {
            name: 'TBL Hackathon Project',
            detail: 'Transport vehicle status tracking and management system for warehouses. Developed a Real-time Tracking system to solve fragmented communication data issues and reduce uncertainty in scheduling.',
            img: ['/images/myproject/tbl_hackathon/4.png', '/images/myproject/tbl_hackathon/2.png', '/images/myproject/tbl_hackathon/3.png', '/images/myproject/tbl_hackathon/1.png'],
            tech: ["Laravel", "Tailwind CSS", "MySQL"],
            challenges: "Working under high pressure with corporate executives, daily progress update meetings, and developing efficient solutions within tight time constraints.",
            websitelink: "https://jengcharat.com/tbl_hackathon/public/map"
        },
        {
            name: 'KKU Lost & Found System',
            detail: 'Lost item management platform within Khon Kaen University to solve the problem of unorganized lost item announcements on social media by systematizing data and improving search efficiency.',
            img: ['/images/myproject/kku_missing/1.png', '/images/myproject/kku_missing/2.png', '/images/myproject/kku_missing/3.png', '/images/myproject/kku_missing/4.png', '/images/myproject/kku_missing/5.png', '/images/myproject/kku_missing/6.png', '/images/myproject/kku_missing/7.png'],
            tech: ["Laravel", "Tailwind CSS", "MySQL"],
            challenges: "Adapting to new development environments, solving configuration issues during system migration from Local Network to Production Server, and learning new frameworks within limited time.",
            websitelink: "https://webcs0567.cpkkuhost.com"
        },
        {
            name: 'Foundly - Lost & Found Platform',
            detail: 'Comprehensive lost item management system, developed from experience in the KKU Lost & Found project, adding complete functionality and preparing for wider real-world usage.',
            img: ['/images/myproject/foundly/1.png', '/images/myproject/foundly/2.png', '/images/myproject/foundly/3.png', '/images/myproject/foundly/4.png', '/images/myproject/foundly/5.png', '/images/myproject/foundly/6.png', '/images/myproject/foundly/7.png', '/images/myproject/foundly/8.png', '/images/myproject/foundly/9.png', '/images/myproject/foundly/10.png'],
            tech: ["Laravel", "React", "MySQL", "Tailwind CSS"],
            challenges: "Team management, coordinating between team members with different work speeds, and designing system architecture that supports future scalability.",
            websitelink: "https://findlytest.xyz"
        },
        {
            name: 'Travel Cluster - Tourism Assistant',
            detail: 'Cluster-based tourism recommendation platform for Thai and foreign tourists, enhancing safety and saving time in travel planning.',
            img: ['/images/myproject/travelcluster/4.png', '/images/myproject/travelcluster/1.jpeg', '/images/myproject/travelcluster/2.png', '/images/myproject/travelcluster/3.png', '/images/myproject/travelcluster/5.png'],
            tech: ["Laravel", "React", "MySQL"],
            challenges: "Competing under time constraints, collecting incomplete requirements from users, and developing algorithms that effectively meet user needs.",
            websitelink: "https://travelcluster.app/map"
        },
        {
            name: 'Petfolio - Pet Management System',
            detail: 'Comprehensive pet health history management system including data recording functions, pet community creation, and care reminder system.',
            img: ['/images/myproject/petfolio/1.png', '/images/myproject/petfolio/2.png', '/images/myproject/petfolio/3.png', '/images/myproject/petfolio/4.png', '/images/myproject/petfolio/5.png', '/images/myproject/petfolio/6.png', '/images/myproject/petfolio/7.png', '/images/myproject/petfolio/8.png', '/images/myproject/petfolio/9.png', '/images/myproject/petfolio/10.png', '/images/myproject/petfolio/11.png', '/images/myproject/petfolio/12.png', '/images/myproject/petfolio/13.png', '/images/myproject/petfolio/14.png', '/images/myproject/petfolio/15.png', '/images/myproject/petfolio/16.png', '/images/myproject/petfolio/17.png', '/images/myproject/petfolio/18.png', '/images/myproject/petfolio/19.png', '/images/myproject/petfolio/20.png', '/images/myproject/petfolio/21.png', '/images/myproject/petfolio/22.png', '/images/myproject/petfolio/23.png', '/images/myproject/petfolio/24.png', '/images/myproject/petfolio/25.png', '/images/myproject/petfolio/26.png', '/images/myproject/petfolio/27.png'],
            tech: ["Next.js", "Express.js", "MongoDB", "JWT", "RESTful API"],
            challenges: "Learning and adapting to using NoSQL Database for large-scale system development, managing teams with varied work speeds, and designing systems for real-world usage.",
            githubrepo: "https://github.com/JengCharat/petfolio.git",
            websitelink: "https://petfolio.lol"
        },
        {
            name: 'Vilapark - Condominium Management System',
            detail: 'Pet-friendly condominium management system comprising modules for tenants, managers, and administrators to improve room booking efficiency and property management.',
            img: ['/images/myproject/vilapark/1.png', '/images/myproject/vilapark/2.png', '/images/myproject/vilapark/3.png', '/images/myproject/vilapark/4.png', '/images/myproject/vilapark/5.png', '/images/myproject/vilapark/6.png', '/images/myproject/vilapark/7.png', '/images/myproject/vilapark/8.png', '/images/myproject/vilapark/9.png', '/images/myproject/vilapark/10.png', '/images/myproject/vilapark/11.png', '/images/myproject/vilapark/12.png'],
            tech: ["Next.js", "Spring Boot", "MySQL", "RESTful API"],
            challenges: "Learning new complex frameworks, coordinating between Frontend and Backend using different technologies.",
            githubrepo: "https://github.com/JengCharat/VilaPark.git",
            websitelink: "https://vilapark.app/signup"
        },
        {
            name: 'Mom Told Me to Buy Fish Sauce Game',
            detail: 'A boy wakes up hearing his mother tell him to go buy groceries. He feels angry and dissatisfied, ignoring his mother\'s reasons. The boy believes his mother definitely wants fish sauce, so he doesn\'t ask and quickly goes shopping. When he returns, he feels dizzy and strange, finding himself holding a candle. He feels he must escape from that place and discovers the environment has changed - completely dark and feeling dangerous forces approaching.',
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
            challenges: 'Game development with Java Swing was complex and had to be completed under time constraints.',
            githubrepo: "https://github.com/PANANG6425/MCPSNP.git",
        },
        {
            name: 'Velocity Guard',
            detail: 'Motorcycle lean angle calculation system to help assess appropriate turning angles based on specified speeds, aiming to reduce fall risks and increase riding safety.',
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
            challenges: 'The system required map data and road surface condition factors affecting traction, such as concrete and asphalt, making calculations more complex.'
        },
        {
            name: 'Writing Test Suites to Compare Code Quality Between Humans and AI',
            detail: 'This project focuses on designing and writing test cases to evaluate source code quality written by humans and artificial intelligence systems, using static code analysis tools and unit testing to compare code complexity, maintainability, and functional correctness.',
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
            challenges: 'In-depth source code analysis required careful attention and considerable time, which could be challenging in terms of continuity and engagement.',
            githubrepo: "https://github.com/JengCharat/sqa_project.git"
        }
    ]

    const contact: ContactItem[] = [
        { name: 'Phone', detail: ['088-670-7555'], img: '123' },
        { name: 'Email', detail: ['kaewpetcharat.sisan@gmail.com', 'kaewpetcharat.s@kkumail.com'], img: '123' },
        { name: 'GitHub', detail: ['github.com/JengCharat'], img: '123' },
    ]

    const technicalskill: TechnicalSkillItem[] = [
        { skill: 'HTML' }, { skill: 'CSS' }, { skill: 'JavaScript' }, { skill: 'TypeScript' }, { skill: 'Laravel' },
        { skill: 'Next.js' }, { skill: 'Express.js' }, { skill: 'MySQL' }, { skill: "MongoDB" }, { skill: 'Kotlin' },
        { skill: 'C Programming' }, { skill: 'Java' }, { skill: 'JUnit (Java Unit Testing)' }, { skill: 'Spring Boot' }, { skill: "Python" }, { skill: 'React' }
    ]

    const toolandplatform: ToolAndPlatformItem[] = [
        { skill: "Neovim" }, { skill: "Git" }, { skill: "GitHub" }, { skill: "Postman" },
        { skill: "Burp Suite" }, { skill: "Android Studio" }, { skill: "Google Colab" },
        { skill: "Linux" }
    ]

    const softskill: SoftSkillItem[] = [
        { skill: "Agile Methodology" }, { skill: "Team Collaboration" }, { skill: "Problem Solving" },
        { skill: "Effective Communication" }, { skill: "Adaptability" }, { skill: "Time Management" },
        { skill: "Critical Thinking" }, { skill: "Self-Directed Learning" }, { skill: "Leadership" },
        { skill: "Project Management" }
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
            <Navbar />

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

                        {/* Main Image */}
                        <div className="relative h-64 md:h-96 mb-4 rounded-lg overflow-hidden mx-6">
                            {'img' in selectedItem && Array.isArray(selectedItem.img) ? (
                                <Image
                                    src={selectedItem.img[currentImageIndex]}
                                    alt={`${selectedItem.name} - Image ${currentImageIndex + 1}`}
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

                            {/* Navigation buttons if multiple images */}
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

                        {/* Thumbnail images (if any) */}
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
                                            alt={`${selectedItem?.name} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="p-6">
                            <p className="text-gray-300 whitespace-pre-line mb-6 leading-relaxed">{selectedItem.detail}</p>

                            {/* For projects, display technologies used and challenges */}
                            {'img' in selectedItem && Array.isArray(selectedItem.img) && 'tech' in selectedItem && 'challenges' in selectedItem && (
                                <div className="space-y-6">
                                    {/* Technologies Used */}
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <FaTools className="text-blue-400" />
                                            Technologies and Tools Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.tech.map((tech, index) => (
                                                <span key={index} className="px-3 py-1.5 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-700/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* GitHub and Website Links */}
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

                                    {/* Challenges and Lessons Learned */}
                                    <div className="bg-gray-700/50 p-5 rounded-lg border border-gray-600">
                                        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <FaLightbulb className="text-yellow-400" />
                                            Challenges and Lessons Learned
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
                            <h3 className="text-2xl mb-3">Hello, <span className="text-blue-400 font-semibold">I'm Jeng</span></h3>
                            <h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Kaewpetcharat Sisan
                            </h1>
                            <p className="text-gray-300 mb-7 text-lg leading-relaxed">
                                3rd-year Computer Science student at Khon Kaen University.
                                Passionate about developing creative technologies with experience in robotics competitions and real-world problem-solving projects.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                                <a href="#myproject" className="px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
                                    View All Projects
                                </a>
                                <a href="#contact" className="px-7 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all">
                                    Contact Me
                                </a>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gray-800/80 p-4 rounded-xl cursor-pointer hover:bg-gray-700/80 transition-colors" onClick={() => setSelectedItem(mathayom_certification[0])}>
                                    <div className="text-sm text-gray-400 mb-1">Certificates</div>
                                    <div className="text-3xl font-bold text-blue-400">{mathayom_certification.length}</div>
                                </div>
                                <div className="bg-gray-800/80 p-4 rounded-xl cursor-pointer hover:bg-gray-700/80 transition-colors" onClick={() => setSelectedItem(myproject[0])}>
                                    <div className="text-sm text-gray-400 mb-1">Projects</div>
                                    <div className="text-3xl font-bold text-green-400">{myproject.length}</div>
                                </div>
                                <div className="bg-gray-800/80 p-4 rounded-xl">
                                    <div className="text-sm text-gray-400 mb-1">Technical Skills</div>
                                    <div className="text-3xl font-bold text-purple-400">{technicalskill.length}</div>
                                </div>
                                <div className="bg-gray-800/80 p-4 rounded-xl">
                                    <div className="text-sm text-gray-400 mb-1">Awards Received</div>
                                    <div className="text-3xl font-bold text-yellow-400">{mathayom_certification.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="skill" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Skills and Abilities</h2>
                        <div className="grid gap-8">
                            <div className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl border border-gray-700">
                                <h3 className="text-2xl font-bold mb-5 text-blue-400">Technical Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {technicalskill.map((item, i) => (
                                        <span key={i} className="px-4 py-2.5 bg-blue-900/30 text-blue-300 rounded-lg border border-blue-700/30">
                                            {item.skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl border border-gray-700">
                                    <h3 className="text-2xl font-bold mb-5 text-green-400">Tools and Platforms</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {toolandplatform.map((item, i) => (
                                            <span key={i} className="px-4 py-2.5 bg-green-900/30 text-green-300 rounded-lg border border-green-700/30">
                                                {item.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl border border-gray-700">
                                    <h3 className="text-2xl font-bold mb-5 text-purple-400">Soft Skills</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {softskill.map((item, i) => (
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
                        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {myproject.map((item, i) => (
                                <div key={i} className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50" onClick={() => {
                                    setSelectedItem(item)
                                    setCurrentImageIndex(0)
                                }}>
                                    <div className="relative h-48">
                                        <Image src={item.img[0]} alt={item.name} fill className="object-cover" />
                                        <div className="absolute top-3 right-3 flex gap-1">
                                            {item.img.length > 1 && (
                                                <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                                                    +{item.img.length - 1} images
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
                                            Click for details →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="certificate" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-10">Certificates and Awards</h2>
                        <div className="mb-10">
                            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
                                {mathayom_certification.map((item, i) => (
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
                        <h3 className="text-2xl font-bold text-center mb-8">Activities and Experiences</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {activity_image.map((item, i) => (
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
                        <h2 className="text-3xl font-bold text-center mb-10">Contact Information</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {contact.map((item, i) => (
                                <div key={i} className="bg-gray-800/80 backdrop-blur-sm p-7 rounded-xl text-center hover:bg-gray-700/80 transition-colors border border-gray-700">
                                    <h3 className="font-bold text-xl mb-4 text-blue-400">{item.name}</h3>
                                    <div className="space-y-2">
                                        {item.detail?.map((d, idx) => (
                                            <p key={idx} className="text-gray-300 cursor-pointer hover:text-white transition-colors" onClick={() => {
                                                if (item.name === 'GitHub') window.open('https://github.com/JengCharat', '_blank')
                                                if (item.name === 'Phone') window.location.href = `tel:${d}`
                                                if (item.name === 'Email') window.location.href = `mailto:${d}`
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
