import Pages from "../Layout/Pages"
import Wrapper from "../Layout/Wrapper"
import Button from "../Element/button"
import { subProvinsi, allProvinsi } from "../data"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const AllProvinsi = () => {
  const navigate = useNavigate()
  const[materi, setMateri] = useState([])
  const {id} = useParams()

  useEffect(() =>{
    const getAllProvinsibyPulauId = async () =>{
      try {
        const response = await axios.get(`http://localhost:5000/api/provinsi/pulau/${id}`)
        setMateri(response.data.data) 
        console.log(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllProvinsibyPulauId()
  }, [])

  return (
    <div className="">
      <Pages classname="mb-14">
        <Pages.Header>
          {materi[0]?.pulau?.nama}
        </Pages.Header>
        <Pages.Footer>
        {materi[0]?.pulau?.deskripsi}
        </Pages.Footer>
      </Pages>

      <div className="container">
        {materi.map((data) => {
          return (
            <div key={data.id} className="w-11/12 mx-auto mb-12 rounded-lg p-5 bg-white ">
              <Wrapper>
                <Wrapper.Header>
                  {data.nama}
                </Wrapper.Header>
                <Wrapper.Body onclick={() => navigate(`/materi/${data.id}`)}>
                  {data.deskripsi.split(".")[0]}
                </Wrapper.Body>
              </Wrapper>

              <div className="">
                <div className="flex justify-between mt-8">
                  <img src={data.img_thum} alt="" className="w-[320px] h-auto object-cover rounded-lg" />
                  <img src={data.img_peta} alt="" className="w-[320px] h-auto object-cover rounded-lg" />
                  <img src={data.img_sejarah} alt="" className="w-[320px] h-auto object-cover rounded-lg" />
                </div>
                <div className="flex justify-between mt-5">
                  <Button classname="px-5 py-2 bg-transparent shadow-sm text-base text-slate-500">
                    {'materi'}
                  </Button>
                  <p>
                    {data.ibukota}
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="mb-5 text-lg font-semibold">
                    Budaya
                  </h3>

                  <div className="flex justify-between">
                    {subProvinsi.map((data) => {
                      return (
                        <div key={data.id} className="w-5/6 p-5">
                          <h2 className="font-bold text-4xl mb-3">
                            {data.title}
                          </h2>
                          <p className="">
                            {data.nama}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default AllProvinsi