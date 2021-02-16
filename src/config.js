// This file is exported to src/index.js
// **** NOTE **** FOR SECURITY REASONS -- Put variable in a .env (file) --
// ------ Communication with Backend / API

// Development Configuration from AWS
const dev = {
    s3: {
        REGION: "", 
        ATTACHEMENTS_BUCKET_NAME: ""
    },
    apiGateway: {
        REGION: "",
        SERVICE_ENDPOINT: ""
    },
    cognito: {
        REGION: "",
        USER_POOL_ID: "",
        USER_POOL_CLIENT_ID: "",
        IDENTITY_POOL_ID: ""
    }
};

// Production Configuration from AWS
const prod = {
    s3: {
        REGION: "",
        ATTACHEMENTS_BUCKET_NAME: ""
    },
    apiGateway: {
        REGION: "",
        SERVICE_ENDPOINT: ""
    },
    cognito: {
        REGION: "",
        USER_POOL_ID: "",
        USER_POOL_CLIENT_ID: "",
        IDENTITY_POOL_ID: ""
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 1000000,
    ...config
};