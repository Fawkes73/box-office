import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiGet } from '../misc/config';
const Show = () => {

  const { id } = useParams();

  const [show, setShow] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, SetError] = useState(null);

  useEffect(() => {

    let isMounted = true;

    apiGet(`/shows/1?embed${id}=seasons&embed[]=cast`).then(results => {


      if (isMounted) {

        setShow(results);
        setIsLoading(false);
      }




    }).catch(err => {
      if (isMounted) {
        SetError(err.message);
        setIsLoading(false);
      }

    });

    return () => {
      isMounted = false;
    }
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>
      Data is Being Loaded
    </div>
  }
  if (error) {
    return <div>Error Occured: {error}</div>
  }

  return (
    <div>
      This is show page
    </div>
  )
}

export default Show
