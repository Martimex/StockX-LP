<script setup lang="ts">
    import type { FaqItem } from "@/types";

    defineProps<{
        faqData: FaqItem
    }>();
</script>

<template>
    <div class="mx-6 my-6    sm:mx-0">
        <p class="text-m font-semibold mb-3 text-center   sm:text-left"> {{ $props.faqData.question }} </p>
        <span class="text-s"> {{ $props.faqData.answer }} </span>
    </div>
</template>

<style scoped>

</style>