function normalizeNaN(number){
    parsedNumber = parseInt(number)
    if(isNaN(parsedNumber)){
      return 0;
    }else{
      return parsedNumber;
    }
  }