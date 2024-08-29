import express from "express";
import { urlModel } from "../model/shortUrl.model";
import { nanoid } from "nanoid";

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("The fullUrl is ", req.body.fullUrl);
    let { fullUrl, shortUrl } = req.body;
    if (!shortUrl) {
      shortUrl = nanoid(10);
    }
    const urlFound = await urlModel.find({ fullUrl, shortUrl });
    if (urlFound.length > 0) {
      res.status(409).send(urlFound);
    } else {
      const createdUrl = await urlModel.create({ fullUrl, shortUrl });
      res.status(201).send(createdUrl);
    }
  } catch (error) {
    return res.status(500).send({ message: " Invernal server error." });
  }
};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrls = await urlModel.find().sort({ createdAt: -1 });
    if (shortUrls.length < 0) {
      res.status(404).send({ message: "Short Urls not found!" });
    } else {
      res.status(200).send(shortUrls);
    }
  } catch (error) {
    return res.status(500).send({ message: " Invernal server error." });
  }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
  try {
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
    if (!shortUrl) {
      res.status(404).send({ message: " Full Url not found!" });
    } else {
      shortUrl.clicks++;
      shortUrl.save();
      res.redirect(`${shortUrl.fullUrl}`);
    }
  } catch (error) {
    return res.status(500).send({ error: " Invernal server error." });
  }
};

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id });
    if (shortUrl) {
      res.status(200).send({ message: " URL deleted successfully!" });
    }
  } catch (error) {
    return res.status(500).send({ error: " Invernal server error." });
  }
};
