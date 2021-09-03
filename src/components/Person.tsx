import React, { FC , useState, ChangeEvent} from 'react';

export enum HairColor {
    Blonde = "wow nice!",
    Brown = "looking coll!!",
    Pink = "looking so coll...!!!"
}

type UserType = "user" | "admin" | "instructor";

interface Props {
    name: string
    age: number
    isMarreid: boolean
    HairColor: HairColor
    userType: UserType
}


const Person:FC<Props> = ({name, age, isMarreid, HairColor, userType}) => {
    const [country, setCountry] = useState<string | null>(null)

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{isMarreid}</h1>
            <div>
                <input type="text" placeholder="Enter your coutry name" onChange={handleChange} />
            </div>
            <div>
                <p>{country}</p>
            </div>
            <p>{HairColor}</p>
            <p>{userType}</p>
        </div>
    );
};

export default Person;