from unittest import result
from configCosmosDB import conn, cur

sql = 'SELECT * FROM tb_category';

cur.execute(sql);

# fetchall() : table의 모든 검색 결과(all the rows)를 가저옴
# resultRawData = cur.fetchall()

# fetchall() : table의 복수의 검색 결과(sveral row)를 가저옴, 인자로 size(개수)를 넣어줌
# resultRawData = cur.fetchmany(size=5);

# fetchone() : table의 최초 검색 결과(the next row)를 가져옴
resultRawData = cur.fetchone();

for rawData in resultRawData :
    print(rawData)

conn.close()
