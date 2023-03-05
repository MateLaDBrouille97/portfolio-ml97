import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const aws = require("aws-sdk");

const BlogItem = ({ item }) => {
  const [work, setWork] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [techno, setTechno] = useState([]);

  const [image, setImage] = useState();
  const s3 = new aws.S3();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const showWork = (work, index) => {
    setWork(work);
    setToggleState(index);
  };

  /* Fetch Image */
  aws.config.update({
    accessKeyId: "AKIAQK7EQ4DINBSQQM5L",
    secretAccessKey: "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",
  });

  useEffect(() => {
    const fetchImage = async () => {
      const params = {
        Bucket: "portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging",
        Key: item?.image,
      };
      await s3
        .getSignedUrlPromise("getObject", params)
        .then((i) => setImage(i));
      console.log(params);
    };
    fetchImage();
  }, [work]);

  //   useEffect(() => {
  //     setTechno(item?.technologies);
  //   }, [work]);

  //Date

  const [date, setDate] = useState("");
  useEffect(() => {
    const convertAwsDateToDate = (awsDate) => {
      const year = awsDate.substring(0, 4);
      const month = awsDate.substring(5, 7) - 1; // Subtract 1 since months are zero-indexed
      const day = awsDate.substring(8, 10);
      const newDate = new Date(year, month, day).toLocaleDateString();
      setDate(newDate);
    };
    convertAwsDateToDate(item?.createdAt);
  }, [item]);

  return (
    <div className="testimonial__container3">
      <div className="work__card2" key={item?.id}>
        <Image
          src={image}
          alt=""
          className="work__img2"
          width={500}
          height={500}
        />
        <h3 className="work__title2">{item?.title}</h3>
        <div className="info work__card-info">
          <div className="cat work__card-info-catdate">
            <a className="work__card-info-cat">
              {item?.category || "UnKnown"}
            </a>

            <a className="text-gray-600 hover:text-gray-800">
              {date || "UnKnown"}
            </a>
          </div>
          <p className="work__modal-description">{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
