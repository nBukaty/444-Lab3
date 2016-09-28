function Validate(p1,p2){
  var eMessage = null;
  if(p1 !== p2){
    eMessage = "Passwords do not match!";
  }
  else if(p1.length < 8){
      eMessage = "Your password is too short! It must be at least 8 characters.";
  }
  if(eMessage !== null){
    alert(eMessage);
  }
}
