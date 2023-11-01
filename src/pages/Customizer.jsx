import React, {useState, useEffect } from 'react'
import {AnimatePresence, motion } from 'framer-motion'
import {useSnapshot } from 'valtio'

import config from '../config/config/config'
import state from '../store'
import { download  } from '../assets/assets'
import { downloadCanvasToImage, reader } from '../config/config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from "../config/config/constants";
import { fadeAnimation, slideAnimation } from '../config/config/motion'
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components'

const Customizer = () => {
   
  const snap = useSnapshot (state);
  return (
    <AnimatePresence>
      {!snap.intro &&(
        <>
          Customizer

        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer