<template>
  <div>
    <Cards v-if="!!user.repos.length">
      <Repositories
        :repositories="user.repos"
      />
      <UserAbout
        :user="user"
      />
    </Cards>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Repositories from '../../components/repositories/Repositories'
import UserAbout from '../../components/userAbout/UserAbout'

import { Cards } from './Home.styles'

export default {
    name: 'Home',
    components: {
        Repositories,
        Cards,
        UserAbout
    },
    computed: {
      ...mapState({
        user: state => state.user
      })
    },
    mounted() {
      document.title = 'Repo-Prova'
    }
}
</script>