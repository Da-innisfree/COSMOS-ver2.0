# pip install PyMySQL
import pymysql

conn = None
cur = None

dbIp = 'cosmos2.ck3sdux3veh4.ap-northeast-2.rds.amazonaws.com'
dbUser = 'root'
dbPassword='ekdlseotmd'
dbName='cosmos2'
dbCharset='utf8'

conn = pymysql.connect(host=dbIp, user=dbUser, password=dbPassword, db=dbName, charset=dbCharset)
cur = conn.cursor()