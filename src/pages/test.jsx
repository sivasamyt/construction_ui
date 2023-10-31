import { useEffect, useState } from "react";

function Test() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState([]);


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
			.then(data => {
				setData(data);
			}).catch(error => {

			})
	}, []);

	return (
		<div>
			<h1>all json data</h1>
			<ul>{data.map((item) => (
				<div>
					<h2>userId- {item.userId}</h2>
					<p>id- {item.id}</p>
					<p>title- {item.title}</p>
					<p>body- {item.body}</p>
				</div>
			))}
			</ul>
		</div>
	);
}

export default Test;
