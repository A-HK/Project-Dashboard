import React from "react";
import "./inProgressCard.css";

class InProgressCard extends React.Component {
  render() {
    return (
      <div className="page-container">



        <div class="mr-24 ml- grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-96">
                  <BlogCard
                  class="mr-24"
                  />
                  <BlogCard
                   class="mr-24"
                    />
       </div>

      </div>
    )
  }
}

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (
<div class="mr-16 px-24">

      <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"ip-card-container" + (this.state.flipped ? " flipped" : "")}>

        <Front />
        <Back />
      </div>
      </div>

    )
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
      <div class="pt-16">
      <span>
      <h1 class="inline-block px-2 font-semibold">Created On:</h1>
        <p className="date" class="inline-block">{new Date().toLocaleDateString()}</p>
        </span>
        <h1 class="font-semibold pt-4">Current Contributors</h1>
        <ul>
        <li>Contributor-1</li>
        <li>Contributor-2</li>
        </ul>
        <h1 class="font-semibold pt-4">Looking For</h1>
        <ul>
        <li>React Developer</li>
        </ul>
        <h1 class="font-semibold pt-4">About</h1>
        <p>An extended project description detailing scope of project.</p>
        </div>
      </div>
    )
  }
}

class ImageArea extends React.Component {
  render() {
    return (
<>
        <img src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>

        <div class="font-bold text-xl pt-3 text-green-400 mb-2">
        <h1>Current Project</h1>
        </div>
        </>
    )
  }

}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">

          <p className="blog-content" class="py-1">
          <p class="pb-1">A super-awesome short project description</p>
            <h1 class="font-semibold py-2">Tech Stack</h1>
            <ul>
            <li>Tech Example -1</li>
            <li>Tech Example -2</li>
            </ul>
            </p>
        <button class="bg-green-400 px-4 py-1 mt-2 text-white rounded">Join</button>

        </div>

      </div>
    )
  }
}

export default InProgressCard;
