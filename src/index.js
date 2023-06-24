document.addEventListener('DOMContentLoaded', function() {
    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let currentKeyIndex = 0;
  
    function updateCurrentKey() {
      document.getElementById('key').textContent = keys[currentKeyIndex];
    }
  
    function handleKeyDown(event) {
      const keyPressed = event.key.toUpperCase();
      const currentKey = keys[currentKeyIndex];
  
      if (keyPressed === currentKey) {
        currentKeyIndex++;
        updateCurrentKey();
      } else {
        PNotify.error({
          text: 'Натиснуто неправильну клавішу!',
        });
      }
    }
  
    function handleKeyPress(event) {
      event.preventDefault();
    }
  
    function startNewGame() {
      currentKeyIndex = 0;
      updateCurrentKey();
      PNotify.success({
        text: 'Нова гра розпочата!',
      });
    }
  
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keypress', handleKeyPress);
    document.getElementById('newGameBtn').addEventListener('click', startNewGame);
  
    startNewGame();
});