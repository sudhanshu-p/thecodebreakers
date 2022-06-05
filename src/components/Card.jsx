import React from "react";
function Card() {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img
            className="image"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-event-motion-poster-design-template-3e758bfdc9036d7fe1412ff47f4030ff.jpg?ts=1567082163"
            alt="coding-event-img"
          ></img>
        </div>
        <div className="col-md-8">
          <p className="description">
            The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            offici a deserunt mollit anim id est laborum."
          </p>
          <div class="d-grid gap-2 col-6 mx-auto">
            {/* <button class="btn btn-light" type="button">
                Register Now
              </button> */}
            <button class="button ">
              <span>Register Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
