
   //  DESKTOP NAVIGATION
    
    const menu = document.querySelector('#dropdown-menu')
    const dropdown = document.querySelector('#dropdown')

    menu.addEventListener('click', () => {

       if(dropdown.classList.contains('hidden'))
       {
           dropdown.classList.remove('hidden');
       }
       else
       {
           dropdown.classList.add('hidden');
       }

    })

   //  MOBILE NAVIGATION

    const burger = document.querySelector('#burger')
    const mobilemenu = document.querySelector("#mobilemenu")

     burger.addEventListener('click', () => {
       if(mobilemenu.classList.contains('hidden'))
       {
           mobilemenu.classList.remove('hidden');
       }
       else
       {
             mobilemenu.classList.add('hidden');
       }
    })
