const envVariables = {
  MAX_NUMBER_PAGES: process.env.MAX_NUMBER_PAGES || 80,
  EGOV_LOCALISATION_HOST:
    process.env.EGOV_LOCALISATION_HOST || "http://egov-localization:8087",
  EGOV_FILESTORE_SERVICE_HOST:
    process.env.EGOV_FILESTORE_SERVICE_HOST || "http://egov-filestore:8060",
  SERVER_PORT: process.env.SERVER_PORT || 9100,

  KAFKA_BROKER_HOST: process.env.KAFKA_BROKER_HOST || "kafka:9092",
  KAFKA_CREATE_JOB_TOPIC:
    process.env.KAFKA_CREATE_JOB_TOPIC || "PDF_GEN_CREATE",
  KAFKA_RECEIVE_CREATE_JOB_TOPIC:
    process.env.KAFKA_RECEIVE_CREATE_JOB_TOPIC || "PDF_GEN_RECEIVE",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_HOST: process.env.DB_HOST || "postgres",
  DB_NAME: process.env.DB_NAME || "devdb",
  DB_PORT: process.env.DB_PORT || 5432,
  DEFAULT_LOCALISATION_LOCALE:
    process.env.DEFAULT_LOCALISATION_LOCALE || "en_IN",
    DEFAULT_LOCALISATION_TENANT:
    process.env.DEFAULT_LOCALISATION_TENANT || "up",
    DATA_CONFIG_URLS: "https://raw.githubusercontent.com/Transerve-PwC/rainmaker-customisation/UP-MODIFICATIONS/configs/pdf-service/data-config/consolidatedreceipt.json",
    FORMAT_CONFIG_URLS:"https://raw.githubusercontent.com/Transerve-PwC/rainmaker-customisation/UP-MODIFICATIONS/configs/pdf-service/format-config/consolidatedreceipt.json"
};
export default envVariables;
