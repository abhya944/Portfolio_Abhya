<script setup lang="ts">
import Button from "../../../components/Button.vue";
import Footer from "../../../components/Footer.vue";
import Link from "../../../components/Link.vue";
import { t } from "../../../i18n/utils/translate";

const resumeUrl = "/resume/abhya-singh-resume-2026.pdf";
</script>

<template>
  <main class="resume-page">
    <section class="resume-hero grid">
      <div class="resume-hero-copy">
        <p class="resume-kicker">{{ t("resume") }}</p>
        <h1 class="resume-title">Abhya Singh</h1>
        <p class="resume-description">{{ t("resume-description") }}</p>
      </div>
      <div class="resume-actions">
        <a :href="resumeUrl" download class="resume-action" data-cursor="arrow-external">
          <Button renderAs="div" variant="accent" class="children-unclickable" data-hoversound="hover">
            {{ t("download-resume") }}
          </Button>
        </a>
        <Link :href="resumeUrl" external class="resume-action" data-cursor="arrow-external">
          <Button renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">
            {{ t("open-resume") }}
          </Button>
        </Link>
      </div>
    </section>

    <section class="resume-preview grid" aria-label="Resume preview">
      <div class="resume-preview-frame">
        <object :data="resumeUrl" type="application/pdf" class="resume-preview-object">
          <iframe :src="resumeUrl" title="Abhya Singh resume preview" class="resume-preview-object"></iframe>
        </object>
      </div>
    </section>

    <Footer :withSocial="true" />
  </main>
</template>

<style scoped lang="scss">
.resume-page {
  min-height: calc(var(--lvh) * 100);
  background: var(--color-beige-400);
  color: var(--color-text-400);
}

.resume {
  &-hero {
    padding: calc(var(--height-header) + var(--space-xl)) var(--space-outer) var(--space-xl);
    align-items: end;
    gap: var(--space-lg);

    @include mixins.mq("md") {
      padding-bottom: var(--space-xxl);
    }
  }

  &-hero-copy {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      grid-column: 2 / 8;
    }
  }

  &-kicker {
    text-transform: uppercase;
    font-weight: 900;
    color: var(--color-orange-400);
  }

  &-title {
    font-size: var(--font-size-title-lg);
    line-height: var(--line-height-title);
    font-weight: 900;

    @include mixins.mq("md") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-description {
    max-width: 760px;
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
    font-size: var(--font-size-lg);
  }

  &-actions {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    @include mixins.mq("sm") {
      flex-direction: row;
    }

    @include mixins.mq("md") {
      grid-column: 8 / 12;
      justify-content: end;
    }
  }

  &-action {
    width: 100%;

    @include mixins.mq("sm") {
      width: fit-content;
    }
  }

  &-preview {
    padding: 0 var(--space-outer) var(--space-xxl);
  }

  &-preview-frame {
    grid-column: 1 / 13;
    height: min(980px, calc(var(--lvh) * 100 - var(--height-header) - 48px));
    min-height: 640px;
    border: var(--stroke-md) solid var(--color-grayscale-400);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-white-400);

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }

  &-preview-object {
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>
