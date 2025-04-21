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
import type { ApplicationBookmarksApi } from './ApplicationBookmarksApi';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';

/**
 * This class represents the entity "ApplicationBookmarks" of service "d365_metadata".
 */
export class ApplicationBookmarks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicationBookmarksType<T>
{
  /**
   * Technical entity name for ApplicationBookmarks.
   */
  static override _entityName = 'ApplicationBookmarks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicationBookmarks entity.
   */
  static _keys = ['dataAreaId', 'CorrespondenceAction'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Correspondence Action.
   * @nullable
   */
  declare correspondenceAction?: HrmApplicationCorrespondanceAction | null;
  /**
   * Bookmarks.
   * @nullable
   */
  declare bookmarks?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: ApplicationBookmarksApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicationBookmarksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  correspondenceAction?: HrmApplicationCorrespondanceAction | null;
  bookmarks?: DeserializedType<T, 'Edm.Binary'> | null;
}
