<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #not-found>
      <meta http-equiv="refresh" content="0; url=./README.html" />
    </template>
  </Layout>
</template>