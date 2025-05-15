import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/advanced-prototyping.css';


export default function AdvancedPrototyping() {
  return (
    <div className="page-wrapper">
      <main className="advanced-prototyping">
        <h2>Advanced Figma Prototyping</h2>
        <div className="gallery">
          <div className="gallery-item">
            <div className="gallery-detail">
              <h3 className="gallery-title">Tags</h3>
              <div className="gallery-subtitle">Easy-Baked Dynamic Variants</div>
              <p>
                Tags, or pills, were something of a swiss army knife in our system; informational callout, quick selection dropdown, multi-select list item, and contextual badge… 
                all with a little splash of color. Though their use is at times problematic, they weren't going anywhere and
                <span className="bad-highlight"> their initial implementation was too rigid and invited inconsistency</span>. 
                While updating the component to be flexible in terms of dimensions and supported actions, 
                <span className="good-highlight"> I explored a novel way to bake-in dynamic colors and give tags a whole new (and reusable) level of personality</span>. 
                Watch the video to see how I enabled the creation of interactive variants by changing one property.
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/HrmeiaiCak0" title="Component Walkthrough: Tags" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h3 className="gallery-title">Core Inputs</h3>
              <div className="gallery-subtitle">Removing Micro Decisions and Redundancy</div>
              <p>
                After noticing that <span className="bad-highlight">all of our forms had a tendency to vary on everything from font weight and spacing, to help text and error states</span> I 
                sought to reduce the number of micro decisions and deviations. What occured to me right away was that the various input types are more alike than they are unique. 
                That in mind, <span className="good-highlight">I created a universal core which bundled up field labels, hints and help text, error messages, placeholders, 
                internal iconography, as well as the active, disabled, and error states.</span>
              </p>

              <p>
                With these bits and bobs, I was able to provide a consistent structure for existing plain text inputs, dates, numbers, and dropdowns... 
                but it also made it <em>really</em> easy to add more unique fields.
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/8h0E48zpIQQ" title="Component Walkthrough: Core Inputs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h3 className="gallery-title">Icon Wrapper</h3>
              <div className="gallery-subtitle">Normalizing and Enhancing a Messy Library</div>
              <p>
                Our custom icon library was a bit of a mess and constantly expanding. Each icon was defined as a stand-alone component and
                <span className="bad-highlight"> it wasn't unusual for icon components to have different dimensions and one-off color definitions</span>. 
                With each use, it was just as common for each designer to recolor and resize icons in a non-resuable way.
              </p>
              <p>
                One of my early discoveries when coordinating design system updates with the dev team was that our
                <span className="good-highlight"> icons were being normalized by the code</span> regardless of the inconcistencies in the SVGs we delivered.
                <span className="good-highlight"> This inspired me to do the same thing in Figma</span> by creating a utility component to wrap our snowflake icons. 
                This ultimately allowed us to place icons into our designs in a way that would mimic the front end while giving us a convenient space to expand our toolset.
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/xF6pW8QR3w4" title="Component Walkthrough: Icon Wrapper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="gallery-item">
            <div className="gallery-detail">
              <h3 className="gallery-title">Buttons</h3>
              <div className="gallery-subtitle">Demonstrating Atomic Design</div>
              <p>
                The button component is built around a shared atomic base which defines the dimensions and spacing while also providing the default content; 
                text and iconography. With these elements defined in one location, it's easy to update all of our system buttons without going through each iteration.
              </p>
              <p>
                <span className="good-highlight">Changes to padding, borders, layout, and additional contents can all be performed in one location and will 
                automatically apply to all button types system-wide</span>. Of course, as with all good components, the buttons are setup to quickly adapt 
                to their context by either scaling with their contents (default) or filling their containers.
              </p>
            </div>
            <iframe className="gallery-video" width="560" height="315" src="https://www.youtube.com/embed/UrUP6Lk6Z1c" title="Component Walkthrough: Buttons" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}