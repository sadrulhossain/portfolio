$(function (){
    /** start :: custom variables */
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

    // technical expertise - about me
    const technical_expertise = [
        'PHP', 'Laravel', 'OOP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'AJAX', 'MySQL', 'PostgreSQL', 'Redis',
        'Vue.js', 'Vuex', 'React.js', 'TypeScript', 'Python', 'AWS', 'DigitalOcean', 'API', 'Postman',
        'Third-party API Integration', 'Payment Gateway Integration', 'Payment Gateway Development',
    ]

    // professional expertise - about me
    const professional_expertise = [
        'Payment Gateway', 'EdTech', 'FinTech', 'Software Development', 'SDLC', 'Client Communication',
        'Client Communication', 'Team Management', 'Sales & Order Tracking Solution', 'Distribution Channel Solution',
        'E-commerce', 'Inventory Management Solution'
    ]

    // education
    const educations = [
        {
            degree: 'M.Sc. in CSE',
            uni_board: 'Jahangirnagar University',
            tenure: '2017-18',
            faculty: '<b>Faculty:</b> Mathematical & Physical Sciences<br />\n',
            department: '<b>Department:</b> Computer Science and Engineering<br />\n',
            institute: '',
            division: '',
            result: {
                type: 'CGPA',
                achieved: '3.70',
                full: '4.00',
            },
        },
        {
            degree: 'B.Sc. in CSE',
            uni_board: 'Daffodil International University',
            tenure: '2013-17',
            faculty: '<b>Faculty:</b> Science and Information Technology<br />\n',
            department: '<b>Department:</b> Computer Science and Engineering<br />\n',
            institute: '',
            division: '',
            result: {
                type: 'CGPA',
                achieved: '3.81',
                full: '4.00',
            },
        },
        {
            degree: 'HSC',
            uni_board: 'Dhaka Board, Bangladesh',
            tenure: '2012',
            faculty: '',
            department: '',
            institute: 'Milestone College',
            division: '<b>Division:</b> Science<br />\n',
            result: {
                type: 'GPA',
                achieved: '5.00',
                full: '5.00',
            },
        },
        {
            degree: 'SSC',
            uni_board: 'Dhaka Board, Bangladesh',
            tenure: '2010',
            faculty: '',
            department: '',
            institute: 'Safiuddin Sarker Academy & College',
            division: '<b>Division:</b> Science<br />\n',
            result: {
                type: 'GPA',
                achieved: '5.00',
                full: '5.00',
            },
        },
    ]

    // work experience
    const work_experiences = [
        {
            designation: 'Software Engineer',
            company: 'Daraz BD (Alibaba Group)',
            tenure: {
                from: 'Oct 2023',
                to: 'Present',
            },
            responsibilities: [
                'Developing software solutions for internal usage',
            ],
        },
        {
            designation: 'Software Engineer',
            company: 'PayStation (Service Hub Ltd)',
            tenure: {
                from: 'Dec 2022',
                to: 'Sep 2023',
            },
            responsibilities: [
                'Developing payment gateway APIs and integrating Bank payment APIs',
                'Providing guidance to clients about payment gateway integration'
            ],
        },
        {
            designation: 'Software Engineer',
            company: 'Swapnoloke',
            tenure: {
                from: 'Sep 2019',
                to: 'Nov 2022',
            },
            responsibilities: [
                'Designing and developing software process and modules',
                'Leading multiple teams and Mentoring new recruits and guiding junior developers',
                'Communicating with clients',
            ],
        },
        {
            designation: 'Web Developer',
            company: 'Connect Bangladesh',
            tenure: {
                from: 'Apr 2019',
                to: 'Aug 2019',
            },
            responsibilities: [
                'Maintaining various websites',
                'Developing content for Wordpress websites',
            ],
        },
    ]

    // technical skill
    const technical_skill = [
        {
            skill: 'PHP . OOP',
            proficiency: 98,
        },
        {
            skill: 'Laravel',
            proficiency: 88,
        },
        {
            skill: 'JavaScript',
            proficiency: 80,
        },
        {
            skill: 'jQuery . AJAX',
            proficiency: 98,
        },
        {
            skill: 'TypeScript',
            proficiency: 65,
        },
        {
            skill: 'Node.js',
            proficiency: 50,
        },
        {
            skill: 'Vue',
            proficiency: 70,
        },
        {
            skill: 'React',
            proficiency: 30,
        },
        {
            skill: 'Python',
            proficiency: 50,
        },
        {
            skill: 'Golang',
            proficiency: 10,
        },
        {
            skill: 'MySQL',
            proficiency: 95,
        },
        {
            skill: 'PostgreSQL',
            proficiency: 85,
        },
        {
            skill: 'Redis',
            proficiency: 60,
        },
    ]

    // professional skill
    const professional_skill = [
        {
            skill: 'Communication',
            proficiency: 85,
        },
        {
            skill: 'Team Work',
            proficiency: 90,
        },
        {
            skill: 'Project Management',
            proficiency: 67,
        },
        {
            skill: 'Creativity',
            proficiency: 80,
        },
    ]

    // featured projects


    /** end :: custom variables */

    /** start :: custom listing */
    // social contacts - hello
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
    // technical expertise - about me
    for(let x in technical_expertise){
        let item = technical_expertise[x]
        let block = '<li><span>'+item+'</span></li>'
        $('.mh-about-tag>.technical-expertise').append(block)

    }
    // professional expertise - about me
    for(let x in professional_expertise){
        let item = professional_expertise[x]
        let block = '<li><span>'+item+'</span></li>'
        $('.mh-about-tag>.professional-expertise').append(block)

    }
    // education
    for(let x in educations){
        let item = educations[x]
        let block = '<div class="col-sm-12 col-md-6">\n' +
            '                    <div class="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">\n' +
            '                      <h4>\n' +
            '                        '+item.degree+' From <a href="#">'+item.uni_board+'</a>\n' +
            '                      </h4>\n' +
            '                      <div class="mh-eduyear">'+item.tenure+'</div>\n' +
            '                      <p>\n' +
            '                        '+item.faculty+
            '                        '+item.department+
            '                        '+item.institute+
            '                        '+item.division+
            '                        <b>Result:</b>  '+item.result.type+' <b> '+item.result.achieved+'</b> out of <b> '+item.result.full+'</b>\n' +
            '                      </p>\n' +
            '                    </div>\n' +
            '                  </div>'
        $('.mh-education-deatils').append(block)

    }
    // work experience
    for(let x in work_experiences){
        let item = work_experiences[x]
        let res = ''
        if(item.responsibilities.length > 0){
            res += '<span><b>Key Responsibility :</b></span>\n' +
                '                      <ul class="work-responsibility">'
            for(let r in item.responsibilities){
                res += '                    <li>\n' +
                    '                          <i class="fa fa-circle"></i>'+item.responsibilities[r]+'\n' +
                    '                        </li>\n'
            }
            res += '                    </ul>\n'

        }
        let block = '<div class="col-sm-12 col-md-6">\n' +
            '                    <div class="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" >\n' +
            '                      <h4>'+item.designation+' <a href="#">'+item.company+'</a></h4>\n' +
            '                      <div class="mh-eduyear">'+item.tenure.from+' - '+item.tenure.to+'</div>\n' +
            '                      '+res+
            '                    </div>\n' +
            '                  </div>'
        $('.mh-experience-deatils').append(block)

    }
    // technical skill
    for(let x in technical_skill){
        let item = technical_skill[x]
        let block = '<div class="col-sm-12 col-md-6">\n' +
            '                      <div class="candidatos">\n' +
            '                        <div class="parcial">\n' +
            '                          <div class="info">\n' +
            '                            <div class="nome">'+item.skill+'</div>\n' +
            '                            <div class="percentagem-num">'+item.proficiency+'%</div>\n' +
            '                          </div>\n' +
            '                          <div class="progressBar">\n' +
            '                            <div class="percentagem" style="width: '+item.proficiency+'%"></div>\n' +
            '                          </div>\n' +
            '                        </div>\n' +
            '                      </div>\n' +
            '                    </div>'
        $('.mh-professional-skill .technical-skills').append(block)
    }
    // professional skill
    for(let x in professional_skill){
        let item = professional_skill[x]
        let block = '<li>\n' +
            '                    <div class="mh-progress mh-progress-circle active" data-progress="'+item.proficiency+'" style="position: relative;">' +
            '                       <svg viewBox="0 0 100 100">' +
            '                           <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" stroke-width="5" fill-opacity="0"></path>' +
            '                           <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" stroke-width="5" fill-opacity="0" style="stroke-dasharray: 298.493, 298.493; stroke-dashoffset: 44.774;"></path>' +
            '                       </svg>' +
            '                       <p class="progressbar-text" style="position: absolute; top: 50%; left: 50%; padding: 0; margin: 0; transform: translate(-50%, -50%); color: rgb(85, 85, 85);">' +
            '                           '+item.proficiency+'%' +
            '                       </p>' +
            '                     </div>\n' +
            '                    <div class="pr-skill-name">'+item.skill+'</div>\n' +
            '                  </li>'
        $('.mh-professional-skills .mh-professional-progress').append(block)
    }
    // featured projects
    const featured_projects = [
        {
            img: 'p-1.png',
            category: '',
            type: '',
            title: '',
            description: '',
            technologies: [],
        },
        {
            img: 'p-2.png',
            category: '',
            type: '',
            title: '',
            description: '',
            technologies: [],
        },
    ]



    /** end :: custom listing */
})