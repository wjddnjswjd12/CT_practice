var hasCycle = function (head) {
  let slowNode = head;
  let fastNode = head;
  while (fastNode && fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) return true;
  }
  return false;
};
