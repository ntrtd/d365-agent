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
import type { HousesApi } from './HousesApi';

/**
 * This class represents the entity "Houses" of service "d365_metadata".
 */
export class Houses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HousesType<T>
{
  /**
   * Technical entity name for Houses.
   */
  static override _entityName = 'Houses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Houses entity.
   */
  static _keys = ['dataAreaId', 'HouseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * House Id.
   */
  declare houseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ao Guid.
   * @nullable
   */
  declare aoGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ifnsfl.
   * @nullable
   */
  declare ifnsfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Guid.
   * @nullable
   */
  declare houseGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Est Status.
   * @nullable
   */
  declare estStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Str Status.
   * @nullable
   */
  declare strStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Div Type.
   * @nullable
   */
  declare divType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Build Num.
   * @nullable
   */
  declare buildNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Okato.
   * @nullable
   */
  declare okato?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Terr Ifnsfl.
   * @nullable
   */
  declare terrIfnsfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Num.
   * @nullable
   */
  declare houseNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Struc Num.
   * @nullable
   */
  declare strucNum?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HousesApi<T>) {
    super(_entityApi);
  }
}

export interface HousesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  houseId: DeserializedType<T, 'Edm.String'>;
  aoGuid?: DeserializedType<T, 'Edm.String'> | null;
  ifnsfl?: DeserializedType<T, 'Edm.String'> | null;
  houseGuid?: DeserializedType<T, 'Edm.String'> | null;
  estStatus?: DeserializedType<T, 'Edm.String'> | null;
  strStatus?: DeserializedType<T, 'Edm.String'> | null;
  divType?: DeserializedType<T, 'Edm.String'> | null;
  buildNum?: DeserializedType<T, 'Edm.String'> | null;
  okato?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  terrIfnsfl?: DeserializedType<T, 'Edm.String'> | null;
  houseNum?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  strucNum?: DeserializedType<T, 'Edm.String'> | null;
}
