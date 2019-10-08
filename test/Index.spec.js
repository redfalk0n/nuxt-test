import { mount } from '@vue/test-utils'
import { isEqual } from 'lodash'
import Index from '@/pages/index.vue'

describe('Index', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Index)
  })
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('has a button', () => {
    expect(wrapper.contains('button')).toBeTruthy()
  })
  test('has an array', () => {
    expect(wrapper.vm.list).toBeInstanceOf(Array)
  })
  test('shufling right', () => {
    const beforeShuffle = [...wrapper.vm.list]
    wrapper.vm.shuffleList()
    const afterShuffle = wrapper.vm.list
    expect(isEqual(beforeShuffle, afterShuffle)).not.toBeTruthy()
  })
  test('adding right', () => {
    const beforeAdd = [...wrapper.vm.list]
    wrapper.vm.addElem()
    const afterAdd = wrapper.vm.list
    expect(beforeAdd.length < afterAdd.length).toBeTruthy()
  })
  test('remove right', () => {
    const beforeRemove = [...wrapper.vm.list]
    wrapper.vm.rmElem()
    const afterRemove = wrapper.vm.list
    expect(
      beforeRemove.length === 0 || beforeRemove.length > afterRemove.length,
    ).toBeTruthy()
  })
  test('shufling on click', () => {
    const beforeShuffle = [...wrapper.vm.list]
    wrapper.find('button#shuffle').trigger('click')
    const afterShuffle = wrapper.vm.list
    expect(isEqual(beforeShuffle, afterShuffle)).not.toBeTruthy()
  })
})
