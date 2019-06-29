# IPFS and Guix

Exploration into existing or potential issues with integrating IPFS with Guix and more generally what can be done to resolve them in a way that might be beneficial to other package managers.

## Goal

Finish and merge the IPFS patch for Guix: https://issues.guix.gnu.org/issue/33899.

Summary of the open questions:

  - Get the file attributes right for the package manager (we don't want too many or too few).
    How to forward the executable bit?

  - How do we store package as directories?  This overlaps with the question of attributes.

  - Shall we either:
    - store package archives and extend IPFS so that it chunks the
    archive properly at file boundaries for deduplication;
    - store directories, which is more work and possible more performance costly?

  - When do we unpin?  For instance, ‘guix publish’ stores things as long as they are requested,
    and then for the duration specified with ‘--ttl’.

## Requirements to consider

- File attributes
- Large files
- Large number of files
- Many nodes

## Where to learn about it

- https://issues.guix.gnu.org/issue/33899
