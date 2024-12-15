import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { marked } from 'marked';

marked.setOptions({
  breaks: true, // 改行を <br> に変換
  gfm: true, // GitHub Flavored Markdown を有効化
});

const MarkdownField = () => {
  const [md, setMd] = useState('');

  const mdToHtml = (md: string) => {
    const html = marked(md);
    return html;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMd(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, height: '100vh', width: '100%' }}>
      {/* Markdown 入力エリア */}
      <Box sx={{ flex: 1 }}>
        <TextField
          value={md}
          onChange={handleChange}
          multiline
          rows={20}
          placeholder="Write your markdown here..."
          variant="outlined"
          fullWidth
          sx={{ height: '100%', backgroundColor: '#1e1e1e', color: '#ffffff' }}
          InputProps={{
            style: {
              fontFamily: 'monospace',
              color: '#ffffff',
            },
          }}
        />
      </Box>

      {/* プレビューエリア */}
      <Box
        sx={{
          flex: 1,
          border: '1px solid #ddd',
          borderRadius: 1,
          p: 2,
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          color: 'black',
          textAlign: 'start',
        }}
        dangerouslySetInnerHTML={{ __html: mdToHtml(md) }}
      />
    </Box>
  );
};

export default MarkdownField;
