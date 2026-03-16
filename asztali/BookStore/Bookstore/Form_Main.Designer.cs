namespace Bookstore
{
    partial class Form_Main
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_Main));
            this.pictureBox_user = new System.Windows.Forms.PictureBox();
            this.pictureBox_book = new System.Windows.Forms.PictureBox();
            this.pictureBox_rent = new System.Windows.Forms.PictureBox();
            this.pictureBox_exit = new System.Windows.Forms.PictureBox();
            this.fejlecpanel = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_user)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_book)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_rent)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_exit)).BeginInit();
            this.fejlecpanel.SuspendLayout();
            this.panel1.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // pictureBox_user
            // 
            this.pictureBox_user.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.pictureBox_user.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox_user.Image")));
            this.pictureBox_user.Location = new System.Drawing.Point(18, 25);
            this.pictureBox_user.Margin = new System.Windows.Forms.Padding(4);
            this.pictureBox_user.Name = "pictureBox_user";
            this.pictureBox_user.Size = new System.Drawing.Size(164, 110);
            this.pictureBox_user.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_user.TabIndex = 0;
            this.pictureBox_user.TabStop = false;
            this.pictureBox_user.Click += new System.EventHandler(this.pictureBox_user_Click);
            // 
            // pictureBox_book
            // 
            this.pictureBox_book.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.pictureBox_book.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox_book.Image")));
            this.pictureBox_book.Location = new System.Drawing.Point(218, 25);
            this.pictureBox_book.Margin = new System.Windows.Forms.Padding(4);
            this.pictureBox_book.Name = "pictureBox_book";
            this.pictureBox_book.Size = new System.Drawing.Size(164, 110);
            this.pictureBox_book.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_book.TabIndex = 0;
            this.pictureBox_book.TabStop = false;
            this.pictureBox_book.Click += new System.EventHandler(this.pictureBox_book_Click);
            // 
            // pictureBox_rent
            // 
            this.pictureBox_rent.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.pictureBox_rent.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox_rent.Image")));
            this.pictureBox_rent.Location = new System.Drawing.Point(18, 185);
            this.pictureBox_rent.Margin = new System.Windows.Forms.Padding(4);
            this.pictureBox_rent.Name = "pictureBox_rent";
            this.pictureBox_rent.Size = new System.Drawing.Size(164, 110);
            this.pictureBox_rent.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_rent.TabIndex = 0;
            this.pictureBox_rent.TabStop = false;
            this.pictureBox_rent.Click += new System.EventHandler(this.pictureBox_rent_Click);
            // 
            // pictureBox_exit
            // 
            this.pictureBox_exit.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.pictureBox_exit.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox_exit.Image")));
            this.pictureBox_exit.Location = new System.Drawing.Point(218, 185);
            this.pictureBox_exit.Margin = new System.Windows.Forms.Padding(4);
            this.pictureBox_exit.Name = "pictureBox_exit";
            this.pictureBox_exit.Size = new System.Drawing.Size(164, 110);
            this.pictureBox_exit.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_exit.TabIndex = 0;
            this.pictureBox_exit.TabStop = false;
            this.pictureBox_exit.Click += new System.EventHandler(this.pictureBox_exit_Click);
            // 
            // fejlecpanel
            // 
            this.fejlecpanel.BackColor = System.Drawing.Color.DarkGray;
            this.fejlecpanel.Controls.Add(this.label1);
            this.fejlecpanel.Dock = System.Windows.Forms.DockStyle.Top;
            this.fejlecpanel.Location = new System.Drawing.Point(0, 0);
            this.fejlecpanel.Name = "fejlecpanel";
            this.fejlecpanel.Size = new System.Drawing.Size(933, 80);
            this.fejlecpanel.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 21.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.label1.ForeColor = System.Drawing.SystemColors.Window;
            this.label1.Location = new System.Drawing.Point(405, 19);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(187, 40);
            this.label1.TabIndex = 2;
            this.label1.Text = "BOOKSTORE";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.tableLayoutPanel1);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 80);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(933, 508);
            this.panel1.TabIndex = 2;
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Controls.Add(this.pictureBox_user, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.pictureBox_exit, 1, 1);
            this.tableLayoutPanel1.Controls.Add(this.pictureBox_book, 1, 0);
            this.tableLayoutPanel1.Controls.Add(this.pictureBox_rent, 0, 1);
            this.tableLayoutPanel1.Location = new System.Drawing.Point(289, 76);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(400, 320);
            this.tableLayoutPanel1.TabIndex = 1;
            // 
            // Form_Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.WhiteSmoke;
            this.ClientSize = new System.Drawing.Size(933, 588);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.fejlecpanel);
            this.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MaximizeBox = false;
            this.Name = "Form_Main";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_user)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_book)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_rent)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_exit)).EndInit();
            this.fejlecpanel.ResumeLayout(false);
            this.fejlecpanel.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox_user;
        private System.Windows.Forms.PictureBox pictureBox_book;
        private System.Windows.Forms.PictureBox pictureBox_rent;
        private System.Windows.Forms.PictureBox pictureBox_exit;
        private System.Windows.Forms.Panel fejlecpanel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
    }
}

