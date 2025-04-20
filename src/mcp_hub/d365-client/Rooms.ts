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
import type { RoomsApi } from './RoomsApi';

/**
 * This class represents the entity "Rooms" of service "d365_metadata".
 */
export class Rooms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RoomsType<T>
{
  /**
   * Technical entity name for Rooms.
   */
  static override _entityName = 'Rooms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Rooms entity.
   */
  static _keys = ['dataAreaId', 'RoomId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Room Id.
   */
  declare roomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Room Guid.
   * @nullable
   */
  declare roomGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flat Number.
   * @nullable
   */
  declare flatNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flat Type.
   * @nullable
   */
  declare flatType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Guid.
   * @nullable
   */
  declare houseGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region Code.
   * @nullable
   */
  declare regionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Postal Code.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RoomsApi<T>) {
    super(_entityApi);
  }
}

export interface RoomsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  roomId: DeserializedType<T, 'Edm.String'>;
  roomGuid?: DeserializedType<T, 'Edm.String'> | null;
  flatNumber?: DeserializedType<T, 'Edm.String'> | null;
  flatType?: DeserializedType<T, 'Edm.String'> | null;
  houseGuid?: DeserializedType<T, 'Edm.String'> | null;
  regionCode?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
