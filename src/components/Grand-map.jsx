import globe from "../assets/images/globe.png";
import greenBox from "../assets/images/green-box.png";
import roadBgOne from "../assets/images/road-bg-1.png";
import roadBgOneMobile from "../assets/images/grand-map-mobile.png";
import roadBgTwo from "../assets/images/road-bg-2.png";

export default function GrandMap() {
  return (
    <section>
      <div className="w-full bg-accent-blue/5 px-5 pb-[176px] pt-20 md:pt-[134px] z-20 relative">
        <div className="max-w-[1300px] w-full mx-auto">
          <div className="text-center max-w-max mx-auto mb-20 md:mb-0 sm:mx-0">
            <h1 className="uppercase text-3xl  sm:text-6xl font-semibold leading-normal mb-5 sm:mb-6">
              GRAND MAP
            </h1>
            <span className="w-14 h-px bg-white block"> </span>
          </div>
          <div className="max-w-[600px] lg:max-w-[777px] w-full mx-auto ">
            <div className="max-w-[240px] sm:max-w-[357px] lg:max-w-[445px] w-full sm:ml-auto pb-20 sm:pb-32">
              <div className="grid grid-cols-[70px,1fr] sm:grid-cols-[115px,1fr] items-center gap-5 h-full">
                <div className="relative flex justify-center">
                  <img
                    src={globe}
                    alt="globe"
                    className="w-12 sm:w-[84px] aspect-square object-contain"
                  />
                  <svg
                    className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 h-[75px] sm:h-[124px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="124"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      fillRule="evenodd"
                      d="M.457.738v5.104a2.967 2.967 0 1 0 5.933 0V.738H.457Zm0 15.31v10.208a2.967 2.967 0 0 0 5.933 0V16.049a2.967 2.967 0 0 0-5.933 0Zm0 20.415V46.67a2.967 2.967 0 0 0 5.933 0V36.463a2.967 2.967 0 0 0-5.933 0Zm0 20.414v10.208a2.967 2.967 0 0 0 5.933 0V56.877a2.967 2.967 0 1 0-5.933 0Zm0 20.415v10.207a2.967 2.967 0 0 0 5.933 0V77.292a2.967 2.967 0 1 0-5.933 0Zm0 20.414v10.207a2.967 2.967 0 1 0 5.933 0V97.706a2.967 2.967 0 0 0-5.933 0Zm0 20.414v5.104H6.39v-5.104a2.966 2.966 0 0 0-5.933 0Z"
                      clipRule="evenodd"
                      opacity=".2"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="6.766"
                        x2="-6.596"
                        y1="9.7"
                        y2="10.629"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[92px] sm:h-[93px]"
                    viewBox="0 0 92 93"
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="93"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M91.414 46.537c0 25.222-20.447 45.67-45.67 45.67-25.223 0-45.67-20.448-45.67-45.67 0-25.223 20.447-45.67 45.67-45.67 25.223 0 45.67 20.447 45.67 45.67Zm-81.829 0c0 19.97 16.19 36.158 36.159 36.158 19.97 0 36.158-16.189 36.158-36.158 0-19.97-16.188-36.159-36.158-36.159-19.97 0-36.159 16.189-36.159 36.159Z"
                      opacity=".29"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="84.73"
                        x2="-12.249"
                        y1="-4.92"
                        y2="62.718"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-[115px] sm:h-[115px]"
                    viewBox="0 0 115 115"
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="115"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M114.64 57.217c0 31.6-25.616 57.216-57.216 57.216S.207 88.817.207 57.217 25.824 0 57.424 0c31.6 0 57.216 25.617 57.216 57.217Zm-102.517 0c0 25.019 20.282 45.3 45.3 45.3 25.02 0 45.301-20.281 45.301-45.3 0-25.02-20.281-45.301-45.3-45.301-25.02 0-45.301 20.282-45.301 45.3Z"
                      opacity=".07"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="106.267"
                        x2="-15.232"
                        y1="-7.249"
                        y2="77.489"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">
                  <h2 className="text-sm sm:text-lg font-bold uppercase leading-normal">
                    OCTOBER 2023
                  </h2>
                  <p className="text-xs sm:text-[15.25px] leading-5 tracking-[0.305px] font-normal mt-2 sm:mt-4 font-secondary">
                    Website release Comminty launch TGE
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[240px] sm:max-w-[357px] lg:max-w-[445px] w-full pb-20 sm:pb-32">
              <div className="grid grid-cols-[70px,1fr] sm:grid-cols-[1fr,115px] items-center gap-5 h-full">
                <div className="order-last sm:order-first ">
                  <h2 className="text-sm sm:text-lg font-bold uppercase leading-normal">
                    November 2023
                  </h2>
                  <p className="text-xs sm:text-[15.25px] leading-5 tracking-[0.305px] font-normal mt-2 sm:mt-4 font-secondary">
                    Beta launch Incentivized leaderboard
                  </p>
                </div>
                <div className="relative flex justify-center order-first sm:order-last  ">
                  <img
                    src={globe}
                    alt="globe"
                    className="w-12 sm:w-[84px] aspect-square object-contain"
                  />
                  <svg
                    className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 h-[75px] sm:h-[124px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="124"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      fillRule="evenodd"
                      d="M.457.738v5.104a2.967 2.967 0 1 0 5.933 0V.738H.457Zm0 15.31v10.208a2.967 2.967 0 0 0 5.933 0V16.049a2.967 2.967 0 0 0-5.933 0Zm0 20.415V46.67a2.967 2.967 0 0 0 5.933 0V36.463a2.967 2.967 0 0 0-5.933 0Zm0 20.414v10.208a2.967 2.967 0 0 0 5.933 0V56.877a2.967 2.967 0 1 0-5.933 0Zm0 20.415v10.207a2.967 2.967 0 0 0 5.933 0V77.292a2.967 2.967 0 1 0-5.933 0Zm0 20.414v10.207a2.967 2.967 0 1 0 5.933 0V97.706a2.967 2.967 0 0 0-5.933 0Zm0 20.414v5.104H6.39v-5.104a2.966 2.966 0 0 0-5.933 0Z"
                      clipRule="evenodd"
                      opacity=".2"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="6.766"
                        x2="-6.596"
                        y1="9.7"
                        y2="10.629"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[92px] sm:h-[93px]"
                    viewBox="0 0 92 93"
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="93"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M91.414 46.537c0 25.222-20.447 45.67-45.67 45.67-25.223 0-45.67-20.448-45.67-45.67 0-25.223 20.447-45.67 45.67-45.67 25.223 0 45.67 20.447 45.67 45.67Zm-81.829 0c0 19.97 16.19 36.158 36.159 36.158 19.97 0 36.158-16.189 36.158-36.158 0-19.97-16.188-36.159-36.158-36.159-19.97 0-36.159 16.189-36.159 36.159Z"
                      opacity=".29"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="84.73"
                        x2="-12.249"
                        y1="-4.92"
                        y2="62.718"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-[115px] sm:h-[115px]"
                    viewBox="0 0 115 115"
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="115"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M114.64 57.217c0 31.6-25.616 57.216-57.216 57.216S.207 88.817.207 57.217 25.824 0 57.424 0c31.6 0 57.216 25.617 57.216 57.217Zm-102.517 0c0 25.019 20.282 45.3 45.3 45.3 25.02 0 45.301-20.281 45.301-45.3 0-25.02-20.281-45.301-45.3-45.301-25.02 0-45.301 20.282-45.301 45.3Z"
                      opacity=".07"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="106.267"
                        x2="-15.232"
                        y1="-7.249"
                        y2="77.489"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="max-w-[240px] sm:max-w-[357px] lg:max-w-[445px] w-full sm:ml-auto pb-20 sm:pb-32">
              <div className="grid grid-cols-[70px,1fr] sm:grid-cols-[115px,1fr] items-center gap-5 h-full">
                <div className="relative flex justify-center">
                  <img
                    src={globe}
                    alt="globe"
                    className="w-12 sm:w-[84px] aspect-square object-contain"
                  />
                  <svg
                    className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 h-[75px] sm:h-[124px] "
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="124"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      fillRule="evenodd"
                      d="M.457.738v5.104a2.967 2.967 0 1 0 5.933 0V.738H.457Zm0 15.31v10.208a2.967 2.967 0 0 0 5.933 0V16.049a2.967 2.967 0 0 0-5.933 0Zm0 20.415V46.67a2.967 2.967 0 0 0 5.933 0V36.463a2.967 2.967 0 0 0-5.933 0Zm0 20.414v10.208a2.967 2.967 0 0 0 5.933 0V56.877a2.967 2.967 0 1 0-5.933 0Zm0 20.415v10.207a2.967 2.967 0 0 0 5.933 0V77.292a2.967 2.967 0 1 0-5.933 0Zm0 20.414v10.207a2.967 2.967 0 1 0 5.933 0V97.706a2.967 2.967 0 0 0-5.933 0Zm0 20.414v5.104H6.39v-5.104a2.966 2.966 0 0 0-5.933 0Z"
                      clipRule="evenodd"
                      opacity=".2"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="6.766"
                        x2="-6.596"
                        y1="9.7"
                        y2="10.629"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[60px] h-[60px] sm:w-[92px] sm:h-[93px]"
                    viewBox="0 0 92 93"
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="93"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M91.414 46.537c0 25.222-20.447 45.67-45.67 45.67-25.223 0-45.67-20.448-45.67-45.67 0-25.223 20.447-45.67 45.67-45.67 25.223 0 45.67 20.447 45.67 45.67Zm-81.829 0c0 19.97 16.19 36.158 36.159 36.158 19.97 0 36.158-16.189 36.158-36.158 0-19.97-16.188-36.159-36.158-36.159-19.97 0-36.159 16.189-36.159 36.159Z"
                      opacity=".29"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="84.73"
                        x2="-12.249"
                        y1="-4.92"
                        y2="62.718"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-[115px] sm:h-[115px]"
                    viewBox="0 0 115 115"
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="115"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M114.64 57.217c0 31.6-25.616 57.216-57.216 57.216S.207 88.817.207 57.217 25.824 0 57.424 0c31.6 0 57.216 25.617 57.216 57.217Zm-102.517 0c0 25.019 20.282 45.3 45.3 45.3 25.02 0 45.301-20.281 45.301-45.3 0-25.02-20.281-45.301-45.3-45.301-25.02 0-45.301 20.282-45.301 45.3Z"
                      opacity=".07"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="106.267"
                        x2="-15.232"
                        y1="-7.249"
                        y2="77.489"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5581F7" />
                        <stop offset="1" stopColor="#071EA9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">
                  <h2 className="text-sm sm:text-lg font-bold uppercase leading-normal">
                    Q4 2023
                  </h2>
                  <p className="text-xs sm:text-[15.25px] leading-5 tracking-[0.305px] font-normal mt-2 sm:mt-4 font-secondary">
                    xGB staking gAssest staking
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:max-w-[260px] w-full sm:mx-auto  ">
              <div className="grid grid-cols-[70px,1fr] gap-5 sm:block items-center h-full">
                <div className="relative w-max flex mx-auto sm:justify-center">
                  <img
                    src={greenBox}
                    alt="globe"
                    className="w-12 sm:w-[84px] aspect-square object-contain"
                  />
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[92px] sm:h-[93px]"
                    viewBox="0 0 92 93"
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="92"
                    fill="none"
                  >
                    <path
                      fill="url(#ab)"
                      d="M91.414 46.123c0 25.223-20.447 45.67-45.67 45.67-25.223 0-45.67-20.448-45.67-45.67C.074 20.9 20.521.453 45.744.453c25.223 0 45.67 20.447 45.67 45.67Zm-81.829 0c0 19.97 16.19 36.158 36.159 36.158 19.97 0 36.158-16.188 36.158-36.158 0-19.97-16.188-36.159-36.158-36.159-19.97 0-36.159 16.189-36.159 36.159Z"
                    />
                    <defs>
                      <linearGradient
                        id="ab"
                        x1="84.73"
                        x2="-12.249"
                        y1="-5.333"
                        y2="62.304"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#85CD9A" />
                        <stop offset="1" stopColor="#43CE21" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-[115px] sm:h-[115px]"
                    viewBox="0 0 115 115"
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="116"
                    fill="none"
                  >
                    <path
                      fill="url(#ac)"
                      d="M114.64 57.803c0 31.6-25.616 57.216-57.216 57.216S.207 89.402.207 57.803C.207 26.203 25.824.586 57.424.586c31.6 0 57.216 25.617 57.216 57.217Zm-102.517 0c0 25.019 20.282 45.3 45.3 45.3 25.02 0 45.301-20.281 45.301-45.3 0-25.02-20.281-45.301-45.3-45.301-25.02 0-45.301 20.282-45.301 45.3Z"
                      opacity=".07"
                    />
                    <defs>
                      <linearGradient
                        id="ac"
                        x1="106.267"
                        x2="-15.232"
                        y1="-6.664"
                        y2="78.075"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#85CD9A" />
                        <stop offset="1" stopColor="#43CE21" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="sm:mt-7 sm:text-center">
                  <h2 className="text-sm sm:text-lg font-bold uppercase leading-normal">
                    Q1 2024
                  </h2>
                  <p className="text-xs sm:text-[15.25px] leading-5 tracking-[0.305px] font-normal mt-2 sm:mt-4 font-secondary">
                    Public release Marketing campaign
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={roadBgOne}
          alt="shape"
          className="w-[200px] hidden sm:block sm:w-auto h-auto object-contain absolute left-0 bottom-[70%] sm:bottom-20 pointer-events-none"
        />
        <img
          src={roadBgOneMobile}
          alt="shape"
          className="w-[151px] sm:hidden h-auto object-contain absolute left-0 top-0 pointer-events-none"
        />
        <img
          src={roadBgTwo}
          alt="shape"
          className="w-[200px] sm:w-auto h-auto object-contain absolute right-0 bottom-44 sm:bottom-80 pointer-events-none"
        />
      </div>
    </section>
  );
}
