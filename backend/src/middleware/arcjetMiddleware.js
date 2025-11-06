import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: "محدودیت نرخ از حد مجاز فراتر رفت. لطفاً بعداً دوباره امتحان کنید." });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ message: "دسترسی ربات ممنوع شد." });
      } else {
        return res.status(403).json({
          message: "دسترسی توسط سیاست امنیتی رد شد.",
        });
      }
    }

    // check for spoofed bots
    if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({
        error: "ربات جعلی شناسایی شد",
        message: "فعالیت ربات‌های مخرب شناسایی شد.",
      });
    }

    next();
  } catch (error) {
    console.log("Arcjet Protection Error:", error);
    next();
  }
};
