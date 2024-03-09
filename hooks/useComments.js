import React, { useEffect, useState } from "react";

const alphabetColors = [
  { char: "A", color: "#ff4760" },
  { char: "B", color: "#ff6057" },
  { char: "C", color: "#ff754e" },
  { char: "D", color: "#ff8b45" },
  { char: "E", color: "#ff9f3c" },
  { char: "F", color: "#ffb633" },
  { char: "G", color: "#ffca2a" },
  { char: "H", color: "#ffde21" },
  { char: "I", color: "#f5f83d" },
  { char: "J", color: "#d0ff3d" },
  { char: "K", color: "#abff3d" },
  { char: "L", color: "#86ff3d" },
  { char: "M", color: "#61ff3d" },
  { char: "N", color: "#3cff3d" },
  { char: "O", color: "#17ff3d" },
  { char: "P", color: "#3dff4e" },
  { char: "Q", color: "#3dff72" },
  { char: "R", color: "#3dff97" },
  { char: "S", color: "#3dffb6" },
  { char: "T", color: "#3dffd5" },
  { char: "U", color: "#3dffff" },
  { char: "V", color: "#3dd5ff" },
  { char: "W", color: "#3db6ff" },
  { char: "X", color: "#3d97ff" },
  { char: "Y", color: "#3d72ff" },
  { char: "Z", color: "#3d4eff" },
];

const humanDiff = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  const diff = Math.round((now - date) / 1000);

  if (diff < 60) {
    return diff + " detik yang lalu";
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + " menit yang lalu";
  } else if (diff < 86400) {
    return Math.floor(diff / 3600) + " jam yang lalu";
  } else {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  }
};

function useComments() {
  const [comments, setComments] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [defaultName, setDefaultName] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    hadir: "",
  });

  const getComment = async (page) => {
    setIsLoading(true);
    const response = await fetch(`/api/comments/get?page=${page}`);
    const data = await response.json();
    setComments(data.result);
    setPagination(data.pagination);
    setIsLoading(false);
  };

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setFormData({ name: name });
      setDefaultName(name);
    }
  }, [defaultName]);

  useEffect(() => {
    if (!comments) {
      getComment(1);
    }
  }, [comments]);

  const formHandle = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    const response = await fetch(`/api/comments/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setFormLoading(false);
    if (data.status) {
      if (!data.has_recorded) {
        setComments(data.result);
        setPagination(data.pagination);
        localStorage.setItem("name", formData.name);
        setDefaultName(formData.name);
      } else {
        setShowChangeModal(true);
      }
    }
  };

  const updateDataHandle = async () => {
    setFormLoading(true);
    setShowChangeModal(false);
    const response = await fetch(`/api/comments/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setFormLoading(false);
    if (data.status) {
      setComments(data.result);
      setPagination(data.pagination);
    }
  };

  const handleCloseModal = () => {
    setShowChangeModal(false);
  };

  const handleOnPageChange = (e) => {
    if (!isLoading) {
      getComment(e);
    }
  };

  return {
    handleInput,
    formHandle,
    updateDataHandle,
    handleCloseModal,
    handleOnPageChange,
    humanDiff,
    formData,
    defaultName,
    formLoading,
    comments,
    isLoading,
    pagination,
    showChangeModal,
    alphabetColors,
  };
}

export default useComments;
