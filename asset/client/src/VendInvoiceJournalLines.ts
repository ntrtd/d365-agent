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
import type { VendInvoiceJournalLinesApi } from './VendInvoiceJournalLinesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Listcode } from './Listcode';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { LedgerTransType } from './LedgerTransType';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { ItmCostArea } from './ItmCostArea';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  VendInvoiceJournalHeaders,
  VendInvoiceJournalHeadersType
} from './VendInvoiceJournalHeaders';
import {
  OfficeAddinLegalEntities,
  OfficeAddinLegalEntitiesType
} from './OfficeAddinLegalEntities';
import { Currencies, CurrenciesType } from './Currencies';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  TaxItemGroupHeadings,
  TaxItemGroupHeadingsType
} from './TaxItemGroupHeadings';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';

/**
 * This class represents the entity "VendInvoiceJournalLines" of service "d365_metadata".
 */
export class VendInvoiceJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceJournalLinesType<T>
{
  /**
   * Technical entity name for VendInvoiceJournalLines.
   */
  static override _entityName = 'VendInvoiceJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceJournalLines entity.
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
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit.
   */
  declare credit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Book Id.
   * @nullable
   */
  declare bookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address District Name.
   * @nullable
   */
  declare remittanceAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remittance Address Country Iso Code.
   * @nullable
   */
  declare remittanceAddressCountryIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remittance Address County.
   * @nullable
   */
  declare remittanceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gsthst Tax Type.
   * @nullable
   */
  declare gsthstTaxType?: GsthstTaxTypeCa | null;
  /**
   * Remittance Address Longitude.
   */
  declare remittanceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document.
   * @nullable
   */
  declare document?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Approver Number.
   * @nullable
   */
  declare approverNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uuid.
   * @nullable
   */
  declare uuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Zip Code.
   * @nullable
   */
  declare remittanceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Trans Type.
   * @nullable
   */
  declare assetTransType?: AssetTransTypeJournal | null;
  /**
   * Remittance Address Street.
   * @nullable
   */
  declare remittanceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Primary Remittance Address.
   * @nullable
   */
  declare fullPrimaryRemittanceAddress?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remittance Address Valid To.
   */
  declare remittanceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount.
   * @nullable
   */
  declare cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address City.
   * @nullable
   */
  declare remittanceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit.
   */
  declare debit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address Latitude.
   */
  declare remittanceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Default Dimension Display Value.
   * @nullable
   */
  declare offsetDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Offset Transaction Text.
   * @nullable
   */
  declare offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Fin Tag Display Value.
   * @nullable
   */
  declare offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Location Id.
   * @nullable
   */
  declare remittanceAddressLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Fields.
   */
  declare tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Remittance Address State.
   * @nullable
   */
  declare remittanceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Description.
   * @nullable
   */
  declare remittanceAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address Valid From.
   */
  declare remittanceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Country.
   * @nullable
   */
  declare remittanceAddressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Time Zone.
   * @nullable
   */
  declare remittanceAddressTimeZone?: Timezone | null;
  /**
   * Invoice Declaration Id.
   * @nullable
   */
  declare invoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Withholding Tax Calculate.
   * @nullable
   */
  declare isWithholdingTaxCalculate?: NoYes | null;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Vend Bank Account Id.
   * @nullable
   */
  declare custVendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Of Operation.
   * @nullable
   */
  declare typeOfOperation?: VendorOperationTypeMx | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Cost Type Id.
   * @nullable
   */
  declare itmCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Cost Area.
   * @nullable
   */
  declare itmCostArea?: ItmCostArea | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendInvoiceJournalLineEntityOffsetAccountDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VendInvoiceJournalHeaders} entity.
   */
  declare vendInvoiceJournalHeader?: VendInvoiceJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendInvoiceJournalLineEntityAccountDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare vendInvoiceJournalLineEntityOffsetCompany?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare vendInvoiceJournalLineEntityCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare vendInvoiceJournalLineEntitySalesTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare vendInvoiceJournalLineEntityCompany?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxItemGroupHeadings} entity.
   */
  declare vendInvoiceJournalLineEntityItemSalesTaxGroup?: TaxItemGroupHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare fixedAssetBookV2?: FixedAssetBooksV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare vendInvoiceJourLineEntityDefaultDim?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare vendInvoiceJourLineEntityOffsetDefaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;

  constructor(_entityApi: VendInvoiceJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  credit: DeserializedType<T, 'Edm.Decimal'>;
  offsetAccountType?: LedgerJournalAcType | null;
  bookId?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  gsthstTaxType?: GsthstTaxTypeCa | null;
  remittanceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  document?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionType?: LedgerTransType | null;
  approverNumber?: DeserializedType<T, 'Edm.String'> | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  uuid?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  assetTransType?: AssetTransTypeJournal | null;
  remittanceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  fullPrimaryRemittanceAddress?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  debit: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  offsetDefaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  remittanceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCountry?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressTimeZone?: Timezone | null;
  invoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  isWithholdingTaxCalculate?: NoYes | null;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  custVendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  typeOfOperation?: VendorOperationTypeMx | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  approved?: NoYes | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  itmCostArea?: ItmCostArea | null;
  vendInvoiceJournalLineEntityOffsetAccountDimensionCombination?: DimensionCombinationsType<T> | null;
  vendInvoiceJournalHeader?: VendInvoiceJournalHeadersType<T> | null;
  vendInvoiceJournalLineEntityAccountDimensionCombination?: DimensionCombinationsType<T> | null;
  vendInvoiceJournalLineEntityOffsetCompany?: OfficeAddinLegalEntitiesType<T> | null;
  vendInvoiceJournalLineEntityCurrency?: CurrenciesType<T> | null;
  vendInvoiceJournalLineEntitySalesTaxGroup?: TaxGroupsType<T> | null;
  vendInvoiceJournalLineEntityCompany?: OfficeAddinLegalEntitiesType<T> | null;
  vendInvoiceJournalLineEntityItemSalesTaxGroup?: TaxItemGroupHeadingsType<T> | null;
  fixedAssetBookV2?: FixedAssetBooksV2Type<T> | null;
  vendInvoiceJourLineEntityDefaultDim?: DimensionSetsType<T> | null;
  vendInvoiceJourLineEntityOffsetDefaultDimension?: DimensionSetsType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
}
