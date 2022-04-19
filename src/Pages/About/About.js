import React from 'react';

const About = () => {
    return (
        <div className='p-5'>
            <div className='my-2'>
            <h1>authentication vs authorization</h1>
            <p>authentication means it will identify a user and validate who they actually 
                are . on the other hand authorization is the process that happens when the 
                identity of an user is successfuly authenticated or matched or recognized.
            </p>
            </div>
            <div className='my-2'>
            <h1>why are we using  firebase ?</h1>
            <p>
                firebase is a service that provides active backend as a service for building
                dynamic web and mobile app without having any backend experience . it's easy ,time efficiend and free . u can also host here .
                there are some other alternative of firebase like Okta , Keycloak , amazon cognito etc .
            </p>
            </div>
        </div>
    );
};

export default About;