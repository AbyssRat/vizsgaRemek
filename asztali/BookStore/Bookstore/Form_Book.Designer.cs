namespace BookStore
{
    partial class Form_Book
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
            components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_Book));
            listBox_Konyvek = new ListBox();
            panel_vezerlok = new Panel();
            button_delete = new Button();
            button_Update = new Button();
            button_insert = new Button();
            groupBox_KivalasztottKonyv = new GroupBox();
            numericUpDown_price = new NumericUpDown();
            numericUpDown_publish_year = new NumericUpDown();
            comboBox_Author = new ComboBox();
            comboBox_Language = new ComboBox();
            comboBox_Genre = new ComboBox();
            textBox_file_name = new TextBox();
            textBox_ISBN = new TextBox();
            textBox_Title = new TextBox();
            label6 = new Label();
            label5 = new Label();
            label4 = new Label();
            label8 = new Label();
            label3 = new Label();
            label2 = new Label();
            label7 = new Label();
            label1 = new Label();
            contextMenuStrip1 = new ContextMenuStrip(components);
            panel_vezerlok.SuspendLayout();
            groupBox_KivalasztottKonyv.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown_price).BeginInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDown_publish_year).BeginInit();
            SuspendLayout();
            // 
            // listBox_Konyvek
            // 
            listBox_Konyvek.Dock = DockStyle.Left;
            listBox_Konyvek.FormattingEnabled = true;
            listBox_Konyvek.Location = new Point(0, 0);
            listBox_Konyvek.Name = "listBox_Konyvek";
            listBox_Konyvek.Size = new Size(250, 450);
            listBox_Konyvek.TabIndex = 0;
            listBox_Konyvek.SelectedIndexChanged += listBox_Konyvek_SelectedIndexChanged;
            // 
            // panel_vezerlok
            // 
            panel_vezerlok.Controls.Add(button_delete);
            panel_vezerlok.Controls.Add(button_Update);
            panel_vezerlok.Controls.Add(button_insert);
            panel_vezerlok.Dock = DockStyle.Bottom;
            panel_vezerlok.Location = new Point(250, 377);
            panel_vezerlok.Name = "panel_vezerlok";
            panel_vezerlok.Size = new Size(550, 73);
            panel_vezerlok.TabIndex = 1;
            // 
            // button_delete
            // 
            button_delete.Image = Properties.Resources.Image_Torles;
            button_delete.Location = new Point(386, 16);
            button_delete.Name = "button_delete";
            button_delete.Size = new Size(135, 45);
            button_delete.TabIndex = 0;
            button_delete.Text = "Törlés";
            button_delete.TextImageRelation = TextImageRelation.ImageBeforeText;
            button_delete.UseVisualStyleBackColor = true;
            button_delete.Click += button_delete_Click;
            // 
            // button_Update
            // 
            button_Update.Image = Properties.Resources.Image_Modositas;
            button_Update.Location = new Point(213, 16);
            button_Update.Name = "button_Update";
            button_Update.Size = new Size(135, 45);
            button_Update.TabIndex = 0;
            button_Update.Text = "Módosítás";
            button_Update.TextImageRelation = TextImageRelation.ImageBeforeText;
            button_Update.UseVisualStyleBackColor = true;
            button_Update.Click += button_Update_Click;
            // 
            // button_insert
            // 
            button_insert.Image = Properties.Resources.Image_Uj;
            button_insert.Location = new Point(40, 16);
            button_insert.Name = "button_insert";
            button_insert.Size = new Size(135, 45);
            button_insert.TabIndex = 0;
            button_insert.Text = "Mentés";
            button_insert.TextImageRelation = TextImageRelation.ImageBeforeText;
            button_insert.UseVisualStyleBackColor = true;
            button_insert.Click += button_insert_Click;
            // 
            // groupBox_KivalasztottKonyv
            // 
            groupBox_KivalasztottKonyv.Controls.Add(numericUpDown_price);
            groupBox_KivalasztottKonyv.Controls.Add(numericUpDown_publish_year);
            groupBox_KivalasztottKonyv.Controls.Add(comboBox_Author);
            groupBox_KivalasztottKonyv.Controls.Add(comboBox_Language);
            groupBox_KivalasztottKonyv.Controls.Add(comboBox_Genre);
            groupBox_KivalasztottKonyv.Controls.Add(textBox_file_name);
            groupBox_KivalasztottKonyv.Controls.Add(textBox_ISBN);
            groupBox_KivalasztottKonyv.Controls.Add(textBox_Title);
            groupBox_KivalasztottKonyv.Controls.Add(label6);
            groupBox_KivalasztottKonyv.Controls.Add(label5);
            groupBox_KivalasztottKonyv.Controls.Add(label4);
            groupBox_KivalasztottKonyv.Controls.Add(label8);
            groupBox_KivalasztottKonyv.Controls.Add(label3);
            groupBox_KivalasztottKonyv.Controls.Add(label2);
            groupBox_KivalasztottKonyv.Controls.Add(label7);
            groupBox_KivalasztottKonyv.Controls.Add(label1);
            groupBox_KivalasztottKonyv.Dock = DockStyle.Fill;
            groupBox_KivalasztottKonyv.Location = new Point(250, 0);
            groupBox_KivalasztottKonyv.Name = "groupBox_KivalasztottKonyv";
            groupBox_KivalasztottKonyv.Size = new Size(550, 377);
            groupBox_KivalasztottKonyv.TabIndex = 0;
            groupBox_KivalasztottKonyv.TabStop = false;
            groupBox_KivalasztottKonyv.Text = "Kiválasztott könyv adatai";
            // 
            // numericUpDown_price
            // 
            numericUpDown_price.Location = new Point(146, 316);
            numericUpDown_price.Maximum = new decimal(new int[] { 1000000, 0, 0, 0 });
            numericUpDown_price.Minimum = new decimal(new int[] { 1, 0, 0, 0 });
            numericUpDown_price.Name = "numericUpDown_price";
            numericUpDown_price.Size = new Size(150, 27);
            numericUpDown_price.TabIndex = 3;
            numericUpDown_price.TextAlign = HorizontalAlignment.Right;
            numericUpDown_price.Value = new decimal(new int[] { 2, 0, 0, 0 });
            // 
            // numericUpDown_publish_year
            // 
            numericUpDown_publish_year.Location = new Point(146, 199);
            numericUpDown_publish_year.Name = "numericUpDown_publish_year";
            numericUpDown_publish_year.Size = new Size(150, 27);
            numericUpDown_publish_year.TabIndex = 3;
            numericUpDown_publish_year.TextAlign = HorizontalAlignment.Right;
            // 
            // comboBox_Author
            // 
            comboBox_Author.FormattingEnabled = true;
            comboBox_Author.Location = new Point(146, 81);
            comboBox_Author.Name = "comboBox_Author";
            comboBox_Author.Size = new Size(376, 28);
            comboBox_Author.TabIndex = 2;
            // 
            // comboBox_Language
            // 
            comboBox_Language.FormattingEnabled = true;
            comboBox_Language.Location = new Point(146, 120);
            comboBox_Language.Name = "comboBox_Language";
            comboBox_Language.Size = new Size(151, 28);
            comboBox_Language.TabIndex = 2;
            // 
            // comboBox_Genre
            // 
            comboBox_Genre.FormattingEnabled = true;
            comboBox_Genre.Location = new Point(146, 159);
            comboBox_Genre.Name = "comboBox_Genre";
            comboBox_Genre.Size = new Size(151, 28);
            comboBox_Genre.TabIndex = 2;
            // 
            // textBox_file_name
            // 
            textBox_file_name.Location = new Point(146, 276);
            textBox_file_name.Name = "textBox_file_name";
            textBox_file_name.Size = new Size(377, 27);
            textBox_file_name.TabIndex = 1;
            // 
            // textBox_ISBN
            // 
            textBox_ISBN.Location = new Point(146, 237);
            textBox_ISBN.Name = "textBox_ISBN";
            textBox_ISBN.Size = new Size(377, 27);
            textBox_ISBN.TabIndex = 1;
            // 
            // textBox_Title
            // 
            textBox_Title.Location = new Point(146, 42);
            textBox_Title.Name = "textBox_Title";
            textBox_Title.Size = new Size(377, 27);
            textBox_Title.TabIndex = 1;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(30, 318);
            label6.Name = "label6";
            label6.Size = new Size(107, 20);
            label6.TabIndex = 0;
            label6.Text = "Kölcsönzési díj";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(30, 279);
            label5.Name = "label5";
            label5.Size = new Size(102, 20);
            label5.TabIndex = 0;
            label5.Text = "ePub fájl neve";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(30, 240);
            label4.Name = "label4";
            label4.Size = new Size(41, 20);
            label4.TabIndex = 0;
            label4.Text = "ISBN";
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(30, 123);
            label8.Name = "label8";
            label8.Size = new Size(46, 20);
            label8.TabIndex = 0;
            label8.Text = "Nyelv";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(30, 201);
            label3.Name = "label3";
            label3.Size = new Size(80, 20);
            label3.TabIndex = 0;
            label3.Text = "Kiadás éve";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(30, 162);
            label2.Name = "label2";
            label2.Size = new Size(47, 20);
            label2.TabIndex = 0;
            label2.Text = "Műfaj";
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Location = new Point(30, 84);
            label7.Name = "label7";
            label7.Size = new Size(53, 20);
            label7.TabIndex = 0;
            label7.Text = "Szerző";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(30, 45);
            label1.Name = "label1";
            label1.Size = new Size(85, 20);
            label1.TabIndex = 0;
            label1.Text = "Könyv címe";
            // 
            // contextMenuStrip1
            // 
            contextMenuStrip1.ImageScalingSize = new Size(20, 20);
            contextMenuStrip1.Name = "contextMenuStrip1";
            contextMenuStrip1.Size = new Size(61, 4);
            // 
            // Form_Book
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(groupBox_KivalasztottKonyv);
            Controls.Add(panel_vezerlok);
            Controls.Add(listBox_Konyvek);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form_Book";
            Text = "Kölcsönözhető könyvek nyilvántartása";
            Load += Form_Book_Load;
            panel_vezerlok.ResumeLayout(false);
            groupBox_KivalasztottKonyv.ResumeLayout(false);
            groupBox_KivalasztottKonyv.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown_price).EndInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDown_publish_year).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private ListBox listBox_Konyvek;
        private Panel panel_vezerlok;
        private GroupBox groupBox_KivalasztottKonyv;
        private Button button_insert;
        private Button button_Update;
        private Button button_delete;
        private TextBox textBox_Title;
        private Label label6;
        private Label label5;
        private Label label4;
        private Label label3;
        private Label label2;
        private Label label7;
        private Label label1;
        private ContextMenuStrip contextMenuStrip1;
        private NumericUpDown numericUpDown_price;
        private NumericUpDown numericUpDown_publish_year;
        private ComboBox comboBox_Author;
        private ComboBox comboBox_Genre;
        private TextBox textBox_file_name;
        private TextBox textBox_ISBN;
        private ComboBox comboBox_Language;
        private Label label8;
    }
}