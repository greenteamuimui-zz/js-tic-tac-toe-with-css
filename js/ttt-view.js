class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.find("li").each( (idx, $li) => {
      $li.click( () => {});
    });
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul></ul>');
    this.$el.append($ul);
    for (let i = 0; i < 9; i++) {
      const $li = $('<li></li>');
      $ul.append($li);
      // $li.on("hover", () => {
      //   // console.log($li);
      //   $li.addClass("selected");
      // });

    }
  }
}

module.exports = View;
