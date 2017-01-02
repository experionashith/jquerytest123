$(function() {
//$("#refnum").val("hiiii");

var userdata=new Array();
var b;
var d;
var user = new Array();
var myObjout={};
var myObj={};
var myJSON={};
var refnum;
var date;
var time;
var acctype;
var city;
var district;
var noofveh;
var noofcas;
var repofname;
var len;
var result;
var flag1;
var image;
var temp=localStorage.getItem("flag");
flag=parseInt(temp);
var userstring= localStorage.getItem("userout");
result=JSON.parse(userstring);
var len=result.length;
console.log(result[0].id);

if (flag==1) {
  $("#refnum").val(result[0].id);
  $("#date").val(result[0].date);
  $("#acctype").val(result[0].acctype);
  $("#city").val(result[0].city);
  $("#district").val(result[0].district);
  $("#noofveh").val(result[0].noofveh);
  $("#noofcas").val(result[0].noofcas);
  $("#repofname").val(result[0].repofname);
  localStorage.setItem("flag", "0");
}
    $("#datepicker-13").datepicker({ format: 'dd/mm/yyyy', maxDate: new Date() });
    $("#datepicker-13").datepicker("show");

    $("#add").click(function(e) {
        e.preventDefault();
        flag1=1;
         var ids = new Array();
        if ($('#refnum').val() == "") {
            alert('Please fill the Reference Number');
            flag1=0;
        }
        else {
          refnum = $("#refnum").val();
          if (refnum.length>50) {
            alert('Reference number should be less than 50 characters');
            flag1=0;
          }
          else {
            b=0;
            d=0;
            for(i=0;i<refnum.length;i++)
         {
             if('A' <= refnum[i] && refnum[i] <= 'Z') // check if you have an uppercase
                 b++;

             if('0' <= refnum[i] && refnum[i] <= '9') // check if you have a numeric
                 d++;
         }
         if(b == 0 || d == 0)
         {
           alert('Reference number should have at least one uppercase and a digit characters');
           flag1=0;
         }

          }
        }
         if ($('#datepicker-13').val() == "")
       {
           alert('Please select Date of Accident');
           flag1=0;
       }
          if ($('#time').val() == "")
          {
            alert('Please fill the time field');
            flag1=0;
        }
         if ($('#acctype').val() == "select")
        {
            alert('Please select the type of Accident');
            flag1=0;
        }
         if ($('#city').val() == "")
         {
           alert('Please fill the city field');
           flag1=0;
       }
       else {
         city = $("#city").val();
         if (city.length>100) {
           alert('Name of city should be less than 100 characters');
           flag1=0;
         }

       }
       if ($('#repofname').val() != "")
       {
         repofname = $("#repofname").val();
         if (repofname.length>100) {
           alert('Name of Reporting Officer should be less than 100 characters');
           flag1=0;
         }
     }
        if ($('#district').val() == "select")
       {
           alert('Please select the District');
           flag1=0;
       }
        if ($('#noofveh').val() == "")
        {
          alert('Please fill the Number of Vehicles');
          flag1=0;
      }
       if ($('#noofcas').val() == "")
       {
         alert('Please fill the Number of Casuality');
         flag1=0;
     }

     else if(flag1==1)


     {

             refnum = $("#refnum").val();
             date = $("#datepicker-13").val();
             time = $("#time").val();
             acctype = $("#acctype").val();
             city = $("#city").val();
             district = $("#district").val();
             noofveh = $("#noofveh").val();
             noofcas = $("#noofcas").val();
             repofname = $("#repofname").val();



            console.log(refnum);
            console.log(date);
            console.log(time);
            console.log(acctype);

            console.log(city);
            console.log(district);
            console.log(noofveh);
            console.log(repofname);
            myObjout = { "id":refnum, "date":date,"time":time, "acctype":acctype,"city":city,
             "district":district, "noofveh":noofveh,"noofcas":noofcas,"repofname":repofname};
             userdata.push(myObjout);
            myJSON = JSON.stringify(userdata);
            localStorage.setItem("userout", myJSON);
            //  localStorage.setItem("userlist", myJSON);
            alert('Data successfully saved in localStorage');
             window.location.replace("file:///home/exp/madan/test/jquerytest1/form1.html");
//<div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>

      /*      var i;
            var flag = 0;
            console.log(ids.length);

            for (i = 0; i < ids.length; i++) {
                console.log(ids[i]);
            }

            for (i = 0; i < ids.length; i++) {
                if (eid === ids[i]) {
                    flag = 1;
                }
            }

            if (flag === 0) {
                $("#table").append('<tr><td>' + refnum + '</td><td>' + date + '</td><td>' + time + '</td><td>' + acctype +  '</td></td>' + city + '</td><td>' + district + '</td><td>' + noofveh + '</td><td>' + noofcas +  '</td><td>' + repofname + '<td><tr>');
                ids.push(eid);


                $( "#dialog-message" ).dialog(
            {
              modal: true,
              buttons: {
                Ok: function() {
                  $( this ).dialog( "close" );
                }
              }
            });
          }

            if (flag === 1) {
                alert('Id already exist');
            }*/
        }
    });
    function readFile() {
      if (this.files && this.files[0]) {
        var FR= new FileReader();
        FR.onload = function(e) {
          document.getElementById("img").src       = e.target.result;
          document.getElementById("b64").innerHTML = e.target.result;
          image=stringify(img.src);
          localStorage.setItem("image",image );//console.log(img.src);
        };
        FR.readAsDataURL( this.files[0] );
      }
    }

    document.getElementById("inp").addEventListener("change", readFile, false);
});
