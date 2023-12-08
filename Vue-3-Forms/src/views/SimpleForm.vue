<template>
  <div>
    <h1>Create an event</h1>
    <form>

      <BaseSelect v-model="event.category" label="Category" :options="categories">
      </BaseSelect>

      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" class="base-input__input" />

      <BaseInput v-model="event.description" label="Description" type="text" class="base-input__input" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" class="base-input__input" />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering">
        </BaseCheckbox>
      </div>

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
  components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadioGroup }
}
</script>
