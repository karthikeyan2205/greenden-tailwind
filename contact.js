var sidenavbar=document.getElementById("sidenav")
      var exit=document.getElementById("exit")
      var nav=document.getElementById("navbar")

      console.log(10)

      exit.addEventListener("click",function(){
          sidenavbar.style.display="none"
      })

      nav.addEventListener("click",function()
      {
          sidenavbar.style.display="inline"
      })