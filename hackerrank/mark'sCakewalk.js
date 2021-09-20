function marcsCakewalk(calorie) {
  // Write your code here
  const sortedCalorie = calorie.sort(function (a,b) {return b-a});

  let totalMiles=null;
  for (let i=0; i< sortedCalorie.length; i++){
    totalMiles = totalMiles + ((2**i) * sortedCalorie[i]);
}
return totalMiles; 

}

