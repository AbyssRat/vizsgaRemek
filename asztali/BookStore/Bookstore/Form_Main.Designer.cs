namespace BookStore
{
    partial class Form_Main
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_Main));
            tableLayoutPanel1 = new TableLayoutPanel();
            button_Szerzok = new Button();
            button_Konyvek = new Button();
            button_Users = new Button();
            button_Rent = new Button();
            panel_fejlec = new Panel();
            label_cim = new Label();
            panel1 = new Panel();
            button_exit = new Button();
            tableLayoutPanel1.SuspendLayout();
            panel_fejlec.SuspendLayout();
            panel1.SuspendLayout();
            SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            tableLayoutPanel1.AutoSize = true;
            tableLayoutPanel1.ColumnCount = 2;
            tableLayoutPanel1.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50F));
            tableLayoutPanel1.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50F));
            tableLayoutPanel1.Controls.Add(button_Szerzok, 1, 1);
            tableLayoutPanel1.Controls.Add(button_Konyvek, 0, 1);
            tableLayoutPanel1.Controls.Add(button_Users, 1, 0);
            tableLayoutPanel1.Controls.Add(button_Rent, 0, 0);
            tableLayoutPanel1.Location = new Point(183, 101);
            tableLayoutPanel1.Name = "tableLayoutPanel1";
            tableLayoutPanel1.RowCount = 2;
            tableLayoutPanel1.RowStyles.Add(new RowStyle(SizeType.Percent, 50F));
            tableLayoutPanel1.RowStyles.Add(new RowStyle(SizeType.Percent, 50F));
            tableLayoutPanel1.Size = new Size(422, 254);
            tableLayoutPanel1.TabIndex = 0;
            // 
            // button_Szerzok
            // 
            button_Szerzok.BackgroundImage = Properties.Resources.ikon_authors;
            button_Szerzok.BackgroundImageLayout = ImageLayout.Stretch;
            button_Szerzok.Dock = DockStyle.Fill;
            button_Szerzok.ImageAlign = ContentAlignment.TopCenter;
            button_Szerzok.Location = new Point(214, 130);
            button_Szerzok.Name = "button_Szerzok";
            button_Szerzok.Size = new Size(205, 121);
            button_Szerzok.TabIndex = 3;
            button_Szerzok.Text = "Írók";
            button_Szerzok.TextAlign = ContentAlignment.BottomCenter;
            button_Szerzok.TextImageRelation = TextImageRelation.TextBeforeImage;
            button_Szerzok.UseVisualStyleBackColor = true;
            button_Szerzok.Click += button_Szerzok_Click;
            // 
            // button_Konyvek
            // 
            button_Konyvek.BackgroundImage = Properties.Resources.ikon_book;
            button_Konyvek.BackgroundImageLayout = ImageLayout.Stretch;
            button_Konyvek.Dock = DockStyle.Fill;
            button_Konyvek.ImageAlign = ContentAlignment.TopCenter;
            button_Konyvek.Location = new Point(3, 130);
            button_Konyvek.Name = "button_Konyvek";
            button_Konyvek.Size = new Size(205, 121);
            button_Konyvek.TabIndex = 2;
            button_Konyvek.Text = "Könyvek";
            button_Konyvek.TextAlign = ContentAlignment.BottomCenter;
            button_Konyvek.TextImageRelation = TextImageRelation.TextBeforeImage;
            button_Konyvek.UseVisualStyleBackColor = true;
            button_Konyvek.Click += button_Konyvek_Click;
            // 
            // button_Users
            // 
            button_Users.BackgroundImage = Properties.Resources.ikon_user;
            button_Users.BackgroundImageLayout = ImageLayout.Stretch;
            button_Users.Dock = DockStyle.Fill;
            button_Users.ImageAlign = ContentAlignment.TopCenter;
            button_Users.Location = new Point(214, 3);
            button_Users.Name = "button_Users";
            button_Users.Size = new Size(205, 121);
            button_Users.TabIndex = 1;
            button_Users.Text = "Felhasználók";
            button_Users.TextAlign = ContentAlignment.BottomCenter;
            button_Users.TextImageRelation = TextImageRelation.TextBeforeImage;
            button_Users.UseVisualStyleBackColor = true;
            button_Users.Click += button_Users_Click;
            // 
            // button_Rent
            // 
            button_Rent.BackgroundImage = Properties.Resources.ikon_rent;
            button_Rent.BackgroundImageLayout = ImageLayout.Stretch;
            button_Rent.Dock = DockStyle.Fill;
            button_Rent.ImageAlign = ContentAlignment.TopCenter;
            button_Rent.Location = new Point(3, 3);
            button_Rent.Name = "button_Rent";
            button_Rent.Size = new Size(205, 121);
            button_Rent.TabIndex = 0;
            button_Rent.Text = "Kölcsönzés";
            button_Rent.TextAlign = ContentAlignment.BottomCenter;
            button_Rent.TextImageRelation = TextImageRelation.TextBeforeImage;
            button_Rent.UseVisualStyleBackColor = true;
            button_Rent.Click += button_Rent_Click;
            // 
            // panel_fejlec
            // 
            panel_fejlec.BackColor = SystemColors.ControlDarkDark;
            panel_fejlec.Controls.Add(label_cim);
            panel_fejlec.Dock = DockStyle.Top;
            panel_fejlec.Location = new Point(0, 0);
            panel_fejlec.Name = "panel_fejlec";
            panel_fejlec.Size = new Size(800, 83);
            panel_fejlec.TabIndex = 1;
            // 
            // label_cim
            // 
            label_cim.Dock = DockStyle.Fill;
            label_cim.Font = new Font("Segoe UI", 24F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label_cim.ForeColor = SystemColors.ButtonHighlight;
            label_cim.Location = new Point(0, 0);
            label_cim.Name = "label_cim";
            label_cim.Size = new Size(800, 83);
            label_cim.TabIndex = 0;
            label_cim.Text = "Book Store";
            label_cim.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // panel1
            // 
            panel1.Controls.Add(button_exit);
            panel1.Dock = DockStyle.Bottom;
            panel1.Location = new Point(0, 397);
            panel1.Name = "panel1";
            panel1.Size = new Size(800, 75);
            panel1.TabIndex = 2;
            // 
            // button_exit
            // 
            button_exit.BackgroundImage = Properties.Resources.ikon_exit;
            button_exit.BackgroundImageLayout = ImageLayout.Zoom;
            button_exit.Dock = DockStyle.Right;
            button_exit.Location = new Point(702, 0);
            button_exit.Name = "button_exit";
            button_exit.Size = new Size(98, 75);
            button_exit.TabIndex = 0;
            button_exit.UseVisualStyleBackColor = true;
            button_exit.Click += button_exit_Click;
            // 
            // Form_Main
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 472);
            Controls.Add(panel1);
            Controls.Add(panel_fejlec);
            Controls.Add(tableLayoutPanel1);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form_Main";
            Text = "Könyvkölcsönzés";
            tableLayoutPanel1.ResumeLayout(false);
            panel_fejlec.ResumeLayout(false);
            panel1.ResumeLayout(false);
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TableLayoutPanel tableLayoutPanel1;
        private Button button_Rent;
        private Button button_Users;
        private Panel panel_fejlec;
        private Label label_cim;
        private Button button_Konyvek;
        private Panel panel1;
        private Button button_exit;
        private Button button_Szerzok;
    }
}
