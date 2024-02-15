import './App.css';
import MenuNavigation from './components/MenuNavigation';
import SwiperComponent from './components/swiper/swiper';

function App() {
  const imgList = [
    {
      name: 'HOME',
      link: 'https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'BLOCKCHAIN',
      link: 'https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'ROADMAP',
      link: 'https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'COMMUNITY',
      link: 'https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'TEAM1',
      link: 'https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'TEAM2',
      link: 'https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
            <img
              src="./src/assets/section2bg.png"
              className="about"
              alt="about"
            />
            {/* <img className="two-jellyfish" alt="Two jellyfish" /> */}
          </div>
        </section>

        <section>
          <div className="section-content h-[200vh]">
            <div className="text-title-section" id="LEARN">
              LEARN MORE
            </div>
            <div className="flex justify-between my-6">
              <div></div>
              <div className="flex items-center">
                <div className="bg-blue-500 h-[200px] w-[350px] mr-[-20px] mt-[-10px] z-10"></div>
                <div className="bg-red-500 h-[350px] w-[550px] flex flex-row justify-center">
                  <div className="w-1/2 p-8">
                    <p className="p-2">GET SPKM TOKENS</p>
                    <p className="p-2">
                      Lorem ipsum dolor sit sint iure quo dolorem, omnis
                      doloribus maxime necessitatibus sequi explicabo ullam
                      deleniti mollitia cupiditate sapiente. Et, porro itaque?
                    </p>
                    <p className="bg-yellow-500 p-2">VIEW TOUR</p>
                  </div>
                  <div className="w-1/2">HHHHH</div>
                </div>
              </div>
              {/* <img className="w-96 h-64" src="https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pika" /> */}
            </div>
            <div className="flex justify-between my-6">
              <div className="flex items-center">
                <div className="bg-red-500 h-[350px] w-[550px] flex flex-row justify-center">
                  <div className="w-1/2 p-8">
                    <p className="p-2">GET SPKM TOKENS</p>
                    <p className="p-2">
                      Lorem ipsum dolor sit sint iure quo dolorem, omnis
                      doloribus maxime necessitatibus sequi explicabo ullam
                      deleniti mollitia cupiditate sapiente. Et, porro itaque?
                    </p>
                    <p className="bg-yellow-500 p-2">VIEW TOUR</p>
                  </div>
                  <div className="w-1/2">HHHHH</div>
                </div>
                <div className="bg-blue-500 h-[200px] w-[350px] mr-[-20px] mt-[-10px] z-10"></div>
              </div>
              <div></div>
              {/* <img className="w-96 h-64" src="https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pika" /> */}
            </div>
            <div className="flex justify-between my-6">
              <div></div>
              <div className="flex items-center">
                <div className="bg-blue-500 h-[200px] w-[350px] mr-[-20px] mt-[-10px] z-10"></div>
                <div className="bg-red-500 h-[350px] w-[550px] flex flex-row justify-center">
                  <div className="w-1/2 p-8">
                    <p className="p-2">GET SPKM TOKENS</p>
                    <p className="p-2">
                      Lorem ipsum dolor sit sint iure quo dolorem, omnis
                      doloribus maxime necessitatibus sequi explicabo ullam
                      deleniti mollitia cupiditate sapiente. Et, porro itaque?
                    </p>
                    <p className="bg-yellow-500 p-2">VIEW TOUR</p>
                  </div>
                  <div className="w-1/2">HHHHH</div>
                </div>
              </div>
              {/* <img className="w-96 h-64" src="https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pika" /> */}
            </div>
          </div>
        </section>

        <section>
          <div className="section-content h-screen">
            TOKEN
            <div className="relative">
              <div className="absolute left-[15%] bg-red-300 w-[300px] h-[500px] ">
                <img
                  className="h-64 w-72 opacity-60"
                  src="https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="token3"
                />
              </div>
            </div>
            <div class="flex my-10 justify-center">
              <img
                className="h-64 w-4/12 mr-[-20px]  mt-[-10px] z-10"
                src="https://images.unsplash.com/photo-1706625462068-37cf2faa9fbd?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="token"
              />
              <img
                className="h-64 w-72"
                src="https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="token1"
              />
            </div>
            <div className="relative">
              <div className="absolute bottom-4 -z-10 transform -rotate-[30deg]  flex overflow-x-hidden border-y-8 bg-[#F7BC1A] border-black">
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
        </section>

        <section>
          <div className="section-content flex flex-col justify-evenly items-center h-screen">
            <div className="text-title-section" id="TEAM">
              TEAM
            </div>
            <div className="flex flex-wrap gap-1 justify-evenly w-full">
              {imgList?.map(item => {
                return (
                  <div
                    key={item.name}
                    className="relative bg-red-100 transform -skew-x-3 h-[300px] w-[200px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                  >
                    <img
                      className="object-cover h-48 w-96"
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
            JOIN TELEGRAM
            <SwiperComponent />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
