$(function() {
    const technical_skill = [
        {
            category: 'Languages',
            skills: [
                { skill: 'PHP', proficiency: 98 },
                { skill: 'JavaScript', proficiency: 87 },
                { skill: 'TypeScript', proficiency: 65 },
                { skill: 'SQL', proficiency: 95 },
                { skill: 'Python', proficiency: 70 },
            ]
        },
        {
            category: 'Backend',
            skills: [
                { skill: 'Laravel', proficiency: 92 },
                { skill: 'Flight PHP', proficiency: 90 },
                { skill: 'Node.js', proficiency: 65 },
                { skill: 'Codeigniter', proficiency: 30 },
            ]
        },
        {
            category: 'Frontend',
            skills: [
                { skill: 'Vue.js', proficiency: 70 },
                { skill: 'Vuex', proficiency: 70 },
                { skill: 'HTML5', proficiency: 99 },
                { skill: 'CSS3', proficiency: 99 },
                { skill: 'Bootstrap CSS', proficiency: 90 },
                { skill: 'React', proficiency: 35 },
            ]
        },
        {
            category: 'Databases',
            skills: [
                { skill: 'PostgreSQL', proficiency: 95 },
                { skill: 'MySQL', proficiency: 95 },
                { skill: 'MongoDB', proficiency: 30 },
                { skill: 'SQLite', proficiency: 40 },
                { skill: 'Redis', proficiency: 67 },
            ]
        },
        {
            category: 'Cloud & DevOps',
            skills: [
                { skill: 'Docker', proficiency: 60 },
                { skill: 'Kubernetes', proficiency: 70 },
                { skill: 'CI/CD (GitHub Actions, Jenkins)', proficiency: 70 },
                { skill: 'AWS (EC2, S3, Lambda, ECS)', proficiency: 50 },
            ]
        },
        {
            category: 'Tools & Practices',
            skills: [
                { skill: 'Git', proficiency: 80 },
                { skill: 'REST APIs', proficiency: 90 },
                { skill: 'Microservices', proficiency: 80 },
                { skill: 'Agile/Scrum', proficiency: 85 },
                { skill: 'JIRA', proficiency: 90 },
                { skill: 'Kibana', proficiency: 80 },
                { skill: 'Postman', proficiency: 90 },
                { skill: 'Swagger', proficiency: 70 },
                { skill: 'Figma', proficiency: 90 },
                { skill: 'GraphQL', proficiency: 60 },
            ]
        },
    ]

    loadTechnicalSkill(technical_skill)
    function loadTechnicalSkill(technical_skill) {
        for (let c in technical_skill) {
            let category = technical_skill[c]
            let block = `<div class="col-sm-12 col-md-4 mb-3">
                      <h4>${category.category}</h4>`
            for (let x in category.skills) {
                let item = category.skills[x]
                block += `<div class="col-sm-6 col-md-12">
                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">${item.skill}</div>
                              <div class="percentagem-num">${item.proficiency}%</div>
                              </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: ${item.proficiency}%"></div>
                              </div>
                            </div>
                          </div>
                      </div>`
            }

            block += `</div>`
            $('.mh-professional-skill .technical-skills').append(block)
        }
    }

})