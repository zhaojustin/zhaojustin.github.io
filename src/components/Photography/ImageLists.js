export function getImageList(album) {
  if (album == "cali") {
    return caliImages;
  }
  if (album == "nyc") {
    return nycImages;
  }
  if (album == "hawaii") {
    return hawaiiImages;
  }
  if (album == "friends") {
    return friendsImages;
  }
  if (album == "film") {
    return filmImages;
  }
}

/*

to change:
1) change for loop length
2) make sure the name matches convention of 'album'+'number'+'.jpg'
3) that's it

*/

//nyc
const nycImages = [];
for (let i = 1; i <= 24; i++) {
  nycImages.push({
    img: require("./albums/nyc/nyc" + i + ".jpg"),
    title: "nyc" + i,
  });
}

//cali
const caliImages = [];
for (let i = 1; i <= 12; i++) {
  caliImages.push({
    img: require("./albums/cali/cali" + i + ".jpg"),
    title: "cali" + i,
  });
}

//friends
const friendsImages = [];
for (let i = 1; i <= 17; i++) {
  friendsImages.push({
    img: require("./albums/friends/friends" + i + ".jpg"),
    title: "friends" + i,
  });
}

//hawaii
const hawaiiImages = [];
for (let i = 1; i <= 37; i++) {
  hawaiiImages.push({
    img: require("./albums/hawaii/hawaii" + i + ".jpg"),
    title: "hawaii" + i,
  });
}

//film
const filmImages = [];
for (let i = 1; i <= 18; i++) {
  filmImages.push({
    img: require("./albums/film/film" + i + ".jpg"),
    title: "film" + i,
  });
}
