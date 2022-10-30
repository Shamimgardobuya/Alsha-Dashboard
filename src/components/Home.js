import React from "react";
import './Home.css';
import {FaGem,FaHands} from 'react-icons/fa';


const quranData=[
    {
      'id':1,
      'name':'Al-Fatiha        الفاتحة'

    },
    // {
    //     'id':2,
    //     'name':'Al-Baqara      الْبَقَرَة'
  
    //   },
    // {
    //    'id':3,
    //    'name':'Al-Imran        آلِ عِمرَان'
    // }
]

function Home(){
return(

    <div>
      <div id="Nav">
        <nav>
    
       
   <ul>   <h2>M<FaHands/>    Islam</h2>
  
    <li>Donate</li>
    <li>Donate</li>
    <li>99 Names of Allah</li>
    <li>Prophet Stories</li>
    <li>Islam</li>
    <li>Quotes</li>
    <li>Qur'an</li>

   </ul>

        </nav>


      </div>

        <h1>QURAN TRANSLITERATION</h1>
        <div id="StartBox">
          <p> <span id="span"/>30   <FaGem/>  The Holy Qur'an in 30 Juz </p>
   
    {/* <span/>
    <div id="Second">
        </div> */}
         </div>
         <div id="firstsec">
         <div id="First">

<p> 
 Al-Fatiha 
   {/* <span>   */}
   الفاتحة'  
    {/* </span> */}
    </p>

</div>
<div id="Second">
    <a href="Baqara"></a>
     <p> 
      Al-Baqara  
        {/* <span>   */}
         الْبَقَرَة   
         {/* </span> */}
         </p>

     </div>
     <div id="Sixth">

<p> 
 Al-An'am 
   {/* <span>   */}
   ٱلْأَنْعَام
    {/* </span> */}
    </p>

</div>
         </div>
       
        {/* {quranData.map(item =><div key={item.id} */}
{/* style={{width:"24rem",backgroundColor:'#6CE6EF',height:'5rem',display:'inline-flex',borderRadius:'5%',marginTop:'3rem',marginLeft:'-35rem'}} > */}

   {/* <p>{item.name}</p> */}
 {/* <small>{item.p}</small> */}
 {/* </div> */}
 
 {/* )} */}
     
    
     <div id="threeAndfour">
     <div id="Third">
     <p> 
      Al-Imran 
        {/* <span>   */}
        آلِ عِمرَان
         {/* </span> */}
         </p>

     </div>

     <div id="Four">
     <p> 
      Al-Nisa 
        {/* <span>   */}
        ٱلنساء
         {/* </span> */}
         </p>

     </div>

 <div id="Fifth">
     <p> 
      Al-Maidah 
        {/* <span>   */}
        ٱلنساء
         {/* </span> */}
         </p>

     </div>

     </div>

    <div id="Next">
     <div id="Seventh">
     <p> 
      Al-A'raf
        {/* <span>   */}
        ٱلْأَعْرَاف
         {/* </span> */}
         </p>

     </div>

     <div id="Eighth">
     <p> 
      Al-Anam
 
        ٱلأنعام
      
         </p>

     </div>

 <div id="Ninth">
     <p> 
      Al-Taubah

      ٱلتوبة
       
         </p>

     </div>

     </div>
    
     

    </div>

)
}
export default Home;