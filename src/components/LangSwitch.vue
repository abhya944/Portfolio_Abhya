<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";

const localeCycle = ["en", "de", "ja"] as const;

const handleLangSwitch = () => {
  const index = localeCycle.indexOf(locale.value ?? "en");
  const nextLocale = localeCycle[(index + 1) % localeCycle.length] ?? "en";
  changeLocale(nextLocale);
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale === "en" ? "DE" : locale === "de" ? "JA" : "EN" }}</Button
  >
</template>
