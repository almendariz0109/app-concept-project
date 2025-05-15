import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText
} from '@ionic/react';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color="primary">
          <h2>¡Bienvenido al Dashboard!</h2>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;