<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Laravel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link exact :to="{name: 'posts.index'}" class="nav-link">Posts List</router-link>
        </li>
        <li class="nav-item">
          <router-link exact :to="{name: 'posts.create'}" class="nav-link">create New Post</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

 <main>
     <div class="conatainer">
           <router-view></router-view>
          <notifications/>
     </div>
    

 </main>
    </div>
</template>