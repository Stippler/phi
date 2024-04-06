import { useCountStore} from '../state/count'

function Controls() {
    const increase = useCountStore(state=>state.increase);
    return <button onClick={increase}>one up</button>
}

export default Controls;