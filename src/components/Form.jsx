import React from "react";
import "../styles.css";

import FileUpload from "./FileUpload";

const Form = () => (

  <div class="form-container">


    <div class=" col-1">

      <section>
        {/* <label for="pet-select">Choose a pet:</label> */}
      <div>

        <select name="pets" id="pet-select">
          <option value="">Select Import Name</option>
          <option value="0">Dog</option>
          <option value="1">Cat</option>
          <option value="2">Hamster</option>
          <option value="3">Parrot</option>
          <option value="4">Spider</option>
          <option value="5">Goldfish</option>
        </select>
        </div>
      </section>

      <section class="fileuploader">
        <FileUpload />
      </section>

      <section>
        <hr style={{ color: "grey" }} />
        <h4>Elapse Data Checking: </h4>
        <h4 style={{ color: "green" }}> No Elapsed Dates!</h4>
        <hr />
      </section>

      <section>
        <h4>Tolerance Window</h4>

        <label class="toggle">
          <input type="checkbox"></input>
          <span class="slider"></span>
        </label>
        <span>
          <p>Toggle ON | Select Tolerance Level</p>
        </span>
      </section>
    </div>

    <div class="col-2">
      <section>
        <h4>Split Schedule Using Social Distancing?</h4>
        <div>
          <input
            type="radio"
            id="socialDistanceYes"
            name="yes"
            value="yes"
            checked
          />
          <label for="socialDistanceYes">Yes</label>

          <input type="radio" id="socialDistanceNo" name="no" value="no" />
          <label for="socialDistanceNo">No</label>
        </div>
      </section>

      <section>
        <hr style={{ color: "grey" }} />
        <h4>Location Checking: </h4>
        <h4 style={{ color: "green" }}>All Available!</h4>
        <hr />
      </section>

      <section>
        <h4>Client:</h4>
        <div>
          <input
            type="radio"
            id="clientSingle"
            name="single"
            value="single"
            checked
          />
          <label for="clientSingle">Single</label>

          <input
            type="radio"
            id="clientMultiple"
            name="multiple"
            value="multiple"
          />
          <label for="clientMultiple">Multiple</label>
        </div>
      </section>

      <section>
        <div>
          <label>Testing Center 1</label>
          {/* <label for="pet-select">Choose a pet:</label> */}

          <select name="pets" id="pet-select">
            <option value="">Select Client</option>
            <option value="0">Dog</option>
            <option value="1">Cat</option>
            <option value="2">Hamster</option>
            <option value="3">Parrot</option>
            <option value="4">Spider</option>
            <option value="5">Goldfish</option>
          </select>
        </div>

        <div>
          <label>Testing Center 2</label>
          {/* <label for="pet-select">Choose a pet:</label> */}
          <select name="pets" id="pet-select">
            <option value="">Select Client</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>

        <div>
          <label for="testing-center-3-select">Testing Center 3</label>
          <select name="testing-center-3-select" id="testing-center-3-select">
            <option value="">Select Client</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>

        <div>
          <label>Testing Center 4</label>

          <select name="pets" id="pet-select">
            <option value="">Select Client</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
      </section>
    </div>

    <section class="import">
      <h3>
        Data in the import file is correct. Please press Continue to import.
      </h3>
      <div>
        <span class="btn-container">
          <button class="import-btn" type="submit">
            Continue Import
          </button>
          <button class="cancel-btn">Cancel</button>
        </span>
      </div>
   
    </section>

    </div>

);



export default Form;
