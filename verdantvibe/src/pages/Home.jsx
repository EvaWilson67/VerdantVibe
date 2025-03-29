import "./css/Home.css";
// import Tree from "../components/Tree";

function Home() {
  return (
    <main className="page-background">
      <section className="page-content page-background">
        <h1 className="center margin"> Home Page</h1>
        <p>Click the large images for blog page!</p>

        <div className="columns two center gallery-small">
          <section id="non-recent-pictures" className="right columns margin">
            <div className="columns two sector center">
              <section className="container margin center">
                <a href="#" className="links">
                  <div className="margin">
                    <img
                      src="/images/blog_images/personalplantsprt1.jpg"
                      className="blog-image large-image"
                      alt="Personal Plants"
                    />
                  </div>
                </a>

                <div className="blog-text margin center">
                  <p>
                    Plants can be placed in almost any room, from the kitchen to
                    the bedroom, and their presence brings a sense of calm. With
                    a wide variety of shapes, sizes, and colors, there’s a plant
                    for every personality and space, whether you're working with
                    a sunny windowsill or a dim corner.
                  </p>
                </div>
              </section>

              <div className="right-image small-130x-top">
                <img
                  src="/images/blog_images/forestguy.jpg"
                  className="hide-for-small blog-image small-image"
                  alt="Forest Guy"
                />
              </div>
            </div>

            <div className="columns two sector">
              <div className="right small-130x hide-for-small">
                <img
                  src="/images/blog_images/cardinal.jpg"
                  className="blog-image small-image"
                  alt="Cardinal"
                />
                <img
                  src="/images/blog_images/greycatbird.jpg"
                  className="blog-image small-image"
                  alt="Grey Cat Bird"
                />
              </div>
              <a href="#" className="links">
                <div className="margin">
                  <img
                    src="/images/blog_images/greenquad.jpg"
                    className="blog-image large-image"
                    alt="Green Quad UOFSC"
                  />
                </div>
              </a>
            </div>
          </section>

          <section id="most-recent-pictures" class="center margin ">
        <h3 class="center margin"> Recent Blogs</h3>

        <a href="blog.html" className="links container">
          <div className="">
            <img
              src="images/blog_images/betty.jpg"
              className="blog-image center" alt="betty"
            />
          </div>

          <div className="blog-text">
            <p>
              I started getting into indoor plants and gardening because of my
              grandmother. Multiple of my plants are from her that I got for my
              birthday!
            </p>
            <p>(in the picture is Betty)</p>
          </div>
        </a>
      </section>
        </div>
      </section>

      
    </main>
  );
}

export default Home;
