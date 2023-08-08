import { useEffect, useState } from "react";

const Home = () => {

    const [shows, setShows] = useState([]);
    useEffect(() => {

        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then( res => res.json())
        .then (data => setShows(data))
    } ,[])

    console.log(shows);
    return (
        <div className="container">
            This is home

            
        </div>
    );
};

export default Home;