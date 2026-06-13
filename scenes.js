window.GAME_DATA = {
  title: "ふしぎな冒険",
  start: "start",
  scenes: {
    start: {
      title: "スライムの森",
      text: "スライムが現れた！",
      image: "images/top_01.jpg",
      imageAlt: "森に現れたスライム",
      choices: [
        { label: "戦う", next: "battle" },
        { label: "話しかける", next: "talk" },
        { label: "踊る", next: "talk" },
        { label: "逃げる", next: "castle" }
      ]
    },

    battle: {
      title: "スライムの森",
      text: "武器を持っていない。",
      image: "images/top_01.jpg",
      imageAlt: "森に現れたスライム",
      choices: [
        { label: "武器を探しに行く", next: "castle" },
        { label: "逃げる", next: "castle" }
      ]
    },

    talk: {
      title: "スライムの森",
      text: "スライムはあなたをじっと見ている。",
      image: "images/top_01.jpg",
      imageAlt: "森に現れたスライム",
      choices: [
        { label: "戦う", next: "battle" },
        { label: "逃げる", next: "castle" }
      ]
    },

	/* リリスの城 */
    castle: {
      title: "リリスの城",
      text: "リリスの城に辿り着いた。",
      image: "images/castle_01.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "探索を続ける", next: "castle2" },
      ]
    },

    castle2: {
      title: "リリスの城",
      text: "宝箱を見つけた。",
      image: "images/castle_01_takara.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "宝箱を開ける", next: "open_box" },
        { label: "無視して探索を続ける", next: "lilith2" },
      ]
    },

    open_box: {
      title: "リリスの城",
      text: "液体が入った瓶を手に入れた。",
      image: "images/castle_02.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "探索を続ける", next: "lilith" },
      ]
    },

	/* アイテムあり */
    lilith: {
      title: "リリスの城",
      text: "リリスが現れた！",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "戦う", next: "battle_lilith2" },
        { label: "話しかける", next: "talk_lilith" },
        { label: "逃げる", next: "exit_lilith2" },
      ]
    },

	/* アイテムなし */
    lilith2: {
      title: "リリスの城",
      text: "リリスが現れた！",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "戦う", next: "battle_lilith2" },
        { label: "逃げる", next: "exit_lilith2" },
        { label: "とりあえず踊る", next: "exit_lilith2" },
      ]
    },

    battle_lilith2: {
      title: "リリスの城",
      text: "武器を持っていない。",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "逃げる", next: "exit_lilith2" }
      ]
    },

    exit_lilith2: {
      title: "リリスの城",
      text: "リリスは魔法を詠唱した。\n「エクスプロージョン！」\n999のダメージ！\nあなたは死んだ。",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "最初から", next: "start" }
      ]
    },

	/* リリスに話しかける */
    talk_lilith: {
      title: "リリスの城",
      text: "リリスは笑みを浮かべながらあなたに問いかけた。\n「丸腰で私の城に乗り込むなんて、いい度胸じゃないか。\nお前の望みは何だい？」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "魔物と戦える武器が欲しい", next: "talk_lilith_1" },
        { label: "この世の真理が知りたい", next: "talk_lilith_2" },
        { label: "全てを破壊する力が欲しい", next: "talk_lilith_3" },
        { label: "何もいらない", next: "talk_lilith_4" }
      ]
    },

	/* リリス選択肢1 */
    talk_lilith_1: {
      title: "リリスの城",
      text: "「魔物と戦う？まあいいさ、勝手にしな。\nちょうどこの奥に武器を扱っている商人がいるよ」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "商人？", next: "talk_lilith_1_2" }
      ]
    },
    talk_lilith_1_2: {
      title: "リリスの城",
      text: "リリスは姿を消した。",
      image: "images/castle_01.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "奥に進む", next: "merchant1" }
      ]
    },

	/* リリス選択肢2 */
    talk_lilith_2: {
      title: "リリスの城",
      text: "「この世の真理？そんなの、簡単なことさ。\nこの世は魔物が支配する世界。\nすべてを破壊することが私らの使命さ」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "すべてを破壊した先に何がある？", next: "talk_lilith_2_2" }
      ]
    },
    talk_lilith_2_2: {
      title: "リリスの城",
      text: "「そんなの知ったことか。まずはお前から消してやろうか？」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "途中で瓶を拾ったが、何か知っているか？", next: "talk_lilith_2_3" }
      ]
    },
    talk_lilith_2_3: {
      title: "リリスの城",
      text: "「そんなの珍しいもんでも何でもないよ。\n気になるならこの奥にある実験室に行ったらどうだい」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "……", next: "talk_lilith_2_4" }
      ]
    },
    talk_lilith_2_4: {
      title: "リリスの城",
      text: "リリスは姿を消した。",
      image: "images/castle_01.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "奥に進む", next: "labo1" }
      ]
    },

    /* リリス選択肢3 */
    talk_lilith_3: {
      title: "リリスの城",
      text: "「それはいい心がけだ。お前、私の子分にしてやろうか？」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "……", next: "talk_lilith_3_2" },
        { label: "残念だが、それはできない。", next: "talk_lilith_3_2" }
      ]
    },
    talk_lilith_3_2: {
      title: "リリスの城",
      text: "「ふん。つまんない奴だね。\n力が欲しいんなら、この奥の実験室にでも行ったらどうだい」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "実験室？", next: "talk_lilith_3_3" }
      ]
    },
    talk_lilith_3_3: {
      title: "リリスの城",
      text: "リリスは姿を消した。",
      image: "images/castle_01.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "奥に進む", next: "labo1" }
      ]
    },
    /* リリス選択肢4 */
    talk_lilith_4: {
      title: "リリスの城",
      text: "「ふぅん、おかしな奴だね。まあ勝手にするんだね」",
      image: "images/lilith_03.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "……", next: "talk_lilith_4_2" },
      ]
    },
    talk_lilith_4_2: {
      title: "リリスの城",
      text: "リリスは姿を消した。",
      image: "images/castle_01.jpg",
      imageAlt: "リリスの城の城内",
      choices: [
        { label: "奥に進む", next: "labo1" }
      ]
    },

	/* 実験室 */
    labo1: {
      title: "実験室",
      text: "薄暗い実験室らしき場所に着いた。",
      image: "images/labo_01.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "探索を続ける", next: "labo2" }
      ]
    },
    labo2: {
      title: "実験室",
      text: "骸骨が現れた！",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "戦う", next: "labo2_battle" },
        { label: "逃げる", next: "labo2_exit" }
      ]
    },
    labo2_battle: {
      title: "実験室",
      text: "武器を持っていない。",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "逃げる", next: "labo2_exit" }
      ]
    },
    labo2_exit: {
      title: "実験室",
      text: "骸骨は話しかけてきた。\n「まあまあ、落ち着いてください。何かご用ですか？」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "武器が欲しい", next: "labo2_talk_weapon" },
        { label: "ここはどこ？", next: "labo2_talk_1" },
      ]
    },
    labo2_talk_weapon: {
      title: "実験室",
      text: "「ここに武器はありません。\nですがちょうど今日、商人がこの城に訪れているので、\n伺ってみてはいかがでしょうか？」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "その商人はどこにいる？", next: "labo2_talk_weapon2" },
        { label: "ここは一体何の施設なんだ？", next: "labo2_talk_1" }
      ]
    },
    labo2_talk_weapon2: {
      title: "実験室",
      text: "「この部屋の奥にいますよ」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "奥に進む", next: "merchant1" }
      ]
    },

    labo2_talk_1: {
      title: "実験室",
      text: "「ここは『人間』を研究する施設です」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "人間を研究する……？", next: "labo2_talk_2" }
      ]
    },

    labo2_talk_2: {
      title: "実験室",
      text: "「我々は千年前、人間との戦争で大敗を喫しました。\nその反省から、敵を知ることの重要性を学んだのです」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "ではこの研究室には人間が居る？", next: "labo2_talk_3" },
        { label: "じゃあ私も研究対象というわけか？", next: "labo3_talk_1" }
      ]
    },
    /* エンディング１ */
    labo2_talk_3: {
      title: "実験室",
      text: "「いいえ、ここに本物の人間はいません。\nここにいるのは人間によく似たモンスターです。",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "先ほどの女性もモンスター？", next: "labo2_talk_4" }
      ]
    },
    labo2_talk_4: {
      title: "実験室",
      text: "「リリス様のことでしたら、正確には魔族です。\n人間に似たモンスターは、あなたのことですよ」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "……は？", next: "labo2_talk_5" }
      ]
    },
    labo2_talk_5: {
      title: "実験室",
      text: "「あなたの左腕に書かれているのが被験体番号です」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "左腕を見る", next: "labo2_talk_6" }
      ]
    },
    labo2_talk_6: {
      title: "実験室",
      text: "左腕には被験体番号と思われるコードが記述されている。",
      image: "images/labo_06.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "私が……モンスター？", next: "labo2_talk_7" }
      ]
    },
    labo2_talk_7: {
      title: "実験室",
      text: "「あなたがお持ちの薬品は、肉体安定剤です」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "私がさっき宝箱で手に入れた瓶のこと？", next: "labo2_talk_8" }
      ]
    },
    labo2_talk_8: {
      title: "実験室",
      text: "「その薬品を摂取しないと、肉体が徐々に\nモンスターの姿に戻ってしまうため、忘れずに飲んでください」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "……", next: "labo2_talk_9" }
      ]
    },
    labo2_talk_9: {
      title: "実験室",
      text: "骸骨は姿を消した。\n薬品を飲みますか？",
      image: "images/labo_01.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "飲む", next: "ending_medicine" },
        { label: "飲まない", next: "ending_monster" }
      ]
    },
    ending_medicine: {
      title: "エンディング",
      text: "薬品を飲み、人間の姿で生きることを選んだ。\nこれで人間社会に溶け込み、スパイ活動ができるだろう。\nEND：人間になりたかった魔物",
      image: "images/end.jpg",
      imageAlt: "エンディング",
      choices: [
        { label: "最初から", next: "start" }
      ]
    },
    ending_monster: {
      title: "エンディング",
      text: "あなたは薬品を捨てた。\n本来の魔物の姿に戻り、森へ帰るために。\nEND：魔物として生きる",
      image: "images/end.jpg",
      imageAlt: "エンディング",
      choices: [
        { label: "最初から", next: "start" }
      ]
    },

    /* エンディング２ */
    labo3_talk_1: {
      title: "実験室",
      text: "「はい、あなたはこの城に迷い込んだ時点で\n逃げることは不可能です」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "絶対に？", next: "labo3_talk_2" }
      ]
    },
    labo3_talk_2: {
      title: "実験室",
      text: "「ご安心ください。我々はあなたをすぐにどうこうするつもりはありません」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "どういうこと？", next: "labo3_talk_3" }
      ]
    },
    labo3_talk_3: {
      title: "実験室",
      text: "「魔族に寿命はありません。何百年でも、何千年でも待ちます。\nあなたのことはいつでもゆっくり『研究』できるので、\n覚悟が決まったらいつでも声をかけてください」",
      image: "images/labo_02.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "……", next: "labo3_talk_4" }
      ]
    },
    labo3_talk_4: {
      title: "実験室",
      text: "骸骨は姿を消した。",
      image: "images/labo_01.jpg",
      imageAlt: "実験室",
      choices: [
        { label: "エンディングへ", next: "ending_castle_eternal" }
      ]
    },
    ending_castle_eternal: {
      title: "エンディング",
      text: "END：覚悟が決まるまで",
      image: "images/end.jpg",
      imageAlt: "エンディング",
      choices: [
        { label: "最初から", next: "start" }
      ]
    },
	/* 商人 */
    merchant1: {
      title: "商人",
      text: "制作中",
      image: "images/end.jpg",
      imageAlt: "商人",
      choices: [
        { label: "最初から", next: "start" }
      ]
    },


  }
};