const Countly = require("countly-sdk-web");

const COUNTLY_API_KEY = "70907494988ecdd1093133ed565f5bdf61f96f34";
let countlyLoaded = false;

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (!countlyLoaded) {
    Countly.init({
      app_key: COUNTLY_API_KEY,
      debug: true,
      device_id: "12345",
      url: "https://wire.count.ly",
    });
    countlyLoaded = true;
  }

  Countly.track_pageview(location.pathname);
};
