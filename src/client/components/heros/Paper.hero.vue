<template>

    <div id="papers" class="">

        <span class="pageTitle alignCenter">{{ $i18n.t('heroes.papers.papers') }}</span>

        <div class="twoColums specialMarginTop">

            <div class="paperItem paperItemColor1 blackPaper">
                <a href="/public/doc/WebDollar-Black-Paper.pdf" rel="noopener" target="_blank" class="paperItem paperItemColor1 whitePaper">
                    <div class="paperItem2 paperItemColor2">
                        <div class="paperItem2 paperItemColor3">
                            <img class="paperImg lazy" :alt="$i18n.t('heroes.papers.blackPaper')" data-src="/public/assets/images/black_paper.png">
                            <h2>{{ $i18n.t('heroes.papers.blackPaper') }}</h2>
                        </div>
                    </div>
                </a>
                <span>{{ $i18n.t('heroes.papers.blackPaperDescription') }}</span>
            </div>

            <a href="/public/doc/WebDollar-White-Paper.pdf" rel="noopener" target="_blank" class="paperItem paperItemColor1 whitePaper">
                <div class="paperItem2 paperItemColor2">
                    <div class="paperItem2 paperItemColor3">
                        <img class="paperImg lazy" :alt="$i18n.t('heroes.papers.whitePaper')" data-src="/public/assets/images/white_paper.png">
                        <h2>{{ $i18n.t('heroes.papers.whitePaper') }}</h2>
                    </div>
                </div>
                <span>{{ $i18n.t('heroes.papers.whitePaperDescription') }}</span>
            </a>

        </div>

    </div>
</template>

<style>

    .specialMarginTop{
        padding: 40px 0;
        text-align: center;
    }

    .paperImg{
        width: 160px;
        margin: 40px 0 10px 0;
        transition: all 0.3s ease;
    }

    .paperImg:hover{
        margin-top: 10px;
        margin-bottom: 0;
        transition: all 0.3s ease;
    }

    #papers h2{
        font-weight: bolder!important;
    }

    #papers .twoColums{
        grid-column-gap: 150px;
    }

    .paperItem{
        background-color: #ffffff2e;
        padding: 10px 0 30px 0;
        height: 335px;
        overflow: hidden;
    }

    .paperItem span{
        margin-top: 12px;
    }

    .paperItem2{
        padding-top: 10px;
        display: block;
        padding-bottom: 10px
    }

    .paperItemColor1{
        background-color: #262626;
    }
    .paperItemColor2{
        background-color: #414141;
    }
    .paperItemColor3{
        background-color: #262626;
    }

    .light .paperItemColor1{
        background-color: #d5d9e0;
    }
    .light .paperItemColor2{
        background-color: #bdc1c7;
    }
    .light .paperItemColor3{
        background-color: #d5d9e0;
    }

    .blackPaper{
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
    }

    .whitePaper{
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
    }

</style>
