class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      this.makeMove($(event.currentTarget));
    });
  }

  makeMove($square) {
    if (!$square.is(':empty')) {
      alert(`Wrong Move`);
    } else {
      const mark = this.game.currentPlayer;
      $square.text(mark);
      if (mark === "x") {
        $square.removeClass('o');
        $square.addClass('x');
      } else{
        $square.removeClass('x');
        $square.addClass('o');
      }

      this.game.playMove($square.data('pos'));
      
      if (this.game.isOver()) {
        alert("You win!");
      }
    }
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
