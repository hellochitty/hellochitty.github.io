
var holder = [];
// > newarr.forEach((e) => {
// ... if (e.track.preview_url){
// ..... holder.push({url:e.track.preview_url, name: e.track.name})
// ..... }
// ... }
// ... )


export const shuffle = (array) => {
  let i = 0;
  let j = 0;
  let temp = null;

  for (i = array.length -1; i > 0; i -= 1){
    j= Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
