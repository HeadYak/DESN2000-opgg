/**
 * Written by A. Hinds with Z. Afzal 2018 for UNSW CSE.
 * 
 * Updated 2019.
 */

// import your own scripts here.
import handlelogin from './login.js';
import handlesignup from  './signup.js'

// your app must take an apiUrl as an argument --
// this will allow us to verify your apps behaviour with 
// different datasets.
export default initApp;
function initApp(apiUrl) {
  // your app initialisation goes here
  //Creates root div and headbanner
  let existroot = document.getElementById('root1')
  if (existroot != null){
    existroot.parentNode.removeChild(existroot)
  }
  let rootdiv = document.createElement('div');
  rootdiv.id = 'root1'
  document.body.append(rootdiv);

  let headban = document.createElement('header');
  rootdiv.appendChild(headban);
  headban.className = 'banner';
  headban.id = 'headban'
  let logo = document.createElement('h1');
  logo.className = 'flex-center';
  logo.innerText= "Seddit";
  logo.id = 'logo'
  //clicking on logo refreshes page
  logo.addEventListener('click', () => {
    initApp(apiUrl)
  });
  
  headban.appendChild(logo);
  let navbar = document.createElement('ul');
  navbar.className = 'nav';
  headban.appendChild(navbar);

  let showlogin = document.createElement('li');
  showlogin.className = 'nav-item';
  let loginform = document.createElement('li')
  loginform.className = 'nav-item'
  let showsignup = document.createElement('li')
  showsignup.className = 'nav-item'
  let search = document.createElement('li')
  search.className = 'nav-item'
  navbar.appendChild(search)

  let searchbar = document.createElement('input')
  searchbar.id = 'search'
  searchbar.setAttribute('data-id-search', '')
  searchbar.placeholder = "Search Seddit"
  searchbar.type = 'search'
  search.appendChild(searchbar)

  let usrnamebox = document.createElement('input');
  let pwbox = document.createElement('input');
  usrnamebox.placeholder = "Username"
  usrnamebox.style.display = 'none'
  usrnamebox.id = 'usernamebox'
  usrnamebox.type = 'search'
  pwbox.placeholder = "Password"
  pwbox.type = 'password'
  pwbox.style.display = 'none'
  pwbox.id = 'pwbox'

  navbar.appendChild(loginform)
  navbar.appendChild(showlogin);
  navbar.appendChild(showsignup)
 
  loginform.appendChild(usrnamebox)
  loginform.appendChild(pwbox)

  let loginbtn = document.createElement('button');
  let signupbtn = document.createElement('button')
  
  loginbtn.className = 'button button-primary';
  loginbtn.setAttribute('data-id-login', '')
  loginbtn.innerText = 'Log In'
  loginbtn.id = 'login'
  showlogin.appendChild(loginbtn);

  signupbtn.className = 'button button-secondary'
  signupbtn.setAttribute('data-id-signup', '')
  signupbtn.innerText = 'Sign Up'
  signupbtn.id = 'signupbtn'
  showsignup.appendChild(signupbtn)
  //login btn shows fields...
  loginbtn.addEventListener('click', () => {
    pwbox.style.display = 'inline'
    usrnamebox.style.display = 'inline'
    //gets rids of old event handler which showed fields, adds new event lhandler which attempts to log in user
    loginbtn.removeEventListener
    loginbtn.addEventListener('click', handlelogin)
  });
  //displays form when signup btn is clicked
  signupbtn.addEventListener('click', handlesignup);
  //creates feedlist/feed html objects
  let main = document.createElement('main')
  main.setAttribute("role", 'main')
  main.id = 'main'
  rootdiv.appendChild(main)
  let feed = document.createElement('ul')
  feed.id = 'feed'
  feed.setAttribute("data-id-feed", "")
  main.appendChild(feed)

  let feedhead = document.createElement('div')
  feedhead.className = "feed-header"
  feed.appendChild(feedhead)

  let feedtitle = document.createElement('h3')
  feedtitle.className = "feed-title alt-text"
  feedtitle.innerText = "Popular posts"
  feedhead.appendChild(feedtitle)
  //gets public feeed
  getfeed(apiUrl, feed)
}
function getfeed(apiUrl, feedlist){
  const options = {
    method: 'GET'
  }

  fetch(`${apiUrl}/post/public`, options)
  .then(res => res.json())
  .then(data => {
    //puts the post time of posts into array and sorts on reverse chrono order
    let times = [];
    for (const post in data.posts) {
       times.push(data.posts[post].meta.published)
    }
    times.sort(function(a,b){return b-a})
    //creates posts based on sorted order
    for (const time in times) {
      for (const post in data.posts) {
        if(times[time] == data.posts[post].meta.published) {
          //converts time to readable format
        
          
          let apost = document.createElement('li') 
          apost.className = "post"
          apost.setAttribute("data-id-post", "")
          feedlist.appendChild(apost)
    
          let vote = document.createElement('button')
          vote.className = "vote button button-primary"
          //if there are upvotes display number or display 0
          if (data.posts[post].meta.upvotes != null) {
            vote.innerText = data.posts[post].meta.upvotes.length
          }
          else {
            vote.innerText  = "0"
          }
          vote.align = 'center'
          vote.style.textAlign = 'center'
          vote.setAttribute('data-id-upvotes', "")
          apost.appendChild(vote)
    
          let content = document.createElement('div')
          content.className = 'content'
          apost.appendChild(content)
    
          let title = document.createElement('h4')
          title.setAttribute('data-id-title', '')
          title.className ='post-title alt-text'
          title.innerText = data.posts[post].title
          content.appendChild(title)
          
          let text = document.createElement('p')
          text.innerText = data.posts[post].text
          content.appendChild(text)
          //creates image
          if (data.posts[post].thumbnail != null) {
            let image = new Image()
            image.src = 'data:image/jpeg;base64,' + data.posts[post].thumbnail
            //console.log(image.src)
            content.appendChild(image)
          }
          
          let pauthor = document.createElement('p')
          pauthor.className = 'post-author'
          pauthor.setAttribute('data-id-author', '')
          pauthor.innerText = data.posts[post].meta.author
          content.appendChild(pauthor)
          
          let seddit = document.createElement('p')
          seddit.innerText = "/s/" + data.posts[post].meta.subseddit
          seddit.style.display = 'inline'
          seddit.className ='alt-text container'
          pauthor.appendChild(seddit)
          //displays #, 1 or 0 comment(s)
          let commentcount = document.createElement('button')
          if (data.posts[post].comments != null ) {
            commentcount.innerText = data.posts[post].comments.length + ' comments'
            if (data.posts[post].comments.length  == 1)
            commentcount.innerText = data.posts[post].comments.length + ' comment'
            if (data.posts[post].comments.length  == 0)
            commentcount.innerText = 'No comments'
        
          }
          commentcount.className = "button button-secondary"
          content.appendChild(commentcount)

          const date = new Date(parseInt(data.posts[post].meta.published)*1000)
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();
          const hour = date.getHours()
          const minute =  "0" + date.getMinutes()
          let time = year + "-" + month + "-" + day + " " + hour + ":" + minute.substr(-2)

          let timestamp = document.createElement('p')
          timestamp.innerText = time  
          content.appendChild(timestamp)

        }     
      }
    }    
  }) 
}



