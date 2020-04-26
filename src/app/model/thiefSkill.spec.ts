import { getThiefSkills } from "./thiefSkills";
import { Race } from "./race";

describe("thiefSkills", () => {
  it("should get skills", () => {
    const thiefSkills = getThiefSkills(0, 1, Race.HUMAN);
    console.log(thiefSkills);
    expect(thiefSkills[0].score).toEqual(85);
    expect(thiefSkills[4].score).toEqual(0);
    expect(thiefSkills[1].label).toEqual("Find/Remove Traps");
    expect(thiefSkills[7].score).toEqual(1);

    // 80, 25, 10, 20,  20,  30,  35,  1
    // 0, -15, 0, -10,  -20, -10, -15,  0
    // +5, 0,  0,  0,   0,   +5,  0,   0
    // 85, 10, 10, 10,  0,   25,  20,  1
  });

  it("should get Trump skills at level 7", () => {
    const thiefSkills = getThiefSkills(7, 16, Race.HUMAN);
    console.log(thiefSkills);
    expect(thiefSkills[0].score).toEqual(85);
    expect(thiefSkills[4].score).toEqual(0);
    expect(thiefSkills[1].label).toEqual("Find/Remove Traps");
    expect(thiefSkills[7].score).toEqual(1);

    // 80, 25, 10, 20,  20,  30,  35,  1
    // 0, -15, 0, -10,  -20, -10, -15,  0
    // +5, 0,  0,  0,   0,   +5,  0,   0
    // 85, 10, 10, 10,  0,   25,  20,  1
  });
});
