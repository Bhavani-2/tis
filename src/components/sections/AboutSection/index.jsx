import './index.css'
import Programs from '../Programs';


const AboutSection =()=>(
    <div className="home-layout-allSection flex flex-col gap-6 md:gap-[2%]">
           <div className="third-section-main-div" id="3">
            <div className="content-div">
                <div className="text-div">
                    <h2 className="title">“We feel supported in what we do and nudged further to do more”</h2>
                    <p className="text">At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.</p></div>
                    <div className="image-div">
                        <img alt="" loading="lazy" width="525" height="476" decoding="async" data-nimg="1" className="image"  src="https://tis.edu.in/_next/static/media/ladyInPink.c358aa8f.png"/></div></div>
                        <div className="middle-div">
                            <img alt="" loading="lazy" width="638" height="290" decoding="async" data-nimg="1" className="image" src="https://tis.edu.in/_next/static/media/madeForFuture.e96fe7c1.png"/></div>
                            <div className="content-div"><div className="image-div">
                                <img alt="" loading="lazy" width="483" height="478" decoding="async" data-nimg="1" className="image"  src="https://tis.edu.in/_next/static/media/manInBlue.46316cbf.png"/></div>
                                <div className="text-div" style={{width:'90%'}}><h2 className="title">“Tulas helped me thrive and become the best version of myself”</h2>
                                <p className="text">When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.</p></div></div></div>
    </div>

)
export default AboutSection