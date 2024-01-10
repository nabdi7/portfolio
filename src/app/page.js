"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from './components/Navbar' 
// import Footer from './components/Footer'

export default function Home() {
  
  return (
    <>
      
      <div className={styles.mainPage}>
      <Navbar />
        <div className={styles.pageContainer}> 
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/najib4.jpg"
                alt="Photo"
                width={1125}
                height={150}
                priority
                className={styles.nextImage}
              />
            </div>

            <div className={styles.textContainer}>
              <div className={styles.aboutText}>
                <p> Hey, I am a Software Engineer and an incoming first-year Master&rsquo;s student in Computer Science at Georgia Tech University, specializing in Machine Learning. </p>
                <p> My primary objective is to develop functional software solutions. I&rsquo;m passionate about Machine Learning, and Full-Stack development. </p>

                <p> I attained a BS at the University of Washington in Computer Science and a minor in Business Administration. </p>
                        
                <p> I have hands-on experience in full-stack web and mobile app development, as well as  machine learning with a variety of programming languages and frameworks.</p>

                <p> I have a passion for learning new libraries, languages, and frameworks, embracing challenges in software engineering. I enjoy solving complex problems, both independently and collaboratively.</p>

              </div>
            </div>
          </div>


          <div className={styles.icons}>
            <a href="https://github.com/nabdi7" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/najib-abdi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/najibabdi7" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:abdinajka@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail />
            </a>
          </div>
          
        </div>
      </div>

   

    </>
  )
}
