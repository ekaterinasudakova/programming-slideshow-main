// new rule: no unintended consequences.
// don't fuck with anything else on the page.
// if we have more than one slideshow, they should run independently.
// that means SCOPE! both in variables and in finding elements
// for the variable scope we're actually going to learn a whole new technique, called Functional Prototypes
// this is where you write a function that builds a nice, self contained thing for you.
// everything it needs is inside the function, and nothing is left outside, lying around, for other devs to metaphorically step on
// if something is needed from outside, you can write your function to selectively expose certain things.

/*
when page loads
user sees first image
three seconds later
user sees next image
if it was the last image, go to the first image

when page loads
hide all images
show first image 
every three seconds
    hide previous image
    figure out which image is next (usually old image + 1, sometimes loop back to 0)
    show next image

query to find all images = querySelectorAll
show 0th image = element.classList.add
make variable to track current image number = let
every three seconds = setInterval
    hide previous image = element.classList.remove
    change current image number variable (usually old image + 1, sometimes loop back to 0)
    show next image = element.classList.add



    WAYS TO HIDE IMAGES
    ✓ give it a class, and in CSS, give that class a display property of none
    X set its CSS display property to none
    X remove() append()
*/


let makeSlideshow = function (slideshowParentSelector){
    //query to find all images = querySelectorAll
    let slides = document.querySelectorAll(slideshowParentSelector + ' img')
    console.log(slides)
    //show 0th image = element.classList.add
    slides[0].classList.add('show')
    //make variable to track current image number = let
    let slideIndex = 0



    let nextSlide = function() {
        //    hide previous image = element.classList.remove
        slides[slideIndex].classList.remove('show')
        //    change current image number variable (usually old image + 1, sometimes loop back to 0)
        slideIndex++
        if (slideIndex === slides.length){
            slideIndex = 0
        }
        //    show next image = element.classList.add
        slides[slideIndex].classList.add('show')
    }



    let previousSlide = function(){
        //    hide previous image = element.classList.remove
        slides[slideIndex].classList.remove('show')
        // change current image number variable (usually old image -1, sometimes loop back to 3)
        slideIndex--
        if (slideIndex = 0){
            slideIndex === slides.length - 1
        }
        // show next image
        slides[slideIndex].classList.add('show')
    }


    //BUTTONS

    //make variable to track the next and previous buttons
    let nextButton = document.querySelector(slideshowParentSelector + ' .next')
    console.log(nextButton)
    let prevButton = document.querySelector(slideshowParentSelector + ' .back')
    console.log(prevButton)

    //when button is pressed, run function
    nextButton.onclick = function(){
        nextSlide()
    }
    prevButton.onclick = function(){
        previousSlide()
    }


    //KEYSTROKES

    //listen for arrow press
    window.addEventListener('keydown', function(event){
        console.log(event)
        //on arrowpress, run function
        if (event.key === 'ArrowRight'){
            nextSlide()
        }
        if (event.key === 'ArrowLeft'){
            previousSlide()
        }    
    })



    //TOUCH

    
    let touchMovement = function(){
         //listen to touch movement
        window.addEventListener('touchstart', function(event){
            //create variable to store initial touch position X axis
            let startingX = event.touches[0].clientX
            console.log(startingX)
        })
        window.addEventListener('touchmove', function(event){
            //create variable to store final touch position X axis
            let movingX = event.touches[0].clientX
            console.log(movingX)
        })
        //calculate if moved right or left
        window.addEventListener('touchend', function(){
            if (startingX + 100 < movingX){
                console.log('right')
            } else if (startingX - 100 > movingX){
                console.log('left')
            }
        })

    }
    
    touchMovement();   

    

    //every three seconds = setInterval
    // setInterval(function() {
    //     //    hide previous image = element.classList.remove
    //     slides[slideIndex].classList.remove('show')
    //     //    change current image number variable (usually old image + 1, sometimes loop back to 0)
    //     slideIndex++
    //     if (slideIndex === slides.length){
    //         slideIndex = 0
    //     }
    //     //    show next image = element.classList.add
    //     slides[slideIndex].classList.add('show')
    // }, intervalTime)
}
makeSlideshow('.sunset')
makeSlideshow('.other')

