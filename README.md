# BAFS Group — Talent Selection 2027 (Clean Light Glass Portal)

ระบบเว็บแอปพลิเคชันระดับผู้บริหาร (Executive Portal) สำหรับการประเมินศักยภาพบุคลากรกลุ่มตำแหน่งเป้าหมาย (DDI Pool 14 ท่าน) ของกลุ่มบริษัท **BAFS Group** (ครอบคลุมทั้ง BAFS และ BPT) ประจำปี **2027**

---

## 🌟 จุดเด่นและข้อกำหนดการออกแบบ (Design & Integrity)

1. **Clean Luminous Glass (ไม่มืด ไม่ดำ ปราศจาก AI Slop):**
   * พื้นหลังโทนสว่าง สะอาดตา ผสมผสานภาพฉากหลังห้องประชุมผู้บริหารและการคัดเลือกบุคลากรเชิงกลยุทธ์ (Talent Selection Backdrop)
   * ใช้กระจกฝ้าสีขาวนวล (Luminous White Frosted Glass) คมชัด อ่านง่าย สบายตาด้วยสีกรมท่าการบิน **BAFS Aviation Blue (`#005691`)**
2. **ปกป้องความเป็นกลางของผู้ประเมิน (Evaluator Bias Protection):**
   * **ผู้ประเมินจะไม่เห็นผลคะแนนรวม, ไม่เห็นเปอร์เซ็นต์, ไม่เห็นป้ายระดับ High/Medium/Low, และไม่เห็น Radar Chart ใดๆ** เพื่อป้องกันอคติหรือการชี้นำคะแนน
   * ผู้ประเมินจะโฟกัสเฉพาะการให้คะแนนพฤติกรรม 1–5 ทั้ง 12 ข้อตามความเป็นจริง และบันทึกข้อเสนอแนะในการพัฒนา
   * สถานะในการ์ดของผู้ประเมินจะแสดงเฉพาะ: `ยังไม่ประเมิน` หรือ `ประเมินเรียบร้อยแล้ว`
3. **ตัดระบบ Quick Fill ออกทั้งหมด:**
   * เพื่อความปลอดภัยและความเป็นทางการ ผู้ประเมินเข้าสู่ระบบด้วย Email และ Password ประจำสายงานตามตารางจริง
4. **ถอดรูปภาพบุคคลออกทั้งหมด 100%:**
   * ใช้ระบบรหัสพนักงาน (Code / No.), ป้ายสังกัดบริษัท (BAFS / BPT), ฝ่ายงาน, และตัวอักษรย่อ Monogram ที่สุภาพและภูมิฐาน
5. **HR Super-Admin Dashboard พร้อมฟังก์ชันลบ/รีเซ็ตข้อมูลทดสอบ:**
   * ผู้ประเมินหรือผู้ดูแลระบบเข้าสู่ระบบด้วยบัญชี Admin เพื่อดูผลวิเคราะห์เชิงลึก: กราฟ Radar Chart 4 มิติ, สถิติคะแนน, และการจัดอันดับ Talent
   * **มีปุ่ม "ลบผล (Reset)" ประจำแถวพนักงานแต่ละคน** สำหรับล้างคะแนนเพื่อให้ผู้ประเมินทดลองประเมินใหม่ได้ในระหว่างขั้นตอนการทดสอบ (UAT)
   * **มีปุ่ม "ล้างข้อมูลทดสอบทั้งหมด"** และปุ่ม **"ส่งออก Excel / CSV"**
6. **เปิดใช้งานได้ทันที (Standalone Portable & GitHub Pages Ready):**
   * ไฟล์ `index.html` ในโฟลเดอร์หลักเป็น Standalone Application สามารถ**ดับเบิลคลิกเปิดบน Chrome / Safari / Edge ได้ทันที** โดยไม่ต้องรันเซิร์ฟเวอร์
   * สามารถ Push ขึ้น GitHub Repository และเปิดใช้งานผ่าน **GitHub Pages** (โฟลเดอร์ root) ได้ทันที 100%

---

## 🚀 วิธีการเปิดใช้งาน (2 วิธี)

### วิธีที่ 1: ดับเบิลคลิกเปิดไฟล์ทันที (Portable Offline / GitHub Pages)
* เพียงดับเบิลคลิกที่ไฟล์ **`index.html`** ในโฟลเดอร์นี้ เบราว์เซอร์จะเปิดระบบขึ้นมาใช้งานได้ทันที
* หรือนำขึ้น GitHub แล้วเปิด Settings > Pages > Source: `main / root` ก็จะออนไลน์ทันที

### วิธีที่ 2: รันผ่าน Local Dev Server
```bash
npm run dev
```
หรือดับเบิลคลิกที่ไฟล์ `./start.sh`

---

## 🔑 บัญชีผู้ใช้งานสำหรับทดสอบ (Test Credentials)

| ผู้ประเมิน (Evaluator) | อีเมล (Email) | รหัสผ่าน (Password) | สายงาน / บริษัท | พนักงานที่รับผิดชอบ |
| :--- | :--- | :--- | :--- | :--- |
| **Kanit Seetong** | `kanit@bafs.co.th` | `bafsazKS2026` / `bafsazKS2027` | AZ (BAFS) | 4 ท่าน (Chitakon, Pakasit, Veerawat, Ladapha) |
| **Theerata Thornjaroensri** | `theerata@bafs.co.th` | `bafsfaTT2026` / `bafsfaTT2027` | FA (BAFS) | 2 ท่าน (Khwannapa, Thanawan) |
| **Rachanok Sa-nguansub** | `rachanok@bafs.co.th` | `bafshbRS2026` / `bafshbRS2027` | HZ (BAFS) | 1 ท่าน (Sangduan) |
| **Yuphadee Tongaroonsri** | `yuphadee@bafs.co.th` | `bafsrzYT2026` / `bafsrzYT2027` | RZ (BAFS) | 1 ท่าน (Atsadayuth) |
| **Narongsak P.** | `narongsak.p@bpt.co.th` | `bptmqNP2026` / `bptmqNP2027` | MD (BPT) | 2 ท่าน (Panyamol, Sununtha) |
| **Worawee S.** | `worawee.s@bpt.co.th` | `bpthzWS2026` / `bpthzWS2027` | HZ (BPT) | 1 ท่าน (Kadsarin) |
| **Winyu Y.** | `winyu.y@bpt.co.th` | `bptpzWY2026` / `bptpzWY2027` | PZ (BPT) | 1 ท่าน (Pornthep) |
| **Suwatchai P.** | `suwatchai.p@bpt.co.th` | `bptdzSP2026` / `bptdzSP2027` | DZ (BPT) | 2 ท่าน (Warid, Mongkol) |
| **👑 HR Super-Admin** | `admin@bafs.co.th` | `admin2026` / `admin2027` | Talent Management | **ครบทั้ง 14 ท่าน (มีสิทธิ์ดู Radar Chart และลบข้อมูล)** |
