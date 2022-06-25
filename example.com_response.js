// Use node version 18 to use native fetch
fetch('https://example.com')
  .then((response) => response.text())
  .then((text) => {
    console.log(text)
  })
