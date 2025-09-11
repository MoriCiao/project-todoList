# React TodoList

一個使用 React 打造的任務清單管理工具，支援任務新增、刪除、完成標記、排序，以及主題與字體大小切換，並有畫面動畫與 localStorage 儲存功能。

---

## 功能列表

- ✅ 新增任務（標題 + 時間）
- ✅ 任務完成 / 刪除
- ✅ 搜尋、排序（依時間 / 狀態）
- ✅ 切換黑暗 / 亮色主題
- ✅ 可調字體大小（小、中、大）
- ✅ 動畫反饋：打勾、任務出現／消失
- ✅ localStorage 儲存/載入任務

---

## 技術架構

- **React**：`useReducer` 管理任務狀態，`useContext` 管理設定（主題/字體）
- **TailwindCSS** + **RWD**：彈性佈局與響應式設計
- **Framer Motion**：補強互動動畫
- **localStorage**：更新任務時儲存，初始載入時載入儲存資料

---

## 截圖說明

| 功能                 | 截圖                                                                             |
| -------------------- | -------------------------------------------------------------------------------- |
| 主頁面               | ![首頁畫面](/readme/Screenshot-1.png)                                            |
| 主題切換 + 字體設定  | ![主題切換](/readme/Screenshot-2-1.png)<br>![字體設定](/readme/Screenshot-2.png) |
| 新增任務介面         | ![新增任務](/readme/Screenshot-3.png)                                            |
| 任務介面（全部任務） | ![全部任務](/readme/Screenshot-4.png)                                            |
|                      |

---

## 開發筆記

- 為什麼用 `useReducer`？  
  因為任務有多種操作（新增、刪除、打勾），比較適合集中管理。
- localStorage 實作方式？  
  初始用 `useEffect` 載入，上線或更新狀態時儲存。
- 動畫如何優化？  
  Framer Motion 設定任務進出場動畫，提升使用者反饋感。

---

## 收穫與挑戰

- 學會 React 狀態管理流程與 Context 使用
- 練習動畫設計，提升 UI 互動性
- 練習儲存機制與資料持久化設計
- 執行 Git 操作與部署流程，增強專案完整性

---

## 作者

**MoriCiao**

- GitHub: [MoriCiao](https://github.com/MoriCiao)

📫 聯絡我：rosen.moriciao@gmail.com
