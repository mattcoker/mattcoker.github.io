import Img from "gatsby-image"
import React from "react"
import { ProfileType } from "@wkocjan/gatsby-theme-intro/src/types"

const INCREMENT = {
  Z: 10,
  TRANSLATE: 8,
  BG: 25
};
const TOP_Z = INCREMENT.Z * 4;

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <Img
      fixed={image.childImageSharp.fixed}
      alt={name}
      className={`rounded-full relative z-${TOP_Z}`}
    />

    {[1,2,3].map((num) => {
      const circleClasses = ['absolute', 'inset-0', 'rounded-full', 'bg-lead', 'transform'];
      circleClasses.push(
        `bg-lead-back-${num * INCREMENT.BG}`,
        `translate-x-${num * INCREMENT.TRANSLATE}`,
        `z-${TOP_Z - (num * INCREMENT.Z)}`
      );
      return <div className={circleClasses.join(' ')}></div>;
    })}
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}

export default ProfileImage
