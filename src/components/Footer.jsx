import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}
          <a className="text-sky-100 font-bold " target="_blank" href="https://www.facebook.com/p/MT-Coding-Tech-100078891341055/">
         
          {  ` MT Coding - Tech ` }
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
