## How it works

This service uses pdfmake npm module internally. There is a format config json that specifies the structure of the pdf and the styles of the content to be generated. This format config can have variables that can be used to store repeating values. 
The variables are mapped to incoming post request body in data config json.

This repository generates a pdf locally instead of uploading it to the filestore. The generated pdf can be found inside dist/utils folder with the name test.pdf

## Installation

```sh
npm install
```
## Dependencies

* egov-accesscontrol
* zuul
* egov-mdms-service
* egov-filestore
* egov-user
* egov-localization

## Run

```sh
SERVER_PORT=9100 EGOV_LOCALISATION_HOST='http://localhost:8087' EGOV_FILESTORE_SERVICE_HOST='http://localhost:8060' DATA_CONFIG_URLS='file:///Users/rajiv/Development/digit/github/rainmaker-customisation/configs/pdf-service/data-config/hello-world.json' FORMAT_CONFIG_URLS='file:///Users/rajiv/Development/digit/github/rainmaker-customisation/configs/pdf-service/format-config/hello-world.json' npm start
```

## Format Config
1. A sample format config can be found [here](https://github.com/Transerve-PwC/rainmaker-customisation/blob/feature/sample-pdf-configs/configs/pdf-service/format-config/hello-world.json)
2. A sample data config can be found [here](https://github.com/Transerve-PwC/rainmaker-customisation/blob/feature/sample-pdf-configs/configs/pdf-service/data-config/hello-world.json)
3. A sample postman collection can be found [here](https://www.getpostman.com/collections/02703af901e3e123644a)