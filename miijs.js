$(function() {
  var myObj={};
  var userdata=new Array();
  var myJSON={};
  var myObj1={};
  var userdata1=new Array();
  var myJSON1={};
  var flag3=0;
  var userstring= localStorage.getItem("userout");
  result=JSON.parse(userstring);

  var refnum;
  var date;
  var time;
  var acctype;
  var city;
  var district;
  var noofveh;
  var noofcas;
  var repofname;

console.log(userstring);
console.log(result[0].time);

window.onload = function(){
  if(result !== undefined || result !== null)
  {var len=result.length;
  console.log(len);


   refnum=result[len-1].id;
 date=result[len-1].date;
   time=result[len-1].time;
 acctype=result[len-1].acctype;
   city=result[len-1].city;
   district=result[len-1].district;
   noofveh=result[len-1].noofveh;
  noofcas=result[len-1].noofcas;
   repofname=result[len-1].repofname;


  $("#table").append('<tr><td>' + refnum + '</td><td>' + date + '</td><td>' + time + '</td><td>' + acctype +  '</td></td>' + city + '</td><td>' + district + '</td><td>' + noofveh + '</td><td>' + noofcas +  '</td><td>' + repofname + '<td><tr>');
}
};

$("#add1").click(function(e) {
  e.preventDefault();

    var flag2=0;

    if (flag3==0) {
      alert('Data successfully saved ');
      myObj1 = { "id":refnum, "date":date,"time":time, "acctype":acctype,"city":city,
      "district":district, "noofveh":noofveh,"noofcas":noofcas,"repofname":noofcas};
      userdata1.push(myObj1);
      myJSON1 = JSON.stringify(userdata1);
      localStorage.setItem("userlist", myJSON1);
      window.location.replace("./form.html");
      flag3=1;
    }
    else{
    var userstring1= localStorage.getItem("userlist");
    result1=JSON.parse(userstring1);
    var leng=result1.length;
    var i;
    for (var i = 0; i < result1.length; i++) {
        userdata1.push(result1[i]);
        if (result1[i].id==refnum) {
            alert('Reference number already exist');
            flag2=1
          }
        }

      if(flag2==0)
      {
          alert('Data successfully saved ');
          myObj1 = { "id":refnum, "date":date,"time":time, "acctype":acctype,"city":city,
 "district":district, "noofveh":noofveh,"noofcas":noofcas,"repofname":noofcas};

          userdata1.push(myObj1);
          myJSON1 = JSON.stringify(userdata1);
          localStorage.setItem("userlist", myJSON1);
          window.location.replace("./form.html");
        }
      }
    });


$("#add2").click(function(e) {
    e.preventDefault();
    window.location.replace("./form.html");
    localStorage.setItem("flag", "1");
});

});
