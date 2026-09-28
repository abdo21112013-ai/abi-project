async function getApi() {
  let response = await fetch("");
  let data = await response.json();
  console.log(data);
}

getApi();
