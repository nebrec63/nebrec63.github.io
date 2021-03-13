const nav = document.getElementsByTagName('nav').item(0);
const services = document.getElementById('services');
const contact = document.getElementById('contact');

const isInsideBounds = (edge, bounds) => bounds.top <= edge && bounds.bottom >= edge;

const checkForIntersectionOfDarkWithNavEdge = () => {
    const servicesBounds = services.getBoundingClientRect();
    const contactBounds = contact.getBoundingClientRect();
    const navEdge = nav.getBoundingClientRect().bottom;

    if (isInsideBounds(navEdge, servicesBounds) || isInsideBounds(navEdge, contactBounds)) {
        if (nav.classList.contains('dark')) return;

        nav.classList.remove('light');
        nav.classList.add('dark');
    }
    else {
        if (nav.classList.contains('white')) return;

        nav.classList.remove('dark');
        nav.classList.add('light');
    }
};


document.addEventListener('scroll', () => checkForIntersectionOfDarkWithNavEdge());