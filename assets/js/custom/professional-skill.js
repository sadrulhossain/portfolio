$(function() {

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
    loadProfessionalSkill(professional_skill)

    function loadProfessionalSkill(professional_skill){
        for(let x in professional_skill){
            let item = professional_skill[x]

            let block = '<li>\n' +
                '                    <div class="circular-progress" data-proficiency="'+item.proficiency+'">\n' +
                '                      <strong>'+item.proficiency+'%</strong>\n' +
                '                    </div>\n' +
                '                    <div class="pr-skill-name">'+item.skill+'</div>\n' +
                '                  </li>'
            $('.mh-professional-skills .mh-professional-progress').append(block)

        }

        let c4 = $('.circular-progress')

        c4.circleProgress({
            startAngle: -Math.PI / 2,
            value: 0,
            lineCap: 'round',
            thickness: 5,
            fill: {
                // gradient: ['#2e9182', '#0cbba0', '#2e9182', '#0cbba0', '#2e9182', '#0cbba0', '#2e9182', '#0cbba0'],
                // gradientAngle: Math.PI/3*2,
                color: '#0bceaf',
                // image: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
            },
            emptyFill: 'rgba(199, 198, 198, 0.6)',
        })

        c4.each(function() {
            let el = $(this)
            // Let's emulate dynamic value update
            setTimeout(() => {
                el.circleProgress('value', el.attr('data-proficiency')/100)
            }, 1500)
        })
    }
})