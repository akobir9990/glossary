import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { fakeData } from "../../data/fakeData";
import Modal from "react-modal";
import ModalWindow from "../../components/modal/Modal";
import { motion } from "framer-motion";
import backTopIcon from "../../assets/backTop.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Content() {
  const [glossariesData, setGlossariesData] = useState(fakeData);
  const [modalIsOpen, ModalIsOpen] = useState(false);
  const [element, setElement] = useState({});
  const [backTopIsVisible, setBackTopIsVisible] = useState(false);

  function openModal(item) {
    setElement(item);
    ModalIsOpen(true);
  }
  function closeModal() {
    ModalIsOpen(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setBackTopIsVisible(true);
    } else {
      setBackTopIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handeSearch = (val) => {
    let text = val.toLowerCase();
    let filteredData = fakeData.filter((item) =>
      item.termRU.toLowerCase().includes(text)
    );
    setGlossariesData(filteredData);
  };
  document.onkeydown = function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <Container className="my-3">
      <motion.div
        initial={{ opacity: 0, y: 50, bottom: 50 }}
        animate={{ opacity: 1, y: 0, bottm: 0 }}
        transition={{ duration: 0.2 }}
      >
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search..."
          className="border-[2px] rounded-md py-3 px-4 min-w-[100%]"
          onChange={(e) => handeSearch(e.target.value)}
          autoFocus={true}
        />
        {glossariesData.map((item) => (
          <div
            key={item.id}
            className="border border-[teal] py-3 px-4 my-2 rounded cursor-pointer"
          >
            <h4 onClick={() => openModal(item)}>{item.termRU}</h4>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalWindow
            termRU={element.termRU}
            meanRU={element.meanRU}
            termEN={element.termEN}
            meanEN={element.meanEN}
            closeModal={closeModal}
          />
        </Modal>
      </motion.div>
      <button
        onClick={scrollToTop}
        className={`
        ${
          backTopIsVisible ? "block" : "hidden"
        } fixed top-[90vh] right-4 border-[solid] border-[1px] border-[black] px-5 py-2 rounded-lg hover:border-[teal] hover:shadow-[teal] hover:text-[teal]`}
      >
        <img src={backTopIcon} alt="" />
      </button>
    </Container>
  );
}
