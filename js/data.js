const minnaData = {
  lesson1: {
    title: "Bài 1: Giới thiệu bản thân (初めまして)",
    vocab: [
      { id: 1, jp: "わたし", romaji: "watashi", vi: "Tôi" },
      { id: 2, jp: "あなた", romaji: "anata", vi: "Bạn / Anh / Chị" },
      { id: 3, jp: "あのひと", romaji: "ano hito", vi: "Người kia" },
      { id: 4, jp: "あのかた", romaji: "ano kata", vi: "Vị kia (lịch sự)" },
      { id: 5, jp: "みなさん", romaji: "minasan", vi: "Mọi người" },
      { id: 6, jp: "～さん", romaji: "~san", vi: "Anh / Chị / Ông / Bà" },
      { id: 7, jp: "～ちゃん", romaji: "~chan", vi: "Bé (xưng hô trẻ em)" },
      { id: 8, jp: "～じん", romaji: "~jin", vi: "Người (nước...)" },
      { id: 9, jp: "せんせい", romaji: "sensei", vi: "Thầy / Cô giáo" },
      { id: 10, jp: "きょうし", romaji: "kyoushi", vi: "Giáo viên (nghề nghiệp)" },
      { id: 11, jp: "がくせい", romaji: "gakusei", vi: "Học sinh / Sinh viên" },
      { id: 12, jp: "かいしゃいん", romaji: "kaishain", vi: "Nhân viên công ty" },
      { id: 13, jp: "しゃいん", romaji: "shain", vi: "Nhân viên công ty (đi kèm tên)" },
      { id: 14, jp: "ぎんこういん", romaji: "ginkouin", vi: "Nhân viên ngân hàng" },
      { id: 15, jp: "いしゃ", romaji: "isha", vi: "Bác sĩ" },
      { id: 16, jp: "けんきゅうしゃ", romaji: "kenkyuusha", vi: "Nhà nghiên cứu" },
      { id: 17, jp: "エンジニア", romaji: "enjinia", vi: "Kỹ sư" },
      { id: 18, jp: "だいがく", romaji: "daigaku", vi: "Trường đại học" },
      { id: 19, jp: "びょういん", romaji: "byouin", vi: "Bệnh viện" },
      { id: 20, jp: "でんき", romaji: "denki", vi: "Điện / Đèn điện" },
      { id: 21, jp: "だれ（どなた）", romaji: "dare (donata)", vi: "Ai (Vị nào)" },
      { id: 22, jp: "～さい", romaji: "~sai", vi: "Tuổi" },
      { id: 23, jp: "なんさい", romaji: "nansai", vi: "Mấy tuổi" },
      { id: 24, jp: "はい", romaji: "hai", vi: "Vâng / Đúng vậy" },
      { id: 25, jp: "いいえ", romaji: "iie", vi: "Không / Không phải" },
      { id: 26, jp: "はじめまして", romaji: "hajimemashite", vi: "Rất hân hạnh được gặp bạn" },
      { id: 27, jp: "～からきました", romaji: "~kara kimashita", vi: "Tôi đến từ..." },
      { id: 28, jp: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku onegaishimasu", vi: "Rất mong được giúp đỡ" },
      { id: 29, jp: "しつれいですが", romaji: "shitsurei desu ga", vi: "Xin lỗi / Xin mạn phép..." },
      { id: 30, jp: "おなまえは？", romaji: "onamae wa?", vi: "Tên bạn là gì?" }
    ],
    grammar: [
      { pattern: "N1 は N2 です", meaning: "N1 là N2", example: "わたしは がくせいです。", exampleVi: "Tôi là sinh viên." },
      { pattern: "N1 は N2 じゃ ありません", meaning: "N1 không phải là N2", example: "わたしは いしゃじゃ ありません。", exampleVi: "Tôi không phải bác sĩ." },
      { pattern: "S + か", meaning: "Câu hỏi nghi vấn", example: "あのひとは せんせいですか。", exampleVi: "Người kia có phải giáo viên không?" },
      { pattern: "N も", meaning: "N cũng là...", example: "サントスさんも かいしゃいんです。", exampleVi: "Anh Santos cũng là nhân viên." },
      { pattern: "N1 の N2", meaning: "N2 thuộc/của N1", example: "ミラーさんは IMCの しゃいんです。", exampleVi: "Anh Miller là nhân viên IMC." }
    ],
    fillBlanks: [
      { id: 1, question: "わたし [blank] がくせいです。", answer: "は", options: ["は", "が", "の", "も"] },
      { id: 2, question: "あのひとは いしゃ [blank] ありません。", answer: "じゃ", options: ["じゃ", "は", "か", "と"] },
      { id: 3, question: "ミラーさんは IMC [blank] しゃいんです。", answer: "の", options: ["の", "は", "も", "で"] },
      { id: 4, question: "サントスさん [blank] かいしゃいんですか。", answer: "も", options: ["も", "の", "へ", "で"] },
      { id: 5, question: "あのかたは [blank] ですか。- マイクさんです。", answer: "どなた", options: ["どなた", "なんさい", "なん", "どこ"] }
    ],
    quiz: [
      { q: "ぎんこういん nghĩa là gì?", options: ["Bác sĩ", "Nhân viên ngân hàng", "Giáo viên", "Học sinh"], a: 1 },
      { q: "Từ nào nghĩa là 'Thầy/Cô giáo'?", options: ["がくせい", "いしゃ", "せんせい", "かいしゃいん"], a: 2 },
      { q: "Mẫu câu 'A cũng là B' dùng trợ từ nào?", options: ["は", "の", "も", "で"], a: 2 },
      { q: "Cách hỏi tuổi lịch sự là gì?", options: ["なんさい", "おいくつ", "どなた", "どちら"], a: 1 }
    ],
    reading: {
      jp: "はじめまして。わたしは マイク・ミラーです。アメリカから きました。IMCの しゃいんです。どうぞ よろしく おねがいします。",
      vi: "Rất hân hạnh được gặp bạn. Tôi là Mike Miller. Tôi đến từ Mỹ. Tôi là nhân viên công ty IMC. Rất mong nhận được sự giúp đỡ."
    },
    dialogue: [
      { speaker: "A", jp: "初めまして。ミラーです。", romaji: "Hajimemashite. Miraa desu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Miller." },
      { speaker: "B", jp: "佐藤です。よろしくお願いします。", romaji: "Sato desu. Yoroshiku onegaishimasu.", vi: "Tôi là Sato. Rất mong được sự giúp đỡ của bạn." }
    ]
  },

  lesson2: {
    title: "Bài 2: Đồ vật xung quanh (これ・それ・あれ)",
    vocab: [
      { id: 1, jp: "これ", romaji: "kore", vi: "Cái này (gần người nói)" },
      { id: 2, jp: "それ", romaji: "sore", vi: "Cái đó (gần người nghe)" },
      { id: 3, jp: "あれ", romaji: "are", vi: "Cái kia (xa cả hai)" },
      { id: 4, jp: "この N", romaji: "kono N", vi: "Cái N này" },
      { id: 5, jp: "その N", romaji: "sono N", vi: "Cái N đó" },
      { id: 6, jp: "あの N", romaji: "ano N", vi: "Cái N kia" },
      { id: 7, jp: "ほん", romaji: "hon", vi: "Sách" },
      { id: 8, jp: "じしょ", romaji: "jisho", vi: "Từ điển" },
      { id: 9, jp: "ざっし", romaji: "zasshi", vi: "Tạp chí" },
      { id: 10, jp: "しんぶん", romaji: "shinbun", vi: "Tờ báo" },
      { id: 11, jp: "ノート", romaji: "nooto", vi: "Vở / Sổ tay" },
      { id: 12, jp: "てちょう", romaji: "techou", vi: "Sổ tay cá nhân" },
      { id: 13, jp: "めいし", romaji: "meishi", vi: "Danh thiếp" },
      { id: 14, jp: "カード", romaji: "kaado", vi: "Thẻ / Card" },
      { id: 15, jp: "えんぴつ", romaji: "enpitsu", vi: "Bút chì" },
      { id: 16, jp: "ボールペン", romaji: "boorupen", vi: "Bút bi" },
      { id: 17, jp: "かぎ", romaji: "kagi", vi: "Chìa khóa" },
      { id: 18, jp: "とけい", romaji: "tokei", vi: "Đồng hồ" },
      { id: 19, jp: "かさ", romaji: "kasa", vi: "Cái ô / Dù" },
      { id: 20, jp: "かばん", romaji: "kaban", vi: "Cặp sách / Túi" }
    ],
    grammar: [
      { pattern: "これ / それ / あれ は N です", meaning: "Cái này / đó / kia là N", example: "これは ほんです。", exampleVi: "Cái này là quyển sách." },
      { pattern: "この N / その N / あの N", meaning: "Cái N này / đó / kia", example: "この ほんは わたしのです。", exampleVi: "Quyển sách này là của tôi." }
    ],
    fillBlanks: [
      { id: 1, question: "これ [blank] わたしの とけいです。", answer: "は", options: ["は", "の", "か", "も"] },
      { id: 2, question: "日本語 [blank] ほん", answer: "の", options: ["の", "は", "に", "で"] }
    ],
    quiz: [
      { q: "Từ nào có nghĩa là 'Từ điển'?", options: ["ほん", "じしょ", "ざっし", "とけい"], a: 1 },
      { q: "'これ' dùng để chỉ vật ở đâu?", options: ["Gần người nói", "Gần người nghe", "Xa cả hai", "Không xác định"], a: 0 }
    ],
    reading: {
      jp: "これは わたしの てちょうです。この ほんは にほんごの じしょです。あれは ヤマダさんの かばんです。",
      vi: "Đây là sổ tay của tôi. Quyển sách này là từ điển tiếng Nhật. Cái kia là cặp của cô Yamada."
    },
    dialogue: [
      { speaker: "A", jp: "それは 何ですか。", romaji: "Sore wa nan desu ka.", vi: "Cái đó là cái gì vậy?" },
      { speaker: "B", jp: "これは 日本語の ノートです。", romaji: "Kore wa Nihongo no nooto desu.", vi: "Cái này là vở tiếng Nhật." }
    ]
  }
};
