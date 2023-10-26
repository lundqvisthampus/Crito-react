import React from 'react'
import Button from '../generics/Button'
import SectionTitle from '../generics/SectionTitle'
import Articles from './Articles'
import ArticleOne from '../../images/article-image-1.png'
import ArticleTwo from '../../images/article-image-2.png'
import ArticleThree from '../../images/article-image-3.png'
import ArticleFour from '../../images/article-image-4.png'

const ProjectAndCaseStudies = () => {
  return (
    <section className="project-case-section">
        <div className="container">
            <SectionTitle paragraph="Project & Case Studies" header="Let's Look At Our Global Projects" />
            <div className="project-grid">
                <Articles title="Grow your business" url="/growbusiness" alt="A mans hands with business newspaper" image={ArticleOne} />
                <Articles title="Why your client needs a responsive website" url="/whyresponsivesite" alt="Pink Apple products on a desk" image={ArticleTwo} />
                <Articles title="Educate your eomplyees to get better results" url="/educateemployees" alt="Desk with office material" image={ArticleThree} />
                <Articles title="Business Insights is a important piece of your business" url="/businessinsights" alt="Laptop on a desk" image={ArticleFour} />
            </div>
            <div className="center-content">
                <Button type="black" title="All Recent Projects" url="/projects" />
            </div>
        </div>
</section>
  )
}

export default ProjectAndCaseStudies