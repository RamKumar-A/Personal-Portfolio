function HeroImage() {
  return (
    <div className="max-sm:place-self-center max-md:place-self-start justify-self-start my-5 ">
      <div className=" w-60 h-60 xl:w-[24rem] xl:h-[24rem] object-cover flex justify-center items-center  rounded-full bg-gray-200 shadow-lg  shadow-gray-500">
        {/* <div className="bg-gray-100 w-56 h-56 sm:w-60 sm:h-60 xl:w-[24rem] xl:h-[24rem] flex justify-center items-center rounded-full"> */}
        <img
          src="../Images/Profile.jpg"
          alt="ProfileImg"
          className=" xl:h-[22rem] xl:w-[22rem] w-52 h-52 object-cover rounded-full "
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default HeroImage;
