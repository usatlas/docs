# [The SLAC JupyterLab](https://sdf.slac.stanford.edu)

## Talbe of contents
+ [A note for AFS users](#a-note-for-afs-users)
+ [How to launch JupyterLab at SLAC](#how-to-launch-jupyterlab-at-slac)
+ [Run your own Jupyter environment](#run-your-own-jupyter-environment)
+ [An alternative way to use the ATLAS Jupyter environment at SLAC](#an-alternative-way-to-use-the-atlas-jupyter-environment-at-slac)
+ [Kernels and extensions in the ATLAS Jupyter environment](#kernels-and-extensions-in-the-atlas-jupyter-environment)

Click the above title/link to access the SLAC JupyterLab. Before you login, check whether your home directory is in /gpfs. If so, continue the login process. 

New users (since later 2017) likely will have their home directories on GPFS, and were never given an AFS space. To check, login to centos7.slac.stanford.edu and do ` df . `. 

### A note for AFS users

If your home directory in /afs, please e-mail unix-admin@slac.stanford.edu with a message "my home dir is in AFS but I want to use JupyterLab at SDF", and wait for their green light.

(You don't need to care about this: The unix-admin will create a directory `/gpfs/slac/staas/fs1/g/jupyter/$(id -gn)/$(id -un)` and make you the owner.)

After you get a green light from unix-admin, login the centos7.slac.stanford.edu and run ```sh /gpfs/slac/staas/fs1/g/jupyter/ood/convert.sh```. You only need to do this once. Note that this script will rename a few of your directories by adding a ".orig" to them:
```
$HOME/ondemand  
$HOME/.local/share/jupyter
$HOME/.jupyter
$HOME/.ipython
```

You should also ask for a GPFS space at `/gpfs/slac/atlas/fs1/u/$(id -un)`. You can include this request along with the e-mail to unix-admin.

You may ask why? This is because Jupyter via the above SLAC JupyterLab link won't be able to write to AFS. So you can not create or modify a file when your JupyterLab's left panel is in an AFS directory. Hence you need a GPFS space.

## How to launch JupyterLab at SLAC

Once you login, click "Interactive Apps" from the top menu bar. Then choose "Jupyter". You will need to make a few choices:

1. In "Jupyter Instance" box, choose "atlas-jupyter/20200502". You can choose Jupyter Instances for other experiments but there is no guarantee that those instances will work for you.
2. Check the "Use JupyterLab instead of Jupyter Notebook?" box.
3. Choose hours, # CPUs, memory, # GPUs and GPU type, then click "launch". Note that your Jupyter work runs as a SLURM job. So choose only what you need to ensure speedy launching of your job.

## Run your own Jupyter environment

The ATLAS instance we built may not satisfy your need. If you have your own Jupyter environment that are accessible from SLAC (on SLAC disk or in CVMFS), you may be able to run it on SLAC's Jupyter infrastracture. To do so:

1. Following the same steps above to launch Jupyter at SLAC.
2. Instead of choosing the "atlas-jupyter..." instance, you choose "Custom Singularity Image" or "Custom Conda Environment".
3. The "Commands to initate Jupyter" box will be pre-filled with commands to prepare your instance. You can edit/paste whatever Shell script to prepare launching your Jupyter environment. An example of your Shell script is:

`export SINGULARITY_IMAGE_PATH=/afs/slac/package/singularity/images/slac-ml/20200211.0/slac-jupyterlab@20200211.0.sif`

`function jupyter() { singularity exec --nv -B /gpfs,/scratch,/nfs,/afs ${SINGULARITY_IMAGE_PATH} jupyter $@; }`

(you can also setup Conda here)
4. A backend launching script will "source" your Shell script. It expects that after "souring", there is a command called "jupyter" for it to use. It will then run one of the following commands, depend on whether you choose Jupyter Notebook or Jupyter Lab, to launch your Jupyter environment:

`jupyter notebook --config="${CONFIG_FILE}"`

`jupyter lab --config="${CONFIG_FILE}"`

## An alternative way to use the ATLAS Jupyter environment at SLAC

The above atlas-jupyter/20200502 instance resides in a Singularity image. You can use it at anywhere as long as the host can access the following CVMFS file. For example, on cent7a.slac.stanford.edu, you can run this command by hand:

`singularity run -B /cvmfs,/gpfs,/scratch,/nfs,/afs /cvmfs/atlas.sdcc.bnl.gov/jupyter/t3s/slac/singularity/atlas-slac.sif`

(add `--nv` after `"run"` if the host supports Nvidia CUDA GPUs). When you see it prints out a line like the following,

`http://localhost:8888/?token=ec4d404fe69d2ff760d611c0509a9e8ac770c7f46ac32860`

then use `ssh -L 8888:localhost:8888 cent7a.slac.stanford.edu` to create a SSH tunnel. After this, paste the above URL in your browser to access your jupyter instance.

Note `centos7.slac.stanford.edu` is a DNS alias of several machines `cent7[a-d].slac.stanford.edu`. Do not use the DNS alias `centos7` in the above case, use `cent7[a-d]` instead.

## Kernels and extensions in the ATLAS Jupyter environment

The Jupyter environment provides several kernels and extensions. This includes:
1. python2 with pyroot and uproot. By default, <b>AnalysisBase,21.2.111</b> is loaded before the pyroot2 kernel is launched. To overwrite this, create a file [$HOME/notebooks/.user_setups](SLACuser_setups.txt) in your home directory (even if your home directory is in AFS)
2. ROOT C++. The ATLAS environment is set before the kernel is launched. The overwrite method is the same as the above. 
3. python3 with pyroot and uproot. This kernel also includes ML packages such as Tensorflow and Keras for Nvidia GPUs. To use the GPU, choose "# of GPUs" and "GPU type" before launching Jupyter. 
4. Terminal console for simple interactive use, e.g. file managements. It also include python2.7/python3, gcc/g++, gdb, make, cmake3, xrootd-clients, openssh-client, curl, vi, etc.
5. Markdown document editor and previewer. You can edit and preview in two tabs simultaneously. 

