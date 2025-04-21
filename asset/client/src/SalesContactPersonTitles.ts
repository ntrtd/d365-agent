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
import type { SalesContactPersonTitlesApi } from './SalesContactPersonTitlesApi';

/**
 * This class represents the entity "SalesContactPersonTitles" of service "d365_metadata".
 */
export class SalesContactPersonTitles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesContactPersonTitlesType<T>
{
  /**
   * Technical entity name for SalesContactPersonTitles.
   */
  static override _entityName = 'SalesContactPersonTitles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesContactPersonTitles entity.
   */
  static _keys = ['dataAreaId', 'JobTitleAlias'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Title Alias.
   */
  declare jobTitleAlias: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Title.
   * @nullable
   */
  declare jobTitle?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesContactPersonTitlesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesContactPersonTitlesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobTitleAlias: DeserializedType<T, 'Edm.String'>;
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
}
