import './App.css';
import MenuNavigation from './components/MenuNavigation';
import SwiperComponent from './components/swiper/swiper';

// interface ImageItem {
//   name: string;
//   link: string;
// }

function App() {
  const imgList = [
    {
      name: 'HOME',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'BLOCKCHAIN',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'ROADMAP',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'COMMUNITY',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'TEAM1',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'TEAM2',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <MenuNavigation />
      <main className="flex flex-col h-screen">
        <section>
          <img
            className="w-full h-auto"
            src="https://images.unsplash.com/photo-1690123629470-845b87224313?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Girl in a jacket"
          />

          <div className="section-content ">
            <div className="relative flex overflow-x-hidden border-y-8 bg-[#F7BC1A] border-black">
              <div className="py-12 animate-marquee whitespace-nowrap">
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
              </div>

              <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
                <span className="text-4xl mx-4">POKÉMONPIKACHU</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-content h-screen">
            <div className="text-title-section" id="BLOCKCHAIN">
              BLOCKCHAIN
            </div>
            {/* <img
              src="./src/assets/section2bg.png"
              className="about"
              alt="about"
            /> */}
            <div className="flex">
              <div className="bg-yellow-400 w-1/3 h-screen flex gap-4 justify-center">
                <div className="bg-orange-800 w-1/3 h-1/2 flex flex-col gap-4">
                  <div className="bg-yellow-800 h-32"></div>
                  <div className="bg-yellow-900 h-32"></div>
                </div>
                <div className="bg-orange-200 w-96 h-96">
                  <div className="bg-orange-500 w-96 h-80"></div>
                  <div className="flex gap-4 mt-2">
                    <div className="rounded-full bg-orange-500 w-16 h-16"></div>
                    <div className="rounded-full bg-orange-500 w-16 h-16"></div>
                    <div className="rounded-full bg-orange-500 w-16 h-16"></div>
                  </div>
                </div>
              </div>
              <div className="w-1/3  h-screen">
                <img
                  className="z-10"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                  alt=""
                />
              </div>
              <div className="bg-red-200 w-1/3 h-screen">
                <div className="h-1/2 start-6 flex flex-col justify-center">
                  <div className="relative -rotate-[15deg] h-[15%]">
                    <p className="fill absolute -top-32" data-text="GENOS">
                      GENOS
                    </p>
                  </div>
                  <div className="h-2/3">
                    <p className="ml-28 font-extrabold text-7xl">
                      CONNECT WALLET
                    </p>
                    <p className="h-[10%] ml-28">
                      Participate in or Airdrop Participate in our Airdrop
                      Pioneer P
                    </p>
                  </div>
                </div>
                <div className="h-1/2">
                  <div className="bg-[#F7BC1A] w-full h-10 flex justify-center items-center font-extrabold text-2xl">
                    <p>START TEH MISSIONS</p>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-evenly w-full">
                    {imgList?.map(item => {
                      return (
                        <div
                          key={item.name}
                          className="relative bg-red-100 transform -skew-x-3 h-[200px] w-[100px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                        >
                          <img
                            className="object-cover h-48 w-96"
                            src={item.link}
                            alt={item.name}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-content h-[200vh]">
            <div className="w-full flex justify-center mb-4">
              <p className="flex justify-center items-center text-4xl w-80 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                LEARN MORE
              </p>
            </div>
            <div className="flex justify-between my-6">
              <div className="w-1/4"></div>
              <div className="flex items-center w-3/4">
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
                <div className="bg-red-500 h-[450px] w-full flex flex-row justify-center">
                  <div className="w-1/2 pl-32 ">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        GET $PKM TOKENS
                      </p>
                      <p className="p-2">
                        Learn about the $PKMgovernance token and itsutilities in
                        the eco-
                      </p>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-500 p-2 text-4xl font-extrabold">
                        VIEW TOUR
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img
                      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-6">
              <div className="flex items-center w-3/4">
                <div className="bg-red-500 h-[450px] w-full flex flex-row justify-center">
                  <div className="w-1/2">
                    <img
                      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 pr-32 ">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        GET $PKM TOKENS
                      </p>
                      <p className="p-2">
                        Learn about the $PKMgovernance token and itsutilities in
                        the eco-
                      </p>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-500 p-2 text-4xl font-extrabold">
                        VIEW TOUR
                      </p>
                    </div>
                  </div>
                </div>
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
              </div>
              <div className="w-1/4"></div>
            </div>
            <div className="flex justify-between my-6">
              <div className="w-1/4"></div>
              <div className="flex items-center w-3/4">
                <div className="bg-blue-500 h-[315px] w-[560px] mr-[-100px] z-10">
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
                <div className="bg-red-500 h-[450px] w-full flex flex-row justify-center">
                  <div className="w-1/2 pl-32 ">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        GET $PKM TOKENS
                      </p>
                      <p className="p-2">
                        Learn about the $PKMgovernance token and itsutilities in
                        the eco-
                      </p>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-500 p-2 text-4xl font-extrabold">
                        VIEW TOUR
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img
                      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-content h-screen flex flex-col justify-center items-center">
            <p className="flex text-4xl w-32 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
              TOKEN
            </p>
            <div className="flex flex-row w-full justify-evenly">
              {/* <div className="relative">
                <div className="absolute left-[15%] bg-red-300 w-[300px] h-[500px] ">
                  <img
                    className="h-64 w-72 opacity-60"
                    src="https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="token3"
                  />
                </div>
              </div> */}
              <div className="flex justify-center gap-5 items-center w-full">
                <div className="bg-red-800 h-[700px] mr-[-100px] w-[300px] flex justify-center items-center z-10">
                  <img
                    className="object-cover opacity-10 w-[300px]  flex justify-center"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                    alt=""
                  />
                </div>
                <div className="h-full flex justify-center items-center">
                  <div className="bg-blue-500 mr-[-100px] z-10">
                    <img
                      className="h-[400px] object-cover"
                      src="https://images.unsplash.com/photo-1707949576610-a373542c77df?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="bg-red-500">
                    <img
                      className="h-[500px] object-cover"
                      src="https://images.unsplash.com/photo-1707653057279-b94dff636f62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute bottom-2 py-2 -end-4 w-[800px] -z-10 transform -rotate-[30deg]  flex overflow-x-hidden border-b-8 bg-[#F7BC1A] border-black">
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
            </div>
          </div>
        </section>

        <section>
          <div className="section-content flex flex-col justify-evenly items-center h-screen">
            <div id="TEAM">
              <p className="flex justify-center items-center text-4xl w-32 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
                TEAM
              </p>
            </div>
            <div className="flex flex-wrap gap-1 justify-evenly w-full">
              {imgList?.map(item => {
                return (
                  <div
                    key={item.name}
                    className="relative bg-red-100 transform -skew-x-3 h-[400px] w-[200px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                  >
                    <img
                      className="object-cover h-full"
                      src={item.link}
                      alt={item.name}
                    />
                    <div className="absolute bottom-2 -left-2 transform -skew-x-3 bg-black text-white">
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="h-screen">
          <div className="section-content">
            <div className="w-full flex justify-center mb-4">
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
