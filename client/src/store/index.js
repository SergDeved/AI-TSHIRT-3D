import {proxy} from "valtio";

const state = proxy({
    intro: true,
    color: '#F8E71C',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './react.png',
    fullDecal: './mmmotif.svg'
})
export default state;