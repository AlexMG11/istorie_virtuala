



function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".btn").style.display ="none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector(".btn").style.display ="block";
  }
  const correct_res = new Array (1, 2, 2, 3, 3);
  const ans_array = [];

  function verify(){
    for(let i = 1;i<=5;i++)
    {
      const group = $('.question-'+i).children().children();
      console.log(group[0]["checked"]);
      for(let j =0;j<group.length;j++)
      {
        let ok = 0;
       
        if(group[j]["checked"])
        {
          ans_array[i] = group[j]["value"];
          ok = 1;
          console.log(1);
          break;
          
        }
        if(ok == 0)
          ans_array[i] = 0;
      }
    }
    console.log(ans_array);
    let percent = 0;
    for(let i = 0;i<5;i++)
    {
      if(ans_array[i] == correct_res[i])
        percent++;
    }
    let result = percent*20;
    Swal.fire({
      title: "Ai obtinut " + result + "%",
      
      icon: "success"
    });
  }

  // console.log("nigga"+1)
  
  // console.log($('.question-1').children().children()[0])
  // console.log($('input[type="checkbox"]').parent().siblings().children()[0]);

  $('input[type="checkbox"]').on('change', function() {
    
    $(this).parent().siblings().children().not(this).prop('checked', false);
 });


 
  