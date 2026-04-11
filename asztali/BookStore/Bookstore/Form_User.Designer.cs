namespace BookStore
{
    partial class Form_User
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_User));
            listBox_users = new ListBox();
            groupBox1 = new GroupBox();
            textBox_last_name = new TextBox();
            textBox_first_name = new TextBox();
            textBox_card4 = new TextBox();
            textBox_card3 = new TextBox();
            textBox_card2 = new TextBox();
            textBox_zip_code = new TextBox();
            textBox_card1 = new TextBox();
            textBox_city = new TextBox();
            textBox_street_adress = new TextBox();
            textBox_created = new TextBox();
            textBox_credits = new TextBox();
            label11 = new Label();
            textBox_email = new TextBox();
            label10 = new Label();
            textBox_username = new TextBox();
            label9 = new Label();
            label8 = new Label();
            label7 = new Label();
            label6 = new Label();
            label5 = new Label();
            label4 = new Label();
            label3 = new Label();
            label2 = new Label();
            label1 = new Label();
            groupBox1.SuspendLayout();
            SuspendLayout();
            // 
            // listBox_users
            // 
            listBox_users.Dock = DockStyle.Left;
            listBox_users.FormattingEnabled = true;
            listBox_users.Location = new Point(0, 0);
            listBox_users.Name = "listBox_users";
            listBox_users.Size = new Size(214, 363);
            listBox_users.TabIndex = 0;
            listBox_users.SelectedIndexChanged += listBox_users_SelectedIndexChanged;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(textBox_last_name);
            groupBox1.Controls.Add(textBox_first_name);
            groupBox1.Controls.Add(textBox_card4);
            groupBox1.Controls.Add(textBox_card3);
            groupBox1.Controls.Add(textBox_card2);
            groupBox1.Controls.Add(textBox_zip_code);
            groupBox1.Controls.Add(textBox_card1);
            groupBox1.Controls.Add(textBox_city);
            groupBox1.Controls.Add(textBox_street_adress);
            groupBox1.Controls.Add(textBox_created);
            groupBox1.Controls.Add(textBox_credits);
            groupBox1.Controls.Add(label11);
            groupBox1.Controls.Add(textBox_email);
            groupBox1.Controls.Add(label10);
            groupBox1.Controls.Add(textBox_username);
            groupBox1.Controls.Add(label9);
            groupBox1.Controls.Add(label8);
            groupBox1.Controls.Add(label7);
            groupBox1.Controls.Add(label6);
            groupBox1.Controls.Add(label5);
            groupBox1.Controls.Add(label4);
            groupBox1.Controls.Add(label3);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(label1);
            groupBox1.Dock = DockStyle.Fill;
            groupBox1.Location = new Point(214, 0);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(586, 363);
            groupBox1.TabIndex = 1;
            groupBox1.TabStop = false;
            groupBox1.Text = "Kiválasztott felhasználó";
            // 
            // textBox_last_name
            // 
            textBox_last_name.Location = new Point(371, 172);
            textBox_last_name.Name = "textBox_last_name";
            textBox_last_name.Size = new Size(176, 27);
            textBox_last_name.TabIndex = 1;
            // 
            // textBox_first_name
            // 
            textBox_first_name.Location = new Point(180, 172);
            textBox_first_name.Name = "textBox_first_name";
            textBox_first_name.Size = new Size(176, 27);
            textBox_first_name.TabIndex = 1;
            // 
            // textBox_card4
            // 
            textBox_card4.Location = new Point(471, 273);
            textBox_card4.Name = "textBox_card4";
            textBox_card4.Size = new Size(76, 27);
            textBox_card4.TabIndex = 1;
            textBox_card4.TextAlign = HorizontalAlignment.Center;
            // 
            // textBox_card3
            // 
            textBox_card3.Location = new Point(374, 273);
            textBox_card3.Name = "textBox_card3";
            textBox_card3.Size = new Size(76, 27);
            textBox_card3.TabIndex = 1;
            textBox_card3.TextAlign = HorizontalAlignment.Center;
            // 
            // textBox_card2
            // 
            textBox_card2.Location = new Point(277, 273);
            textBox_card2.Name = "textBox_card2";
            textBox_card2.Size = new Size(76, 27);
            textBox_card2.TabIndex = 1;
            textBox_card2.TextAlign = HorizontalAlignment.Center;
            // 
            // textBox_zip_code
            // 
            textBox_zip_code.Location = new Point(180, 206);
            textBox_zip_code.Name = "textBox_zip_code";
            textBox_zip_code.Size = new Size(76, 27);
            textBox_zip_code.TabIndex = 1;
            // 
            // textBox_card1
            // 
            textBox_card1.Location = new Point(180, 273);
            textBox_card1.Name = "textBox_card1";
            textBox_card1.Size = new Size(76, 27);
            textBox_card1.TabIndex = 1;
            textBox_card1.TextAlign = HorizontalAlignment.Center;
            // 
            // textBox_city
            // 
            textBox_city.Location = new Point(273, 206);
            textBox_city.Name = "textBox_city";
            textBox_city.Size = new Size(274, 27);
            textBox_city.TabIndex = 1;
            // 
            // textBox_street_adress
            // 
            textBox_street_adress.Location = new Point(180, 240);
            textBox_street_adress.Name = "textBox_street_adress";
            textBox_street_adress.Size = new Size(367, 27);
            textBox_street_adress.TabIndex = 1;
            // 
            // textBox_created
            // 
            textBox_created.Location = new Point(180, 138);
            textBox_created.Name = "textBox_created";
            textBox_created.Size = new Size(288, 27);
            textBox_created.TabIndex = 1;
            // 
            // textBox_credits
            // 
            textBox_credits.Location = new Point(180, 104);
            textBox_credits.Name = "textBox_credits";
            textBox_credits.Size = new Size(114, 27);
            textBox_credits.TabIndex = 1;
            textBox_credits.TextAlign = HorizontalAlignment.Right;
            // 
            // label11
            // 
            label11.AutoSize = true;
            label11.Location = new Point(453, 276);
            label11.Name = "label11";
            label11.Size = new Size(15, 20);
            label11.TabIndex = 0;
            label11.Text = "-";
            // 
            // textBox_email
            // 
            textBox_email.Location = new Point(180, 70);
            textBox_email.Name = "textBox_email";
            textBox_email.Size = new Size(367, 27);
            textBox_email.TabIndex = 1;
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(356, 276);
            label10.Name = "label10";
            label10.Size = new Size(15, 20);
            label10.TabIndex = 0;
            label10.Text = "-";
            // 
            // textBox_username
            // 
            textBox_username.Location = new Point(180, 36);
            textBox_username.Name = "textBox_username";
            textBox_username.Size = new Size(367, 27);
            textBox_username.TabIndex = 1;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(259, 276);
            label9.Name = "label9";
            label9.Size = new Size(15, 20);
            label9.TabIndex = 0;
            label9.Text = "-";
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.ForeColor = SystemColors.ControlDarkDark;
            label8.Location = new Point(20, 276);
            label8.Name = "label8";
            label8.Size = new Size(85, 20);
            label8.TabIndex = 0;
            label8.Text = "Kártyaszám";
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.ForeColor = SystemColors.ControlDarkDark;
            label7.Location = new Point(20, 243);
            label7.Name = "label7";
            label7.Size = new Size(35, 20);
            label7.TabIndex = 0;
            label7.Text = "Cím";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.ForeColor = SystemColors.ControlDarkDark;
            label6.Location = new Point(20, 209);
            label6.Name = "label6";
            label6.Size = new Size(94, 20);
            label6.TabIndex = 0;
            label6.Text = "Településnév";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.ForeColor = SystemColors.ControlDarkDark;
            label5.Location = new Point(20, 175);
            label5.Name = "label5";
            label5.Size = new Size(35, 20);
            label5.TabIndex = 0;
            label5.Text = "Név";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.ForeColor = SystemColors.ControlDarkDark;
            label4.Location = new Point(20, 141);
            label4.Name = "label4";
            label4.Size = new Size(127, 20);
            label4.TabIndex = 0;
            label4.Text = "Regisztráció ideje";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.ForeColor = SystemColors.ControlDarkDark;
            label3.Location = new Point(20, 107);
            label3.Name = "label3";
            label3.Size = new Size(64, 20);
            label3.TabIndex = 0;
            label3.Text = "Kreditek";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.ForeColor = SystemColors.ControlDarkDark;
            label2.Location = new Point(20, 73);
            label2.Name = "label2";
            label2.Size = new Size(74, 20);
            label2.TabIndex = 0;
            label2.Text = "Email cím";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.ForeColor = SystemColors.ControlDarkDark;
            label1.Location = new Point(20, 39);
            label1.Name = "label1";
            label1.Size = new Size(109, 20);
            label1.TabIndex = 0;
            label1.Text = "Felhasználónév";
            // 
            // Form_User
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 363);
            Controls.Add(groupBox1);
            Controls.Add(listBox_users);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form_User";
            Text = "Felhasználók";
            Load += Form_User_Load;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private ListBox listBox_users;
        private GroupBox groupBox1;
        private Label label3;
        private Label label2;
        private Label label1;
        private TextBox textBox_credits;
        private TextBox textBox_email;
        private TextBox textBox_username;
        private Label label8;
        private Label label7;
        private Label label6;
        private Label label5;
        private Label label4;
        private TextBox textBox_last_name;
        private TextBox textBox_first_name;
        private TextBox textBox_card1;
        private TextBox textBox_city;
        private TextBox textBox_street_adress;
        private TextBox textBox_created;
        private Label label9;
        private TextBox textBox_card4;
        private TextBox textBox_card3;
        private TextBox textBox_card2;
        private Label label11;
        private Label label10;
        private TextBox textBox_zip_code;
    }
}