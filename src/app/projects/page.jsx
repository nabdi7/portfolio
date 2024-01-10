'use client'

import styles from '../styles/projects.scss';
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'

{/* // TODO: add search function, add topic tags 
// TODO: add image format for projects and topic tags (languages used: ex JavaScript, categories: ex frontend) */}

export default function ProjectsPage() {
  
  return (
    <>
      
      <div className='mainPage'>
        <Navbar />
        <div className='projects-page'>

            <div className='search-container'>
              <div className="search-projects">
                <CiSearch className="search-icon" />
                <input placeholder="Search projects..." type="text" />
              </div>   
            </div>

            <div className='project-result'>
              <div className="project-filter active">
                <label for="">All</label>
              </div>
              <div className="project-filter">
                <label for="">Frontend &amp; UI Development</label>
              </div>
              <div className="project-filter">
                <label for="">Full Stack Development</label>
              </div>
              <div className="project-filter">
                <label for="">Mobile App development</label>
              </div>
              <div className="project-filter">
                <label for="">Machine Learning / Artificial Intelligence</label>
              </div>
            </div>
            
            <div className='project-list'>
              <div className="project-type">
                <a href="/alhuda-islamic-center">
                  <label for="">Alhuda Islamic Center</label>
                </a>
                <p>Website for Al Huda Islamic Center in Kent WA, built using React.js, a popular JavaScript library for building user interfaces.</p>
                <div className="pr-dv">
                  <div className="pr-dv2">
                    <div className="pr-dvi">
                      <div className="prg-language">
                        <span className="reactjs"></span>
                        <label>React.js</label>
                      </div>
                        <div className="pr-dv-divider"></div>
                    </div>
                    <div className="pr-dvi">
                      <div className="prg-language">
                        <span className="reactjs"></span>
                        <label>React.js</label>
                      </div>
                        <div className="pr-dv-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>

              <div className="project-type">
                <label for="">Almaas Family Childcare</label>
                <p>A childcare website for a local business in Covington WA using React.js.</p>
                <div className="pr-dv">
                  <div className="pr-dv2">
                    <div className="pr-dvi">
                    <div className="prg-language">
                      <span className="reactjs"></span>
                      <label>React.js</label>
                    </div>
                      <div className="pr-dv-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>

              <div className="project-type">
                <label for="">Emotions TM</label>
                <p>An emotional wellness app emphasizing connections to Quranic teachings and Hadiths using React Native and MongoDB.</p>
                <div className="pr-dv">
                  <div className="pr-dv2">
                    <div className="pr-dvi">
                    <div className="prg-language">
                      <span className="reactNative"></span>
                      <label>React Native</label>
                    </div>
                      <div className="pr-dv-divider"></div>
                    <div className="prg-language">
                      <span className="mongoDb"></span>
                      <label>MongoDB</label>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              
            
            </div>
            

        </div>
      </div>
      <Footer />
          

      {/* 
      ## Web development

      [qualitydesigns ↗ ](https://qualitydesigns.site/)

      ## App development

      Emotions app
      <Image
        src="/images/emotions.png"
        alt="Photo"
        width={1125}
        height={750}
        priority
        className="project-image"
      />
      [Unsplash ↗ ](https://unsplash.com/photos/WeYamle9fDM)

      Restaurants app
      <Image
        src="/images/restaurants-app.png"
        alt="Photo"
        width={1125}
        height={750}
        priority
        className="project-image"
      />
      [Unsplash ↗ ](https://unsplash.com/photos/WeYamle9fDM)
      */}

      {/* 
      Front-End 

      Business website
        -masjid website
        -hadiya website
        -almaas website 
      <Image
        src="/images/photo.jpg"
        alt="Photo"
        width={1125}
        height={750}
        priority
        className="next-image"
      />
      [qualitydesigns ↗ ](https://qualitydesigns.site/)

      Apps


      Journal app


      JobBoard app


      */}

    </>
  );
}


