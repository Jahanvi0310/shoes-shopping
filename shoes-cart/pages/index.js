import Head from 'next/head'
import { useState,useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
export default function Home() {
  const [TwElements, setTwElements] = useState(null);

  useEffect(() => {
    import('tw-elements').then((module) => {
      setTwElements(module.default);
    });
  }, []);
  const slide = useSpring({
    from: { transform: 'translate3d(-100%,0,0)' },
    to: { transform: 'translate3d(0,0,0)' },
    config: { tension: 60, friction: 20 },
  });
  if (!TwElements) {
    return <div>Loading...</div>;
  }
  
  
  return (

    <>
    
    <div>
    <Head>
  <title>ShoeMart.com</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="icon" href="/favicon.ico" />
  <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/react-spring/dist/index.umd.js"></script>
</Head>

      <animated.div style={slide}>
      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
     ></button>
   
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/1839569-seo-how-to-break-in-running-shoes-body-image-2_221-681798.jpg"
        className="w-full max-h-[40rem] block"
        alt="..."
      />
    
      <div className="carousel-caption hidden md:block absolute text-center">
      <h5 className="text-xl">Adidas Limited Stock</h5>
        <p>Adidas, in full Adidas AG, German manufacturer of athletic shoes and apparel and sporting goods. In the early 21st century it was the largest sportswear manufacturer in Europe and the second largest (after Nike) in the world.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://kdvr.com/wp-content/uploads/sites/11/2022/11/000_best-men-s-dress-shoes-83a80d.jpg"
        className="w-full max-h-[40rem] block"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Formal Shoes</h5>
        <p>SAs formal shoes are meant for (obviously) formal occasions, they are compact and sleek in shape. Formality requires shoes to be presentable but not overbearing. Contrast this with casual shoes like Sneakers and Espadrilles, which tend to be bulkier in shape with less structure.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fhips.hearstapps.com%2Fbpc.h-cdn.co%2Fassets%2F16%2F12%2F1600x800%2Flandscape-1458943638-sport-sandals.jpg%3Fresize%3D1200%3A*"
        className="w-full max-h-[40rem] block"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Sneakers</h5>
        <p>
Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://www.apetogentleman.com/wp-content/uploads/2022/01/sneaker-types-men.jpg"
        className="block w-full max-h-[40rem]"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
      
    </div>
  
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</animated.div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-gray-900">
             ShoeMart.com
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            A shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock. Shoes are also used as an item of decoration and fashion.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-30 h-15 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kinderschoenen.jpg/1200px-Kinderschoenen.jpg" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Blue Sneakers
                </h2>
                <p className="leading-relaxed text-base">
                There are many different types of shoes. Athletic shoes, for example, are lightweight to make running, walking or jogging easier. The sole of the shoe is also softer. Shoes for formal wear are made of leather. They are worn for business and ceremonial functions. They are also worn for fashion. Slippers are a kind of indoor shoe. They are often worn when it is cold. Shoes with a high heel are called high heels. Tall shoes are boots. Rubber boots are used in wet places.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg ">
                <div className="w-30 h-15 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <img src="https://cdn.shopify.com/s/files/1/0023/9724/1443/files/hm-mto-img_f3438769-3046-4c72-beab-6250997bba0a_1600x.jpg?v=1622451951" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                 
                 Gentle Curves
                </h2>
                <p className="leading-relaxed text-base py-10">
                At CNES Shoemaker, we strive to create elegant and functional items to suit your needs. By merging classical construction with timeless sensibility, we hope to empower discerning individual with fine shoes. Our mission is simple, we want to create good shoes and showcase exquisite craftsmanship to the world.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-30 h-15 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/832f926ac5b740589dedaf3f00ebd809_9366/avryn-shoes.jpg" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                 Web BOOST Shoes
                </h2>
                <p className="leading-relaxed text-base">
                A shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.
                </p>
              </div>
            </div>
           
            
            
          </div>
          
        </div>
      </section>
    </div>
  

    </>
    
   
  )
}
