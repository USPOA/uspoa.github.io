function params() {
  const params = new URLSearchParams(window.location.search);
  const ret = {};
  for (const [key, value] of params.entries()) {
    ret[key]=value
  }
  return ret
}
