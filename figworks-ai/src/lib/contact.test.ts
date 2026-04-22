import test from 'node:test'
import assert from 'node:assert/strict'
import { validateContactPayload } from './contact'

test('validateContactPayload accepts valid payload', () => {
  const result = validateContactPayload({
    name: 'Jane Doe',
    email: 'jane@figworks.ai',
    message: 'Need an AI roadmap for our product team.',
  })

  assert.equal(result.ok, true)
  assert.equal(result.errors.length, 0)
})

test('validateContactPayload rejects invalid payload', () => {
  const result = validateContactPayload({
    name: '',
    email: 'not-an-email',
    message: 'short',
    website: 'spammy.example',
  })

  assert.equal(result.ok, false)
  assert.ok(result.errors.length >= 3)
})
