<template>

    <div id="get-started">

        <div id="getStartedSection" class="fullSection backgroundSection">
            <div class="textContainer">

                <h1 class="pageTitle bigMarginTop"><center>{{ $i18n.t('heroes.getStarted.getStarted') }}</center></h1>

                <div id="getStartedContainer">
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-wallet.png" :alt="$i18n.t('heroes.getStarted.getAndBackupWallet')" :title="$i18n.t('heroes.getStarted.getAndBackupWallet')">
                        <h4>{{ $i18n.t('heroes.getStarted.getAndBackupWallet') }}</h4>
                        <p>{{ $i18n.t('heroes.getStarted.walletAutomaticallyCreated') }}</p>
                        <p>{{ $i18n.t('heroes.getStarted.exportInSafePlace') }}</p>
                    </div>
                    <div>
                        <img class="lazy" data-src="/public/assets/images/logo-coin.png" :alt="$i18n.t('heroes.getStarted.getWebdollars')" :title="$i18n.t('heroes.getStarted.getWebdollars')">
                        <h4>{{ $i18n.t('heroes.getStarted.getWebdollars') }}</h4>
                        <p v-html="$i18n.t('heroes.getStarted.buyFromExchanges')" />
                    </div>
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-ming.png" :alt="$i18n.t('heroes.getStarted.stakeWebdollar')" :title="$i18n.t('heroes.getStarted.stakeWebdollar')">
                        <h4>{{ $i18n.t('heroes.getStarted.stakeWebdollar') }}</h4>
                        <p>{{ $i18n.t('heroes.getStarted.stakeWebdollarFromBrowser') }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style>

    #getStartedContainer {
        display: grid;
        margin-left: 20px;
        margin-right: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 20px;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        #getStartedContainer {
            grid-template-columns: 1fr;
        }
    }

    @media only screen and (max-width: 992px) {
        #getStartedContainer div {
            padding-bottom: 50px;
        }
    }

    #getStartedContainer img {
        width: 170px;
        height: 170px;
        margin-bottom: 20px;
        border-radius: 100%;
    }

    #getStartedContainer h4 {
        font-size: 24px;
        margin-bottom: 30px;
        height: 55px;
    }

    #getStartedContainer p {
        font-size: 18px;
        line-height: 28px;
    }

    @media only screen and (max-width : 831px) {
        #getStartedSection {
            height: auto!important;
        }
    }

    @media only screen and (max-width: 768px) {
        #getStartedSection .bigMarginTop {
            margin-bottom: 0;
            margin-top: 50px;
        }
    }

</style>
