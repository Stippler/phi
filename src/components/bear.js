import { useCountStore } from "../state/count";

function BearCounter() {
    const count = useCountStore(state => state.count);
    return <h1>{count} around here ...</h1>
}

export default BearCounter;
