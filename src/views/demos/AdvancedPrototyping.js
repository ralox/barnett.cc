import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/advanced-prototyping.css';


export default function AdvancedPrototyping() {
  useEffect(() => {
    document.title = "Advanced Prototyping | Barnett UX";
  },[]);
  return (
    <div className="page-wrapper">
      <main className="advanced-prototyping">
        <div className="embedded-prototype-container">
          <div className="intro">
            <h1>Advanced Figma Prototyping</h1>
            <p className="callout">Explore this fun Figma prototype!</p>
            <p>Then read on to see how it's done.</p>
          </div>
          <iframe className="embedded-prototype" width="450" height="1000" src="https://embed.figma.com/proto/C63DE72FhCWAdlmIXGE5pA/Portfolio?node-id=1090-41007&p=f&scaling=min-zoom&content-scaling=fixed&page-id=1090%3A40271&starting-point-node-id=1090%3A41007&embed-host=share" allowfullscreen></iframe>
        </div>
        <div className="gallery">
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Overview</h2>
              <div className="gallery-subtitle">Three Simple Frames</div>
              <p>
                Despite having multiple interactions, this prototype boils down to 3 simple frames. Each frame has its own graphics, text details, and a unique video file. Each frame also repeats the player controls at the bottom. The video sits visually outside of the frame so we can hear but not see it. Now to make the basic controls.
              </p>
            </div>
            <img className="gallery-img" src={process.env.PUBLIC_URL + "/img/figma-demo-overview.png"} alt="Overview of the 3 main frames in Figma" />
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Adding Basic Interactions</h2>
              <div className="gallery-subtitle">Interactive Components</div>
              <p>
                Most designs today rely on reusable, interactive components. In this demo, our player is controlled with 3 buttons. The PlayBtn component handles play and pause with a hover state for both. The NextBtn and PrevBtn components let us move between frames and have hover and disabled states.
              </p>
              <p>
                To show that the song is playing, we use a scrubber and time readout. That's all of the pieces, now let's look into how they work!
              </p>
            </div>
            <div className="gallery-img">
              <img  src={process.env.PUBLIC_URL + "/img/figma-demo-buttons.png"} alt="Group of basic buttons as design components" />
              <img src={process.env.PUBLIC_URL + "/img/figma-demo-scrubber.png"} alt="An audio scrubber broken down into a few components parts" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h2 className="gallery-title">Bringing it to Life</h2>
              <div className="gallery-subtitle">Variables and Conditional Logic</div>
              <p>
                To get the job done, we need variables. These values track if the song is playing, the song's length, and how long it's played. Some drive behavior while others are for the display. PlayTime, for example, is a logical control but a bit of math gives us MinPlayed and SecPlayed so we can show those to the user in the expected format (ex. 124 = 2:04).
              </p>
              <p>
                If you're familiar with Figma, you're aware that basic interaction events won't cut it. The "Conditional" action is the perfect solution for handling multiple updates at once; performing calculations, setting variables, and responding to changing conditions. But, even with complicated conditional logic, you're stuck relying on the user to take action.
              </p>
            </div>
            <img className="gallery-img" src={process.env.PUBLIC_URL + "/img/figma-demo-variables.png"} alt="A list of variables and default values" />
          </div>
          <div className="gallery-item variant-loop">
            <div className="gallery-detail">
              <h2 className="gallery-title">Beyond User-Driven Events</h2>
              <div className="gallery-subtitle">Variant Loop Engines</div>
              <p>
                To update and respond to events over time, we need loops. Figma doesn't offer loops... but maybe you noticed that my scrubber has a variant with an "After delay" event that points right back to the default variant. By ending our logic with a variant "Change to" action and having that variant point right back, we can have these two run in circles!
              </p>
              <p>
                Because the loop uses variables, changes outside of the loop are automatically picked up. When we move between songs, the player remembers if it should keep playing, while our controls reset the PlayTime and calculate the new width of the scrubber to match the song length; all without interrupting the loop.
              </p>
              <p>
                Variant loop engines can execute and react to all sorts of situations and make Figma prototypes powerful, even without dipping into Figma Make.
              </p>
            </div>
            <img className="gallery-img" src={process.env.PUBLIC_URL + "/img/figma-demo-loop-logic.png"} alt="Screenshot of advanced conditional logic using variables" />
          </div>
        </div>
      </main>
    </div>
  );
}