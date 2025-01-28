import React from 'react'

function Subscription() {
  return (
    <div className="subscription-section">
        <div class="form-container">
          <form class="form">
            <div class="form-group">
              <span>Be member of our Club!!!</span>
              <label for="email">Email:</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
              <label for="textarea">If you have any suggestions or feedback, feel free to share😊(optional)</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required=""
              >
                {" "}
              </textarea>
            </div>
            <button class="form-submit-btn" type="submit">
              Subscription
            </button>
          </form>
        </div>
      </div>
  )
}

export default Subscription