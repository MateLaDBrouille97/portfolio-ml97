import  '../styles/globals.css';
import  "../styles/about.css";
import  "../styles/header.css";
import  "../styles/home.css";
import  "../styles/footer.css";
import  "../styles/contact.css";
import  "../styles/qualification.css";
import  "../styles/scrollup.css";
import  "../styles/services.css";
import  "../styles/skills.css";
import  "../styles/testimonials.css";
import  "../styles/work.css";
import React from 'react';

import AWS from 'aws-sdk';

export async function getStaticProps(context) {
  // Retrieve the value of the environment variable
  const apiKey = process.env.AMPLIFY_API_KEY;

  // Use the AWS SDK to access data from AWS Amplify
  const amplify = new AWS.Amplify({ apiKey });
  const data = await amplify.getData();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp






