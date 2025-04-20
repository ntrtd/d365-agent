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
import type { FinTagCustomListValuesApi } from './FinTagCustomListValuesApi';

/**
 * This class represents the entity "FinTagCustomListValues" of service "d365_metadata".
 */
export class FinTagCustomListValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinTagCustomListValuesType<T>
{
  /**
   * Technical entity name for FinTagCustomListValues.
   */
  static override _entityName = 'FinTagCustomListValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinTagCustomListValues entity.
   */
  static _keys = ['Company', 'TagName', 'Value'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Tag Name.
   */
  declare tagName: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: FinTagCustomListValuesApi<T>) {
    super(_entityApi);
  }
}

export interface FinTagCustomListValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  tagName: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
}
