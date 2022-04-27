#pip install pandas
import pandas as pd;

from configCosmosDB import conn, cur;

sql = 'SELECT * FROM tb_category';
df = pd.read_sql(sql, conn);
df