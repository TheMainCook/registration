<template>
    <div>
        <h1>{{name}} is the name from GraphQL.</h1>
    </div>
</template>

<script>
/*
 * View that gets a 'name' variable from faker-graphql and displays it.
 */
import gql from 'graphql-tag';

export default {
  name: 'Home',
  apollo: {
    name: gql`{ name }`,
  },
};
</script>
