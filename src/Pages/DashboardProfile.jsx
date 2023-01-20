import React from "react";
import { Box, Text, Image, Img, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { async } from "@firebase/util";
import { storage } from "../firebase-config";
import { v4 } from "uuid";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

const DashboardProfile = () => {
  const [edit, setEdit] = useState();
  const [profile, setProfile] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name}`);
    console.log(imageRef.name, "test");
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
    });
  };

  const imageListRef = ref(storage, "image/");

  //firebase data call
  const collectData = collection(db, "users");

  //Read Data
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((items) => {
        getDownloadURL(items).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
    // getDataUsers();
  }, []);

  return (
    <Box>
      <Box w={"100%"} h={"200"} bg={"gray.500"} align="center" py={"10"}>
        For Header Profile
      </Box>
      <Box>
        <Box borderRadius={"full"} align={"center"}>
          <Img
            w={"12em"}
            border={"4px"}
            borderColor={"gray.300"}
            borderRadius={"100%"}
            src="https://i.stack.imgur.com/4u01R.jpg?s=256&g=1"
            mt={"-10"}
          />
        </Box>
      </Box>
      <Box align={"center"} p={"10"}>
        {/* {profile.map((x) => ( */}
        <Box>
          <Input
            type={"file"}
            onChange={(event) => setImageUpload(event.target.files[0])}
          />
          <Button onClick={uploadImage}>Upload Image</Button>
          {imageList.map((url) => {
            return (
              <Box>
                <Img src={url} />
              </Box>
            );
          })}
          <Text>First Name :</Text>
          <Text>Last Name</Text>
          <Text>Email</Text>
          <Text>Phone</Text>
        </Box>
        {/* ))} */}
      </Box>
    </Box>
  );
};

export default DashboardProfile;
