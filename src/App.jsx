import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined, //undefined here means neither having a new project nor having a project selected
        projects: [],
        tasks: [],
    });

    function handleStartAddProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null, //null here means adding a project
            };
        });
    }

    function handleCancelAddProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    function handleFinishAddProject(projectData) {
        setProjectState((prevState) => {
            const projectId = Math.random();
            const newProject = { ...projectData, id: projectId };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleSelectProject(id) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleDeleteProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProjectId
                ),
            };
        });
    }

    function handleAddTask(text) {
        setProjectState((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks],
            };
        });
    }

    function handleDeleteTask(id) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id),
            };
        });
    }

    const selectedProject = projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId
    );

    const selectedProjectTasks = projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedProjectId
    );

    let content = (
        <SelectedProject
            project={selectedProject}
            onDeleteProject={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={selectedProjectTasks}
        />
    );

    if (projectState.selectedProjectId === null) {
        content = (
            <NewProject
                onAdd={handleFinishAddProject}
                onCancel={handleCancelAddProject}
            />
        );
    } else if (projectState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }

    return (
        <>
            <Header />
            <main className="main">
                <Sidebar
                    onSelectProject={handleSelectProject}
                    onStartAddProject={handleStartAddProject}
                    projects={projectState.projects}
                />
                {content}
            </main>
        </>
    );
}
export default App;
