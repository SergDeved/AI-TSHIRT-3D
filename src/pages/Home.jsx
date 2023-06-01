import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store/index.js';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion.js";

import CustomButton from "../components/CustomButton.jsx";

const Home = () => {
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs.png'
                            alt='logo'
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>

                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <h1 className="head-text">
                            LETS <br className="xl:block hidden"/> PROGRAM
                        </h1>
                    </motion.div>

                    <motion.div
                        {...headContentAnimation}
                        className="flex flex-col gap-5"
                    >
                        <p className="max-w-md font-normal text-gray-600">
                            Crea tu unica y exclusiva camiseta con nuestra nueva app de customización 3D.
                        </p>

                        <CustomButton
                            type="filled"
                            title="Customize It"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home