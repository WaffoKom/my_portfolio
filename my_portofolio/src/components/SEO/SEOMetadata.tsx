import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEOMetadata: React.FC = () => {
  const { t, i18n } = useTranslation("metadata");
  const currentLang = i18n.language || "en";
  const siteUrl = "https://danilowaffis-portfolio.vercel.app";
  const previewImage = `${siteUrl}/author/danilo_img.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang} />
      <title>{t("title")}</title>
      <meta name="title" content={t("title")} />
      <meta name="description" content={t("description")} />
      <meta name="keywords" content={t("keywords")} />
      <meta name="author" content={t("author")} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLang === "fr" ? "French" : "English"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/${currentLang}`} />
      <meta property="og:title" content={t("ogTitle")} />
      <meta property="og:description" content={t("ogDescription")} />
      <meta property="og:image" content={previewImage} />
      <meta property="og:site_name" content={t("siteName")} />
      <meta property="og:locale" content={currentLang === "fr" ? "fr_FR" : "en_US"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}/${currentLang}`} />
      <meta property="twitter:title" content={t("twitterTitle")} />
      <meta property="twitter:description" content={t("twitterDescription")} />
      <meta property="twitter:image" content={previewImage} />
      <meta property="twitter:creator" content="@DaniloWaffis" />

      {/* LinkedIn */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Canonical URL */}
      <link rel="canonical" href={`${siteUrl}/${currentLang}`} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="fr" href={`${siteUrl}/fr`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="DaniloWaffis" />

      {/* Contact Information */}
      <meta property="og:email" content="kwdparabic@gmail.com" />
      <meta property="og:phone_number" content="+237656294240" />

      {/* Social Media Links */}
      <meta property="og:see_also" content="https://www.linkedin.com/in/waffokom-daniel-kom-24151a354/" />
      <meta property="og:see_also" content="https://github.com/WaffoKom/" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Daniel Prince Kom Waffo",
          "alternateName": "DaniloWaffis",
          "url": siteUrl,
          "image": `${siteUrl}/profile.jpg`,
          "sameAs": [
            "https://www.linkedin.com/in/waffokom-daniel-kom-24151a354/",
            "https://github.com/WaffoKom/",
            "https://wa.me/+237656294240"
          ],
          "jobTitle": "Full Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "description": t("description"),
          "email": "kwdparabic@gmail.com",
          "telephone": "+237656294240"
        })}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;
