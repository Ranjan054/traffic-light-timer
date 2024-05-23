import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

//nation year population in table format

// const Homepage = () => {
//     const [nationData, setNationData] = useState([]);

//     useEffect(() => {
//         async function getData() {
//             const resD = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
//             const resDataA = await resD;
//             const resData = await resDataA.json();
//             setNationData(resData?.data || [])
//         }

//         getData();

//     }, [])

//     return (
//         <section className='py-10'>
//             <div className='container'>
//                 <div className='flex border border-black'>
//                     <p className='w-[33%] px-3 py-4 border-r'>Nation</p>
//                     <p className='w-[33%] px-3 py-4 border-r'>Year</p>
//                     <p className='w-[33%] px-3 py-4'>Population</p>
//                 </div>

//                 {
//                     nationData.length ? (
//                         nationData.map((nation) => (
//                             <div key={nation?.Nation} className='flex border-b border-x border-black'>
//                                 <p className='w-[33%] px-3 py-4 border-r'>{nation?.Nation}</p>
//                                 <p className='w-[33%] px-3 py-4 border-r'>{nation?.Year}</p>
//                                 <p className='w-[33%] px-3 py-4'>{nation?.Population}</p>
//                             </div>
//                         ))
//                     ) : null
//                 }

//             </div>
//         </section>
//     );
// }

// export default Homepage;