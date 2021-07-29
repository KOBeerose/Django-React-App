import pyrebase
import cv2
import numpy
 
from tensorflow.keras.models import load_model
 
loaded_model = load_model("Modelsign1.h5")
 
 
"""
def home(request):
    return HttpResponse("<h1>this is home</h1>")
"""
 
 
firebaseConfig = {'apiKey': "AIzaSyAs9Z0-V3qKwtiXJA3OEZa-XXR4Vm_xOKQ",
                'authDomain': "deploymlmodel-1e2ad.firebaseapp.com",
                'projectId': "deploymlmodel-1e2ad",
                'storageBucket': "deploymlmodel-1e2ad.appspot.com",
                'messagingSenderId': "434405383448",
                "databaseURL": "https://deploymlmodel-1e2ad.firebaseio.com",
                'appId': "1:434405383448:web:d9c4edd5e98589325d126d",
                'measurementId': "G-34R4YBNQ66"};
 
firebase = pyrebase.initialize_app(firebaseConfig)
storage = firebase.storage()
 
#download image
storage.child("image/img.jpg").download("C:\\Users\\Admin\\Desktop\\firebase", "1.jpg")
print("image downloaded")
 
 
#predict sign
width, height = 64, 64
dimentions = (width, height)
y = []
 
x = cv2.imread("1.jpg")
img = cv2.resize(x, dimentions, interpolation=cv2.INTER_AREA)
gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
 
z = gray_img.reshape(-1, 64, 64, 1)
t = loaded_model.predict(z)
r = int(t.argmax())
y.append(r)
 
y_classes2 = ['ain ', 'al ', 'aleef ', "b ", "seen "]
 
e=[]
for j in y:
    e.append(y_classes2[j])
    print(y_classes2[j], end='')
 
print('prediction done')
print(e)