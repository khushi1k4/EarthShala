import React from 'react';
import bubbleFun from '../assets/bubbleFun.png';
import hrsRiding from '../assets/horseRiding.png';
import vietnamBoat from '../assets/vietnamBoating.png';
import neon from '../assets/splashShitNeon.png';
import bubbleFight from '../assets/bubbleFight.png';
import camp from '../assets/camping-1.png';
import amusment from '../assets/amusmentPark.png';
import finland from '../assets/finlandCamping.png';
import bubHouse from '../assets/bubbleHouse.png';
import bunjeeJmp from '../assets/bunjeeJumping.png';
import cycle from '../assets/cycling.png';
import disney from '../assets/disneyLand.png';
import airBaln from '../assets/hotAirBallonRide.png';
import jeep from '../assets/jeepSafari.png';
import kutch from '../assets/kutch.png';
import motorBk from '../assets/motorBikes.png';
import paragliding from '../assets/paragliding.png';
import parasailing from '../assets/parasailing.png';
import race from '../assets/raceCourt.png';
import rope1 from '../assets/ropeCourse-1.png';
import rope2 from '../assets/ropeCourse-2.png';
import scuba from '../assets/scubaDiving.png';
import sea from '../assets/sea-1.png';
import skiing from '../assets/skiing.png';
import snowRid from '../assets/snowRiding.png';
import trampolin from '../assets/trampolinePark.png';
import trek from '../assets/treking.png';
import vietnam from '../assets/vietnam.png';
import waterPark from '../assets/waterPark.png';
import sport1 from '../assets/waterSport-1.png';
import sport2 from '../assets/waterSport-2.png';
import sport4 from '../assets/waterSport-4.png';
import ziplin from '../assets/zipLining.png';
import ropeClimbing from '../assets/ropeClimbing.png';
import bonFire from'../assets/bonfire.png';
import skyDiving from '../assets/skydiving.png';

const Fun = () => {
  return (
    <div className='fun absolute mt-[90px] w-screen h-screen'>
      <img src='sticker1.png' width='50' className='ml-10 hover:translate-x-10 duration-500'/>
      <div className='bucket lg:grid-flow-row-dense'>
        <div className='title lg:col-span-5 text-amber-800 text-center lg:text-[50px] text-[30px] pacifico-regular hover:text-amber-600'>
          <span>BUCKET LIST</span>
          <br/>
          <p className='text-red-950 text-[15px]'>(Click and see magics)</p>
        </div>
        <div className="lg:col-span-2 item bg-no-repeat bg-bottom min-h-64 bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500" style={{ backgroundImage: `url(${bonFire})` }}>BONFIRE</div>
        <div className="lg:row-span-2 col-span-1 h-full min-h-[300px] item bg-cover bg-center w-full" style={{ backgroundImage: `url(${ropeClimbing})` }}>ROPE CLIMBING GYM</div>
        <div className='lg:col-span-2 item bg-no-repeat bg-top min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${skyDiving})` }}>SKY-DIVING</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${vietnamBoat})` }}>BAMBOO BOAT AT VIETNAM</div>
        <div className='item bg-no-repeat bg-topleft min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${sport1})` }}>FLY BOARD</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${camp})` }}>CAMPING</div>
        <div className='item bg-no-repeat bg-bottom min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${skiing})` }}>SKIING</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${neon})` }}>SPLASH SHIT NEON</div>
        <div className='item lg:col-span-2 item bg-no-repeat bg-bottom min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${airBaln})` }}>HOT AIR BALLOON RIDE</div>
        <div className='item bg-no-repeat bg-right min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${ziplin})` }}>ZIPLINE</div>
        <div className='item lg:col-span-2 item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${bubHouse})`}}>BUBBLE HOUSE</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${trek})` }}>TREKING</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[80%_50%] transition-all duration-500' style={{ backgroundImage: "url('/cherryBlossoms.png')" }}>CHERRY BLOSSOM</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${rope1})` }}>ROPE COURSE ACTIVITY</div>
        <div className='item lg:col-span-2 item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: "url('/BiggestAquarium.png')" }}>MARINE AQUARIUMS</div>
        <div className='item bg-cover bg-right min-h-64 w-full' style={{ backgroundImage: `url(${race})` }}>RACING</div>
        <div className='item lg:row-span-2 col-span-1 h-full min-h-[300px] item bg-cover bg-center w-full' style={{ backgroundImage: `url(${hrsRiding})` }}>HORSE RIDING</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${paragliding})` }}>PARAGLIDING</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${trampolin})` }}>TRAMPOLINE PARK</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[80%_50%] transition-all duration-500' style={{ backgroundImage: `url(${snowRid})` }}>SNOW BIKES</div>
        <div className='lg:col-span-2 item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${vietnam})` }}>VIETNAM SEA</div>
        <div className='item lg:row-span-2 lg:col-span-2 h-full min-h-[300px] item bg-cover bg-center w-full' style={{ backgroundImage: `url(${sea})` }}>CRUISE</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${jeep})` }}>JEEP SAFARI</div>
        <div className='item bg-no-repeat bg-bottom min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${amusment})` }}>AMUSMENT PARK</div>
        <div className='item lg:row-span-2 lg:col-span-1 h-full min-h-[300px] item bg-cover bg-center w-full' style={{ backgroundImage: `url(${finland})` }}>POLAR NIGHTS AT NORTH POLE LIKE FINLAND, NORWAY</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${waterPark})` }}>WATER PARKS</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: "url('/desert-1.png')" }}>DESERT</div>
        <div className='lg:col-span-2 item bg-no-repeat bg-top min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: "url('/river-3.png')" }}>RIVER RAFTING</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${cycle})` }}>CYCLING & BIKING</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${bunjeeJmp})` }}>BUNJEE JUMPING</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${sport4})` }}>BOATING</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${kutch})` }}>KUTCH & RANNUTSAV</div>
        <div className='lg:col-span-2 item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${scuba})` }}>SCUBA-DIVING</div>
        <div className='item bg-cover bg-left min-h-64 w-full' style={{ backgroundImage: `url(${bubbleFun})` }}>BUBBLE RIDE</div>
        <div className='item bg-cover bg-left min-h-64 w-full' style={{ backgroundImage: `url(${rope2})` }}>ROPE COURSE ACTIVITY</div>
        <div className='item bg-no-repeat bg-left min-h-64 w-full bg-size-[150%] hover:bg-position-[80%_50%] transition-all duration-500' style={{ backgroundImage: `url(${parasailing})` }}>PARASAILING</div>
        <div className='item bg-no-repeat bg-top min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${disney})` }}>DISNEYLAND</div>
        <div className='item lg:col-span-2 item bg-no-repeat bg-top min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${sport2})` }}>WATER BIKES</div>
        <div className='item bg-no-repeat bg-right min-h-64 w-full bg-size-[150%] hover:bg-position-[60%_50%] transition-all duration-500' style={{ backgroundImage: `url(${motorBk})` }}>SAMUI QUAD MOTORS</div>
        <div className='item bg-cover bg-center min-h-64 w-full' style={{ backgroundImage: `url(${bubbleFight})` }}>BUBBLE FIGHT</div>
      </div>

      <div className='bg-blue-200 flex max-w-screen'>
        <img src='travelCouple.png' className='lg:ml-8 ml-2 hover:scale-x-110 lg:w-[150px] lg:h-[150px] w-10'/>
        <div className='flex w-full justify-center items-center text-center'><p className=' font-times lg:text-xl text-[8px]'>&copy; 2025 EarthShala. All rights reserved.</p></div>
      </div>
    </div>
  );
}

export default Fun;
