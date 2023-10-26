import React from 'react'
import SectionTitle from '../generics/SectionTitle'
import ClientReview from './ClientReview'
import Button from '../generics/Button'
import CassandraImg from '../../images/client-1.png'
import AmandaImg from '../../images/client-2.png'
import JackImg from '../../images/client-3.png'

const Testimonial = () => {
  return (
    <section className="testimonial-section">
        <div className="container">
            <SectionTitle paragraph="Testimonial" header="What Our Client Says" />
            <div className="reviews">
                <ClientReview image={CassandraImg} name="Cassandra Warren" title="Business Manager, Dorfus" alt="Image of Cassandra Warren" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" />
                <ClientReview image={AmandaImg} name="Amanda Tulling" title="Senior Developer, Square" alt="Image of Amanda Tulling" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" />
                <ClientReview image={JackImg} name="Jack McDogglas" title="Key Account Manager, Gobona" alt="Image of Jack McDogglas" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" />
            </div>
            <Button type="black" title="All Reviews" url="/reviews" />
        </div>
    </section>
  )
}

export default Testimonial