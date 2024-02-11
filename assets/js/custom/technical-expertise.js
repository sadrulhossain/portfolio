$(function() {
    const technical_expertise = [
        'PHP', 'Laravel', 'OOP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'AJAX',
        'MySQL', 'PostgreSQL', 'Redis', 'Vue.js', 'Vuex', 'React.js', 'TypeScript', 'Python',
        'AWS', 'DigitalOcean', 'API', 'Postman', 'Third-party API Integration',
        'Payment Gateway Integration', 'Payment Gateway Development',
    ]

    loadTechnicalExpertise(technical_expertise)
    function loadTechnicalExpertise(technical_expertise){
        for(let x in technical_expertise){
            let item = technical_expertise[x]
            let block = '<li><span>'+item+'</span></li>'
            $('.mh-about-tag>.technical-expertise').append(block)

        }
    }
})