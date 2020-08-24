import React from "react";
import { useParams } from "react-router-dom";
const Project = () => {
  let { id } = useParams();
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
          <h3>This is the Project page{id}</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
