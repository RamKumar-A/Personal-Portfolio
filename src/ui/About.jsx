import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    <Fade direction="">
      <div className=" pt-10 section xl:mb-10 px-1" id="about">
        <h1 className="section_header">My Exploration</h1>
        <div className="grid  xl:grid-cols-[auto_auto] gap-5 px-3 sm:px-14 my-10 sm:mx-10 rounded-2xl py-10 z-10 bg-gray-200 place-items-center shadow-xl ">
          <div className="w-full h-full hidden xl:flex items-center justify-center   ">
            <img
              src="../Images/Profile.jpg"
              alt="ProfileImg"
              className="w-80 h-80 object-cover"
            />
          </div>
          <div className="max-sm:text-sm sm:px-5 ">
            <p className="text-gray-700 leading-8 ">
              Hi there! I'm a 21-year-old frontend developer passionate about
              creating user-friendly designs. Working with various scripting
              languages and frameworks, I've set high standards for web
              applications.
              <br /> My focus is not just on making products enjoyable but also
              ensuring the code is easy to maintain and understand. I've had the
              chance to build memorable, user-friendly projects that showcase
              the perfect blend of creativity and functionality.
              <br />
              Check out my portfolio to see the simplicity and effectiveness of
              my work!
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
