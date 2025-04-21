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
import type { TaxTransThBiEntitiesApi } from './TaxTransThBiEntitiesApi';
import { NoYes } from './NoYes';
import { TaxTypeTh } from './TaxTypeTh';

/**
 * This class represents the entity "TaxTransTHBiEntities" of service "d365_metadata".
 */
export class TaxTransThBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransThBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransThBiEntities.
   */
  static override _entityName = 'TaxTransTHBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransThBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Invoice Id.
   * @nullable
   */
  declare taxInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Receipt Date.
   */
  declare invoiceReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Branch.
   * @nullable
   */
  declare taxBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reversal Gain Loss.
   * @nullable
   */
  declare isReversalGainLoss?: NoYes | null;
  /**
   * Tax Invoice Date.
   */
  declare taxInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeTh | null;
  /**
   * Paym Tax Code.
   * @nullable
   */
  declare paymTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Real Vend Name.
   * @nullable
   */
  declare realVendName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Invoice Receipt Date.
   */
  declare taxInvoiceReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exclude From Reports.
   * @nullable
   */
  declare excludeFromReports?: NoYes | null;
  /**
   * Tax Unrealized Ref Rec Id.
   */
  declare taxUnrealizedRefRecId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: TaxTransThBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransThBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxBranch?: DeserializedType<T, 'Edm.String'> | null;
  isReversalGainLoss?: NoYes | null;
  taxInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  taxType?: TaxTypeTh | null;
  paymTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  realVendName?: DeserializedType<T, 'Edm.String'> | null;
  taxInvoiceReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  excludeFromReports?: NoYes | null;
  taxUnrealizedRefRecId: DeserializedType<T, 'Edm.Int64'>;
}
