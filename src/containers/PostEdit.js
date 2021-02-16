// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// uuid for Unique Ids 
// Components
import LoaderButton from "../components/LoaderButton";
import img1 from "../img/imo1.JPG";
import img2 from "../img/imo2.JPG";
import img3 from "../img/imo3.JPG";

// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostEdit() {

    // Important variables
    const { id } = useParams();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Post Description
    const [postStatus, setPostStatus] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postType, setPostType ] = useState("");
    const [postColor, setPostColor] = useState("");
    const [postSize, setPostSize] = useState("");
    const [postPrice, setPostPrice] = useState(10);
    const [postQuantity, setPostQuantity] = useState(10); 
    const [postDescription, setPostDescription] = useState("");
    const [postGender, setPostGender] = useState("");
    // Seller Information
    const [userId, setUserId] = useState("");
    const [sellerFirstName, setSellerFirstName] = useState("");
    const [sellerLastName, setSellerLastName] = useState("");
    // display the image
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    // Retreiving data from database
    useEffect(() => {

        // Cleanup variable
        let unmounted = false;

        async function onLoad() {

            try {

                if (!unmounted) {

                    // Important variables
                    // Post Description
                    setPostStatus("sold");
                    setPostTitle("fiberabbit pullover");
                    setPostType("shirt");
                    setPostColor("black");
                    setPostSize("m");
                    setPostPrice(1000);
                    setPostQuantity(99);
                    setPostDescription("Best pullover!");
                    setPostGender(postGender);
                    // Seller Information
                    setUserId("0000001");
                    setSellerLastName("musa");
                    setSellerFirstName("gradi");
                    // Images
                    setImage1(null);
                    setImage2(null);
                    setImage3(null);
                    setImage4(null);
                    setImage5(null);
                }

            } catch (e) {
                if (!unmounted) {
                    alert(e);
                }
            }
        }

        // Returning onLoad Function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true; 
        };

    }, [id]);

    // Validation and Loading
    function validateForm() {
        return (
            postPrice > 0 &&
            postDescription.length > 0
        );
    }

    // Handling Submitted Form
    async function handleSubmit(event) {

        event.preventDefault();

        setIsLoading(true);

        try {

            // Redirect us to dashboard after update is complete
            window.location.href = `/dashboard`;

        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    // Handling Delete Post
    async function handleDelete(event) {
        event.preventDefault();

        // Confirmation alert
        const confirmed = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        try {

            // Redirecting to dashboard
            window.location.href = `/dashboard`;

        } catch (e) {
            alert(e);
            setIsDeleting(false);
        }
    }


    // Returing UI
    return (
        <main id="PostEdit" className="container-fluid border-top border-bottom pb-5 p-0">

            { /* Header - block & props - Start */}
            <Header id={id}/>
            { /* Header - block & props - End */}

            { /* Images - block & props - Start */}
            <div className="container row mx-auto p-0">
                <Images
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    image4={image4}
                    image5={image5} 
                    userId={userId}
                />
            </div>
            { /* Images - block & props - End */}

            { /* Post info & Post preview - block & props - Start */}
            <div className="container row mx-auto p-0">

                { /* Post Info - RIGHT Section - Start */}
                <PostInfo
                     
                    // Important variable
                    isLoading={isLoading}
                    isDeleting={isDeleting}
                    handleSubmit={handleSubmit}
                    handleDelete={handleDelete}
                    validateForm={validateForm}
                    // Post Description
                    postStatus={postStatus} setPostStatus={setPostStatus}
                    postTitle={postTitle} setPostTitle={setPostTitle}
                    postType={postType} setPostType={setPostType}
                    postColor={postColor} setPostColor={setPostColor}
                    postSize={postSize} setPostSize={setPostSize}
                    postPrice={postPrice} setPostPrice={setPostPrice}
                    postQuantity={postQuantity} setPostQuantity={setPostQuantity}
                    postDescription={postDescription} setPostDescription={setPostDescription}
                    postGender={postGender} setPostGender={setPostGender}
                    // Seller Information 
                    sellerFirstName={sellerFirstName}
                    sellerLastName={sellerLastName}

                /> 
                { /* Post Info - RIGHT Section - End */}

                { /* Post Preview - LEFT Section - Start */}
                <Preview
                    image1={image1} 
                    userId={userId}
                    postTitle={postTitle}
                    postType={postType}
                    postPrice={postPrice}
                    postStatus={postStatus}
                />
                { /* Post Preview - LEFT Section - End */}

            </div>
            { /* Post info & Post preview - block & props - End */}

        </main>
    );
}

// Header
function Header({id}) {

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 mb-3 text-center bg-light">

            {/* Heading */}
            <h1>Edit Post</h1>

            {/* Button */}
            <Link to="/dashboard" className="btn btn-primary"><i className="fa fa-reply"></i> Dashboard</Link>

            {/* Id */}
            <p className="text-secondary p-2 m-2">Id: <small>{id}</small></p>

        </header>
    );
}

// Image function
function Images(props) {

    return (
        <div className="row mx-auto justify-content-center ">

            { /* Image1 - Start */}
            <div className="col-sm image-container p-0"> 

                <div className="card">
                    <img src={img1} /> 
                </div>
                
            </div>
            { /* Image1 - End */}
              
            { /* Image2 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={img2} />
                </div>

            </div>
            { /* Image2 - End */}
             
            { /* Image3 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={img3} />
                </div>

            </div>
            { /* Image3 - End */}
              
            { /* Image4 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={img1} />
                </div>

            </div>
            { /* Image4 - End */}
             
            { /* Image5 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={img2} />
                </div>

            </div>
            { /* Image5 - End */}

        </div>
    );
}

// Post Information
function PostInfo(props) {

    // Important variables
    const {

        isLoading,
        handleDelete,
        handleSubmit,
        isDeleting,
        validateForm,
        // Post Description
        postStatus, setPostStatus,
        postTitle, setPostTitle, 
        postType, setPostType, 
        postColor, setPostColor, 
        postSize, setPostSize, 
        postPrice, setPostPrice,
        postQuantity, setPostQuantity,
        postDescription, setPostDescription,
        postGender, setPostGender,
        // Seller Information 
        sellerFirstName,
        sellerLastName,

    } = props;

    // Return UI
    return (
        <div className="col-sm-7 mt-3">

            { /* Seller, Description, & Information - Start */}
            <div className="row">

                { /* Seller & Description - Start */}
                <div className="col-sm-6 m-0">

                    { /* Seller - Start */}
                    <div className="border p-3 mb-3 shadow-sm ">

                        { /* Heading */}
                        <h3 className="mb-4">Seller</h3>

                        { /* Seller's Name - Start */}
                        <div className="form-group">
                            <label htmlFor="publisherName" className="color-red">Seller</label>
                            <input
                                form="form"
                                type="text"
                                disabled="disabled"
                                className="form-control"
                                value={sellerFirstName + " " + sellerLastName}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Your name can't be changed</small>
                        </div>
                        { /* Seller's Name - End */}

                    </div>
                    { /* Seller - End */}

                    { /* Description - Start */}
                    <div className="border p-3 mb-3 shadow-sm ">

                        { /* Heading */}
                        <h3 className="mb-4">Description</h3>

                        { /* Color - Start */}
                        <div className="form-group">
                            <label htmlFor="postColor" className="color-red">Color</label>
                            <input
                                form="form"
                                type="text"
                                id="postColor"
                                required="required"
                                name="postColor"
                                value={postColor}
                                placeholder="color"
                                className="form-control"
                                onChange={e => setPostColor(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Type Item color</small>

                        </div>
                        { /* Color - End */}

                        { /* Type - Start */}
                        <div className="form-group ">
                            <label htmlFor="postType" className="color-red">Type</label>
                            <select
                                form="form"
                                id="postType"
                                name="postType"
                                value={postType}
                                required="required"
                                className="form-control"
                                onChange={e => setPostType(e.target.value)}
                            >
                                <option value="">Select Item Type</option>
                                <option value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                                <option value="hat">Hat</option>
                                <option value="short">Short</option>
                                <option value="shoe">Shoe</option>
                            </select>
                            <small className="text-secondary">Choose Item type</small>

                        </div>
                        { /* Type - End */} 

                        { /* Size - Start */}
                        <div className="form-group ">
                            <label htmlFor="postSize" className="color-red">Size</label>
                            <select
                                form="form"
                                id="postSize"
                                name="postSize"
                                value={postSize}
                                required="required"
                                className="form-control"
                                onChange={e => setPostSize(e.target.value)}
                            >
                                <option value="">Select Size</option>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                            <small className="text-secondary">Select Size</small>

                        </div>
                        { /* Size - End */}

                    </div>
                    { /* Description - End */}

                </div>
                { /* Seller & Description - End */}

                { /* Information - Start */}
                <div className="col-sm-6 m-0">

                    { /* Information - Start */}
                    <div className="border p-3 mb-3 bg-white shadow-sm">

                        { /* Heading */}
                        <h3 className="mb-4">Information</h3>

                        { /* Title - Start */}
                        <div className="form-group">
                            <label htmlFor="postTitle" className="color-red">Title</label>
                            <input
                                form="form"
                                type="text"
                                id="postTitle"
                                required="required"
                                name="postTitle"
                                value={postTitle}
                                placeholder="title / name"
                                className="form-control"
                                onChange={e => setPostTitle(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Type Item name</small>

                        </div>
                        { /* Title - End */}

                        { /* Status - Start */}
                        <div className="form-group">
                            <label htmlFor="postStatus" className="color-red">Status</label>
                            <select
                                form="form"
                                id="postStatus"
                                name="postStatus"
                                value={postStatus}
                                required="required"
                                className="form-control"
                                onChange={e => setPostStatus(e.target.value)}
                            >
                                <option value="">Select a Status</option>
                                <option value="pending">Pending </option>
                                <option value="active">Active</option>
                                <option value="sold">Sold</option>
                            </select>
                            <small className="text-secondary">Select post Status</small>

                        </div>
                        { /* Status - End */}

                        { /* Gender - Start */}
                        <div className="form-group">
                            <label htmlFor="postGender" className="color-red">Gender</label>
                            <select
                                form="form"
                                id="postGender"
                                name="postGender"
                                value={postGender}
                                required="required"
                                className="form-control"
                                onChange={e => setPostGender(e.target.value)}
                            >
                                <option value="">Select a Gender</option>
                                <option value="men">Men </option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                                <option value="all">All</option>
                            </select>
                            <small className="text-secondary">Select a gender</small>

                        </div>
                        { /* Gender - End */}

                        { /* Price - Start */}
                        <div className="form-group">
                            <label htmlFor="postPrice" className="color-red">Price</label>
                            <input
                                form="form"
                                type="number"
                                id="postPrice"
                                name="postPrice"
                                value={postPrice}
                                placeholder="price"
                                className="form-control"
                                onChange={e => setPostPrice(e.target.value)}
                            />
                            <small className="text-secondary">Enter the item's price </small>
                        </div>
                        { /* Price - Start */}

                        { /* Quantity - Start */}
                        <div className="form-group">
                            <label htmlFor="postQuantity" className="color-red">Quantity</label>
                            <input
                                form="form"
                                type="number"
                                id="postQuantity"
                                name="postQuantity"
                                value={postQuantity}
                                placeholder="quantity available"
                                className="form-control"
                                onChange={e => setPostQuantity(e.target.value)}
                            />
                            <small className="text-secondary">Enter the quantity </small>
                        </div>
                        { /* Quantity - End */}

                    </div>
                    { /* Information - End */}

                </div>
                { /* Information - End */}

            </div>
            { /* Seller, Description, & Information - Start */}

            { /* form, Post Description, Submit Button - Start */}
            <div className="col-sm-12 m-0">
                <form onSubmit={handleSubmit} id="form">

                    { /* Post Description - Start */}
                    <div className="form-group">
                        <label htmlFor="comment" className="color-red">Description</label>
                        <textarea
                            rows="5"
                            required="required"
                            id="postDescription"
                            name="postDescription"
                            value={postDescription}
                            className="form-control"
                            placeholder="Some description"
                            onChange={e => setPostDescription(e.target.value)}
                        ></textarea>
                    </div>
                    { /* Post Description - End */}

                    { /* Submit Button - Start */}
                    <LoaderButton
                        type="submit"
                        isLoading={isLoading}
                        className="btn-primary"
                        disabled={!validateForm()}
                    >
                        Update
                    </LoaderButton>
                    { /* Submit Button - End */}

                    {/* Delete Button - Start */}
                    <LoaderButton
                        onClick={handleDelete}
                        isLoading={isDeleting}
                        className="btn btn-danger ml-3"
                    >
                        Delete
                    </LoaderButton>
                    {/* Delete Button - End */}

                </form>
            </div>
            { /* form, Post Description, Submit Button - End */}

        </div>
    );
}

// Preview 
function Preview(props) {

    // Important variables
    const {

        image1,
        postTitle,
        postStatus,
        postPrice,
        postType,

    } = props;

    // Return UI
    return (
        <div className="col-sm bg-light border mt-3 py-3">
            <article className="shadow rounded bg-white" style={{ position: "sticky", top: "0" }}>

                { /* Card - Start */}
                <div className="card border-0 text-center w-100">

                    { /* Image - Start */}
                    <img src={img1}/>
                    { /* Image - End */}

                    { /* Overlay - Start */}
                    <div className="card-img-overlay">
                        <div className="overlay-top">
                            <span className="badge badge-info rounded float-left"> {postStatus} </span>
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
                        <p className="m-0 text-dark" style={{ fontSize: "1.3rem" }}><small>{postTitle}</small></p>
                        <p>
                            <b className="text-danger"> ${postPrice} </b>
                            <del className="text-secondary"> ${postPrice} </del>
                        </p>
                    </div>
                    { /* Body - End */}

                </div>
                { /* Card - End */}

            </article>
        </div>
    );
}