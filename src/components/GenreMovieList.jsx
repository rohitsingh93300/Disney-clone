 import React from 'react'
 import GeneresList from './Constant/GeneresList'
 import MovieList from './MovieList'

 function GenreMovieList() {
   return (
     <div>
       {GeneresList.genere.map((item,index)=>index<=4&&(
         <div className='p-8 px-8 md:px-16'>
             <h2 className='text-white text-[20px] font-bold'>{item.name}</h2>
             <MovieList genreId={item.id} index_={index}/>
         </div>
       ))}
     </div>
   )
 }

 export default GenreMovieList


// import React from 'react'
// import GenresList from '../Constant/GeneresList'
// import MovieList from './MovieList'

// function GenreMovieList() {
//   return (
//     <div>
//         {GenresList.genere.map((item,index)=>index<=4&&(
//             <div className='p-8 px-8 md:px-16'>
//                 <h2 className='text-[20px] text-white 
//                 font-bold'>{item.name}</h2> 
//                 <MovieList genreId={item.id} index_={index} />   
//             </div>
//         ))}
//     </div>
//   )
// }

// export default GenreMovieList
