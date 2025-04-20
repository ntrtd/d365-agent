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
import type { RAssetLifeHistsApi } from './RAssetLifeHistsApi';

/**
 * This class represents the entity "RAssetLifeHists" of service "d365_metadata".
 */
export class RAssetLifeHists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetLifeHistsType<T>
{
  /**
   * Technical entity name for RAssetLifeHists.
   */
  static override _entityName = 'RAssetLifeHists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetLifeHists entity.
   */
  static _keys = ['dataAreaId', 'FAInventoryNumber', 'ValueModel', 'Date'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Inventory Number.
   */
  declare faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model.
   */
  declare valueModel: DeserializedType<T, 'Edm.String'>;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Lifetime.
   */
  declare newLifetime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Depreciation Method.
   * @nullable
   */
  declare depreciationMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Factor.
   */
  declare newFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetLifeHistsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetLifeHistsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  valueModel: DeserializedType<T, 'Edm.String'>;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  newLifetime: DeserializedType<T, 'Edm.Int32'>;
  depreciationMethod?: DeserializedType<T, 'Edm.String'> | null;
  newFactor: DeserializedType<T, 'Edm.Decimal'>;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
}
