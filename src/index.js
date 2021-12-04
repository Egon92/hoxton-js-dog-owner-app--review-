const state = {
  dogs: [{
      id: 1,
      name: "Mr. Bonkers",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: true,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    },
    {
      id: 2,
      name: "Nugget",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: false,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
    },
    {
      id: 3,
      name: "Skittles",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: true,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
    },
    {
      id: 4,
      name: "Buttercup",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: false,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_4.jpg"
    },
    {
      id: 5,
      name: "Lucipher",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: false,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
    },
    {
      id: 6,
      name: "Snooper Pooper",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: false,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_6.jpg"
    },
    {
      id: 7,
      name: "Puddles",
      bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  minima voluptates libero cumque rerum consequatur optio aliquid sint
                  eum maxime illo laborum omnis quo ab rem cupiditate nulla
                  perspiciatis ipsum!`,
      isGoodDog: true,
      image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_7.jpg"
    }
  ]
}




//   Create dog list 

{
  /* <header class="header">
          <h1>The Show Off Dog Owner's App</h1>
          <ul class="dogs-list">
              <li class="dogs-list__button dogs-list__button--add">+</li>
          </ul>
      </header> */
}

//   This is a template for the dog list item
//   <li class="dogs-list__button">Mr. Bonkers</li> 

const dogListUl = document.querySelector(".dogs-list")
const dogListPlusButton = document.querySelector(".dogs-list__button--add")
dogListPlusButton.addEventListener("click", function () {
  createNewDogForm()
})

function createDogList() {

  for (const dog of state.dogs) {
    const dogNameLi = document.createElement("li")
    dogNameLi.setAttribute("class", "dogs-list__button")
    dogNameLi.textContent = dog.name
    dogNameLi.addEventListener('click', function () {
      createDogCard(dog)
    })
    dogListUl.append(dogNameLi)
  }
}
createDogList()









{
  /* <section class="main__dog-section">
              <h2>No dogs ?!?</h2>
  </section> */
}


//   Create dog card
//   This is a template for the main dog card  
//   
//         <h2>Mr. Bonkers</h2>
//         <img
//           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//           alt=""
//         />
//         <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
// minima voluptates libero cumque rerum consequatur optio aliquid sint
// eum maxime illo laborum omnis quo ab rem cupiditate nulla
// perspiciatis ipsum!
//           </p>
//         </div>
//         <p><em>Is naughty?</em> yes!</p>
//         <button>Good dog!</button>
//   

const section = document.querySelector(".main__dog-section")

function createDogCard(dog) {
  section.innerHTML = ''
  const dogName = document.createElement("h2")
  dogName.textContent = dog.name
  const dogImg = document.createElement("img")
  dogImg.setAttribute("src", dog.image)
  dogImg.setAttribute("alt", "")

  const dogDesc = document.createElement('div')
  dogDesc.setAttribute("class", "main__dog-section__desc")
  const h3El = document.createElement('h3')
  h3El.textContent = 'bio'
  const dogBio = document.createElement('p')
  dogBio.textContent = dog.bio
  const isNaughtyP = document.createElement('p')
  const emEl = document.createElement('em')
  if (dog.isGoodDog === true) {
    isNaughtyP.textContent = ' No!'
  } else {
    isNaughtyP.textContent = ' Yes!'
  }
  emEl.textContent = 'Is naughty?'
  const dogButton = document.createElement('button')

  if (dog.isGoodDog === true) {
    dogButton.textContent = 'Bad dog!'
  } else {
    dogButton.textContent = 'Good dog!'
  }

  dogButton.addEventListener('click', function () {
    dog.isGoodDog = !dog.isGoodDog
    createDogCard(dog)
  })


  section.append(dogName, dogImg, dogDesc, isNaughtyP, dogButton)
  dogDesc.append(h3El, dogBio)
  isNaughtyP.prepend(emEl)
}



// This is a template for the add dog form

//     
//       <h2>Add a new Dog</h2>
//       <form class="form">

//         <label for="name">Dog's name</label>
//         <input type="text" id="name" name="name">

//         <label for="image">Dog's picture</label>
//         <input type="url" id="image" name="image">

//         <label for="bio">Dog's bio</label>
//         <textarea rows="5" id="bio" name="bio"></textarea>

//         <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
//       </form>


function createNewDogForm() {

  section.innerHTML = ""

  const formTitle = document.createElement('h2')
  formTitle.textContent = 'Add a new dog'

  const formEl = document.createElement("form")
  formEl.setAttribute("class", "form")

  const dogNameLabel = document.createElement("label")
  dogNameLabel.textContent = "Dog's name"
  dogNameLabel.setAttribute("for", "name")
  const dogNameInput = document.createElement('input')
  dogNameInput.setAttribute('type', 'text')
  dogNameInput.setAttribute('id', 'name')
  dogNameInput.setAttribute('name', 'name')

  const dogPicLabel = document.createElement("label")
  dogPicLabel.textContent = "Dog's picture"
  dogPicLabel.setAttribute("for", "image")
  const imageInput = document.createElement('input')
  imageInput.setAttribute('type', 'url')
  imageInput.setAttribute('id', 'image')
  imageInput.setAttribute('name', 'image')

  const dogBioLabel = document.createElement("label")
  dogBioLabel.textContent = "Dog's bio"
  dogBioLabel.setAttribute("for", "bio")

  const dogTextarea = document.createElement('textarea')
  dogTextarea.setAttribute('rows', '5')
  dogTextarea.setAttribute('id', 'bio')
  dogTextarea.setAttribute('name', 'bio')

  const formInput = document.createElement("input")
  formInput.setAttribute("type", "submit")
  formInput.setAttribute("id", "submit")
  formInput.setAttribute("name", "submit")
  formInput.setAttribute("value", "Let's add a dog!")
  formInput.setAttribute("class", "form__button")

  formEl.addEventListener("submit",function(event){      
      event.preventDefault()
      createBigDogCard(dogNameInput.value, imageInput.value, dogTextarea.value)
      formEl.reset()
    })
  formEl.append(dogNameLabel, dogNameInput, dogPicLabel, imageInput, dogBioLabel, dogTextarea, formInput)
  section.append(formTitle, formEl)
}
function createBigDogCard(name,url,bio){
const newDogLi = document.createElement("li")
      newDogLi.setAttribute("class","dogs-list__button")
      newDogLi.textContent = name 
      dogListUl.append(newDogLi)


      newDogLi.addEventListener("click",function(){
        // createDogBigCard(dogNameInput.value,imageInput.value,dogTextarea.value)
        section.innerHTML = ''
        const dogName = document.createElement("h2")
        dogName.textContent = name
        const dogImg = document.createElement("img")
        dogImg.setAttribute("src", url)
        dogImg.setAttribute("alt", "")
      
        const dogDesc = document.createElement('div')
        dogDesc.setAttribute("class", "main__dog-section__desc")
        const h3El = document.createElement('h3')
        h3El.textContent = 'bio'
        const dogBio = document.createElement('p')
        dogBio.textContent = bio
        const isNaughtyP = document.createElement('p')
        const emEl = document.createElement('em')
        // if (dog.isGoodDog === true) {
        //   isNaughtyP.textContent = ' No!'
        // } else {
        //   isNaughtyP.textContent = ' Yes!'
        // }
        // emEl.textContent = 'Is naughty?'
        // const dogButton = document.createElement('button')
      
        // if (dog.isGoodDog === true) {
        //   dogButton.textContent = 'Bad dog!'
        // } else {
        //   dogButton.textContent = 'Good dog!'
        // }
      
        // dogButton.addEventListener('click', function () {
        //   dog.isGoodDog = !dog.isGoodDog
        //   createDogCard(dog)
        // })
      
        console.log(dogName)
        section.append(dogName, dogImg, dogDesc, isNaughtyP)
        dogDesc.append(h3El, dogBio)
        isNaughtyP.prepend(emEl)
      })}