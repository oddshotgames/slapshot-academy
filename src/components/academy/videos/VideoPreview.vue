<script setup lang="ts">
import { computed } from 'vue'
import type { Video } from '@/data/videos/videos'

const props = defineProps<{
	video: Video
}>()

const videoId = computed(() => {
	const url = props.video.source
	// Extract video ID from YouTube URL (handles both youtu.be and youtube.com formats)
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/)
	return match ? match[1] : null
})

const thumbnailUrl = computed(() => {
	return videoId.value ? `https://img.youtube.com/vi/${videoId.value}/sddefault.jpg` : null
})
</script>

<template>
	<div>
		<a :href="video.source" target="_blank" rel="noopener" referrerpolicy="strict-origin-when-cross-origin"
			class="block">
			<div v-if="thumbnailUrl"
				class="aspect-video rounded-md overflow-hidden hover:opacity-80 transition-opacity cursor-pointer relative group">
				<img :src="thumbnailUrl" :alt="video.title" class="w-full h-full object-cover" />
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="bg-black/60 rounded-full p-3 group-hover:bg-black/80 transition-colors">
						<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M8 5v14l11-7z" />
						</svg>
					</div>
				</div>
			</div>
			<div v-else
				class="bg-muted/50 aspect-video rounded-md hover:bg-muted/70 transition-colors cursor-pointer" />
		</a>
		<div class="pl-1">
			<a :href="video.source" target="_blank" rel="noopener" referrerpolicy="strict-origin-when-cross-origin"
				class="font-bold block pt-2 truncate hover:text-gray-300 transition-colors cursor-pointer"
				:title="video.title">{{ video.title }}</a>
			<span class="text-sm text-muted-foreground block">by {{ video.author }}</span>
		</div>
		<div class="flex gap-1 pt-2">
			<span v-for="tag in video.tags" :key="tag"
				class="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium">
				{{ tag }}
			</span>
		</div>
	</div>
</template>