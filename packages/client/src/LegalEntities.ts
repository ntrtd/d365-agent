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
import type { LegalEntitiesApi } from './LegalEntitiesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { LegalNatureIt } from './LegalNatureIt';
import { CompanyTypeMx } from './CompanyTypeMx';
import { SysLocalizationCountryRegionCode } from './SysLocalizationCountryRegionCode';
import {
  RegulatoryEstablishmentDetails,
  RegulatoryEstablishmentDetailsType
} from './RegulatoryEstablishmentDetails';
import {
  LedgerReportingCurrencyAdjustmentJournalLines,
  LedgerReportingCurrencyAdjustmentJournalLinesType
} from './LedgerReportingCurrencyAdjustmentJournalLines';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import {
  AssetLeaseLedgerJournalHeaders,
  AssetLeaseLedgerJournalHeadersType
} from './AssetLeaseLedgerJournalHeaders';
import {
  LedgerJournalHeaders,
  LedgerJournalHeadersType
} from './LedgerJournalHeaders';
import {
  LedgerJournalHeadersCds,
  LedgerJournalHeadersCdsType
} from './LedgerJournalHeadersCds';
import {
  LegalEntityContacts,
  LegalEntityContactsType
} from './LegalEntityContacts';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  ProjectEmplForecasts,
  ProjectEmplForecastsType
} from './ProjectEmplForecasts';
import {
  ProjectExpenseForecasts,
  ProjectExpenseForecastsType
} from './ProjectExpenseForecasts';
import {
  AllocationRuleDestinations,
  AllocationRuleDestinationsType
} from './AllocationRuleDestinations';
import {
  RAssetJournalHeaders,
  RAssetJournalHeadersType
} from './RAssetJournalHeaders';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  LedgerEliminationRules,
  LedgerEliminationRulesType
} from './LedgerEliminationRules';
import {
  AssetJournalHeaders,
  AssetJournalHeadersType
} from './AssetJournalHeaders';
import {
  RAssetJournalLines,
  RAssetJournalLinesType
} from './RAssetJournalLines';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';
import { AssetJournalV2, AssetJournalV2Type } from './AssetJournalV2';
import {
  MainAccountCompanies,
  MainAccountCompaniesType
} from './MainAccountCompanies';
import { AssetJournalLines, AssetJournalLinesType } from './AssetJournalLines';
import {
  LedgerAccountAliases,
  LedgerAccountAliasesType
} from './LedgerAccountAliases';
import {
  ProjectFeeForecasts,
  ProjectFeeForecastsType
} from './ProjectFeeForecasts';
import {
  LedgerReportingCurrencyAdjustmentJournalHeaders,
  LedgerReportingCurrencyAdjustmentJournalHeadersType
} from './LedgerReportingCurrencyAdjustmentJournalHeaders';
import { VatNumTables, VatNumTablesType } from './VatNumTables';

/**
 * This class represents the entity "LegalEntities" of service "d365_metadata".
 */
export class LegalEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LegalEntitiesType<T>
{
  /**
   * Technical entity name for LegalEntities.
   */
  static override _entityName = 'LegalEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LegalEntities entity.
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
  /**
   * Localization Country Region Code.
   * @nullable
   */
  declare localizationCountryRegionCode?: SysLocalizationCountryRegionCode | null;
  /**
   * Vat On Customer Behalf.
   * @nullable
   */
  declare vatOnCustomerBehalf?: NoYes | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Margin Scheme.
   * @nullable
   */
  declare profitMarginScheme?: NoYes | null;
  /**
   * Vat Refund.
   * @nullable
   */
  declare vatRefund?: NoYes | null;
  /**
   * Import Vat Num.
   * @nullable
   */
  declare importVatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RegulatoryEstablishmentDetails} entity.
   */
  declare establishmentDetails: RegulatoryEstablishmentDetails<T>[];
  /**
   * One-to-one navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalLines} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLineCompany?: LedgerReportingCurrencyAdjustmentJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalLines} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLine?: LedgerReportingCurrencyAdjustmentJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsCompany?: LedgerJournalCdsLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsOffsetCompany?: LedgerJournalCdsLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalCdsLine?: LedgerJournalCdsLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetLeaseLedgerJournalHeaders} entity.
   */
  declare omLegalEntityLegalEntity?: AssetLeaseLedgerJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalHeaders} entity.
   */
  declare ledgerJournalHeader?: LedgerJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalHeadersCds} entity.
   */
  declare ledgerJournalHeaderCds?: LedgerJournalHeadersCds<T> | null;
  /**
   * One-to-many navigation property to the {@link LegalEntityContacts} entity.
   */
  declare legalEntityContacts: LegalEntityContacts<T>[];
  /**
   * One-to-one navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare ledgerJournalLineCompany?: AssetLeaseLedgerJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare ledgerJournalLineOffsetCompany?: AssetLeaseLedgerJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans?: JournalTrans<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectEmplForecasts} entity.
   */
  declare projectEmplForecast?: ProjectEmplForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectExpenseForecasts} entity.
   */
  declare projectExpenseForecast?: ProjectExpenseForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link AllocationRuleDestinations} entity.
   */
  declare allocationRuleDestination?: AllocationRuleDestinations<T> | null;
  /**
   * One-to-one navigation property to the {@link RAssetJournalHeaders} entity.
   */
  declare rAssetJournalHeader?: RAssetJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineEntityCompany?: LedgerJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineEntityOffsetCompany?: LedgerJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLine?: LedgerJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerEliminationRules} entity.
   */
  declare ledgerEliminationRule?: LedgerEliminationRules<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetJournalHeaders} entity.
   */
  declare assetJournalHeader?: AssetJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link RAssetJournalLines} entity.
   */
  declare rAssetJournalLine?: RAssetJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare expenseJournalLine?: ExpenseJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetJournalV2} entity.
   */
  declare assetJournalV2Entity?: AssetJournalV2<T> | null;
  /**
   * One-to-one navigation property to the {@link MainAccountCompanies} entity.
   */
  declare mainAccountCompany?: MainAccountCompanies<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetJournalLines} entity.
   */
  declare assetJournalLine?: AssetJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerAccountAliases} entity.
   */
  declare ledgerAccountAlias?: LedgerAccountAliases<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectFeeForecasts} entity.
   */
  declare projectFeeForecast?: ProjectFeeForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalHeaders} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalHeader?: LedgerReportingCurrencyAdjustmentJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link VatNumTables} entity.
   */
  declare taxVatNumsForImportVatNum?: VatNumTables<T> | null;
  /**
   * One-to-one navigation property to the {@link VatNumTables} entity.
   */
  declare taxVatNumsForVatNum?: VatNumTables<T> | null;

  constructor(_entityApi: LegalEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LegalEntitiesType<
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
  localizationCountryRegionCode?: SysLocalizationCountryRegionCode | null;
  vatOnCustomerBehalf?: NoYes | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  profitMarginScheme?: NoYes | null;
  vatRefund?: NoYes | null;
  importVatNum?: DeserializedType<T, 'Edm.String'> | null;
  establishmentDetails: RegulatoryEstablishmentDetailsType<T>[];
  ledgerReportingCurrencyAdjustmentJournalLineCompany?: LedgerReportingCurrencyAdjustmentJournalLinesType<T> | null;
  ledgerReportingCurrencyAdjustmentJournalLine?: LedgerReportingCurrencyAdjustmentJournalLinesType<T> | null;
  ledgerJournalLineCdsCompany?: LedgerJournalCdsLinesType<T> | null;
  ledgerJournalLineCdsOffsetCompany?: LedgerJournalCdsLinesType<T> | null;
  ledgerJournalCdsLine?: LedgerJournalCdsLinesType<T> | null;
  omLegalEntityLegalEntity?: AssetLeaseLedgerJournalHeadersType<T> | null;
  ledgerJournalHeader?: LedgerJournalHeadersType<T> | null;
  ledgerJournalHeaderCds?: LedgerJournalHeadersCdsType<T> | null;
  legalEntityContacts: LegalEntityContactsType<T>[];
  ledgerJournalLineCompany?: AssetLeaseLedgerJournalLinesType<T> | null;
  ledgerJournalLineOffsetCompany?: AssetLeaseLedgerJournalLinesType<T> | null;
  journalTrans?: JournalTransType<T> | null;
  projectEmplForecast?: ProjectEmplForecastsType<T> | null;
  projectExpenseForecast?: ProjectExpenseForecastsType<T> | null;
  allocationRuleDestination?: AllocationRuleDestinationsType<T> | null;
  rAssetJournalHeader?: RAssetJournalHeadersType<T> | null;
  ledgerJournalLineEntityCompany?: LedgerJournalLinesType<T> | null;
  ledgerJournalLineEntityOffsetCompany?: LedgerJournalLinesType<T> | null;
  ledgerJournalLine?: LedgerJournalLinesType<T> | null;
  ledgerEliminationRule?: LedgerEliminationRulesType<T> | null;
  assetJournalHeader?: AssetJournalHeadersType<T> | null;
  rAssetJournalLine?: RAssetJournalLinesType<T> | null;
  expenseJournalLine?: ExpenseJournalLinesType<T> | null;
  assetJournalV2Entity?: AssetJournalV2Type<T> | null;
  mainAccountCompany?: MainAccountCompaniesType<T> | null;
  assetJournalLine?: AssetJournalLinesType<T> | null;
  ledgerAccountAlias?: LedgerAccountAliasesType<T> | null;
  projectFeeForecast?: ProjectFeeForecastsType<T> | null;
  ledgerReportingCurrencyAdjustmentJournalHeader?: LedgerReportingCurrencyAdjustmentJournalHeadersType<T> | null;
  taxVatNumsForImportVatNum?: VatNumTablesType<T> | null;
  taxVatNumsForVatNum?: VatNumTablesType<T> | null;
}
