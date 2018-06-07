<template>
    <div>
        <div>
        <h2 class="title is-2">Article Search Demo</h2>
            <p class="subtitle is-5 has-text-grey">...by <a href="https://github.com/mikedonnici" target="_blank">MikeD</a></p>
        </div>
        <div class="process-img">
            <img src="https://docs.google.com/drawings/d/e/2PACX-1vReACz8snzccvhESqNVbb7UEBWUTmfD8z9NJ-xXJR141KEvidW_qPnTGqjbowKS1pH6CZA8ugz4HCo2/pub?w=647&h=430"
                 alt="">
        </div>
        <div>
            <ais-index
                    :app-id="Config.ALGOLIA_APP_ID"
                    :api-key="Config.ALGOLIA_API_KEY"
                    :index-name="Config.ALGOLIA_RESOURCES_INDEX"
                    :query-parameters="{'page': page, 'snippetEllipsisText': '…'}"
            >
                <div class="field">
                    <p class="control has-icons-left">
                        <ais-input class="input is-large is-success" type="text"
                                   placeholder="search for..."></ais-input>
                        <span class="icon is-small is-left"><i class="fas fa-search"></i></span>
                    </p>
                </div>
                <div class="field">
                    <p>
                        <ais-stats/>
                    </p>
                </div>
                <ais-results :stack="true">
                    <template slot-scope="{ result }">
                        <div class="box search-result">
                            <h5 class="title is-5 is-marginless">
                                <ais-highlight :result="result" attribute-name="name"></ais-highlight>
                            </h5>
                            <p class="subtitle is-6 is-italic has-text-grey-light is-marginless">
                                <a @click="openResource(result.shortUrl)">{{ resourceLinkText(result) }}</a>
                            </p>
                            <ais-snippet :result="result" attribute-name="description"></ais-snippet>
                        </div>
                    </template>
                </ais-results>

                <div id="loadmore"></div>

            </ais-index>
        </div>
    </div>
</template>

<script>
  import Config from '~/config'
  import ScrollMonitor from 'scrollmonitor'

  export default {

    data() {
      return {
        Config,
        page: 1,
      }
    },


    methods: {

      // create link test for a search result
      resourceLinkText(result) {

        let t = (result.sourceNameAbbrev ? result.sourceNameAbbrev : '') +
          (result.sourcePubDate ? result.sourcePubDate : '') +
          (result.sourceVolume ? '; ' + result.sourceVolume : '') +
          (result.sourceIssue ? '(' + result.sourceIssue + ')' : '') +
          (result.sourcePages ? ': ' + result.sourcePages : '')

        if (t) {
          return t
        }

        // resort to the short link url
        return result.shortUrl
      },

      openResource(url) {
        window.open(url)
      },

      loadMore: function () {
        this.page++;
      },
    },

    mounted() {
      let e = document.getElementById('loadmore')
      let w = ScrollMonitor.create(e)
      w.enterViewport(() => {
        this.loadMore()
      })
    }
  }
</script>

<style scoped>
    .process-img {
        margin-top: 4rem;
        margin-bottom: -110px;
    }
</style>
