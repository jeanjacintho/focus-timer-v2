import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning () {
   state.isRunning = document.documentElement.classList.toggle('running')

   timer.countdown()
   sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function addMinutes() {
   timer.updateMinutes("add")
}

export function removeMinutes() {
    timer.updateMinutes("remove")
 }

export function toggleMusic() {
    state.isMute = !document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        pauseMusic(state.musicSelected)
        return
    }

    playMusic(state.musicSelected)
}

export function pauseMusic(music) {
    sounds[music].pause()
}

export function playMusic(music) {
    sounds[music].play()
}