// import React from 'react'
import NavTab from '../compnents/NavTab'
import React, { useState } from 'react';
import Footer from '../compnents/Footer';
import {
  ChevronRight,
  Code,
  Brain,
  BarChart,
  Database,
  Globe,
  Smartphone,
  Shield,
  PenTool,
  Layers,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Award,
  Users,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
Link
const programData = [
  {
    id: 1,
    title: "Python / Java / C++",
    duration: "4-8 Weeks",
    category: "programming",
    description: "Master the fundamentals of object-oriented programming with hands-on projects.",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&w=800&q=80",
    features: ["Interactive sessions", "Real-world projects", "Certification"]
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    duration: "8-12 Weeks",
    category: "ai-ml",
    description: "Learn AI concepts, neural networks, and build intelligent systems.",
    icon: Brain,
    color: "from-yellow-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    features: ["Deep Learning", "NLP", "Computer Vision"]
  },
  {
    id: 3,
    title: "Machine Learning",
    duration: "6-10 Weeks",
    category: "ai-ml",
    description: "Dive into ML algorithms, data preprocessing, and model deployment.",
    icon: Database,
    color: "from-blue-400 to-blue-500",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
    features: ["Regression", "Classification", "Clustering"]
  },
  {
    id: 4,
    title: "Data Analytics",
    duration: "4-6 Weeks",
    category: "data",
    description: "Transform raw data into actionable insights using analytics tools.",
    icon: BarChart,
    color: "from-blue-600 to-blue-700",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    features: ["SQL", "Tableau", "Power BI"]
  },
  {
    id: 5,
    title: "Data Science",
    duration: "8-12 Weeks",
    category: "data",
    description: "Full-stack data science with Python, statistics, and machine learning.",
    icon: Database,
    color: "from-yellow-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    features: ["Python", "Statistics", "ML Ops"]
  },
  {
    id: 6,
    title: ".NET / PHP Development",
    duration: "6-8 Weeks",
    category: "programming",
    description: "Enterprise-level web development with .NET and PHP frameworks.",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&w=800&q=80",
    features: ["ASP.NET", "Laravel", "APIs"]
  },
  {
    id: 7,
    title: "Digital Marketing",
    duration: "4-6 Weeks",
    category: "marketing",
    description: "Master SEO, SEM, social media, and content marketing strategies.",
    icon: Globe,
    color: "from-yellow-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
    features: ["SEO", "Google Ads", "Analytics"]
  },
  {
    id: 8,
    title: "Software Testing",
    duration: "4-6 Weeks",
    category: "testing",
    description: "Manual and automated testing for quality software delivery.",
    icon: Shield,
    color: "from-blue-400 to-blue-500",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
    features: ["Selenium", "JUnit", "TestNG"]
  },
  {
    id: 9,
    title: "Android / iOS Development",
    duration: "8-10 Weeks",
    category: "mobile",
    description: "Build native mobile apps for Android and iOS platforms.",
    icon: Smartphone,
    color: "from-blue-600 to-blue-700",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    features: ["Kotlin", "Swift", "Flutter"]
  },
  {
    id: 10,
    title: "Web Design",
    duration: "4-6 Weeks",
    category: "design",
    description: "Design stunning websites with modern UI/UX principles.",
    icon: PenTool,
    color: "from-yellow-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    features: ["Figma", "HTML/CSS", "Responsive"]
  },
  {
    id: 11,
    title: "Fullstack Development",
    duration: "10-14 Weeks",
    category: "programming",
    description: "Become a full-stack developer with MERN/MEAN stack expertise.",
    icon: Layers,
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    features: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 12,
    title: "C / C++ Programming",
    duration: "4-6 Weeks",
    category: "programming",
    description: "Master system-level programming with C and C++.",
    icon: Code,
    color: "from-yellow-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&w=800&q=80",
    features: ["Pointers", "STL", "Data Structures"]
  }
];

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'programming', label: 'Programming' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'data', label: 'Data' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'testing', label: 'Testing' }
];

const ProgramPage = () => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const filteredPrograms = activeCategory === 'all'
    ? programData
    : programData.filter(p => p.category === activeCategory);

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    }

     const fadeLeft = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }
   const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <NavTab/> 
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-white to-[#E0F1FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{scale:0.5, opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:1.3, ease:"'circOut"}}
            className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0f4a85]">
                Explore Our <span className="text-yellow-300">Programs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the right training for your career. Industry-relevant courses designed for success.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { icon: Code, label: "Languages", value: "10+" },
                { icon: Users, label: "Students", value: "500+" },
                { icon: Award, label: "Certifications", value: "15+" },
                { icon: Clock, label: "Hours", value: "200+" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-xl transition">
                  <stat.icon className="h-8 w-8 mx-auto text-[#0f4a85] mb-2" />
                  <div className="text-2xl font-bold text-[#ffb703]">{stat.value}</div>
                  <div className="text-sm text-[#0f4a85]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${activeCategory === cat.id
                      ? 'bg-[#0f4a85] text-white shadow-lg shadow-blue-200'
                      : 'bg-white text-[#0f4a85] hover:bg-blue-50 border border-[#ffb703]'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Programs Grid //ss */}    
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => {
                const Icon = program.icon;
                const isHovered = hoveredProgram === program.id;

                return (
                  <motion.div variants={cardAnimation} whileHover={{y:-8, scale:1.03}}
                    key={program.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                    onMouseEnter={() => setHoveredProgram(program.id)}
                    onMouseLeave={() => setHoveredProgram(null)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`}></div> */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {program.duration}
                        </span>
                        <Icon className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{program.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-[#0f4a85] px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-[#0f4a85] font-medium px-4 py-3 rounded-lg transition group">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View All Programs CTA */}
            {/* <div className="mt-12 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                View All Programs <ChevronRight className="h-5 w-5" />
              </button>
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#ffb703]">
          <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{
            duration:1
          }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f4a85] mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-[#0f4a85] text-lg mb-8 max-w-2xl mx-auto">
              Get industry-ready with our comprehensive training programs. Enroll today and take the first step toward a successful career in IT.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to ="/contact"> 
                <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className="bg-[#0f4a85]  text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer">
                Enroll Now
                </motion.button> 
              </Link>
            </div>
          </motion.div>
        </section>  
        
        <Footer/>
    </> 
  )
}

export default ProgramPage