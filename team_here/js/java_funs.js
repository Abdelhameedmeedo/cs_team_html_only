//vars
let newly_books = document.querySelector('.newly_books')
let fame_books = document.querySelector('.fame_books')
let paied_books = document.querySelector('.paied_books')
let home_btns = document.querySelectorAll('.home-book-btns span')
let catagories = document.querySelectorAll('.Catagories .catagory-links span')
let catagories_sub_catagory_books = document.querySelectorAll('.Catagories .catagory-links .sub-catagory')
let profile_img = document.querySelector('.log-img img')
let profile_img_hover_div = document.querySelector('.log-img-hover')
profile_img.addEventListener('click',e=>{
  if(profile_img){
    profile_img_hover_div.style.display = 'block'
  }else{
    profile_img_hover_div.style.display = 'none'
  }
})
// let nav_btns = document.querySelectorAll('nav ul li a')
// nav_btns.forEach(el=>{
//   el.addEventListener('click',e=>{
//     nav_btns.forEach(ele=>{
//       ele.classList.remove('active-nav')
//     })
//     el.classList.add('active-nav')
//   })
// })

//main btns and show hide content
home_btns.forEach(el=>{
    el.addEventListener('click',(e)=>{
      if(el.id == 1){ //newly
    //    el.classList.add('active')
    //    el.nextElementSibling.classList.remove('active')
    //    el.nextElementSibling.classList.remove('active')
        add_remove_active()
        newly_books.style.display = 'block'
        fame_books.style.display = 'none'
        paied_books.style.display = 'none'
      }else if(el.id == 2){ //fame
        // el.classList.add('active')
        // el.previousElementSibling.classList.remove('active')
        // el.nextElementSibling.classList.remove('active')
        add_remove_active()
        newly_books.style.display = 'none'
        fame_books.style.display = 'block'
        paied_books.style.display = 'none'
      } 
      else{ //paied
    //     el.classList.add('active')
    //    el.previousElementSibling.classList.remove('active')
    //    el.previousElementSibling.classList.remove('active')
    //    el.nextElementSibling.classList.remove('active')
      add_remove_active()
        newly_books.style.display = 'none'
        fame_books.style.display = 'none'
        paied_books.style.display = 'block'
      }      
    })
})
function add_remove_active(){
    home_btns.forEach(el=>{
        el.addEventListener('click',()=>{
            home_btns.forEach(el=>{
                el.classList.remove('active')
            })
            el.classList.add('active')
        })
    })
}

//catagories
catagories.forEach((el,ind)=>{
    el.addEventListener('click',()=>{
        // e.preventDefault()
        // catagories_sub_catagory_books[ind].classList.toggle('toggle')
        console.log('hello')
    })
})
//open book description
let getData = document.querySelectorAll('.list-items h3')
getData.forEach(el=>{
  el.addEventListener('click',e=>{
   console.log( e.target.innerHTML)
   window.location.href = '../html/book_desc.html'
  })
})
//open profile
let profile = document.querySelector('.deps .links > a')
profile.addEventListener('click',e=>{
  window.location.href = '../html/profile.html'
})