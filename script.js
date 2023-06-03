//your JS code here. If required
        let button = document.getElementsByTagName('input')[0];
        button.addEventListener('click',function(){
          let select = document.getElementById("colorSelect");
          const selectedIndex = colorSelect.selectedIndex;
          
         select.remove(selectedIndex);
        });

