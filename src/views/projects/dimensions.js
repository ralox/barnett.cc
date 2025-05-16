import React, {useEffect} from 'react';
import '../../styles/project.css';


export default function Dimensions() {
  useEffect(() => {
    document.title = "Dimensions | Work | Barnett UX";
  },[]);
  return (
    <div className="page-wrapper">
      Bear with me, please. This project is still being built 😬
    </div>
  );
}