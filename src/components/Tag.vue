<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-git {
      background-color: #f05032;
      color: white;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-aws {
      background-color: #ff9900;
      color: #281500;
    }

    &-azure {
      background-color: #0078d4;
      color: white;
    }

    &-jenkins {
      background-color: #d33833;
      color: white;
    }

    &-docker {
      background-color: #2496ed;
      color: white;
    }

    &-ansible {
      background-color: #111820;
      color: white;
    }

    &-terraform {
      background-color: #7b42bc;
      color: white;
    }

    &-prometheus {
      background-color: #e6522c;
      color: white;
    }

    &-grafana {
      background-color: #f46800;
      color: white;
    }

    &-python {
      background-color: #3776ab;
      color: white;
    }

    &-powershell {
      background-color: #5391fe;
      color: #06132c;
    }

    &-mssql {
      background-color: #a91d22;
      color: white;
    }

    &-mysql {
      background-color: #00758f;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }
  }
}
</style>
