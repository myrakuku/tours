import tour1 from './images/tour-1.jpg'
import tour2 from './images/tour-2.jpg'
import tour3 from './images/tour-3.jpg'
import tour4 from './images/tour-4.png'

export const pageLinks = [
    { id: 1, href: "#home", text: "home"},
    { id: 2, href: "#about", text: "about"},
    { id: 3, href: "#services", text: "services"},
    { id: 4, href: "#tours", text: "tours"},
];

export const iconLinks = [
    { id: 1, href: "http://www.facebook.com", icon: "fa-brands fa-facebook"},
    { id: 2, href: "http://www.twitter.com", icon: "fa-brands fa-twitter"},
    { id: 3, href: "https://www.whatsapp.com", icon: "fa-brands fa-whatsapp"},
];

export const tours = [
    { id: 1, img: tour1, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, a.', location: 'Athens', duration: '6 days', cost: 'from $2100'},
    { id: 2, img: tour2, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, a.', location: 'Thailand', duration: '6 days', cost: 'from $2100'},
    { id: 3, img: tour3, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, a.', location: 'Hawaii', duration: '6 days', cost: 'from $2100'},
    { id: 4, img: tour4, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, a.', location: 'England', duration: '6 days', cost: 'from $2100'},
];

export const services = [
    { id: 1, icon: "fa-solid fa-wallet", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { id: 1, icon: "fa-solid fa-tree", title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { id: 1, icon: "fa-solid fa-socks", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]