import React from "react";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <p>
            This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card. This is a sample text paragraph. It contains some content that will appear to the left of the card.
          </p>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is the content of the card. You can place any relevant
                information, images, or components here.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <p>
            This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. This text continues below the card, and you can add more content as needed. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
