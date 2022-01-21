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


    //if the variable selects the appropriate button for the slideshow,
    //why does it adjust the images in the wrong slideshow?
    let nextButton = document.querySelector('.next')
    console.log(nextButton)
    let prevButton = document.querySelector('.back')
    console.log(prevButton)

    nextButton.onclick = function(){
        nextSlide()
    }
    prevButton.onclick = function(){
        previousSlide()
    }

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
        slides[slideIndex].classList.remove('show')
        slideIndex--
        if (slideIndex == 0){
            slideIndex == slides.length
        }
        //not sure why this breaks instead of looping. It should make slideIndex = 3
        //and add the show class to the last image.
        slides[slideIndex].classList.add('show')
    }
    

 

    

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

