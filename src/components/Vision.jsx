import vision from "../assets/images/Vision.png";
import visionMobile from "../assets/images/vision-mobile.png";
import visionLarge from "../assets/images/vision-large.png";
export default function Vision() {
  return (
    <section className="w-full md:h-[900px] relative z-10 sm:px-5 md:px-0 md:pr-5 pb-[125px] md:pb-0">
      <div className="max-w-[1260px] w-full mx-auto h-full ">
        <img
          src={vision}
          alt="vision"
          className="w-[500px] lg:w-auto h-auto object-contain static hidden md:block 2xl:hidden  md:absolute top-1/2 -translate-y-1/2 left-0 z-20 "
        />
        <img
          src={visionMobile}
          alt="vision"
          className="w-full h-auto object-contain mx-auto flex justify-center md:hidden"
        />
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-[644px] hidden md:block w-full">
            <img
              src={visionLarge}
              alt="vision"
              className="w-full h-auto object-contain hidden 2xl:block"
            />
          </div>
          <div className="max-w-[514px] text-center md:text-left px-5 sm:px-0 w-full z-40 relative">
            <div className=" md:max-w-max text-left flex flex-col items-center mx-auto mb-9 md:mb-0 sm:mx-0">
              <h1 className="uppercase text-3xl font-semibold leading-normal text-center md:text-left mb-5">
                VISION
              </h1>
              <span className="w-14 h-px bg-white block"> </span>
            </div>
            <p className="text-xl font-normal leading-[29px] font-secondary mt-8">
              We take the best of DeFi and combine it with RWA exposure through
              synthetic assets with an on-chain active market to ensure deep
              liquidity. You can benefit from exposure to the asset without
              having to own it with fu ownership and transparency{" "}
            </p>

            <div className="p-px w-max mt-14 mx-auto md:mx-0">
              <button className="btn-primary ">
                Join Discord
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89648 13.9214C8.61621 10.2017 10.7017 8.11621 14.4214 4.39648M14.4214 4.39648V13.5404M14.4214 4.39648H5.27748"
                    stroke="white"
                    strokeWidth="1.09903"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="w-1 h-1 border-white border-r border-t absolute -right-px -top-px"></div>
                <div className="w-1 h-1 border-white border-l border-t absolute -left-px -top-px"></div>
                <div className="w-1 h-1 border-white border-b border-l absolute -left-px -bottom-px"></div>
                <div className="w-1 h-1 border-white border-b border-r absolute -right-px -bottom-px"></div>
              </button>
            </div>
          </div>
        </div>
        <span className="w-[301px] h-[301px] bg-accent-blue block rounded-full absolute bottom-24 right-0 z-0 blur-[300px]"></span>
        <span className="w-[212px] h-[212px] bg-accent-blue rounded-full block absolute top-0 -left-24 blur-[200px] z-0 "></span>
      </div>
    </section>
  );
}
