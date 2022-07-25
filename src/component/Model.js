import React from 'react'
import { ArrowLeftShort } from 'react-bootstrap-icons'
import './model.css'
import glb from './InteriorTest.glb'
function Model() {
  return (
    <div className='model'>
     <ArrowLeftShort/>
     <model-viewer className="modelimg" auto-rotate bounds="tight" enable-pan src={glb} ar ar-modes="webxr scene-viewer quick-look" camera-controls environment-image="neutral" poster="poster.webp" shadow-intensity="1">
  
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png"/>
    </div>
</model-viewer>

    </div>
  )
}

export default Model