// handle the nav based the "menu-bar-clicking"
 const handleNavBar = ()=>{

  const ulTagOfNav = document.getElementById("nav-lists-container");
  const menuBar = document.getElementById("menuBar");

      // makeing Ul tag contain a z-index : -10 from positive
      document.getElementById('nav-lists-container').removeAttribute('style');


  // navigation bar
    const styles = [...ulTagOfNav.classList];
    styles.forEach((style) => {
      if (style.startsWith("top-")) {
  
        if (style !== "top-[52px]") {
  
          ulTagOfNav.classList.remove("top-[-600px]");
          ulTagOfNav.classList.add("top-[52px]");
          document.getElementById('bannerSection').style.zIndex = '-20';
          // change the barIcon into X
          menuBar.setAttribute('className', 'fa-solid fa-x text-[#1dd100] text-2xl block sm:hidden');
          setTimeout(()=>{
            
            document.getElementById('nav-lists-container').setAttribute('style', 'z-index: 10')
            
          }, 1000)
         
  
        } else {
  
        
         setTimeout(()=>{

          ulTagOfNav.classList.remove("top-[52px]");
          ulTagOfNav.classList.add("top-[-600px]");

         }, 300)

          // change the "x" icon into Menubar
          menuBar.setAttribute('className', 'text-2xl fa-solid fa-bars block sm:hidden')
          setTimeout( ()=>{
            document.getElementById('bannerSection').style.zIndex = '20';
          }, 1000);
      
        }
      }
    });
 
 }

export {handleNavBar}