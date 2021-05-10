import React from "react";
import { Chip, Avatar } from "@material-ui/core";

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  addShadow = () => {
    this.ref.current.classList.add("shadow");
  };

  removeShadow = () => {
    this.ref.current.classList.remove("shadow");
  };

  render() {
    const style = {
      background: "#0586ff",
      fontFamily: "Raleway",
    };
    const styleAvatar = {
      background: "white",
      color: "#0586ff",
    };
    return (
      <Chip
        id={this.props.label}
        ref={this.ref}
        className="skillChip"
        style={style}
        avatar={<Avatar style={styleAvatar}> {this.props.avatar} </Avatar>}
        label={this.props.label}
        color="primary"
        onMouseOver={this.addShadow}
        onMouseOut={this.removeShadow}
        data-aos="zoom-in"
      />
    );
  }
}

export default SkillItem;
