import React, { Component } from 'react'
import Card from '../cards/card';
import Dropdown from '../dropdown/dropdown.js';
import './ProjectDashboard.css';
//import Goals from '../goals/goals.js';
//import PageContainer from '../TextEditor/PageContainer'
//import ProjectCalendar from '../ProjectCalendar/ProjectCalendar'
import Tabs from "../tabs/Tabs";
import SearchBar from "../searchbar/searchbar";
import InProgressCard from "../cards/inProgressCard";


class ProjectDashboard extends Component {
  render(){
    return(
      <>
      <div class="overflow-hidden">
           <Tabs>
           <div label="IN PROGRESS">
           <div class="px-6 pt-4 pb-2 flex space-x-8 ml-8">
           {/*<span class="inline-block border-green-400 px-3 py-1 text-base font-semibold text-green-400 mr-2 mt-3">Filter based on tech used: </span>*/}
                <span className="search-box" class="inline-block px-1 py-1 text-sm font-normal mt-6"><Dropdown/></span>

                <div className="tech-tags">
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">ML</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">IoT</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">Flutter</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">MERN</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">OpenCV</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">Firebase</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">HTML | CSS</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">JavaScript</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">Django</span>
               <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-10 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">AR</span>
               </div>

         {/*      <SearchBar />
        <span className="search-box" class="inline-block border-white border px-3 rounded py-1 text-sm font-normal text-white ml-48 mt-3">Search for a specific project</span> */}

          </div>
          <SearchBar />

          <InProgressCard />


           </div>
     <div label="COMPLETED">
     <div class=" px-6 pt-4 pb-2 flex space-x-8 ml-8">
     {/*<span class="inline-block border-green-400 px-3 py-1 text-base font-semibold text-green-400 mr-2 mt-3">Filter based on tech used: </span>*/}
          <span className="search-box" class="inline-block px-1 py-1 text-sm font-normal mt-6"><Dropdown/></span>

          <span className="tech-tags">
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">ML</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">IoT</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">Flutter</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">MERN</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">OpenCV</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">Firebase</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">HTML | CSS</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">JavaScript</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-2 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">Django</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm bg-green-400 font-semibold text-white mr-10 mt-6 cursor-pointer  hover:bg-white hover:text-green-400">AR</span>
         </span>

   {/*      <SearchBar />
  <span className="search-box" class="inline-block border-white border px-3 rounded py-1 text-sm font-normal text-white ml-48 mt-3">Search for a specific project</span> */}

    </div>
    <SearchBar />
     <div class="p-10 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
       <Card />
    </div>

     </div>

   </Tabs>

{/*   <div className="editor">
        <PageContainer />
        </div>
        <div class="flex flex-wrap">
        <Goals />
        <ProjectCalendar />
        </div>


*/}


    {/*      <SearchBar />
   <span className="search-box" class="inline-block border-white border px-3 rounded py-1 text-sm font-normal text-white ml-48 mt-3">Search for a specific project</span> */}
</div>
     </>
    )
  }
}

export default ProjectDashboard
