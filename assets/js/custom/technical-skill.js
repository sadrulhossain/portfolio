$(function() {
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
    loadTechnicalSkill(technical_skill)
    function loadTechnicalSkill(technical_skill) {
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
    }

})