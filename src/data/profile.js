/**
 * @typedef {Object} Profile
 * @property {string} name - Full name.
 * @property {string} role - Headline role/title shown in the hero.
 * @property {string} location - City, country.
 * @property {string} email - Contact email.
 * @property {string} phone - Contact phone, in a human-readable format.
 * @property {string} phoneHref - Same phone number formatted for a tel: link.
 * @property {string} summary - Short "About Me" paragraph.
 * @property {string[]} highlights - About Me bullet points, as HTML fragments (may contain <b> and <a>).
 * @property {string} cvPath - Public path to the downloadable CV PDF.
 */

/** @type {Profile} */
export const profile = {
    name: 'S. Sadrul Hossain',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'hossainsadrul@gmail.com',
    phone: '+880 1885-547800',
    phoneHref: '+8801885547800',
    summary: 'Hello, I am S. Sadrul Hossain, Seasoned Software Engineer with 7+ years of progressive experience building scalable, secure, and high-traffic applications across several major industry verticals — fintech, telecom, SaaS, defense/education distribution and export-import. From engineering PSO payment gateways with multi-provider integration to developing self-care applications for 66M+ subscriber base of Robi and Cirkle, I bring a proven ability to deliver complex solutions under tight deadlines with 100% sprint success rate. Technically deep in the Laravel ecosystem, Vue.js, and relational databases, with hands-on exposure to AI-assisted and spec-driven development practices, and a growing focus on system design, microservices architecture, and large-scale technical decision-making in pursuit of a software architecture career path.',
    highlights: [
        '🔭 Currently working at <a href="https://portonics.com/"><b>Portonics Limited</b></a> (Robi Single App Team) — building APIs for <a href="https://www.robi.com.bd/en"><b>My Robi App</b></a> & <a href="https://cirkle.digital/en"><b>My Cirkle App</b></a>, serving <b>56M+ Robi subscribers</b> and <b>10M+ Cirkle subscribers</b>',
        '🏢 Previously at <a href="https://portonics.com/"><b>Portonics Limited</b></a> (Eagle App Team) — built APIs for <a href="https://www.atom.com.mm/en"><b>ATOM Myanmar</b></a>\'s agent app, serving <b>3M+ users</b>',
        '🏢 Previously at <a href="https://www.daraz.com.bd/"><b>Daraz BD (Alibaba Group)</b></a> — architected SaaS platforms for 5 business ventures',
        '💳 Engineered <b>PSO payment gateways</b> integrating AMEX, Mastercard & Visa, processing <b>1M+ BDT/month</b>',
        '📱 Developed <b>PWAs used by 41M+ subscribers</b> of <a href="https://banglalink.net"><b>Banglalink</b></a>',
        '🎯 Growing focus on <b>System Design & Software Architecture</b>',
    ],
    cvPath: '/cv/sadrul-hossain-cv.pdf',
}
