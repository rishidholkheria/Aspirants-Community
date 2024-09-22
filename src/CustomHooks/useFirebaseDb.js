import { useEffect, useState } from "react";
import { database, onValue, ref } from "../../src/firebaseConfig";

const useFirebaseDb = (serviceType) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = ref(database, serviceType);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [serviceType]);

  return {data, loading};
};

export default useFirebaseDb;


