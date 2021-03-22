
// ## Top-down or Unidirectional data flows ##
// - Data always flows from parent to children
// - Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.
// - If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

