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
import type { ExternalLinksGroupsApi } from './ExternalLinksGroupsApi';
import { ExternalLinks, ExternalLinksType } from './ExternalLinks';

/**
 * This class represents the entity "ExternalLinksGroups" of service "d365_metadata".
 */
export class ExternalLinksGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExternalLinksGroupsType<T>
{
  /**
   * Technical entity name for ExternalLinksGroups.
   */
  static override _entityName = 'ExternalLinksGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternalLinksGroups entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link ExternalLinks} entity.
   */
  declare externalLinks: ExternalLinks<T>[];

  constructor(_entityApi: ExternalLinksGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalLinksGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  externalLinks: ExternalLinksType<T>[];
}
