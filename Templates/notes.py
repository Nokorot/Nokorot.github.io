dbx = dbox.get_dbx()
lst = dbx.files_list_folder("/notes").entries
lst = [ "%s" % v.name for v in lst]



return render_template("notes.html", lst=lst )
