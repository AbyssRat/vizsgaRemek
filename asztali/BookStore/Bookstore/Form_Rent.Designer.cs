namespace Bookstore
{
    partial class Form_Rent
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_Rent));
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox_exit = new System.Windows.Forms.PictureBox();
            this.listBoxRents = new System.Windows.Forms.ListBox();
            this.txtUserId = new System.Windows.Forms.TextBox();
            this.txtBookId = new System.Windows.Forms.TextBox();
            this.txtStartDate = new System.Windows.Forms.TextBox();
            this.txtRentalDays = new System.Windows.Forms.TextBox();
            this.txtEndDate = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.btnAdd = new System.Windows.Forms.Button();
            this.btnUpdate = new System.Windows.Forms.Button();
            this.btnDelete = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_exit)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(395, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(30, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Rent";
            // 
            // pictureBox_exit
            // 
            this.pictureBox_exit.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox_exit.Image")));
            this.pictureBox_exit.Location = new System.Drawing.Point(692, 374);
            this.pictureBox_exit.Name = "pictureBox_exit";
            this.pictureBox_exit.Size = new System.Drawing.Size(96, 64);
            this.pictureBox_exit.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_exit.TabIndex = 1;
            this.pictureBox_exit.TabStop = false;
            this.pictureBox_exit.Click += new System.EventHandler(this.pictureBox_exit_Click);
            // 
            // listBoxRents
            // 
            this.listBoxRents.FormattingEnabled = true;
            this.listBoxRents.Location = new System.Drawing.Point(32, 48);
            this.listBoxRents.Name = "listBoxRents";
            this.listBoxRents.Size = new System.Drawing.Size(240, 251);
            this.listBoxRents.TabIndex = 2;
            this.listBoxRents.SelectedIndexChanged += new System.EventHandler(this.listBoxRents_SelectedIndexChanged);
            // 
            // txtUserId
            // 
            this.txtUserId.Location = new System.Drawing.Point(475, 45);
            this.txtUserId.Name = "txtUserId";
            this.txtUserId.Size = new System.Drawing.Size(100, 20);
            this.txtUserId.TabIndex = 3;
            // 
            // txtBookId
            // 
            this.txtBookId.Location = new System.Drawing.Point(475, 87);
            this.txtBookId.Name = "txtBookId";
            this.txtBookId.Size = new System.Drawing.Size(100, 20);
            this.txtBookId.TabIndex = 3;
            // 
            // txtStartDate
            // 
            this.txtStartDate.Location = new System.Drawing.Point(475, 126);
            this.txtStartDate.Name = "txtStartDate";
            this.txtStartDate.Size = new System.Drawing.Size(100, 20);
            this.txtStartDate.TabIndex = 3;
            // 
            // txtRentalDays
            // 
            this.txtRentalDays.Location = new System.Drawing.Point(475, 166);
            this.txtRentalDays.Name = "txtRentalDays";
            this.txtRentalDays.Size = new System.Drawing.Size(100, 20);
            this.txtRentalDays.TabIndex = 3;
            // 
            // txtEndDate
            // 
            this.txtEndDate.Location = new System.Drawing.Point(475, 206);
            this.txtEndDate.Name = "txtEndDate";
            this.txtEndDate.Size = new System.Drawing.Size(100, 20);
            this.txtEndDate.TabIndex = 3;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(395, 48);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(40, 13);
            this.label2.TabIndex = 4;
            this.label2.Text = "UserID";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(395, 90);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(43, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "BookID";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(395, 129);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(52, 13);
            this.label4.TabIndex = 4;
            this.label4.Text = "StartDate";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(395, 169);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(62, 13);
            this.label5.TabIndex = 4;
            this.label5.Text = "RentalDays";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(395, 209);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(49, 13);
            this.label6.TabIndex = 4;
            this.label6.Text = "EndDate";
            // 
            // btnAdd
            // 
            this.btnAdd.Location = new System.Drawing.Point(23, 356);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(75, 23);
            this.btnAdd.TabIndex = 5;
            this.btnAdd.Text = "Add";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // btnUpdate
            // 
            this.btnUpdate.Location = new System.Drawing.Point(116, 356);
            this.btnUpdate.Name = "btnUpdate";
            this.btnUpdate.Size = new System.Drawing.Size(75, 23);
            this.btnUpdate.TabIndex = 5;
            this.btnUpdate.Text = "Update";
            this.btnUpdate.UseVisualStyleBackColor = true;
            this.btnUpdate.Click += new System.EventHandler(this.btnUpdate_Click);
            // 
            // btnDelete
            // 
            this.btnDelete.Location = new System.Drawing.Point(208, 356);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(75, 23);
            this.btnDelete.TabIndex = 5;
            this.btnDelete.Text = "Delete";
            this.btnDelete.UseVisualStyleBackColor = true;
            this.btnDelete.Click += new System.EventHandler(this.btnDelete_Click);
            // 
            // Form_Rent
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnDelete);
            this.Controls.Add(this.btnUpdate);
            this.Controls.Add(this.btnAdd);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txtEndDate);
            this.Controls.Add(this.txtRentalDays);
            this.Controls.Add(this.txtStartDate);
            this.Controls.Add(this.txtBookId);
            this.Controls.Add(this.txtUserId);
            this.Controls.Add(this.listBoxRents);
            this.Controls.Add(this.pictureBox_exit);
            this.Controls.Add(this.label1);
            this.Name = "Form_Rent";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form_Rent";
            this.Load += new System.EventHandler(this.Form_Rent_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_exit)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox_exit;
        private System.Windows.Forms.ListBox listBoxRents;
        private System.Windows.Forms.TextBox txtUserId;
        private System.Windows.Forms.TextBox txtBookId;
        private System.Windows.Forms.TextBox txtStartDate;
        private System.Windows.Forms.TextBox txtRentalDays;
        private System.Windows.Forms.TextBox txtEndDate;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Button btnAdd;
        private System.Windows.Forms.Button btnUpdate;
        private System.Windows.Forms.Button btnDelete;
    }
}