import { makeStyles } from "@mui/styles";
// returns a useStyles Hook
export const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    padding: "5% 5%",
    width: "100%",
    margin: 0,
  },
});
