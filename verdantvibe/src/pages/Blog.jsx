import "./css/Blog.css";

import BlogComponent from "../components/BlogCompontent";

function Blog() {
  return (
    <main class="page-content">
      <h2>Previous Blogs</h2>
      <section id="blog" class="two columns gallery">
        <BlogComponent
          date="11-10-2024"
          description="On my walk around campus I saw a cardinal!"
          image="images/blog_images/cardinal.jpg"
        />

        <BlogComponent
          date="9-13-2024"
          description="I got Betty from my grandmother as a gift for my birthday."
          image="images/blog_images/betty.jpg"
        />

        <BlogComponent
          date="8-18-2020"
          description="On my way to the swearingen this grey cat bird followed me."
          image="images/blog_images/greycatbird.jpg"
        />

        <BlogComponent
          date="7-25-2024"
          description="My friend used to live in green quad, so I wanted to take a couple photos to remember."
          image="images/blog_images/greenquad.jpg"
        />

        <BlogComponent
          date="6-19-2024"
          description="I spotted a box turtle on my parents property"
          image="images/blog_images/boxturtle.jpg"
        />

        <BlogComponent
          date="5-10-2024"
          description="I went on a trip with a friend to Charelston SC. We went to the local art museum"
          image="images/blog_images/charelstonart.jpg"
        />
      </section>
    </main>
  );
}

export default Blog;
