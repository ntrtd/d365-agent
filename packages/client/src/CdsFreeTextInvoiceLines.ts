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
import type { CdsFreeTextInvoiceLinesApi } from './CdsFreeTextInvoiceLinesApi';
import {
  CdsFreeTextInvoiceHeaders,
  CdsFreeTextInvoiceHeadersType
} from './CdsFreeTextInvoiceHeaders';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CDSFreeTextInvoiceLines" of service "d365_metadata".
 */
export class CdsFreeTextInvoiceLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsFreeTextInvoiceLinesType<T>
{
  /**
   * Technical entity name for CdsFreeTextInvoiceLines.
   */
  static override _entityName = 'CDSFreeTextInvoiceLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsFreeTextInvoiceLines entity.
   */
  static _keys = ['dataAreaId', 'ExternalInvoiceId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Invoice Id.
   */
  declare externalInvoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Id.
   * @nullable
   */
  declare salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Text.
   * @nullable
   */
  declare invoiceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Item Group Id.
   * @nullable
   */
  declare salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link CdsFreeTextInvoiceHeaders} entity.
   */
  declare cdsFreeTextInvoiceHeader?: CdsFreeTextInvoiceHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare salesTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare mainAccountDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CdsFreeTextInvoiceLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsFreeTextInvoiceLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  externalInvoiceId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceText?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  cdsFreeTextInvoiceHeader?: CdsFreeTextInvoiceHeadersType<T> | null;
  salesTaxGroup?: TaxGroupsType<T> | null;
  mainAccountDimensionCombination?: DimensionCombinationsType<T> | null;
}
