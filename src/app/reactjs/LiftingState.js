// ## Lifting state up ##
//     - state serves as single source of truth
//     - several components need to reflect on the same changing data, it's recommended to lift the shared state 
//     up to the closest common ancestor
//     - sharing state is accomplished by moving it up to the common ancestor of the components sharing it
//     - Since any state “lives” in some component and that component alone can change it, the surface area 
//     for bugs is greatly reduced.
//     - If something can be derived from either props or state, it probably shouldn’t be in the state.
