


const Footer = () => {
  return (
    <footer class="text-center text-white" style="background-color: #000c50">
    {/* <!-- Grid container --> */}
      <div class="container">
        {/* <!-- Section: Links --> */}
        <section class="mt-3 mb-2">
            {/* <!-- Grid row--> */}
            <div class="row text-center d-flex justify-content-center pt-4">
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                    <h6 class="text-uppercase font-weight-bold footer-link">
                        <a href="{% url 'index' %}" class="text-white">Home</a>
                    </h6>
                </div>
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                    <h6 class="text-uppercase font-weight-bold footer-link">
                        <a href="{% url 'music' %}" class="text-white">Music</a>
                    </h6>
                </div>
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                    <h6 class="text-uppercase font-weight-bold footer-link">
                        <a href="{% url 'bio' %}" class="text-white">Bio</a>
                    </h6>
                </div>
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                    <h6 class="text-uppercase font-weight-bold footer-link">
                        <a href="{% url 'links' %}" class="text-white">Links</a>
                    </h6>
                </div>
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                    <h6 class="text-uppercase font-weight-bold footer-link">
                        <a href="{% url 'contact' %}" class="text-white">Contact</a>
                    </h6>
                </div>
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                    <h6 class="text-uppercase font-weight-bold footer-link">
                        <a href="{% url 'invest' %}" class="text-white">Invest</a>
                    </h6>
                </div>
            </div>

        </section>

      </div>
    
      {/* Copywright */}
      <div class="text-center p-3 footer-link2" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2024
        <a class="text-white footer-link2" href="{% url 'invest' %}">Craig Morley</a>
      </div>
    </footer>
  )
}

export default Footer