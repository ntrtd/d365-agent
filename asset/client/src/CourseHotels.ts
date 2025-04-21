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
import type { CourseHotelsApi } from './CourseHotelsApi';
import {
  CourseLocationHotels,
  CourseLocationHotelsType
} from './CourseLocationHotels';
import { CourseLocations, CourseLocationsType } from './CourseLocations';

/**
 * This class represents the entity "CourseHotels" of service "d365_metadata".
 */
export class CourseHotels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseHotelsType<T>
{
  /**
   * Technical entity name for CourseHotels.
   */
  static override _entityName = 'CourseHotels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseHotels entity.
   */
  static _keys = ['dataAreaId', 'CourseLocationId', 'HotelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Location Id.
   */
  declare courseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hotel Id.
   */
  declare hotelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Telex Number.
   * @nullable
   */
  declare telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Extension.
   * @nullable
   */
  declare phoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CourseLocationHotels} entity.
   */
  declare courseLocationHotel: CourseLocationHotels<T>[];
  /**
   * One-to-one navigation property to the {@link CourseLocations} entity.
   */
  declare courseLocation?: CourseLocations<T> | null;

  constructor(_entityApi: CourseHotelsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseHotelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseLocationId: DeserializedType<T, 'Edm.String'>;
  hotelId: DeserializedType<T, 'Edm.String'>;
  telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  phoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  courseLocationHotel: CourseLocationHotelsType<T>[];
  courseLocation?: CourseLocationsType<T> | null;
}
