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
import type { UniqueCertificationValuesApi } from './UniqueCertificationValuesApi';
import { UniqueCertificationFieldTypeIt } from './UniqueCertificationFieldTypeIt';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "UniqueCertificationValues" of service "d365_metadata".
 */
export class UniqueCertificationValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UniqueCertificationValuesType<T>
{
  /**
   * Technical entity name for UniqueCertificationValues.
   */
  static override _entityName = 'UniqueCertificationValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UniqueCertificationValues entity.
   */
  static _keys = ['Field', 'Value'];
  /**
   * Field.
   * @nullable
   */
  declare field?: UniqueCertificationFieldTypeIt | null;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Value Description.
   * @nullable
   */
  declare valueDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: UniqueCertificationValuesApi<T>) {
    super(_entityApi);
  }
}

export interface UniqueCertificationValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  field?: UniqueCertificationFieldTypeIt | null;
  value: DeserializedType<T, 'Edm.String'>;
  active?: NoYes | null;
  valueDescription?: DeserializedType<T, 'Edm.String'> | null;
}
