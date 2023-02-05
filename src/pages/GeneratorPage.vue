<template>
  <q-page class="page" padding>
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Selection task generator</div>
      </q-card-section>
      <q-card-section>
        <SelectionTaskForm />
      </q-card-section>
    </q-card>
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Typing task generator</div>
      </q-card-section>
      <q-card-section>
        <TypingTaskForm />
      </q-card-section>
    </q-card>
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Matching task generator</div>
      </q-card-section>
      <q-card-section>
        <MatchingTaskForm />
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section>
        <div class="text-h6">Sortable task generator</div>
      </q-card-section>
      <q-card-section>
        <SortableTaskForm />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import SelectionTaskForm from 'components/SelectionTaskForm.vue'
import TypingTaskForm from 'components/TypingTaskForm.vue'
import MatchingTaskForm from 'components/MatchingTaskForm.vue'
import SortableTaskForm from 'components/SortableTaskForm.vue'
</script>
