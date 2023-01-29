import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { userData } from '../apis/userData';
import { ipAddress } from '../apis/postDataToAff';
import { oAuthTokenStart } from '../apis/postDataToAff';
import { getQuote } from '../apis/postDataToAff';

const LandingPage = () => {

  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [tabacooUse, setTabacooUse] = useState(false);
  const [tabacooTime, setTabacooTime] = useState('');


  //  get userData.arcid once it loasds
  const [arcID, setArcID] = useState(userData.arcID);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    ipAddress();
    oAuthTokenStart();
    setLoading(false);
    setArcID(userData.arcID)
  }, [])


  





  return (
    <div className="relative overflow-hidden bg-input-purple ">
    <ToastContainer limit={1} position="bottom-left" theme="colored" />
  

    <div className="relative pt-6 pb-16 sm:pb-24">
      <main className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Get A Free Instant <br />
                  <span className="block font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                    Life Insurance{" "}
                  </span>
                  Quote online
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  No more waiting for quotes, getting on calls with pushy
                  sales agents! Just fill out this simple form and get a real
                  quote that you can buy online right now! It really is that
                  simple.
                </p>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div className="bg-dark-purple sm:mx-auto sm:w-full sm:max-w-lg sm:overflow-hidden sm:rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div className="p-2 bg-input-purple rounded-lg">
                    <p className="text-lg text-center text-gray-500">
                       
                        {/* Set A loading state */}
                        {loading ? <p>Loading...</p> : <span>{arcID}</span>}
                    </p>
                  </div>

                  <div className="mt-6">
                    <form action="#" method="POST" className="space-y-6">
                      <div>
                        <label htmlFor="dob" className="text-white">
                          Choose A Gender
                        </label>
                        <select
                          id="gender"
                          className="bg-light-purple border border-gray-300 text-black text-md rounded-lg focus:ring-button-purple focus:border-button-purple block w-full py-5 p-2.5"
                          required
                          value={gender}
                            onChange={(e) => {
                              setGender(e.target.value);
                              userData.gender = e.target.value;
                            }}
                        >
                          <option
                            value=""
                            disabled
                            defaultValue
                            className="text-gray-500"
                          >
                            --- Choose a gender --
                          </option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="dob" className="text-white">
                          Enter Your Date Of Birth
                        </label>
                        <input
                          type="text"
                          name="dob"
                          id="dob"
                          autoComplete="birthday"
                          placeholder="MM/DD/YYYY"
                          required
                          pattern="\d*"
                          className="block w-full text-md rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                            onChange={(e) => {
                              setDob(e.target.value);
                              userData.DOB = e.target.value;
                            }}
                        />
                      </div>

                      <div>
                        <label htmlFor="health" className="text-white">
                          What is your health status?
                        </label>
                        <select
                          id="health"
                          className="bg-light-purple border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-button-purple focus:border-button-purple block w-full py-5 p-2.5"
                          defaultValue="none"
                          required
                          value={healthStatus}
                          onChange={(e) => {
                            setHealthStatus(e.target.value);
                            userData.healthStatus = e.target.value
                          }}
                        >
                          <option value="" disabled>
                            Choose a health status
                          </option>
                          <option value="10">Excellent Health</option>
                          <option value="20">Above Average Health</option>
                          <option value="30">Average Health</option>
                          <option value="40">Below Average Health</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="tabacoo" className="text-white">
                          Do you actively use tabacoo?
                        </label>
                        <select
                          id="tabacoo"
                          className="bg-light-purple border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-button-purple focus:border-button-purple block w-full py-5 p-2.5"
                          defaultValue=""
                          required
                            onChange={(e) => {
                              setTabacooUse(e.target.value);
                              userData.tabacooUse = e.target.value

                              if (e.target.value === "True") {
                                setTabacooUse(true)
                              }
                              else {
                                setTabacooUse(false)
                              }
                            }}
                        >
                          <option value="" disabled>
                            Do you use tabacoo
                          </option>

                          <option value="True">Yes</option>
                          <option value="False">No</option>
                        </select>
                      </div>

                      {tabacooUse && (
                        <div>
                          <label htmlFor="tabacooTime" className="text-white">
                            When was the last time you used tabacoo?
                          </label>
                          <select
                              id="tabacooTime"
                              className="bg-light-purple border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-button-purple focus:border-button-purple block w-full py-5 p-2.5"
                              defaultValue="none"
                              required
                              onChange={(e) => {
                                setTabacooTime(e.target.value);
                                userData.tabacooTimeline = e.target.value
                              }}
                          >
                            <option value="" disabled>
                              choose tabacoo use timeline
                            </option>

                            <option value="1">Within the last year</option>
                            <option value="2">12-24 months ago</option>
                            <option value="3">25-36 months ago</option>
                          </select>
                        </div>
                      )}

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-6 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={getQuote(dob, gender, healthStatus, tabacooTime)}
                        >
                          Get My Free Instant Quote
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="border-t-2 border-gray-200 bg-dark-purple px-4 py-6 sm:px-10">
                  <p className="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      className="font-medium text-button-purple hover:underline"
                    >
                      Terms
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="font-medium text-button-purple hover:underline"
                    >
                      Data Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-button-purple hover:underline"
                    >
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default LandingPage