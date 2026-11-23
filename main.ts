import { writeFileSync, mkdirSync } from "node:fs";
const LINE = "I've folded fitted sheets wrong for ten years, and the ball in my closet is a family heirloom.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
