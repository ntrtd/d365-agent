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
import type { AssetLeaseInitialCostBiEntitiesApi } from './AssetLeaseInitialCostBiEntitiesApi';
import { NoYesCombo } from './NoYesCombo';

/**
 * This class represents the entity "AssetLeaseInitialCostBiEntities" of service "d365_metadata".
 */
export class AssetLeaseInitialCostBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseInitialCostBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseInitialCostBiEntities.
   */
  static override _entityName = 'AssetLeaseInitialCostBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseInitialCostBiEntities entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct.
   * @nullable
   */
  declare direct?: NoYesCombo | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Id.
   * @nullable
   */
  declare leaseId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetLeaseInitialCostBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseInitialCostBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  direct?: NoYesCombo | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
  leaseId?: DeserializedType<T, 'Edm.String'> | null;
}
