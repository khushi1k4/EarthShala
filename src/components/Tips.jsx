import React from 'react';

const Tips = () => {
  return (
    <div className='tips absolute'>
      {/* <!-- Main Container: Hidden on small/medium, visible on large screens --> */}
      <div className="hidden lg:block container mx-auto max-w-screen">
        <div className="conversation grid grid-cols-1 md:grid-cols-2 gap-5 w-full mx-8">

          {/* <!-- First Inner Div with conversation (left-aligned and responsive) --> */}
          <div className="gossip bg-white rounded-lg shadow-md text-left hover:skew-x-2">
            <h3 className='font-bold text-red-500 sm:text-4xl text-2xl shadow-amber-800 mt-2 ml-3'>
              “Nature's Selfie, But Earth Forgot to Smile”
            </h3>
            <h6 className='set text-red-900'>
              (Living room. TV is on. News plays. Ishita scrolls her phone. Aryan watches quietly.)
            </h6>

            <p className='g-1 text-base md:text-lg lg:text-[24px] leading-relaxed'>
        <strong>TV Reporter:</strong> “Floods in Assam while parts of Maharashtra report the driest summer in decades. Climate is breaking.”
        <br/>
        <span className='font-semibold text-red-500'>Ishita (shocked):</span>Floods and droughts? Together? Last week, forest fire happened in Uttarakhand.
        <br/>
        <span className='font-semibold text-red-500'>Aryan (looking at the screen):</span> Earth is tired. It’s reacting now.
        <br/>
        <span className='font-semibold text-red-500'>Ishita (sighs):</span> We loved taking selfies with nature... rivers, hills, skies... but now, Earth doesn’t feel like smiling anymore.
        <br/>
        <strong>TV Reporter (voiceover):</strong> “All due to deforestation, overconsumption, and lack of action. Glaciers melting, Forests burning, Oceans rising.”
        <br/>
        <span className='font-semibold text-red-500'>Aryan (thoughtful):</span> Remember that riverbank picnic? We clicked that sunset photo?
        <br/>
        <span className='font-semibold text-red-500'>Ishita (softly):</span> Yeah... that place was flooded last week. Houses gone.
        <br/>
        <span className='font-semibold text-red-500'>Aryan:</span> Funny how we saved the memory… but not the place.
        <br/>
        <span className='font-semibold text-red-500'>Ishita (angry):</span> We scroll all day. But don’t care.
        <br/>
        <span className='font-semibold text-red-500'>Aryan:</span> We plant posts, not trees. Nature gave us joy & filter. We gave it garbage.
        <br/>
        <span className='font-semibold text-red-500'>Ishita (hopeful):</span> “Time is running out. Young people must act.” Let’s change. One plant, One promise.
        <br/>Real care. No hashtags, No posts, No stories, only actions speaks manually!
        <br/>
        <span className='font-semibold text-red-500'>Aryan (smiles):</span> Let’s protect. Let Earth smile again.
        <div className='g-2 text-green-600 font-bold'>
          CONCLUDE: “Earth doesn’t need likes. It needs love.”
        </div>
            </p>
          </div>

          {/* <!-- Second Inner Div with background image only --> */}
          <div className="news bg-cover bg-center rounded-lg shadow-md h-[70%] md:h-[85%] lg:h-full hover:scale-95" style={{ backgroundImage: "url('/EarthNews2.png')" }}>
          </div>
        </div>
      </div>


      <div className="cardBox bg-blue-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="text-center lg:col-span-3 sm:col-span-2">
          <h2 className='head text-center pacifico-regular text-[15px] sm:text-[20px] md:text-[35px] text-red-900'>REALISTIC TECHNIQUES & TIPS TO PROTECT ENVIRONMENT</h2>
          <h3 className='text-center text-red-950 text-[12px] md:text-[18px]'>
            (These are easy, helpful, and realistic tips to save nature and our Earth. Share them with elders, friends, and kids.)
          </h3>
        </div>
            
        {/* <!-- Card 1 --> */}
        <div className="magicBox bg-red-500 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-3">
          <h2 className='text-center text-white font-bold underline'>TIP-1</h2>
          <br/>
          <p className='font-semibold text-justify text-white text-xl'>On special occasions like weddings, births, anniversaries, or even school/college graduations, each family or individual plants a tree (called a “green sibling”) to mark the event.</p>
        </div>
        <div className="magicBox bg-blue-900 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-2">
          <h2 className='text-center text-white font-bold underline'>TIP-2</h2>
          <br/>
          <p className='font-semibold text-center text-white text-xl'><strong> Gift a Plant Instead of Flowers</strong>
          <ul>
            <li>Potted plants live long; flowers dry quickly.</li>
            <li>On Birthdays, weddings, thank-you gifts.</li>
            <li>Ideas: Indoor plants like snake plant, money plant, or bamboo.</li>
          </ul>
          </p>
        </div>
        <div className="magicBox bg-amber-400 rounded-md shadow-xl shadow-amber-700 text-center hover:rotate-3">
          <h2 className='text-center text-amber-950 font-bold underline'>TIP-3</h2>
          <br/>
          <p className='font-semibold text-justify text-amber-950 text-xl'> 
            Use reusable cloth or metallic boxes instead of plastic wrap or glossy paper. Start this as a family tradition during festivals and birthdays. 
          </p>
        </div>
        <div className="magicBox bg-green-800 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-3">
          <h2 className='text-center text-white font-bold underline'>TIP-4</h2>
          <br/>
          <p className='font-semibold text-justify text-white text-xl'> 
            Use reusable cloth or metallic boxes instead of plastic wrap or glossy paper. Start this as a family tradition during festivals and birthdays.
          </p>
        </div>
        <div className="magicBox bg-pink-700 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-2">
          <h2 className='text-center text-white font-bold underline'>TIP-5</h2>
          <br/>
          <p className='font-semibold text-justify text-white text-xl'>
            Celebrate with LED diyas, no-cracker zones, and flower-based Holi colors. Promote this in your society or school as a yearly theme. To protect from environmental harm. 
          </p>
        </div>
        <div className="magicBox bg-blue-300 rounded-md shadow-xl shadow-amber-700 text-center hover:rotate-3">
          <h2 className='text-center text-amber-950 font-bold underline'>TIP-6</h2>
          <br/>
          <p className='font-semibold text-center text-amber-950 text-xl'><strong>Waste Segregation Ritual</strong>
          <br/>
            Start daily home practice of separating wet, dry, and hazardous waste. Teach kids using colored bins or fun stickers.
          </p>
        </div>
        <div className="magicBox bg-pink-400 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-3">
          <h2 className='text-center  font-bold underline'>TIP-7</h2>
          <br/>
          <p className='font-semibold text-amber-950 text-center text-xl'><strong>Cloth Bag for Every Member</strong>
          <br/>
            Gift personalized cloth bags to family members. Keep one in each vehicle or school bag—no more excuses at stores!
            To avoid use of plastic bags.
          </p>
        </div>
        <div className="magicBox bg-amber-900 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-2">
          <h2 className='text-center text-white font-bold underline'>TIP-8</h2>
          <br/>
          <p className='font-semibold text-white text-center text-xl'><strong>USE OF PUBLIC TRANSPORT</strong>
          <br/>
            It helps to reduce the air pollution and traffic on roads and helps to protect environment.
          </p>
        </div>
        <div className="magicBox bg-green-400 rounded-md shadow-xl shadow-amber-700 text-center hover:rotate-3">
          <h2 className='text-center text-amber-950 font-bold underline'>TIP-9</h2>
          <br/>
          <p className='font-semibold text-amber-950 text-center text-xl'><strong>Water Bowl Outside for Birds & Animals</strong>
          <br/>
            Especially during summer. Make it a morning routine. Involve kids—it teaches kindness and care for animals.
          </p>
        </div>
        <div className="magicBox bg-red-300 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-3">
          <h2 className='text-center font-bold underline'>TIP-10</h2>
          <br/>
          <p className='font-semibold text-amber-950 text-center text-xl'><strong>Green Library or Book Exchange</strong>
          <br/>
            Share or donate old books in your locality or school. Encourage tree-saving by reusing and reducing printing.
          </p>
        </div>
        <div className="magicBox bg-amber-300 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-2">
          <h2 className='text-center text-amber-950 font-bold underline'>TIP-11</h2>
          <br/>
          <p className='font-semibold text-amber-950 text-justify text-xl'>
            Online Invitations (E-Invites), Cloth or Handkerchief Invitations, Seed Paper Invitations can be used for invitations.
          </p>
        </div>
        <div className="magicBox bg-purple-300 rounded-md shadow-xl shadow-amber-700 text-center hover:rotate-3">
          <h2 className='text-center text-amber-950 font-bold underline'>TIP-12</h2>
          <br/>
          <p className='font-semibold text-amber-950 text-justify text-xl'>
            Reusable Cloth Sanitary Napkins, Menstrual Cups, Biodegradable Pads can be used by women. They are less toxic and easily degradable.
          </p>
        </div>
        <div className="magicBox bg-purple-800 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-3">
          <h2 className='text-center text-white font-bold underline'>TIP-13</h2>
          <br/>
          <p className='font-semibold text-white text-justify text-xl'>
            If a prohibition or strict guideline is enforced in India (or promoted socially), it could greatly protect aquatic life, human health, and clean water sources. Using chemical substances like detergents, soaps, shampoos and throwing wastes into it should be prohibited.
          </p>
        </div>
        <div className="magicBox bg-slate-600 rounded-md shadow-xl shadow-amber-700 text-center hover:-rotate-2">
          <h2 className='text-center text-white font-bold underline'>TIP-14</h2>
          <br/>
          <p className='font-semibold text-white text-justify text-xl'>
            Idols made of POP pollute rivers and harm aquatic life. Use clay, mud, or sand idols that dissolve naturally. Celebrate festivals with eco-friendly devotion. Protect nature while worshipping the divine.
          </p>
        </div>
        <div className="magicBox bg-red-800 rounded-md shadow-xl shadow-amber-700 text-center hover:rotate-3">
          <h2 className='text-center text-white font-bold underline'>TIP-15</h2>
          <br/>
          <p className='font-semibold text-white text-justify text-xl'>
            Turn off lights & fans when not in use—save electricity. Use both sides of paper for drawing or writing. Avoid using balloons—they harm birds and animals. Teach Your children these basic good habits to safe nature and earth.
          </p>
        </div>
      </div>

      
      <div className='intro bg-green-700 grid grid-rows-2 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-8'>
        <div className='loveEarth row-span-2 bg-cover bg-no-repeat bg-center rounded-md shadow-xl shadow-amber-950 hover:-rotate-3' style={{backgroundImage: "url('/Traveller.png')"}}></div>
        <div className='intro-1 text-white w-full'>
          <h3 className='q-1 font-bold text-3xl pb-5 hover:text-amber-500'>Why we need EarthShala?</h3>
          <p className='text-justify text-2xl'>EarthShala is born from the need to explore, respect, and protect our planet. As we travel and enjoy nature’s beauty, we often forget our duty to care for it. Earth gives us life, resources, and joy—without asking anything in return—yet we return the favor with pollution and neglect.</p>
        </div>
        <div className='intro-2 text-white w-full'>
          <h3 className='q-2 font-bold text-3xl hover:text-amber-500'>What is EarthShala?</h3>
          <p className='text-justify text-2xl'>EarthShala helps us explore nature responsibly and understand its true value. While we travel and enjoy the Earth, we often harm it without realizing. Nature gives us everything, yet we give back pollution.
          It’s time to protect our planet like our own home—for us and future generations.
          </p>
        </div>
      </div>

      <div className='bg-blue-200 flex mt-30 max-w-screen'>
        <img src='travelGirl.png' className='lg:ml-8 ml-2 hover:scale-x-110 lg:w-[150px] lg:h-[150px] w-10'/>
        <div className='flex w-full justify-center items-center text-center'><p className=' font-times lg:text-xl text-[8px]'>&copy; 2025 EarthShala. All rights reserved.</p></div>
      </div>
    </div>
  );
}

export default Tips;
