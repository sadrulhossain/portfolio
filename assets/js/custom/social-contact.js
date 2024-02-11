$(function() {
    // social contacts - hello
    const social_contacts = [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/sadrul.hossain.7',
            icon: 'facebook',
        },
        {
            name: 'X',
            href: 'https://twitter.com/hossainsadrul',
            icon: 'twitter',
        },
        {
            name: 'Github',
            href: 'https://github.com/sadrulhossain',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/s-sadrul-hossain-71624aa6/',
            icon: 'linkedin',
        },
    ];
    loadSocialContacts(social_contacts)
    function loadSocialContacts(social_contacts){
        for(let x in social_contacts){
            let item = social_contacts[x]
            let block = '<li>\n' +
                '                    <a\n' +
                '                      href="'+item.href+'"\n' +
                '                      target="_new"\n' +
                '                      ><i class="fa fa-'+item.icon+'"></i\n' +
                '                    ></a>\n' +
                '                  </li>'
            $('.social-icon').append(block)

        }
    }

})