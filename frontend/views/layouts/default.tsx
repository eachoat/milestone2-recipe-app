import React from 'react'

interface DefaultProps {
    title?: string;
    children: React.ReactNode;
}

const Default: React.FC<DefaultProps> = ({ title = 'Default', children }) => {
    return (
        <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/index.css" />
            </head>
            <body>
                <div className="wrapper">
                    <header>
                        <h1><a href="/recipe">Recipes</a></h1>
                    </header>
                    <div className="container">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Default