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
import type { NumberSequencesV2ReferencesApi } from './NumberSequencesV2ReferencesApi';
import { NumberSequenceType } from './NumberSequenceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "NumberSequencesV2References" of service "d365_metadata".
 */
export class NumberSequencesV2References<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements NumberSequencesV2ReferencesType<T>
{
  /**
   * Technical entity name for NumberSequencesV2References.
   */
  static override _entityName = 'NumberSequencesV2References';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NumberSequencesV2References entity.
   */
  static _keys = ['ScopeType', 'ScopeValue', 'DataTypeName'];
  /**
   * Scope Type.
   * @nullable
   */
  declare scopeType?: NumberSequenceType | null;
  /**
   * Scope Value.
   */
  declare scopeValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Type Name.
   */
  declare dataTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reuse Numbers.
   * @nullable
   */
  declare reuseNumbers?: NoYes | null;

  constructor(_entityApi: NumberSequencesV2ReferencesApi<T>) {
    super(_entityApi);
  }
}

export interface NumberSequencesV2ReferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  scopeType?: NumberSequenceType | null;
  scopeValue: DeserializedType<T, 'Edm.String'>;
  dataTypeName: DeserializedType<T, 'Edm.String'>;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  reuseNumbers?: NoYes | null;
}
