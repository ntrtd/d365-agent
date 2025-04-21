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
import type { LtmListFieldsApi } from './LtmListFieldsApi';
import { LtmListFieldId } from './LtmListFieldId';

/**
 * This class represents the entity "LTMListFields" of service "d365_metadata".
 */
export class LtmListFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmListFieldsType<T>
{
  /**
   * Technical entity name for LtmListFields.
   */
  static override _entityName = 'LTMListFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmListFields entity.
   */
  static _keys = ['dataAreaId', 'ListFieldId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * List Field Id.
   * @nullable
   */
  declare listFieldId?: LtmListFieldId | null;
  /**
   * List Field Label.
   * @nullable
   */
  declare listFieldLabel?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmListFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmListFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  listFieldId?: LtmListFieldId | null;
  listFieldLabel?: DeserializedType<T, 'Edm.String'> | null;
}
