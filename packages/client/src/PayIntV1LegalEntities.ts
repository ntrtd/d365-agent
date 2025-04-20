/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PayIntV1LegalEntitiesApi } from './PayIntV1LegalEntitiesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { LegalNatureIt } from './LegalNatureIt';
import { CompanyTypeMx } from './CompanyTypeMx';

/**
 * This class represents the entity "PayIntV1LegalEntities" of service "d365_metadata".
 */
export class PayIntV1LegalEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1LegalEntitiesType<T>
{
  /**
   * Technical entity name for PayIntV1LegalEntities.
   */
  static override _entityName = 'PayIntV1LegalEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1LegalEntities entity.
   */
  static _keys = ['LegalEntityId'];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use For Financial Consolidation Process.
   * @nullable
   */
  declare useForFinancialConsolidationProcess?: NoYes | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Capital Investment.
   */
  declare initialCapitalInvestment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Legal Representative Name.
   * @nullable
   */
  declare externalLegalRepresentativeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company Representative.
   * @nullable
   */
  declare companyRepresentative?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Representative Name.
   * @nullable
   */
  declare legalRepresentativeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Description.
   * @nullable
   */
  declare primaryContactUrlDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company Country.
   * @nullable
   */
  declare companyCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Software Identification Code.
   * @nullable
   */
  declare softwareIdentificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Is Im.
   * @nullable
   */
  declare primaryContactEmailIsIm?: NoYes | null;
  /**
   * Primary Contact Facebook Is Private.
   * @nullable
   */
  declare primaryContactFacebookIsPrivate?: NoYes | null;
  /**
   * Primary Contact Telex Description.
   * @nullable
   */
  declare primaryContactTelexDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Url.
   * @nullable
   */
  declare primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   * @nullable
   */
  declare primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Naics.
   * @nullable
   */
  declare naics?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trader Number.
   * @nullable
   */
  declare traderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Is Private.
   * @nullable
   */
  declare primaryContactTwitterIsPrivate?: NoYes | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Dnb Routing Number.
   * @nullable
   */
  declare dnbRoutingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounts Office Reference Number.
   * @nullable
   */
  declare accountsOfficeReferenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Telex.
   * @nullable
   */
  declare primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Of Business.
   */
  declare startDateOfBusiness: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Print Innkpp In Address.
   * @nullable
   */
  declare printInnkppInAddress?: NoYes | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfc.
   * @nullable
   */
  declare rfc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cuc.
   * @nullable
   */
  declare cuc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Curp Legal Representative.
   * @nullable
   */
  declare curpLegalRepresentative?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Purpose.
   * @nullable
   */
  declare primaryContactLinkedInPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Curp Number.
   * @nullable
   */
  declare curpNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Extension.
   * @nullable
   */
  declare primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Name.
   * @nullable
   */
  declare phoneticName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Nature.
   * @nullable
   */
  declare legalNature?: LegalNatureIt | null;
  /**
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfc Legal Representative.
   * @nullable
   */
  declare rfcLegalRepresentative?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Purpose.
   * @nullable
   */
  declare primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location Id.
   * @nullable
   */
  declare primaryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Url Purpose.
   * @nullable
   */
  declare primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Personnel.
   * @nullable
   */
  declare accountingPersonnel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * National Registry Number.
   * @nullable
   */
  declare nationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fi Creditor Id.
   * @nullable
   */
  declare fiCreditorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Type.
   * @nullable
   */
  declare companyType?: CompanyTypeMx | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Enterprise Register.
   * @nullable
   */
  declare printEnterpriseRegister?: NoYes | null;
  /**
   * Primary Contact Telex Purpose.
   * @nullable
   */
  declare primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Description.
   * @nullable
   */
  declare primaryContactFaxDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook.
   * @nullable
   */
  declare primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Folder.
   * @nullable
   */
  declare reportFolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person In Charge.
   * @nullable
   */
  declare personInCharge?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Legal Form.
   * @nullable
   */
  declare legalForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * National Classification Of Company Economic Activity.
   * @nullable
   */
  declare nationalClassificationOfCompanyEconomicActivity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Corrective Invoice Starting Date.
   */
  declare printCorrectiveInvoiceStartingDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Item.
   * @nullable
   */
  declare businessItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter.
   * @nullable
   */
  declare primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook Purpose.
   * @nullable
   */
  declare primaryContactFacebookPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use For Financial Elimination Process.
   * @nullable
   */
  declare useForFinancialEliminationProcess?: NoYes | null;
  /**
   * State Inscription.
   * @nullable
   */
  declare stateInscription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Is Private.
   * @nullable
   */
  declare primaryContactLinkedInIsPrivate?: NoYes | null;
  /**
   * Primary Contact Fax Purpose.
   * @nullable
   */
  declare primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Number.
   * @nullable
   */
  declare registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certified Tax Accountant Name.
   * @nullable
   */
  declare certifiedTaxAccountantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commerce Registration.
   * @nullable
   */
  declare commerceRegistration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Corrective Invoice.
   * @nullable
   */
  declare printCorrectiveInvoice?: NoYes | null;

  constructor(_entityApi: PayIntV1LegalEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1LegalEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  useForFinancialConsolidationProcess?: NoYes | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  initialCapitalInvestment: DeserializedType<T, 'Edm.Decimal'>;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  externalLegalRepresentativeName?: DeserializedType<T, 'Edm.String'> | null;
  companyRepresentative?: DeserializedType<T, 'Edm.String'> | null;
  legalRepresentativeName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  companyCountry?: DeserializedType<T, 'Edm.String'> | null;
  softwareIdentificationCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsIm?: NoYes | null;
  primaryContactFacebookIsPrivate?: NoYes | null;
  primaryContactTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  naics?: DeserializedType<T, 'Edm.String'> | null;
  traderNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterIsPrivate?: NoYes | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  timeZone?: Timezone | null;
  dnbRoutingNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountsOfficeReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  startDateOfBusiness: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressTimeZone?: Timezone | null;
  printInnkppInAddress?: NoYes | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  rfc?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  cuc?: DeserializedType<T, 'Edm.String'> | null;
  curpLegalRepresentative?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  curpNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  phoneticName?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  legalNature?: LegalNatureIt | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  rfcLegalRepresentative?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  accountingPersonnel?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  nationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  fiCreditorId?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  companyType?: CompanyTypeMx | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  printEnterpriseRegister?: NoYes | null;
  primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  reportFolder?: DeserializedType<T, 'Edm.String'> | null;
  personInCharge?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  legalForm?: DeserializedType<T, 'Edm.String'> | null;
  nationalClassificationOfCompanyEconomicActivity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  printCorrectiveInvoiceStartingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  businessItem?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  useForFinancialEliminationProcess?: NoYes | null;
  stateInscription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  certifiedTaxAccountantName?: DeserializedType<T, 'Edm.String'> | null;
  commerceRegistration?: DeserializedType<T, 'Edm.String'> | null;
  printCorrectiveInvoice?: NoYes | null;
}
