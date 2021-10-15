const pinataSDK = require("@pinata/sdk");

const apiSecretKey =
  "18cd3b4bc92e09b7d60bc5f191b5c594b7bfaf6df1f8a2d04235427d06ef9319";
const apiKey = "5a97d6c8038741f5a6c4";
const pinata = pinataSDK(apiKey, apiSecretKey);

const CreateSection = () => {
  pinata
    .testAuthentication()
    .then((result) => {
      const body = {
        name: "",
        description: "",
        imageUrl: "",
      };

      pinata
        .pinJSONToIPFS(body)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default CreateSection;
