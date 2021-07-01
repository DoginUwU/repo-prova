<template>
  <Container>
    <Title>
      {{ repository.name }}
    </Title>
    <Details>
      <div
        v-if="!!repository.language"
        class="item"
      >
        <Icon icon="ant-design:coffee-outlined" />
        {{ repository.language }}
      </div>
      <div class="item">
        <Icon icon="ant-design:star-filled" />
        {{ repository.stargazers_count }}
      </div>
    </Details>
    <router-link :to="{ name: 'repository', params: { username: repository.owner.login, repository: repository.name } }">
      <Button>
        Show more
      </Button>
    </router-link>
  </Container>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { Container, Title, Details, Button } from './RepositoryItem.styles';

export default {
    name: 'RepositoryItem',
    components: {
        Container,
        Title,
        Details,
        Icon,
        Button
    },
    props: {
      repository: {
        type: Object,
        required: true
      }
    }
}
</script>