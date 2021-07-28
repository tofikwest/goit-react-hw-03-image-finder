import { Fragment } from "react";
// Load More
const Button = ({ onClick }) => {
  // const scroll = window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: "smooth",
  // });
  return (
    <Fragment>
      <button type="button" onClick={onClick}>
        Load More
      </button>
    </Fragment>
  );
};

export default Button;
