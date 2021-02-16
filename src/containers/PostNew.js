// This file is exported to ---> src/Routes.js
// React required
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import config from "../config";
// Components 
import LoaderButton from "../components/LoaderButton"; 
import { useFields } from "../libs/hooksLib";
import { useAppContext } from "../libs/contextLib";
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostNew() {

    // Important variables
    const { userFirstName, userLastName } = useAppContext();
    const [fields, handleFieldChange] = useFields({
        // Post Description
        postStatus: "",
        postTitle: "",
        postType: "", 
        postColor: "", 
        postSize: "", 
        postPrice: 1000, 
        postQuantity: 1000, 
        postDescription: "",
        postGender: "",
        // Seller Information
        sellerFirstName: "",
        sellerLastName: "",
        sellerPhoneNumber: 9090008888, 
    });

    // display the image
    const [image1, setImage1] = useState(null); 
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    // holds image from input
    const file1 = useRef(null);
    const file2 = useRef(null);
    const file3 = useRef(null);
    const file4 = useRef(null);
    const file5 = useRef(null);     

    // Validation and Loading 
    const [isLoading, setIsLoading] = useState(false);
    function validateForm() {
        return (
            fields.postPrice > 0 &&
            fields.postDescription.length > 0
        );
    }

    // Handling Uploaded Images
    function handleImage1(event) {
        // Getting the current file
        file1.current = event.target.files[0];
        // Setting up file to be seen image1
        setImage1(URL.createObjectURL(file1.current)); 
    }
    function handleImage2(event) {
        // Getting the current file 
        file2.current = event.target.files[0];
        // Setting up file to be seen image2 
        setImage2(file2.current != null ? URL.createObjectURL(file2.current) : null);
    }
    function handleImage3(event) {
        // Getting the current file 
        file3.current = event.target.files[0];
        // Setting up file to be seen image3
        setImage3(file3.current != null ? URL.createObjectURL(file3.current) : null);
    }
    function handleImage4(event) {
        // Getting the current file 
        file4.current = event.target.files[0];
        // Setting up file to be seen image4 
        setImage4(file4.current != null ? URL.createObjectURL(file4.current) : null);
    }
    function handleImage5(event) {
        // Getting the current file 
        file5.current = event.target.files[0];
        // Setting up file to be seen image5 
        setImage5(file5.current != null ? URL.createObjectURL(file5.current) : null);
    }

    // Handling Submitted Form
    async function handleSubmit(event) {
        event.preventDefault();

        // Checking the file's size
        if (file1.current && file1.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 1`
            );
            return;
        }
        if (file2.current && file2.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 2`
            );
            return;
        }
        if (file3.current && file3.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 3`
            );
            return;
        }
        if (file4.current && file4.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 4`
            );
            return;
        }
        if (file5.current && file5.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 5`
            );
            return;
        }

        setIsLoading(true);

        try {

            // Redirect us to dashboard after update is complete
            window.location.href = `/dashboard`;

        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    // Returing UI
    return ( 
        <main id="PostNew" className="container-fluid border-top border-bottom pb-5 p-0"> 

            { /* Header - block - Start */ }
            <Header />
            { /* Header - block - End */ }

            { /* Images - block & props - Start */ } 
            <Images
                image1={image1}
                image2={image2}
                image3={image3}
                image4={image4}
                image5={image5}
                handleImage1={handleImage1}
                handleImage2={handleImage2}
                handleImage3={handleImage3}
                handleImage4={handleImage4}
                handleImage5={handleImage5}
            /> 
            { /* Images - block & props - End */}

            { /* Post info & Post preview - block & props - Start */}
            <div className="container row mx-auto p-0">

                { /* Post Info - RIGHT Section - Start */}
                <PostInfo 
                    isLoading={isLoading}
                    handleSubmit={handleSubmit}
                    validateForm={validateForm}
                    userLastName={userLastName}
                    userFirstName={userFirstName}
                    handleFieldChange={handleFieldChange}
                    // Post Description
                    postStatus={fields.postStatus}
                    postTitle={fields.postTitle}
                    postType={fields.postType}
                    postColor={fields.postColor}
                    postSize={fields.postSize}
                    postPrice={fields.postPrice}
                    postQuantity={fields.postQuantity} 
                    postDescription={fields.postDescription} 
                    postGender={fields.postGender} 
                    // Seller Information
                    sellerLastName={fields.sellerLastName}
                    sellerFirstName={fields.sellerFirstName}
                    sellerPhoneNumber={fields.sellerPhoneNumber} 
                />
                { /* Post Info - RIGHT Section - End */}
                 
                { /* Post Preview - LEFT Section - Start */}
                <Preview
                    image1={image1}
                    postTitle={fields.postTitle}
                    postType={fields.postType}
                    postPrice={fields.postPrice}
                    postStatus={fields.postStatus} 
                />
                { /* Post Preview - LEFT Section - Start */}

            </div>
            { /* Post info & Post preview - block & props - End */}

        </main> 
    );
}

// Header
function Header() {

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 mb-3 text-center bg-light">

            {/* Heading */}
            <h1>Add New Post</h1>

            {/* Button */}
            <Link to="/dashboard" className="btn btn-primary"><i className="fa fa-reply"></i> Dashboard</Link>

        </header>
    );
}

// Image function
function Images(props) {

    // Important variables
    const {

        image1,
        image2,
        image3,
        image4,
        image5,
        handleImage1,
        handleImage2,
        handleImage3,
        handleImage4,
        handleImage5,

    } = props;

    // Return UI
    return (
        <div className="row mx-auto justify-content-center ">

            { /* Image1 - Start */}
            <div className="col-sm image-container mb-3">
                <div className="card">

                    { /* Image upload 1 */}
                    <img  src={image1 === null ? null : image1} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file1" className="color-red">Image 1</label>

                            { /* Input Field */}
                            <input
                                required="required"
                                form="form"
                                accept=".png, .jpg, .jpeg"
                                type="file"
                                name="file1"
                                id="file1"
                                onChange={handleImage1}
                            />
                        </div>
                    </div>
                </div>
            </div>
            { /* Image1 - End */}

            { /* Image2 - Start */}
            <div className="col-sm image-container mb-3">
                 
                <div className="card">

                    { /* Image upload 2 */}
                    <img src={image2 === null ? null : image2} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file2" className="color-red">Image 2</label>
                            <input
                                id="file2"
                                type="file"
                                name="file2"
                                form="form"
                                required="required"
                                onChange={handleImage2}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>

                </div>
            </div>
            { /* Image2 - End */}

            { /* Image3 - Start */}
            <div className="col-sm image-container mb-3">

                { /* CARD */}
                <div className="card">

                    { /* Image upload 3 */}
                    <img src={image3 === null ? null : image3} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file3" className="color-red">Image 3</label>
                            <input
                                id="file3"
                                form="form"
                                type="file"
                                name="file3"
                                required="required"
                                onChange={handleImage3}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            { /* Image3 - End */}

            { /* Image4 - Start */}
            <div className="col-sm image-container mb-3">

                <div className="card">

                    { /* Image upload 4 */}
                    <img src={image4 === null ? null : image4} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file4" className="color-red">Image 4</label>
                            <input
                                id="file4"
                                form="form"
                                type="file"
                                name="file4"
                                required="required"
                                onChange={handleImage4}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>

                </div>
            </div>
            { /* Image4 - End */}

            { /* Image5 - Start */}
            <div className="col-sm image-container mb-3"> 

                <div className="card">

                    { /* Image upload 5 */}
                    <img src={image5 === null ? null : image5} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file5" className="color-red">Image 5</label>
                            <input
                                id="file5"
                                form="form"
                                type="file"
                                name="file5"
                                required="required"
                                onChange={handleImage5}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>

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

        // Important variable
        isLoading,
        handleSubmit,
        validateForm,
        userLastName,
        userFirstName,
        handleFieldChange,
        // Post Description
        postStatus,
        postTitle,
        postType,
        postColor,
        postSize,
        postPrice,
        postQuantity,
        postDescription,
        postGender,

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

                        { /* Heading */ }
                        <h3 className="mb-4">Seller</h3>

                        { /* Seller's Name - Start */}
                        <div className="form-group">
                            <label htmlFor="publisherName" className="color-red">Seller</label>
                            <input
                                form="form"
                                type="text"
                                disabled="disabled"
                                className="form-control"
                                value={userFirstName + " " + userLastName}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Your name can't be changed</small>
                        </div>
                        { /* Seller's Name - End */}

                    </div>
                    { /* Seller - End */}

                    { /* Description - Start */}
                    <div className="border p-3 mb-3 shadow-sm ">

                        { /* Heading */ }
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                <div className="col-sm-6 m-0 ">

                    { /* Information - Start */}
                    <div className="border p-3 mb-3 bg-white shadow-sm">

                        { /* Heading */ }
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                            onChange={handleFieldChange}
                            placeholder="Some description"
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
                        Publish
                    </LoaderButton>
                    { /* Submit Button - End */}

                </form>
            </div>
            { /* form, Post Description, Submit Button - End */}

        </div> 
        );
}

// Preview
function Preview(props) {

    // Important variable
    const {

        image1, 
        postTitle,
        postPrice,
        postStatus,

    } = props;

    // Return UI
    return (
        <div className="col-sm bg-light border mt-3 py-3">
            <article className="shadow rounded bg-white" style={{ position: "sticky", top: "0" }}>
                <div className="card border-0 text-center w-100">

                    { /* Image - Start */}
                    <img
                        src={image1 === null ? null : image1}
                        style={{ minHeight: "250px" }}
                        className="w-100 bg-dark"
                    />
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
            </article>
        </div>
        
        );
}