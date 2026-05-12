from django.shortcuts import render
from django.http import HttpResponse 
from db_connect import data_base_connector
#from django.contrib import messages
# Create your views here.

def table(request):
    events = [
        {"id": 1,'label': "Hackaton 2026", 'date': "08/05/26",'location': "Mirror Park, st. 7b"},
        {"id": 2,'label': "Technostrelka 2026", 'date': "18/06/26",'location': "Marksman`s street, 2a"},
        {"id": 3,'label': "Sber School Swim-Pool", 'date': "11/07/26",'location': "Saint Peter street 5a"}
    ]
    amount_of_rows = len(events)
    column_amount = 3
    return render(request, 'table.html', {'table_list': events}) 
def user_login(request):
    if request.method == "POST":
        connection = data_base_connector()
        login_name = request.POST.get("user_name")
        phone = request.POST.get("user_phone")
        try:
            with connection.cursor() as cursor:
                sql = "select name from Users WHERE name = %s;"
                cursor.execute(sql,(login_name,))
            result = cursor.fetchone()
            if (result):
                name_from_db = result['name']
                if name_from_db == login_name:
                    print("Вы вошли")

        except:
            print("Не удалось получить юзера,или его не существует")
            return render(request,'login.html');
        finally:
            connection.commit()
            connection.close()

def user_registration(request):
    if request.method == "POST":
        connection = data_base_connector()
        name = request.POST.get("user_name")
        phone = request.POST.get("user_phone")
        #balance = request.POST.get("balance")
        #account_number = request.POST.get("account_number")
        try:
            with connection.cursor() as cursor:
                cursor.callproc('create_user', [name, phone])
            print(name)
            print(phone)
            #redirect-> accounts.html 
        except:
            print("Ошибка в передаче")
            connection.close()  
        finally:
            connection.commit()
            connection.close()
    return render(request,'registration.html')


def post_form(request):
    if request.method == "POST":
        input = request.POST.get("input")
        return render(request,'form.html',{'input': input})
    return render(request,'form.html')

def helloEcho(request):
    return HttpResponse("<h1>That`s all Folks!</h1>")

def mathTracker(request,value):
    if "+" in value:
        plus = value.find("+")   
        a = (value[:plus]) 
        b = (value[plus+1:])
        int_a = int(a)
        int_b = int(b)
        return HttpResponse(f"{value} = {int_a + int_b}!")
    elif "-" in value:
        minus = value.find("-")
        a = (value[:minus])
        b = (value[minus+1:])
        int_a = int(a)
        int_b = int(b)
        return HttpResponse(f"{value} = {int_a - int_b}!")
    elif "*" in value:
        multiply = value.find("*")
        a = (value[:multiply])
        b = (value[multiply+1:])
        int_a = int(a)
        int_b = int(b)
        return HttpResponse(f"{value} = {int_a * int_b}!")
    else:
        devide = value.find(":")
        a = (value[:devide]) 
        b = (value[devide+1:])
        int_a = int(a)
        int_b = int(b)
        return HttpResponse(f"{value} = {int_a / int_b}!")