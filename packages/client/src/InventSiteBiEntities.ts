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
import type { InventSiteBiEntitiesApi } from './InventSiteBiEntitiesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventSiteBiEntities" of service "d365_metadata".
 */
export class InventSiteBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventSiteBiEntitiesType<T>
{
  /**
   * Technical entity name for InventSiteBiEntities.
   */
  static override _entityName = 'InventSiteBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventSiteBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SiteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Branch Ref Rec Id.
   */
  declare taxBranchRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Timezone.
   * @nullable
   */
  declare timezone?: Timezone | null;
  /**
   * Order Entry Deadline Group Id.
   * @nullable
   */
  declare orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Invent Status Id.
   * @nullable
   */
  declare defaultInventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Receiving Warehouse Override Allowed.
   * @nullable
   */
  declare isReceivingWarehouseOverrideAllowed?: NoYes | null;

  constructor(_entityApi: InventSiteBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventSiteBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  taxBranchRefRecId: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  timezone?: Timezone | null;
  orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  defaultInventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isReceivingWarehouseOverrideAllowed?: NoYes | null;
}
