import { BrowserView, MobileView } from 'react-device-detect';

import './App.css';
import MenuNavigation from './components/MenuNavigation';
import SwiperComponent from './components/swiper/swiper';
import MobileSwiperComponent from './components/swiper/swiperMobile/swiper';
import MobilePokemonTabs from './components/tabs/mobile/pokemonTabs';
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
      <BrowserView>
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
            <div className="section-content h-[86.5vh] relative -mt-7">
              <PokemonTabs />
            </div>
          </section>

          {/* //LEARN MORE */}
          <section>
            <div className="section-content relative h-[216.5vh] 2xl:h-[212vh]">
              <img
                src="images/section3/background.png"
                className="absolute -z-20"
                alt=""
              />

              <div className="w-full flex justify-center 2xl:py-20">
                <p className="flex justify-center mt-20 items-center text-4xl w-80 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                  LEARN MORE
                </p>
              </div>

              <div className="flex justify-between items-center 2xl:py-10">
                <div className="2xl:w-1/4 bg-red-600"></div>
                <div className="flex justify-end items-center w-8/12 2xl:w-3/4 h-[27rem] relative">
                  <div className="absolute -left-72 2xl:-left-48">
                    <img
                      src="images/section3/videoAlt0.png"
                      className="w-[400px] 2xl:h-[315px] 2xl:w-[560px] z-10"
                      alt="videlAlt0"
                    />
                  </div>
                  <div className="relative h-[300px] 2xl:h-[497px] w-[1152px] flex flex-row justify-center ">
                    <div>
                      <img
                        src="images/section3/sectionBG.png"
                        className="absolute -z-10 h-[300px] 2xl:h-[497px] w-[1152px]"
                        alt=""
                      />
                    </div>

                    <div className="w-1/2 pl-32">
                      <div className="h-2/3 flex flex-col items-center justify-center">
                        <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                          <img src="images/section3/word0.png" alt="" />
                        </p>
                        <p className="p-2 text-xl">
                          Learn about the $PKMgovernance token and itsutilities
                          in the eco-
                        </p>
                      </div>
                      <div className="h-1/3 flex">
                        <p className="h-16 flex justify-center w-60 items-center bg-yellow-400 p-2 text-2xl 2xl:text-4xl font-extrabold">
                          VIEW TOUR
                        </p>
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img
                        src="images/section3/char0.png"
                        alt=""
                        className="absolute w-80 2xl:w-[90%] -top-20 2xl:-left-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between 2xl:py-40">
                <div className="flex justify-start items-center w-8/12 2xl:w-3/4 h-[20rem] relative">
                  <div className="relative h-[300px] 2xl:h-[497px] w-[1152px] flex flex-row justify-center ">
                    <div>
                      <img
                        src="images/section3/sectionBG.png"
                        className="absolute -z-10 h-[300px] 2xl:h-[497px] w-[1152px]"
                        alt=""
                      />
                    </div>

                    <div className="w-1/2 relative h-full">
                      <img
                        src="images/section3/char1.png"
                        alt=""
                        className="absolute scale-100 -z-10"
                      />
                    </div>
                    <div className="w-1/2 pr-32">
                      <div className="h-2/3 flex flex-col items-center justify-center">
                        <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                          <img src="images/section3/word1.png" alt="" />
                        </p>
                        <p className="p-2 text-xl">
                          Learn about the $PKMgovernance token and itsutilities
                          in the eco-
                        </p>
                      </div>
                      <div className="h-1/3 flex">
                        <p className="h-16 flex justify-center w-48 items-center bg-yellow-400 p-2 text-2xl 2xl:text-4xl font-extrabold">
                          DOWNLOAD
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-blue-500 h-[315px] w-[560px] ml-[-100px]   z-10">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div> */}
                  <div className="absolute -right-72 2xl:-right-48">
                    <img
                      src="images/section3/videoAlt1.png"
                      className="w-[400px] 2xl:h-[315px] 2xl:w-[560px] z-10"
                      alt="videlAlt0"
                    />
                  </div>
                </div>
                <div className="2xl:w-1/4"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="2xl:w-1/4 bg-red-600"></div>
                <div className="flex justify-end items-center w-8/12 2xl:w-3/4 h-[30rem] relative">
                  <div className="absolute -left-72 2xl:-left-48">
                    <img
                      src="images/section3/videoAlt2.png"
                      className="w-[400px] 2xl:h-[315px] 2xl:w-[560px] z-10"
                      alt="videlAlt0"
                    />
                  </div>
                  {/* <div className="bg-blue-500 h-[315px] w-[560px] mr-[-100px]   z-10">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div> */}
                  <div className="relative h-[300px] 2xl:h-[497px] w-[1152px] flex flex-row justify-center ">
                    <div>
                      <img
                        src="images/section3/sectionBG.png"
                        className="absolute -z-10 h-[300px] 2xl:h-[497px] w-[1152px]"
                        alt=""
                      />
                    </div>

                    <div className="w-1/2 pl-32">
                      <div className="h-2/3 flex flex-col items-center justify-center">
                        <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                          <img src="images/section3/word2.png" alt="" />
                        </p>
                        <p className="p-2 text-xl">
                          Climb the $PKM leaderboard by inviting your friends
                          with your code
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
                        className="absolute w-80 2xl:w-[90%] -z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* //TOKEN */}
          <section>
            <div className="section-content relative h-[95vh] 2xl:mt-40">
              <img
                src="images/section4/background.png"
                className="absolute -z-20"
                alt=""
              />
              <div className="flex justify-center items-start w-full">
                <div className="h-full flex justify-center items-center">
                  <div className="h-[700px] mr-[-100px] w-[20%] flex justify-center z-10">
                    <img
                      className="object-cover w-[408px] h-3/4 2xl:h-[749px]"
                      src="images/section4/redImage.png"
                      alt=""
                    />
                  </div>
                  <div className="mr-[-5px] w-[30%] 2xl:w-[40%] z-10">
                    <img
                      className="object-cover"
                      src="images/section4/pika1.png"
                      alt=""
                    />
                  </div>
                  <div className="bg-red-500 mb-20 2xl:mb-0">
                    <img
                      className="h-[350px] 2xl:h-[500px] object-cover "
                      src="images/section4/token.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* //TEAM */}
          <section>
            <div className="section-content flex flex-col justify-center gap-20 items-center h-[77.5vh] 2xl:-top-40">
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
                        className="relative transform -skew-x-3 h-[300px] w-[150px] 2xl:h-[400px] 2xl:w-[200px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
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
            <div className="section-content h-[80vh]">
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
      </BrowserView>

      <MobileView>
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
            <div className="section-content h-[71vh] relative -mt-7">
              <MobilePokemonTabs />
            </div>
          </section>

          {/* //LEARN MORE */}
          <section>
            <div className="section-content h-[173vh] relative">
              <div className="absolute -z-20">
                <img
                  src="images/section3/background-mobile.png"
                  className=""
                  alt=""
                />
                <img
                  src="images/section3/background-mobile2.png"
                  className=""
                  alt=""
                />
              </div>

              <div className="w-full flex justify-center py-12">
                <p className="flex justify-center mt-5 items-center text-4xl w-60 h-16 border-black border-b-8 font-bold bg-[#F7BC1A]">
                  LEARN MORE
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-10">
                <img
                  className="w-[80%]"
                  src="images/section3/videoAlt0.png"
                  alt=""
                />
                <img
                  className="w-[60%] "
                  src="images/section3/word0.png"
                  alt=""
                />
                <p className="w-[65%]">
                  Learn about the $PKMgovernance token and itsutilities in the
                  ecosystem.
                </p>
                <div className="h-1/3 flex">
                  <p className="h-10 flex justify-center w-48 items-center bg-yellow-400 p-2 text-2xl 2xl:text-4xl font-extrabold">
                    VIEW TOKEN
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mt-20">
                <img
                  className="w-[80%]"
                  src="images/section3/videoAlt1.png"
                  alt=""
                />
                <img
                  className="w-[60%] "
                  src="images/section3/word1.png"
                  alt=""
                />
                <p className="w-[65%]">
                  Download the game on iosor Android mobile devices.
                </p>
                <div className="h-1/3 flex">
                  <p className="h-10 flex justify-center w-48 items-center bg-yellow-400 p-2 text-2xl 2xl:text-4xl font-extrabold">
                    DOWNLOAD
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mt-28">
                <img
                  className="w-[80%]"
                  src="images/section3/videoAlt2.png"
                  alt=""
                />
                <img
                  className="w-[60%] "
                  src="images/section3/word2.png"
                  alt=""
                />
                <p className="w-[65%]">
                  Climb the $PKM leaderboard by inviting your friends with your
                  code
                </p>
                <div className="h-1/3 flex">
                  <p className="h-10 flex justify-center w-48 items-center bg-yellow-400 p-2 text-2xl 2xl:text-4xl font-extrabold">
                    CODE HERE
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* //TOKEN */}
          <section>
            <div className="section-content relative h-[91vh] ">
              <img
                src="images/section4/background-mobile.png"
                className="absolute -z-20"
                alt=""
              />

              <div className="flex flex-col justify-center items-center py-16">
                <img
                  className="w-[90%] object-cover"
                  src="images/section4/pika1.png"
                  alt=""
                />
                <img
                  className="w-[80%] object-cover my-20"
                  src="images/section4/token.png"
                  alt=""
                />
              </div>
            </div>
          </section>

          {/* //TEAM */}
          <section>
            <div className="section-content flex flex-col h-screen pt-10 justify-center gap-20 items-center relative bg-[url('images/section5/background-mobile.png')]">
              <div id="TEAM">
                <p className="flex justify-center items-center text-4xl w-64 h-20 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                  TEAM
                </p>
              </div>
              <div className="flex flex-row h-full w-[80%]">
                <div className="w-1/2 flex flex-col justify-evenly">
                  <div className="relative transform -skew-x-3 h-[100px] w-[150px]">
                    <img
                      className="object-cover h-full"
                      src="images/section5/alex-mobile.png"
                      alt="alex"
                    />
                    <div className="h-8 w-32 flex justify-start pl-4 items-center font-bold absolute bottom-4 -left-4 transform -skew-x-6 bg-black text-white border-b-2 border-[#A77375]">
                      Alex
                    </div>
                  </div>
                  <div className="relative transform -skew-x-3 h-[100px] w-[150px]">
                    <img
                      className="object-cover h-full"
                      src="images/section5/ueder-mobile.png"
                      alt="Ueder"
                    />
                    <div className="h-8 w-32 flex justify-start pl-4 items-center font-bold absolute bottom-4 -left-4 transform -skew-x-6 bg-black text-white border-b-2 border-[#A77375]">
                      Ueder
                    </div>
                  </div>
                  <div className="relative transform -skew-x-3 h-[100px] w-[150px]">
                    <img
                      className="object-cover h-full"
                      src="images/section5/travis-mobile.png"
                      alt="Travis"
                    />
                    <div className="h-8 w-32 flex justify-start pl-4 items-center font-bold absolute bottom-4 -left-4 transform -skew-x-6 bg-black text-white border-b-2 border-[#A77375]">
                      Travis
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col h-[90%] justify-evenly">
                  <div
                    key="Mario"
                    className="relative transform -skew-x-3 h-[100px] w-[150px] mt-12"
                  >
                    <img
                      className="object-cover h-full"
                      src="images/section5/mario-mobile.png"
                      alt="Mario"
                    />
                    <div className="h-8 w-32 flex justify-start pl-4 items-center font-bold absolute bottom-4 -left-4 transform -skew-x-6 bg-black text-white border-b-2 border-[#A77375]">
                      Mario
                    </div>
                  </div>
                  <div className="relative transform -skew-x-3 h-[100px] w-[150px]">
                    <img
                      className="object-cover h-full"
                      src="images/section5/max-mobile.png"
                      alt="Max"
                    />
                    <div className="h-8 w-32 flex justify-start pl-4 items-center font-bold absolute bottom-4 -left-4 transform -skew-x-6 bg-black text-white border-b-2 border-[#A77375]">
                      Max
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* //JOIN TELEGRAM */}
          <section>
            <div className="section-content">
              {/* <div className="section-content bg-[url('images/section6/background-mobile.png')]"> */}
              <img
                src="images/section6/background-mobile.png"
                className="absolute -z-20"
                alt="section6"
              />
              <div className="relative flex flex-row justify-end items-center">
                <img
                  className="absolute bottom-0 -z-10"
                  src="images/section6/gradientText.png"
                  alt=""
                />
                <div className="flex justify-center mb-4 pt-32 w-[80%]">
                  <img src="images/section6/word.png" alt="" />
                </div>
              </div>

              <MobileSwiperComponent />
            </div>
          </section>
        </main>
      </MobileView>
    </>
  );
}

export default App;
