function clickIt(classItem) {
  let n = prompt("Enter the number of times to click");
  let startDate = new Date();
  const click = setInterval(() => {
    let endDate = new Date();
    if (document.getElementsByClassName(classItem).length > 0) {
      document.getElementsByClassName(classItem)[0].click();
      n--;
      startDate = new Date();
    }
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    if (n <= 0 || seconds > 5) {
      console.log("clear interval called");
      clearInterval(click);
    }
  }, 100);
}

clickIt("next-act");
