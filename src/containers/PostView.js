// This file is exported to ---> src/Routes.js
// React required
import React, { useState } from "react";
import { useParams } from "react-router-dom"; 
// CSS
import "../css/PostView.css"; 
import { data as dummyPosts } from "../DummyData/data";
import img1 from "../img/imo2.JPG";
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostView() {

    // Important variables 
    const { id } = useParams();
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([
        {
            itemType: "",
            postStatus: "",
            postTitle: "",
            postType: "",
            postColor: "",
            postSize: "",
            postPrice: "",
            postQuantity: "",
            postDescription: "",
            postGender: "",
            seller: {
                id: "",
                firstName: "",
                lastName: "",
            },
            images: {
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                image5: null,
            },
            updatedAt: null,
            createdAt: null
        }
    ]);

    // Handling search
    async function handleSearch(event) {

        event.preventDefault();

        try {
            // if there is no data return "all" data
            window.location.href = `/department/${search === "" ? "all" : search.toLowerCase()}`;

        } catch (e) {
            alert(e);
        }
    }

    // Return UI
    return (
        <main id="PostView" className="bg-white border-bottom"> 

            { /* Header - Start */}
            <Header handleSearch={handleSearch} setSearch={setSearch} search={search} /> 
            { /* Header - End */}

            { /* Body - Start */}
            {!isLoading && post ?

                // Content after loading
                <div className="container row mx-auto py-5">

                    { /* Images - Start */}
                    <ImageDisplay post={dummyPosts[0]}/> 
                    { /* Images - End */}

                    { /* Description - Start */ }
                    <Description post={dummyPosts[0]} />   
                    { /* Description - End */}

                </div>

                : // else (:)

                // Loading with spinner
                <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
                    <span class="spinner-border" aria-label="spinner" role="img"></span>
                </div>
            }
            { /* Body - End */}
            
        </main>
        );
}

// Header & Filter
function Header(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <header id="Header" className="container-fluid row m-0 my-3 pb-3 text-right border-bottom ">

            { /* Search - Start */}
            <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
            { /* Search - End */}

        </header>
    );
}

// Search input field
function Search(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <div className="nav-item pr-3 ml-3">

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

function ImageDisplay({ post }) {

    // Important Variables 

    return (
        <div className="col-sm-6">
            <div className="row mx-auto">

                { /* Images - Start */ }
                <div className="col-sm-12">
                    <div class="tab-content">
                        <div class="tab-pane container active" id="image1">
                            <img src={img1} />
                        </div>
                        <div class="tab-pane container fade" id="image2">
                            <img src={img1} />
                        </div>
                        <div class="tab-pane container fade" id="image3">
                            <img src={img1} />
                        </div>
                        <div class="tab-pane container fade" id="image4">
                            <img src={img1} />
                        </div>
                        <div class="tab-pane container fade" id="image5">
                            <img src={img1} />
                        </div>
                    </div>
                </div>
                { /* Images - End */}

                { /* Pills - Start */ }
                <div className="col-sm-12 shadow-sm border rounded py-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item p-0" style={{ width: "20%" }}>
                            <a class="nav-link active p-0" data-toggle="pill" href="#image1">
                                <img src={img1} />
                            </a>
                        </li>
                        <li class="nav-item" style={{ width: "20%" }}>
                            <a class="nav-link p-0" data-toggle="pill" href="#image2">
                                <img src={img1} />
                            </a>
                        </li>
                        <li class="nav-item" style={{ width: "20%" }}>
                            <a class="nav-link p-0" data-toggle="pill" href="#image3">
                                <img src={img1} />
                            </a>
                        </li>
                        <li class="nav-item" style={{ width: "20%" }}>
                            <a class="nav-link p-0" data-toggle="pill" href="#image4">
                                <img src={img1} />
                            </a>
                        </li>
                        <li class="nav-item p-0" style={{ width: "20%" }}>
                            <a class="nav-link p-0" data-toggle="pill" href="#image5">
                                <img src={img1} />
                            </a>
                        </li>
                    </ul>
                </div>
                { /* Pills - End */}

            </div>
        </div>
        );
}

// Other sections
function Description({ post }) {

    // Important variables 
    const { postStatus, postTitle, postType, postColor, postSize, postPrice, postQuantity, postDescription, postGender } = post;
    const price = Number(postPrice).toLocaleString();

    // Return UI
    return (
        <section className="col-sm-6">

            <div className="row">
                <div className="col-sm-12 p-0 m-0">

                    { /* Title */ }
                    <h1 className="text-capitalize text-secondary"><small>{postTitle} </small></h1>

                    { /* Price */ }
                    <h2><b>${price}</b></h2> 

                    { /* List - Start */ }
                    <ul class="list-group list-group-flush border-top border-bottom mb-2">

                        { /* Color, Size, Gender - Start */ }
                        <li class="list-group-item p-0">
                            <ul class="list-group list-group-horizontal">

                                <li class="list-group-item list-group-item-danger my-2 rounded border-0">
                                    <h3><small>Item</small></h3>
                                    <p className="text-capitalize m-0">Code</p>
                                </li>

                                <li class="list-group-item rounded-0 border-0">
                                    <h3><small>Color</small></h3>
                                    <p className="text-capitalize m-0">black</p>
                                </li>

                                <li class="list-group-item border-0">
                                    <h3><small>Size</small></h3>
                                    <p className="text-capitalize m-0">m</p>
                                </li>

                                <li class="list-group-item border-0">
                                    <h3><small>Gender</small></h3>
                                    <p className="text-capitalize m-0">men</p>
                                </li> 

                            </ul>
                        </li>
                        { /* Color, Size, Gender - End */ }

                        { /* Status, Quantity, Type - Start */ }
                        <li class="list-group-item p-0">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item list-group-item-success my-2 rounded border-0">
                                    <h3><small>Status</small></h3>
                                    <p className="text-capitalize m-0">available</p>
                                </li>
                                <li class="list-group-item list-group-item-warning m-2 rounded border-0">
                                    <h3><small>Quantity</small></h3>
                                    <p className="text-capitalize m-0">1,000</p>
                                </li>
                                <li class="list-group-item list-group-item-primary my-2 rounded border-0">
                                    <h3><small>Type</small></h3>
                                    <p className="text-capitalize m-0">Pull</p>
                                </li>
                            </ul>                            
                        </li>
                        { /* Status, Quantity, Type - End */ }

                    </ul> 
                    { /* List - End */}

                </div> 

                { /* Details - Start */ }
                <div className="col-sm-12 bg-light border">
                    <h3><small>Details</small></h3>
                    <p className="text-capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. In hac habitasse platea dictumst quisque sagittis. Donec enim diam vulputate ut pharetra sit amet. </p>
                </div>
                { /* Details - End */}

                { /* Tags - Start */ }
                <div className="col-sm-12 list-group-item-info rounded shadow-sm mt-4">
                    <h3><small>Tags</small></h3>
                    <p className="text-capitalize"> m, black, men, pull</p>
                </div>
                { /* Tags - End */ }

            </div>

        </section>
        );
} 