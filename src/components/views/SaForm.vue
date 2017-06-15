<template>
  <form>
    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input class="input" type="text" placeholder="Text input">
      </p>
    </div>
  
    <div class="field">
      <label class="label">Username</label>
      <p class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Text input" value="bulma">
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </p>
      <p class="help is-success">This username is available</p>
    </div>
  
    <div class="field">
      <label class="label">Email</label>
      <p class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-warning"></i>
        </span>
      </p>
      <p class="help is-danger">This email is invalid</p>
    </div>
  
    <div class="field">
      <label class="label">Subject</label>
      <p class="control">
        <span class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </span>
      </p>
    </div>
  
    <div class="field">
      <label class="label">Message</label>
      <p class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </p>
    </div>
  
    <div class="field">
      <p class="control">
        <label class="checkbox">
          <input type="checkbox"> I agree to the
          <a href="#">terms and conditions</a>
        </label>
      </p>
    </div>
  
    <div class="field">
      <p class="control">
        <label class="radio">
          <input type="radio" name="question"> Yes
        </label>
        <label class="radio">
          <input type="radio" name="question"> No
        </label>
      </p>
    </div>
  
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary">Submit</button>
      </p>
      <p class="control">
        <button class="button is-link">Cancel</button>
      </p>
    </div>
  </form>
</template>
