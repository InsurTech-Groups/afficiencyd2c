
import { userData } from "./userData";
import $ from 'jquery';


export const ipAddress = () => {
  const apiKey = process.env.REACT_APP_IPAPI_KEY;
  const req = {
    async: true,
    crossDomain: true,
    method: 'GET',
    redirect: "follow",
    url: `https://ipapi.co/json/`,
  };
  $.ajax(req).done(function (res) {
    userData.zipCode = res.zipCode;
    userData.city = res.city;
    userData.state = res.region_code;
    userData.ipAddress = res.ip;
  });
};

export const oAuthTokenStart = () => {

  const url = "https://afficiency-live.whitetac.com/initAPP/oauth2/authorize";
  const url2 = "https://afficiency-live.whitetac.com/initAPP/oauth2/token";
  const url3 = "https://afficiency-live.whitetac.com/initSESSION";

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const provision_key = process.env.REACT_APP_PROVISION_KEY;
  const authenticated_userid = process.env.REACT_APP_AUTHENTICATED_USERID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;

  console.log({
    client_id,
    provision_key,
    authenticated_userid,
  });


  try {
    //Autohrize
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: client_id,
        response_type: "code",
        provision_key: provision_key,
        authenticated_userid: authenticated_userid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const redirect_uri = data.redirect_uri.toString();
        let params = new URL(redirect_uri).searchParams;
        const urlParams = new URLSearchParams(params);
        const code = urlParams.get('code');
        userData.code = code;

        fetch(url2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: "authorization_code",
            client_id: client_id,
            client_secret: client_secret,
            redirect_url: 'https://afficiency-live-qa.whitetac.com',
            code: userData.code
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            userData.refreshToken = data.refresh_token;
            userData.accessToken = data.access_token;
            userData.expiresIn = data.expires_in;
            fetch(url3, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userData.accessToken}`,
              },
              body: JSON.stringify({
                distributorId: userData.distributerID,
                productId: userData.productID,
                access_token: userData.accessToken,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                userData.arcID = data.arcId;
                userData.messageCode = data.messageCode;
                userData.messageText = data.messageText;

                console.log(userData);
              })
              .catch((err) => {
                console.log(err);

              });
          });


      });

  }
  catch (error) {
  }


};

//Get Quote Function
export const getQuote = async () => {

  const url = "https://afficiency-live.whitetac.com/getQuote";
  console.log(userData)

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      arcId: userData.arcID,
      distributorId: userData.distributerID,
      productId: userData.productID,
      gender: userData.gender,
      dob: userData.DOB,
      healthStatusRank: userData.healthStatus,
      state: userData.state,
      zip: userData.zipCode,
      ipAddress: userData.ip,
      term: "10",
      access_token: userData.accessToken,
      tobaccoUse: userData.tabacooTimeline,
  })
  })
    .then((response) => response.json())
    .then((data) => { 
      console.log(data)
    })


};