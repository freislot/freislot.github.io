import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveDocument, addDocument, setDocuments, reorderDocument, removeDocument } from '../redux/store';

export default function App() {
  const dispatch = useDispatch();
  const documents = useSelector(state => state.documents.documents);

  const [newTitle, setNewTitle] = useState('');
  const [filter, setFilter] = useState('');
  const [draggingStatus, setDraggingStatus] = useState(null); // Состояние для отслеживания перетаскивания

  // Загружаем документы из localStorage при первом рендере.
  useEffect(() => {
    const savedDocs = JSON.parse(localStorage.getItem('documents'));
    if (savedDocs && savedDocs.length) {
      dispatch(setDocuments(savedDocs));
    }
  }, [dispatch]);

  // Сохраняем документы в localStorage при каждом изменении.
  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData('id');
    dispatch(moveDocument({ id, newStatus }));
    setDraggingStatus(null); // Сбрасываем статус перетаскивания
  };

  const handleDragStart = (e, id, index, status) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('index', index);
    e.dataTransfer.setData('status', status);
  };

  const handleDropOnSameColumn = (e, destinationIndex, status) => {
    const sourceIndex = parseInt(e.dataTransfer.getData('index'), 10);

    if (sourceIndex !== destinationIndex) {
      dispatch(reorderDocument({ sourceIndex, destinationIndex, status }));
    }
  };

  const handleAddDocument = () => {
    if (newTitle) {
      const newDoc = {
        id: Date.now().toString(),
        title: newTitle,
        status: 'in-progress',
        order: documents.filter(doc => doc.status === 'in-progress').length,
      };
      dispatch(addDocument(newDoc));
      setNewTitle('');
    }
  };

  const handleRemoveDocument = (id) => {
    dispatch(removeDocument(id));
  };

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDragEnter = (e, status) => {
    // Устанавливаем статус при наведении на колонку
    setDraggingStatus(status);
  };

  const handleDragLeave = (e) => {
    // Сбрасываем статус при выходе курсора из колонки
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDraggingStatus(null);
    }
  };

  const statuses = [
    {
      title: 'В работе',
      name: 'in-progress',
    },
    {
      title: 'На тестировании',
      name: 'under-review',
    },
    {
      title: 'Готово',
      name: 'completed'
    },
  ]

  return (
    <div>
      <div className="addAndSearch">
        <div className="input">
          <input
            id="filter"
            type="text"
            placeholder="Название документа"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label htmlFor="filter">Поиск документов по названию</label>
        </div>
        <div className="input">
          <input
            id="addDoc"
            type="text"
            placeholder="Название документа"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label htmlFor="addDoc">Добавить новый документ</label>
        </div>
        <button onClick={handleAddDocument}>Добавить</button>
      </div>
      <div className="board">
        {statuses.map(status => (
          <div
            key={status.name}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, status.name)}
            onDragEnter={(e) => handleDragEnter(e, status.name)}
            onDragLeave={handleDragLeave}
            className={`status-col ${status.name} ${draggingStatus === status.name && 'active'}`}
          >
            <div className="status-col-title">{status.title}</div>
            <div style={{ flex: 1 }} >
              {filteredDocuments
                .filter(doc => doc.status === status.name)
                .sort((a, b) => a.order - b.order)
                .map((doc, index) => (
                  <div
                    key={doc.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, doc.id, index, status.name)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDropOnSameColumn(e, index, status.name)}
                    className="document"
                  >
                    <div>
                      <div className="doc-id">ID-{doc.id}</div>
                      <div className="doc-name">{doc.title}</div>
                    </div>

                    <button onClick={() => handleRemoveDocument(doc.id)}>Удалить</button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
