function ClientInfo({ user }) {
  return (
    <>
      <p className="@max-[465px]:hidden">Logged in as</p>
      <div className="flex gap-3 items-center">
        <img
          referrerPolicy="no-referrer"
          className="h-8 rounded-full"
          src={user.image}
          alt={user.name}
        />
        <p className="@max-[320px]:hidden">{user.name}</p>
      </div>
    </>
  );
}

export default ClientInfo;
