import React, { useContext } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import CourseTable from "./components/CourseTable";
import EditDrawer from "./components/EditDrawer";
import CreateDrawer from "./components/CreateDrawer";
import { DataContext } from "./contexts/DataContext";

const App = () => {
  const {editDrawer} =useContext(DataContext)
  return (
    <Container>
      <Header />
      <CourseTable />
      <CreateDrawer />
      {editDrawer && <EditDrawer />}
    </Container>
  );
};

export default App;
