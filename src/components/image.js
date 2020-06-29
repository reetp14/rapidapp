import React from "react";
import { connect } from "react-redux";
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

const Image = () => {
  const [post, setPost] = React.useState(null);
  console.log();
  React.useEffect(() => {
    ipcRenderer.on("image", (event, arg) => {
      setPost(arg);
    });
  });

  if (!post) {
    return <div>Select post</div>;
  } else {
    return (
      <div>
        <img
          src={post.data.url}
          alt="image"
          style={{ height: "600px", width: "430px" }}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { image: state.selectedItem };
};

export default connect(mapStateToProps)(Image);
