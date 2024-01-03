import { useEffect, useState } from "react"
import { budaya } from "../data"
import axios from "axios"
import { useParams } from "react-router-dom"

const ProvinsiPage = () => {
  const [provinsi, setProvinsi] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getProvinsiById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/provinsi/${id}`)
        setProvinsi(response.data.data)
        console.log(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProvinsiById()
  }, [])

  return (
    <div className="">

      <div className="">
        <img src={provinsi.img_thum} alt="" className="mb-5" />

        <div className="mx-auto mb-32 bg-white w-8/12 p-10 rounded-lg">
          <div className="">
            <h1 className="text-3xl font-bold mb-8">
              {provinsi.nama}
            </h1>
            {provinsi.desc_provinsi.split("/").map((paragraf, i) => (
              <p key={i} className="mb-7">
                {paragraf}
              </p>
            ))}
          </div>
          <div className="mt-14">
            <h1 className="text-3xl font-bold mb-8">
              Peta
            </h1>

            <p key={i} className="mb-7">
              {provinsi.desc_peta}
            </p>

            <img src={provinsi.img_peta} alt="" className="my-14 object-cover w-full h-auto" />
            <div className="">
              <h1 className="text-3xl font-bold mb-8">
                Sejarah
              </h1>
              {if(provinsi.desc_sejarah.split("/").length <= 1){
                {provinsi.desc_sejarah.split("/").map((paragraf, i) => (
                  <p key={i} className="mb-7">
                    {paragraf}
                  </p>
                ))}
              }else {
                return(
                  <p className="mb-7">
                    {provinsi.desc_sejarah}
                  </p>
                )
              }}
              
              <img src={provinsi.img_sejarah} alt="" className="mt-14" />
            </div>
          </div>
        </div>

        <div className="container w-11/12 p-5 mx-auto">
          <h1 className="text-3xl font-semibold mb-10">
            Budaya
          </h1>
          <div className="flex justify-between">
            {budaya.map((data) => {
              return (
                <div key={data.id} className="w-[24%] h-fit group">
                  <div className="relative overflow-hidden">
                    <img src={data.image} alt="" className="w-full h-auto object-cover rounded-lg" />
                    <div className="absolute h-full w-full flex items-center justify-center -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                      <p className="text-lg text-white font-semibold">
                        {data.title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProvinsiPage