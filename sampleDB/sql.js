///// sql.js /////
//データベースをオープン
var db = openDatabase('sample.db', '1.0', 'sample', 1048576);
//テーブル作成
db.transaction(
  function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS address(name, address)');
  },
  function(error){console.log('失敗')},
  function(){console.log('成功')}
);

//値追加
db.transaction(
  function(tx) {
    tx.executeSql(
      'INSERT INTO address VALUES (?,?)',
      ['立川','沖縄県'],
      function(){console.log('成功')},
      function(){console.log('失敗')}
    );
  },
  function(error){console.log('失敗')},
  function() {console.log('成功')}
);

//値を読み込み
db.transaction(
  function(tx) {
    tx.executeSql('SELECT * from address',
    null,function(rt,rs){
      if(rs.rows.length === 0) return;
      console.dir(rs.rows);
    },function(){console.log('失敗')});
  },
  function(error){console.log('失敗')},
  function() {console.log('成功')}
);
