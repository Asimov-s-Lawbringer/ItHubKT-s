import pymysql

def data_base_connector():
    return pymysql.connect(  
        host='localhost',     
        port=3306,
        user='user', 
        password='user_password', 
        database='DB_KT_Transactions', 
        cursorclass=pymysql.cursors.DictCursor  
    )
