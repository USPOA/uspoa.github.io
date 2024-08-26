function params() {
  const params = new URLSearchParams(window.location.search);

  return params.entries()||null
}
