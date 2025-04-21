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
import type { WhsSalesLineBiEntitiesApi } from './WhsSalesLineBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WHSSalesLineBiEntities" of service "d365_metadata".
 */
export class WhsSalesLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WhsSalesLineBiEntitiesType<T>
{
  /**
   * Technical entity name for WhsSalesLineBiEntities.
   */
  static override _entityName = 'WHSSalesLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsSalesLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'InventTransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans Id.
   */
  declare inventTransId: DeserializedType<T, 'Edm.String'>;
  /**
   * On Wave.
   * @nullable
   */
  declare onWave?: NoYes | null;
  /**
   * Released Qty.
   */
  declare releasedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Wave Qty.
   */
  declare onWaveQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty Left To Load.
   */
  declare qtyLeftToLoad: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packing Qty.
   */
  declare packingQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: WhsSalesLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface WhsSalesLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventTransId: DeserializedType<T, 'Edm.String'>;
  onWave?: NoYes | null;
  releasedQty: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  onWaveQty: DeserializedType<T, 'Edm.Decimal'>;
  qtyLeftToLoad: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packingQty: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
