$(function () {
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
    loadEducations(educations)

    function loadEducations(educations){
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
    }
})