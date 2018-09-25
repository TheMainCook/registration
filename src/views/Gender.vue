<template>
  <div>
    <h1>{{gender}} is the gender from GraphQL.</h1>
  </div>
</template>

<script>
/*
 * View that gets a 'gender' variable from faker-graphql and displays it.
 */
import gql from 'graphql-tag';

export default {
  name: 'Gender',
  apollo: {
    gender: gql`{ gender }`,
  },
};
</script>
