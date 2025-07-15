import React, {useEffect} from 'react';
import '../../styles/advanced-components.css';


export default function AdvancedComponents() {
  useEffect(() => {
    document.title = "Component Techniques | Barnett UX";
  },[]);
  return (
    <div className="page-wrapper">
      <main className="advanced-components">
        <h1>Component Techniques</h1>
        <div className="project-summary">
          Flexible, powerful systems are built on basic foundations. Below are just a few examples of how I approach components in real-world situations.
        </div>
        <div className="gallery">
          {/*
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Buttons</h2>
              <div className="gallery-subtitle">Atomic Design Basics</div>
              <p>
                Every system has buttons, and almost every button contains custom fills, iconography, text, and interactive states. <span className="good-highlight">Let's look at how basic atomic design enables rapid updates and flexible implementation</span>.
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/UrUP6Lk6Z1c" title="Component Walkthrough: Buttons" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          */}
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Core Inputs</h2>
              <div className="gallery-subtitle">Easy & Consistent User Forms</div>
              <p>
                Form inputs are often more alike than they are different, because they rely on the same accessibility rules. <span className="good-highlight">Let me share how I built up a rich set of inputs by inheriting common elements and states.</span>
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/8h0E48zpIQQ" title="Component Walkthrough: Core Inputs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Icon Wrapper</h2>
              <div className="gallery-subtitle">Fixing a Messy Library</div>
              <p>
                This custom icon library was a constantly expanding mess of colors and dimensions. Developers would normalize the icons within the code, which inspired me to do the same in Figma. <span className="good-highlight">Let's look at how a utility wrapper helped me patch-up and expand an underlying library.</span>
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/xF6pW8QR3w4" title="Component Walkthrough: Icon Wrapper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Tags</h2>
              <div className="gallery-subtitle">Easy-Baked Dynamic Colors</div>
              <p>
                In this system, tags did a lot of work; from callouts and badges to inline selects and multi-select lists... 
                and always with a unique splash of color. <span className="good-highlight">Let me show you how I set it up to rapidly build interactive variants.</span>
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/HrmeiaiCak0" title="Component Walkthrough: Tags" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
          </div>
        </div>
      </main>
    </div>
  );
}