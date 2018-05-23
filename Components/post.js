"use strict";{

    const post = {
      bindings: {
        post: "<"
    },
    
      template:`
        <h1>{{$ctrl.post.title}}</h1>
        <div>
        <p>{{$ctrl.post.body}}</p>
        <p>X</p>
        </div>
        `
    }
    angular
    .module("app")
    .component("post", post);
  }