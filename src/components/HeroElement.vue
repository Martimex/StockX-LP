<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { HeroItem } from '@/types';

    const data = defineProps<{
        heroData: HeroItem,
        isEven: boolean,
    }>();

    const heading = ref<null | HTMLHeadingElement>(null);
    const finalHeadingContent = ref<string>(data.heroData.headingText);

    onMounted(() => setMarkedText());

    function getImagePath() {
        return `/src/assets/images/hero_images/${data.heroData.imgName}.png`;
    }

    function setMarkedText() {
        if(!heading.value) return;
        const markedHeadingTextPartsFound = data.heroData.markedHeadingTextParts.filter(textPart => data.heroData.headingText.includes(textPart));
        for(let textPart of markedHeadingTextPartsFound) {
            finalHeadingContent.value = finalHeadingContent.value.replace(textPart, generateMarkedText);
        }
        heading.value.innerHTML = finalHeadingContent.value;
    }

    function generateMarkedText(text: string):string {
        return `<span class="text-green">${text}</span>`;
    }

</script>

<template>
    <div class="block grid-cols-2 grid-rows-1 my-16 mx-auto    sm:grid">
        <div class="w-full h-full">
            <img class="w-full rounded-2xl" :src="getImagePath()" alt="StockX box rewards" />
        </div>
        <div class="my-auto mx-6" :class="isEven? `-order-1    sm:mr-[5vw]` : `sm:ml-[5vw]`" >
            <h3 class="text-h3 font-bold my-9 block" ref="heading"> {{ $props.heroData.headingText }} </h3>
            <p class="text-m my-3" v-for="(paragraph, index) in $props.heroData.paragraphs" :key="`paragraph-` + index"> 
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>