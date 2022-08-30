const formatDateTime = (dt) => {    
  const months = ["Jan", "Feb", "Mar", "Apr", "May",
    "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  const date = new Date(dt);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${day} ${months[month]} ${year}`
};

export default formatDateTime