export default function MovieRev({ rev }) {

    const { id,
        movie_id,
        name,
        vote,
        text
    } = rev

    return (


        <li className="list-group-item">
            <h4 className="text-center">{name}, vote: {vote} </h4>
            <p>{text}</p>
        </li>


        //task modal questo dovrebbe diventare l'intero componente, richiamato dal trigger button nella lista UL in MoviePage
        // <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div className="modal-body">
        //                ...
        //             </div>
        //         </div>
        //     </div>
        // </div>




    )
}