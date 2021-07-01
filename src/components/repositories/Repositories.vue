<template>
  <Container>
    <h2>Repositories</h2>
    <List>
      <RepositoryItem
        v-for="(repository, index) in repositories"
        :key="index"
        class="repository_item"
        :repository="repository"
      />
    </List>
  </Container>
</template>

<script>
import { Container, List } from './Repositories.styles'
import RepositoryItem from '../repositoryItem/RepositoryItem';

export default {
    name: 'Repositories',
    components: {
        Container,
        List,
        RepositoryItem
    },
    props: {
      repositories: {
        type: Array,
        required: true
      }
    }
}
</script>