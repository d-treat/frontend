import Navbar from '../components/NavBar';
import {AiFillYoutube} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";

import Image from 'next/image';


export default function Home() {
  return <div>
  <div className='flex'>
    <div class='Image'>
  <Image src="/logo.svg" alt="SVG Image" width={100} height={100} />
  </div>
    <div className='space-between'>
  <button class='signup text-white'>Sign Up</button>
    <button class='login'>login</button>
      <Navbar/>
      </div>
      </div>
      <div>
        <div className='text-1xs h-[20vh] text-[#2B4360] w-[25rem] ml-[10rem] mt-[10rem]'>
        <h1 class='digital'>A digital and Modern <br></br>Approach to Healthcare</h1>
        <p>Medical services made easy and accessible<br></br>
anywhere! Learn more about the best solution<br></br>
for modern and digital healthcare.</p>

</div>

<button class='get_started text-white'>Get Started</button>
<div class='image'>

</div>
<div class='stats flex space-around mt-[2rem]'>
  <div className='mr-[3px]'>
  <span className=' font-arial text-2xl text-blue-900'>000+</span> <br></br>
  <span>Online Appointment</span>
  </div>
  <div >
  <span className=' font-arial text-2xl text-blue-900'>000k</span> <br></br>
  <span>Patient Recovered</span>
  </div>
  <div>
  <span className=' font-arial text-2xl text-blue-900'>000k</span> <br></br>
  <span>Statification Rate</span>
  </div>
  <div>
  <span className=' font-arial text-2xl text-blue-900'>000%</span><br></br>
  <span>Statification Rate</span> 
  </div>
</div>
<h1 class='medical'>
  Our Medical Services
</h1>

<div class='find'>

</div>
<p class='find_doctor'>Find Doctor</p>
<p class='find_lorem'>Lorem ipsum dolor sit amet consectetur. Consequat egestas et odio nunc ac.</p>
<div class='support'>
</div>
<p class='support_doctor'>Healthy Support</p>
<p class='support_lorem'>Lorem ipsum dolor sit amet consectetur. Consequat egestas et odio nunc ac. Elementum faucibus velit quis et. Cras commodo morbi viverra diam diam diam turpis cursus.</p>

<div class='Quality'>
</div>
<p class='quality_doctor'>Quality Service</p>
<p class='quality_lorem'>Lorem ipsum dolor sit amet consectetur. Consequat egestas et odio nunc ac.</p>
<div class='support'></div>
<div class='perfect'>
</div>
<p class='perfect_doctor'>Perfect Solution</p>
<p class='perfect_lorem'>Lorem ipsum dolor sit amet consectetur. Consequat egestas et odio nunc ac. Elementum faucibus velit quis et. Cras commodo morbi viverra diam diam diam turpis cursus.</p>
<div class='support'></div>
      </div>

   <button className='text-white text-[12px]'>View all Service</button>
   <p class='eclipse_text'>Lorem ipsum sin doler to Healthcare</p>
 <div class='eclipse'>

 </div>

 <div class='audio_call'>
 <span className='call_orange'>Audio Call</span>
 </div>

 <div class='chat'>
   <span class='call_green'>Chat Call</span>
 </div>
 <div className='video_call '>
<span class='call_orange'>Video Call</span>
 </div>
 <div class='message'>
<span class="call_green">Message</span>
 </div>
 <button class='request text-white'>Request Patnership</button>
 <div class='footer'>
 
 </div>
 <h1 class='footer_title'>What Our Users Say About Us</h1>
 <p class='footer_para'>Let our patients give you their opinions and experience
about using our platform</p>
<div class='john_deo'>
</div>
<Image class=' deo_image' src="/john.jpg" alt="Image" width={100} height={100} />
<p class='deo_name'>JOHN DEO</p>
<p class='deo_test'> “ Lorem ipsum dolor sit amet consectetur. Id nisl egestas egestas at libero ac ullamcorper. Odio tincidunt pulvinar velit vel. Urna est quis viverra. “</p>
<div class='john'>
</div>
<Image class='john_image'src="/john.jpg" alt="Image" width={100} height={100} />
<p class='john_name'>JOHN DEO</p>
<p class='john_test'>
“ Lorem ipsum dolor sit amet consectetur. Id nisl egestas egestas at libero ac ullamcorper. Odio tincidunt pulvinar velit vel. Urna est quis viverra. “
</p>
<Image class='footer_logo' src="/logo.svg" alt="SVG Image" width={100} height={100} />
<p class='d-treat'>D-treat ltd.</p>
<p class='street'>KK 014</p>
<p class='address'>Kigali, Rwanda</p>

<div class='frame1  text-[0.8rem]'>
Explore <br></br>
  About Us<br></br>
  Services <br></br>
  Find a Doctor <br></br>
</div>
<div class='frame2 text-[0.8rem]'>
Contact us<br></br>
Terms and conditions <br></br>
Privacy policy<br></br>
License <br></br>
</div>
<p class='find_us_on'>Find Us on</p>
<div class='icon1'>
<AiFillYoutube class='vector1 mt-[0.4rem] ml-[0.4rem]'/>
</div>
<div class='icon2'>
<BsFacebook class='vector2 mt-[0.4rem] ml-[0.4rem]'/>
</div>
<div class ='icon3'>
<BsLinkedin class='vector3 mt-[0.4rem] ml-[0.4rem]'/>
</div>
<div class='icon4'>
<AiFillTwitterCircle class='vector4 mt-[0.4rem] ml-[0.4rem]'/>
</div>

<div class='copy_right'>2022 Copyright information here.</div>


    </div>
  
}