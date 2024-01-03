import Button from "../Element/button"
import { team } from "../data"


const AboutPages = () => {
  return (
    <div className="">
      <img src="./public/aboutpages.png" alt="" className="" />
      <div className="text-center m-auto mt-16 max-w-2xl">
        <h2 className="text-4xl font-bold">
          About
          <span className="text-4xl font-bold text-primary"> Us</span></h2>
        <p className="mt-6">
          exaio ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.tempor inci ut labore et magna aliqua. Ut enim ad minim veniam
        </p>
      </div>

      <div className="w-11/12 mx-auto mt-28 container flex justify-between items-center">
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold">
            Lebih Mengenal Jauh Indonesia
          </h3>
          <p className="mt-8 text-base">
            In egestas erat imperdiet sed. Orci ac auctor augue mauris
            augue neque gravida in fermentum. Pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere. Arcu non odio euismod lacinia
            at quis risus. Malesuada fames ac turpis egestas maecenas pharetra.
          </p>
        </div>
        <img src="./public/about1.png" alt="" className="w-[520px] rounded-lg" />
      </div>

      <div className="w-11/12 mx-auto mt-28 container flex justify-between items-center">
        <img src="./public/about2.png" alt="" className="w-[520px] rounded-lg" />
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold">
            Mattis nunc sed blandit libero
          </h3>
          <p className="mt-8 text-base">
            In egestas erat imperdiet sed. Orci ac auctor augue mauris
            augue neque gravida in fermentum. Pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere. Arcu non odio euismod lacinia
            at quis risus. Malesuada fames ac turpis egestas maecenas pharetra.
          </p>
        </div>
      </div>

      <div className="text-center mx-auto mt-36 max-w-4xl">
        <h2 className="text-4xl font-bold mb-14 ">
          Bhinneka Tunggal Ika
        </h2>

        <div className="">
          <div className="flex gap-10">
            <div className="w-1/2 h-[430px] flex flex-col justify-between bg-[#BE3144] text-white p-5 rounded-xl shadow-lg">
              <div className="">
                <h2 className="text-2xl font-semibold text-left mb-3">
                  Bhinneka
                </h2>
                <p className="text-left">
                  memiliki makna ragam atau beraneka
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img src="./public/lambang1.png" alt="" className="w-[220px]" />
              </div>
            </div>
            <div className="w-1/2 h-[430px] flex flex-col justify-between bg-[#FAF3F0] text-black p-5 rounded-xl shadow-lg">
              <div className="">
                <h2 className="text-2xl font-semibold text-left mb-3">
                  Tunggal
                </h2>
                <p className="text-left">
                  persatuan
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img src="./public/lambang2.png" alt="" className="w-[220px]" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-white">
        <div className="w-11/12 mx-auto mt-28 container">
          <div className="text-center pt-10">
            <h4 className="text-3xl font-bold">
              Our
              <span className="text-3xl text-primary font-bold"> Team</span>
            </h4>
          </div>
          <div className="flex flex-wrap gap-10 justify-center mx-auto w-9/12 mt-14 pb-14">
            {team.map((data) => {
              return (
                <div key={data.id} className="max-w-[33%] text-center">
                  <img src={data.image} alt="" className="mx-auto" />
                  <h3 className="text-lg font-semibold mt-4">
                    {data.nama}
                  </h3>
                  <h4 className="text-lg text-primary font-semibold mt-2">
                    {data.tugas}
                  </h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPages