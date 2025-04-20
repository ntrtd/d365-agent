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
import type { ItemBatchAttributesApi } from './ItemBatchAttributesApi';
import { PdsBatchAttribType } from './PdsBatchAttribType';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
import {
  ItemBatchAttributeValuesV2,
  ItemBatchAttributeValuesV2Type
} from './ItemBatchAttributeValuesV2';
import {
  SensorItemBatchAttributeMappings,
  SensorItemBatchAttributeMappingsType
} from './SensorItemBatchAttributeMappings';

/**
 * This class represents the entity "ItemBatchAttributes" of service "d365_metadata".
 */
export class ItemBatchAttributes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemBatchAttributesType<T>
{
  /**
   * Technical entity name for ItemBatchAttributes.
   */
  static override _entityName = 'ItemBatchAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemBatchAttributes entity.
   */
  static _keys = ['dataAreaId', 'AttributeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Id.
   */
  declare attributeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Decimal Tolerance.
   */
  declare maximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Attribute Type.
   * @nullable
   */
  declare attributeType?: PdsBatchAttribType | null;
  /**
   * Decimal Tolerance Increment.
   */
  declare decimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Optimal Decimal.
   */
  declare optimalDecimal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Integer Tolerance Increment.
   */
  declare integerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Optimal Date.
   */
  declare optimalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Integer Tolerance.
   */
  declare maximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Attribute Description.
   * @nullable
   */
  declare attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Optimal Text.
   * @nullable
   */
  declare optimalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tolerance Failing Action.
   * @nullable
   */
  declare toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  /**
   * Minimum Integer Tolerance.
   */
  declare minimumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Minimum Decimal Tolerance.
   */
  declare minimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Optimal Integer.
   */
  declare optimalInteger: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link ItemBatchAttributeValuesV2} entity.
   */
  declare itemBatchAttributeValues: ItemBatchAttributeValuesV2<T>[];
  /**
   * One-to-many navigation property to the {@link SensorItemBatchAttributeMappings} entity.
   */
  declare sensorItemBatchAttributeMappings: SensorItemBatchAttributeMappings<T>[];

  constructor(_entityApi: ItemBatchAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface ItemBatchAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeId: DeserializedType<T, 'Edm.String'>;
  maximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  attributeType?: PdsBatchAttribType | null;
  decimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  optimalDecimal: DeserializedType<T, 'Edm.Decimal'>;
  integerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  optimalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  optimalText?: DeserializedType<T, 'Edm.String'> | null;
  toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  minimumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  minimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  optimalInteger: DeserializedType<T, 'Edm.Int32'>;
  itemBatchAttributeValues: ItemBatchAttributeValuesV2Type<T>[];
  sensorItemBatchAttributeMappings: SensorItemBatchAttributeMappingsType<T>[];
}
