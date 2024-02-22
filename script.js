let counters = document.querySelectorAll('.counter');
let scrollStarted = false;

const countUp = () => {
    counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute("data-target");
            // Get current counter value
            const c = +counter.innerText;

            // Create an increment
            const increment = target / 100;

            // if counter less than the target, add increment
            if(c < target){
                // Round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 1);
            }else {
                counter.innerText = target;
            }

        }

        updateCounter();
     });
}

document.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos > 270 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 270 && scrollStarted) {
        reset();
    }
});

function reset(){   
    counters.forEach((counter) => {
        counter.innerText = "0";
    });
};