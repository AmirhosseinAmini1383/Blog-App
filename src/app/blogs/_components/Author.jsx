import Avatar from "@/ui/Avatar";

function Author({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} />
      <span className="text-xs text-secondary-500">{name}</span>
    </div>
  );
}

export default Author;
