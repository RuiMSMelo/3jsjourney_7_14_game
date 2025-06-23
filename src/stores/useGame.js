import { create } from 'zustand'

export default create((set) => {
    return {
        blocksCount: 3,

        /* PHASES */
        phase: 'ready',
        start: () => {
            set(() => {
                return { phase: 'playing' }
            })
        },
        restart: () => {
            set(() => {
                return { phase: 'ready' }
            })
        },
        end: () => {
            set(() => {
                return { phase: 'ended' }
            })
        },
    }
})
