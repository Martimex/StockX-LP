<script setup lang="ts">
    import type {InputItem } from '@/types';

    const data = defineProps<{
        inputData: InputItem
    }>();

    function applyConditionalClasses():string {
        let additionalClasses = '';
        if(data.inputData.isHalfSized) additionalClasses += ` flex-1 `;
        additionalClasses += data.inputData.isMarked? ` border-green text-green placeholder-green ` : ` border-silver `;
        return additionalClasses;
    }

</script>

<template>
    <input 
        :type="$props.inputData.type" 
        :id="$props.inputData.identifier" 
        :name="$props.inputData.identifier" 
        :class="`w-full p-3 rounded-lg border-2 ${applyConditionalClasses()}`"
        :aria-label="$props.inputData.placeholder" 
        :placeholder="$props.inputData.placeholder"
    />
</template>

<style scoped>

</style>