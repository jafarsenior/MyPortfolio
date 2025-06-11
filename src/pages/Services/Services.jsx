import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name:"", category:"app", imageUrl:"", projectUrl:"", description:"" });
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [targetDeleteId, setTargetDeleteId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newForm, setNewForm] = useState({ name: "", category: "app", imageUrl: "", projectUrl: "", description: "" });
  const [newPassword, setNewPassword] = useState("");

  const correctPassword = "0605";

  const fetchProjects = async () => {
    const res = await fetch("https://684966e545f4c0f5ee714084.mockapi.io/projects");
    setProjects(await res.json());
  };

  useEffect(() => { fetchProjects(); }, []);

  const openEditModal = (project) => {
    setForm({ ...project });
    setEditId(project.id);
    setShowEditModal(true);
    setPassword("");
  };

  const openDeleteModal = (id) => {
    setTargetDeleteId(id);
    setShowDeleteModal(true);
    setPassword("");
  };

  const handleEditSave = async () => {
    if (password !== correctPassword) return toast.error("Incorrect password!");
    await fetch(`https://684966e545f4c0f5ee714084.mockapi.io/projects/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setShowEditModal(false);
    toast.success("Project updated!");
    fetchProjects();
  };

  const handleDeleteConfirm = async () => {
    if (password !== correctPassword) return toast.error("Incorrect password!");
    await fetch(`https://684966e545f4c0f5ee714084.mockapi.io/projects/${targetDeleteId}`, { method: "DELETE" });
    setShowDeleteModal(false);
    toast.info("Project deleted");
    fetchProjects();
  };

  const handleAddNewProject = async () => {
    if (newPassword !== correctPassword) return toast.error("Incorrect password!");
    await fetch("https://684966e545f4c0f5ee714084.mockapi.io/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    });
    setShowAddModal(false);
    setNewForm({ name: "", category: "app", imageUrl: "", projectUrl: "", description: "" });
    setNewPassword("");
    toast.success("New project added!");
    fetchProjects();
  };

  return (
    <div className="container py-5 mx-5">
      <ToastContainer />
      <h2 className="mb-4">Manage Portfolio Projects</h2>

      {/* Add New Button */}
      <Button variant="success" className="mb-4" onClick={() => setShowAddModal(true)}>
        + Add New Project
      </Button>

      {/* Project Cards */}
      <div className="row g-4">
        {projects.map(p => (
          <div key={p.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={p.imageUrl} alt={p.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <span className="badge bg-secondary mb-2">{p.category}</span>
                <p className="card-text">{p.description}</p>
                <a href={p.projectUrl} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm mb-2">View</a>
                <div className="mt-auto d-flex justify-content-between">
                  <Button size="sm" variant="warning" onClick={() => openEditModal(p)}>Edit</Button>
                  <Button size="sm" variant="danger" onClick={() => openDeleteModal(p.id)}>Delete</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton><Modal.Title>Add New Project</Modal.Title></Modal.Header>
        <Modal.Body>
          <input className="form-control mb-2" placeholder="Name" value={newForm.name}
            onChange={e => setNewForm({ ...newForm, name: e.target.value })} />
          <select className="form-select mb-2" value={newForm.category}
            onChange={e => setNewForm({ ...newForm, category: e.target.value })}>
            {["app", "product", "branding", "books"].map(c => <option key={c}>{c}</option>)}
          </select>
          <input className="form-control mb-2" type="url" placeholder="Image URL" value={newForm.imageUrl}
            onChange={e => setNewForm({ ...newForm, imageUrl: e.target.value })} />
          <input className="form-control mb-2" type="url" placeholder="Project URL" value={newForm.projectUrl}
            onChange={e => setNewForm({ ...newForm, projectUrl: e.target.value })} />
          <textarea className="form-control mb-2" placeholder="Description" rows="3" value={newForm.description}
            onChange={e => setNewForm({ ...newForm, description: e.target.value })} />
          <input className="form-control" type="password" placeholder="Enter password" value={newPassword}
            onChange={e => setNewPassword(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button variant="success" onClick={handleAddNewProject}>Add Project</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton><Modal.Title>Edit Project</Modal.Title></Modal.Header>
        <Modal.Body>
          <input className="form-control mb-2" placeholder="Name" value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} />
          <select className="form-select mb-2" value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}>
            {["app", "product", "branding", "books"].map(c => <option key={c}>{c}</option>)}
          </select>
          <input className="form-control mb-2" type="url" placeholder="Image URL" value={form.imageUrl}
            onChange={e => setForm({ ...form, imageUrl: e.target.value })} />
          <input className="form-control mb-2" type="url" placeholder="Project URL" value={form.projectUrl}
            onChange={e => setForm({ ...form, projectUrl: e.target.value })} />
          <textarea className="form-control mb-2" placeholder="Description" rows="3" value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })} />
          <input className="form-control" type="password" placeholder="Enter password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleEditSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton><Modal.Title>Confirm Delete</Modal.Title></Modal.Header>
        <Modal.Body>
          <p>Are you sure to delete this project?</p>
          <input className="form-control" type="password" placeholder="Enter password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Services;
