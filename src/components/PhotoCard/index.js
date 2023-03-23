import React from "react";
import { Link } from "react-router-dom";

import { ImgWrapper, Img, Article } from "./styles";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { detailPath } from "../../utils";
import { useMuationToogleLike } from "../../container/ToggleLikeMutation";

import { FavButton } from "../FavButton";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
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
