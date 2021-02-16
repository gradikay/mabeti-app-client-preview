// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; 
// CSS
import "../css/PostFilter.css";
// Dummy data
import { data as dummyPosts } from "../DummyData/data"; 
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostFilter() { 

    // Important variables 
    const { name } = useParams();
    const [search, setSearch] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    // Handling search
    async function handleSearch(event) {

        event.preventDefault();

        try {

            // if there is no data return "all" data
            window.location.href = `/filter/${search === "" ? "all" : search.toLowerCase()}`;

        } catch (e) {
            alert(e);
        }
    }

    // Retreiving data from database
    useEffect(() => {

        // Cleanup variable
        let unmounted = false;

        async function onLoad() {

            setIsLoading(true);

            try {
                 
                if (!unmounted) {
 
                }
                setIsLoading(false);

            } catch (e) {
                alert(e);
                setIsLoading(false);
            }

        }

        // Return load function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true; 
            setPosts([]);
        };

    }, [name]);

    // Return UI
    return (
        <main id="PostFilter"> 

            <Header handleSearch={handleSearch} setSearch={setSearch} search={search} />

            <SectionA posts={dummyPosts} name={name} isLoading={isLoading} />  
            
        </main>
        );
}

// Header
function Header(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <header id="Header" className="container-fluid row m-0 my-3 pb-3 text-right border-bottom ">
            <div className="dropdown">

                { /* Button - Start */ }
                <button type="button" className="btn mr-3 mb-3 mb-sm-0 mr-5" data-toggle="dropdown">
                    Filter <i className="fa fa-sliders"></i>
                </button>
                { /* Button - End */}

                { /* Menu - Start */ }
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/filter/men">+ Men</Link>
                    <Link className="dropdown-item" to="/filter/women">+ Women</Link>
                    <Link className="dropdown-item" to="/filter/kids">+ Kids</Link>
                    <Link className="dropdown-item" to="/filter/new"><i className="fa fa-bolt"></i> new</Link>
                    <Link className="dropdown-item" to="/filter/sale"><i className="fa fa-tags"></i> sale</Link>
                </div>
                { /* Menu - End */}

            </div>
            { /* Search - Start */ }
            <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
            { /* Search - End */ }
        
        </header>
        );
}

// Search input
function Search(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <div className="nav-item">

            { /* Form - Start */}
            <form onSubmit={handleSearch}>
                <div className="input-group">

                    { /* Input - Start */}
                    <input
                        id="search"
                        type="search"
                        name="search"
                        value={search}
                        placeholder="Search"
                        className="form-control"
                        onChange={e => setSearch(e.target.value)}
                    />
                    { /* Input - End */}

                    { /* Button - Start */}
                    <div className="input-group-append">
                        <button className="btn" type="submit">
                            <i className='fa fa-search' role="img" aria-label="search"></i>
                        </button>
                    </div>
                    { /* Button - End */}

                </div>
            </form>
            { /* Form - End */}

        </div>
    );
}

// Other sections
function SectionA(props) {

    // Important variables
    const { posts, name, isLoading } = props;

    // Return UI
    return (
        <section id="SectionA" className="container-fluid row pb-5 bg-white border-bottom m-0">

            <div className="col-sm-12">
                <h2>Searching for <i className="text-capitalize">{name}</i></h2>
                <p>{ posts.length } Results </p>
            </div>
             
            {!isLoading ?

                // Display after we have loaded our data
                posts.map((post, i) => {


                    // Important variables
                    const { imageA } = post.images;
                    const { userId, postStatus, postTitle, postId } = post;
                    const convertDate = new Date(post.createdAt);
                    const postedOn = convertDate.toDateString();
                    const price = Number(post.postPrice).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-sm-6 col-md-3  p-2" key={i++}>

                            <a href={`/view/${postId}`}>
                                <div className="card text-center shadow-sm h-100">

                                    { /* Image - Start */}
                                    <img src={imageA} />
                                    { /* Image - End */}

                                    { /* Overlay - Start */}
                                    <div className="card-img-overlay">
                                        <div className="overlay-top">
                                            <span className="badge badge-info rounded float-left text-capitalize">{postStatus}</span>
                                        </div>
                                    </div>
                                    { /* Overlay - End */}

                                    { /* Body card - Start */}
                                    <div className="card-body">
                                        <p className="m-0" >
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-half-full" role="img" aria-label="star"></i>
                                        </p>
                                        <p className="m-0" style={{ fontSize: "1.3rem" }}><small>{postTitle}</small></p>
                                        <p>
                                            <b className="text-danger"> ${ price } </b>
                                            <del className="text-secondary"> ${ price } </del>
                                        </p>
                                    </div>
                                    { /* Body card - End */}

                                </div>
                            </a>
                        </div>
                    );
                })
                :
                // Display while Loading data
                "Loading"
            }
             
            {
                dummyPosts.map((post, i) => {


                    // Important variables
                    const { imageA } = post.images;
                    const { postId, postTitle } = post; 
                    const price = Number(post.postPrice).toLocaleString();


                    // Return UI
                    return (
                        < div className="col-md-6 col-lg-3 text-white p-2" key={i++}>

                            <a href={`/view/${postId}`}>

                                { /* Card - Start */ }
                                <div className="card text-center shadow-sm h-100">

                                    { /* Image */ }
                                    <img className="card-img-top p-3" src={imageA} alt={`Home ${imageA}`} />
                                    { /* Overlay - Start */ }
                                    <div className="card-img-overlay">
                                        <div className="overlay-top">
                                            <span className="badge badge-info rounded float-left"> -25%</span>
                                        </div>
                                    </div>
                                    { /* Overlay - End */}

                                    { /* Body - Start */}
                                    <div className="card-body">
                                        <p className="m-0" >
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-half-full" role="img" aria-label="star"></i>
                                        </p>
                                        <p className="m-0" style={{ fontSize: "1.3rem" }}><small>{postTitle}</small></p>
                                        <p>
                                            <b className="text-danger"> ${ price } </b>
                                            <del className="text-secondary"> ${ price } </del>
                                        </p>
                                    </div>
                                    { /* Body - End */}

                                </div>
                                { /* Card - End */}

                            </a>

                        </div>
                    );
                })
            }

        </section>
        );
}
