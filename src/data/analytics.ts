/**
 * Analytics config — leave gtmId empty to disable GTM
 * (DSGVO: kein Script ohne explizite Konfiguration)
 */
export const analytics = {
  gtmId: "GTM-5V5D94C",
};

export const gtmEnabled = Boolean(analytics.gtmId);
