import { Group } from "@/lib/generated/prisma";
import { format } from "date-fns";

export class GetGroupResource {
  static toJson(group: Group) {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
      deadlineProject: format(new Date(group.deadlineProject), "MMMM d, yyyy"),
    };
  }

  static collection(groups: Group[]) {
    return groups.map(this.toJson);
  }
}
