<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">

      <BaseSelect v-model="event.category" label="Category" :options="categories">
      </BaseSelect>

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput v-model="event.title" label="Title" type="text" class="base-input__input" />

        <BaseInput v-model="event.description" label="Description" type="text" class="base-input__input" />

      </fieldset>
      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="event.location" label="Location" type="text" class="base-input__input" />

      </fieldset>
      <fieldset>
        <legend>Are pets allowed?</legend>
        <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <BaseCheckbox v-model="event.extras.music" label="Music">
        </BaseCheckbox>
      </fieldset>

      <pre>
        {{ event }}
      </pre>
      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseCheckbox from '../components/BaseCheckbox.vue'
import BaseInput from '../components/BaseInput.vue'
import BaseRadioGroup from '../components/BaseRadioGroup.vue'
import BaseSelect from '../components/BaseSelect.vue'

export default {
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
  methods: {
    sendForm () {
      //    axios.post(
      //  'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
      //  this.event
      // )
      //  .then(function (response) {
      //    console.log('Response', response)
      //  })
      //  .catch(function (err) {
      //    console.log('Error', err)
      //  })
    }
  },
  components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadioGroup }
}
</script>
<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
