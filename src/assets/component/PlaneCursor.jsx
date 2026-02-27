// import { useEffect, useState } from "react";

// function PlaneCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <img
//       src="/logo/plane_1044134.png"
//       alt="cursor"
//       style={{
//         position: "fixed",
//         left: position.x,
//         top: position.y,
//         width: "50px",
//         pointerEvents: "none",
//         transform: `translate(-50%, -50%) rotate(45deg)`,
//         zIndex: 9999,
//       }}
//     />
//   );
// }

// export default PlaneCursor;