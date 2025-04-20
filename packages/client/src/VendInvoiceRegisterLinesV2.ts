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
import type { VendInvoiceRegisterLinesV2Api } from './VendInvoiceRegisterLinesV2Api';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Listcode } from './Listcode';
import { LedgerTransType } from './LedgerTransType';
import { NoYes } from './NoYes';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { Timezone } from './Timezone';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  VendInvoiceRegisterHeaders,
  VendInvoiceRegisterHeadersType
} from './VendInvoiceRegisterHeaders';

/**
 * This class represents the entity "VendInvoiceRegisterLinesV2" of service "d365_metadata".
 */
export class VendInvoiceRegisterLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceRegisterLinesV2Type<T>
{
  /**
   * Technical entity name for VendInvoiceRegisterLinesV2.
   */
  static override _entityName = 'VendInvoiceRegisterLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceRegisterLinesV2 entity.
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
   * Remittance Address Country.
   * @nullable
   */
  declare remittanceAddressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Remittance Address District Name.
   * @nullable
   */
  declare remittanceAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address City.
   * @nullable
   */
  declare remittanceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Transaction Text.
   * @nullable
   */
  declare offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Longitude.
   */
  declare remittanceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address Latitude.
   */
  declare remittanceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Valid To.
   */
  declare remittanceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Remittance Address Description.
   * @nullable
   */
  declare remittanceAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Declaration Id.
   * @nullable
   */
  declare invoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address State.
   * @nullable
   */
  declare remittanceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Valid From.
   */
  declare remittanceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Street.
   * @nullable
   */
  declare remittanceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Withholding Tax Calculate.
   * @nullable
   */
  declare isWithholdingTaxCalculate?: NoYes | null;
  /**
   * Credit.
   */
  declare credit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Debit.
   */
  declare debit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Series Mx.
   * @nullable
   */
  declare invoiceSeriesMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Full Primary Remittance Address.
   * @nullable
   */
  declare fullPrimaryRemittanceAddress?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Uuid.
   * @nullable
   */
  declare uuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Location Id.
   * @nullable
   */
  declare remittanceAddressLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Address Country Iso Code.
   * @nullable
   */
  declare remittanceAddressCountryIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Approver Number.
   * @nullable
   */
  declare approverNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Gsthst Tax Type.
   * @nullable
   */
  declare gsthstTaxType?: GsthstTaxTypeCa | null;
  /**
   * Remittance Address Zip Code.
   * @nullable
   */
  declare remittanceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Of Operation.
   * @nullable
   */
  declare typeOfOperation?: VendorOperationTypeMx | null;
  /**
   * Cash Discount.
   * @nullable
   */
  declare cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Fin Tag Display Value.
   * @nullable
   */
  declare offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address Time Zone.
   * @nullable
   */
  declare remittanceAddressTimeZone?: Timezone | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document.
   * @nullable
   */
  declare document?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address County.
   * @nullable
   */
  declare remittanceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendInvoiceRegisterLineV2EntityOffsetAccountDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VendInvoiceRegisterHeaders} entity.
   */
  declare vendInvoiceRegisterHeader?: VendInvoiceRegisterHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendInvoiceRegisterLineV2EntityAccountDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: VendInvoiceRegisterLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceRegisterLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressCountry?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountType?: LedgerJournalAcType | null;
  remittanceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  transactionType?: LedgerTransType | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  remittanceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  isWithholdingTaxCalculate?: NoYes | null;
  credit: DeserializedType<T, 'Edm.Decimal'>;
  debit: DeserializedType<T, 'Edm.Decimal'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  invoiceSeriesMx?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fullPrimaryRemittanceAddress?: DeserializedType<T, 'Edm.String'> | null;
  uuid?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  remittanceAddressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  approverNumber?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  overrideSalesTax?: NoYes | null;
  accountType?: LedgerJournalAcType | null;
  gsthstTaxType?: GsthstTaxTypeCa | null;
  remittanceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  typeOfOperation?: VendorOperationTypeMx | null;
  cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressTimeZone?: Timezone | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  document?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceRegisterLineV2EntityOffsetAccountDimensionCombination?: DimensionCombinationsType<T> | null;
  vendInvoiceRegisterHeader?: VendInvoiceRegisterHeadersType<T> | null;
  vendInvoiceRegisterLineV2EntityAccountDimensionCombination?: DimensionCombinationsType<T> | null;
}
