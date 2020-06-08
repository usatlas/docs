# [The SLAC JupyterLab](https://sdf.slac.stanford.edu)

Click the above title/link to access the SLAC JupyterLab. Before you login, check whether your home directory is in /gpfs. If so, continue the login process. If your home directory in /afs, please e-mail unix-admin@slac.stanford.edu with a message "my home dir is in AFS but I want to use JupyterLab at SDF", and wait for their green light.

## How to launch JupyterLab at SLAC

Once you login, click "Interactive Apps" from the top menu bar. Then choose "Jupyter". You will need to make a few choices:

1. In "Jupyter Instance" box, choose "atlas-jupyter/test". You can choose Jupyter Instances for other experiments but there is no guarantee that those instances will work for you.
2. Check the "Use JupyterLab instead of Jupyter Notebook?" box.
3. Choose hours, # CPUs, memory, # GPUs and GPU type, then click "launch". Note that your Jupyter work runs as a SLURM job. So choose only what you need to ensure speedy launching of your job.

### For AFS users

You will be given a GPFS space since Jupyter won't be able to write to AFS. This means that you can't not create or modify a Jupyter notebook when your JupyterLab's left panel is in a AFS directory. New users since later 2017 are likely GPFS users and were never given an AFS space. To check, login to centos7.slac.stanford.edu and do `pwd`.

## An alternative way to use SLAC Jupyter

The above atlas-jupyter/test instance resides in a Singularity image. You can use it at anywhere as long as the host can access the following CVMFS file. For example, on cent7a.slac.stanford.edu, you can run this command by hand:

`singulairty run -B /cvmfs,/gpfs,/scratch,/nfs,/afs /cvmfs/atlas.sdcc.bnl.gov/jupyter/t3s/slac/singularity/atlas-slac.sif`

(add --nv after `"run"` if the host supports Nvidia CUDA GPUs). When you see it prints out a line like the following,

`http://localhost:8888/?token=ec4d404fe69d2ff760d611c0509a9e8ac770c7f46ac32860`

then use `ssh -L 8888:localhost:8888 cent7a.slac.stanford.edu` to create a SSH tunnel. After this, paste the above URL in your browser to access your jupyter instance.

Note `centos7.slac.stanford.edu` is a DNS alias of several machines `cent7[a-d].slac.stanford.edu`. Do not use the DNS alias `centos7` in the above case, use `cent7[a-d]` instead.

## Kernels and extensions

The Jupyter environment provides several kernels and extensions. This includes:
1. python2 with pyroot and uproot. By default, <b>AnalysisBase,21.2.111</b> is loaded before the pyroot2 kernel is launched. To overwrite this, create a file [$HOME/notebooks/.user_setups](SLACuser_setups.sh) in your home directory (even if your home directory is in AFS)
2. ROOT C++. The ATLAS environment is set before the kernel is launched. The overwrite method is the same as the above. 
3. python3 with pyroot and uproot. This kernel also includes ML packages such as Tensoflow and Keras for Nvidia GPUs. To use the GPU, choose "# of GPUs" and "GPU type" before launching Jupyter.
4. Terminal console for simple interactive use, e.g. file managements. It also include python2.7/python3, gcc/g++, gdb, make, cmake3, xrootd-clients, openssh-client, curl, vi, etc.
5. Markdown document editor and previewer. You can edit and preview in two tabs simultaneously. 

