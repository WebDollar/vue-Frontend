<template>

    <div id="faqSection">

        <span class="alignCenter bigMarginTop pageTitle">{{ $i18n.t('heroes.faq.cryptocurrencyExplained') }}</span>

        <div class="faqContainer sectionCenteredWidth">

            <div class="faqSection">

                <collapse-faq :selected="false" ref="WhatIsWebDollar">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatIsWebdollar') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatIsWebdollarAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatsItLikeUsingWebDollar">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatItsLikeUsingWebd') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatItsLikeUsingWebdAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatsValueOfWebDollarInFiatCurrency">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatsValueOfWebDollarInFiatCurrency') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatsValueOfWebDollarInFiatCurrencyAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatAreRisksOfMiningWebDollarInBrowser">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatAreRisksOfMiningWebDollarInBrowser') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatAreRisksOfMiningWebDollarInBrowserAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowIsWebDollarDifferent">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howIsWebDollarDifferent') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.howIsWebDollarDifferentAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhereAreTheWalletsStored">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whereAreTheWalletsStored') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whereAreTheWalletsStoredAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="SupportSmartContracts">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.supportSmartContracts') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.supportSmartContractsAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="MyBalanceSwitchedToZero">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.myBalanceSwitchedToZero') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.myBalanceSwitchedToZeroAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPotentialBalance">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatIsPotentialBalance') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatIsPotentialBalanceAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="PoolMiningLinkChangeForTerminalMiners">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.poolMiningLinkChangeForTerminalMiners') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.poolMiningLinkChangeForTerminalMinersAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPoW">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatIsPoW') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatIsPoWAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowWillPoSWorkOnConsensus">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howWillPoSWorkOnConsensus') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.howWillPoSWorkOnConsensusAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="MineInPoSFromScratchOrBuyInOrderToStake">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.mineInPoSFromScratchOrBuyInOrderToStake') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.mineInPoSFromScratchOrBuyInOrderToStakeAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="IsWebDollarAToken">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.isWebDollarAToken') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.isWebDollarATokenAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="CompatibleBrowsers">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.compatibleBrowsers') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.compatibleBrowsersAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="DoesItWorkOnIphoneIos">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.doesItWorkOnIphoneIos') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.doesItWorkOnIphoneIosAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowDoIBackupWebdWallet">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howDoIBackupWebdWallet') }}
                    </div>
                    <div slot="collapse-body" v-html="$i18n.t('heroes.faq.howDoIBackupWebdWalletAnswer')" />
                </collapse-faq>

            </div>

            <div class="faqSection">

                <collapse-faq :selected="false" ref="HowAreWEBDsCreated">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howAreWEBDsCreated') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.howAreWEBDsCreatedAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatCanIDoWithWebDollars">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatCanIDoWithWebDollars') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatCanIDoWithWebDollarsAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowCanIGetWebDollars">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howCanIGetWebDollars') }}
                    </div>
                    <div slot="collapse-body" v-html="$i18n.t('heroes.faq.howCanIGetWebDollarsAnswer')" />
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowMuchWebdEarnIn24HoursMining">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howMuchWebdEarnIn24HoursMining') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.howMuchWebdEarnIn24HoursMiningAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowAreWalletsSecured">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.howAreWalletsSecured') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.howAreWalletsSecuredAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="UseOtherWallets">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.useOtherWallets') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.useOtherWalletsAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="ImportWalletBrowser">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.importWalletBrowser') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.importWalletBrowserAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsAvailableBalance">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatIsAvailableBalance') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatIsAvailableBalanceAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="PotentialBalanceUpAndDown">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.potentialBalanceUpAndDown') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.potentialBalanceUpAndDownAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPoS">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whatIsPoS') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whatIsPoSAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhenMiningInPoSKeepAllOfStakeInOneWallet">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whenMiningInPoSKeepAllOfStakeInOneWallet') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.whenMiningInPoSKeepAllOfStakeInOneWalletAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="StakingMyCoinsWithPOSRequiresCertainTypeOfDevice">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.stakingMyCoinsWithPOSRequiresCertainTypeOfDevice') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.stakingMyCoinsWithPOSRequiresCertainTypeOfDeviceAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HelpTheProjectWhomDoIContact">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.helpTheProjectWhomDoIContact') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.helpTheProjectWhomDoIContactAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="ImplementWEBDAsAPaymentOption">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.implementWEBDAsAPaymentOption') }}
                    </div>
                    <div slot="collapse-body" v-html="$i18n.t('heroes.faq.implementWEBDAsAPaymentOptionAnswer')" />
                </collapse-faq>

                <collapse-faq :selected="false" ref="DoesItWorkOnAndroidPhones">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.doesItWorkOnAndroidPhones') }}
                    </div>
                    <div slot="collapse-body">
                        {{ $i18n.t('heroes.faq.doesItWorkOnAndroidPhonesAnswer') }}
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhereCanISeeTheSourceCode">
                    <div slot="collapse-header">
                        {{ $i18n.t('heroes.faq.whereCanISeeTheSourceCode') }}
                    </div>
                    <div slot="collapse-body" v-html="$i18n.t('heroes.faq.whereCanISeeTheSourceCodeAnswer')" />
                </collapse-faq>

            </div>

        </div>

        <Center>
            <h2 style="margin-top: 40px; letter-spacing: 1px;" v-html="$i18n.t('heroes.faq.stillHaveQuestionsTelegram')" />
        </Center>

    </div>
</template>

<script>
    import CollapseFaq from './extend/CollapseFaq.vue';
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
