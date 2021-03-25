<template>
  <nav
    class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
  >
    <div class="container">
      <router-link class="nav-link pr-3" to="/"><a class="navbar-brand float-left">Wine Store</a></router-link>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/">View Wines</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/create">New Wine</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>