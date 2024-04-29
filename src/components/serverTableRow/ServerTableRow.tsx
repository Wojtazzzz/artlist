"use client";

import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui-library/table";
import { useCopyIp } from "@/components/serverTableRow/useCopyIp";
import { capitalize } from "@/utils/capitalize";
import { type Server } from "@/app/page";

type ServerTableRowProps = {
  server: Server;
  index: number;
};

export const ServerTableRow = ({ server, index }: ServerTableRowProps) => {
  const { copyIp } = useCopyIp();

  return (
    <TableRow
      className={cn("whitespace-nowrap", {
        "bg-muted": index % 2 === 0,
      })}
    >
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell className="py-2">
        <button
          onClick={() => copyIp(server.name)}
          className="w-full py-2 text-left"
        >
          <p className="mb-1 text-base font-medium">
            {capitalize(server.name)}
          </p>
          <div>
            {server.motdFirstLine && <div>{server.motdFirstLine}</div>}
            {server.motdSecondLine && <div>{server.motdSecondLine}</div>}
          </div>
        </button>
      </TableCell>
      <TableCell>
        <span className={cn({ "text-red-600": !server.online })}>
          {server.currentPlayers} / {server.maxPlayers}
        </span>
      </TableCell>
      <TableCell className="text-right">
        <p
          className="ml-auto w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"
          title={server.version}
        >
          {server.version}
        </p>
      </TableCell>
    </TableRow>
  );
};
