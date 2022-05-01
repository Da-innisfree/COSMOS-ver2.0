from configCosmosDB import conn, cur

while(True) :
    userId = input('사용자 ID를 입력하세요 : ');
    if(userId == ''):
        break;
    userName = input('사용자 이름를 입력하세요 : ');
    userEmail = input('사용자 이메일를 입력하세요 : ');
    userBirthYear = input('사용자 출생연도를 입력하세요 : ');
    sql='INSERT INTO userTable VALUES("' + userId + '","' + userName + '","' + userEmail + '","' + userBirthYear + '")'
    print(sql)
    cur.execute(sql)


conn.commit()
conn.close()
