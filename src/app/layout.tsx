/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-10-03 16:58:06
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-03 20:03:13
 */
import "@/styles/global.scss";
import styles from  "./layout.module.scss"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles['layout']}>{children}</div>
      </body>
    </html>
  );
}
