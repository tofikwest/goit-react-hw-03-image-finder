import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

import Container from "components/Container";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import Modal from "components/Modal";
import { fetchImagesWithQuery } from "services/fetchImages";
import LoaderOn from "components/Loader";
i;

class App extends Component {
  static defaultProps = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModalWindow: false,
    modalImg: "",
    modalAlt: "",
  };
  static propTypes = {
    images: PropTypes.array,
    currentPage: PropTypes.number,
    searchQuery: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    showModalWindow: PropTypes.bool,
    modalImg: PropTypes.string,
    modalAlt: PropTypes.string,
  };

  state = {
    images: this.props.images,
    currentPage: this.props.currentPage,
    searchQuery: this.props.searchQuery,
    isLoading: this.props.isLoading,
    error: this.props.error,
    showModalWindow: this.props.showModalWindow,
    modalImg: this.props.modalImg,
    modalAlt: this.props.modalAlt,
    onOpenModal: (e) => {
      this.setState({
        modalImg: e.target.dataset.source,
        showModalWindow: true,
        modalAlt: e.target.attributes.alt.textContent,
      });
      document.body.classList.add("is-open");
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchImagesWithQuery(searchQuery, 1)
      .then((response) => this.setState({ images: response.data.hits }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });

    fetchImagesWithQuery(searchQuery, currentPage + 1)
      .then((response) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector("#imagesList").scrollHeight,
          behavior: "smooth",
        });
      });
  };

  onCloseModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({ showModalWindow: false, modalImg: "", modalAlt: "" });
    }
    document.body.classList.remove("is-open");
  };

  onSetQuery = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      searchQuery,
      images,
      isLoading,
      showModalWindow,
      modalImg,
      modalAlt,
    } = this.state;

    return (
      <contextProps.Provider value={this.state}>
        <Container>
          <Searchbar
            onSubmit={this.onSubmit}
            onSetQuery={this.onSetQuery}
            searchQuery={searchQuery}
          />
          <ImageGallery />
          {isLoading && <LoaderOn />}
          {images.length > 11 && <Button onLoadMore={this.onLoadMore} />}
          {showModalWindow && (
            <Modal
              onCloseModal={this.onCloseModal}
              modalImg={modalImg}
              modalAlt={modalAlt}
            />
          )}
        </Container>
      </contextProps.Provider>
    );
  }
}

export default App;
