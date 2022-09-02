function removeHttp(url) {
  return url.replace(/^https?:\/\//, "").replace(/^www./, "");
}

export default removeHttp;
