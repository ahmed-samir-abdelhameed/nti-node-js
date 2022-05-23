const userMod = require("../../database/models/user.model")
const home = async (req, res) => {
  try {
    const data = await userMod.find()
    let show = data.length
    res.render("home", { pageTitle: "HOME", data, show })
  } catch (e) {
    res.send("errow")
  }
}
const addCustomer = (req, res) => {
  res.render("addCustomer", { pageTitle: "Customer-User" })
}
const addNewCustomer = async (req, res) => {
  const data = { ...req.query }
  try {
    const user = new userMod(data)
    await user.save()
    res.redirect("/")
  } catch (e) {
    res.send(e.message);
  }
};
const single = async (req, res) => {
  let showrtans = 0
  try {
    const user = await userMod.findById(req.params.id)
    if (user) showrtans = user.transction.length
    res.render("single", {
      pageTitle: user ? `user ${user.name} data` : "user not found",
      user,
      showrtans,
    })
  } catch (e) {
    res.send("error")
  }
}
const deleteuser = async (req, res) => {
  let showrtans = 0
  try {
    const user = await userMod.findByIdAndDelete(req.params.id)
    res.redirect(`/`)
  } catch (e) {
    res.send("error")
  }
}
const addtransactionPost = async (req, res) => {
  let id = req.params.id;
  let trans = { ...req.body };
  try {
    const user = await userMod.findOneAndUpdate(
      { _id: id },
      { $push: { transction: trans } }
    );
    res.redirect(`/showuser/${id}`);
  } catch (e) {
    res.send("error");
  }
};
const addtransaction = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await userMod.findById({ _id: id });
    if (user) showrtans = user.transction.length;
    res.render("addtransaction", { pageTitle: "Single-User", user, showrtans });
  } catch (e) {
    res.send("errow")
  }
}

module.exports = { home,addCustomer,addNewCustomer,single,addtransaction,addtransactionPost,deleteuser,}
