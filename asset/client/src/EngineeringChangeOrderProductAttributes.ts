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
import type { EngineeringChangeOrderProductAttributesApi } from './EngineeringChangeOrderProductAttributesApi';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { NoYes } from './NoYes';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import { ProductAttributes, ProductAttributesType } from './ProductAttributes';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';

/**
 * This class represents the entity "EngineeringChangeOrderProductAttributes" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductAttributesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductAttributes.
   */
  static override _entityName = 'EngineeringChangeOrderProductAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductAttributes entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringProductAttributeName',
    'EngineeringProductAttributeTypeName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Engineering Product Attribute Name.
   */
  declare engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Attribute Type Name.
   */
  declare engineeringProductAttributeTypeName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Decimal Tolerance.
   */
  declare maximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Decimal Tolerance Increment.
   */
  declare decimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Modification Type.
   * @nullable
   */
  declare attributeModificationType?: EngChgEcmChangeTypes | null;
  /**
   * Integer Tolerance Increment.
   */
  declare integerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Date Time Value.
   */
  declare dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Integer Tolerance.
   */
  declare maximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Inherited Attribute.
   * @nullable
   */
  declare isInheritedAttribute?: NoYes | null;
  /**
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Synchronized With Batch Attribute.
   * @nullable
   */
  declare isSynchronizedWithBatchAttribute?: NoYes | null;
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
   * Boolean Value.
   * @nullable
   */
  declare booleanValue?: NoYes | null;
  /**
   * Minimum Decimal Tolerance.
   */
  declare minimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Attribute Mandatory.
   * @nullable
   */
  declare isAttributeMandatory?: NoYes | null;
  /**
   * Currency Value.
   */
  declare currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Inheriting Attribute.
   * @nullable
   */
  declare isInheritingAttribute?: NoYes | null;
  /**
   * Text Value.
   * @nullable
   */
  declare textValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductAttributes} entity.
   */
  declare productAttribute?: ProductAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3<T> | null;

  constructor(_entityApi: EngineeringChangeOrderProductAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  maximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  decimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  attributeModificationType?: EngChgEcmChangeTypes | null;
  integerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  isInheritedAttribute?: NoYes | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  isSynchronizedWithBatchAttribute?: NoYes | null;
  toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  minimumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  booleanValue?: NoYes | null;
  minimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  isAttributeMandatory?: NoYes | null;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  isInheritingAttribute?: NoYes | null;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2Type<T> | null;
  productAttribute?: ProductAttributesType<T> | null;
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3Type<T> | null;
}
