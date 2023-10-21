import managePortfolio from "../assets/images/manange-portfolio.png";
import protectedSecurily from "../assets/images/protected-securily.png";
import cryptoVariety from "../assets/images/crypto-variety.png";

const workingSteps = [
  {
    icon: managePortfolio,
    title: "Manage Portfolio",
    description:
      "To create a grand asset (gAssest), users must lock up >150>% of the asset’s current value with collaterals allowed by the protocol ",
  },
  {
    icon: protectedSecurily,
    title: "Protected Securely",
    description:
      "Using decentralized oracle, the protocol tracks gAssests  price> If it deviates from the primary market, traders are incentivized to swap (burn/mint) and claim collateral.",
  },
  {
    icon: cryptoVariety,
    title: "Cryptocurrency Variety",
    description:
      "Using decentralized oracle, the protocol tracks gAssests  price> If it deviates from the primary market, traders are incentivized to swap (burn/mint) and claim collateral.",
  },
];

export default function HowItWorks() {
  return (
    <section className="pt-[77px] md:pt-[135px] pb-[34px] px-8">
      <div className="max-w-[1440px] w-full mx-auto relative z-0">
        <div className="max-w-[1256px] w-full mx-auto">
          <div className="max-w-[502px] w-full mx-auto text-center mb-[73px] py-5 sm:py-0">
            <h2 className="text-3xl sm:text-6xl font-semibold font-primary leading-[42px] sm:leading-tight mb-[27px]">
              HOW IT WORKS
            </h2>
            <hr className="w-[60px] mx-auto border-t-white mb-[27px]" />
            <p className="font-secondary text-[15px] sm:text-base !leading-[29px] font-semibold text-white/80">
              Grand base gives traders from all over the world open acces and
              price exposure to <br className="md:hidden" />
              <a href="/" className="text-accent-blue/80">
                synthetic assets on the blokchain.
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
            {workingSteps.map((item, index) => (
              <div
                key={index}
                className="rounded-[18px] bg-white/[0.02] border border-white/5 pl-6 sm:pl-7 pr-[25px] sm:pr-[30px] pb-[30px] pt-[9px] backdrop-blur-[100px]"
              >
                <div className="h-[164px] w-auto mb-[27px] flex items-end">
                  <img
                    src={item.icon}
                    alt={item.title + " Icon"}
                    className="w-auto object-contain object-bottom"
                  />
                </div>

                <h3 className="text-lg tracking-[2%] font-bold leading-[30px] text-[#ECF1F0] font-primary mb-[19px]">
                  {item.title}
                </h3>
                <p className="text-[#B6B6B6] leading-7 text-base font-secondary tracking-[2%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Circle */}
        <div className="w-[176px] sm:w-[212px] aspect-square rounded-full block bg-accent-blue blur-[250px] transform-gpu top-[261px] sm:top-[125px] right-[84px] sm:right-[195px] pointer-events-none z-0 absolute" />
      </div>
    </section>
  );
}
