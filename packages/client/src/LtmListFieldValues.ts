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
import type { LtmListFieldValuesApi } from './LtmListFieldValuesApi';
import { LtmListFieldId } from './LtmListFieldId';

/**
 * This class represents the entity "LTMListFieldValues" of service "d365_metadata".
 */
export class LtmListFieldValues<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmListFieldValuesType<T>
{
  /**
   * Technical entity name for LtmListFieldValues.
   */
  static override _entityName = 'LTMListFieldValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmListFieldValues entity.
   */
  static _keys = ['dataAreaId', 'ListFieldCode', 'ListFieldId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * List Field Code.
   */
  declare listFieldCode: DeserializedType<T, 'Edm.String'>;
  /**
   * List Field Id.
   * @nullable
   */
  declare listFieldId?: LtmListFieldId | null;
  /**
   * List Field Code Description.
   * @nullable
   */
  declare listFieldCodeDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmListFieldValuesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmListFieldValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  listFieldCode: DeserializedType<T, 'Edm.String'>;
  listFieldId?: LtmListFieldId | null;
  listFieldCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
