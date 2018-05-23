"use strict";

const items = {
  
  template: `
  <button ng-click="$ctrl.expandonFocus();">Add Post</button>
  <post ng-repeat="post in $ctrl.items" post="post"> </post>
  `,


  controller: function () {
    
    const vm = this;
    vm.items = [
      {
        title: "First Post", 
        body: "stuff stuff stuff"
      },
      {
        title: "Second Post", 
        body: "stuff stuff stuff"
      },
      {
        title: "Third Post", 
        body: "stuff stuff stuff"
      }
    ];

  }
}