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
import type { ReleasedEngineeringProductVersionAttributesApi } from './ReleasedEngineeringProductVersionAttributesApi';
import { NoYes } from './NoYes';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
import { ProductAttributes, ProductAttributesType } from './ProductAttributes';

/**
 * This class represents the entity "ReleasedEngineeringProductVersionAttributes" of service "d365_metadata".
 */
export class ReleasedEngineeringProductVersionAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedEngineeringProductVersionAttributesType<T>
{
  /**
   * Technical entity name for ReleasedEngineeringProductVersionAttributes.
   */
  static override _entityName = 'ReleasedEngineeringProductVersionAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedEngineeringProductVersionAttributes entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringProductNumber',
    'EngineeringProductVersionId',
    'EngineeringProductAttributeName',
    'EngineeringProductAttributeTypeName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Number.
   */
  declare engineeringProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Version Id.
   */
  declare engineeringProductVersionId: DeserializedType<T, 'Edm.String'>;
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
   * Maximum Decimal Tolerance.
   */
  declare maximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Decimal Tolerance Increment.
   */
  declare decimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Integer Tolerance Increment.
   */
  declare integerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Inherited Attribute.
   * @nullable
   */
  declare isInheritedAttribute?: NoYes | null;
  /**
   * Maximum Integer Tolerance.
   */
  declare maximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
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
   * Minimum Decimal Tolerance.
   */
  declare minimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Attribute Mandatory.
   * @nullable
   */
  declare isAttributeMandatory?: NoYes | null;
  /**
   * Is Inheriting Attribute.
   * @nullable
   */
  declare isInheritingAttribute?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ProductAttributes} entity.
   */
  declare productAttribute?: ProductAttributes<T> | null;

  constructor(_entityApi: ReleasedEngineeringProductVersionAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedEngineeringProductVersionAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringProductNumber: DeserializedType<T, 'Edm.String'>;
  engineeringProductVersionId: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  maximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  decimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  integerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  isInheritedAttribute?: NoYes | null;
  maximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  isSynchronizedWithBatchAttribute?: NoYes | null;
  toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  minimumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  minimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  isAttributeMandatory?: NoYes | null;
  isInheritingAttribute?: NoYes | null;
  productAttribute?: ProductAttributesType<T> | null;
}
