function getUserInfo(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("user data"), 3000);
  });
}

function showUserInfo(user) {
  return getUserInfo().then((info) => {
    console.log("user info", info);
    return true;
  });
}

function showSpinner() {
  console.log("Please wait......");
}

function timeout(delay, result) {
  return new Promise((resolve) => setTimeout(() => resolve(result), delay));
}

Promise.race([showUserInfo(), timeout(1000, "Timeout")]).then((display) => {
  console.log(display);
});
