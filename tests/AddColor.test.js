test("Add a color", async () => {
    const response = await fetch("http://127.0.0.1:8000/LAMPAPI/AddColor.php", {
        method: "POST",
         headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            color: "Blue",
            userId: 1
        })
    })

    const data = await response.json()

    expect(data.error).toEqual("")
})