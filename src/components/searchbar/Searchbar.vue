<template>
  <Container>
    <form @submit.prevent="handleSearch">
      <Input
        v-model="userName"
        placeholder="Press Enter to search a user..."
      />
      <button type="submit">
        <Icon icon="bi:search" />
      </button>
    </form>
  </Container>
</template>

<script>
import { mapMutations } from 'vuex';
import { Icon } from '@iconify/vue2';

import { Container, Input } from './Searchbar.styles';
import store from "../../store";

export default{
    name: 'Searchbar',
    components: {
        Container,
        Input,
        Icon
    },
    data: () => ({
        userName: null,
    }),
    methods: {
       ...mapMutations(['getUser']),
        handleSearch() {
            store.commit('getUser', this.userName);
        }
    }
}
</script>
