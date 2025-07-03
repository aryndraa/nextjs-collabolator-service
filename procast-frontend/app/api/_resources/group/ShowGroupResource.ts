import { Group } from "@/lib/generated/prisma";
import { format } from "date-fns";

export class ShowGroupResource {
  static toJson(group: Group) {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
      deadlineProject: format(new Date(group.deadlineProject), "MMMM d, yyyy"),
      createdAt: format(new Date(group.createdAt), "MMMM d, yyyy"),
    };
  }
}
