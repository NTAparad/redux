import {FunctionComponent} from "react";
import {HobbyType} from "../../types/Type";

type Props = {
    todos: HobbyType[]
}
const List: FunctionComponent<Props> = ({todos}) => {
    return (
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <span>
                                {todo.hobby}
                            </span>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default List