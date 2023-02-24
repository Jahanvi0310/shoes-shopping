import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const ProductPage=()=> {
    const [shoes, setShoes] = useState([
       
        {
          title: "Nike Air Max 574",
          img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/68c28c49-4c26-4f81-9b4e-0e9760edcef9/air-max-alpha-trainer-5-training-shoes-x8Jzj6.png",
          price: "$129.99",
          slug: "nike-air-max-971",
          size: "10",
          color: 'black',
          availableQty: '100',
          category: 'nike',
          desc: "nike airmax comfartable",
        
        },
        {
          title: "Adidas Superstar",
          img: "https://5.imimg.com/data5/SELLER/Default/2021/12/OG/QY/LZ/24989634/adidas-ultraboost-21-img-1791-500x500.jpeg",
          price: "$89.99",
          slug: "adidas-superstar",
          size: "11",
          color: 'white',
          availableQty: '50',
          category: 'Addidas',
          desc: "adidas classic",
        
        },
        {
            title: "Puma tiger",
            img: "https://i8.amplience.net/s/scvl/124665_264211_SET/1?fmt=auto&$webPlp$",
            price: "$79.99",
            desc: "nike airmax comfartable",
            slug: "puma 1",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'puma',
        
          },
          {
            title: "Reebook",
            img: "https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/reebok_enUS/Images/21FW_W-Gender_FD_PLP_Interactive-Wallpaper_Tile_Training_DT2_tcm274-763427.jpg",
            price: "$79.99",
            desc: "reebook comfartable",
            slug: "reebook 1",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'reebook',
            
          },

          {
            title: "puma 574",
            img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17663260/2022/8/18/202032d6-0d34-43a4-98e8-0714004c99491660818623004-Puma-Men-Black-City-Running-Shoes-4171660818622516-1.jpg",
            price: "$79.99",
            desc: "puma comfartable",
            slug: "new-balance-574",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'puma',
            
          },
          {
            title: "redtape",
            img: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10769238a.jpg",
            price: "$79.99",
            desc: "Red tape is an idiom referring to regulations or conformity to formal rules or standards which are claimed to be excessive, rigid or redundant, or to bureaucracy claimed to hinder or prevent action or decision-making.",
            slug: "redtape-574",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'redtape',
            
          },
          {
            title: "redtape running",
            img: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RSO2211/8-800x800.jpg",
            price: "$79.99",
            desc: "Red tape is an idiom referring to regulations or conformity to formal rules or standards which are claimed to be excessive, rigid or redundant, or to bureaucracy claimed to hinder or prevent action or decision-making.",
            slug: "redtape-571",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'redtape',
            
          },
          {
            title: "redtape running 1",
            img: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RSO1874/8-800x800.jpg",
            price: "$79.99",
            desc: "Red tape is an idiom referring to regulations or conformity to formal rules or standards which are claimed to be excessive, rigid or redundant, or to bureaucracy claimed to hinder or prevent action or decision-making.",
            slug: "redtape-572",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'redtape',
            
          },
          {
            title: "redtape running 2",
            img: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RSO2091/8-800x800.jpg",
            price: "$79.99",
            desc: "Red tape is an idiom referring to regulations or conformity to formal rules or standards which are claimed to be excessive, rigid or redundant, or to bureaucracy claimed to hinder or prevent action or decision-making.",
            slug: "redtape-573",
            size: "10",
            color: 'black',
            availableQty: '100',
            category: 'redtape',
            
          },
          
      ]);
      const [selectedCategory, setSelectedCategory] = useState('all');

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };
    
      const filteredShoes = selectedCategory === 'all' ? shoes : shoes.filter((shoe) => shoe.category === selectedCategory);
    
  return (
    <>
    

   <div className="mt-16">
   <motion.h2
          className="text-gray-900 text-xl font-medium mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >Our Fast selling Products</motion.h2>
        <div className='mb-3 '>
  <h2>Select a category:</h2>
  <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCategoryChange('all')}>All</button>
  <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCategoryChange('puma')}>Puma</button>
  <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCategoryChange('reebook')}>Reebook</button>
  <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCategoryChange('redtape')}>RedTape</button>
  <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCategoryChange('nike')}>Nike</button>
        
  {/* Add more category buttons as needed */}
</div>
        <p className="text-red-500 text-xl font-medium mb-3">Limited stock!!sold out soon Hurry Upp!!!!!!!!!</p>
      <div className="flex flex-wrap -mx-2">
        {filteredShoes.map((shoe) => (
            <motion.div
              key={shoe.slug}
              className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            <Link href={`/Product/${shoe.slug}`} legacyBehavior>
              <a>
              <motion.div
                    className="h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                  <motion.img
                      className="object-cover object-center h-full w-full"
                      src={shoe.img}
                      alt={shoe.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                </motion.div>
                <motion.h3
                    className="text-gray-900 font-medium mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >{shoe.title}</motion.h3>
                <motion.p
                    className="text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >{shoe.price}</motion.p>
                  <motion.p
                    className="text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >{shoe.size}</motion.p>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>


    </>
  );
}


      export default ProductPage;