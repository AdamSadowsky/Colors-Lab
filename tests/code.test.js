/** @jest-environment jsdom */
const { doLogout } = require("../js/code.js")

test("logout", () => {
    document.cookie = "firstName=Adam"
    doLogout()
    expect(document.cookie).not.toContain("firstName=")
})

