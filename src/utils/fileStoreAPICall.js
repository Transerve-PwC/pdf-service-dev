import request from "request";
import fs from "fs";
import path from "path";
import get from "lodash/get";
import axios, { post } from "axios";
var FormData = require("form-data");
import envVariables from "../EnvironmentVariables";

let egovFileHost = envVariables.EGOV_FILESTORE_SERVICE_HOST;

export const fileStoreAPICall = async function(filename, tenantId, fileData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, "test.pdf"), fileData, function(err) {
      if(err) {
          return reject(err);
      }
      console.log("Successfully wrote to local pdf", path.join(__dirname, "test.pdf"));
      resolve();
    });
  });
};

/**
 *
 * @param {*} filename -name of localy stored temporary file
 * @param {*} tenantId - tenantID
 */
export const _fileStoreAPICall = async function(filename, tenantId, fileData) {
  var url = `${egovFileHost}/filestore/v1/files?tenantId=${tenantId}&module=pdfgen&tag=00040-2017-QR`;
  var form = new FormData();
  form.append("file", fileData, {
    filename: filename,
    contentType: "application/pdf"
  });
  let response = await axios.post(url, form, {
    headers: {
      ...form.getHeaders()
    }
  });
  return get(response.data, "files[0].fileStoreId");
};
