Page({
  data: {
    inputFormat: '',
    searchInput: '',
    isDarkMode: false,
    colorData: {
      sixStandard: [
        { hex: "#FF0000", name: "标准红" },{ hex: "#FF7F00", name: "标准橙" },{ hex: "#FFFF00", name: "标准黄" },
        { hex: "#00FF00", name: "标准绿" },{ hex: "#0000FF", name: "标准蓝" },{ hex: "#9900FF", name: "标准紫" }
      ],
      primary: [
        { hex: "#FF0000", name: "颜料红" },{ hex: "#FFFF00", name: "颜料黄" },{ hex: "#0000FF", name: "颜料蓝" }
      ],
      secondary: [
        { hex: "#FF7F00", name: "橙（红+黄）" },{ hex: "#00FF00", name: "绿（黄+蓝）" },{ hex: "#9900FF", name: "紫（红+蓝）" }
      ],
      tertiary: [
        { hex: "#FF3300", name: "红橙" },{ hex: "#CC9900", name: "黄橙" },{ hex: "#33FF33", name: "黄绿" },
        { hex: "#00CC99", name: "蓝绿" },{ hex: "#3333FF", name: "蓝紫" },{ hex: "#CC33FF", name: "红紫" }
      ],
      cold: [
        { hex: "#0000FF", name: "纯蓝" },{ hex: "#00FF00", name: "纯绿" },{ hex: "#00FFFF", name: "纯青" },
        { hex: "#9900FF", name: "纯紫" },{ hex: "#3333FF", name: "深蓝" },{ hex: "#00CC99", name: "蓝绿" },
        { hex: "#0099FF", name: "浅蓝" },{ hex: "#9966CC", name: "紫蓝" }
      ],
      warm: [
        { hex: "#FF0000", name: "纯红" },{ hex: "#FF7F00", name: "纯橙" },{ hex: "#FFFF00", name: "纯黄" },
        { hex: "#FF3300", name: "红橙" },{ hex: "#CC9900", name: "黄橙" },{ hex: "#FF6666", name: "粉红" },
        { hex: "#FF9900", name: "浅橙" },{ hex: "#FFCC00", name: "浅黄" }
      ],
      neutral: [
        { hex: "#808080", name: "中灰" },{ hex: "#D9D9D9", name: "浅灰" },{ hex: "#4D4D4D", name: "深灰" },
        { hex: "#DEB887", name: "棕褐" },{ hex: "#F5DEB3", name: "小麦色" },{ hex: "#D2B48C", name: "棕铜" },
        { hex: "#B87333", name: "红铜" },{ hex: "#8C7853", name: "青铜" },{ hex: "#F5F5DC", name: "米白" },
        { hex: "#FFDAB9", name: "肉色" },{ hex: "#E6E6FA", name: "淡紫白" },{ hex: "#F0F0F0", name: "极浅灰" }
      ],
      achromatic: [
        { hex: "#FFFFFF", name: "纯白" },{ hex: "#F0F0F0", name: "极浅灰" },{ hex: "#D9D9D9", name: "浅灰" },
        { hex: "#BFBFBF", name: "中浅灰" },{ hex: "#808080", name: "中灰" },{ hex: "#666666", name: "中深灰" },
        { hex: "#4D4D4D", name: "深灰" },{ hex: "#333333", name: "极深灰" },{ hex: "#1A1A1A", name: "近黑" },
        { hex: "#000000", name: "纯黑" }
      ],
      trueColor: [
        { hex: "#FF0000", name: "真红" },{ hex: "#FF9900", name: "真橙" },{ hex: "#FFFF00", name: "真黄" },
        { hex: "#00FF00", name: "真绿" },{ hex: "#00FFFF", name: "真青" },{ hex: "#0099FF", name: "真蓝" },
        { hex: "#9900FF", name: "真紫" },{ hex: "#FF00FF", name: "真品红" },{ hex: "#FF6666", name: "真粉红" },
        { hex: "#00CC00", name: "真深绿" },{ hex: "#3333FF", name: "真深蓝" },{ hex: "#CC00CC", name: "真暗紫" }
      ],
      metallic: [
        { hex: "#FFD700", name: "亮金" },{ hex: "#D4AF37", name: "古金" },{ hex: "#C0C0C0", name: "亮银" },
        { hex: "#A9A9A9", name: "亚银" },{ hex: "#B87333", name: "红铜" },{ hex: "#8C7853", name: "青铜" },
        { hex: "#B5A642", name: "黄铜" },{ hex: "#2A3439", name: "炮铜" }
      ],
      extreme: [
        { hex: "#FF9900", name: "暖极（橙）" },{ hex: "#0066FF", name: "冷极（蓝）" },
        { hex: "#FFFFFF", name: "亮极（白）" },{ hex: "#000000", name: "暗极（黑）" }
      ],
      gemstone: [
        { hex: "#9B111E", name: "红宝石红" },{ hex: "#50C878", name: "祖母绿" },{ hex: "#0F52BA", name: "蓝宝石蓝" },
        { hex: "#9966CC", name: "紫水晶紫" },{ hex: "#00A86B", name: "翡翠绿" },{ hex: "#FFC87C", name: "黄玉黄" },
        { hex: "#0047AB", name: "钴石蓝" },{ hex: "#B9F2FF", name: "钻石白" }
      ],
      painting: [
        { hex: "#8E2323", name: "赭石红" },{ hex: "#8E6B23", name: "土黄" },{ hex: "#228B22", name: "深翠绿" },
        { hex: "#0047AB", name: "钴蓝" },{ hex: "#9370DB", name: "紫罗兰" },{ hex: "#DEB887", name: "棕褐" },
        { hex: "#F4A460", name: "生赭" },{ hex: "#90EE90", name: "浅葱绿" },{ hex: "#4682B4", name: "天蓝" },
        { hex: "#DDA0DD", name: "藕紫" },{ hex: "#FFDAB9", name: "肉色" },{ hex: "#F5F5DC", name: "米白" }
      ]
    },
    activeTab: 'sixStandard',
    displayColors: [],
    datetimeDisplay: '',
    colorInput: '',
    convertedColor: null,
    displayValues: {
      hex: '',
      rgb: '',
      rgba: '',
      hsl: '',
      hsla: '',
      hsv: '',
      hsva: '',
      cmyk: ''
    },
    liveColor: '#ffffff',
    liveColorContrast: '#000000'
  },

  onLoad: function() {
    this.initData();
    this.updateDateTime();
    // 检查系统主题模式
    this.checkDarkMode();
    // 使用预计算的数据，避免运行时计算
    this.setData({
      displayColors: this.data.colorData.sixStandard,
      colorInput: '输入颜色代码转换',
      searchInput: '搜索颜色'
    });
    // 监听系统主题变化
    wx.onThemeChange(this.onThemeChange);
    setInterval(this.updateDateTime.bind(this), 1000);
  },

  onInputFocus: function() {
    if (this.data.colorInput === '输入颜色代码转换') {
      this.setData({
        colorInput: ''
      });
    }
  },

  onInputBlur: function() {
    if (!this.data.colorInput.trim()) {
      this.setData({
        colorInput: '输入颜色代码转换'
      });
    }
  },

  onSearchFocus: function() {
    if (this.data.searchInput === '搜索颜色') {
      this.setData({
        searchInput: ''
      });
    }
  },

  onSearchBlur: function() {
    if (!this.data.searchInput.trim()) {
      this.setData({
        searchInput: '搜索颜色'
      });
    }
  },

  checkDarkMode: function() {
    const systemInfo = wx.getSystemInfoSync();
    this.updateTheme(systemInfo.theme);
  },

  updateTheme: function(theme) {
    if (theme === 'dark') {
      // 为页面根元素添加dark-mode类
      wx.setPageStyle({
        style: {
          '--bg-body': '#1c1c1e',
          '--text-main': '#f5f5f7',
          '--tab-bg': '#2c2c2e',
          '--tab-text': '#f5f5f7',
          '--tab-active-bg': '#666666',
          '--tab-active-text': '#ffffff',
          '--card-border': '#38383a',
          '--input-bg': '#2c2c2e',
          '--input-border': '#48484a',
          '--input-placeholder': '#8e8e93',
          '--text-secondary': '#8e8e93'
        }
      });
      // 添加dark-mode类
      this.setData({ isDarkMode: true });
    } else {
      // 切换回浅色模式
      wx.setPageStyle({
        style: {
          '--bg-body': '#ffffff',
          '--text-main': '#333333',
          '--tab-bg': '#f0f0f0',
          '--tab-text': '#333333',
          '--tab-active-bg': '#666666',
          '--tab-active-text': '#ffffff',
          '--card-border': '#eeeeee',
          '--input-bg': '#ffffff',
          '--input-border': '#dddddd',
          '--input-placeholder': '#999999',
          '--text-secondary': '#666666'
        }
      });
      // 移除dark-mode类
      this.setData({ isDarkMode: false });
    }
  },

  onThemeChange: function(res) {
    this.updateTheme(res.theme);
  },

  // 转发给好友
  onShareAppMessage: function() {
    return {
      title: 'XL色卡 - 颜色转换与色卡大全',
      path: '/pages/index/index',
      imageUrl: ''
    };
  },

  // 分享到朋友圈
  onShareTimeline: function() {
    return {
      title: 'XL色卡 - 颜色转换与色卡大全',
      imageUrl: ''
    };
  },

  // 复制链接
  copyLink: function() {
    const link = 'https://miniprogram.example.com/pages/index/index'; // 替换为实际的小程序链接
    wx.setClipboardData({
      data: link,
      success: function(res) {
        wx.showToast({
          title: '链接已复制',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function(res) {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  initData: function() {
    const allColors = [];
    Object.keys(this.data.colorData).forEach(key => {
      // 预先计算每个颜色的对比色
      const colorsWithContrast = this.data.colorData[key].map(color => ({
        ...color,
        contrastColor: this.getContrastColor(color.hex)
      }));
      // 更新colorData中的数据，存储带有对比色的版本
      this.data.colorData[key] = colorsWithContrast;
      allColors.push(...colorsWithContrast);
    });
    this.data.colorData.all = allColors;
  },

  updateDateTime: function() {
    const now = new Date();
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateTimeStr = `${hours}:${minutes}:${seconds} | ${year}-${month}-${day} | ${weekDay}`;
    this.setData({
      datetimeDisplay: dateTimeStr
    });
  },

  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    // 合并setData调用，减少渲染次数，消除延迟
    this.setData({
      activeTab: tab,
      displayColors: this.data.colorData[tab]
    });
  },

  onColorInput: function(e) {
    let value = e.detail.value;
    this.setData({
      colorInput: value
    });
    // 当输入框清空时，也清空转换结果和格式预览
    if (!value.trim()) {
      this.setData({
        convertedColor: null,
        inputFormat: '',
        liveColor: '#ffffff',
        liveColorContrast: '#000000'
      });
      this.updateDisplayValues(null);
      return;
    }
    
    // 实时检测颜色格式
    let format = '';
    const trimmedValue = value.trim();
    
    if (trimmedValue.startsWith('#')) {
      format = 'HEX';
    } else if (trimmedValue.startsWith('rgb(')) {
      format = 'RGB';
    } else if (trimmedValue.startsWith('rgba(')) {
      format = 'RGBA';
    } else if (trimmedValue.startsWith('hsl(')) {
      format = 'HSL';
    } else if (trimmedValue.startsWith('hsla(')) {
      format = 'HSLA';
    } else if (trimmedValue.startsWith('hsv(')) {
      format = 'HSV';
    } else if (trimmedValue.startsWith('hsva(')) {
      format = 'HSVA';
    } else if (trimmedValue.startsWith('cmyk(')) {
      format = 'CMYK';
    } else if (/^[0-9A-Fa-f]{3}$/.test(trimmedValue) || /^[0-9A-Fa-f]{6}$/.test(trimmedValue)) {
      format = 'HEX';
    }
    
    this.setData({
      inputFormat: format
    });
    
    // 实时尝试解析颜色并更新预览
    this.updateLiveColorPreview(trimmedValue);
  },
  
  updateLiveColorPreview: function(input) {
    let color;
    let format;
    
    if (input.startsWith('#')) {
      format = 'hex';
      color = this.parseHex(input);
    } else if (input.startsWith('rgb(')) {
      format = 'rgb';
      color = this.parseRgb(input);
    } else if (input.startsWith('rgba(')) {
      format = 'rgba';
      color = this.parseRgb(input);
    } else if (input.startsWith('hsl(')) {
      format = 'hsl';
      color = this.parseHsl(input);
    } else if (input.startsWith('hsla(')) {
      format = 'hsla';
      color = this.parseHsl(input);
    } else if (input.startsWith('hsv(')) {
      format = 'hsv';
      color = this.parseHsv(input);
    } else if (input.startsWith('hsva(')) {
      format = 'hsva';
      color = this.parseHsv(input);
    } else if (input.startsWith('cmyk(')) {
      format = 'cmyk';
      color = this.parseCmyk(input);
    } else if (/^[0-9A-Fa-f]{3}$/.test(input) || /^[0-9A-Fa-f]{6}$/.test(input)) {
      // 处理不带#的HEX格式，如"FF0000"或"F00"
      format = 'hex';
      color = this.parseHex(`#${input}`);
    }
    
    if (color) {
      let rgbColor = color;
      if (format !== 'rgb' && format !== 'rgba') {
        rgbColor = this.toRgb(color, format);
      }
      
      if (rgbColor) {
        const hexColor = this.rgbToHex(rgbColor);
        const contrastColor = this.getContrastColor(hexColor);
        
        this.setData({
          liveColor: hexColor,
          liveColorContrast: contrastColor
        });
      }
    }
  },

  updateDisplayValues: function(convertedColor) {
    const displayValues = {};
    if (!convertedColor) {
      Object.keys(this.data.displayValues).forEach(key => displayValues[key] = '');
      this.setData({ displayValues });
      return;
    }
    displayValues.hex = convertedColor.hex || '';
    ['rgb', 'rgba', 'hsl', 'hsla', 'hsv', 'hsva', 'cmyk'].forEach(format => {
      const colorStr = convertedColor[format];
      displayValues[format] = colorStr ? colorStr.match(/\((.*?)\)/)[1] : '';
    });
    this.setData({ displayValues });
  },

  // 复制转换结果
  copyResult: function(e) {
    const format = e.currentTarget.dataset.format;
    if (!this.data.convertedColor) return;
    let value = '';
    if (format === 'hex') {
      value = this.data.convertedColor.hex || '';
    } else {
      const colorStr = this.data.convertedColor[format];
      if (colorStr) {
        const match = colorStr.match(/\((.*?)\)/);
        if (match && match[1]) {
          value = match[1];
        }
      }
    }
    if (value) {
      wx.setClipboardData({
        data: value
      });
    }
  },

  convertColor: function() {
    let input = this.data.colorInput.trim();
    // 如果当前值是提示文字，则视为空输入
    if (!input || input === '输入颜色代码转换') return;

    let format, color;

    // 检测输入格式
    if (input.startsWith('#')) {
      // HEX格式
      format = 'hex';
      color = this.parseHex(input);
    } else if (input.startsWith('rgb(')) {
      // RGB格式
      format = 'rgb';
      color = this.parseRgb(input);
    } else if (input.startsWith('rgba(')) {
      // RGBA格式
      format = 'rgba';
      color = this.parseRgb(input);
    } else if (input.startsWith('hsl(')) {
      // HSL格式
      format = 'hsl';
      color = this.parseHsl(input);
    } else if (input.startsWith('hsla(')) {
      // HSLA格式
      format = 'hsla';
      color = this.parseHsl(input);
    } else if (input.startsWith('hsv(')) {
      // HSV格式
      format = 'hsv';
      color = this.parseHsv(input);
    } else if (input.startsWith('hsva(')) {
      // HSVA格式
      format = 'hsva';
      color = this.parseHsv(input);
    } else if (input.startsWith('cmyk(')) {
      // CMYK格式
      format = 'cmyk';
      color = this.parseCmyk(input);
    } else if (/^[0-9A-Fa-f]{3}$/.test(input) || /^[0-9A-Fa-f]{6}$/.test(input)) {
      // 处理不带#的HEX格式，如"FF0000"或"F00"
      format = 'hex';
      color = this.parseHex(`#${input}`);
    }

    if (color) {
      // 根据输入格式转换为所有其他格式
      const conversions = {};
      
      // 确保我们有RGB值作为基础
      let rgbColor = color;
      if (format !== 'rgb' && format !== 'rgba') {
        rgbColor = this.toRgb(color, format);
      }

      // 转换为所有格式
      conversions.hex = this.rgbToHex(rgbColor);
      conversions.rgb = this.rgbToString(rgbColor).replace('rgb', 'RGB');
      conversions.rgba = this.rgbToRgbaString(rgbColor).replace('rgba', 'RGBA');
      conversions.hsl = this.rgbToHslString(rgbColor).replace('hsl', 'HSL');
      conversions.hsla = this.rgbToHslaString(rgbColor).replace('hsla', 'HSLA');
      conversions.hsv = this.rgbToHsvString(rgbColor).replace('hsv', 'HSV');
      conversions.hsva = this.rgbToHsvaString(rgbColor).replace('hsva', 'HSVA');
      conversions.cmyk = this.rgbToCmykString(rgbColor).replace('cmyk', 'CMYK');

      this.setData({
        convertedColor: conversions
      });
      this.updateDisplayValues(conversions);
    }
  },

  // 解析HEX格式
  parseHex: function(hex) {
    hex = hex.replace('#', '');
    let r, g, b, a = 1;

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    } else if (hex.length === 8) {
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
      a = parseInt(hex.substr(6, 2), 16) / 255;
    }

    return { r, g, b, a };
  },

  // 解析RGB/RGBA格式
  parseRgb: function(rgbStr) {
    const match = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!match) return null;
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: match[4] ? parseFloat(match[4]) : 1
    };
  },

  // 解析HSL/HSLA格式
  parseHsl: function(hslStr) {
    const match = hslStr.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/);
    if (!match) return null;
    return {
      h: parseInt(match[1]),
      s: parseInt(match[2]) / 100,
      l: parseInt(match[3]) / 100,
      a: match[4] ? parseFloat(match[4]) : 1
    };
  },

  // 解析HSV/HSVA格式
  parseHsv: function(hsvStr) {
    const match = hsvStr.match(/hsva?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/);
    if (!match) return null;
    return {
      h: parseInt(match[1]),
      s: parseInt(match[2]) / 100,
      v: parseInt(match[3]) / 100,
      a: match[4] ? parseFloat(match[4]) : 1
    };
  },

  // 解析CMYK格式
  parseCmyk: function(cmykStr) {
    const match = cmykStr.match(/cmyk\((\d+)%,\s*(\d+)%,\s*(\d+)%,\s*(\d+)%\)/);
    if (!match) return null;
    return {
      c: parseInt(match[1]) / 100,
      m: parseInt(match[2]) / 100,
      y: parseInt(match[3]) / 100,
      k: parseInt(match[4]) / 100
    };
  },

  // RGB转HEX
  rgbToHex: function(rgb) {
    const r = Math.round(rgb.r);
    const g = Math.round(rgb.g);
    const b = Math.round(rgb.b);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  },

  // RGB对象转字符串
  rgbToString: function(rgb) {
    const r = Math.round(rgb.r);
    const g = Math.round(rgb.g);
    const b = Math.round(rgb.b);
    return `rgb(${r}, ${g}, ${b})`;
  },

  // RGB对象转RGBA字符串
  rgbToRgbaString: function(rgb) {
    const r = Math.round(rgb.r);
    const g = Math.round(rgb.g);
    const b = Math.round(rgb.b);
    const a = rgb.a || 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  },

  // RGB转HSL
  rgbToHsl: function(rgb) {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;
    const a = rgb.a || 1;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // 灰度
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s, l: l, a: a };
  },

  // RGB转HSL字符串
  rgbToHslString: function(rgb) {
    const hsl = this.rgbToHsl(rgb);
    return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
  },

  // RGB转HSLA字符串
  rgbToHslaString: function(rgb) {
    const hsl = this.rgbToHsl(rgb);
    return `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%, ${hsl.a})`;
  },

  // RGB转HSV
  rgbToHsv: function(rgb) {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;
    const a = rgb.a || 1;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, v = max;

    const d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0; // 灰度
    } else {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s, v: v, a: a };
  },

  // RGB转HSV字符串
  rgbToHsvString: function(rgb) {
    const hsv = this.rgbToHsv(rgb);
    return `hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s * 100)}%, ${Math.round(hsv.v * 100)}%)`;
  },

  // RGB转HSVA字符串
  rgbToHsvaString: function(rgb) {
    const hsv = this.rgbToHsv(rgb);
    return `hsva(${Math.round(hsv.h)}, ${Math.round(hsv.s * 100)}%, ${Math.round(hsv.v * 100)}%, ${hsv.a})`;
  },

  // RGB转CMYK
  rgbToCmyk: function(rgb) {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    const k = 1 - Math.max(r, g, b);
    if (k === 1) {
      return { c: 0, m: 0, y: 0, k: 1 };
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);

    return { c: c, m: m, y: y, k: k };
  },

  // RGB转CMYK字符串
  rgbToCmykString: function(rgb) {
    const cmyk = this.rgbToCmyk(rgb);
    return `cmyk(${Math.round(cmyk.c * 100)}%, ${Math.round(cmyk.m * 100)}%, ${Math.round(cmyk.y * 100)}%, ${Math.round(cmyk.k * 100)}%)`;
  },

  // 其他格式转RGB
  toRgb: function(color, format) {
    if (format === 'hsl' || format === 'hsla') {
      return this.hslToRgb(color);
    } else if (format === 'hsv' || format === 'hsva') {
      return this.hsvToRgb(color);
    } else if (format === 'cmyk') {
      return this.cmykToRgb(color);
    }
    return color;
  },

  // HSL转RGB
  hslToRgb: function(hsl) {
    let h = hsl.h / 360;
    let s = hsl.s;
    let l = hsl.l;
    const a = hsl.a || 1;

    let r, g, b;

    if (s === 0) {
      r = g = b = l; // 灰度
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255, a: a };
  },

  // HSV转RGB
  hsvToRgb: function(hsv) {
    let h = hsv.h / 360;
    let s = hsv.s;
    let v = hsv.v;
    const a = hsv.a || 1;

    let r, g, b;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }

    return { r: r * 255, g: g * 255, b: b * 255, a: a };
  },

  // CMYK转RGB
  cmykToRgb: function(cmyk) {
    const c = cmyk.c;
    const m = cmyk.m;
    const y = cmyk.y;
    const k = cmyk.k;

    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);

    return { r: r, g: g, b: b, a: 1 };
  },

  onSearchInput: function(e) {
    let value = e.detail.value;
    // 如果当前值是提示文字，则清空后再处理
    if (value === '搜索颜色') {
      value = '';
    }
    this.setData({
      searchInput: value
    });
    
    const keyword = value.trim().toLowerCase();
    if (!keyword) {
      this.setData({
        displayColors: this.data.colorData[this.data.activeTab].map(color => ({
          ...color,
          contrastColor: this.getContrastColor(color.hex)
        }))
      });
      return;
    }

    const allColors = this.data.colorData.all;
    const filteredColors = allColors.filter(color => 
      color.name.toLowerCase().includes(keyword) || 
      color.hex.toLowerCase().includes(keyword)
    );
    this.setData({
      displayColors: filteredColors.map(color => ({
        ...color,
        contrastColor: this.getContrastColor(color.hex)
      }))
    });
  },

  getContrastColor: function(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b)/255;
    return luminance > 0.5 ? '#000000' : '#ffffff';
  },

  copyColor: function(e) {
    const hexCode = e.currentTarget.dataset.hex;
    wx.setClipboardData({
      data: hexCode
    });
  },


})