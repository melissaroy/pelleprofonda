<template>
  <cl-view
    name="Compositions"
    description='A Composition is a "Component" comprised of other Components. They define how multiple components should interact with eachother inside of the composition (e.g. card groups or search result lists).'
  >
    <cl-section
      name="Vertical card group"
      description="Verical card groups combine multiple vertical cards together in a single row on large screens, switching to multiple rows on mobile devices."
    >
      <div class="row row-cols-1 row-cols-lg-3">
        <div v-for="n in 3" :key="`vertical-card-${n}`" class="col-8 mb-3">
          <div class="card">
            <div class="card-img-container">
              <img
                src="https://via.placeholder.com/1000x500?text=Placeholder"
                class="card-img"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#" class="stretched-link no-icon">Card title</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                quibusdam illum mollitia.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text">Optional card footer.</p>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section
      name="Horiztonal card group"
      description="Horizontal card groups combine multiple horizontal cards together in a single column, multi-row layout."
    >
      <div class="row row-cols-1">
        <div v-for="n in 3" :key="`vertical-card-${n}`" class="col-8 mb-3">
          <div class="card card-horizontal">
            <div class="card-img-container">
              <img
                src="https://via.placeholder.com/1000x500?text=Placeholder"
                class="card-img"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#" class="stretched-link no-icon">Card title</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                quibusdam illum mollitia.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text">Optional card footer.</p>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
  </cl-view>
</template>
<script>
import clView from "../components/View.vue";
import clSection from "../components/Section.vue";

export default {
  name: "ClCompositions",
  components: {
    clView,
    clSection,
  },
};
</script>
