import React from "react";
import { connect } from "react-redux";

const mainList = (props) => {
  var listItems = props.listitem;
  console.log(props.item);

  return (
    <div>
      <ul className="list-group list-group-flush ">
        {listItems.map((post) => (
          <div className="content">
            <li
              key={post.data.title}
              className="list-group-item flex-container"
            >
              <img
                src={post.data.thumbnail}
                alt="thumb"
                className="thumbnail"
              ></img>
              <div>{post.data.title}</div>
            </li>
            <div className="btn-wrap ">
              <button type="button" className="btn btn-primary">
                Show
              </button>
            </div>
          </div>
        ))}

        {props.item.map((it) => (
          <li key={it.id} className="list-group-item flex-container">
            <div>{it.item}</div>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("redux", state);

  return state;
};

export default connect(mapStateToProps)(mainList);
