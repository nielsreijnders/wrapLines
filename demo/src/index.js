import wrapLines from './../../src/index';

var fadein = document.getElementById('fadeIn'),
    overflow = document.getElementById('overflow'),
    skewY = document.getElementById('skewy');

//For the fadeIn
wrapLines(fadein, '<span>', '</span>');
//For the overflow
wrapLines(overflow, '<div><span>', '</div></span>');
//For the skewY
wrapLines(skewY, '<span>', '</span>');

var tl = new TimelineMax({repeat: -1})

tl
    //Simple fadeIn effect
    .staggerFrom('#fadeIn span', 3, {y: '35px', opacity: 0}, .15, 'start')
    //Overflow effect
    .staggerFrom('#overflow span', 3, {y: '100%'}, .15, 'start')
    //SkewY effect
    .staggerFrom('#skewy span', 3, {y: '35px', opacity: 0, skewY: '-3deg'}, .15, 'start')
