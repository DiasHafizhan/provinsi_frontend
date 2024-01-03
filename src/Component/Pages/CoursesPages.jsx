import { couresesPages } from "../data"
import CardCourses from "../Fragment/CardCourses"
import Pages from "../Layout/Pages"
import Button from "../Element/button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const CoursesPages = () => {
  const navigate = useNavigate();
  const [pulau, setPulau] = useState([])


  useEffect(() => {

    const getAllPulau = async () => {
      try {
        const reponse = await axios.get("http://localhost:5000/api/pulau")
        setPulau(reponse.data.data)
        console.log(reponse.data.data);
      } catch (error) {
        console.log(error)
      }
      
    } 

    getAllPulau();
  }, [])

  return (
    <div className="">

      <div className="w-11/12 mx-auto mt-32 flex flex-wrap justify-between gap-8 bg-transparent container">
        {pulau.map((data) => {
          return (
            <CardCourses key={data.id}>
              <CardCourses.Header
                image={data.thumnail}
                btn1={'materi'}
                btn2={"kuis"}
                name={data.nama} />
              <CardCourses.Body title={data.nama}>
                {data.deskripsi}
                <Button
                  classname="w-full mt-5 py-3 bg-btn shadow-sm text-base"
                  onClick={() => navigate(`/provinsi/${data.id}`)}
                >
                  Get in now
                </Button>
              </CardCourses.Body>
            </CardCourses>
          )
        })}
      </div>
    </div>
  )
}

export default CoursesPages