import {useState, useEffect } from 'react';
const useFetch = (url) => {

    const [data, setData] = useState(null);
    //Creating a loader message
    const [isLoading, setisLoading] = useState(true);
    //Creating error
    const [error, setError] = useState(null);


    useEffect(()=>{
      const abortCont = new AbortController();
        setTimeout(() => {
              fetch(url, {signal: abortCont.signal})
                .then(res => {
                 //Throw error
                  if(!res.ok){
                    throw Error("Could not fetch data");
                  }
                  return res.json()
                })
                .then(data => {
                  console.log(data);
                  setData(data);
                  setisLoading(false);
                  setError(null);
                })
                //To get connection error
                .catch(err  => {
                  if(err.name=== 'AbortError'){
                    console.log('fetch aborted');
                  }else{
                    setisLoading(false);
                    setError(err.message);
                  }
                  
                })
        }, 1000);
        //Creating a useeffect clean up function and an abort controller 
        return() => abortCont.abort();
       }, [url]);

       return {data, isLoading, error};
}
export default useFetch;