
import Image from 'next/image'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

<div className='page-container'>
  <div className='container'>
    <div className='image-container'>
      <Image
        src="/images/najib4.jpg"
        alt="Photo"
        width={1125}
        height={150}
        priority
        className="next-image"
      />
    </div>

    <div className='text-container'>
      <div className='about-text'>
        {/* <p> Hey, I am a Software Engineer and an incoming first-year Master's student in Computer Science at Georgia Tech University, specializing in Machine Learning.  */}
        <p> My primary objective is to develop functional software solutions. I’m passionate about Machine Learning, and Full-Stack development. </p>

        <p> I attained a BS at the University of Washington in Computer Science and a minor in Business Administration. </p>
                
        <p> I have hands-on experience in full-stack web and mobile app development, as well as  machine learning with a variety of programming languages and frameworks.</p>

        <p> I have a passion for learning new libraries, languages, and frameworks, embracing challenges in software engineering. I enjoy solving complex problems, both independently and collaboratively.</p>

      </div>
    </div>
</div>
---

  <div className='icons'>
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
