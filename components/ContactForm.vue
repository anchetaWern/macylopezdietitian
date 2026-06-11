<script setup lang="ts">
const { contactOptions } = useSiteContent()
</script>

<template>
  <form class="contact-form" @submit.prevent>
    <div class="form-grid">
      <label>
        <span>Name</span>
        <input type="text" name="name" autocomplete="name" />
      </label>

      <label>
        <span>Email</span>
        <input type="email" name="email" autocomplete="email" />
      </label>

      <label>
        <span>Mobile Number</span>
        <input type="tel" name="mobile" autocomplete="tel" />
      </label>

      <fieldset>
        <legend>Preferred way to be contacted</legend>
        <div class="contact-options">
          <label v-for="option in contactOptions" :key="option" class="contact-options__item">
            <input type="radio" name="preferred-contact" :value="option" />
            <span>{{ option }}</span>
          </label>
        </div>
      </fieldset>

      <label class="form-grid__full">
        <span>Message</span>
        <textarea name="message" rows="6" />
      </label>
    </div>

    <PrimaryButton href="#" variant="solid">Send Inquiry</PrimaryButton>
  </form>
</template>
