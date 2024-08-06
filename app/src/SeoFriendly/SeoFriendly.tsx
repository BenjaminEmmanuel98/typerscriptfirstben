import React from "react";
import "./SeoFriendly.css";
import urlimage from "../Assets/image/shapely image.png";
const SeoFriendly = () => {
  return (
    <div>
      <div className="parent-div3SEO-sectiondiv">
        <div className="SEOsub-section-parentdiv">
          <div className="imagediv">
            <img src={urlimage} className="img" />
          </div>
          <div className="writeup">
            <h1>SEO Friendly</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
              diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus
              ac ligula id ultricies.
            </p>
            <div className="SEObutton">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoFriendly;
