function ClientInfo({ user }) {
  return (
    <>
      <p>Logged in as</p>
      <div className="flex gap-4 items-center">
        <img
          referrerPolicy="no-referrer"
          className="h-8 rounded-full"
          src={user.image}
          alt={user.name}
        />
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ClientInfo;
