// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Amplify required
import { API } from "aws-amplify";
import { S3Image } from 'aws-amplify-react'; 
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Dashboard.css";
import { data as dummyPosts } from "../DummyData/data"

// -------------- Application Begins Bellow ------------ //

// Main Application
export default function Dashboard() {

    // Important variables 
    const { isAuthenticated, userId, userEmail, userFirstName, signedupDate, userLastName} = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

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

        // Return onLoad function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true;
            setPosts([]);
        };

    }, [isAuthenticated]);

    // Return UI
    return (
        <main id="Dashboard" className="border-bottom">

            {/* Header - Start */}
            <Header
                userId={userId}
                userEmail={userEmail}
                userFirstName={userFirstName}
                signedupDate={signedupDate}
                userLastName={userLastName}
                posts={dummyPosts}
            /> 
            {/* Header - End */}

            {/* Posts - Start */}
            <Posts isLoading={isLoading} /> 
            {/* Posts - End */}

        </main>
    );
}

// Header
function Header(props) {

    // Important variables 
    const { userId, userEmail, userFirstName, userLastName, posts } = props

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 bg-light">
            <div className="row justify-content-center align-items-center">

                <div className="col-sm-3 text-center">
                    { /* Heading */ }
                    <h1>Dashboard </h1>

                    { /* Button */ }
                    <Link to="/postnew" className="btn btn-warning"> + NEW POST <i className="fa fa-share"></i></Link> 
                </div>

                { /* User Information - Start */ }
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-light">User Id: {userId} </li>
                        <li className="list-group-item bg-light">Post Count: { posts.length}</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-light">First Name: {userFirstName} </li> 
                        <li className="list-group-item bg-light">Last Name: {userLastName}</li>
                        <li className="list-group-item bg-light">Email: {userEmail}</li>
                    </ul>
                </div>
                { /* User Information - End */}

            </div>
        </header>
        );
}

// User Posts Function
function Posts({ isLoading }) {

    // Return UI
    return (
        <div className="container row mx-auto py-5">

            {/* Posts - Start */}
            {!isLoading ?

                // Display after we have loaded our data
                dummyPosts.map((post, i) => {


                    // Important variables
                    const { imageA } = post.images;
                    const { userId, postStatus, postTitle, postId } = post;
                    const convertDate = new Date(post.createdAt);
                    const postedOn = convertDate.toDateString();
                    const price = Number(post.postPrice).toLocaleString();

                    // Return UI
                    return (
                        <div className="col-sm-6 col-lg-4 text-center p-2" key={i++}>

                            <div className="card shadow-sm">

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
                            <div class="btn-group my-2">
                                <a href={`/postedit/${postId}`} role="button" class="btn btn-warning">Edit</a>
                                <a href={`/view/${postId}`} role="button" class="btn btn-info">View</a>
                                <button type="button" class="btn btn-light disabled">{postedOn} </button>
                            </div>

                        </div>
                    );
                })
                    :
                // Display while Loading data
                "Loading"
            } 
            {/* Posts - End */}
            
        </div>
        );
} 