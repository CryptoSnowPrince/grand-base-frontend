import logo from "../assets/images/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="w-full px-5 z-10 relative bg-accent-blue/5">
      <div className="relative max-w-[1300px] w-full mx-auto pt-[75px] pb-12 sm:pb-24 ">
        <span className="w-[300px] h-[300px] rounded-full bg-accent-blue block blur-[300px] absolute top-0 sm:top-[85%] left-1/2 -translate-x-1/2"></span>
        <div className="flex flex-col sm:flex-row z-50 relative items-center sm:items-start justify-between gap-12 sm:gap-10">
          <a href="/" className="inline-block">
            <img
              src={logo}
              alt="Grand Base"
              className="w-[180px] h-auto object-contain"
            />
          </a>
          <div className="max-w-[390px] lg:max-w-[480px] w-full flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-start justify-between gap-12 sm:gap-6">
            <ul>
              <li className="text-base font-bold font-secondary leading-6 mb-5">
                Info
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm leading-[31px] font-medium tracking-[0.14px] font-secondary flex items-center gap-1 hover:underline"
                >
                  Gitbook
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth=".946"
                      d="m4.571 12.604 8.201-8.202m0 0v7.873m0-7.873H4.9"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm leading-[31px] font-medium tracking-[0.14px] font-secondary flex items-center gap-1 hover:underline"
                >
                  Medium
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth=".946"
                      d="m4.571 12.604 8.201-8.202m0 0v7.873m0-7.873H4.9"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="mb-7 sm:mb-0">
              <h6 className="text-base font-bold font-secondary leading-6 mb-5">
                Socials
              </h6>
              <ul className="flex items-center gap-5">
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        d="M15.04 3.552h2.4L12.195 9.61l6.173 8.242h-4.833l-3.785-5-4.331 5H3.015l5.612-6.48-5.921-7.82H7.66l3.421 4.57 3.957-4.57ZM14.197 16.4h1.33L6.939 4.928H5.51L14.197 16.4Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        d="M16.794 4.677a14.567 14.567 0 0 0-3.65-1.125c-.162.277-.34.652-.465.947a13.956 13.956 0 0 0-4.044 0c-.126-.295-.314-.67-.466-.947-1.262.21-2.49.589-3.652 1.125-2.31 3.41-2.935 6.74-2.623 10.025a14.878 14.878 0 0 0 4.474 2.24c.36-.487.68-1.003.955-1.544a9.38 9.38 0 0 1-1.509-.723c.126-.09.25-.188.366-.286 2.91 1.33 6.062 1.33 8.936 0 .126.098.242.197.366.286a9.37 9.37 0 0 1-1.508.723c.275.54.594 1.057.955 1.544a14.798 14.798 0 0 0 4.473-2.24c.384-3.802-.607-7.106-2.608-10.025Zm-9.07 7.998c-.875 0-1.59-.795-1.59-1.767 0-.973.697-1.768 1.59-1.768.884 0 1.607.795 1.589 1.768 0 .972-.705 1.767-1.59 1.767Zm5.866 0c-.875 0-1.59-.795-1.59-1.767 0-.973.697-1.768 1.59-1.768.883 0 1.606.795 1.589 1.768 0 .972-.697 1.767-1.59 1.767Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="text-base font-bold leading-6 font-secondary"
            >
              Join our community
            </a>
          </div>
        </div>
        <p className="font-secondary mt-12 text-center sm:text-left lg:mt-0 text-base leading-7 tracking-[0.16px]">
          &copy; Grand base.{new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </footer>
  );
}
