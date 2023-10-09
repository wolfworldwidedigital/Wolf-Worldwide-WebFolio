<script>
import { fetchOneEntry, RenderContent, isPreviewing } from '@builder.io/sdk-vue/vue3';
import '@builder.io/sdk-vue/vue3/css/styles.css'; // Assuming this is the correct path

const BUILDER_PUBLIC_API_KEY = '7572bd035889474a89965ab880046ea3'; // Defined the API key as a constant

export default {
  data: () => ({
    canShowContent: false,
    content: null,
    apiKey: BUILDER_PUBLIC_API_KEY,
  }),
  mounted() {
    fetchOneEntry({
      model: 'page',
      apiKey: BUILDER_PUBLIC_API_KEY, // Used the constant here
      userAttributes: {
        urlPath: window.location.pathname,
      },
    }).then(res => {
      this.content = res;
      this.canShowContent = this.content || isPreviewing();
    });
  },
}
</script>

<template>
  <RenderContent
    v-if="canShowContent"
    model="page"
    :content="content"
    :api-key="apiKey"
  />
</template>
