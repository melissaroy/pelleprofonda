<template>
  <cl-view
    name="Components"
    description="A Component is an item that combines multiple Elements together- possibly in a modular fashion (e.g. Cards, image blocks, or navigation)."
  >

    <cl-section
      name="Vertical Card"
      description="Vertical cards can be used to display teasers and other preview content."
    >
      <div class="row">
        <div class="col-md-8 col-lg-5 col-xl-4">
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
      name="Horizontal Card"
      description="Horizontal cards can be used to display teasers and other preview content in a wider format compared to regular vertical cards. Depending on screen size they will revert back to regular vertical cards."
    >
      <div class="row">
        <div class="col-md-8">
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
  name: "ClComponents",
  components: {
    clView,
    clSection,
  },
};
</script>
