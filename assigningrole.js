let accessMessage = "me" ;

if (accessMessage ==="admin"){
    console.log("Full access to create,edit and delete content")
}
else if (accessMessage ==="editor"){
    console.log("can edit existing content but cannot delete")
}
else if (accessMessage ==="viewer"){
    console.log("can only view content, no edit or delete permission")
}
else {console.log("Access Denied")}