<template>
  <Content>
    <Container>
      <router-link to="/">
        <BackButton>
          <Icon icon="eva:arrow-back-outline" />
        </BackButton>
      </router-link>
      <Header>
        <BasicInformations>
          <h2>{{ repo.name }}</h2>
          <p>{{ repo.description || 'Without description' }}</p>
          <DownloadButton
            :href="repo.svn_url"
            target="_blank"
          >
            View Repository
          </DownloadButton>
        </BasicInformations>
        <Profile>
          <img
            :src="user.avatar_url"
            :alt="user.login"
          >
          <p>
            {{ new Date(repo.created_at).toLocaleDateString(
              "en-US",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            ) }}
          </p>
        </Profile>
      </Header>
      <IssueList>
        <p>Issues</p>
        <strong v-if="!issues.length">
          This repository has no issues
        </strong>
        <li
          v-for="(issue, index) in issues"
          :key="index"
        >
          <img
            :src="issue.user.avatar_url"
            :alt="issue.user.login"
          >
          <div>
            <strong>
              <a
                :href="issue.html_url"
                target="_blank"
              >{{
                issue.title }}
              </a>
              <span
                v-for="(label) in issue.labels"
                :key="label.id"
              >{{ label.name }}</span>
            </strong>
          </div>
        </li>
      </IssueList>
    </Container>
  </Content>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { mapState } from 'vuex';
import { Container, Content, BasicInformations, Header, Profile, BackButton, DownloadButton, IssueList } from './Repository.styles';
import api from '../../services/api';

export default {
    name: 'Repository',
    components: {
        Container,
        Content,
        BasicInformations,
        Header,
        Profile,
        BackButton,
        Icon,
        DownloadButton,
        IssueList
    },
    data: function() {
      return {
        issues: []
      };
    },
    computed: {
      ...mapState({
        repos: state => state.user.repos,
        user: state => state.user
      }),
      repo() {
        const newRepo = this.repos.length > 0 ? this.repos.find(repo => repo.name === this.$route.params.repository) : {}
        document.title = newRepo.name || '';
        return newRepo;
      }
    },
    mounted() {
      if(!this.repo.name) {
        this.$router.push('/')
        return;
      }
      api.get(this.repo.issues_url.replace('{/number}', '')).then((response) => {
        this.issues = response.data;
      })
    }
}
</script>
