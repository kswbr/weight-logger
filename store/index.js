import {v1 as uuidv1} from 'uuid'

export const state = () => ({
  logs: []
})

export const mutations = {
  fetch (state) {
    state.logs = JSON.parse(localStorage.getItem("logs"))
    if (!state.logs) {
      state.logs = []
    }
  },
  add (state, log) {
    log.id = uuidv1()
    state.logs.unshift(log)
    localStorage.setItem("logs", JSON.stringify(state.logs))
  },
  remove (state, log) {
    state.logs.splice(state.logs.indexOf(log), 1)
    localStorage.setItem("logs", JSON.stringify(state.logs))
  },
  update (state, log) {
    const targetIndex = state.logs.findIndex((testLog) => {
      return testLog.id === log.id
    })
    state.logs[targetIndex] = log
    localStorage.setItem("logs", JSON.stringify(state.logs))
  }
}
