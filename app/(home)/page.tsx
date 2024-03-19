"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import feather from "feather-icons";
import Chat from "@/components/chat";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageCircle } from "lucide-react";

export default function Home() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <div className=" bg-gray-50    ">
        <Popover>
          <PopoverContent align="start" className="mr-4 z-[1000]  ">
            <Chat />
          </PopoverContent>
          <PopoverTrigger asChild className="fixed z-[1000] bottom-4 right-4">
            <Button
              variant="outline"
              className="rounded-full w-16 h-16 aspect-square bg-black hover:bg-gray-700"
            >
              <MessageCircle size={40} className="text-white" />
            </Button>
          </PopoverTrigger>
        </Popover>
      </div>

      <div className={`overflow-x-hidden  relative w-full`}>
        {/* <!--Navbar--> */}
        <nav className="bg-deepBlue">
          <div className="relative w-[1080px] mx-auto flex items-center justify-between">
            {/* <!-- logo --> */}
            <a href="/" className="cursor-pointer py-7 pr-7">
              <Image alt="sss" src="/images/logo.svg" width={125} height={30} />
            </a>

            <ul className="flex space-x-6">
              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Payments</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Banking</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Corporate Card</a>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Payroll</a>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Resources</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Support</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Pricing</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>
            </ul>

            <div className="flex space-x-6">
              <Image
                src="/images/india-flag.svg"
                alt="sss"
                width="28"
                height="20"
                className="hidden lg:block"
              />
              <button className="py-3 px-5 font-mullish text-white border-lightBlue border rounded-sm text-sm font-bold">
                Log in
              </button>
              <button className="py-3 px-4 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 hidden lg:flex">
                Sign Up
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[14px] h-[14px] ml-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* <!--Hero Section--> */}
        <section className="relative bg-deepBlue">
          <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto">
            {/* <!--left part--> */}
            <div className="space-y-8">
              <h1 className="font-mullish  font-bold text-[40px] leading-[1.2] text-white">
                Power your finance, grow your business
              </h1>
              <div className="w-6 h-1 bg-greenLight"></div>
              <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
                Accept payments from customers. Automate payouts to vendors &
                employees. Never run out of working capital.
              </p>
              <button className="bg-lightBlue text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
                Sign Up Now
              </button>
            </div>
            {/* <!--right part--> */}
            <Image
              src="/images/hero-illustration.jpg"
              alt=""
              width={380}
              height={380}
              className="w-full max-w-[680px]"
            />
          </div>

          {/* <!--shape part--> */}
          <div className="w-[103%] absolute left-0 right-0">
            <Image
              src="/images/hero-shape.svg"
              alt=""
              width={80}
              height={8}
              className="w-full object-fill"
            />
          </div>
        </section>

        {/* <!--feature section - 1--> */}
        <section className="relative mt-[190px] overflow-hidden">
          <Image
            src="/images/feature-section1-dottedrows.png"
            alt=""
            loading="lazy"
            width="233"
            height="167"
            className="absolute -top-[8rem] left-[10rem] inline-block -z-10"
          />

          <Image
            src="/images/feature-section1-dottedrows.png"
            alt=""
            loading="lazy"
            width="233"
            height="167"
            className="absolute top-[3rem] right-0 inline-block rotate-180"
          />

          <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            {/* <!--heading--> */}
            <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block">
              Accept Payments with Bank Buddy Payment Suite
            </h2>

            <h2 className="font-mullish text-center text-5xl leading-[1.2] font-extrabold md:hidden">
              Explore Bank Buddy Payment Suite
            </h2>

            <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

            {/* <!--content box--> */}
            <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
              {/* <!--left section--> */}
              <div className="flex flex-col justify-between w-full">
                <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
                  Supercharge your business with the all powerful
                  <span className="text-lightBlue"> Payment Gateway</span>
                </h3>
                <ul className="space-y-2">
                  <li className="font-mullish flex items-center space-x-2">
                    <i data-feather="check" className="text-greenLight"></i>
                    <span>100+ Payment Methods</span>
                  </li>
                  <li className="font-mullish flex items-center space-x-2">
                    <i data-feather="check" className="text-greenLight"></i>
                    <span> Industry Leading Success Rate </span>
                  </li>
                  <li className="font-mullish flex items-center space-x-2">
                    <i data-feather="check" className="text-greenLight"></i>
                    <span> Superior Checkout Experience </span>
                  </li>
                  <li className="font-mullish flex items-center space-x-2">
                    <i data-feather="check" className="text-greenLight"></i>
                    <span> Easy to Integrate </span>
                  </li>
                  <li className="font-mullish flex items-center space-x-2">
                    <i data-feather="check" className="text-greenLight"></i>
                    <span> Instant Settlements from day 1 </span>
                  </li>
                  <li className="font-mullish flex items-center space-x-2">
                    <i data-feather="check" className="text-greenLight"></i>
                    <span> In-depth Reporting and Insights </span>
                  </li>
                </ul>

                {/* <!-- for button and hyperlink--> */}
                <div className="flex flex-col-reverse md:flex-row items-center space-x-4">
                  <button className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200">
                    Sign Up Now
                  </button>
                  {/* <!--hyperlink--> */}
                  <div className="flex  md:items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              <Image
                src="/images/payment-suite.png"
                alt=""
                width={604}
                height={604}
                className="max-w-[600px] absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"
              />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {/* <!--Box1--> */}
              <div className="w-full min-h-[15rem] relative cursor-pointer">
                <Image
                  src="/images/payment-link-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                />

                {/* <!--box shape--> */}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                    fill="#fff"
                  ></path>
                </svg>

                {/* <!--box -content --> */}
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  {/* <!--text part--> */}
                  <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                      Payment Links
                    </h3>
                    <p className="font-mullish text-grayText mt-6">
                      Share payment link via an email, SMS, messenger, chatbot
                      etc. and get paid immediately
                    </p>
                  </div>

                  {/* <!--hyperlink know more--> */}
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              {/* <!--Box2--> */}
              <div className="w-full min-h-[15rem] relative cursor-pointer">
                <Image
                  src="/images/payment-link-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                />

                {/* <!--box shape--> */}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                    fill="#fff"
                  ></path>
                </svg>

                {/* <!--box -content --> */}
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  {/* <!--text part--> */}
                  <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                      Payment Links
                    </h3>
                    <p className="font-mullish text-grayText mt-6">
                      Share payment link via an email, SMS, messenger, chatbot
                      etc. and get paid immediately
                    </p>
                  </div>

                  {/* <!--hyperlink know more--> */}
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              {/* <!--Box3--> */}
              <div className="w-full min-h-[15rem] relative cursor-pointer">
                <Image
                  src="/images/payment-link-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                />

                {/* <!--box shape--> */}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                    fill="#fff"
                  ></path>
                </svg>

                {/* <!--box -content --> */}
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  {/* <!--text part--> */}
                  <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                      Payment Links
                    </h3>
                    <p className="font-mullish text-grayText mt-6">
                      Share payment link via an email, SMS, messenger, chatbot
                      etc. and get paid immediately
                    </p>
                  </div>

                  {/* <!--hyperlink know more--> */}
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              {/* <!--Box4--> */}
              <div className="w-full min-h-[15rem] relative cursor-pointer">
                <Image
                  src="/images/payment-link-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                />

                {/* <!--box shape--> */}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                    fill="#fff"
                  ></path>
                </svg>

                {/* <!--box -content --> */}
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  {/* <!--text part--> */}
                  <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                      Payment Links
                    </h3>
                    <p className="font-mullish text-grayText mt-6">
                      Share payment link via an email, SMS, messenger, chatbot
                      etc. and get paid immediately
                    </p>
                  </div>

                  {/* <!--hyperlink /know more--> */}
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              {/* <!--Box5--> */}
              <div className="w-full min-h-[15rem] relative cursor-pointer">
                <Image
                  src="/images/payment-link-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                />

                {/* <!--box shape--> */}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                    fill="#fff"
                  ></path>
                </svg>

                {/* <!--box -content --> */}
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  {/* <!--text part--> */}
                  <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                      Payment Links
                    </h3>
                    <p className="font-mullish text-grayText mt-6">
                      Share payment link via an email, SMS, messenger, chatbot
                      etc. and get paid immediately
                    </p>
                  </div>

                  {/* <!--hyperlink know more--> */}
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              {/* <!--Box6--> */}
              <div className="w-full min-h-[15rem] relative cursor-pointer">
                <Image
                  src="/images/payment-link-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                />

                {/* <!--box shape--> */}
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                    fill="#fff"
                  ></path>
                </svg>

                {/* <!--box -content --> */}
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  {/* <!--text part--> */}
                  <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                      Payment Links
                    </h3>
                    <p className="font-mullish text-grayText mt-6">
                      Share payment link via an email, SMS, messenger, chatbot
                      etc. and get paid immediately
                    </p>
                  </div>

                  {/* <!--hyperlink know more--> */}
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- feature section 2--> */}
        <section className="bg-[url(/images/feature-section-2BG.svg)] bg-no-repeat bg-cover pb-[500px] mt-14 pt-[20rem]">
          <div className="w-10/12 max-w-[1080px] mx-auto relative pt-4">
            <h2 className="font-mullish text-center text-2xl leading-[1.2] text-white font-bold">
              Explore Bank Buddy Business Banking
            </h2>
            <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

            {/* <!-- main feaeture box--> */}
            <div className="w-full min-h[440px] flex flex-col relative">
              <Image
                src="/images/x-flame-1.png"
                alt=""
                width={50}
                height={50}
                loading="lazy"
                className="absolute -top-[142px] -left-[140px] w-[200px]"
              />

              <Image
                src="/images/x-flame-2.png"
                alt=""
                width={50}
                height={50}
                loading="lazy"
                className="absolute top-[150px] -right-[180px] w-[200px]"
              />

              {/* <!--content box--> */}
              <div className="relative w-full bg-[#181c2e] p-10 py-12 border border-slate-700 z-20 rounded-md">
                {/* <!--left part--> */}
                <div className="flex flex-col justify-between items-start h-full w-full gap-12 z-20">
                  <h3 className="font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px]">
                    Manage your company’s finances with
                    <Image
                      src="/images/razorpayX.svg"
                      alt=""
                      width="168"
                      height="32"
                      className="inline"
                    />
                    <span className="text-greenLight">Business Banking</span>
                  </h3>

                  <ul className="space-y-2">
                    <li className="font-mullish text-white flex items-center space-x-2">
                      <i data-feather="check" className="text-greenLight"></i>
                      <span>Open a fully digital current account </span>
                    </li>
                    <li className="font-mullish text-white flex items-center space-x-2">
                      <i data-feather="check" className="text-greenLight"></i>
                      <span>Automate payables & compliment payments </span>
                    </li>
                    <li className="font-mullish text-white flex items-center space-x-2">
                      <i data-feather="check" className="text-greenLight"></i>
                      <span>
                        Simplify and track spends with Corporate cards{" "}
                      </span>
                    </li>
                    <li className="font-mullish text-white flex items-center space-x-2">
                      <i data-feather="check" className="text-greenLight"></i>
                      <span>View financial insights at a glance </span>
                    </li>
                  </ul>
                  <div className="flex flex-col-reverse md:flex-row w-full items-center space-x-4">
                    <button className="relative bg-lightBlue flex items-center place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 self-stretch md:w-fit">
                      Sign Up
                      <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
                        {/* <!--arrow--> */}
                        <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="w-[20px] h-[20px] -skew-x-[20deg]"
                        >
                          <path
                            fill="currentColor"
                            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    {/* <!--hyperlink wala--> */}
                    <div className="flex flex-row items-center cursor-pointer group">
                      <a
                        href="#"
                        className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                      >
                        Know More
                      </a>
                      <i
                        data-feather="chevron-right"
                        className="w-5 h-5 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                      ></i>
                    </div>
                  </div>
                </div>
                {/* <!--background image for content box--> */}
                <Image
                  src="/images/buisness-banking.png"
                  alt=""
                  width={600}
                  height={600}
                  className="max-w-[600px] absolute right-0 bottom-0 z-4 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"
                />
              </div>

              {/* <!--card box--> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14">
                {/* <!--box1--> */}
                <div className="w-full min-h-[15rem] relative cursor-pointer featureCard2">
                  {/* <!-- box icon --> */}
                  <Image
                    alt="sss"
                    width={48}
                    height={48}
                    src="images/current-icon.svg"
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
                  />
                  {/* <!-- box shape --> */}
                  <svg
                    viewBox="0 0 349.32501220703125 225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                    style={{ strokeOpacity: 0.8 }}
                  >
                    <path
                      d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                      fill="#181C2E"
                    ></path>
                  </svg>
                  {/* <!-- box content --> */}
                  <div className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox">
                    <div>
                      <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                        Current Account
                      </h3>
                      <p className="font-mullish text-grayText mt-6">
                        Current accounts for fast-growing businesses, supported
                        by the best-in-className technology
                      </p>
                    </div>
                    <div className="flex items-center cursor-pointer place-items-end">
                      <a
                        href="#"
                        className="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                      >
                        Know More
                      </a>
                      <i
                        data-feather="chevron-right"
                        className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                      ></i>
                    </div>
                  </div>
                </div>
                {/* <!--box2--> */}
                <div className="w-full min-h-[15rem] relative cursor-pointer featureCard2">
                  {/* <!-- box icon --> */}
                  <Image
                    src="images/current-icon.svg"
                    alt="sss"
                    width={48}
                    height={48}
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
                  />
                  {/* <!-- box shape --> */}
                  <svg
                    viewBox="0 0 349.32501220703125 225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                    style={{ strokeOpacity: 0.8 }}
                  >
                    <path
                      d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                      fill="#181C2E"
                    ></path>
                  </svg>
                  {/* <!-- box content --> */}
                  <div className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox">
                    <div>
                      <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                        Current Account
                      </h3>
                      <p className="font-mullish text-grayText mt-6">
                        Current accounts for fast-growing businesses, supported
                        by the best-in-className technology
                      </p>
                    </div>
                    <div className="flex items-center cursor-pointer place-items-end">
                      <a
                        href="#"
                        className="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                      >
                        Know More
                      </a>
                      <i
                        data-feather="chevron-right"
                        className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                      ></i>
                    </div>
                  </div>
                </div>
                {/* <!--box3--> */}
                <div className="w-full min-h-[15rem] relative cursor-pointer featureCard2">
                  {/* <!-- box icon --> */}
                  <Image
                    alt="ssdsd"
                    width={48}
                    height={48}
                    src="images/current-icon.svg"
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
                  />
                  {/* <!-- box shape --> */}
                  <svg
                    viewBox="0 0 349.32501220703125 225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                    style={{ strokeOpacity: 0.8 }}
                  >
                    <path
                      d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                      fill="#181C2E"
                    ></path>
                  </svg>
                  {/* <!-- box content --> */}
                  <div className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox">
                    <div>
                      <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                        Current Account
                      </h3>
                      <p className="font-mullish text-grayText mt-6">
                        Current accounts for fast-growing businesses, supported
                        by the best-in-className technology
                      </p>
                    </div>
                    <div className="flex items-center cursor-pointer place-items-end">
                      <a
                        href="#"
                        className="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                      >
                        Know More
                      </a>
                      <i
                        data-feather="chevron-right"
                        className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--demo-box--> */}
              <div className="w-full items-center justify-evenly border border-slate-700 mb-24 gap-y-6 relative rounded-md p-8 hidden md:flex md:flex-col lg:flex-row lg:flex">
                <p className="font-mullish text-white text-xl">
                  Check out the live demo to learn how Bank Buddy works.
                  <span className="font-bold"> No sign-up required!</span>
                </p>

                <button className="relative bg-lightBlue flex items-center justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
                  Check out the demo
                  <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
                    {/* <!--arrow--> */}
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="w-[20px] h-[20px] -skew-x-[20deg]"
                    >
                      <path
                        fill="currentColor"
                        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <!--new feeatures --> */}
        <section className="bg-white relative">
          <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <Image
              src="/images/feature-section1-dottedrows.png"
              alt=""
              width={233}
              height={50}
              className="absolute w-[233px] left-[300px] -top-[6rem] z-10"
            />
            <Image
              src="/images/feature-section1-dottedrows.png"
              alt=""
              width={233}
              height={50}
              className="absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10"
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
              {/* <!--item 1--> */}
              <div className="relative flex items-center z-0">
                <h2 className="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">
                  New in the{" "}
                  <span className="text-lightBlue500"> Bank Buddy </span>
                  <br />
                  Product Suite
                </h2>
              </div>
              {/* <!--card 1--> */}
              <div className="p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)] bg-white">
                <Image
                  src="/images/razorpayXicon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="font-mullish text-lg font-bold pt-4">
                  Corporate Cards
                </h3>
                <p className="font-mullish py-3 text-grayText leading-normal">
                  Simplify your recurring, international and team expenses with
                  savings on every spend. Save upto 10 lacs every month.
                </p>
                <div className="flex flex-row items-center cursor-pointer group">
                  <a
                    href=""
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
              {/* <!--card 2--> */}
              <div className="p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)] bg-white">
                <Image
                  src="/images/razorpayXicon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="font-mullish text-lg font-bold pt-4">
                  Corporate Cards
                </h3>
                <p className="font-mullish py-3 text-grayText leading-normal">
                  Simplify your recurring, international and team expenses with
                  savings on every spend. Save upto 10 lacs every month.
                </p>
                <div className="flex flex-row items-center cursor-pointer group">
                  <a
                    href=""
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
              {/* <!--card 3--> */}
              <div className="p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)] bg-white">
                <Image
                  src="/images/razorpayXicon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="font-mullish text-lg font-bold pt-4">
                  Corporate Cards
                </h3>
                <p className="font-mullish py-3 text-grayText leading-normal">
                  Simplify your recurring, international and team expenses with
                  savings on every spend. Save upto 10 lacs every month.
                </p>
                <div className="flex flex-row items-center cursor-pointer group">
                  <a
                    href=""
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
              {/* <!--card 4--> */}
              <div className="p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)] bg-white">
                <Image
                  src="/images/razorpayXicon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="font-mullish text-lg font-bold pt-4">
                  Corporate Cards
                </h3>
                <p className="font-mullish py-3 text-grayText leading-normal">
                  Simplify your recurring, international and team expenses with
                  savings on every spend. Save upto 10 lacs every month.
                </p>
                <div className="flex flex-row items-center cursor-pointer group">
                  <a
                    href=""
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
              {/* <!--card 5--> */}
              <div className="p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)] bg-white">
                <Image
                  src="/images/razorpayXicon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="font-mullish text-lg font-bold pt-4">
                  Corporate Cards
                </h3>
                <p className="font-mullish py-3 text-grayText leading-normal">
                  Simplify your recurring, international and team expenses with
                  savings on every spend. Save upto 10 lacs every month.
                </p>
                <div className="flex flex-row items-center cursor-pointer group">
                  <a
                    href=""
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--core features--> */}
        <section className="w-full bg-[url(/images/core-features-sectionBg.svg)] bg-no-repeat bg-cover bg-center mt-14 relative corefeaturesection">
          <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <h2 className="font-mullish font-bold text-2xl text-center text-white">
              Features
            </h2>
            <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
            <p className="font-mullish text-center max-w-[450px] text-white mx-auto">
              Empower your business with all the right tools to accept online
              payments and provide the best customer experience
            </p>

            {/* <!--grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8">
              {/* <!--card1--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card2--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card3--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card4--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card5--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card6--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card7--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              {/* <!--card8--> */}
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/images/instant-activation-icon.svg"
                  alt=""
                />
                <h3 className="font-mullish text-white text-lg font-bold my-4">
                  Instant Activation
                </h3>
                <p className="font-mullish text-white opacity-80">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--join razorpay section--> */}

        <section className="bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]">
          <div className="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row">
            {/* <!--left part --> */}
            <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16">
              <h2 className="font-mullish font-bold text-2xl text-deepBlueHead">
                Join the 50,00,000+ businesses using Bank Buddy
              </h2>
              <div className="w-6 h-1 bg-greenLight my-4 mb-10"></div>
              <p className="font-mullish opacity-80">
                We make it easier for you to focus on building great products
                while we work on simplifying your payments. Become one of us by
                joining thousands of our happy users and simplify the online
                payment experience for your customers.
              </p>
              <p className="font-mullish mt-6 opacity-80">
                Focus on your business while we handle the complexities of
                payments for you.
              </p>
            </div>

            {/* <!--right part--> */}
            <div className="h-[500px] w-[500px] relative overflow-y-hidden mx-auto">
              <div
                style={{
                  background: "linear-gradient(180deg, #f4f8ff, #fff0)",
                }}
                className="absolute w-full h-[150px] top-0 z-50"
              ></div>

              <Image
                fill
                src="/images/comanies.png"
                alt=""
                className="absolute h-auto object-cover companiesList"
              />

              <div
                style={{
                  background: "linear-gradient(0deg, #f4f8ff, #fff0)",
                }}
                className="absolute w-full h-[150px] bottom-0 z-50"
              ></div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonail Section --> */}
        <section className="lg:block relative hidden">
          <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">
            <Image
              width={200}
              height={200}
              src="/images/feature-section1-dottedrows.png"
              alt=""
              className="absolute w-[200px] top-[8rem] left-[2rem] -z-10"
            />

            <h2 className="font-mullish font-extrabold text-2xl text-deepBlueHead text-center">
              An Experience <br />
              People Love to Talk About
            </h2>
            <div className="w-6 h-1 bg-greenLight mx-auto my-4"></div>

            {/* <!--left button --> */}
            <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center">
              <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
                <i
                  data-feather="chevron-right"
                  className="stroke-[5px] w-6 h-6 text-gray-400 rotate-180"
                ></i>
              </div>
            </button>

            {/* <!--right button --> */}
            <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center">
              <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
                <i
                  data-feather="chevron-right"
                  className="stroke-[5px] w-6 h-6 text-gray-400"
                ></i>
              </div>
            </button>

            {/* <!-- main content --> */}
            <div className="flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-20 space-x-[10rem]">
              {/* <!--left image --> */}
              <Image
                src="/images/testimonial.jpg"
                alt=""
                height="320"
                width="320"
                className="rounded-xl"
              />

              {/* <!-- riught part--> */}
              <div className="max-w-[400px] flex flex-col">
                <Image
                  src="/images/quotes.svg"
                  alt=""
                  width="35"
                  height="40"
                  className="-mb-2 xl:order-1"
                />
                <p className="font-mullish text-3xl font-extralight xl:order-1">
                  Readymade Closed Wallet Solution For Quick Refunds
                </p>
                <a
                  href="#"
                  className="text-grayText italic underline xl:order-1"
                >
                  Learn More
                </a>
                <p className="font-mullish font-extrabold text-2xl -order-1 xl:order-1">
                  Lorem Ipsum
                </p>
                <p className="font-mullish font-medium xl:order-1">
                  CEO, XYZ Engineering Company
                </p>
                <Image
                  src="/images/fake-company-logo.png"
                  alt=""
                  width="80"
                  height="40"
                  className="xl:order-1"
                />
              </div>
            </div>

            {/* <!-- 6 dot wala div--> */}
            <div className="w-full flex flex-row mx-auto space-x-2 justify-center">
              {/* <!--dot 1--> */}
              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-lightBlue300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* <!--CTA--> */}
        <section className="bg-[url(/images/CTABg.svg)] w-full h-full bg-no-repeat bg-cover relative mb-10 ctaSection min-h-[510px]">
          {/* <!--main content box--> */}
          <div className="w-11/12 max-w-[1080px] relative flex flex-row items-center mx-auto justify-between space-x-20 pt-16">
            {/* <!--left part--> */}
            <div className="flex flex-col gap-5 mt-12 max-w-[600px]">
              <h2 className="font-mullish font-bold text-2xl text-white">
                Supercharge your business with Bank Buddy
              </h2>
              <div className="w-6 h-1 bg-greenLight"></div>
              <p className="font-mullish text-white">
                Sign up now to experience the future of payments and offer{" "}
                <br />
                your customers the best checkout experience.
              </p>

              <ul className="flex flex-col md:flex-row flex-wrap gap-x-11 text-white gap-y-3">
                <li className="font-mullish text-white flex flex-row">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>Quick Onboarding </span>
                </li>
                <li className="font-mullish text-white flex flex-row">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>Access to entire product suite </span>
                </li>
                <li className="font-mullish text-white flex flex-row">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>API access </span>
                </li>
                <li className="font-mullish text-white flex flex-row">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>24x7 support </span>
                </li>
              </ul>

              <button className="min-w-[32px] font-mullish text-sm font-bold bg-white text-lightBlue300 border flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200 py-3 px-4 place-self-start">
                Sign Up
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[14px] h-[14px] ml-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </button>
            </div>

            {/* <!--right side wali image--> */}
            <Image
              src="/images/ctaImg.svg"
              alt=""
              width="240"
              height="282"
              className="mt-16 pt-3 hidden lg:block"
            />
          </div>
        </section>
      </div>

      {/* footer */}
      <footer
        style={{ background: "linear-gradient(to right, #eef9fe, #edf7ff)" }}
        className="-mt-[400px] md:-mt-[300px]"
      >
        <div className="w-10/12 pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between">
          {/* <!-- column - 1 --> */}
          <div className="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
            <Image
              src="/images/logo-dark.svg"
              loading="lazy"
              alt="footerimage"
              width="120"
              height="24"
            />
            <p className="text-sm text-grayText my-3 font-mullish">
              Bank Buddy is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </p>
            <p className="text-sm text-grayText my-3 font-mullish">
              Bank Buddy supercharges your business banking experience, bringing
              effectiveness, efficiency, and excellence to all financial
              processes. With Bank Buddy, businesses can get access to
              fully-functional current accounts, supercharge their payouts and
              automate payroll compliance.
            </p>
            <p className="text-sm text-grayText my-3 font-mullish">
              Manage your marketplace, automate bank transfers, collect
              recurring payments, share invoices with customers and avail
              working capital loans - all from a single platform. Fast forward
              your business with Bank Buddy.
            </p>
            <p className="text-[0.625rem] text-grayText my-3 font-mullish">
              Disclaimer: The Bank Buddy powered Current Account and VISA
              corporate credit card are provided by RBI licensed banks. Your
              Bank Buddy powered account is provided by our partner bank, in
              accordance with RBI regulations. Bank Buddy itself is not a bank
              and doesn&apos;t hold or claim to hold a banking license.
            </p>
            <p className="font-mullish uppercase font-bold text-gray2">
              Subscribe to our newsletter
            </p>
            <form className="relative bg-white w-[260px] mt-2 mb-4">
              <input
                placeholder="Your email address"
                className="pr-16 font-mullish border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"
              />
              <button className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
                Subscribe
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[14px] h-[14px] ml-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </button>
            </form>
            <div className="flex items-start space-x-4">
              <Image
                alt="footerimage"
                src="/images/footer-certificate-1.png"
                loading="lazy"
                width="92"
                height="40"
                className="cursor-pointer"
              />
              <Image
                alt="footerimage"
                src="/images/footer-certificate-2.jpg"
                loading="lazy"
                width="122"
                height="80"
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* <!-- column - 2 --> */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between">
            {/* <!-- sub column - 1 --> */}
            <div className="space-y-3">
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  BANKING PLUS
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Bank Buddy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Current Accounts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Payouts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Payout Links
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Corporate Credit Card
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      View Live Demo
                      <span className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  LENDING
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Bank Buddy Capital
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Instant Settlements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Working Capital Loans
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Marketplace Instant Settlements
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  RISK & FRAUD
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Thirdwatch
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      PrePay CoD
                      <span className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  BECOME A PARTNER
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Refer and Earn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Onboarding APIs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  MORE
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Route
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Invoices
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Freelancer Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      International
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Flash Checkout
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      UPI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      ePOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Checkout Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Bank Buddy Payroll
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- sub column - 2 --> */}
            <div className="space-y-3">
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  ACCEPT PAYMENTS
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Payment Gateway
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Payment Pages
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Payment Links
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      QR Codes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Subscriptions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Smart Collect
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  DEVELOPERS
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      API Reference
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  RESOURCES
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Chargeback Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Settlement Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  SOLUTIONS
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      E-commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Saas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      BFSI
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  FREE TOOLS
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      GST Calculator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Online TDS Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      GST Number Search
                      <span className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- sub column - 3 --> */}
            <div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                  COMPANY
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Careers
                      <span className="text-white font-mullish bg-green-500 rounded-sm text-xs font-bold p-1">
                        We&apos;re hiring!
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Grievance Redressal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Responsible Disclosure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      White Papers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Corporate Information
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-3">
                  HELP & SUPPORT
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                    >
                      Knowledge base
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                  FIND US ONLINE
                </p>
                <ul className="flex space-x-4 items-center mt-4">
                  <li className="cursor-pointer">
                    <a>
                      <Image
                        alt="footerimage"
                        src="/images/facebook-icon.svg"
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a>
                      <Image
                        alt="footerimage"
                        src="/images/twitter-icon.svg"
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a>
                      <Image
                        alt="footerimage"
                        src="/images/instagram-icon.svg"
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a>
                      <Image
                        alt="footerimage"
                        src="/images/github-icon.svg"
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a>
                      <Image
                        alt="footerimage"
                        src="/images/linkedin-icon.svg"
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                  REGD. OFFICE ADDRESS
                </p>
                <p className="font-mullish text-sm mt-4 whitespace-nowrap">
                  Bank Buddy Software Private Limited, <br />
                  1st Floor, SJR Cyber,
                  <br />
                  22 Laskar Hosur Road, Adugodi, <br />
                  Bengaluru, 560030,
                  <br />
                  Karnataka, India <br />
                  CIN: U72200KA2013PTC097389
                </p>
                <div className="font-mullish mt-6">
                  <p className="text-sm">© Bank Buddy 2022</p>
                  <p className="text-sm">All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
