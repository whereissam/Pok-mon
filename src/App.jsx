import './App.css';
import MenuNavigation from './components/MenuNavigation';
import SwiperComponent from './components/swiper/swiper';
import PokemonTabs from './components/tabs/pokemonTabs';

function App() {
  const imgList = [
    {
      name: 'Alex',
      link: '../src/assets/section5/alex.png',
    },
    {
      name: 'Mario',
      link: '../src/assets/section5/mario.png',
    },
    {
      name: 'Ueder',
      link: '../src/assets/section5/ueder.png',
    },
    {
      name: 'Max',
      link: '../src/assets/section5/max.png',
    },
    {
      name: 'Travis',
      link: '../src/assets/section5/travis.png',
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
              src="../src/assets/section1/background1.png"
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
          <div className="section-content h-screen">
            <div className="text-title-section" id="BLOCKCHAIN">
              BLOCKCHAIN
            </div>
            <PokemonTabs />
          </div>
        </section>

        {/* //LEARN MORE */}
        <section>
          <div className="section-content relative mt-32 h-[200vh]">
            <div className="w-full flex justify-center py-12">
              <p className="flex justify-center items-center text-4xl w-80 h-16 border-black border-b-8 font-extrabold bg-[#F7BC1A]">
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
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps16mkvp2g4eaxox2umc5lkj7872bvae7f2018fb46-a6b1-4bfe-931b-64fd9049cf81"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-32">
              <div className="flex items-center w-3/4">
                <div className="bg-red-500 h-[450px] w-full flex flex-row justify-center">
                  <div className="w-1/2">
                    <img
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/pszi99nehkvfnloozoxqaanfypmks0o490d49cc6-5907-4965-86f2-47f97b452ae4"
                      alt="pokemon2"
                    />
                  </div>
                  <div className="w-1/2 pr-32 ">
                    <div className="h-2/3 flex flex-col items-center justify-center">
                      <p className="p-2 w-full text-4xl font-extrabold flex items-center">
                        JOIN THE GAME
                      </p>
                      <span className="text_7 text-white w-[341px] h-[56px] text-[25px] font-extrabold ">
                        Download&nbsp;the&nbsp;game&nbsp;on&nbsp;iosor&nbsp;Android&nbsp;mobile&nbsp;devices.
                      </span>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-500 p-2 text-4xl font-extrabold">
                        DOWNLOAD
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
                        INVITE FRIEND
                      </p>
                      <span className="text_9 w-[330px] h-[59px] text-white break-words font-extrabold">
                        Climb&nbsp;the&nbsp;$PKM&nbsp;leaderboard&nbsp;by&nbsp;inviting&nbsp;your&nbsp;friends&nbsp;with&nbsp;your&nbsp;code
                      </span>
                    </div>
                    <div className="h-1/3 flex">
                      <p className="h-16 flex justify-center items-center bg-yellow-500 p-2 text-4xl font-extrabold">
                        CODE HERE
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/psj4b7uhw71tw6dadrunllcoiprz2mikpq0700dcf1-5559-4987-b011-a1aa559c3378"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //TOKEN */}
        <section>
          <div className="section-content relative h-screen flex flex-col justify-center items-center">
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
              <div className="flex justify-center items-center w-full">
                <div className="h-full flex justify-center items-center">
                  <div className="bg-red-800 h-[700px] mr-[-100px] w-[20%] flex justify-center items-center z-10">
                    <img
                      className="object-cover opacity-10 w-[300px]  flex justify-center"
                      src="../src/assets/section4/pika1.png"
                      alt=""
                    />
                  </div>
                  <div className="mr-[-20px] w-[40%] z-10">
                    <img
                      className="object-cover"
                      src="../src/assets/section4/pika1.png"
                      alt=""
                    />
                  </div>
                  <div className="bg-red-500">
                    <img
                      className="h-[500px] object-cover"
                      src="../src/assets/section4/token.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* <div className="relative"> */}
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
              {/* </div> */}
            </div>
          </div>
        </section>

        {/* //TEAM */}
        <section>
          <div className="section-content flex flex-col justify-center gap-20 items-center h-screen">
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
