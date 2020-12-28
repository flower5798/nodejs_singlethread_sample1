

function func1(){
  console.log('func1');
}
function func2(){
  console.log('func2');
}

async function asyncFunc1(){
  console.log('asyncFunc1 start');

  let startTime = Date.now() / 1000;

  while((Date.now() / 1000) < (startTime + 3)){

  }

  console.log('asyncFunc1 end');
}

async function main(){
  func1();
  // asyncFunc1(); // ここでシングルスレッドで3秒の空ループが実行されるので、終了後にfunc2が実行される
  setTimeout(asyncFunc1, 0); // こっちはfunc2の後に空ループが走る（タイミングがfunc2より後になる）
  func2();
}

// このように実行すると、main()が1つずつ処理される
// setTimeoutを0で実行した場合、1回目のmainによる空ループ→2回目のmainによる空ループの順で実行される
main();
main();

