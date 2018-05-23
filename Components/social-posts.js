"use strict";

const socialPosts = {
  template: `
  <h1> My Thoughts</h1>
  <post-form add-post="$ctrl.addPost(newPost);"><post-form>
  <section>
    <posts ng-repeat="post in $ctrl.myPosts" post="post"></posts>
  </section>
  `,


  controller: function () {
    const vm = this;
      vm.myPosts= [];
      vm.addPost = (newPost) => {
        vm.myPosts.push({
          title: newPost.title,
          thought: newPost.thought
        });
  }
}
};

angular
.module ("app")
.component("socialPosts", socialPosts)