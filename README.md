## Task1
- Prerequisite: NodeJS installed
- Running query: node index.js <query> <param2>

## Task2
### Requirement
Data source: ev_data.json
Requirement: New query implementation named 'drove_nowhere'
Details: 
 - The data consists of vehicles identified by vehicle_id, there can be multiple entries for same vehicle.
 - created_date in the data file represents the timestamp of the reading, expressed in a string of the format  "yyyy-mm-dd hh:mm:ss", the timezone is UTC for all readings
 - Take driven_date as an argument in "yyyy-mm-dd" format
 - Query should return the number of unique vehicles which were not driven on the driven_date
 
Running query: node <file_name> <query_name> <driven_date_in_yyyy-mm-dd>
