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
import type { VendorPaymentJournalLinesApi } from './VendorPaymentJournalLinesApi';
import { NoYes } from './NoYes';
import { CustVendSecondaryOfacIndicatorUs } from './CustVendSecondaryOfacIndicatorUs';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { CustVendOriginatingDfiQualifierUs } from './CustVendOriginatingDfiQualifierUs';
import { CustVendForeignExchRefIndicatorUs } from './CustVendForeignExchRefIndicatorUs';
import { Timezone } from './Timezone';
import { CustVendForeignExchIndicatorUs } from './CustVendForeignExchIndicatorUs';
import { CustVendGatewayOperatorOfacIndicatorUs } from './CustVendGatewayOperatorOfacIndicatorUs';
import { VendOutPaymDtazv_InstrKey } from './VendOutPaymDtazv_InstrKey';
import { SettlementType } from './SettlementType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  VendorPaymentMethods,
  VendorPaymentMethodsType
} from './VendorPaymentMethods';
import { Currencies, CurrenciesType } from './Currencies';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  OfficeAddinLegalEntities,
  OfficeAddinLegalEntitiesType
} from './OfficeAddinLegalEntities';
import {
  VendorPaymentJournalHeaders,
  VendorPaymentJournalHeadersType
} from './VendorPaymentJournalHeaders';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';
import {
  VendorPaymentJournalLineSettledInvoices,
  VendorPaymentJournalLineSettledInvoicesType
} from './VendorPaymentJournalLineSettledInvoices';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';

/**
 * This class represents the entity "VendorPaymentJournalLines" of service "d365_metadata".
 */
export class VendorPaymentJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorPaymentJournalLinesType<T>
{
  /**
   * Technical entity name for VendorPaymentJournalLines.
   */
  static override _entityName = 'VendorPaymentJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymentJournalLines entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Id.
   * @nullable
   */
  declare paymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Cashier Display Value.
   * @nullable
   */
  declare postdatedCheckCashierDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Sales Tax Direction From Main Account.
   * @nullable
   */
  declare useSalesTaxDirectionFromMainAccount?: NoYes | null;
  /**
   * Nachaiatofac Secondary Screening Indicator.
   * @nullable
   */
  declare nachaiatofacSecondaryScreeningIndicator?: CustVendSecondaryOfacIndicatorUs | null;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Fin Tag Display Value.
   * @nullable
   */
  declare offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Street.
   * @nullable
   */
  declare remittanceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address District Name.
   * @nullable
   */
  declare remittanceAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Postdated Check Reason For Stop.
   * @nullable
   */
  declare postdatedCheckReasonForStop?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Import Date.
   */
  declare centralBankImportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Remittance Address City.
   * @nullable
   */
  declare remittanceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimensions For Offset Account Display Value.
   * @nullable
   */
  declare defaultDimensionsForOffsetAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Reference.
   * @nullable
   */
  declare paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nachaiat Receiving Dfi Qualifier.
   * @nullable
   */
  declare nachaiatReceivingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address State.
   * @nullable
   */
  declare remittanceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Number.
   * @nullable
   */
  declare checkNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Number.
   * @nullable
   */
  declare postdatedCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address Zip Code.
   * @nullable
   */
  declare remittanceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marked Invoice.
   * @nullable
   */
  declare markedInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  declare contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Account.
   * @nullable
   */
  declare feeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nachaiat Foreign Exchange Reference Indicator.
   * @nullable
   */
  declare nachaiatForeignExchangeReferenceIndicator?: CustVendForeignExchRefIndicatorUs | null;
  /**
   * Remittance Address County.
   * @nullable
   */
  declare remittanceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Replacement Comments.
   * @nullable
   */
  declare postdatedCheckReplacementComments?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Postdated Check Bank Branch.
   * @nullable
   */
  declare postdatedCheckBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Bank Account Id.
   * @nullable
   */
  declare thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Purpose.
   */
  declare categoryPurpose: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Restricted Forwarding.
   * @nullable
   */
  declare restrictedForwarding?: NoYes | null;
  /**
   * Marked Invoice Company.
   * @nullable
   */
  declare markedInvoiceCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Country Iso Code.
   * @nullable
   */
  declare remittanceAddressCountryIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remittance Location Id.
   * @nullable
   */
  declare remittanceLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Is Replacement Check.
   * @nullable
   */
  declare postdatedCheckIsReplacementCheck?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Bank Name.
   * @nullable
   */
  declare postdatedCheckBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Secondary Exchange Rate.
   */
  declare secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Central Bank Purpose Text.
   * @nullable
   */
  declare centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Payment Method Name.
   * @nullable
   */
  declare paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Time Zone.
   * @nullable
   */
  declare remittanceAddressTimeZone?: Timezone | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Description.
   * @nullable
   */
  declare remittanceAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Local Instrument.
   */
  declare localInstrument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Valid From.
   */
  declare remittanceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Postdated Check Original Check Number.
   * @nullable
   */
  declare postdatedCheckOriginalCheckNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Nachaiat Foreign Exchange Indicator.
   * @nullable
   */
  declare nachaiatForeignExchangeIndicator?: CustVendForeignExchIndicatorUs | null;
  /**
   * New Journal Batch Number.
   * @nullable
   */
  declare newJournalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Valid To.
   */
  declare remittanceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nachaiatofac Screening Indicator.
   * @nullable
   */
  declare nachaiatofacScreeningIndicator?: CustVendGatewayOperatorOfacIndicatorUs | null;
  /**
   * Error Code Payment.
   * @nullable
   */
  declare errorCodePayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Stop Payment.
   * @nullable
   */
  declare postdatedCheckStopPayment?: NoYes | null;
  /**
   * Nachaiat Foreign Exchange Reference.
   * @nullable
   */
  declare nachaiatForeignExchangeReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Remittance Address Latitude.
   */
  declare remittanceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Full Primary Remittance Address.
   * @nullable
   */
  declare fullPrimaryRemittanceAddress?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Bearer.
   */
  declare chargeBearer: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address Country.
   * @nullable
   */
  declare remittanceAddressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nachaiat Originating Dfi Qualifier.
   * @nullable
   */
  declare nachaiatOriginatingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  /**
   * Calculate Withholding Tax.
   * @nullable
   */
  declare calculateWithholdingTax?: NoYes | null;
  /**
   * Postdated Check Salesperson Display Value.
   * @nullable
   */
  declare postdatedCheckSalespersonDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Transaction Text.
   * @nullable
   */
  declare offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Maturity Date.
   */
  declare postdatedCheckMaturityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Instruction Key 4.
   * @nullable
   */
  declare instructionKey4?: VendOutPaymDtazv_InstrKey | null;
  /**
   * Instruction Key 1.
   * @nullable
   */
  declare instructionKey1?: VendOutPaymDtazv_InstrKey | null;
  /**
   * Instruction Key 2.
   * @nullable
   */
  declare instructionKey2?: VendOutPaymDtazv_InstrKey | null;
  /**
   * Instruction Key 3.
   * @nullable
   */
  declare instructionKey3?: VendOutPaymDtazv_InstrKey | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Received Date.
   */
  declare postdatedCheckReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Dimensions For Account Display Value.
   * @nullable
   */
  declare defaultDimensionsForAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remittance Address Longitude.
   */
  declare remittanceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPaymentJournalLineOffsetAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPaymentJournalLineAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorPaymentMethods} entity.
   */
  declare vendorPaymentJournalLinePaymentMethodEntityRole?: VendorPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare vendorPaymentJournalLineAccountDefaultDimensionRole?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare vendPaymentJournalLineEntityCompany?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorPaymentJournalHeaders} entity.
   */
  declare vendorPaymentJournalHeader?: VendorPaymentJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare vendorPaymentJournalLineOffsetAccountDefaultDimensionRole?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLineSettledInvoices} entity.
   */
  declare vendorPaymentJournalLineEntityRole: VendorPaymentJournalLineSettledInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];

  constructor(_entityApi: VendorPaymentJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymentJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckCashierDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  useSalesTaxDirectionFromMainAccount?: NoYes | null;
  nachaiatofacSecondaryScreeningIndicator?: CustVendSecondaryOfacIndicatorUs | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  accountType?: LedgerJournalAcType | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckReasonForStop?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  centralBankImportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  remittanceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionsForOffsetAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  nachaiatReceivingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  checkNumber?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  markedInvoice?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  feeAccount?: DeserializedType<T, 'Edm.String'> | null;
  nachaiatForeignExchangeReferenceIndicator?: CustVendForeignExchRefIndicatorUs | null;
  remittanceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckReplacementComments?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  categoryPurpose: DeserializedType<T, 'Edm.Int64'>;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  restrictedForwarding?: NoYes | null;
  markedInvoiceCompany?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  remittanceLocationId?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckIsReplacementCheck?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceLevel: DeserializedType<T, 'Edm.Int64'>;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckBankName?: DeserializedType<T, 'Edm.String'> | null;
  secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressTimeZone?: Timezone | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  localInstrument: DeserializedType<T, 'Edm.Int64'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postdatedCheckOriginalCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  nachaiatForeignExchangeIndicator?: CustVendForeignExchIndicatorUs | null;
  newJournalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nachaiatofacScreeningIndicator?: CustVendGatewayOperatorOfacIndicatorUs | null;
  errorCodePayment?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckStopPayment?: NoYes | null;
  nachaiatForeignExchangeReference?: DeserializedType<T, 'Edm.String'> | null;
  isPrepayment?: NoYes | null;
  remittanceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  fullPrimaryRemittanceAddress?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeBearer: DeserializedType<T, 'Edm.Int64'>;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressCountry?: DeserializedType<T, 'Edm.String'> | null;
  nachaiatOriginatingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  calculateWithholdingTax?: NoYes | null;
  postdatedCheckSalespersonDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckMaturityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  instructionKey4?: VendOutPaymDtazv_InstrKey | null;
  instructionKey1?: VendOutPaymDtazv_InstrKey | null;
  instructionKey2?: VendOutPaymDtazv_InstrKey | null;
  instructionKey3?: VendOutPaymDtazv_InstrKey | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionsForAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  remittanceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  settleVoucher?: SettlementType | null;
  vendorPaymentJournalLineOffsetAccountCombination?: DimensionCombinationsType<T> | null;
  vendorPaymentJournalLineAccountCombination?: DimensionCombinationsType<T> | null;
  vendorPaymentJournalLinePaymentMethodEntityRole?: VendorPaymentMethodsType<T> | null;
  currency?: CurrenciesType<T> | null;
  vendorPaymentJournalLineAccountDefaultDimensionRole?: DimensionSetsType<T> | null;
  vendPaymentJournalLineEntityCompany?: OfficeAddinLegalEntitiesType<T> | null;
  vendorPaymentJournalHeader?: VendorPaymentJournalHeadersType<T> | null;
  vendorPaymentJournalLineOffsetAccountDefaultDimensionRole?: DimensionSetsType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
  vendorPaymentJournalLineEntityRole: VendorPaymentJournalLineSettledInvoicesType<T>[];
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
}
