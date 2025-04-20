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
import type { AddressObjectsApi } from './AddressObjectsApi';

/**
 * This class represents the entity "AddressObjects" of service "d365_metadata".
 */
export class AddressObjects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressObjectsType<T>
{
  /**
   * Technical entity name for AddressObjects.
   */
  static override _entityName = 'AddressObjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressObjects entity.
   */
  static _keys = ['dataAreaId', 'AOId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ao Id.
   */
  declare aoId: DeserializedType<T, 'Edm.String'>;
  /**
   * Oper Status.
   * @nullable
   */
  declare operStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extr Code.
   * @nullable
   */
  declare extrCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prev Id.
   * @nullable
   */
  declare prevId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Act Status.
   * @nullable
   */
  declare actStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ao Guid.
   * @nullable
   */
  declare aoGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Code.
   * @nullable
   */
  declare streetCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ifnsfl.
   * @nullable
   */
  declare ifnsfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Area Code.
   * @nullable
   */
  declare areaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region Code.
   * @nullable
   */
  declare regionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Live Status.
   * @nullable
   */
  declare liveStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Div Type.
   * @nullable
   */
  declare divType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ct Ar Code.
   * @nullable
   */
  declare ctArCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Id.
   * @nullable
   */
  declare nextId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Okato.
   * @nullable
   */
  declare okato?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ao Level.
   * @nullable
   */
  declare aoLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Guid.
   * @nullable
   */
  declare parentGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terr Ifnsfl.
   * @nullable
   */
  declare terrIfnsfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Off Name.
   * @nullable
   */
  declare offName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Code.
   * @nullable
   */
  declare cityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Place Code.
   * @nullable
   */
  declare placeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Code.
   * @nullable
   */
  declare planCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AddressObjectsApi<T>) {
    super(_entityApi);
  }
}

export interface AddressObjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  aoId: DeserializedType<T, 'Edm.String'>;
  operStatus?: DeserializedType<T, 'Edm.String'> | null;
  extrCode?: DeserializedType<T, 'Edm.String'> | null;
  prevId?: DeserializedType<T, 'Edm.String'> | null;
  actStatus?: DeserializedType<T, 'Edm.String'> | null;
  aoGuid?: DeserializedType<T, 'Edm.String'> | null;
  streetCode?: DeserializedType<T, 'Edm.String'> | null;
  ifnsfl?: DeserializedType<T, 'Edm.String'> | null;
  areaCode?: DeserializedType<T, 'Edm.String'> | null;
  regionCode?: DeserializedType<T, 'Edm.String'> | null;
  liveStatus?: DeserializedType<T, 'Edm.String'> | null;
  divType?: DeserializedType<T, 'Edm.String'> | null;
  ctArCode?: DeserializedType<T, 'Edm.String'> | null;
  nextId?: DeserializedType<T, 'Edm.String'> | null;
  okato?: DeserializedType<T, 'Edm.String'> | null;
  aoLevel?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  parentGuid?: DeserializedType<T, 'Edm.String'> | null;
  terrIfnsfl?: DeserializedType<T, 'Edm.String'> | null;
  offName?: DeserializedType<T, 'Edm.String'> | null;
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  placeCode?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  planCode?: DeserializedType<T, 'Edm.String'> | null;
}
