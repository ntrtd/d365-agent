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
import type { BusinessDocumentTaxTransactionsApi } from './BusinessDocumentTaxTransactionsApi';
import { NoYes } from './NoYes';
import { TaxExemptCodeReasonIt } from './TaxExemptCodeReasonIt';
import { TaxTypeIt } from './TaxTypeIt';
import { CountryRegionType } from './CountryRegionType';
import {
  DocumentProjInvoiceCostLines,
  DocumentProjInvoiceCostLinesType
} from './DocumentProjInvoiceCostLines';
import {
  DocumentProjInvoiceOnAccLines,
  DocumentProjInvoiceOnAccLinesType
} from './DocumentProjInvoiceOnAccLines';
import {
  DocumentProjInvoiceRevenueLines,
  DocumentProjInvoiceRevenueLinesType
} from './DocumentProjInvoiceRevenueLines';
import {
  BusinessDocumentSalesInvoiceLineItems,
  BusinessDocumentSalesInvoiceLineItemsType
} from './BusinessDocumentSalesInvoiceLineItems';
import {
  DocumentProjInvoiceItemLines,
  DocumentProjInvoiceItemLinesType
} from './DocumentProjInvoiceItemLines';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';
import {
  DocumentProjInvoiceEmplLines,
  DocumentProjInvoiceEmplLinesType
} from './DocumentProjInvoiceEmplLines';
import {
  BusinessDocumentMarkupTransactions,
  BusinessDocumentMarkupTransactionsType
} from './BusinessDocumentMarkupTransactions';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentTaxTransactions" of service "d365_metadata".
 */
export class BusinessDocumentTaxTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentTaxTransactionsType<T>
{
  /**
   * Technical entity name for BusinessDocumentTaxTransactions.
   */
  static override _entityName = 'BusinessDocumentTaxTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentTaxTransactions entity.
   */
  static _keys = ['dataAreaId', 'TaxTransRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Trans Rec Id.
   */
  declare taxTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Reverse Charge.
   * @nullable
   */
  declare isReverseCharge?: NoYes | null;
  /**
   * Exempt Code Reason It.
   * @nullable
   */
  declare exemptCodeReasonIt?: TaxExemptCodeReasonIt | null;
  /**
   * Tax Type Str It.
   * @nullable
   */
  declare taxTypeStrIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Tax Code.
   * @nullable
   */
  declare paymentTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Reason.
   * @nullable
   */
  declare exemptReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Description.
   * @nullable
   */
  declare taxDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Country Region Type Str.
   * @nullable
   */
  declare taxCountryRegionTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Split Paym Direct It.
   * @nullable
   */
  declare splitPaymDirectIt?: NoYes | null;
  /**
   * Tax Type It.
   * @nullable
   */
  declare taxTypeIt?: TaxTypeIt | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Regulate Amount Cur.
   */
  declare sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Country Region Type.
   * @nullable
   */
  declare taxCountryRegionType?: CountryRegionType | null;
  /**
   * Exempt Code Reason Str It.
   * @nullable
   */
  declare exemptCodeReasonStrIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Rate.
   */
  declare taxRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Amount.
   */
  declare baseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DocumentProjInvoiceCostLines} entity.
   */
  declare documentProjInvoiceCostLine?: DocumentProjInvoiceCostLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjInvoiceOnAccLines} entity.
   */
  declare documentProjInvoiceOnAccLine?: DocumentProjInvoiceOnAccLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjInvoiceRevenueLines} entity.
   */
  declare documentProjInvoiceRevenueLine?: DocumentProjInvoiceRevenueLines<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceLineItems} entity.
   */
  declare businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItems<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjInvoiceItemLines} entity.
   */
  declare documentProjInvoiceItemLine?: DocumentProjInvoiceItemLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjectInvoiceBases} entity.
   */
  declare documentProjectInvoiceBase?: DocumentProjectInvoiceBases<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjInvoiceEmplLines} entity.
   */
  declare documentProjInvoiceEmplLine?: DocumentProjInvoiceEmplLines<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentMarkupTransactions} entity.
   */
  declare businessDocumentMarkupTransaction?: BusinessDocumentMarkupTransactions<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentTaxTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentTaxTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxTransRecId: DeserializedType<T, 'Edm.Int64'>;
  isReverseCharge?: NoYes | null;
  exemptCodeReasonIt?: TaxExemptCodeReasonIt | null;
  taxTypeStrIt?: DeserializedType<T, 'Edm.String'> | null;
  paymentTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  exemptReason?: DeserializedType<T, 'Edm.String'> | null;
  taxDescription?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxCountryRegionTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  splitPaymDirectIt?: NoYes | null;
  taxTypeIt?: TaxTypeIt | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxCountryRegionType?: CountryRegionType | null;
  exemptCodeReasonStrIt?: DeserializedType<T, 'Edm.String'> | null;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  taxRate: DeserializedType<T, 'Edm.Decimal'>;
  baseAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  documentProjInvoiceCostLine?: DocumentProjInvoiceCostLinesType<T> | null;
  documentProjInvoiceOnAccLine?: DocumentProjInvoiceOnAccLinesType<T> | null;
  documentProjInvoiceRevenueLine?: DocumentProjInvoiceRevenueLinesType<T> | null;
  businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItemsType<T> | null;
  documentProjInvoiceItemLine?: DocumentProjInvoiceItemLinesType<T> | null;
  documentProjectInvoiceBase?: DocumentProjectInvoiceBasesType<T> | null;
  documentProjInvoiceEmplLine?: DocumentProjInvoiceEmplLinesType<T> | null;
  businessDocumentMarkupTransaction?: BusinessDocumentMarkupTransactionsType<T> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
