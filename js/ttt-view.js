class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.find("li").each( (idx, $li) => {
      $li.click( () => {
          // this.game.playMove($li.data('pos'));
          this.makeMove($li);
        });
    });
  }

  makeMove($square) {
    const mark = this.game.currentPlayer;
    $square.text(mark);
    if (mark === "x") {
      $square.addClass('x');
    } else{
      $square.addClass('o');
    }
    if (!$square.text()) {
      alert(`Wrong Move`);
    }
    this.game.playMove($square.data('pos'));
  }

  setupBoard() {
    const $ul = $('<ul></ul>');
    this.$el.append($ul);
    // for (let i = 0; i < 9; i++) {
    //   const $li = $('<li></li>');
    //   $ul.append($li);
    // }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $li = $('<li></li>');
        $li.data('pos', [i, j]);
        $ul.append($li);
      }
    }
  }
}

module.exports = View;
