export default function WayToTeach({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}

//   return ways.map((el, index) => {
//     return (
//       <li key={index}>
//         <p>
//           <strong>{el.title}</strong> {el.description}
//         </p>
//       </li>
//     )
//   })
