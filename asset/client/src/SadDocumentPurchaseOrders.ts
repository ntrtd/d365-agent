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
import type { SadDocumentPurchaseOrdersApi } from './SadDocumentPurchaseOrdersApi';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SADDocumentPurchaseOrders" of service "d365_metadata".
 */
export class SadDocumentPurchaseOrders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentPurchaseOrdersType<T>
{
  /**
   * Technical entity name for SadDocumentPurchaseOrders.
   */
  static override _entityName = 'SADDocumentPurchaseOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentPurchaseOrders entity.
   */
  static _keys = ['dataAreaId', 'DocumentCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Code.
   */
  declare documentCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Of Vat Register.
   */
  declare dateOfVatRegister: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sad Date.
   */
  declare sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Duty Government.
   * @nullable
   */
  declare dutyGovernment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Misc Payments.
   */
  declare miscPayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sad.
   * @nullable
   */
  declare sad?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   */
  declare transport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: SadDocumentPurchaseOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentPurchaseOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentCode: DeserializedType<T, 'Edm.String'>;
  dateOfVatRegister: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dutyGovernment?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  miscPayments: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  sad?: DeserializedType<T, 'Edm.String'> | null;
  transport: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
