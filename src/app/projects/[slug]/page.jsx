'use client'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import Navbar from '/Navbar';

{/* // TODO: add search function, add topic tags 
// TODO: add image format for projects and topic tags (languages used: ex JavaScript, categories: ex frontend) */}

export default function ProjectsPage() {
  
  return (
    <>
      <Navbar />
      <div className='mainPage'>
        <div className='projects-page'>

            <div className='search-container'>
              <div class="search-projects">
                <CiSearch className="search-icon" />
                <input placeholder="Search projects..." type="text"> </input>
              </div>   
            </div>

            <div className='project-result'>
              <div class="project-filter active">
                <label for="">All</label>
              </div>
              <div class="project-filter">
                <label for="">Frontend &amp; UI Development</label>
              </div>
              <div class="project-filter">
                <label for="">Full Stack Development</label>
              </div>
              <div class="project-filter">
                <label for="">Mobile App development</label>
              </div>
              <div class="project-filter">
                <label for="">Machine Learning / Artificial Intelligence</label>
              </div>
            </div>
            
            <div className='project-list'>
              <div class="project-type">
                <a href="/alhuda-islamic-center">
                  <label for="">Alhuda Islamic Center</label>
                </a>
                <p>Website for Al Huda Islamic Center in Kent WA, built using React.js, a popular JavaScript library for building user interfaces.</p>
                <div class="pr-dv">
                  <div class="pr-dv2">
                    <div class="pr-dvi">
                      <div class="prg-language">
                        <span class="reactjs"></span>
                        <label>React.js</label>
                      </div>
                        <div class="pr-dv-divider"></div>
                    </div>
                    <div class="pr-dvi">
                      <div class="prg-language">
                        <span class="reactjs"></span>
                        <label>React.js</label>
                      </div>
                        <div class="pr-dv-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>

              <div class="project-type">
                <label for="">Almaas Family Childcare</label>
                <p>A childcare website for a local business in Covington WA using React.js.</p>
                <div class="pr-dv">
                  <div class="pr-dv2">
                    <div class="pr-dvi">
                    <div class="prg-language">
                      <span class="reactjs"></span>
                      <label>React.js</label>
                    </div>
                      <div class="pr-dv-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>

              <div class="project-type">
                <label for="">Emotions TM</label>
                <p>An emotional wellness app emphasizing connections to Quranic teachings and Hadiths using React Native and MongoDB.</p>
                <div class="pr-dv">
                  <div class="pr-dv2">
                    <div class="pr-dvi">
                    <div class="prg-language">
                      <span class="reactNative"></span>
                      <label>React Native</label>
                    </div>
                      <div class="pr-dv-divider"></div>
                    <div class="prg-language">
                      <span class="mongoDb"></span>
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


