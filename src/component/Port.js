import React, { Component } from 'react'
import img1 from './Images/abb.jpg'
import img2 from './Images/port.jpeg'
import Product from './Product'

// git init
// git add README.md
// 
// git branch -M main
// git remote add origin https://github.com/GouseShaik7/My-Portfolio.git
// git push -u origin main
export class Port extends Component {
  render() {
    return (
<body>
    <header>
        <nav>
            <div class="container">
                <h1>MOHAMMED GOUSE SHAIK</h1>
                <p></p>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#achieve">Achievements</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    
                    <li><a href="#product">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <section id="about">
        <div class="about">
            <h2>About Me</h2>
            <div className='me'>
                <p>Hello, I'm <b>Mohammed Gouse Shaik</b>, a passionate learner with a strong background in <b>Software and Civil Engineering</b>. I am dedicated to creating meaningful and innovative projects that leave a positive impact on the world. With a strong foundation in <b>Software and Civil Engineering</b>, I am constantly exploring new opportunities to expand my knowledge and skill set.</p>
                <p>I'm an Entrepreneur by my passion</p>
                <p>I'm always eager to connect with fellow professionals, potential collaborators. Feel free to reach out to me, and let's embark on new and exciting ventures together.</p>
                <p>Thank you for visiting my portfolio website, and I look forward to the opportunity to work with you.</p>
            </div>
            <div className='bio'>
                <h2>MOHAMMED GOUSE SHAIK</h2>
                <h4>alias MOHAMMED WASEEM</h4>
                <h3>FOUNDER and CEO</h3>
                <h3>ZAM ZAM GROUP</h3>
            </div>
            <img className='img1' alt='' src={img1}></img>
            <img className='img2' alt='' src={img2}></img>
           <div className='edu'>
            <h3 className='abouth3'>Education</h3>
            <br></br>
            <p><b>B.Tech - 2024 </b>-Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal.      </p>
            <p><b>Intermediate - 2020 </b>-Nucleus Jr college, Nandyal.    </p>
            <p><b>SSC - 2018 </b>-Ravindra Bharathi High School, Nandyal. </p>
            </div>
            <div className='skill'>
            <h3 id='skill' className='abouth3'>Skills</h3>

            <ul className='list'>
           
                <ul className='tech'>
                    <h4 className='abouth4'>Technical Skills</h4>
                    <li>C</li>
                    <li>C++</li>
                    <li>JAVA</li>
                    <li>PYTHON</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
                <ul className='soft'>
                    <h4 className='abouth4'>Soft Skills</h4>
                    <li>Communication Skills</li>
                    <li>Motivational Skills</li>
                    <li>Leadership Skills</li>
                    <li>Problem Solving Skills</li>
                    <li>Ability to work in team</li>
                </ul>
                <ul className='lan'>
                    <h4 className='abouth4'>Languages</h4>
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Telugu</li>
                    <li>Urdu</li>
                    
                </ul>
            </ul>
            </div>
        </div>
    </section>
    <section id="achieve">
        <div class="achieve">
            <h2>Achievements</h2>
            <ul>
           <li> <p>Member of<b> AWS Emerging Talent Community</b> </p> </li>
           <li> <p>Achieved <b>3rd</b> rank in a model making competition which is conducted by our college. </p> </li>
           <li> <p>Achieved <b>4th</b> rank in a coding competition which is conducted by our college.</p> </li>
           
            </ul>
        </div>
    </section>
    <section id="portfolio">
        <div class="projects">
            <h2>Projects</h2>
            <div class="project">
              
                <h3>RESUME BUILDER</h3>
                <h4>HTML,CSS,JAVASCRIPT</h4>
                <p>The Full-Stack Resume Builder is a comprehensive web application designed to help individuals create and manage their professional resumes with ease. In today's competitive job market, having a well-crafted resume is essential for career success. This project aims to provide users, especially job seekers and professionals, with a user-friendly platform to build, customize, and download professional resumes effortlessly.</p>
            </div>
            <div class="project">
            
                <h3>UNIT CONVERTER</h3>
                <h4>JAVA PROGRAMMING</h4>
                <p>The Java Unit Converter is a versatile console-based application designed to simplify unit conversions across various categories, including length, area, volume, weight, and temperature. It offers a convenient and efficient way for users to convert measurements from one unit to another within these categories. Whether it's converting kilometers to miles, square meters to square feet, liters to gallons, kilograms to pounds, or Celsius to Fahrenheit, this project provides a user-friendly and comprehensive solution for handling everyday unit conversions.</p>
            </div>
            <div class="project">
           
                <h3>REAL-TIME OBJECT DETECTION </h3>
                <h4>PYTHON PROGRAMMING</h4>
                <p>The Real-Time Object Detection project is a cutting-edge computer vision application developed in Python. It leverages state-of-the-art deep learning techniques to detect and track objects in real-time video streams from various sources, such as webcams, video files, or live camera feeds. This project offers a powerful and versatile tool for a wide range of applications, including security surveillance, autonomous vehicles, robotics, and more.</p>
            </div>
            <p>All the projects are listed in GitHub,please refer my GitHub profile</p>
            
        </div>
    </section>
    <section id="product">
        <div class="product">
            <h2>PRODUCTS</h2>
            <Product/>
            <p>Launching very soon...........</p>
        </div>
    </section>
   
        
    <section id="contact">
        <div class="contact">
           
           
            <h2>Contact Me</h2>
            <div className='prof'>
            <a className='email' target='_blank' href="mailto:shaikgouse760@gmail.com">Email: shaikgouse760@gmail.com</a><br></br><br></br><br></br>
            <br></br>
            <a className='linkedin' target='_blank' href='https://www.linkedin.com/in/mohammedgouseshaik'>LinkedIn: Mohammed Gouse Shaik</a><br></br><br></br><br></br><br></br>
            <a className='github' target='_blank' href='https://github.com/GouseShaik7'>GitHub: GouseShaik7</a><br></br><br></br><br></br><br></br>
            </div>
            <div className='social'>
            <a className='whatsapp' target='_blank' href="https://wa.me/919000246761/?text=Hi Sir,Id like to chat with you ">WhatsApp: +91 9000246761</a>
            <a className='insta' target='_blank' href="https://www.instagram.com/waseem1211_/">Instagram: waseem1211_
                
                </a>
                <a className='tweet' target='_blank' href="https://x.com/GouseMohammedS1?t=7KVyS9cgpgicijfIcwp_dg&s=09">Twitter: Mohammed Gouse Shaik</a>
                <a className='tele' target='_blank'  href="https://t.me/waseem1211/?text=Hi Sir,Id like to chat with you">Telegram</a>
                </div>
                
        </div>
    </section>
    <footer>
        <p>All Rights Reserved @2023</p>
    </footer>
   
</body>

    )
  }
}

export default Port