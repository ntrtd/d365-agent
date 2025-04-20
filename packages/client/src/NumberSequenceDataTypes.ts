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
import type { NumberSequenceDataTypesApi } from './NumberSequenceDataTypesApi';
import { NoYes } from './NoYes';
import { NumberSeqModule } from './NumberSeqModule';

/**
 * This class represents the entity "NumberSequenceDataTypes" of service "d365_metadata".
 */
export class NumberSequenceDataTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements NumberSequenceDataTypesType<T>
{
  /**
   * Technical entity name for NumberSequenceDataTypes.
   */
  static override _entityName = 'NumberSequenceDataTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NumberSequenceDataTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Id.
   */
  declare typeId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scope Type.
   */
  declare scopeType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * To A Higher Number.
   * @nullable
   */
  declare toAHigherNumber?: NoYes | null;
  /**
   * Continuous.
   * @nullable
   */
  declare continuous?: NoYes | null;
  /**
   * Lowest.
   */
  declare lowest: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quantity Of Numbers.
   */
  declare quantityOfNumbers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Group.
   * @nullable
   */
  declare group?: NoYes | null;
  /**
   * Partition Key.
   */
  declare partitionKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * To A Lower Number.
   * @nullable
   */
  declare toALowerNumber?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual.
   * @nullable
   */
  declare manual?: NoYes | null;
  /**
   * Data Type.
   */
  declare dataType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Highest.
   */
  declare highest: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference.
   * @nullable
   */
  declare reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting.
   */
  declare sorting: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Number Sequence Area.
   * @nullable
   */
  declare numberSequenceArea?: NumberSeqModule | null;

  constructor(_entityApi: NumberSequenceDataTypesApi<T>) {
    super(_entityApi);
  }
}

export interface NumberSequenceDataTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  typeId: DeserializedType<T, 'Edm.Int32'>;
  scopeType: DeserializedType<T, 'Edm.Int32'>;
  toAHigherNumber?: NoYes | null;
  continuous?: NoYes | null;
  lowest: DeserializedType<T, 'Edm.Int32'>;
  quantityOfNumbers: DeserializedType<T, 'Edm.Int32'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  group?: NoYes | null;
  partitionKey: DeserializedType<T, 'Edm.Int64'>;
  toALowerNumber?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  manual?: NoYes | null;
  dataType: DeserializedType<T, 'Edm.Int32'>;
  highest: DeserializedType<T, 'Edm.Int32'>;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  sorting: DeserializedType<T, 'Edm.Int32'>;
  numberSequenceArea?: NumberSeqModule | null;
}
