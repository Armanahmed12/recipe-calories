// handle the nav based the "menu-bar-clicking"
 const handleNavBar = ()=>{

  const ulTagOfNav = document.getElementById("nav-lists-container");
  const menuBar = document.getElementById("menuBar");

  // navigation bar
    const styles = [...ulTagOfNav.classList];
    styles.forEach((style) => {
      if (style.startsWith("top-")) {
  
        if (style !== "top-[69.6px]") {
  
          ulTagOfNav.classList.remove("top-[-600px]");
          ulTagOfNav.classList.add("top-[69.6px]");
          // document.getElementById('bannerSection').style.zIndex = '-20';
          // change the barIcon into X
          menuBar.setAttribute('className', 'fa-solid fa-x text-[#1dd100] text-2xl block sm:hidden')
         
  
        } else {
  
          ulTagOfNav.classList.remove("top-[69.6px]");
          ulTagOfNav.classList.add("top-[-600px]");
          // change the "x" icon into Menubar
          menuBar.setAttribute('className', 'text-2xl fa-solid fa-bars block sm:hidden')
          setTimeout( ()=>{
            // document.getElementById('bannerSection').style.zIndex = '20';
          }, 500);
      
        }
      }
    });
 
 }

export {handleNavBar}