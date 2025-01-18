import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PolestarsList from '../PolestarsList.vue'

describe('PolestarsList', () => {
  it('renders properly', () => {
    const wrapper = mount(PolestarsList, { props: { items: [{ ItemId: 1, Name: 'Polestar 1' }] } })
    expect(wrapper.text()).toContain('Polestar 1')
  })
})
