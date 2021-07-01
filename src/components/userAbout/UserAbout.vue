<template>
  <Container
    :href="user.html_url"
    target="_blank"
  >
    <Profile>
      <img
        :src="user.avatar_url"
        alt="User"
      >
      <h2>{{ user.name }}</h2>
      <p>{{ user.email || 'Email is privated.' }}</p>
      <p>{{ user.bio }}</p>
    </Profile>
    <Details>
      <div class="item">
        <Icon icon="bi:person-plus-fill" />
        {{ user.followers }}
      </div>
      <div class="item">
        <Icon icon="bx:bxs-book-bookmark" />
        {{ user.public_repos }}
      </div>
      <div
        v-if="!!user.company"
        class="item"
      >
        <Icon icon="octicon:organization-16" />
        {{ user.company }}
      </div>
      <div
        v-if="!!user.twitter_username"
        class="item"
      >
        <Icon icon="akar-icons:twitter-fill" />
        @{{ user.twitter_username }}
      </div>
    </Details>
  </Container>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { Container, Profile, Details } from './UserAbout.styles'

export default {
    name: 'UserAbout',
    components: {
        Container,
        Profile,
        Details,
        Icon
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    }
}
</script>