(function (d) {
  function c() {
    d(".item-change.plus").click(function () {
      var l = d(this).attr("data-key");
      var j = Number(d(".input-number input." + l).val());
      j += 1;
      if (j > 50) {
        j = 50;
      }
      if (l != "") {
        var k = l.split("-");
        if (k.length == 3 && j > 0) {
          f(k[0], k[1], k[2], j, l);
        }
      }
    });
  }
  function e() {
    d(".item-change.minus").click(function () {
      var l = d(this).attr("data-key");
      var j = Number(d(".input-number input." + l).val());
      j -= 1;
      if (l != "" && j > 0) {
        var k = l.split("-");
        if (k.length == 3 && j > 0) {
          f(k[0], k[1], k[2], j, l);
        }
      }
    });
  }
  function f(k, j, l, m, n) {
    d.ajax({
      type: "POST",
      dataType: "json",
      data: { fpid: k, fpoid: j, fproductcode: l, fquantity: m },
      url: rooturl_store + "cart/add?fisupdate=1",
      beforeSend: function () {
        d(".cls_loader").css("display", "flex");
      },
      error: function () {},
      success: function (r) {
        if (r.suc > 0) {
          d(".input-number input." + n).val(m);
          var q = d(".sb-" + n).attr("data-price");
          q = q * m;
          d(".sb-" + n).html(g(parseFloat(q), 0, ",", "."));
          d(".cart .count").html("(" + r.itemtotal + ")");
          d(".quantitytotal").html(r.itemtotal);
          d(".pricesellingtotal").html(g(parseFloat(r.total), 0, ",", "."));
          var s = 0;
          if (r.promotion.discount > 0) {
            s = 1;
            d(".promotiondiscount").html(
              "-" + g(parseFloat(r.promotion.discount), 0, ",", ".")
            );
          } else {
            d(".promotiondiscount").html("0");
          }
          var t = r.total;
          if (s == 1) {
            t -= r.promotion.discount;
          }
          d(".pricetotal").html(g(parseFloat(t), 0, ",", "."));
          if (r.moreproductincart > 0) {
            d("#cartitemmoreforgift").html(r.moreproductincart);
          } else {
            d("#div-cartitemmoreforgift").addClass("hide");
          }
          var p = d("#itemtotal").val();
          var o = r.listproduct.length;
          if (p != o || r.itemgiftadd > 0 || r.itemgiftrm > 0) {
            location.reload(true);
          }
        } else {
          i(r.mes, "error");
        }
      },
      complete: function () {
        d(".cls_loader").css("display", "none");
      },
    });
  }
  function h() {
    d(".delete-item-in-cart").click(function () {
      var k = d(this).attr("data-pid");
      var j = d(this).attr("data-poid");
      if (k != "" && j != "") {
        var l = d(this);
        d.ajax({
          type: "POST",
          dataType: "json",
          data: { fpid: k, fpoid: j },
          url: rooturl_store + "cart/removeitem",
          beforeSend: function () {
            d(".cls_loader").css("display", "flex");
          },
          error: function () {},
          success: function (o) {
            if (o.success > 0) {
              l.closest(".item-cart").remove();
              d("#itemtotal").val(d("#itemtotal").val() - 1);
              d(".cart .count").html("(" + o.itemtotal + ")");
              d(".quantitytotal").html(o.itemtotal);
              d(".pricesellingtotal").html(g(parseFloat(o.total), 0, ",", "."));
              var p = 0;
              if (o.promotion.discount > 0) {
                p = 1;
                d(".promotiondiscount").html(
                  "-" + g(parseFloat(o.promotion.discount), 0, ",", ".")
                );
              } else {
                d(".promotiondiscount").html("0");
              }
              var q = o.total;
              if (p == 1) {
                q -= o.promotion.discount;
              }
              d(".pricetotal").html(g(parseFloat(q), 0, ",", "."));
              if (o.moreproductincart > 0) {
                d("#cartitemmoreforgift").html(o.moreproductincart);
              } else {
                d("#div-cartitemmoreforgift").addClass("hide");
              }
              i(o.message, "success");
              var n = d("#itemtotal").val();
              var m = o.listproduct.length;
              if (n != m || o.itemgiftrm > 0) {
                location.reload(true);
              }
              if (o.itemtotal == 0) {
                d(".cart-page").remove();
                d(".cart-empty").removeClass("hide");
              }
              if (d("#hdn_isset_pdcombo").val() == 1) {
                location.reload(true);
              }
            } else {
              i(o.message, "error");
            }
          },
          complete: function () {
            d(".cls_loader").css("display", "none");
          },
        });
      }
    });
  }
  function a() {
    d(".changeattr").change(function () {
      var j = d(this).attr("data-poid");
      var l = d("#pid-" + j).val();
      var p = d("#pcode-" + j).val();
      var n = d("#pmaterial-" + j).val();
      var k = d("#slc-change-color-" + j);
      var m = d("#slc-change-size-" + j);
      var q = [];
      if (k.length > 0) {
        q.push(k.val());
      }
      if (m.length > 0) {
        q.push(m.val());
      }
      if (n != "") {
        q.push(n);
      }
      var o = q.join("_");
      if (j > 0 && l > 0 && p != "" && o != "") {
        d.ajax({
          type: "POST",
          dataType: "json",
          data: {
            fquantity: 1,
            fpoidold: j,
            fpid: l,
            fproductcode: p,
            fstrpoid: o,
          },
          url: rooturl_store + "cart/add?fisupdate=1",
          error: function () {
            d(".cls_loader").css("display", "none");
          },
          beforeSend: function () {
            d(".cls_loader").css("display", "flex");
          },
          success: function (r) {
            if (r.suc == 1) {
              location.reload(true);
            } else {
              d.each(r.mes, function (s, t) {
                i(t, "error");
              });
            }
          },
          complete: function () {
            d(".cls_loader").css("display", "none");
          },
        });
      }
    });
  }
  function g(p, l, r, o) {
    p = (p + "").replace(/[^0-9+\-Ee.]/g, "");
    var k = !isFinite(+p) ? 0 : +p,
      j = !isFinite(+l) ? 0 : Math.abs(l),
      u = typeof o === "undefined" ? "," : o,
      m = typeof r === "undefined" ? "." : r,
      t = "",
      q = function (w, v) {
        var s = Math.pow(10, v);
        return "" + (Math.round(w * s) / s).toFixed(v);
      };
    t = (j ? q(k, j) : "" + Math.round(k)).split(".");
    if (t[0].length > 3) {
      t[0] = t[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, u);
    }
    if ((t[1] || "").length < j) {
      t[1] = t[1] || "";
      t[1] += new Array(j - t[1].length + 1).join("0");
    }
    return t.join(m);
  }
  function i(k, j) {
    switch (j) {
      case "success":
        toastr.success(k);
        break;
      case "info":
        toastr.info(k);
        break;
      case "warning":
        toastr.warning(k);
        break;
      case "error":
        toastr.error(k);
        break;
    }
  }
  function b() {
    d(".checkout-cart").click(function () {
      if (d(".out-of-stock").length > 0) {
        i(
          "Vui lòng xóa những sản phẩm đã hết hàng tại khu vực bạn chọn để tiếp tục đặt hàng",
          "error"
        );
      } else {
        window.location.href = rooturl_store + "cart/checkout";
      }
    });
  }
  d(function () {
    h();
    c();
    e();
    a();
    b();
  });
})(jQuery);
