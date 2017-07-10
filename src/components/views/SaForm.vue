<template>
  <form>
    <sa-input label="Sa Input" id="sa-input" v-model="content"></sa-input>

    <sa-textarea label="Sa Textarea" v-model="text"></sa-textarea>

    <sa-input-horizontal label="Horizontal input"></sa-input-horizontal>

    <sa-textarea-horizontal label="Horizontal Textarea" v-model="text"></sa-textarea-horizontal>
  
    <div class="field">
      <label class="label" for="username">Username</label>
      <p class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Text input" value="bulma" id="username">
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

<script>
import SaInput from '../features/form/SaInput.vue';
import SaTextarea from '../features/form/SaTextarea.vue';
import SaInputHorizontal from '../features/form/SaInputHorizontal.vue';
import SaTextareaHorizontal from '../features/form/SaTextareaHorizontal.vue';

export default {
  components: {
    'sa-input': SaInput,
    'sa-textarea': SaTextarea,
    'sa-input-horizontal': SaInputHorizontal,
    'sa-textarea-horizontal': SaTextareaHorizontal
  },

  data() {
    return {
      content: 'Freebie',
      text: 'lorem ipsum switch borden ...'
    }
  }
}
</script>
