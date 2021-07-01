<template>
  <Container>
    <Content>
      <Logo>
        <Icon icon="akar-icons:github-fill" />
        <h2>GitHub</h2>
        <p>{{ path === '/' ? 'Repository List' : 'User Repository' }}</p>
      </Logo>
      <Searchbar
        v-if="path === '/'"
        class="search"
      />
    </Content>
  </Container>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { Container, Content, Logo } from './Header.styles'
import Searchbar from '../searchbar/Searchbar'

export default {
    name: 'Header',
    components: {
        Container,
        Content,
        Icon,
        Logo,
        Searchbar
    },
    data: function() {
      return {
        path: this.$router.currentRoute.path
      };
    },
   watch: {
     $route(to, from) {
      this.path = to.path;
    }
   }
    
}
</script>