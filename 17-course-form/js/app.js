(function () {
  // check the fields and hide submit btn

  document.addEventListener("DOMContentLoaded", function () {
    const display = new Display();
    display.checkFields();
    display.hideSubmit();
  });

  // add customer on submit
  document
    .getElementById("customer-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = this.querySelector(".name");
      const course = this.querySelector(".course");
      const author = this.querySelector(".author");

      const customer = new Customer(name.value, course.value, author.value);
      console.log(customer);

      const display = new Display();
      display.feedback(customer);
      display.clearFields();
    });

  // display constructor function
  function Display() {
    this.name = document.getElementById("name");
    this.course = document.getElementById("course");
    this.author = document.getElementById("author");
    this.customer = document.querySelector(".customer-list");
  }
  // check fields
  Display.prototype.checkFields = function () {
    // console.log(this);

    this.name.addEventListener("blur", this.validateField);
    this.course.addEventListener("blur", this.validateField);
    this.author.addEventListener("blur", this.validateField);
  };
  // validate each field
  Display.prototype.validateField = function () {
    // console.log(this);
    if (this.value === "") {
      this.classList.remove("complete");
      this.classList.add("fail");
    } else {
      this.classList.add("complete");
      this.classList.remove("fail");
    }
    const complete = document.querySelectorAll(".complete");
    // console.log(complete.length);

    if (complete.length === 3) {
      document.querySelector(".submitBtn").disabled = false;
    } else {
      document.querySelector(".submitBtn").disabled = true;
    }
  };
  // disable submit btn
  Display.prototype.hideSubmit = function () {
    const btn = document.querySelector(".submitBtn");
    btn.disabled = true;
  };

  // show feedback and loading
  Display.prototype.feedback = function (customer) {
    const feedback = document.querySelector(".feedback");
    const loading = document.querySelector(".loading");

    feedback.classList.add("showItem", "alear", "alert-success");
    loading.classList.add("showItem");

    const self = this;
    self.hideSubmit();
    setTimeout(function () {
      feedback.classList.remove("showItem", "alert", "alert-success");
      loading.classList.remove("showItem");
      self.addCustomer(customer);
    }, 3000);
  };

  // customer construtor function
  function Customer(name, course, author) {
    this.name = name;
    this.course = course;
    this.author = author;
  }
  // display customer
  Display.prototype.addCustomer = function (customer) {
    // console.log(customer);
    const randomImg = this.getRandom();
    const div = document.createElement("div");
    div.classList.add("col-li", "mx-auto", "my-3", "col-lg-4", "col-md-6");
    div.innerHTML = `<div class="card text-left">
                <img src="img/cust-${randomImg}.jpg" class="card-img-top" alt="" />
                <div class="card-body">
                  <!-- customer name -->
                  <h6 class="text-capitalize">
                    <span class="badge badge-warning mr-2">name :</span
                    ><span id="customer-name"> ${customer.name}</span>
                  </h6>
                  <!-- end of customer name -->
                  <!-- customer name -->
                  <h6 class="text-capitalize my-3">
                    <span class="badge badge-success mr-2">course :</span
                    ><span id="customer-course">
                      ${customer.course}
                    </span>
                  </h6>
                  <!-- end of customer name -->
                  <!-- customer name -->
                  <h6 class="text-capitalize">
                    <span class="badge badge-danger mr-2">author :</span
                    ><span id="course-author"> ${customer.author}</span>
                  </h6>
                  <!-- end of customer name -->
                </div>
              </div>`;
    this.customer.appendChild(div);
  };
  // random number
  Display.prototype.getRandom = function () {
    let random = Math.floor(Math.random() * 5 + 1);
    return random;
  };
  // clear fields after submit
  Display.prototype.clearFields = function () {
    // console.log(this);

    this.name.value = "";
    this.course.value = "";
    this.author.value = "";

    this.name.classList.remove("complete", "fail");
    this.course.classList.remove("complete", "fail");
    this.author.classList.remove("complete", "fail");
  };
})();
