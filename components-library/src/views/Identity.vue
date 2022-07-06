<template>
  <cl-view
    name="Identity"
    description="Your identity is the general look and feel of your site. Colours and typography are all defined here."
  >
    <cl-section
      name="Brand Colours"
      description="Brand colours are used for various components throughout the site such as buttons, alerts, and backgrounds. Each colour has lighter and darker shades to help with accessibility."
    >
      <div class="row">
        <cl-colour-spread
          v-for="(colours, name) in brandColours"
          :key="`colour-spread-${name}`"
          class="col-md-6 col-lg-4 mb-2 mb-md-4"
          :name="name"
          :classes="colours"
        />
      </div>
    </cl-section>
    <cl-section
      name="Colour Shades"
      description="Colour shades are extra neutral colours you have access to when styling the site. These are typically used for drop shadows and borders."
    >
      <cl-colour-spread
        class="row mb-2 mb-md-4"
        name="shades"
        :classes="colourShades.shades"
      />
      <cl-colour-spread class="row" name="mono" :classes="colourShades.mono" />
    </cl-section>
    <cl-section
      name="Typography"
      description="Typography is one of the most important aspects of your website. Treating your text with the same attention and care as any other component of your site will lead to a better user experience. Good readability is good UX."
    >
      <p>
        The way basic paragraphs interact with eachother is important. There
        will be a <em>lot</em> of them.
      </p>
      <p>
        Some paragraphs are short, some are long. Some contain
        <em>emphasized</em> text, some <strong>bold</strong>. No matter what is
        contained in your paragraphs, you need to make sure that they are not
        only readable by themselves, but also work well together in various
        situations and layouts.
      </p>
      <p><small>Small text shouldn't be overlooked either!</small></p>
      <p>
        Another important aspect to typography are headings. You should plan to
        have all 6 levels styled to ensure you're prepared for anything!
      </p>
      <p>
        Heading level 1s are very important for general accessibility. They are
        the title of your page and there should always be
        <em>exactly</em> one on every page. The rest of the heading levels can
        be used as many times per page as you'd like, however be sure to use
        them in a logical order; do not go from a heading level 2 to a level 5.
      </p>
      <section class="h1">Heading level 1</section>
      <section class="h2">Heading level 2</section>
      <section class="h3">Heading level 3</section>
      <section class="h4">Heading level 4</section>
      <section class="h5">Heading level 5</section>
      <section class="h6">Heading level 6</section>
    </cl-section>
  </cl-view>
</template>

<script>
import clView from "../components/View.vue";
import clSection from "../components/Section.vue";
import clColourSpread from "../components/ColourSpread.vue";

export default {
  name: "ClIdentity",
  components: {
    clView,
    clSection,
    clColourSpread,
  },
  data() {
    return {
      brandSwatch: {
        primary: [
          "bg-primary",
        ],
        secondary: [
          "bg-secondary",
        ],
        info: [
          "bg-info",
        ],
        success: [
          "bg-success",
        ],
        warning: [
          "bg-warning",
        ],
        danger: [
          "bg-danger",
        ],
      },
      brandColours: {
        primary: [
          "bg-primary-100",
          "bg-primary-200",
          "bg-primary-300",
          "bg-primary-400",
          "bg-primary",
          "bg-primary-600",
          "bg-primary-700",
          "bg-primary-800",
          "bg-primary-900",
        ],
        secondary: [
          "bg-secondary-100",
          "bg-secondary-200",
          "bg-secondary-300",
          "bg-secondary-400",
          "bg-secondary",
          "bg-secondary-600",
          "bg-secondary-700",
          "bg-secondary-800",
          "bg-secondary-900",
        ],
        info: [
          "bg-info-100",
          "bg-info-200",
          "bg-info-300",
          "bg-info-400",
          "bg-info",
          "bg-info-600",
          "bg-info-700",
          "bg-info-800",
          "bg-info-900",
        ],
        success: [
          "bg-success-100",
          "bg-success-200",
          "bg-success-300",
          "bg-success-400",
          "bg-success",
          "bg-success-600",
          "bg-success-700",
          "bg-success-800",
          "bg-success-900",
        ],
        warning: [
          "bg-warning-100",
          "bg-warning-200",
          "bg-warning-300",
          "bg-warning-400",
          "bg-warning",
          "bg-warning-600",
          "bg-warning-700",
          "bg-warning-800",
          "bg-warning-900",
        ],
        danger: [
          "bg-danger-100",
          "bg-danger-200",
          "bg-danger-300",
          "bg-danger-400",
          "bg-danger",
          "bg-danger-600",
          "bg-danger-700",
          "bg-danger-800",
          "bg-danger-900",
        ],
      },
      colourShades: {
        shades: ["bg-white", "bg-light", "bg-dark", "bg-black"],
      },
    };
  },
};
</script>
