/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure } from "@codegenie/serverless-express";
import { ALBEvent, Context } from "aws-lambda";
import { Express } from "express";
import "source-map-support/register";
import { bootstrap } from "./express.js";
import { root } from "./root.js";

const _stringifyHeaders = async (response: any) => {
  try {
    const headers = response?.headers;
    console.log("response headers ", headers);
    const isHeaderNeedToBeTransformed = headers && Object.keys(headers).length;
    if (!isHeaderNeedToBeTransformed) {
      return response;
    }
    Object.keys(headers).forEach(
      (key) => (headers[key] = headers[key].toString())
    );
    return response;
  } catch (error) {
    console.error("STRINGIFY FUNCTION ERROR", error);
  }
};

const startServer = async (event: ALBEvent, context: Context, app: Express, eventSource?: any) => {
  try {
    const server = configure({ app, eventSource });
    const response = await server(event, context);

    return await _stringifyHeaders(response);
  } catch (e) {
    console.log("bootstrap function log error");
    console.log(e);
  }
};

exports.handler = async (event: ALBEvent, context: Context) => {
  const sirv = (await import("sirv")).default;
  sirv(`${root}/dist/client`);

  const app = await bootstrap([sirv(`${root}/dist/client`)]);
  return await startServer(event, context, app);
};
