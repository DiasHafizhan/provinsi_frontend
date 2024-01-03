import CardCourses from "../Fragment/CardCourses"
import Wrapper from "../Layout/Wrapper"
import { cardCourses } from "../data"
import { useNavigate } from "react-router-dom"
import Button from "../Element/button"
import axios from "axios"
import { useState, useEffect } from "react"

const Courses = () => {
  const navigate = useNavigate();
  const [pulau, setPulau] = useState([])


  useEffect(() => {

    const getAllPulau = async () => {
      try {
        const reponse = await axios.get("http://localhost:5000/api/pulau?limit=4")
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
      <Wrapper classname="w-11/12 mx-auto container">
        <Wrapper.Header classname="mt-24">
          Kursus Kita
        </Wrapper.Header>
        <Wrapper.Body onclick={"courses"}>
          Kursus ini menyediakan materi singkat mengenai adat istiadat dan kebudayaan provinsi terkait, kuis dapat dikerjakan untuk melihat kompetensi atas pemahaman materi yang sudah dipelajari.
        </Wrapper.Body>
      </Wrapper>

      <div className="w-11/12 mx-auto mt-8 flex flex-wrap justify-between gap-8 bg-transparent container">
        {pulau.map((data) => {
          return (
            <CardCourses key={data.id}>
              <CardCourses.Header
                image={data.thumnail}
                btn1={'materi'}
                btn2={'kuis'}
                name={data.sub_name} />
              <CardCourses.Body title={data.nama} classname="min-h-[50px] bg-red-400">
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

export default Courses