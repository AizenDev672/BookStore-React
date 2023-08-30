import "../list/index";

export function BookItems({ photo, title, author, removeFromList }) {
  return (
    <li>
      <img src={photo} alt={title} />
      <div>
        <strong>{title}</strong> - { author }
      </div>

      <footer>
        <button type="button" onClick={removeFromList} style={{ backgroundColor: "#ef233c", width: 50 }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </footer>
    </li>
  );
}
