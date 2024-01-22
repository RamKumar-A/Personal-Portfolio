function SkillCard({ icons, title }) {
  return (
    // <div>
    <div className="w-28 h-24 p-3 mx-2 bg-gray-200 grid items-center place-content-center  justify-items-center text-center rounded-3xl xl:rounded-3xl font-[Montserat] shadow-lg shadow-gray-400 ">
      <h1 className="text-4xl xl:text-5xl text-gray-950 text-center">
        {icons}
      </h1>
      <h1 className="text-xs uppercase pt-1">{title}</h1>
      {/* </div> */}
    </div>
  );
}

export default SkillCard;
