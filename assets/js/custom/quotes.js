$(function() {
    const quotes = [
        {
            quote: 'If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.',
            quoter: {
                name: 'Lyndon B. Johnson',
                affiliation: 'Former President of the United States of America',
            }
        },
    ]
    loadQuotes(quotes)

    function loadQuotes(quotes){
        for(let x in quotes){
            let item = quotes[x]
            let block = '<div class="each-quates col-sm-12 col-md-12">\n' +
                '              <span class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" style="font-size: 18px; font-style: italic; font-weight: 500">\n' +
                '                “'+item.quote+'”\n' +
                '              </span>\n' +
                '              <p class="wow fadeInUp text-right" data-wow-duration="0.8s" data-wow-delay="0.4s">\n' +
                '                - '+item.quoter.name+', '+item.quoter.affiliation+'\n' +
                '              </p>\n' +
                '            </div>'

            $('.mh-quates .quotes').append(block)
        }
    }
})