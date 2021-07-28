import React, { Component } from "react";
import imagesAPI from "../api/images-api";
import Layout from "./Layout";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { animateScroll as scroll } from "react-scroll";
import Button from "./Button";
import LoaderSpinner from "./LoaderSpinner";
import Modal from "./Modal";
import Error from "./Error";
import ButtonIcon from "./ButtonIcon";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    images: [],
    picturesListPage: [],
    searchQuery: "",
    loading: false,
    page: 1,
    largeImageURL: "",
    tags: "",
    showModalWindow: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], page: 1, error: null, picturesListPage: [] });
    }
  }

  onHandleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchQuery: value.toLowerCase() });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.renderPicList();
  };

  renderPicList = async () => {
    const { searchQuery, page } = this.state;

    try {
      this.setState({ loading: true });
      const picturesListPage = await imagesAPI.fetchImages(searchQuery, page);
      this.setState({ picturesListPage });

      this.setState(({ images, page, picturesListPage }) => ({
        images: [...images, ...picturesListPage],
        page: page + 1,
        loading: false,
        picturesListPage: [...picturesListPage],
      }));

      if (picturesListPage.length === 0) {
        this.setState(({ page }) => ({
          page: page - 1,
          error: `There are no images on your request "${searchQuery}"`,
        }));
      }
    } catch (error) {
      this.setState({
        error: "Whoops, something went wrong. Enter your request again",
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  loadMore = () => {
    this.renderPicList();
    this.scroll();
  };

  scroll = () => {
    scroll.scrollToBottom();
  };

  toggleModal = () => {
    this.setState(({ showModalWindow }) => ({
      showModalWindow: !showModalWindow,
    }));
  };

  onOpenModal = (e) => {
    this.setState({
      largeImageURL: e.target.dataset.source,
      tags: e.target.alt,
    });
    this.toggleModal();
  };

  disabledBtn = () => {
    this.setState(({ disabled }) => ({
      disabled: !disabled,
    }));
  };

  render() {
    const {
      images,
      searchQuery,
      tags,
      largeImageURL,
      showModalWindow,
      loading,
      error,
      picturesListPage,
    } = this.state;

    return (
      <>
        <Searchbar
          searchQuery={searchQuery}
          onHandleChange={this.onHandleChange}
          handleSubmit={this.onHandleSubmit}
        />
        <Layout>
          {error && <Error errorContent={error} />}

          {loading && <LoaderSpinner />}

          {images.length > 0 && !error && (
            <ImageGallery images={images} onClickImg={this.onOpenModal} />
          )}

          {picturesListPage.length > 11 && !loading && !error && (
            <Button contentBtn="Load More" onLoadMore={this.loadMore} />
          )}
          {picturesListPage.length < 11 &&
            picturesListPage.length > 0 &&
            !loading &&
            !error && <Button disabled contentBtn="End" />}

          {showModalWindow && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} alt={tags} />
              <ButtonIcon
                className={styles.ButtonIcon}
                onClick={this.toggleModal}
                aria-label="Close image"
              ></ButtonIcon>
            </Modal>
          )}
        </Layout>
      </>
    );
  }
}

export default App;
