export const shuffle = (arr) => {
  let ctr = arr.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

export const randomArr = (arr, length) => {
  let rand = Math.floor(Math.random() * length);
    return arr[rand];
}

export const spliceArr = (arr, end) => {
  let slice = arr.slice(1, end);
  return [...slice];
}