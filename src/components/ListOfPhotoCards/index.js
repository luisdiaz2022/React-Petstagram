import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';

const ANIMALS_QUERY = gql`
  query getPhotos {
      photos {
      id
      categoryId
      src
      likes
      userId
      liked
      }
  }
`

export const ListOfPhotoCards = () => {
    const { data, loading, error } = useQuery(ANIMALS_QUERY)  // destructuras la data y el estado de loading y error 
    if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
    if (error) return <pre>{error.message}</pre>
    return (
      <ul>
        {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
      </ul>
    )
  }