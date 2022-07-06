<template>
  <cl-view
    name="Elements"
    description="Elements are small reusable elements on your site such as links, buttons, and form elements. Defining each element ensures a consistent look and feel throughout your entire site."
  >
    <cl-section
      name="Links"
      description="Defining different styles for all possible types of links gives sighted users context for what will happen when they click a link."
    >
      <section>
        <a href="#section-links" class="link-stand-alone"
          >This is a basic link</a
        >
        <a href="https://google.ca" target="_blank">This is an external link</a>
        <a href="example.pdf">This is a download link</a>
        <a href="mail:example@example.com">This is an email link</a>
        <a href="tel:555-555-5555">This is a telephone link</a>
        <a href="sms:555-555-5555">This is an sms link</a>
      </section>
      <p>
        With multiple types of links defined you can easily identify the
        difference between <a href="#">normal links</a>,
        <a href="example.docx">download links</a>, and
        <a href="https://duckduckgo.com" target="_blank">external links</a> at a
        glance.
      </p>
    </cl-section>
    <cl-section
      name="Quotation"
      description="While blockquotes and quotes aren't the most common element to see on a page, it is still important to define their styles as they are a basic HTML element."
    >
      <p>
        Single line quotes can be handled with a simple quotation tag, which for
        the most part looks like emphasised text, however it does include a
        hidden <strong>cite</strong> property for screen readers.
        <q
          cite="https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/"
          >Many modern browsers will automatically add quotation marks to the
          quote</q
        >.
      </p>
      <figure class="quote">
        <blockquote
          cite="https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/"
        >
          <p>
            Blockquote tags are used for distinguishing quoted text from the
            rest of the content.
          </p>
        </blockquote>
        <figcaption>
          John Rhea,
          <cite>Quoting in HTML: Quotations, Citations, and Blockquotes</cite>
        </figcaption>
      </figure>
    </cl-section>
    <cl-section
      name="Buttons"
      description="Buttons are used mainly for forms and drawing a users attention to an interactive element on the page."
    >
      <p>
        In Bootstrap, you are given multiple colours of buttons based on the
        colours in your theme.
      </p>
      <h4>Primary</h4>
      <section>
        <button class="btn btn-primary">Active button</button>
        <button class="btn btn-primary btn-icon">Icon button</button>
        <button class="btn btn-primary" disabled>Disabled button</button>
      </section>
      <h4>Secondary</h4>
      <section>
        <button class="btn btn-secondary">Active button</button>
        <button class="btn btn-secondary btn-icon">Icon button</button>
        <button class="btn btn-secondary" disabled>Disabled button</button>
      </section>
      <h4>Info</h4>
      <section>
        <button class="btn btn-info">Active button</button>
        <button class="btn btn-info btn-icon">Icon button</button>
        <button class="btn btn-info" disabled>Disabled button</button>
      </section>
      <h4>Success</h4>
      <section>
        <button class="btn btn-success">Active button</button>
        <button class="btn btn-success btn-icon">Icon button</button>
        <button class="btn btn-success" disabled>Disabled button</button>
      </section>
      <h4>Warning</h4>
      <section>
        <button class="btn btn-warning">Active button</button>
        <button class="btn btn-warning btn-icon">Icon button</button>
        <button class="btn btn-warning" disabled>Disabled button</button>
      </section>
      <h4>Danger</h4>
      <section>
        <button class="btn btn-danger">Active button</button>
        <button class="btn btn-danger btn-icon">Icon button</button>
        <button class="btn btn-danger" disabled>Disabled button</button>
      </section>
      <h4>Light</h4>
      <section>
        <button class="btn btn-light">Active button</button>
        <button class="btn btn-light btn-icon">Icon button</button>
        <button class="btn btn-light" disabled>Disabled button</button>
      </section>
      <h4>Dark</h4>
      <section>
        <button class="btn btn-dark">Active button</button>
        <button class="btn btn-dark btn-icon">Icon button</button>
        <button class="btn btn-dark" disabled>Disabled button</button>
      </section>
      <h4>Mono</h4>
      <section>
        <button class="btn btn-mono">Active button</button>
        <button class="btn btn-mono btn-icon">Icon button</button>
        <button class="btn btn-mono" disabled>Disabled button</button>
      </section>
    </cl-section>
  </cl-view>
</template>
<script>
import clView from "../components/View.vue";
import clSection from "../components/Section.vue";

export default {
  name: "ClElements",
  components: {
    clView,
    clSection,
  },
};
</script>
