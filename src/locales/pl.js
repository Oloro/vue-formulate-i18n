/**
 * Here we can import additional helper functions to assist in formatting our
 * language. Feel free to add additional helper methods to libs/formats if it
 * assists in creating good validation messages for your locale.
 */
import { sentence as s } from '../libs/formats'

/**
 * This is the ISO 639-1 and (optionally) ISO 639-2 language "tag".
 * Some valid examples:
 * zh
 * zh-CN
 * zh-HK
 * en
 * en-GB
 */
const locale = 'pl'

/**
 * This is an object of functions that each produce valid responses. There's no
 * need for these to be 1-1 with english, feel free to change the wording or
 * use/not use any of the variables available in the object or the
 * arguments for the message to make the most sense in your language and culture.
 *
 * The validation context object includes the following properties:
 * {
 *   args        // Array of rule arguments: between:5,10 (args are ['5', '10'])
 *   name:       // The validation name to be used
 *   value:      // The value of the field (do not mutate!),
 *   vm: the     // FormulateInput instance this belongs to,
 *   formValues: // If wrapped in a FormulateForm, the value of other form fields.
 * }
 */
const localizedValidationMessages = {

  /**
   * Valid accepted value.
   */
  accepted: function ({ name }) {
    return `Zaakceptuj ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} musi być późniejsza niż ${args[0]}.`
    }
    return `${s(name)} musi być późniejszą datą.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      if (args[0] === 'latin') return `${s(name)} może zawierać wyłącznie litery bez polskich znaków.`
    } else if (args[0] === 'default') {
      return `${s(name)} może zawierać wyłącznie litery.`
    }
    return `${s(name)} może zawierać wyłącznie litery.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      if (args[0] === 'latin') return `${s(name)} może zawierać wyłącznie litery bez polskich znaków i liczby.`
    } else if (args[0] === 'default') {
      return `${s(name)} może zawierać wyłącznie litery i liczby.`
    }
    return `${s(name)} może zawierać wyłącznie litery i liczby.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} musi być wcześniejsza niż ${args[0]}.`
    }
    return `${s(name)} musi być wcześniejszą datą.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} musi zawierać się między ${args[0]} i ${args[1]}.`
    }
    return `Długość ${s(name)} nie może być krótsza niż ${args[0]} i dłuższa niż ${args[1]}.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} does not match.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} nie jest prawidłową datą, użyj formatu ${args[0]}`
    }
    return `${s(name)} nie jes prawidłową datą.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `To pole zawiera błąd.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Wprowadź adres email.'
    }
    return `“${value}” nie jest prawidłowym adresem email.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `To pole nie kończy się prawidłową wartością.`
    }
    return `“${value}” nie kończy się prawidłową wartością.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” nie jest dopuszczalną wartością ${name}.`
    }
    return `To nie jest dopuszczalna wartość ${name}.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} nie jest dopuszczalną wartością.`
  },

  /**
   * The maximum allowed value.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Maksymalną ilością do wybrania jest ${args[0]}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `Wartość ${name} musi być mniejsza lub równa ${args[0]}.`
    }
    return `${s(name)} musi składać się z maksymalnie ${args[0]} znaków.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} musi być plikiem: ${args[0] || 'Pliki z rozszerzeniem nie są dopuszczalne.'}`
  },

  /**
   * The minimum allowed value.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Minimalną ilością do wybrania jest ${args[0]}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `Wartość ${name} musi być większa lub równa ${args[0]}.`
    }
    return `${s(name)} musi składać się z minimalnie ${args[0]} znaków.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” nie jest dozwoloną wartością dla ${name}.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} nie jest liczbą.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `${s(name)} jest polem wymaganym.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `To pole nie rozpoczyna się prawidłową wartością.`
    }
    return `“${value}” nie rozpoczyna się prawidłową wartością.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ value }) {
    return `Podana wartość nie jest prawidłowym adresem url.`
  }
}

/**
 * This creates a vue-formulate plugin that can be imported and used on each
 * project.
 */
export default function (instance) {
  instance.extend({
    locales: {
      [locale]: localizedValidationMessages
    }
  })
}
