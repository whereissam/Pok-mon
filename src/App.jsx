import './App.css';
import MenuNavigation from './components/MenuNavigation';
import SwiperComponent from './components/swiper/swiper';
import PokemonTabs from './components/tabs/pokemonTabs';

function App() {
  const imgList = [
    {
      name: 'Alex',
      link: 'images/section5/alex.png',
    },
    {
      name: 'Mario',
      link: 'images/section5/mario.png',
    },
    {
      name: 'Ueder',
      link: 'images/section5/ueder.png',
    },
    {
      name: 'Max',
      link: 'images/section5/max.png',
    },
    {
      name: 'Travis',
      link: 'images/section5/travis.png',
    },
  ];

  return (
    <>
      <MenuNavigation />
      <main className="flex flex-col h-screen">
        {/* //cover */}
        <section>
          <div className="section-content ">
            <img
              className="w-full h-[110vh] object-cover"
              src="images/section1/background1.png"
              alt="Girl in a jacket"
            />
            <div className="relative -top-5 text-5xl font-extrabold flex overflow-x-hidden rotate-[0.5deg] border-b-8 bg-[#F7BC1A] border-black">
              <div className="py-2 animate-marquee whitespace-nowrap">
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
              </div>

              <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
                <span className="mx-4">POKÉMONPIKACHU</span>
              </div>
            </div>
          </div>
        </section>

        {/* //BLOCKCHAIN */}
        <section>
          <div className="section-content h-screen relative -mt-7">
            <PokemonTabs />
          </div>
        </section>

        {/* //LEARN MORE */}
        <section>
          <div className="section-content relative -mt-20">
            <img
              src="images/section3/background.png"
              className="absolute -z-20"
              alt=""
            />

            <div className="w-full flex justify-center py-12">
              <p className="flex justify-center mt-20 items-center text-4xl w-80 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                LEARN MORE
              </p>
            </div>

            {/* marquee */}
            <div className="absolute h-24 bottom-16 -start-32 w-[900px] text-6xl font-extrabold -z-10 transform rotate-[20deg]  flex overflow-x-hidden border-b-8 bg-[#F7BC1A] border-black">
              <div className="py-6 animate-marquee whitespace-nowrap ">
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
              </div>

              <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap">
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
              </div>
            </div>
            <div className="absolute top-32 py-2 -end-12 w-[800px] -z-10 transform rotate-[20deg]  flex overflow-x-hidden border-b-8 bg-[#F7BC1A] border-black">
              <div className="py-1 animate-marquee whitespace-nowrap">
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
              </div>

              <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
              </div>
            </div>

            <div className="flex justify-between items-center my-6 ">
              <div className="w-1/4 bg-red-600"></div>
              <div className="flex justify-end items-center w-3/4 h-[30rem] relative">
                <div className="bg-blue-500 h-[315px] w-[560px] mr-[-100px]   z-10">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="relative h-[497px] w-[1152px] flex flex-row justify-center ">
                  <div>
                    <img
                      src="images/section3/sectionBG.png"
                      className="absolute -z-10 h-[497px] w-[1152px]"
                      alt=""
                    />
                  </div>

                  <div className="w-1/2 pl-32">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        {/* GET $PKM TOKENS */}
                        <img src="images/section3/word0.png" alt="" />
                      </p>
                      <p className="p-2 text-xl">
                        Learn about the $PKMgovernance token and itsutilities in
                        the eco-
                      </p>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-400 p-2 text-4xl font-extrabold">
                        VIEW TOUR
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src="images/section3/char0.png"
                      alt=""
                      className="absolute -top-20 -left-20"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-32">
              <div className="flex justify-end items-center w-3/4 h-[30rem] relative">
                <div className="relative h-[497px] w-[1152px] flex flex-row justify-center ">
                  <div>
                    <img
                      src="images/section3/sectionBG.png"
                      className="absolute -z-10 h-[497px] w-[1152px]"
                      alt=""
                    />
                  </div>

                  <div className="w-1/2 relative h-full">
                    <img
                      src="images/section3/char1.png"
                      alt=""
                      className="absolute scale-125 -z-10"
                    />
                  </div>
                  <div className="w-1/2 pr-32">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        <img src="images/section3/word1.png" alt="" />
                      </p>
                      <p className="p-2 text-xl">
                        Learn about the $PKMgovernance token and itsutilities in
                        the eco-
                      </p>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-400 p-2 text-4xl font-extrabold">
                        VIEW TOUR
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500 h-[315px] w-[560px] ml-[-100px]   z-10">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="w-1/4"></div>
            </div>
            <div className="flex justify-between items-center my-6 ">
              <div className="w-1/4 bg-red-600"></div>
              <div className="flex justify-end items-center w-3/4 h-[30rem] relative">
                <div className="bg-blue-500 h-[315px] w-[560px] mr-[-100px]   z-10">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="relative h-[497px] w-[1152px] flex flex-row justify-center ">
                  <div>
                    <img
                      src="images/section3/sectionBG.png"
                      className="absolute -z-10 h-[497px] w-[1152px]"
                      alt=""
                    />
                  </div>

                  <div className="w-1/2 pl-32">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        <img src="images/section3/word2.png" alt="" />
                      </p>
                      <p className="p-2 text-xl">
                        Climb the $PKM leaderboard by inviting your friends with
                        your code
                      </p>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-400 p-2 text-4xl font-extrabold">
                        CODE HERE
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src="images/section3/char2.png"
                      alt=""
                      className="absolute -z-10 -left-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //TOKEN */}
        <section>
          <div className="section-content relative h-screen mt-32">
            <img
              src="images/section4/background.png"
              className="absolute -z-20"
              alt=""
            />
            <div className="flex justify-center items-start w-full">
              <div className="h-full flex justify-center items-center">
                <div className="h-[700px] mr-[-100px] w-[20%] flex justify-center z-10">
                  <img
                    className="object-cover w-[408px] h-[749px]"
                    src="images/section4/redImage.png"
                    alt=""
                  />
                </div>
                <div className="mr-[-20px] w-[40%] z-10">
                  <img
                    className="object-cover"
                    src="images/section4/pika1.png"
                    alt=""
                  />
                </div>
                <div className="bg-red-500">
                  <img
                    className="h-[500px] object-cover"
                    src="images/section4/token.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 py-2 -end-32 w-[800px] -z-10 transform -rotate-[30deg]  flex overflow-x-hidden border-b-8 bg-[#F7BC1A] border-black">
              <div className="py-1 animate-marquee whitespace-nowrap">
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
              </div>

              <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-2xl mx-4">POKÉMONPIKACHU</span>
              </div>
            </div>
          </div>
        </section>

        {/* //TEAM */}
        <section>
          <div className="section-content flex flex-col justify-center gap-20 items-center h-screen -top-10">
            <img
              src="images/section5/background.png"
              className="absolute -z-20"
              alt="section5"
            />
            <div id="TEAM">
              <p className="flex justify-center items-center text-4xl w-64 h-20 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                TEAM
              </p>
            </div>
            <div className="flex flex-wrap gap-10 justify-center w-full">
              {imgList?.map(item => {
                return (
                  <div className="threeDCard">
                    <div
                      key={item.name}
                      className="relative bg-red-100 transform -skew-x-3 h-[400px] w-[200px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                    >
                      <img
                        className="object-cover h-full"
                        src={item.link}
                        alt={item.name}
                      />
                      <div className="h-8 w-32 flex justify-start pl-4 items-center font-bold absolute bottom-4 -left-4 transform -skew-x-6 bg-black text-white border-b-2 border-[#A77375]">
                        {item.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* //JOIN TELEGRAM */}
        <section>
          <div className="section-content">
            <img
              src="images/section6/background.png"
              className="absolute -z-20"
              alt="section6"
            />
            <div className="w-full flex justify-center mb-4 pt-32">
              <p className="flex justify-center items-center text-4xl w-80 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                JOIN TELEGRAM
              </p>
            </div>

            <SwiperComponent />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
