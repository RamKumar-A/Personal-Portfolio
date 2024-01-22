import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { projectData } from '../data/projectData/data';
import ProjectItems from './ProjectItems';

function Projects() {
  const [details, setDetails] = useState(null);

  function handleDetails(detail) {
    setDetails(detail);
  }

  return (
    <div id="project" className="w-full section xl:mb-10 mt-10 ">
      <h1 className="section_header xl:py-5">A Small Selection of my work</h1>
      <div className="pt-5 w-full grid xl:grid-cols-2 justify-center place-items-center justify-items-center gap-y-7 gap-x-3 ">
        <Fade delay={400} direction="">
          {projectData.map((data, i) => (
            <ProjectItems
              title={data.title}
              img={data.img}
              data={data}
              key={i}
              details={details || {}}
              handleDetails={handleDetails}
              className={i === projectData.length - 1 ? 'grid col-span-2' : ''}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
