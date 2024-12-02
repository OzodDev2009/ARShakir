// Loader 

window.addEventListener('load', function () {
    setInterval(() => {
        const loader = document.querySelector('.loader')
        if (loader) {
            loader.style.display = "none";
            clearInterval();
        }
    }, 700);
})

// Navbar

function mobilNav() {
    const gamburger = document.querySelector('.gamburger')
    const navbar = document.querySelector('.navbar')

    gamburger.addEventListener('click', function () {
        navbar.classList.toggle('navBar')
    })
}

mobilNav();

// GSAP 

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// Chart

window.onload = function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [5, 7, 9, 11, 13,],
                    borderWidth: 1,
                    borderRadius: 50,
                    backgroundColor: "#8476AA"
                },

                {
                    label: '# of Votes',
                    data: [4, 6, 8, 10, 12,],
                    borderWidth: 1,
                    borderRadius: 50,
                    backgroundColor: "#99EFD0"
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Light - Gallery

lightGallery(document.getElementById('gallery'));

// Numbers 

