<template>
	<div>
		<div class="bg-muted/50 aspect-video rounded-md hover:bg-muted/70 transition-colors cursor-pointer" />
		<div class="pl-1">
			<span class="font-bold block pt-2">This is a video title example</span>
			<span class="text-sm text-muted-foreground block">by Erveon</span>
		</div>
		<div class="flex gap-1 pt-2">
			<span v-for="tag in randomTags" :key="tag"
				class="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium">
				{{ tag }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const tags = ['Positioning', 'Beginner', 'Setup', 'Teamplay']

const randomTags = computed(() => {
	const numTags = Math.random() < 0.7 ? 1 : 2
	const shuffled = [...tags].sort(() => Math.random() - 0.5)
	return shuffled.slice(0, numTags)
})
</script>