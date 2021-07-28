import React, { PureComponent } from "react";
import Button from "./components/button/Button";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Searchbar from "./components/searchbar/Searchbar";
// import Section from "./components/section/Section";
import fetchPixaBay from "./components/services/fetchPixaBay";

class App extends PureComponent {
  state = {
    images: [],
    searchQuary: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetchPixaBay(this.state.searchQuary).then((response) =>
      this.setState({ images: response.data.hits })
    );
  };

  ononHandleChange = (e) => {
    this.setState({ searchQuary: e.target.value });
    console.log(this.state.searchQuary);
  };

  onloadMore = (page) => {
    fetchPixaBay(this.state.searchQuary, 2).then((response) =>
      this.setState({ images: [...response.data.hits] })
    );
  };
  render() {
    console.log(this.state.images);
    return (
      <>
        <Searchbar
          onSubmit={this.onSubmit}
          options={this.state}
          ononHandleChange={this.ononHandleChange}
        />
        <ImageGallery options={this.state.images} />
        <Button onClick={this.onloadMore} />
      </>
    );
  }
}

export default App;
