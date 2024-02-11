$(function() {
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
    loadWorkExperiences(work_experiences)

    function loadWorkExperiences() {
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
    }

})