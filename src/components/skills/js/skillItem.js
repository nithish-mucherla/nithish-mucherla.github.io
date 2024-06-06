import React from "react";
import { useRef } from "react";
import { Chip, Avatar } from "@material-ui/core";

const SkillItem = (props) => {
  const ref = useRef();
  const addShadow = () => {
    ref.current.classList.add("shadow");
  };

  const removeShadow = () => {
    ref.current.classList.remove("shadow");
  };

  const style = {
    background: "#ff79c6",
    fontFamily: "Fira Code",
  };
  const styleAvatar = {
    background: "white",
    color: "#ff79c6",
  };
  return (
    <Chip
      id={props.label}
      ref={ref}
      className="skillChip"
      style={style}
      avatar={<Avatar style={styleAvatar}> {props.avatar} </Avatar>}
      label={props.label}
      color="primary"
      onMouseOver={addShadow}
      onMouseOut={removeShadow}
      data-aos="zoom-in"
    />
  );
};

export default SkillItem;
