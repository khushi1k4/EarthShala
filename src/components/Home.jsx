import React from 'react';
import activities from '../assets/worlAroundActivities.png';
import ScrollCard from './ScrollCard';
import { NavLink } from 'react-router-dom';
import bgVideo from '../assets/boating.mp4';
import coolGirl from '../assets/coolGirl.png';
import downArrow from '../assets/downArrow.png';
// import img1 from './public'
import './Home.css'
const Home = () => {

return (
    <div className='box'>
        <div className='video-section'>
            <video src={bgVideo}
                autoPlay
                loop
                muted
                playsInline //very useful
            />
                    
            <div className='content'>
                <h4>"Discover the world - and Protect it"</h4>
                <h1 className='earthshala'>EarthShala</h1>
                <button id='start'>Explore it deeper</button>
                <br/>
                <img src={downArrow} className='downArrow'/>
            </div>
        </div>

        <div className='bg'>
            <div className='magicCards' id='magicCards'>
                <ScrollCard className='card1' delay={0.4}>
                    There's magic in every mountain and melody in every wave. From snowy peaks to sun-kissed sands, the Earth is full of beautiful secrets waiting for you to discover.
                    <br />
                    Come, let's explore it together. 💚
                </ScrollCard>

                <ScrollCard className='card2' delay={0.4}>
                    Birds, bees, whales, and trees — Earth's family is full of wonderful friends.
                    <br />
                    Kindness to nature is kindness to all. 🌸
                </ScrollCard>

                <ScrollCard className='card3' delay={0.6}>
                    Earth is our only home. Let's protect its rivers, mountains, skies, and forests — together.
                    <br />
                    Trees whisper, rivers sparkle, and animals dance through wild lands. But they need someone to care. Be the reason the Earth still smiles tomorrow.
                </ScrollCard>
            </div>
        </div>

        <div className='body'>
            <div className='flamingo'>
                <img src={downArrow} className='upArrow' width='52px'/>
                <div className='scroller'><p>SCROLL UP</p></div>
            </div>
            <div className='conclude grid grid-row-1 grid-cols-2'>
                <div className="img-wrapper flex">
                    <div style={{backgroundImage: `url(${activities})`}} className='activities bg-cover bg-no-repeat' ></div>
                    <div style={{backgroundImage: "url('/finland.png')"}} className='camping bg-no-repeat bg-cover'></div>    
                </div>
                <div className='message p-[80px]'>
                    <p>Today, travelling also means 
                        a commitment to the environment 
                        and the local economy.</p>
                    <img src='sticker2.png' className='stick2' />
                </div>
            </div>
            <img src='sticker3.png' width='40px' className='stick3'/>
            <div className='conclude2 grid grid-rows-1 grid-cols-2'>
                <div className='message2 flex'>
                    <p className='text-center'>Earth is not just where we live — 
                        it's what keeps us alive.
                        Protecting it means protecting our future.
                    </p>
                </div>
                <div>
                    <div className='routes bg-no-repeat bg-cover' style={{backgroundImage: "url('/worldRoutes.png')"}}></div>
                    <img src='tent.png' width='60px' className='stick4'/>
                </div>
            </div>
        </div>
        <img src={coolGirl} className='girl' width='190px'/>
        
        <div className='footer'>
            <div className='end'><p>&copy; 2025 EarthShala. All rights reserved.</p></div>
        </div>
    </div>
);
};

export default Home;
