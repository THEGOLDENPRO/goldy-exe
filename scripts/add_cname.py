"""
Just a script that is ran by GitHub actions to add the CNAME file after website build.
"""

CNAME = "blog.devgoldy.xyz"

open("./_build/CNAME", mode="w").write(CNAME)