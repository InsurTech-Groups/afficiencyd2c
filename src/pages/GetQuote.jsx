import React from 'react';
import { userData } from '../apis/userData';

const GetQuote = () => {
  return (
    <div className="bg-dark-purple pt-5 lg:max-w-1/2 md:max-w-full sm:max-w-full">

<section>
  <div class="p-8 w-1/2 mx-auto rounded-xl bg-input-purple border-b-2 border-dark-purple">
    <div class="items-center justify-between text-center">
      <div class="w-full md:w-auto px-2 mb-6 md:mb-0">
        <div>
          <ul class="flex inline-flex mb-2 items-center">
            <li><p class="text-md text-gray-300 opacity-50 hover:opacity-80" >Insurtech Groups</p></li>
            <div class="w-1 h-1 mx-1 transform translate-y-1/2 bg-gray-300 bg-opacity-50 rounded-full"></div>
                  <li><p class="text-md text-gray-300 opacity-50 hover:opacity-80" >Life Insurance</p></li>
                  <div class="w-1 h-1 mx-1 transform translate-y-1/2 bg-gray-300 bg-opacity-50 rounded-full"></div>
                  <li><p class="text-md text-gray-300 opacity-50 hover:opacity-80" >{userData.arcID}</p></li>
          </ul>
          <h4 class="text-4xl pt-2 font-bold text-white leading-5">Your Estimated Price</h4>
        </div>
      </div>
     
    </div>
  </div>
      </section>
      
      <section class="py-3 w-1/2">
  <div class="container px-4 mx-auto">
    <div class="relative pt-16 pb-10 px-8 bg-input-purple rounded-2xl overflow-hidden">
     
      <div class="relative">
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-3">Ideal banner asset for your dashboard project</h3>
        <p class="font-medium text-blue-200 mb-36">Go global with our UI Resources and solutions</p>
        <a class="inline-block w-full px-6 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg" href="#">Get Started</a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default GetQuote