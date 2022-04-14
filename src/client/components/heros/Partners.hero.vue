<template>
<div id="faqSection">

  <span class="alignCenter bigMarginTop pageTitle">{{ $i18n.t('heroes.partners.partners') }}</span>

  <div class="partnerContainer sectionCenteredWidth">

    <div class="faqSection">

      <collapse-faq :selected="false" ref="exchanges" id="exchanges">
        <div slot="collapse-header">
          {{ $i18n.t('heroes.partners.exchanges') }}
        </div>
        <div slot="collapse-body">

          <div class="partnerWrapper threeTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://p2pb2b.io/trade/WEBD_ETH" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/P2PB2B.png" alt="P2PB2B" title="P2PB2B.io"></a>
                <div class="partners-box">
                  <ul class="partner-list">
                    <li><a href="https://p2pb2b.io/trade/WEBD_ETH" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                    <li><a href="https://twitter.com/p2pb2b" class="fa fa-twitter" rel="noopener" target="_blank" aria-label="twitter"></a></li>
                  </ul>
                </div>
              </div>
              <span class="teamName">P2PB2B</span>
              <span class="teamRole">{{ $i18n.t('heroes.partners.cryptoExchange') }}</span>
              <p class="description">{{ $i18n.t('heroes.partners.p2pb2bDescription') }}</p>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://webd.timi.ro/cart.php?gid=1" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/WebDollarCarbon.png" alt="WebdTimi" title="WebdTimi"></a>
                <div class="partners-box">
                  <ul class="partner-list">
                    <li><a href="https://webd.timi.ro/cart.php?gid=1" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                    <li><a href="https://twitter.com/webdollar_io" class="fa fa-twitter" rel="noopener" target="_blank" aria-label="twitter"></a></li>
                  </ul>
                </div>
              </div>
              <span class="teamName">WebD Timi</span>
              <span class="teamRole">{{ $i18n.t('heroes.partners.cryptoExchange') }}</span>
              <p class="description">{{ $i18n.t('heroes.partners.webdTimiDescription') }}</p>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://international.indoex.io" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/IndoEx.png" alt="INDOEX" title="IndoEx"></a>
                <div class="partners-box">
                  <ul class="partner-list">
                    <li><a href="https://international.indoex.io/trade/WEBD_ETH" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                    <li><a href="https://twitter.com/Indoex_LTD" class="fa fa-twitter" rel="noopener" target="_blank" aria-label="twitter"></a></li>
                  </ul>
                </div>
              </div>
              <span class="teamName">IndoEx</span>
              <span class="teamRole">{{ $i18n.t('heroes.partners.cryptoExchange') }}</span>
              <p class="description">{{ $i18n.t('heroes.partners.indoexDescription') }}</p>
            </div>

          </div>

          <div class="partnerWrapper threeTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://vindax.com/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/VinDAX.jpeg" alt="VinDAX" title="VinDAX"></a>
                <div class="partners-box">
                  <ul class="partner-list">
                    <li><a href="https://vindax.com/exchange-base.html?symbol=WEBD_ETH/" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                    <li><a href="https://twitter.com/VinDAXOfficial" class="fa fa-twitter" rel="noopener" target="_blank" aria-label="twitter"></a></li>
                  </ul>
                </div>
              </div>
              <span class="teamName">VinDAX</span>
              <span class="teamRole">{{ $i18n.t('heroes.partners.cryptoExchange') }}</span>
              <p class="description">{{ $i18n.t('heroes.partners.vindaxDescription') }}</p>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://bankcex.com/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/BankCEX.png" alt="BankCEX" title="BankCEX"></a>
                <div class="partners-box">
                  <ul class="partner-list">
                    <li><a href="https://bankcex.com/exchange-base.html?symbol=WEBD_BTC" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                    <li><a href="https://twitter.com/BankCoin2018" class="fa fa-twitter" rel="noopener" target="_blank" aria-label="twitter"></a></li>
                  </ul>
                </div>
              </div>
              <span class="teamName">BankCEX</span>
              <span class="teamRole">{{ $i18n.t('heroes.partners.cryptoExchange') }}</span>
              <p class="description">{{ $i18n.t('heroes.partners.bankcexDescription') }}</p>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://t.me/webdollar_tip_bot" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/Tipbot.png" alt="WebDollarTipBot" title="WebDollar Tip Bot"></a>
                <div class="partners-box">
                  <ul class="partner-list">
                    <li><a href="https://pay.hostero.eu/tipbot" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                    <li><a href="https://twitter.com/webdollartipbot" class="fa fa-twitter" rel="noopener" target="_blank" aria-label="twitter"></a></li>
                  </ul>
                </div>
              </div>
              <span class="teamName">WebDollar Tip Bot</span>
              <span class="teamRole">{{ $i18n.t('heroes.partners.telegramBotForMakingTips') }}</span>
              <p class="description">{{ $i18n.t('heroes.partners.webdollarTipBotDescription') }}</p>
            </div>

          </div>

        </div>
      </collapse-faq>

      <collapse-faq :selected="false" ref="trackers" id="trackers">
        <div slot="collapse-header">
          {{ $i18n.t('heroes.partners.trackers') }}
        </div>
        <div slot="collapse-body">

          <div class="partnerWrapper fourTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://coinmarketcap.com/currencies/webdollar/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinMarketCap.png" alt="CoinMarketCap" title="CoinMarketCap"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinMarketCap</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://www.coingecko.com/en/coins/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinGecko.png" alt="CoinGecko"
                    title="CoinGecko"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinGecko</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://play.google.com/store/apps/details?id=com.blockfolio.blockfolio&hl=en_US" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/BlockFolio.png" alt="Blockfolio" title="Blockfolio"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Blockfolio</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://play.google.com/store/apps/details?id=io.getdelta.android" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/Delta.png" alt="Delta" title="Delta"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Delta</span>
            </div>

          </div>

          <div class="partnerWrapper fourTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://coinpaprika.com/coin/webd-webdollar/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinPaprika.png" alt="CoinPaprika" title="CoinPaprika"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinPaprika</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://digitalcoinprice.com/coins/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/DigitalCoinPrice.png" alt="Digitalcoin" title="Digitalcoin"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">DigitalCoin</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://coincheckup.com/coins/webdollar/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinCheckUp.png" alt="Coin Check Up" title="Coin Check Up"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Coin Check Up</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://walletinvestor.com/forecast/webdollar-prediction" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/WalletInvestor.png" alt="Wallet Investor" title="Wallet Investor"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Wallet Investor</span>
            </div>

          </div>

          <div class="partnerWrapper fourTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://coinmarketcal.com/en/coin/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinMarketCal.png" alt="CoinMarketCal" title="CoinMarketCal"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinMarketCal</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://coinranking.com/coin/webdollar-webd" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinRanking.png" alt="Coinranking" title="Coinranking"></a>

                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Coinranking</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://www.livecoinwatch.com/price/WebDollar-WEBD" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/LiveCoinWatch.png" alt="LiveCoinWatch" title="LiveCoinWatch"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Livecoinwatch</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://coincodex.com/crypto/webdollar/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinCodex.png" alt="Coincodex" title="CoinCodex"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Coincodex</span>
            </div>

          </div>

          <div class="partnerWrapper fourTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://neironix.io/cryptocurrency/webd" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/Neironix.png" alt="Neironix" title="Neironix"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Neironix</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://coingolive.com/en/coins/webdollar/usd/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinGoLive.png" alt="CoinGoLive" title="CoinGoLive"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Coingolive</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://cointobuy.io/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinToBuy.png" alt="CoinToBuy" title="CoinToBuy"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinToBuy</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://coinutil.net/currencies/webdollar?hl=en" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinUtil.png" alt="CoinUtil" title="CoinUtil"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinUtil</span>
            </div>
          </div>

          <div class="partnerWrapper fourTeamColums">


            <div>
              <div class="team-pic">
                <a href="https://pricemycoin.com/currencies/WEBD" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/PriceMyCoin.png" alt="PriceMyCoin" title="PriceMyCoin"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">PriceMyCoin</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://bitscreener.com/coins/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/BitScreener.png" alt="BitScreener" title="BitScreener"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">BitScreener</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://cmc.io/coins/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CMC.io.png" alt="CMC.io" title="CMC.io"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CMC.io</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://cryptocoinworld.io/webdollar-price/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CryptoCoinWorld.png" alt="CryptoCoinWorld" title="CryptoCoinWorld"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CryptoCoinWorld</span>
            </div>

          </div>

          <div class="partnerWrapper fourTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://coinexpressway.com/Coin/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinExpressWay.png" alt="CoinExpressWay" title="CoinExpressWay"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinExpressWay</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://coinkurs.com/webdollar-kurs-dollar.html" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinKurs.png" alt="CoinKurs" title="CoinKurs"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinKurs</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://www.marketbeat.com/cryptocurrencies/webdollar/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/MarketBeat.png" alt="MarketBeat" title="MarketBeat"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">MarketBeat</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://wallmine.com/crypto/webd/charts" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/WallMine.png" alt="WallMine" title="WallMine"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">WallMine</span>
            </div>

          </div>

          <div class="partnerWrapper fourTeamColums">

            <div>
              <div class="team-pic">
                <a href="https://www.coinmarkets.net/currencies/webdollar/" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/CoinMarkets.png" alt="CoinMarkets" title="CoinMarkets"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">CoinMarkets</span>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://rates.ninja/cryptocurrency/webdollar" target="_blank"> <img class="partner-logo" src="/public/assets/images/partners/RatesNinja.png" alt="RatesNinja" title="RatesNinja"></a>
                <div class="partners-box">
                </div>
              </div>
              <span class="teamName">Rates.Ninja</span>
            </div>

          </div>
        </div>

      </collapse-faq>

      <collapse-faq :selected="false" ref="businesses" id="businesses">
        <div slot="collapse-header">
          {{ $i18n.t('heroes.partners.businesses') }}
        </div>
        <div slot="collapse-body">

          <div class="partnerWrapper twoTeamColums">
            <div>
              <div class="team-pic">
                <a href="https://www.hostero.eu" target="_blank"><span class="business-name">Hostero</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>

            <div>
              <div class="team-pic">
                <a href="http://www.webdollar.shop/" target="_blank"> <span class="business-name">Webd.Shop</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>
          </div>

          <div class="partnerWrapper twoTeamColums">
            <div>
              <div class="team-pic">
                <a href="https://www.facebook.com/mojitoolanu/" target="_blank"><span class="business-name">Mojito Club</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>

            <div>
              <div class="team-pic">
                <a href="http://www.ale-teo.com/en/" target="_blank"><span class="business-name">Ale-Teo</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>
          </div>

          <div class="partnerWrapper twoTeamColums">
            <div>
              <div class="team-pic">
                <a href="https://psihosexolog.ro/" target="_blank"><span class="business-name">dr. Radu Balanean</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://shop.aji.ro/" target="_blank"><span class="business-name">Shop Aji</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>
          </div>

          <div class="partnerWrapper twoTeamColums">
            <div>
              <div class="team-pic">
                <a href="http://teajuta.ro/" target="_blank"><span class="business-name">teajuta.ro</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://cursformatori.ro/" target="_blank"><span class="business-name">ITSC</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>
          </div>

          <div class="partnerWrapper twoTeamColums">
            <div>
              <div class="team-pic">
                <a href="https://steemit.com/crypto/@concorde/first-crypto-coffee-in-romania-cryptopayments-accepted" target="_blank"><span class="business-name">Crypto Coffee</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>

            <div>
              <div class="team-pic">
                <a href="https://e-primariata.ro" target="_blank"><span class="business-name">E-primariaTa.ro</span></a>
                <div class="partners-box">
                </div>
              </div>
            </div>
          </div>

        </div>
      </collapse-faq>

    </div>


  </div>

  <center>
    <h2 class="bottom-message">
      {{ $i18n.t('heroes.partners.wantToBecomePartner') }} <br>
      <a href="https://t.me/WebDollar" target="_blank">{{ $i18n.t('heroes.partners.talkToUsOnTelegram') }}</a>
    </h2>
  </center>

</div>
</template>

<script>
import CollapseFaq from './extend/CollapsePartners.vue';
let VueScrollTo = require('vue-scrollto');

export default {
  name: "YourComponent",
  components: {
    CollapseFaq
  },
  mounted() {
    let qHash = this.$route.params.qHash;

    if ((typeof qHash === 'undefined') || !this.$refs.hasOwnProperty(qHash)) {
      return;
    }

    let qRef = this.$refs[qHash];

    qRef.toggle();

    VueScrollTo.scrollTo(qRef.$el);
  }
}
</script>

<style>
.partner-logo {
  height: 100px;
  width: auto;
  border-radius: 20px;
}

.partner-logo:hover {
  transform: scale(1.1);
  -webkit-transition: transform .3s ease-out;
  -moz-transition: transform .3s ease-out;
  -o-transition: transform .3s ease-out;
  transition: transform .3s ease-out;
}

@media only screen and (max-width: 600px) {
  .partner-logo {
    height: auto;
    max-width: 100px;

  }
}

.partners-box {
  font-size: 23px;
}

.partners-box ul {
  list-style: none;
  list-style-type: none;
}

.partners-box ul li {
  display: inline;
  padding: 5px;
}

.bottom-message {

  /* width: auto;
              position: absolute;
              bottom: 10px;
              left: 0;
              right: 0;
              margin-left: auto;
              margin-right: auto; */
  position: -webkit-sticky;
  /* Safari */
  position: sticky;
  top: 0;

}

.partnerWrapper p {
  font-size: 16px;
  background-color: #02010229;
  border-radius: 5px;
  padding: 20px 20px;
}

.partnerWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  margin-top: 20px;
  grid-gap: 30px;
  margin-left: 30px;
  margin-right: 30px;

}

.partnerWrapper h4 {
  line-height: 25px;
}

.partnerWrapper .our-team .team-pic {
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 25px;
}

.partnerWrapper .our-team .team-pic img {
  width: 150px;
  height: 150px;
}

.partnerWrapper .our-team .team-pic .over-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 35, 35, 0.88);
  opacity: 0;
  transition: all 0.30s ease 0s;
}

.partnerWrapper .our-team .over-layer:hover {
  opacity: 1;
}

.partnerWrapper .our-team .social-link {
  margin: 0;
  padding: 0;
  position: relative;
  top: 65%;
  left: 0;
  list-style: none;
  transition: all 0.50s ease 0s;
}

.partnerWrapper .our-team .over-layer:hover .social-link {
  top: 45%;
}

.partnerWrapper .our-team .social-link li {
  display: inline-block;
  margin-right: 5px;
  transition: all 0.40s linear 0s;
  transform: translateY(0px);
}

.partnerWrapper .our-team .social-link li a {

  color: #fcd26c;
  background: #1b1b1b;
  font-size: 22px;
  border-radius: 50%;
  text-align: center;
  padding: 7px;
  text-decoration: none;
}

.partnerWrapper .our-team .social-link-4 li a {
  font-size: 18px;
}

.partnerWrapper .our-team .social-link li a:hover {
  background: #4f4f4f;
  color: #fcd26c;
}

.partnerWrapper .our-team .social-link li:hover {
  transform: translateY(-13px);
}

.teamName {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 100 !important;
  margin-top: 10px;
  margin-bottom: 5px;
}

.teamRole {
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
}

.business-name {
  height: auto;
  width: auto;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  display: block;
  font-weight: 100 !important;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  line-height: 40px;
  border: 2px solid;
  border-color: #1b1b1b;
  border-radius: 20px;

}

.business-name:hover {
  color: #fec02c;
  border-color: #1b1b1b;
  background-color: #1b1b1b;
  -webkit-transition: background-color .3s ease-out;
  -moz-transition: background-color .3s ease-out;
  -o-transition: background-color .3s ease-out;
  transition: background-color .3s ease-out;
}
</style>
