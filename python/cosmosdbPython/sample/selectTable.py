from configCosmosDB import conn, cur

sql = 'SELECT * FROM userTable';

cur.execute(sql);

while(True) :
    raw = cur.fetchone()
    if(raw == None):
        break;
    data1 = raw[0];
    data2 = raw[1];
    data3 = raw[2];
    data4 = raw[3];
    print("%5s   %15s   %15s   %d" %(data1, data2, data3, data4))

conn.close()
