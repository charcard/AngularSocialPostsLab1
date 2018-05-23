"use strict";

    const posts = {
      bindings: {
        post: "<"
      },
      template: `
      <section>
        <h5>Title</h5>
        <p> {{$ctrl.post.title}} </p>
        <h5>Thought</h5>
        <p> {{$ctrl.post.thought }} </p>
      </section>
      `
  };
    
    angular
    .module("app")
    .component("posts", posts);