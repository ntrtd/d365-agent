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
import type { CollectionLetterCoursesCdsApi } from './CollectionLetterCoursesCdsApi';

/**
 * This class represents the entity "CollectionLetterCoursesCds" of service "d365_metadata".
 */
export class CollectionLetterCoursesCds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CollectionLetterCoursesCdsType<T>
{
  /**
   * Technical entity name for CollectionLetterCoursesCds.
   */
  static override _entityName = 'CollectionLetterCoursesCds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CollectionLetterCoursesCds entity.
   */
  static _keys = ['dataAreaId', 'CollectionLetterCourse'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Collection Letter Course.
   */
  declare collectionLetterCourse: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CollectionLetterCoursesCdsApi<T>) {
    super(_entityApi);
  }
}

export interface CollectionLetterCoursesCdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  collectionLetterCourse: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
