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
import type { BusinessDocumentSalesInvoiceLineItemsApi } from './BusinessDocumentSalesInvoiceLineItemsApi';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';
import {
  BusinessDocumentNonStockedPackingSlipLines,
  BusinessDocumentNonStockedPackingSlipLinesType
} from './BusinessDocumentNonStockedPackingSlipLines';
import {
  BusinessDocumentDocuRefs,
  BusinessDocumentDocuRefsType
} from './BusinessDocumentDocuRefs';
import {
  BusinessDocumentStockedPackingSlipLinesV3,
  BusinessDocumentStockedPackingSlipLinesV3Type
} from './BusinessDocumentStockedPackingSlipLinesV3';
import {
  BusinessDocumentInvoicedPackingSlipLinesV3,
  BusinessDocumentInvoicedPackingSlipLinesV3Type
} from './BusinessDocumentInvoicedPackingSlipLinesV3';
import {
  BusinessDocumentInvoicedPackingSlipLinesV2,
  BusinessDocumentInvoicedPackingSlipLinesV2Type
} from './BusinessDocumentInvoicedPackingSlipLinesV2';
import {
  BusinessDocumentNonStockedPackingSlipLinesV2,
  BusinessDocumentNonStockedPackingSlipLinesV2Type
} from './BusinessDocumentNonStockedPackingSlipLinesV2';
import {
  BusinessDocumentNonStockedPackingSlipLinesV3,
  BusinessDocumentNonStockedPackingSlipLinesV3Type
} from './BusinessDocumentNonStockedPackingSlipLinesV3';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';
import {
  BusinessDocumentStockedPackingSlipLinesV2,
  BusinessDocumentStockedPackingSlipLinesV2Type
} from './BusinessDocumentStockedPackingSlipLinesV2';
import {
  BusinessDocumentInvoicedPackingSlipLines,
  BusinessDocumentInvoicedPackingSlipLinesType
} from './BusinessDocumentInvoicedPackingSlipLines';
import {
  BusinessDocumentMarkupTransactions,
  BusinessDocumentMarkupTransactionsType
} from './BusinessDocumentMarkupTransactions';
import {
  BusinessDocumentStockedPackingSlipLines,
  BusinessDocumentStockedPackingSlipLinesType
} from './BusinessDocumentStockedPackingSlipLines';

/**
 * This class represents the entity "BusinessDocumentSalesInvoiceLineItems" of service "d365_metadata".
 */
export class BusinessDocumentSalesInvoiceLineItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentSalesInvoiceLineItemsType<T>
{
  /**
   * Technical entity name for BusinessDocumentSalesInvoiceLineItems.
   */
  static override _entityName = 'BusinessDocumentSalesInvoiceLineItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentSalesInvoiceLineItems entity.
   */
  static _keys = [
    'dataAreaId',
    'InvoiceId',
    'InvoiceDate',
    'LineCreationSequenceNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Amount Tax Mst.
   */
  declare lineAmountTaxMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Rec Id.
   */
  declare parentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Tax.
   */
  declare lineAmountTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig Sales Id.
   * @nullable
   */
  declare origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Disc.
   */
  declare lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disc Percent.
   */
  declare discPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Item Description.
   * @nullable
   */
  declare externalItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Invoice Trans Rec Id.
   */
  declare custInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Bar Code.
   * @nullable
   */
  declare itemBarCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Invoice Trans Table Id.
   */
  declare custInvoiceTransTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Line Disc.
   */
  declare sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reverse Charge.
   */
  declare isReverseCharge: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Code Reason It.
   * @nullable
   */
  declare taxExemptCodeReasonIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price Net.
   */
  declare unitPriceNet: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Name.
   * @nullable
   */
  declare taxName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Type It.
   * @nullable
   */
  declare taxTypeIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Mst.
   */
  declare lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Name.
   * @nullable
   */
  declare itemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Rate.
   */
  declare taxRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Country Region Type.
   * @nullable
   */
  declare taxCountryRegionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentNonStockedPackingSlipLines} entity.
   */
  declare businessDocumentNonStockedPackingSlipLine: BusinessDocumentNonStockedPackingSlipLines<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentDocuRefs} entity.
   */
  declare businessDocumentDocuRef: BusinessDocumentDocuRefs<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentStockedPackingSlipLinesV3} entity.
   */
  declare businessDocumentStockedPackingSlipLineV3: BusinessDocumentStockedPackingSlipLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentInvoicedPackingSlipLinesV3} entity.
   */
  declare businessDocumentInvoicedPackingSlipLineV3: BusinessDocumentInvoicedPackingSlipLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentInvoicedPackingSlipLinesV2} entity.
   */
  declare businessDocumentInvoicedPackingSlipLineV2: BusinessDocumentInvoicedPackingSlipLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentNonStockedPackingSlipLinesV2} entity.
   */
  declare businessDocumentNonStockedPackingSlipLineV2: BusinessDocumentNonStockedPackingSlipLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentNonStockedPackingSlipLinesV3} entity.
   */
  declare businessDocumentNonStockedPackingSlipLineV3: BusinessDocumentNonStockedPackingSlipLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentStockedPackingSlipLinesV2} entity.
   */
  declare businessDocumentStockedPackingSlipLineV2: BusinessDocumentStockedPackingSlipLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentInvoicedPackingSlipLines} entity.
   */
  declare businessDocumentInvoicedPackingSlipLine: BusinessDocumentInvoicedPackingSlipLines<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentMarkupTransactions} entity.
   */
  declare businessDocumentMarkupTransaction: BusinessDocumentMarkupTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentStockedPackingSlipLines} entity.
   */
  declare businessDocumentStockedPackingSlipLine: BusinessDocumentStockedPackingSlipLines<T>[];

  constructor(_entityApi: BusinessDocumentSalesInvoiceLineItemsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentSalesInvoiceLineItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  lineAmountTaxMst: DeserializedType<T, 'Edm.Decimal'>;
  parentRecId: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountTax: DeserializedType<T, 'Edm.Decimal'>;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  discPercent: DeserializedType<T, 'Edm.Decimal'>;
  externalItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  itemBarCode?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceTransTableId: DeserializedType<T, 'Edm.Int32'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  isReverseCharge: DeserializedType<T, 'Edm.Int32'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptCodeReasonIt?: DeserializedType<T, 'Edm.String'> | null;
  unitPriceNet: DeserializedType<T, 'Edm.Decimal'>;
  taxName?: DeserializedType<T, 'Edm.String'> | null;
  taxTypeIt?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  itemName?: DeserializedType<T, 'Edm.String'> | null;
  taxRate: DeserializedType<T, 'Edm.Decimal'>;
  taxCountryRegionType?: DeserializedType<T, 'Edm.String'> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
  businessDocumentNonStockedPackingSlipLine: BusinessDocumentNonStockedPackingSlipLinesType<T>[];
  businessDocumentDocuRef: BusinessDocumentDocuRefsType<T>[];
  businessDocumentStockedPackingSlipLineV3: BusinessDocumentStockedPackingSlipLinesV3Type<T>[];
  businessDocumentInvoicedPackingSlipLineV3: BusinessDocumentInvoicedPackingSlipLinesV3Type<T>[];
  businessDocumentInvoicedPackingSlipLineV2: BusinessDocumentInvoicedPackingSlipLinesV2Type<T>[];
  businessDocumentNonStockedPackingSlipLineV2: BusinessDocumentNonStockedPackingSlipLinesV2Type<T>[];
  businessDocumentNonStockedPackingSlipLineV3: BusinessDocumentNonStockedPackingSlipLinesV3Type<T>[];
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
  businessDocumentStockedPackingSlipLineV2: BusinessDocumentStockedPackingSlipLinesV2Type<T>[];
  businessDocumentInvoicedPackingSlipLine: BusinessDocumentInvoicedPackingSlipLinesType<T>[];
  businessDocumentMarkupTransaction: BusinessDocumentMarkupTransactionsType<T>[];
  businessDocumentStockedPackingSlipLine: BusinessDocumentStockedPackingSlipLinesType<T>[];
}
