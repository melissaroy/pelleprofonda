<template>
  <main id="components-app" class="">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="Eighth navbar example">
    <div class="container">
    <h1><a class="navbar-brand" href="#">Pelle Profonda</a></h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown07">
              <li><a class="dropdown-item" href="#">Alumier</a></li>
              <li><a class="dropdown-item" href="#">Sunnatan</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <cl-identity />
    <cl-elements />
    <cl-components />
    <cl-compositions />
  </main>
</template>

<script>
import clIdentity from "./views/Identity.vue";
import clElements from "./views/Elements.vue";
import clComponents from "./views/Components.vue";
import clCompositions from "./views/Compositions.vue";

export default {
  name: "App",
  components: {
    clIdentity,
    clElements,
    clComponents,
    clCompositions,
  },
};
</script>
