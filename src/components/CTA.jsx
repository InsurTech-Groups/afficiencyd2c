import React from 'react'

export default function CTA() {
  return (
    <div className="bg-input-purple lg:w-1/2 sm:w-full mx-auto rounded-xl">
      <div className="mx-auto max-w-2xl py-5 px-4 text-center sm:py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Want to talk to an agent?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Get a quote over the phone! We have agents standing by to answer your questions and get you a free quote for your home insurance today! 
        </p>
        <a
          href="tel:18559071606"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-button-purple px-5 py-3 text-base font-medium text-white  sm:w-auto"
        >
          	(855) 907-1606
        </a>
      </div>
    </div>
  )
}
