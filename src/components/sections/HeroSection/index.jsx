import AboutSection from '../AboutSection';
import Programs from '../Programs';
import './index.css'

const HeroSection = () => 
   (
    <div className='home-layout-container'>
<div className="hero-container-main">
      <div className="base-text-div fade-out">
        <div className="base-main-div">
          <div className="text-div">
            <p className="top-text">LET&apos;S DO <span>it</span></p>
            <h3 className="bottom-text">
              <span style={{ fontStyle: 'normal', fontWeight: 900, fontFamily: 'PFDinTextPro' }}>
                with
              </span>
              Tulas
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[60%] md:w-[30%] h-fit mx-auto" viewBox="0 0 268.317 14.075">
              <path 
                id="mainTextScribble" 
                d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0" 
                transform="translate(-403.065 -1791.313)" 
                fill="none" 
                stroke="#c09d59" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Top Text Border Layout */}
      <div className="top-text-div fade-out">
        <div className="base-main-div">
          <div className="text-div">
            <p className="top-text border-text">LET&apos;S DO <span>it</span></p>
            <h3 className="bottom-text border-text">
              <span style={{ fontStyle: 'normal', fontWeight: 900, fontFamily: 'PFDinTextPro' }}>
                with
              </span>{' '}
              Tulas
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[60%] md:w-[30%] h-fit mx-auto" viewBox="0 0 268.317 14.075">
              <path 
                id="mainTextScribble" 
                d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0" 
                transform="translate(-403.065 -1791.313)" 
                fill="none" 
                stroke="#c09d59" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Grid Site and Interactive Event Bubbles */}
      <div className="main-site">
        
        {/* Shooting */}
        <div style={{ transform: 'translate(0.0571429rem, 2.71429rem)', transition: 'transform 0.2s' }} className="bubble shooting">
          <div className="bubble-container">
            <div className="image-div">
              <img src="https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp" alt="events" width={2588} height={4040} className="background" placeholder="blur"  />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

   
        <div style={{ transform: 'translate(-0.0571429rem, -2.71429rem)', transition: 'transform 0.2s' }} className="bubble polo">
          <div className="bubble-container">
            <div className="image-div">
              <img src="https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp" alt="events" width={2588} height={3774} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Fitness */}
        <div style={{ transform: 'translate(-0.0571429rem, -2.71429rem)', transition: 'transform 0.2s' }} className="bubble fitness">
          <div className="bubble-container">
            <div className="image-div">
              <img src="	https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp" alt="events" width={2588} height={3992} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Karate */}
        <div style={{ transform: 'translate(0.0571429rem, 2.71429rem)', transition: 'transform 0.2s' }} className="bubble karate">
          <img src="https://tis.edu.in/_next/static/media/petal-2.57797264.webp" alt=" " width={98} height={139} className="petal" />
          <div className="bubble-container">
            <div className="image-div">
              <img src="	https://tis.edu.in/_next/static/media/karate.4020fba5.webp" alt="events" width={595} height={597} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Swimming */}
        <div style={{ transform: 'translate(0.0571429rem, 2.71429rem)', transition: 'transform 0.2s' }} className="bubble swimming">
          <img src="https://tis.edu.in/_next/static/media/petal-2.57797264.webp" alt=" " width={64} height={100} className="petal" />
          <div className="bubble-container">
            <div className="image-div">
              <img src="https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp" alt="events" width={3014} height={3126} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Yoga */}
        <div style={{ transform: 'translate(0.0571429rem, 2.71429rem)', transition: 'transform 0.2s' }} className="bubble yoga">
          <div className="bubble-container">
            <div className="image-div">
              <img src="https://tis.edu.in/_next/static/media/Image%201.0a814859.webp" alt="events" width={3202} height={2565} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Archery */}
        <div style={{ transform: 'translate(0.0571429rem, -2.71429rem)', transition: 'transform 0.2s' }} className="bubble archery">
          <img src="	https://tis.edu.in/_next/static/media/petal1.e89e415d.svg" alt=" " width={98} height={139} className="petal" />
          <div className="bubble-container">
            <div className="image-div">
              <img src="https://tis.edu.in/_next/static/media/pot.6f7c2ee3.webp" alt="events" width={3014} height={3363} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Dance */}
        <div style={{ transform: 'translate(-0.0571429rem, 2.71429rem)', transition: 'transform 0.2s' }} className="bubble dance">
          <div className="bubble-container">
            <div className="image-div">
              <img src="https://tis.edu.in/_next/static/media/dance.88843edb.webp" alt="events" width={4666} height={3021} className="background" />
              <div className="fade"></div>
            </div>
            <h2 className="title">TIS</h2>
          </div>
        </div>

        {/* Content Details section */}
        <div className="text-div-container">
          <div className="text-div">
            <h2 className="text">
              Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through{' '}
              <span className="circled-text active">
                seamless opportunities.
                <svg xmlns="http://www.w3.org/2000/svg" width="221.76199340820312" height="103.11299896240234" viewBox="0 0 221.762 103.113" className="yellow-circle active">
                  <path 
                    d="M1084.543,1367.481c-68.569-.781-129.469,16.536-137.725,32.77s20.556,39.816,114.145,20.079,125.269-44.985,61.308-57.333S982.6,1386.484,982.6,1386.484" 
                    transform="translate(-708.663 -1489.785) rotate(9)" 
                    fill="none" 
                    stroke="#c09d59" 
                    strokeLinecap="round" 
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

      </div>
    </div>
      <AboutSection/>
      <Programs/>
      <div>
  <div id="5" className="w-full h-full flex flex-col justify-center items-center py-2 md:py-10"><section  style={{
  clipPath: 'circle(100% at center center)',
  transition: 'clip-path 0.3s ease-in-out'
}}
  className="top-0 w-full h-full flex clip-circle-50px static section"><div className="hidden md:block w-full h-full"><div style={{width: '100%', height: '100%'}} ><video src="https://assets.tulas.edu.in/Desktop_TIS.mp4" preload="auto" autoPlay   muted  loop playsInline     style={{width: '100%', height: '100%'}}></video></div></div><div className="md:hidden w-full h-full"><div style={{width: '100%', height: '100%'}}><video src="https://assets.tulas.edu.in/Mobile_TIS.mp4" preload="auto" autoPlay="" loop="" playsInline   style={{width: "100%", height: "100%"}}></video></div></div></section></div>
      </div>

<div>
  <div className="at_Tis" id="6">
  <div className="image-tis">
    <img 
      alt="" 
      loading="lazy" 
      width="3375" 
      height="3375" 
      decoding="async" 
      data-nimg="1" 
      className="at_TIS_img" 
      src="https://tis.edu.in/_next/static/media/AtTIS.59351600.png" 
      style={{color: 'transparent'}}
    />
  </div>
  <div className="text-div-atTis">
    <p className="title">At Tulas, we always ask, “What’s the secret to making school awesome?”</p>
    <p className="AtTisdescription">
      The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.
      <br />
      <br />
      <span className="text-[#60bab1]">There, we cracked it!</span>
    </p>
  </div>
</div>

</div>


    
       
  
  </div>

  
    
  );

export default HeroSection