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
import type { InventTransPostingBiEntitiesApi } from './InventTransPostingBiEntitiesApi';
import { InventTransPostingType } from './InventTransPostingType';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';

/**
 * This class represents the entity "InventTransPostingBiEntities" of service "d365_metadata".
 */
export class InventTransPostingBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTransPostingBiEntitiesType<T>
{
  /**
   * Technical entity name for InventTransPostingBiEntities.
   */
  static override _entityName = 'InventTransPostingBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTransPostingBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'TransDate',
    'Voucher',
    'InventTransOrigin',
    'InventTransPostingType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans Origin.
   */
  declare inventTransOrigin: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Trans Posting Type.
   * @nullable
   */
  declare inventTransPostingType?: InventTransPostingType | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Type Offset.
   * @nullable
   */
  declare postingTypeOffset?: LedgerPostingType | null;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
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
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Begin Time.
   */
  declare transBeginTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: InventTransPostingBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTransPostingBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  inventTransOrigin: DeserializedType<T, 'Edm.Int64'>;
  inventTransPostingType?: InventTransPostingType | null;
  isPosted?: NoYes | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  postingTypeOffset?: LedgerPostingType | null;
  postingType?: LedgerPostingType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  transBeginTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
