let left = 0;
let right = 0;

for (let i = 0; i < 21; i++) {
  console.log(left + "" + right);
  right++;
  if (right > 4) {
    right = 0;
    left++;
  }
  if(left ==1 && right ==4){
    break;
  }
}