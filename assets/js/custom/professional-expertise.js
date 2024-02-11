$(function() {
    const professional_expertise = [
        'Payment Gateway', 'EdTech', 'FinTech', 'Software Development', 'SDLC',
        'Client Communication', 'Client Communication', 'Team Management',
        'Sales & Order Tracking Solution', 'Distribution Channel Solution',
        'E-commerce', 'Inventory Management Solution'
    ]
    loadProfessionalExpertise(professional_expertise)
    function loadProfessionalExpertise(professional_expertise){
        for(let x in professional_expertise){
            let item = professional_expertise[x]
            let block = '<li><span>'+item+'</span></li>'
            $('.mh-about-tag>.professional-expertise').append(block)

        }
    }
})