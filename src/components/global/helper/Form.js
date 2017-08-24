import axios from 'axios';

/**
 * Class for handling errors
 * 
 * @class Errors
 */
class Errors {
  constructor() {
    this.errors = {};
  }

  /**
   * Determines if there is any error related to given 'field'
   * 
   * @param {String} field 
   * @returns {Boolean}
   * @memberof Errors
   */
  has(field) {
    return this.errors.hasOwnProperty(field);
  }
  
  /**
   * Specifies if error object contains any error
   * 
   * @returns {Boolean}
   * @memberof Errors
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Returns errors for the given 'field'
   * 
   * @param {String} field 
   * @returns {Array}
   * @memberof Errors
   */
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  /**
   * Records the given error object into 'this.errors'
   * 
   * @param {Object} errors 
   * @memberof Errors
   */
  record(errors) {
    this.errors = errors;
  }

  /**
   * Clears a field from 'errors' object or clears the whole 'errors' object
   * 
   * @param {String} field 
   * @memberof Errors
   */
  clear(field) {
    if(field) {
      delete this.errors[field];
      return;
    }

    this.errors = {};
  }
}

/**
 * Class for handling form opertaions
 * 
 * @class Form
 */
export default class Form {
  /**
   * Creates an instance of Form from given object and new up an Errors object
   * @param {Object} data 
   * @memberof Form
   */
  constructor(data) {
    this.originalData = data;

    for(let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  /**
   * Resets all fields and clear all errors
   * 
   * @memberof Form
   */
  reset() {
    this.errors.clear();

    for(let field in this.originalData) {
      this[field] = '';
    }
  }

  /**
   * Returns an object that contains all fields
   * 
   * @returns {Object}
   * @memberof Form
   */
  data() {
    let data = {};

    for(let field in this.originalData) {
      data[field] = this[field];
    }
    
    return data;
  }

  /**
   * Submit the form request with the help 'axios' library
   * 
   * @param {String} requestType 
   * @param {String} url 
   * @param {Object} [config={}] 
   * @returns {Promise}
   * @memberof Form
   */
  submit(requestType, url, config = {}) {
    return new Promise((resolve, reject) => {

      axios[requestType](url, this.data(), config)
        .then(response => {
          this.onSuccess(response.data);
          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data);
          reject(error.response.data);
        });

    });
    
  }
  
  onSuccess(data) {
    this.reset();
  }

  onFail(data) {
    this.errors.record(data);
  }
}