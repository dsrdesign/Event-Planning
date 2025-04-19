import { Tabs } from "expo-router";

export default function CustomerLayout() {
     return (
          <Tabs>
               <Tabs.Screen name="events/index" options={{ title: "Evénements" }} />
               <Tabs.Screen name="reservations/index" options={{ title: "Mes Réservations" }} />
               <Tabs.Screen name="profile" options={{ title: "Profil" }} />
          </Tabs>

     );
}
