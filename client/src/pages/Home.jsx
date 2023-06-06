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
                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <h1 className="head-text">
                           DESIGN <br className="xl:block hidden"/> IT!
                        </h1>
                    </motion.div>

                    <motion.div
                        {...headContentAnimation}
                        className="flex flex-col gap-5"
                    >
                        <p className="max-w-md font-normal text-gray-600">
                            Create your unique and exclusive t-shirt with our new 3D customization app.                        </p>

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