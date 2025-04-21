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
import type { SalesAutomaticSalesDocumentHeaderChargesApi } from './SalesAutomaticSalesDocumentHeaderChargesApi';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';

/**
 * This class represents the entity "SalesAutomaticSalesDocumentHeaderCharges" of service "d365_metadata".
 */
export class SalesAutomaticSalesDocumentHeaderCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAutomaticSalesDocumentHeaderChargesType<T>
{
  /**
   * Technical entity name for SalesAutomaticSalesDocumentHeaderCharges.
   */
  static override _entityName = 'SalesAutomaticSalesDocumentHeaderCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAutomaticSalesDocumentHeaderCharges entity.
   */
  static _keys = ['dataAreaId', 'Description', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Compound.
   * @nullable
   */
  declare isCompound?: NoYes | null;
  /**
   * To Total Line Amount.
   */
  declare toTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Document Currency Code.
   * @nullable
   */
  declare salesDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Charge Code.
   * @nullable
   */
  declare salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Accounting Currency Code.
   * @nullable
   */
  declare chargeAccountingCurrencyCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Invoice Processing Keep Charge.
   * @nullable
   */
  declare willInvoiceProcessingKeepCharge?: NoYes | null;
  /**
   * Charge Category.
   * @nullable
   */
  declare chargeCategory?: MarkupCategory | null;
  /**
   * From Total Line Amount.
   */
  declare fromTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SalesAutomaticSalesDocumentHeaderChargesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAutomaticSalesDocumentHeaderChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  isCompound?: NoYes | null;
  toTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  willInvoiceProcessingKeepCharge?: NoYes | null;
  chargeCategory?: MarkupCategory | null;
  fromTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
}
