import heroBackground from "../assets/images/hero-background.png";
import heroBackgroundMobile from "../assets/images/hero-background-mobile.png";
import networkGraphic from "../assets/images/network-graphic.svg";
import logo from "../assets/images/grand-base-logo.png";

export default function Hero() {
  return (
    <section className="relative z-0 w-full overflow-hidden pt-[268px] sm:pt-[248px] text-center">
      <div className="relative z-0 mx-auto mb-[34px] sm:mb-[62px] aspect-square w-[77px] sm:w-[150px]">
        <img
          src={logo}
          alt="grand-base-logo"
          className="block w-full object-contain"
        />
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[61px] h-[61px] sm:w-auto sm:h-auto -translate-x-1/2 -translate-y-1/2 blur-[25px]"
          width="119"
          height="122"
          viewBox="0 0 119 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88.6533 37.4822C85.9255 32.4651 82.1748 28.6452 77.4011 26.0226C72.6275 23.4 67.0583 22.0887 60.6934 22.0887C53.6466 22.0887 47.3954 23.6851 41.9398 26.8778C36.4842 30.0705 32.2221 34.6316 29.1533 40.5609C26.0845 46.4902 24.5501 53.3318 24.5501 61.0855C24.5501 69.0673 26.0845 76.0229 29.1533 81.9522C32.3357 87.8815 36.7116 92.4426 42.2808 95.6353C47.8501 98.828 54.3286 100.424 61.7163 100.424C70.809 100.424 78.2536 98.0298 84.0501 93.2407C89.8467 88.3376 93.6543 81.5531 95.4728 72.8872H54.5559V54.586H119V75.4527C117.409 83.7766 113.999 91.4733 108.771 98.5429C103.543 105.613 96.7799 111.314 88.4828 115.647C80.2994 119.866 71.0931 121.975 60.8639 121.975C49.3844 121.975 38.9847 119.41 29.6648 114.278C20.4585 109.033 13.1843 101.793 7.84241 92.5566C2.61414 83.3205 0 72.8301 0 61.0855C0 49.3409 2.61414 38.8505 7.84241 29.6144C13.1843 20.2643 20.4585 13.0237 29.6648 7.89255C38.9847 2.64737 49.3276 0.0247803 60.6934 0.0247803C74.1051 0.0247803 85.755 3.33152 95.6433 9.94501C105.532 16.4445 112.351 25.6235 116.102 37.4822H88.6533Z"
            fill="#074F7C"
          />
        </svg>
      </div>

      <p className="mb-2.5 sm:mb-4 font-primary text-base sm:text-lg font-medium uppercase leading-6 text-accent-blue">
        RWA & Synthetics
      </p>
      <h2 className="mb-[71px] sm:mb-[61px] font-primary text-[22px] sm:text-3xl font-normal uppercase sm:leading-[42px] text-white">
        on the blockchain
      </h2>
      <img
        src={networkGraphic}
        alt="Graphic Card Map"
        style={{ filter: "drop-shadow(0px 4px 107px 0px #107aba)" }}
        className="mx-auto max-w-none sm:max-w-full w-[calc(100%+34px)] -ml-5 sm:w-auto sm:ml-auto block"
      />

      {/* <!-- Background image --> */}
      <img
        src={heroBackground}
        alt="hero-background"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full hidden sm:block object-cover opacity-10"
      />
      <img
        src={heroBackgroundMobile}
        alt="hero-background"
        className="pointer-events-none absolute left-0 top-[10%] -z-10 h-[90%] w-full block sm:hidden object-cover opacity-10"
      />
    </section>
  );
}
