const express = require("express");
import { Request, Response } from "express";
const spotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const uri = process.env.REDIRECT_URI;

app.listen(3000);

app.post("/login", (req: Request, res: Response) => {
  // get authorization code
  const code = req?.body?.code;

  const spotifyApi = new spotifyWebApi({
    redirectUri: uri,
    clientId: id,
    clientSecret: secret,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then(
      (data: {
        body: {
          access_token: string;
          refresh_token: string;
          expires_in: number;
        };
      }) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      }
    )
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/refresh", (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;

  const spotifyApi = new spotifyWebApi({
    redirectUri: uri,
    clientId: id,
    clientSecret: secret,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then(
      (data: {
        body: {
          access_token: string;
          expires_in: number;
        };
      }) => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        });
      }
    )
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(400);
    });
});
