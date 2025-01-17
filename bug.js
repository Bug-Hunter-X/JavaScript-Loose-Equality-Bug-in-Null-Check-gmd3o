function foo(x){
  if (x == null) {
    return 0; //This is the bug
  } else {
    return x + 1;
  }
}