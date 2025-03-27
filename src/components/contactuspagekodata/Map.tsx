import React from "react";

const Map: React.FC = () => {
  return (
    <div className="w-full h-[450px] border-0 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.70476873214818!2d85.33657648860363!3d27.739622630404906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1947ca0ca5b9%3A0xada1d5cc2bce2dc9!2sPunya%20Jewellery!5e0!3m2!1sen!2snp!4v1742881358011!5m2!1sen!2snp"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;