import { controls, musics } from "./elements.js"
import * as actions from "./actions.js"
import * as el from './elements.js'
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}

export function registerMusic() {
    musics.addEventListener('click', (event) => {
        const music = event.target.dataset.action

        if(state.musicSelected != music) {
            document.getElementById(state.musicSelected).classList.remove('selected')
            actions.pauseMusic(state.musicSelected)
            state.musicSelected = music
        }

        let buttonMusicSelected = document.getElementById(music)
        buttonMusicSelected.classList.add('selected')

        if(state.isMute) {
            return
        }

        actions.playMusic(music)
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}