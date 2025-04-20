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
import type { McrCriteriaApi } from './McrCriteriaApi';

/**
 * This class represents the entity "MCRCriteria" of service "d365_metadata".
 */
export class McrCriteria<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements McrCriteriaType<T>
{
  /**
   * Technical entity name for McrCriteria.
   */
  static override _entityName = 'MCRCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrCriteria entity.
   */
  static _keys = ['dataAreaId', 'FieldName', 'ViewOrTable'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * View Or Table.
   */
  declare viewOrTable: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: McrCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface McrCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  viewOrTable: DeserializedType<T, 'Edm.String'>;
}
