# <center>Public Documentation for US ATLAS Shared Tier 3/Analysis Facilities</center>

<center><img src="USATLAS.png" width="200"/></center>

### <span style="color:orange">Privacy Disclaimer</span>
<span style="color:orange">US ATLAS documents and code samples hosted at this GitHub 
  organization are visible to the
general public. Please do not put personal identiable information, usernames and passwords
and methods to access restricted US ATLAS and ATLAS (international) resources in this area.
</span>

## Introduction to the US ATLAS Shared Tier 3s
US ATLAS hosted two shared Tier 3 at BNL and SLAC, also known as Analysis Facilities. These
two faclities are available to all US ATLAS physicists and computer scientists. They are
orgniazed and managed to support US ATLAS users' need on computing resources, including login,
run interactive and batch jobs, access ATLAS data, store private data, etc.

These two facilities also support tools specific for users analysis, including ATLAS/CERN
software in [CVMFS](cvmfs), Grid middleware, Rucio clients, Machine Learning packages, MPI, Jupyter
Lab with PyROOT, Xcache with auto data discovery, GPUs, etc.

The two facilites are backed by staffs to support software environment, unix systems and
storages.

Instruction to login to `www.doe.com`:

    Instruction 1
        ssh www.doe.com
    Instruction 2
        source cvmfs-setup.sh
