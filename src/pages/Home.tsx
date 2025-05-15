import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonToast,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
    const history = useHistory();

  const handleLogin = () => {
    const validUser = 'admin';
    const validPass = '1234';

    if (username === validUser && password === validPass) {
      history.push('/dashboard');
    } else {
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="custom-title">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <h2 className='subtitle'>Iniciar Sesión</h2>
        <IonItem className='custom-input'>
          <IonLabel position="stacked">Usuario</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
          />
        </IonItem>
        <IonItem className='custom-input'>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>
        <IonButton onClick={handleLogin} className="ion-margin-top">
          Iniciar sesión
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Usuario o contraseña incorrectos"
          duration={2000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
