<!--<template>
  <div class="posts">
    <div v-if="posts.length > 0" class="table-wrap">
      <table>
        <tr>
          <td>Title</td>
          <td>Description</td>
        </tr>
        <tr v-for="post in posts" v-bind:key="post">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
        </tr>
      </table>
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="btn btn-primary">Add Post</router-link>
      </div>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="btn btn-primary"
        >Add Post</router-link
      >
    </div>
  </div>
</template>-->
<template>

  <div class="posts">

     
      <div style="width:975px" class="ridge_border_center" v-if="posts.length > 0">
        
        <table border="0" style="width:100%;border:0px;">  
            <tr v-for="post in posts" v-bind:key="post" class="block">
              <div class = "feedback-buttons">
                <td ><i type="button" class="arrow up"></i></td>
                <td ><i type="button" class="arrow down" ></i></td>
              </div>
                
                <div class = "post">
                    <td colspan="2"><b>{{ post.title }}</b></td>
                
                <td colspan="3">{{ post.description }}</td>
                </div>
              
            </tr>
  
        </table>
        <div>
          <router-link v-bind:to="{ name: 'NewPost' }" class="btn btn-primary">Add Post</router-link>
        </div>
      </div>

      <div v-else>
        There are no posts.. Lets add one now <br /><br />
        <router-link v-bind:to="{ name: 'NewPost' }" class="btn btn-primary"
          >Add Post</router-link
        >
      </div>
      
    </div>


</template>


<script>
import PostsService from "../../services/PostsService";
export default {
  name: "community",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      PostsService.getAll()
        .then((response) => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePosts();
  },
};
</script>

<!--<style type="text/css">
.table-wrap {
  display: flex;
  flex-flow: column;
  align-items: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>-->

<style type="text/css">
.block{
  display: flex;
}
.feedback-buttons{
  display: flex;
  flex-flow: column;
}
.post{
  display: flex;
  flex-flow: column;
}
.table-wrap {
  display: flex;
  flex-flow: column;
  align-items: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #ffffff;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #ffffff;
}
table tr:nth-child(1) {
  background: #feffff;
  color: rgb(0, 0, 0);
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
.arrow {
    border: solid rgb(0, 0, 0);
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
  }
  
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .ridge_border_center {
    border: 2px;
    padding: 10px;
    border-radius: 25px;
    border-style: ridge;
    width: 60%;
    margin:auto;
  }
  


</style>

