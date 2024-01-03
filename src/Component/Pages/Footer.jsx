const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-11/12 mx-auto mt-32 container">
        <div className="lg:flex lg:justify-between">
          <div className="">
            <img src="./public/logo.png" alt="" className="mt-10" />
            <div className="flex flex-col gap-2 mt-8">
              <span className="text-xl">
                <i class='bx bxl-gmail'></i> hello@skillbridge.com
              </span>
              <span className="text-xl">
                <i class='bx bxs-phone'></i> +91 91813 23 2309
              </span>
              <span className="text-xl">
                <i class='bx bx-map'></i> Somewhere in the World
              </span>
            </div>
          </div>

          <div className="lg:flex lg:gap-14">
            <div className="flex gap-10 mt-10">
              <div className="">
                <h4 className="font-bold text-lg">Home</h4>
                <ul className="mt-2 flex flex-col gap-2">
                  <li>Benefits</li>
                  <li>Our Courses</li>
                  <li>Our Testimonials</li>
                  <li>Our FAQ</li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-bold text-lg">About Us</h4>
                <ul className="mt-2 flex flex-col gap-2">
                  <li>Company</li>
                  <li>Achievements</li>
                  <li>Our Goals</li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="font-bold text-lg">Social Profiles</h1>
              <div className="flex gap-3 mt-4">
                <p className="text-3xl">
                  <i class='bx bxl-facebook-circle'></i>
                </p>
                <p className="text-3xl">
                  <i class='bx bxl-twitter'></i>
                </p>
                <p className="text-3xl">
                  <i class='bx bxl-linkedin-square'></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20 mb-8">
          <p>
            © 2023 Skillbridge. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer