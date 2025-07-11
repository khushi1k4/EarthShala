import React from 'react'
// import {motion} from 'motion/react';
import coolGirl from '../assets/coolGirl.png';

function Explore() {
  return (
    <div className='explore absolute mt-[90px] w-screen h-screen'>
      <div className="earthExp flex flex-col lg:flex-row items-center justify-center -z-10 gap-6">
  
        {/* Earth Image */}
        <div className="earth w-[70vw] sm:w-[50vw] md:w-[50vw] lg:w-[28vw] h-80">
        <img src="earth.png" alt="Earth" className="w-full" />
        </div>

      {/* Text Content */}
        <div className="flex flex-col items-center justify-center max-w-[75%] md:max-w-[700px] lg:max-w-[750px]">
          <p className="text-green-500 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-['Brush_Script_MT//',cursive] text-center leading-relaxed">
          Earth is a planet full of wonders — both natural and manmade. By exploring these features, we understand our environment, our history, and our responsibility to protect this unique planet.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 w-full relative">
        <img src={coolGirl} alt="Cool Girl" 
          className="girl w-22 sm:w-32 md:w-34 lg:w-38 xl:w-48 2xl:w-55 h-auto absolute top-0 right-0 z-10"
        />
  
        {/* Heading */}
        <div className="geography mt-5 text-center">
          <h2 className="geoHead text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-green-500 hover:scale-110 transition-transform duration-300 text-shadow-md text-shadow-blue-600 tracking-wide text-center">
            EARTH'S GEOGRAPHY
          </h2>
          
          <div className="hydro flex justify-center mt-8 px-4 sm:px-6 md:px-10">
            <h3 className="text-blue-500 font-serif text-xs sm:text-xl md:text-2xl font-bold text-shadow-md text-shadow-green-300 hover:scale-110 transition-transform duration-300 text-center">
              Water Bodies (Hydrosphere)
            </h3>
          </div>

          <div className="flex justify-center mt-2 px-4">
            <p className="disclaim text-xs sm:text-sm text-amber-900 text-center">
              (Take Mouse Pointer at the center of cards)
            </p>
          </div>
          
          <div className='flex flex-wrap justify-center items-center gap-4 px-4 py-8'>
            {/* card-1 */}
            <div className="relative w-[320px] h-[200px] perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/ocean-1.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold mb-1 drop-shadow-md text-center">
                OCEAN
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li><strong>Pacific Ocean</strong> - largest and deepest</li>
                <li><strong>Atlantic Ocean</strong> - second largest</li>
                <li><strong>Indian Ocean</strong> - warmest</li>
                <li><strong>Southern Ocean</strong> - surrounds Antarctica</li>
                <li><strong>Arctic Ocean</strong> - smallest and coldest</li>
                <li>Oceans are made of salt water.</li>
                <li>Oceans are home to millions of species including fish, whales, corals, and plankton.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-2 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/ocean-2.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                SEA
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>Seas are smaller and shallower than oceans.</li>
                <li>Usually partially enclosed by land (like gulfs or bays). All seas are connected to an ocean.</li>
                <li>Seas contain saline (salty) water, like oceans.</li>
                <li>Shallow seas warm up faster and cool down quickly.</li>
                <li>Tropical seas are warmer, polar seas are colder.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-3 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md " style={{ backgroundImage: "url('/river-3.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col items-center justify-center p-6">
              <h6 className="text-orange-500 text-xl font-bold mb-1 drop-shadow-md text-center">
                OCEAN
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify space-y-1 font-semibold text-xs">
                <li>A natural stream of freshwater that flows across land.</li>
                <li>It usually starts from mountains, glaciers to oceans, seas, or lakes.</li>
                <li><strong>Tributary:</strong> A smaller river that joins a main river. <strong>Distributary:</strong> A branch of the main river that flows away near its deltas.</li>
                <li><strong>Basin:</strong> The drainage area of a river.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-4 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/lake.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                LAKE
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A lake is a large body of water surrounded by land.</li>
                <li>Lakes are stationary (they do not flow continuously).</li>
                <li>Most lakes contain freshwater.</li>
                <li>Some lakes have salty water (e.g., Dead Sea, Sambhar Lake in India).</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-5 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/lake-2.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                POND
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>Smaller than lakes. Enclosed body of still freshwater. So easily visible end-to-end.</li>
                <li>Easily polluted due to small size by chemical runoff, waste dumping, and eutrophication.</li>
                <li>Found in villages, parks, forests, and wetlands across the world.</li>
                <li>Many ponds are seasonal and may evaporate or shrink during dry months.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-6 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/glacier.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                GLACIER
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A glacier is a huge, slow-moving mass of ice formed by the accumulation and compaction of snow over time.</li>
                <li>Found in polar regions (like Antarctica, Greenland) and high mountain areas (like the Himalayas, Alps).</li>
                <li>Glaciers flow slowly downhill due to gravity.</li>
                <li>It stores about 69% of Earth's freshwater.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-7 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/spring.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                WATER SPRING
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>Spring is a natural point where groundwater flows out of the Earth onto the surface.</li>
                <li>Springs provide clean and fresh water, often used for drinking, irrigation, and bathing.</li>
                <li>Most springs are cool, but hot springs are found in volcanic or tectonic areas (e.g., Manikaran in India, Yellowstone in the USA).</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-8 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/dam.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                WATERFALL
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A waterfall is a place where water flows vertically over a steep drop or cliff in the course of a river or stream.</li>
                <li>The falling water creates a deep basin at the bottom called a plunge pool due to the force of erosion.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-9 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-75 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/bridge.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-400 to-blue-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                BRIDGE
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A bridge is a man-made structure designed to connect two points across a gap such as a river, road, valley, or railway.</li>
                <li>Golden Gate Bridge (USA),
                  Howrah Bridge (India),
                  Tower Bridge (UK),
                  Millau Viaduct (France),
                  Akashi Kaikyō Bridge (Japan - longest suspension bridge)
                </li>
              </ul>
            </div>
            </div>
            </div>
          </div>

          <div className="hydro flex justify-center mt-8 px-4 sm:px-6 md:px-10">
            <h3 className="text-red-800 font-serif text-xs sm:text-xl md:text-2xl font-bold md:text-shadow-md sm:text-shadow-sm text-shadow-green-300 hover:scale-110 transition-transform duration-300 text-center">
              Landforms (Lithosphere) 
            </h3>
          </div>

          <div className="flex justify-center mt-2 px-4">
            <p className="disclaim text-xs sm:text-sm text-amber-900 text-center">
              (Take Mouse Pointer at the center of cards)
            </p>
          </div>
          
          <div className='flex flex-wrap justify-center items-center gap-4 px-4 py-8'>
            {/* card-1 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/mountain-1.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                MOUNTAINS
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>Fold Mountains - Himalayas, Alps</li>
                <li>Block Mountains - Vosges (France), Sierra Nevada</li>
                <li>Volcanic Mountains - Mount Kilimanjaro, Mount Etna</li>
                <li>Dome Mountains - Black Hills (USA)</li>
                <li>Residual Mountains - Aravalli Range (India)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-2 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/hills.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                HILLS
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A hill is a raised area of land, lower and less steep than a mountain.</li>
                <li>They have gentle slopes and rounded tops.</li>
                <li>Compared to mountains, hills have a more moderate climate.</li>
                <li>Hills often have grasslands, forests, and bushes. It support diversity.</li>
                <li>Example: Mussoorie, Ooty, Darjeeling</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-3 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/plateau.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold mb-1 drop-shadow-md text-center">
                PLATEAU
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>Flat-Topped Elevated Landform</li>
                <li>Higher than Plains, Lower than Mountains</li>
                <li>They have a broad, flat surface often called a tableland.</li>
                <li>Many plateaus support villages, cities, and industries due to flat land and resources.</li>
                <li>Many plateaus contain coal, iron, copper, gold, and other mineral resources.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-4 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/plains.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                PLAINS
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>Flat and Low-Lying Land</li>
                <li>Formed by Rivers and Erosion</li>
                <li>Ideal for agriculture due to rich alluvial soil.</li>
                <li>Densely Populated</li>
                <li>Good for Transport</li>
                <li>Examples: Indo-Gangetic Plain (India), Great Plains (USA), Yangtze Plain (China)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-5 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/desert-1.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                DESERTS
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A desert is a dry area with very little rainfall (less than 250 mm/year).</li>
                <li>It can be hot (e.g., Sahara, Thar) or cold (e.g., Ladakh, Gobi).</li>
                <li>Temperatures are extreme – hot during day, cold at night.</li>
                <li>Animals and plants are adapted to survive without much water.</li>
                <li>Oasis is a water-rich area in a desert.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-6 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/valley.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                VALLEYS
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>It is a low-lying area between hills or mountains.</li>
                <li>Usually formed by river erosion or glacial movement.</li>
                <li>Rivers often flow through valleys.</li>
                <li>Valleys are often fertile. Farming happens.</li>
                <li>Types: V-shaped valleys formed by rivers and U-shaped valleys formed by glaciers.</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-7 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/island.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                ISLANDS
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A piece of land around the water.</li>
                <li>It can be found in oceans, seas or rivers.</li>
                <li>It can be small to large in land masses.</li>
                <li>Some islands have unique plants, animals, and cultures.</li>
                <li>Types: Continental islands : Part of continent like Sri Lanka, Oceanic islands formed by volcanoes or coral like Hawaii, Maldives</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-8 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/peninsula.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                PENINSULA
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold ">
                <li>A landform surrounded by water on three sides and connected to the mainland on one side.</li>
                <li>It extends into a sea or ocean.</li>
                <li>Have long coastlines.</li>
                <li>Examples: India is a large peninsula in Asia, Arabian Peninsula, Florida Peninsula (USA)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-9 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-75 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/deltas.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-green-500 to-red-300 text-white rounded-md flex flex-col">
              <h6 className="text-orange-500 text-xl font-bold drop-shadow-md text-center">
                DELTA
              </h6>
              <ul className="listMasala list-disc text-amber-900 text-justify font-semibold">
                <li>A delta is a triangular, flat area formed where a river meets the sea or river.</li>
                <li>Made by deposits of sand, silt, and clay.</li>
                <li>Very fertile and good for farming.</li>
                <li>Example: Ganga-Brahmaputra Delta (India-Bangladesh).</li>
              </ul>
            </div>
            </div>
            </div>
          </div>
          
          <div className="hydro flex justify-center mt-8 px-4 sm:px-6 md:px-10">
            <h3 className="text-purple-500 font-serif text-[15px] sm:text-xl md:text-2xl font-bold md:text-shadow-md sm:text-shadow-sm text-shadow-green-300 hover:scale-110 transition-transform duration-300 text-center">
              Natural Wonders
            </h3>
          </div>

          <div className="flex justify-center mt-2 px-4">
            <p className="disclaim text-xs sm:text-sm text-amber-900 text-center">
              (Take Mouse Pointer at the center of cards)
            </p>
          </div>
          
          <div className='flex flex-wrap justify-center items-center gap-4 px-4 py-8'>
            {/* card-1 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/mountain-2.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                MOUNTAINS
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>Mount Everest (World’s highest – Nepal)</li>
                <li>Matterhorn (Switzerland)</li>
                <li>Mount Fuji (Japan)</li>
                <li>Rocky Mountains (North America)</li>
                <li>Biodiversity hotspots: home for rare spaecies</li>
                <li>Spiritual places – many are sacred in religions (e.g., Himalayas).</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-2 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/finland.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                POLAR NIGHTS
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>Finland(Aurora Borealis)</li>
                <li>Iceland - Auroras, dark skies</li>
                <li>Norway(Tromsø)</li>
                <li>Chile (Atacama Desert)</li>
                <li>USA (Arizona, Grand Canyon)</li>
                <li>New Zealand(Lake Tekapo) - Milky Way viewing</li>
                <li>Australia (Uluru)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-3 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/waterfall-1.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                WATERFALLS
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>Niagara Falls	USA / Canada</li>
                <li>Angel Falls - "Smoke that thunders"	(Venezuela): Tallest waterfall in the world (979 m)</li>
                <li>Victoria Falls (Zambia/Zimbabwe)</li>
                <li>Iguazu Falls (Argentina / Brazil)</li>
                <li>Jog Falls	(Karnataka, India)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-4 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/coralReef.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                CORAL REEFS
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>Called the "rainforests of the sea"</li>
                <li>Great Barrier Reef (Australia)</li>
                <li>Belize Barrier Reef (Belize,Central America)</li>
                <li>Red Sea Coral Reef (Egypt, Sudan, Saudi Arabia)</li>
                <li>New Caledonia Reef (Pacific Ocean, Australia)</li>
                <li>Andaman Coral Reefs	(Andaman & Nicobar)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-5 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/caves.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                CAVES
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>Formed over thousands to millions of years</li>
                <li>Ajanta & Ellora Caves, India</li>
                <li>Waitomo Caves, New Zealand</li>
                <li>Son Doong Cave, Vietnam</li>
                <li>Mammoth Cave, USA</li>
                <li>Blue Grotto, Italy (Capri Island): Sea cave with glowing blue light</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-6 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/grandCanyon.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                CANYON
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>A massive, steep-sided canyon carved by the Colorado River over millions of years.</li>
                <li>Grand Canyon, USA (largest and most famous)</li>
                <li>Colca Canyon, Peru</li>
                <li>Fish River Canyon, Namibia</li>
                <li>Tara River Canyon, Montenegro (deepest in Europe)</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-7 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/hotSpring.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-500 to-purple-500 text-white rounded-md flex flex-col">
              <h6 className="text-blue-800 text-xl font-bold drop-shadow-md text-center">
                NATURAL HOT SPRING
              </h6>
              <ul className="listMasala list-disc text-white text-justify font-semibold">
                <li>Blue Lagoon	Iceland</li>
                <li>Grand Prismatic Spring	Yellowstone, USA</li>
                <li>Pamukkale	Turkey</li>
                <li>Manikaran Hot Springs	Himachal Pradesh, India</li>
                <li>Beppu Hot Springs	Japan	Famous for "hell baths" and steam vents</li>
              </ul>
            </div>
            </div>
            </div>

          </div>

          <div className="hydro flex justify-center mt-8 px-4 sm:px-6 md:px-10">
            <h3 className="text-amber-500 font-serif text-xs sm:text-xl md:text-2xl font-bold md:text-shadow-md sm:text-shadow-sm text-shadow-green-300 hover:scale-110 transition-transform duration-300 text-center">
              Natural Biodiversity Hotspots
            </h3>
          </div>

          <div className="flex justify-center mt-2 px-4">
            <p className="disclaim text-xs sm:text-sm text-amber-900 text-center">
              (Take Mouse Pointer at the center of cards)
            </p>
          </div>
          
          <div className='flex flex-wrap justify-center items-center gap-4 px-4 py-8'>

            {/* card-1 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 shadow-md shadow-gray-500 rounded-md">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/amazonForest.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-300 to-yellow-300 text-white rounded-md flex flex-col">
              <h6 className="text-green-800 text-xl font-bold drop-shadow-md text-center">
                RAINFOREST
              </h6>
              <ul className="listMasala list-disc text-red-900 text-justify font-semibold">
                <li>Amazon Rainforest	South America: World's largest rainforest</li>
                <li>Congo Rainforest, Africa</li>
                <li>Daintree Rainforest, Australia</li>
                <li>Son Doong Cave, Vietnam</li>
                <li>Sundarbans	India & Bangladesh	Mangrove forest, home to Bengal tiger</li>
                <li>Borneo Rainforest, Southeast Asia</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-2 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/nationalParks.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-300 to-yellow-300 text-white rounded-md flex flex-col">
              <h6 className="text-green-800 text-xl font-bold drop-shadow-md text-center">
                NATIONAL PARKS
              </h6>
              <ul className="listMasala list-disc text-red-900 text-justify font-semibold">
                <li>Protects ecosystems & endangered species</li>
                <li>No hunting, farming, or deforestation allow</li>
                <li>Encourages tourism, education, and research</li>
                <li>Managed by government or conservation authorities</li>
                <li>Often has forests, rivers, lakes, mountains, or grasslands</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-3 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/wetLands.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-300 to-yellow-300 text-white rounded-md flex flex-col">
              <h6 className="text-green-800 text-xl font-bold drop-shadow-md text-center">
                WETLANDS
              </h6>
              <ul className="listMasala list-disc text-red-900 text-justify font-semibold">
                <li>Support unique plants and animals, especially birds and amphibians.</li>
                <li>Sundarbans, India & Bangladesh</li>
                <li>Chilika Lake, Odisha</li> 
                <li>Pantanal, South America</li>
                <li>Okavango Delta	Botswana, Africa</li>
                <li>Keoladeo National Park	Rajasthan, India</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-4 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/wildLifeSantuary.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-300 to-yellow-300 text-white rounded-md flex flex-col">
              <h6 className="text-green-800 text-xl font-bold drop-shadow-md text-center">
                WILD-LIFE SANTUARIES
              </h6>
              <ul className="listMasala list-disc text-red-900 text-justify font-semibold">
                <li>To protect wild animals, birds, and plants</li>
                <li>Human activities like farming and grazing may be limited but allowed</li>
                <li>capturing or killing of wildlife is not allow</li> 
                <li>Often less strict than national parks, but still monitored</li>
                <li>Helps in conservation of endangered species</li>
              </ul>
            </div>
            </div>
            </div>

            {/* card-5 */}
            <div className="relative w-[320px] h-[200px] m-2 perspective rounded-md">
            <div className="absolute w-full h-full transition-transform duration-500 ease-linear preserve-3d group hover:rotate-y-180 rounded-md shadow-md shadow-gray-500">
    
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-cover bg-no-repeat text-white rounded-md" style={{ backgroundImage: "url('/BiggestAquarium.png')" }}>
            {/* Optional: Add text or icon */}
            </div>

            {/* Back Side */}
            <div className="cardMasala absolute w-full h-full backface-hidden rotate-y-180 bg-linear-to-br from-red-300 to-yellow-300 text-white rounded-md flex flex-col">
              <h6 className="text-green-800 text-xl font-bold drop-shadow-md text-center">
                BIG AQUARIUMS
              </h6>
              <ul className="listMasala list-disc text-red-900 text-justify font-semibold">
                <li>Chimelong Ocean Kingdom, China: Biggest Aquarium</li>
                <li>Georgia Aquarium	Atlanta, USA</li>
                <li>S.E.A. Aquarium	Singapore</li> 
                <li>Okinawa Churaumi Aquarium	Japan</li>
                <li>Dubai Aquarium & Underwater Zoo	UAE</li>
              </ul>
            </div>
            </div>
            </div>

          </div>
        </div>

      </div>

      <div className='bg-blue-200 flex max-w-screen'>
        <img src='travelBoy.png' alt="Travel Boy" className='lg:ml-8 ml-2 hover:scale-x-110 lg:w-[120px] lg:h-[150px] w-8'/>
        <div className='flex w-full justify-center items-center text-center'><p className=' font-times lg:text-xl text-[8px]'>&copy; 2025 EarthShala. All rights reserved.</p></div>
      </div>

    </div>
  )
}

export default Explore;
