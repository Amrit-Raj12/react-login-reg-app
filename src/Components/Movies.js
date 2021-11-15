import React, {useState} from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Movies = () => {
    const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
    const [vote, setVote]=useState(1);

    function voteIncreament(){
        setVote(prevVote=>prevVote+1)
    }

    function voteDecrement(){

        if(vote===0){
            return
        }
        setVote(prevVote=>prevVote-1)
    }

    return (
        <>
        <div className="movies_container">
            <div className="movie_card_box d-flex">
                <div className="movie_vote_box p-5">
                    <button className="d-block p-2" onClick={voteIncreament} style={{background:'none',outline:'none',border:'none'}}>
                        <ArrowDropUpIcon style={{fontSize:'45'}} />
                    </button>
                    <span className="d-block p-2">{vote}</span>
                    <button className="d-block p-2" onClick={voteDecrement} style={{background:'none',outline:'none',border:'none'}}>
                        <ArrowDropDownIcon style={{fontSize:'45'}} />
                    </button>
                    <h5 className="d-block p-2">Votes</h5>
                </div>
                <div className="movie_poster p-5">
                <Image src="https://img.buzzfeed.com/buzzfeed-static/static/2020-10/27/21/asset/2eae1b7041a8/sub-buzz-2749-1603833440-24.jpg" width="150" height="200" rounded />
                </div>
                <div className="movie_details p-5" style={{textAlign:'justify'}}>
                    <h3>X-Men::Dark Phoenix</h3>
                    <p style={{color:'grey'}}>Genre: <span style={{color:'black'}}>Action,Adventure,Fantasy</span></p>
                    <p style={{color:'grey'}}>Director: <span style={{color:'black'}}>Cary Joji</span></p>
                    <p style={{color:'grey'}}>Staring: <span style={{color:'black'}}>Ana De</span></p>
                    <p style={{color:'black'}}>Mins<span>|</span><span>English</span><span>|</span><span>2 Apr</span></p>
                    <p style={{color:'skyblue'}}>188 Views<span>|</span><span>Voted By 1 People</span></p>
                </div>
            </div>
            <div className="movie_button">
                <Button variant="primary" size="lg" onClick={() => setSmShow(true)} style={{width:'100%'}}>
                    Watch Trailer
                </Button>
            </div>
            <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          Movie Trailer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1-q8C_c-nlM" title="YouTube video player"></iframe>
        </Modal.Body>
      </Modal>
        </div>
        <br/>
        <div className="movies_container">
        <div className="movie_card_box d-flex">
            <div className="movie_vote_box p-5">
                <button className="d-block p-2" onClick={voteIncreament} style={{background:'none',outline:'none',border:'none'}}>
                    <ArrowDropUpIcon style={{fontSize:'45'}} />
                </button>
                <span className="d-block p-2">{vote}</span>
                <button className="d-block p-2" onClick={voteDecrement} style={{background:'none',outline:'none',border:'none'}}>
                    <ArrowDropDownIcon style={{fontSize:'45'}} />
                </button>
                <h5 className="d-block p-2">Votes</h5>
            </div>
            <div className="movie_poster p-5">
            <Image src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" width="150" height="200" rounded />
            </div>
            <div className="movie_details p-5" style={{textAlign:'justify'}}>
                <h3>Avengers::Endgame</h3>
                <p style={{color:'grey'}}>Genre: <span style={{color:'black'}}>Action,Adventure,Fantasy</span></p>
                <p style={{color:'grey'}}>Director: <span style={{color:'black'}}>Cary Joji</span></p>
                <p style={{color:'grey'}}>Staring: <span style={{color:'black'}}>Ana De</span></p>
                <p style={{color:'black'}}>Mins<span>|</span><span>English</span><span>|</span><span>10 Aug</span></p>
                <p style={{color:'skyblue'}}>500 Views<span>|</span><span>Voted By 5 People</span></p>
            </div>
        </div>
        <div className="movie_button">
            <Button variant="primary" size="lg" onClick={() => setLgShow(true)} style={{width:'100%'}}>
                Watch Trailer
            </Button>
        </div>
  <Modal
    size="lg"
    show={lgShow}
    onHide={() => setLgShow(false)}
    aria-labelledby="example-modal-sizes-title-lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        Movie Trailer
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player"></iframe>
    </Modal.Body>
  </Modal>
    </div>
    </>
    )
}

export default Movies
