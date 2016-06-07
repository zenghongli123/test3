function calculate_median(arr) {    //请勿改动函数名
    var result;
   var s=new Array();
	var j=0;
	    for (var i =1; i<arr.length; i=i+2) {
	        s[j]=arr[i];
	        j++;
	    }
	if(s.length%2!=0)
	    result=s[(s.length-1)/2];
	else
	{
	    result=(s[s.length/2]+s[s.length/2-1])/2;
	}
	return result;
  
}
module.exports = calculate_median;
