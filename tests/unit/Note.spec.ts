import { expect, assert } from "chai";
import Note from "@/types/Note";

describe("Note Interface", () => {
  const instance: Note = {
    id: 1,
    title: "Example Title",
    message: "Example Message",
  };

  it("Returns All Correct Types", () => {
    expect(instance.id).to.be.a("number");
    expect(instance.title).to.be.a("string");
    expect(instance.message).to.be.a("string");
  });

  it("Returns All Correct Values from Interface Schema", () => {
    assert.equal(instance.id, 1);
    assert.equal(instance.title, "Example Title");
    assert.equal(instance.message, "Example Message");
  });
});
