import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <h1>Main</h1>
        <p>
          Vestibulum consectetur sit amet nisi ut consectetur. Praesent efficitur, nibh
          vitae fringilla scelerisque, est neque faucibus quam, in iaculis purus libero
          eget mauris. Curabitur et luctus sapien, ac gravida orci. Aliquam erat volutpat.
          In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur,
          libero dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit amet
          elementum orci, pulvinar dignissim urna. Morbi id ex eu ex congue laoreet.
          Aenean tincidunt dolor justo, semper pretium libero luctus nec. Ut vulputate
          metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor. Cras
          imperdiet sollicitudin arcu, id interdum nibh fermentum in.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default Home
