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
import type { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  FreeTextInvoiceLines,
  FreeTextInvoiceLinesType
} from './FreeTextInvoiceLines';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';

/**
 * This class represents the entity "TaxItemGroupHeadings" of service "d365_metadata".
 */
export class TaxItemGroupHeadings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxItemGroupHeadingsType<T>
{
  /**
   * Technical entity name for TaxItemGroupHeadings.
   */
  static override _entityName = 'TaxItemGroupHeadings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxItemGroupHeadings entity.
   */
  static _keys = ['dataAreaId', 'TaxItemGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Item Group.
   */
  declare taxItemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineItemSalesTaxGroup: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsItemSalesTaxGroup: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare ledgerJournalLineItemSalesTaxGroup: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineTaxItemGroupEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineEntityItemSalesTaxGroup: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceLines} entity.
   */
  declare freeTextInvoiceLineTaxItemGroup: FreeTextInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];

  constructor(_entityApi: TaxItemGroupHeadingsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxItemGroupHeadingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxItemGroup: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceJournalLineItemSalesTaxGroup: VendInvoiceJournalLinesType<T>[];
  ledgerJournalLineCdsItemSalesTaxGroup: LedgerJournalCdsLinesType<T>[];
  ledgerJournalLineItemSalesTaxGroup: AssetLeaseLedgerJournalLinesType<T>[];
  customerPaymentJournalLineTaxItemGroupEntity: CustomerPaymentJournalLinesType<T>[];
  ledgerJournalLineEntityItemSalesTaxGroup: LedgerJournalLinesType<T>[];
  freeTextInvoiceLineTaxItemGroup: FreeTextInvoiceLinesType<T>[];
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
}
