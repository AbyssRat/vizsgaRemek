namespace BookStore.Gui
{
    partial class Form1
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
            this.Dashboard_button = new System.Windows.Forms.Button();
            this.Books_button = new System.Windows.Forms.Button();
            this.User_button = new System.Windows.Forms.Button();
            this.Rental_button = new System.Windows.Forms.Button();
            this.Logout_button = new System.Windows.Forms.Button();
            this.panelMenu = new System.Windows.Forms.Panel();
            this.panelMain = new System.Windows.Forms.Panel();
            this.panelMenu.SuspendLayout();
            this.SuspendLayout();
            // 
            // Dashboard_button
            // 
            this.Dashboard_button.Dock = System.Windows.Forms.DockStyle.Top;
            this.Dashboard_button.FlatAppearance.BorderSize = 0;
            this.Dashboard_button.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Dashboard_button.ForeColor = System.Drawing.Color.White;
            this.Dashboard_button.Location = new System.Drawing.Point(0, 200);
            this.Dashboard_button.Name = "Dashboard_button";
            this.Dashboard_button.Padding = new System.Windows.Forms.Padding(10, 0, 0, 0);
            this.Dashboard_button.Size = new System.Drawing.Size(200, 49);
            this.Dashboard_button.TabIndex = 0;
            this.Dashboard_button.Text = "Dashboard";
            this.Dashboard_button.UseVisualStyleBackColor = true;
            // 
            // Books_button
            // 
            this.Books_button.Dock = System.Windows.Forms.DockStyle.Top;
            this.Books_button.FlatAppearance.BorderSize = 0;
            this.Books_button.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Books_button.ForeColor = System.Drawing.Color.White;
            this.Books_button.Location = new System.Drawing.Point(0, 100);
            this.Books_button.Name = "Books_button";
            this.Books_button.Padding = new System.Windows.Forms.Padding(10, 0, 0, 0);
            this.Books_button.Size = new System.Drawing.Size(200, 50);
            this.Books_button.TabIndex = 1;
            this.Books_button.Text = "Könyvek";
            this.Books_button.UseVisualStyleBackColor = true;
            this.Books_button.Click += new System.EventHandler(this.Books_button_Click);
            // 
            // User_button
            // 
            this.User_button.Dock = System.Windows.Forms.DockStyle.Top;
            this.User_button.FlatAppearance.BorderSize = 0;
            this.User_button.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.User_button.ForeColor = System.Drawing.Color.White;
            this.User_button.Location = new System.Drawing.Point(0, 0);
            this.User_button.Name = "User_button";
            this.User_button.Padding = new System.Windows.Forms.Padding(10, 0, 0, 0);
            this.User_button.Size = new System.Drawing.Size(200, 50);
            this.User_button.TabIndex = 2;
            this.User_button.Text = "Felhasználók";
            this.User_button.UseVisualStyleBackColor = true;
            this.User_button.Click += new System.EventHandler(this.User_button_Click);
            // 
            // Rental_button
            // 
            this.Rental_button.Dock = System.Windows.Forms.DockStyle.Top;
            this.Rental_button.FlatAppearance.BorderSize = 0;
            this.Rental_button.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Rental_button.ForeColor = System.Drawing.Color.White;
            this.Rental_button.Location = new System.Drawing.Point(0, 50);
            this.Rental_button.Name = "Rental_button";
            this.Rental_button.Padding = new System.Windows.Forms.Padding(10, 0, 0, 0);
            this.Rental_button.Size = new System.Drawing.Size(200, 50);
            this.Rental_button.TabIndex = 3;
            this.Rental_button.Text = "Kölcsönzések";
            this.Rental_button.UseVisualStyleBackColor = true;
            // 
            // Logout_button
            // 
            this.Logout_button.Dock = System.Windows.Forms.DockStyle.Top;
            this.Logout_button.FlatAppearance.BorderSize = 0;
            this.Logout_button.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Logout_button.ForeColor = System.Drawing.Color.White;
            this.Logout_button.Location = new System.Drawing.Point(0, 150);
            this.Logout_button.Name = "Logout_button";
            this.Logout_button.Padding = new System.Windows.Forms.Padding(10, 0, 0, 0);
            this.Logout_button.Size = new System.Drawing.Size(200, 50);
            this.Logout_button.TabIndex = 4;
            this.Logout_button.Text = "Kijelentkezés";
            this.Logout_button.UseVisualStyleBackColor = true;
            this.Logout_button.Click += new System.EventHandler(this.Logout_button_Click);
            // 
            // panelMenu
            // 
            this.panelMenu.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(44)))), ((int)(((byte)(62)))), ((int)(((byte)(80)))));
            this.panelMenu.Controls.Add(this.Dashboard_button);
            this.panelMenu.Controls.Add(this.Logout_button);
            this.panelMenu.Controls.Add(this.Books_button);
            this.panelMenu.Controls.Add(this.Rental_button);
            this.panelMenu.Controls.Add(this.User_button);
            this.panelMenu.Dock = System.Windows.Forms.DockStyle.Left;
            this.panelMenu.Location = new System.Drawing.Point(0, 0);
            this.panelMenu.Name = "panelMenu";
            this.panelMenu.Size = new System.Drawing.Size(200, 450);
            this.panelMenu.TabIndex = 5;
            // 
            // panelMain
            // 
            this.panelMain.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panelMain.Location = new System.Drawing.Point(200, 0);
            this.panelMain.Name = "panelMain";
            this.panelMain.Size = new System.Drawing.Size(600, 450);
            this.panelMain.TabIndex = 6;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.panelMain);
            this.Controls.Add(this.panelMenu);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panelMenu.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button Dashboard_button;
        private System.Windows.Forms.Button Books_button;
        private System.Windows.Forms.Button User_button;
        private System.Windows.Forms.Button Rental_button;
        private System.Windows.Forms.Button Logout_button;
        private System.Windows.Forms.Panel panelMenu;
        private System.Windows.Forms.Panel panelMain;
    }
}

