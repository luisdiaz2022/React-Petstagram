import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ImgWrapper, Img, Article } from "./styles";

import { useNearScreen } from "../../hooks/useNearScreen";
import { detailPath } from "../../utils";
import { useMutationToggleLike } from "../../container/ToggleLikeMutation";

import { FavButton } from "../FavButton";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMutationToggleLike();

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/${detailPath}/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
