import { useEffect, useState } from "react";
import { getAlerts } from "../utils/api";

const Alerts = ({ userId }: { userId: string }) => {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const loadAlerts = async () => {
      const data = await getAlerts(userId);
      setAlerts(data);
    };
    loadAlerts();
  }, [userId]);

  return (
    <div className="space-y-2">
      {alerts.map((alert, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <p>{alert}</p>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
