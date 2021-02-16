// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react"; 
// Getting - user status (user login - true or false) - from useAppContext
import { useAppContext } from "../libs/contextLib"; 
// Dummy Images 
import img1 from "../img/imgmain.jpg";
import img2 from "../img/imgmain8.JPG";
import img8 from "../img/imgmain4.JPG";
import img10 from "../img/dufler.png"; 
// CSS
import "../css/Home.css";
// Dummy data
import { data as dummyPosts } from "../DummyData/data";
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function Home() { 

    // Important variables
    const [search, setSearch] = useState("");
    const { isAuthenticated } = useAppContext();
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

        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true;
            setPosts([]);
        };

    }, [isAuthenticated]); 

    // Return UI
    return (
        <main id="Home" className="border-bottom"> 

            <Header handleSearch={handleSearch} setSearch={setSearch} search={search} />

            <SectionA />

            <SectionB posts={dummyPosts} isLoading={isLoading} />

            <SectionC/>
            
        </main>
        );
}

// Header & Search field block
function Header(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (

        <header  id="Header" className="container-fluid row m-0 p-0">

            {/* Background Image - Start */}
            <div className="col-sm-4 align-self-center text-center text-white 100vh mt-5" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPositionY: "center", backgroundPositionX: "center", height: "100vh" }}> 

            </div>
            {/* Background Image - End */}

            {/* Div - Start */}
            <div className="col-sm-4 align-self-center text-center py-5">

                <h1> New Arrivals </h1>

                <p>Get ready for winter time.</p>

                <button type="button" class="btn rounded-0 mb-5">Men</button>
                <button type="button" class="btn rounded-0 ml-3 mb-5">Women</button>
                <button type="button" class="btn rounded-0 ml-3 mb-5">Kids</button>


                { /* Search field block - Start */}
                <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
                { /* Search field block - End */}

            </div>
            {/* Div - End */}

            {/* Background Image - Start */}
            <div className="col-sm-4 align-self-center text-center text-white" style={{ backgroundImage: `url(${img2})`, height: "calc(100vh - 100px)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPositionX: "center"}}>
            </div>
            {/* Background Image - End */}

        </header>
        );
}

// Search field
function Search(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <div className="display-large nav-item">

            { /* Form - Start */}
            <form onSubmit={handleSearch}>
                <div className="input-group input-group-lg">

                    { /* Input - Start */}
                    <input
                        id="search"
                        type="search"
                        name="search"
                        value={search}
                        placeholder="search"
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
function SectionA() {

    // Return UI
    return (
        <section id="SectionA" className="container-fluid row py-5 bg-white m-0">

            {/* Heading - Start */}
            <div className="col-sm-4 align-self-center">
                <h2><small>INTRODUCING</small></h2>
                <h3 style={{ fontSize:"3.2rem" }}>FIERCE NIGHT</h3>
                <h2><small>FIBERABBIT SIGNATURE 30-INCH WORK DUFFLE BAG</small></h2>
                <button type="button" class="btn btn-outline-light rounded-0 mt-4">COMMING SOON</button>

            </div>
            {/* Heading - End */}

            {/* Image - End */}
            <div className="col-sm-6 align-self-center py-2">
                <img className="rounded shadow-lg" src={img10} />
            </div>
            {/* Image - End */}

        </section>
        );
}

function SectionB({ posts, isLoading }) {
    return (
        <section id="SectionB" className="container-fluid row m-0 mb-3">
            <header className="col-sm-12 my-5">
                <h2> New Arrivals</h2>
            </header>

            {/* Posts - Start */}
            {!isLoading ?

                // Display after we have loaded our data
                posts.map((post, i) => {


                    // Important variables
                    const { imageA } = post.images;
                    const { userId, postStatus, postTitle, postId } = post; 
                    const price = Number(post.postPrice).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-sm-6 col-md-3  p-2" key={i++}>

                            <a href={ `/view/${postId}`}>
                                <div className="card text-center shadow-sm h-100">

                                    { /* Image - Start */}
                                    <img src={imageA} />
                                    { /* Image - End */}

                                    { /* Overlay - Start */}
                                    <div className="card-img-overlay">
                                        <div className="overlay-top">
                                            <span className="badge rounded float-left text-capitalize">{postStatus}</span>
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
            {/* Posts - End */}

            {/* Dummy Posts - Start */}
            {
                dummyPosts.slice(0,4).map((post, i) => {


                    // Important variables
                    const { imageA } = post.images;
                    const { postState } = post.address;
                    const { postId, userId, postStatus, postTitle } = post;
                    const convertDate = new Date(post.createdAt);
                    const postedOn = convertDate.toDateString();
                    const price = Number(post.postPrice).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={i++}>

                            <a href={ `/view/${postId}`}>
                                <div className="card text-center shadow-sm h-100">
                                    <img className="card-img-top p-3" src={imageA} alt={`Home ${imageA}`} />
                                    <div className="card-img-overlay">
                                        <div className="overlay-top">
                                            <span className="badge badge-info rounded float-left"> -25%</span>
                                        </div>
                                    </div>
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
                                            <b className="text-danger"> $3,550 </b>
                                            <del className="text-secondary"> $4,988 </del>
                                        </p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    );
                })
            }
            {/* Dummy Posts - End */}
        </section>
    );
}

function SectionC() {
    return (
        <section id="SectionC" className="container-fluid border-top border-bottom row bg-white m-0" >

            {/* Background Image - Start */}
            <div className="col-sm-5 100vh" style={{ backgroundImage: `url(${img8})`, height: "calc(100vh)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPositionY: "center" , backgroundPositionX: "center" }}>
            </div>
            {/* Background Image - End */}

            {/* Description - Start */}
            <div className="col-sm-5 align-self-center my-5">
                <h2><small>INTRODUCING</small></h2>
                <h3 style={{ fontSize: "3.2rem" }}>COAT SUMMET</h3>
                <h2><small>AN INVIGORATING NEW COAT WITH NOTES OF SENSUAL COTTON, SILK & BAMBOO</small></h2>
                <button type="button" class="btn btn-outline-dark rounded-0 mt-4">COMMING SOON</button>

            </div>
            {/* Description - End */}

        </section>
        );
}