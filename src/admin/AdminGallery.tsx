import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { api, type GalleryItem } from '../api';
import './admin.css';

type GalleryFormProps = {
  item: GalleryItem | null;
  saving: boolean;
  onCancel: () => void;
  onSave: (image: File) => Promise<void>;
};

function GalleryForm({ item, saving, onCancel, onSave }: GalleryFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(item?.imageUrl ?? '');
  const [error, setError] = useState('');
  const previewObjectUrl = useRef<string | null>(null);

  useEffect(() => () => {
    if (previewObjectUrl.current) URL.revokeObjectURL(previewObjectUrl.current);
  }, []);

  function selectImage(event: ChangeEvent<HTMLInputElement>) {
    const selectedImage = event.target.files?.[0] ?? null;
    if (previewObjectUrl.current) URL.revokeObjectURL(previewObjectUrl.current);
    previewObjectUrl.current = selectedImage ? URL.createObjectURL(selectedImage) : null;
    setImage(selectedImage);
    setPreviewUrl(previewObjectUrl.current ?? item?.imageUrl ?? '');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!image) {
      setError('Sélectionnez une image à envoyer.');
      return;
    }
    try {
      await onSave(image);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Enregistrement impossible.');
    }
  }

  return (
    <form className="admin-form admin-gallery-form" onSubmit={submit}>
      <h2>{item ? 'Remplacer une image' : 'Ajouter une image'}</h2>
      <label>
        Fichier image
        <input
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp,image/avif"
          onChange={selectImage}
          required
        />
      </label>
      <p className="admin-muted admin-hint">JPG, PNG, GIF, WebP ou AVIF — 5 Mo maximum.</p>
      {previewUrl && (
        <img className="admin-form-preview" src={previewUrl} alt="Aperçu de l’image" />
      )}
      {error && <p className="admin-alert" role="alert">{error}</p>}
      <div className="admin-form-actions">
        <button type="button" className="admin-button admin-button-secondary" onClick={onCancel} disabled={saving}>
          Annuler
        </button>
        <button className="admin-button admin-button-primary" disabled={saving || !image}>
          {saving ? 'Enregistrement…' : item ? 'Remplacer l’image' : 'Ajouter à la galerie'}
        </button>
      </div>
    </form>
  );
}

export function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let active = true;
    api.getGallery()
      .then((galleryItems) => {
        if (active) setItems(galleryItems);
      })
      .catch((requestError: Error) => {
        if (active) setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [refreshKey]);

  async function saveImage(image: File) {
    setSaving(true);
    try {
      const data = new FormData();
      data.append('image', image);
      if (editing) await api.updateGalleryItem(editing.id, data);
      else await api.createGalleryItem(data);
      setFormOpen(false);
      setEditing(null);
      setLoading(true);
      setError('');
      setRefreshKey((current) => current + 1);
    } finally {
      setSaving(false);
    }
  }

  function startReplace(item: GalleryItem) {
    setEditing(item);
    setFormOpen(true);
  }

  function cancelForm() {
    setFormOpen(false);
    setEditing(null);
  }

  async function deleteImage(item: GalleryItem) {
    if (!window.confirm('Supprimer cette image de la galerie ? Cette action est irréversible.')) return;
    setError('');
    try {
      await api.deleteGalleryItem(item.id);
      setItems((current) => current.filter((entry) => entry.id !== item.id));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Suppression impossible.');
    }
  }

  return (
    <section className="admin-gallery-page">
      <header className="admin-header">
        <div>
          <p className="admin-eyebrow">Contenu du site</p>
          <h1>Galerie</h1>
        </div>
      </header>

      <section className="admin-content" aria-label="Images de la galerie">
        <div className="admin-toolbar">
          <div>
            <h2>Images</h2>
            <p className="admin-muted">{items.length} image{items.length === 1 ? '' : 's'}</p>
          </div>
          <button
            className="admin-button admin-button-primary"
            onClick={() => {
              setEditing(null);
              setFormOpen(true);
            }}
          >
            + Ajouter une image
          </button>
        </div>

        {error && <p className="admin-alert" role="alert">{error}</p>}
        {formOpen && (
          <GalleryForm
            key={editing?.id ?? 'new'}
            item={editing}
            saving={saving}
            onCancel={cancelForm}
            onSave={saveImage}
          />
        )}
        {loading ? (
          <p className="admin-loading" role="status">Chargement de la galerie…</p>
        ) : items.length === 0 ? (
          <p className="admin-empty">Aucune image pour le moment. Ajoutez la première image à la galerie.</p>
        ) : (
          <div className="admin-gallery-grid">
            {items.map((item) => (
              <article className="admin-gallery-card" key={item.id}>
                <img src={item.imageUrl} alt={`Image de la galerie ${item.id}`} />
                <div className="admin-card-actions">
                  <button className="admin-button admin-button-secondary" onClick={() => startReplace(item)}>
                    Remplacer
                  </button>
                  <button className="admin-button admin-button-danger" onClick={() => void deleteImage(item)}>
                    Supprimer
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
