import pymysql

conn = None
cur = None

dbIp = 'cosmos2.ck3sdux3veh4.ap-northeast-2.rds.amazonaws.com'
dbUser = 'root'
dbPassword='ekdlseotmd'
dbName='cosmos2'
dbCharset='utf8'

sql=''

conn = pymysql.connect(host=dbIp, user=dbUser, password=dbPassword, db=dbName, charset=dbCharset)
cur = conn.cursor()

sql='CREATE TABLE IF NOT EXISTS userTable (id char(50), userName char(50), email char(50), birthYear int)'
cur.execute(sql)
conn.commit()
conn.close()
