/* current */


import React, { Component } from 'react';
import './card.css';
import ProjectData from '../ProjectDetails.json';



class Card extends Component {
  render(){
  return(

  <>
  {ProjectData.map((projectDetail, index) => {

    return (
      <div class="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-white z-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 transition-transform">

         <div class="font-bold text-xl p-1.5 text-green-400 mb-2">
           <h1>{projectDetail.title}</h1>
         </div>

         <div>
           <img src={projectDetail.imageurl}  alt='' class="w-full"/>
         </div>

         <div className="text-gray-700 text-base p-4">
           <p>{projectDetail.body}</p>
         </div>

         <div class="p-4 border-t border-b text-gray-700">
           <p class="text-green-400">Contributors</p>
            {projectDetail.contributors.map((contributor) => <div>{contributor}</div>)}
         </div>

         <div class="px-6 pt-4 pb-2">
<span>{projectDetail.tags.map((tag) => <span class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>)}</span>


        </div>


        <div class="mb-4">
        <a href={projectDetail.link}><button class="border-solid border-2 border-green-500 py-2 px-6 mt-4 rounded text-sm font-semibold hover:bg-green-500 hover:text-white">SEE MORE</button></a>
        </div>
    </div>
  )
  })}
  </>

)
}
}
/*
const Card = (props) => {
  return (

<>
    <div className="item" class="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-white z-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 transition-transform">

       <div class="font-bold text-xl p-1.5 text-green-400 mb-2">
         <h1>{props.title}</h1>
       </div>

       <div>
         <img src={props.imageurl}  alt='' className="w-full"/>
       </div>

       <div className="text-gray-700 text-base p-4">
         <p>{props.body}</p>
       </div>

       <div class="p-4 border-t border-b text-gray-700">
         <p class="text-green-400">Contributors</p>
          {props.contributors}
       </div>

       <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tags.join(" ")}</span>
      </div>

      <div class="mb-4">
      <a href={props.link}><button class="border-solid border-2 border-green-500 py-2 px-6 mt-4 rounded text-sm font-semibold hover:bg-green-500 hover:text-white">SEE MORE</button></a>
      </div>
  </div>
  </>
  );
};*/

export default Card;
