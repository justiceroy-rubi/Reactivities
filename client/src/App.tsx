import { List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react"
import axios from "axios";

function App() {
  
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5000/api/activities')
      .then(response => setActivities(response.data))
      .catch(error => console.error('Error fetching activities:', error));

    return () => {}
  }, [])
  
  return (
    <>
      <Typography variant="h3" className="app" style={{ color: 'blue' }}>Reactivities</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText>{ activity.title }</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
