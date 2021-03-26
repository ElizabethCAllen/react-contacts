mport { useContext } from 'react';
import styled from 'styled-components';
import ContactContext from '../../contexts/ContactContext';

const ContactCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    height: 200px;
    box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.3);
    font-size: 1.2em;
    margin-bottom: 45px;
    cursor: pointer;
    & img {
        width: 150px;
    }
    &:last-of-type {
        margin-bottom: 0px;
    }
    & div:first-of-type {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & div:first-of-type {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 3px solid rgba(0,0,0,0.1);
        }
    }
`;

const ContactCard = ({ id, firstName = '', lastName = '', phoneNumber = '', profilePic = '', onClick }) => {

    const { removeContact } = useContext(ContactContext);

    return (
        <ContactCardContainer onClick={onClick}>
            <div>
                <div>
                    <img className="rounded-circle" src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div>
                <button className="rounded-circle font-weight-bold" onClick={() => removeContact(id)}>X</button>
            </div>
        </ContactCardContainer>
    );
};

export default ContactCard;