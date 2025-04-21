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
import type { CourseLocationsApi } from './CourseLocationsApi';
import { CourseRooms, CourseRoomsType } from './CourseRooms';
import { CourseInstructors, CourseInstructorsType } from './CourseInstructors';
import {
  CourseLocationHotels,
  CourseLocationHotelsType
} from './CourseLocationHotels';
import { CourseTables, CourseTablesType } from './CourseTables';
import { CourseHotels, CourseHotelsType } from './CourseHotels';
import { Courses, CoursesType } from './Courses';

/**
 * This class represents the entity "CourseLocations" of service "d365_metadata".
 */
export class CourseLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseLocationsType<T>
{
  /**
   * Technical entity name for CourseLocations.
   */
  static override _entityName = 'CourseLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseLocations entity.
   */
  static _keys = ['dataAreaId', 'CourseLocation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Location.
   */
  declare courseLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telex Number.
   * @nullable
   */
  declare telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CourseRooms} entity.
   */
  declare courseRooms: CourseRooms<T>[];
  /**
   * One-to-many navigation property to the {@link CourseInstructors} entity.
   */
  declare courseInstructors: CourseInstructors<T>[];
  /**
   * One-to-many navigation property to the {@link CourseLocationHotels} entity.
   */
  declare courseLocationHotel: CourseLocationHotels<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTables} entity.
   */
  declare courseTable: CourseTables<T>[];
  /**
   * One-to-many navigation property to the {@link CourseHotels} entity.
   */
  declare courseHotel: CourseHotels<T>[];
  /**
   * One-to-many navigation property to the {@link Courses} entity.
   */
  declare course: Courses<T>[];

  constructor(_entityApi: CourseLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseLocation: DeserializedType<T, 'Edm.String'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  courseRooms: CourseRoomsType<T>[];
  courseInstructors: CourseInstructorsType<T>[];
  courseLocationHotel: CourseLocationHotelsType<T>[];
  courseTable: CourseTablesType<T>[];
  courseHotel: CourseHotelsType<T>[];
  course: CoursesType<T>[];
}
