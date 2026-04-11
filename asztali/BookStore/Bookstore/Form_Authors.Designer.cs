namespace BookStore
{
    partial class Form_Authors
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_Authors));
            listBox_authors = new ListBox();
            groupBox1 = new GroupBox();
            textBox_bio = new TextBox();
            label2 = new Label();
            textBox_author_name = new TextBox();
            label1 = new Label();
            panel_vezerlok = new Panel();
            button1 = new Button();
            groupBox1.SuspendLayout();
            panel_vezerlok.SuspendLayout();
            SuspendLayout();
            // 
            // listBox_authors
            // 
            listBox_authors.Dock = DockStyle.Left;
            listBox_authors.FormattingEnabled = true;
            listBox_authors.Location = new Point(0, 0);
            listBox_authors.Name = "listBox_authors";
            listBox_authors.Size = new Size(279, 450);
            listBox_authors.TabIndex = 0;
            listBox_authors.SelectedIndexChanged += listBox_authors_SelectedIndexChanged;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(textBox_bio);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(textBox_author_name);
            groupBox1.Controls.Add(label1);
            groupBox1.Dock = DockStyle.Fill;
            groupBox1.Location = new Point(279, 0);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(492, 450);
            groupBox1.TabIndex = 1;
            groupBox1.TabStop = false;
            groupBox1.Text = "Kiválasztott szerző";
            // 
            // textBox_bio
            // 
            textBox_bio.AcceptsTab = true;
            textBox_bio.Location = new Point(36, 124);
            textBox_bio.Multiline = true;
            textBox_bio.Name = "textBox_bio";
            textBox_bio.ScrollBars = ScrollBars.Both;
            textBox_bio.Size = new Size(444, 177);
            textBox_bio.TabIndex = 1;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(36, 89);
            label2.Name = "label2";
            label2.Size = new Size(112, 20);
            label2.TabIndex = 0;
            label2.Text = "Életrajzi adatok";
            // 
            // textBox_author_name
            // 
            textBox_author_name.Location = new Point(169, 36);
            textBox_author_name.Name = "textBox_author_name";
            textBox_author_name.Size = new Size(290, 27);
            textBox_author_name.TabIndex = 1;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(36, 39);
            label1.Name = "label1";
            label1.Size = new Size(88, 20);
            label1.TabIndex = 0;
            label1.Text = "Szerző neve";
            // 
            // panel_vezerlok
            // 
            panel_vezerlok.Controls.Add(button1);
            panel_vezerlok.Dock = DockStyle.Bottom;
            panel_vezerlok.Location = new Point(279, 353);
            panel_vezerlok.Name = "panel_vezerlok";
            panel_vezerlok.Size = new Size(492, 97);
            panel_vezerlok.TabIndex = 2;
            // 
            // button1
            // 
            button1.Location = new Point(36, 20);
            button1.Name = "button1";
            button1.Size = new Size(423, 47);
            button1.TabIndex = 0;
            button1.Text = "Módosítások mentése";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // Form_Authors
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(771, 450);
            Controls.Add(panel_vezerlok);
            Controls.Add(groupBox1);
            Controls.Add(listBox_authors);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form_Authors";
            Text = "A könyvek szerői";
            Load += Form_Authors_Load;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            panel_vezerlok.ResumeLayout(false);
            ResumeLayout(false);
        }

        #endregion

        private ListBox listBox_authors;
        private GroupBox groupBox1;
        private TextBox textBox_author_name;
        private Label label1;
        private Panel panel_vezerlok;
        private TextBox textBox_bio;
        private Label label2;
        private Button button1;
    }
}