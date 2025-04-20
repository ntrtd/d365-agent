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
import type { NumberSequencesReferencesApi } from './NumberSequencesReferencesApi';
import { NumberSequenceType } from './NumberSequenceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "NumberSequencesReferences" of service "d365_metadata".
 */
export class NumberSequencesReferences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements NumberSequencesReferencesType<T>
{
  /**
   * Technical entity name for NumberSequencesReferences.
   */
  static override _entityName = 'NumberSequencesReferences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NumberSequencesReferences entity.
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

  constructor(_entityApi: NumberSequencesReferencesApi<T>) {
    super(_entityApi);
  }
}

export interface NumberSequencesReferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  scopeType?: NumberSequenceType | null;
  scopeValue: DeserializedType<T, 'Edm.String'>;
  dataTypeName: DeserializedType<T, 'Edm.String'>;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  reuseNumbers?: NoYes | null;
}
