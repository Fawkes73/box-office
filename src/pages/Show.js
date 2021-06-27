import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {

  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = usState(true);
  const [error, setError] = useState(null);



  useEffect(() => {

    let isMounted = true;

    apiGet(`/shows/$[id]?embed[]=seasons&embed[]=cast`).then(results => {


      () => {
        if (isMounted) {
          setShow(results);

          setIsLoading(false);
        }

      }

    }).catch(err => {
      if (isMounted) {
        setError(err.message);
        setIsLoading(false);
      }

    });



    return () => {
      isMounted = false;
    }

  }, [id]);


  if (isLoading) {
    return <div>Data is Being Loaded</div>
  }

  if (error) {
    return <div>Error Occured: {error}</div>
  }

  return (
    <div>
      This is Show Page

    </div>
  )
};

export default Show
