$(function() {
    const projects = [
        {
            title: '',
            category: '',
            type: '',
            image: 'p-1.png',
            description: '',
            technologies: [],
        },
        {
            title: '',
            category: '',
            type: '',
            image: 'p-1.png',
            description: '',
            technologies: [],
        },
        {
            title: '',
            category: '',
            type: '',
            image: 'p-1.png',
            description: '',
            technologies: [],
        },
    ]
    loadProjects(projects)

    function loadProjects(projects){
        let block = ''
        for(let x in projects){
            let item = projects[x]

            let techs = ''
            if(item.technologies.length > 0){
                techs += '<span class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" >\n' +
                    '                          technologies used to develop this solution\n' +
                    '                        </span>\n' +
                    '                        <div class="mh-about-tag mh-about-tag-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">\n' +
                    '                          <ul>'
                for(let t in item.technologies){
                    techs += '                     <li><span>'+item.technologies[t]+'</span></li>\n'
                }
                techs += '                      </ul>\n' +
                    '                        </div>\n'
            }

            block += '<div class="col-sm-12 mh-featured-item">\n' +
                '                  <div class="row">\n' +
                '                    <div class="col-sm-7">\n' +
                '                      <div class="mh-featured-project-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">\n' +
                '                        <img src="assets/images/projects/'+item.image+'" alt="" class="img-fluid"/>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                    <div class="col-sm-5">\n' +
                '                      <div class="mh-featured-project-content">\n' +
                '                        <h4 class="project-category wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">\n' +
                '                          '+item.category+'\n' +
                '                        </h4>\n' +
                '                        <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">\n' +
                '                          '+item.title+'\n' +
                '                        </h2>\n' +
                '                        <span class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">\n' +
                '                          '+item.type+'\n' +
                '                        </span>\n' +
                '                        <p class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">\n' +
                '                          '+item.description+'\n' +
                '                        </p>\n' +
                '                        '+ techs +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n'

        }
        // let slide = $('.project-slide')
        //
        // slide.append(block)
        //
        // slide.owlCarousel({
        //     items: 1, // Set the number of items to display
        //     loop: true, // Enable loop
        //     margin: 10, // Set the margin between items
        //     nav: false, // Show navigation buttons
        // });

        // $(window).on('load', function(){
        //     slide.trigger('refresh.owl.carousel');
        // });
    }
})