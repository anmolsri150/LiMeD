<template>
  <img
    :alt="alt"
    :src="src"
    :class="`img-thumbnail list-thumbnail align-self-center ${className}
    ${rounded!=undefined && 'rounded-circle'} ${small!=undefined && 'small'}`"
  />
</template>
<script>
    export default {
        props: ["alt", "src", "className", "rounded", "small"]
    };
</script>
