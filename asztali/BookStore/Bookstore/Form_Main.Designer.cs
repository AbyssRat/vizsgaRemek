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
            this.pictureBox_user = new System.Windows.Forms.PictureBox();
            this.pictureBox_book = new System.Windows.Forms.PictureBox();
            this.pictureBox_rent = new System.Windows.Forms.PictureBox();
            this.pictureBox_exit = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_user)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_book)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_rent)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_exit)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox_user
            // 
            this.pictureBox_user.Image = global::Bookstore.Properties.Resources.ikon_user;
            this.pictureBox_user.Location = new System.Drawing.Point(92, 97);
            this.pictureBox_user.Name = "pictureBox_user";
            this.pictureBox_user.Size = new System.Drawing.Size(100, 50);
            this.pictureBox_user.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_user.TabIndex = 0;
            this.pictureBox_user.TabStop = false;
            this.pictureBox_user.Click += new System.EventHandler(this.pictureBox_user_Click);
            // 
            // pictureBox_book
            // 
            this.pictureBox_book.Image = global::Bookstore.Properties.Resources.ikon_book;
            this.pictureBox_book.Location = new System.Drawing.Point(92, 176);
            this.pictureBox_book.Name = "pictureBox_book";
            this.pictureBox_book.Size = new System.Drawing.Size(100, 50);
            this.pictureBox_book.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_book.TabIndex = 0;
            this.pictureBox_book.TabStop = false;
            this.pictureBox_book.Click += new System.EventHandler(this.pictureBox_book_Click);
            // 
            // pictureBox_rent
            // 
            this.pictureBox_rent.Image = global::Bookstore.Properties.Resources.ikon_rent;
            this.pictureBox_rent.Location = new System.Drawing.Point(92, 246);
            this.pictureBox_rent.Name = "pictureBox_rent";
            this.pictureBox_rent.Size = new System.Drawing.Size(100, 50);
            this.pictureBox_rent.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_rent.TabIndex = 0;
            this.pictureBox_rent.TabStop = false;
            this.pictureBox_rent.Click += new System.EventHandler(this.pictureBox_rent_Click);
            // 
            // pictureBox_exit
            // 
            this.pictureBox_exit.Image = global::Bookstore.Properties.Resources.ikon_exit;
            this.pictureBox_exit.Location = new System.Drawing.Point(92, 328);
            this.pictureBox_exit.Name = "pictureBox_exit";
            this.pictureBox_exit.Size = new System.Drawing.Size(100, 50);
            this.pictureBox_exit.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_exit.TabIndex = 0;
            this.pictureBox_exit.TabStop = false;
            this.pictureBox_exit.Click += new System.EventHandler(this.pictureBox_exit_Click);
            // 
            // Form_Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.pictureBox_exit);
            this.Controls.Add(this.pictureBox_rent);
            this.Controls.Add(this.pictureBox_book);
            this.Controls.Add(this.pictureBox_user);
            this.Name = "Form_Main";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_user)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_book)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_rent)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_exit)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox_user;
        private System.Windows.Forms.PictureBox pictureBox_book;
        private System.Windows.Forms.PictureBox pictureBox_rent;
        private System.Windows.Forms.PictureBox pictureBox_exit;
    }
}

