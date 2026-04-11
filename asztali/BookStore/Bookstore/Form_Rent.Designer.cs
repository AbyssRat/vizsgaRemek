namespace BookStore
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
            dataGridView_Kolcsonzesek = new DataGridView();
            ((System.ComponentModel.ISupportInitialize)dataGridView_Kolcsonzesek).BeginInit();
            SuspendLayout();
            // 
            // dataGridView_Kolcsonzesek
            // 
            dataGridView_Kolcsonzesek.AllowUserToAddRows = false;
            dataGridView_Kolcsonzesek.AllowUserToDeleteRows = false;
            dataGridView_Kolcsonzesek.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView_Kolcsonzesek.Dock = DockStyle.Fill;
            dataGridView_Kolcsonzesek.Location = new Point(0, 0);
            dataGridView_Kolcsonzesek.Name = "dataGridView_Kolcsonzesek";
            dataGridView_Kolcsonzesek.ReadOnly = true;
            dataGridView_Kolcsonzesek.RowHeadersWidth = 51;
            dataGridView_Kolcsonzesek.Size = new Size(1148, 450);
            dataGridView_Kolcsonzesek.TabIndex = 0;
            // 
            // Form_Rent
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1148, 450);
            Controls.Add(dataGridView_Kolcsonzesek);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form_Rent";
            Text = "Kölcsönzési adatok";
            Load += Form_Rent_Load;
            ((System.ComponentModel.ISupportInitialize)dataGridView_Kolcsonzesek).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dataGridView_Kolcsonzesek;
    }
}