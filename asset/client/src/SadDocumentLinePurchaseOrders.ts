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
import type { SadDocumentLinePurchaseOrdersApi } from './SadDocumentLinePurchaseOrdersApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SADDocumentLinePurchaseOrders" of service "d365_metadata".
 */
export class SadDocumentLinePurchaseOrders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentLinePurchaseOrdersType<T>
{
  /**
   * Technical entity name for SadDocumentLinePurchaseOrders.
   */
  static override _entityName = 'SADDocumentLinePurchaseOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentLinePurchaseOrders entity.
   */
  static _keys = ['dataAreaId', 'DocumentCode', 'Position'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Code.
   */
  declare documentCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Tax Amount.
   */
  declare salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duty.
   */
  declare duty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise.
   */
  declare excise: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sad Group.
   * @nullable
   */
  declare sadGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   */
  declare transport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base For Sad.
   */
  declare baseForSad: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: SadDocumentLinePurchaseOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentLinePurchaseOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentCode: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.Int32'>;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  duty: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  excise: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  sadGroup?: DeserializedType<T, 'Edm.String'> | null;
  transport: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  baseForSad: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
