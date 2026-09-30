import Image from "next/image";
import { TeamMember } from "@/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card flex flex-col items-center text-center bg-beige-light">
     {member.image ? (
        <div className="relative h-40 w-40 overflow-hidden rounded-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary font-display text-xl font-semibold text-accent-light">
          {initials(member.name)}
        </div>
      )}
      <h3 className="mt-4 font-display text-base font-semibold text-primary">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{member.role}</p>
    </div>
  );
}
