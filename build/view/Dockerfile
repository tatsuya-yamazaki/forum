FROM node:15.6
RUN apt update -y \
&& apt install -y vim \
&& git clone https://github.com/leafgarland/typescript-vim.git ~/.vim/pack/typescript/start/typescript-vim \
&& git clone https://github.com/peitalin/vim-jsx-typescript.git ~/.vim/pack/typescript/start/vim-jsx-typescript
CMD ["bash"]
