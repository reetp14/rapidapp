import React from "react";

const mainList = (props) => {
  var listItems = props.listitem;

  return (
    <div>
      <ul className="list-group list-group-flush ">
        {listItems.map((post) => (
          <li key={post.data.title} className="list-group-item flex-container">
            <img
              src={post.data.thumbnail}
              alt="thumb"
              className="thumbnail"
            ></img>
            <div>{post.data.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default mainList;
