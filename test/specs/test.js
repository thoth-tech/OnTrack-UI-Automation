describe("Test001", () => {

    it("Should be a passed test", () =>{
        var backpack = $("#backpack");

        browser.url("http://explorecalifornia.org/contact.htm")
        $("#name").waitForEnabled(3000);
        $("#comments").waitForEnabled(3000);


        $("#name").SetValue("Test001");
        $("#state").selectByVisibleText("Texas");
        browser.execute("arguments[0].scollIntoView();", backpack); 
        backpack.click();
        $("#newsletter_yes").click();


    });
    it("Should be a passed test", () =>{
        var submit = $("#submit");

        browser.url("http://demo.realworld.io/#/login")
        $("#username").waitForEnabled(3000);
        $("#comments").waitForEnabled(3000);


        $("#username").SetValue("User001@hello.com");
        $("#password").SetValue("Password123")
        submit.click();
       $()


    });

});