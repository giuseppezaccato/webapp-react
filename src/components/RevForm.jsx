
import axios from "axios";
import { useState } from "react";

export default function RevForm({ movie_id, fetchShowMovie }) {

    //task endpoint composito da .env
    const endpoint = `${import.meta.env.VITE_ENDPOINT}/${movie_id}/revs`

    //task setup valore iniziale vuoto
    const emptyFormData = {
        name: "Giuseppe",
        text: "Molto bello",
        vote: 5,
    }

    const [formData, setFormData] = useState(emptyFormData)

    //task setup cb function che all'onSubmit fa partire in sequenza : 
    //? 1preventRefresh,
    //? 2axios.post,
    //? 3fetchShowMovie

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(endpoint, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                setFormData(formData);
                //task refresh recensioni
                fetchShowMovie();
            })
            .catch((err) => console.error(err));
    };

    //task setup function nell'onChange di OGNI input del form
    const setFieldValue = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <div className="card col-6 mx-auto">
                <h5 className="p-2">Add reviews</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Recensione</label>
                            <textarea
                                name="text"
                                className="form-control"
                                value={formData.text}
                                onChange={setFieldValue}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Voto</label>
                            <input
                                type="number"
                                min={1}
                                max={5}
                                name="vote"
                                className="form-control"
                                value={formData.vote}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn my-3 float-end btn-primary">
                                Aggiungi
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}