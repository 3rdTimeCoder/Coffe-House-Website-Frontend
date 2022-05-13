import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaPeopleCarry,
  FaCoffee,
  FaCartPlus,
  FaHome,
} from "react-icons/fa";

export const locations = [
  {
    id: 1,
    location: "Johannesburg",
    address: "123 Joburg Street, Auckland Park.",
    image: "./locations/jhb.jpg",
  },
  {
    id: 2,
    location: "Durban",
    address: "123 Durban Street, West Street.",
    image: "./locations/dbn.jpg",
  },
  {
    id: 3,
    location: "Cape Town",
    address: "123 Long Street, Waterfront.",
    image: "./locations/cpt.jpg",
  },
];

export const brews = [
  {
    id: 1,
    image: "./locations/brew1.jpg",
    name: "Ethopian Mocah",
    price: 34.99,
  },
  {
    id: 2,
    image: "./locations/brew2.jpg",
    name: "Zembezi Zeal",
    price: 20.99,
  },
  {
    id: 3,
    image: "./locations/brew3.jpg",
    name: "Jozi Jova",
    price: 15.99,
  },
  {
    id: 4,
    image: "./locations/brew4.jpg",
    name: "Lover's Brew",
    price: 63.99,
  },
];

export const navLinks = [
  { name: "home", icon: <FaHome /> },
  { name: "about", icon: <FaPeopleCarry /> },
  { name: "locations", icon: <FaLocationArrow /> },
  { name: "brews", icon: <FaCoffee /> },
  { name: "cart", icon: <FaCartPlus /> },
];

export const socialLinks = [
  { icon: <FaTwitter />, href: "www.twitter.com" },
  { icon: <FaInstagram />, href: "www.instagram.com" },
  { icon: <FaWhatsapp />, href: "www.WhatsApp.com" },
];
