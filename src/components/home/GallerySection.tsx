import { Gallery } from "react-grid-gallery";
import Container from "../container/Container";
const GallerySection = () => {
  const images = [
    {
      src: "https://i.ibb.co/GH8FXdS/z.jpg",
      width: 320,
      height: 174,
      isSelected: true,
    },
    {
      src: "https://i.ibb.co/27VmL1W/s.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
    },
    {
      src: "https://i.ibb.co/ZdnYVXR/p.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/GpjJV1b/o.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/L8cP9Lk/n.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/Dpm0KZP/m.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/QcwYwtj/l.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/zQDfCLt/k.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/5cDg1Q4/j.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/tQhvGCL/images.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/xgc0tsq/i.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/8Xkzy6w/h.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/TMdT6Dh/g.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/TL0JkN6/f.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/Yf8yJB2/e.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/fpyg22R/d.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/Z8J8ZQJ/c.png",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/pwcK8MC/b.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://i.ibb.co/HCCS66d/a.jpg",
      width: 320,
      height: 212,
    },
  ];
  return (
    <Container className="mt-24">
      <h1 className="mb-24 text-4xl font-bold text-center">Our Gallery</h1>
      <Gallery images={images} />
    </Container>
  );
};

export default GallerySection;
