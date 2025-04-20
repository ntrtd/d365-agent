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
import type { EngineeringProductCategoryAttributeDetailsApi } from './EngineeringProductCategoryAttributeDetailsApi';
import { NoYes } from './NoYes';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
import {
  EngineeringProductCategoryAttributeDetailsValues,
  EngineeringProductCategoryAttributeDetailsValuesType
} from './EngineeringProductCategoryAttributeDetailsValues';

/**
 * This class represents the entity "EngineeringProductCategoryAttributeDetails" of service "d365_metadata".
 */
export class EngineeringProductCategoryAttributeDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductCategoryAttributeDetailsType<T>
{
  /**
   * Technical entity name for EngineeringProductCategoryAttributeDetails.
   */
  static override _entityName = 'EngineeringProductCategoryAttributeDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductCategoryAttributeDetails entity.
   */
  static _keys = [
    'EngineeringProductCategoryName',
    'EngineeringProductAttributeTypeName',
    'EngineeringProductAttributeName'
  ];
  /**
   * Engineering Product Category Name.
   */
  declare engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Attribute Type Name.
   */
  declare engineeringProductAttributeTypeName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Product Attribute Name.
   */
  declare engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Inheriting Attribute.
   * @nullable
   */
  declare isInheritingAttribute?: NoYes | null;
  /**
   * Is Mandatory Attribute.
   * @nullable
   */
  declare isMandatoryAttribute?: NoYes | null;
  /**
   * Is Synchronised With Batch Attribute.
   * @nullable
   */
  declare isSynchronisedWithBatchAttribute?: NoYes | null;
  /**
   * Integer Tolerance Increment.
   */
  declare integerToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Integer Tolerance.
   */
  declare maximumIntegerTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Integer Tolerance.
   */
  declare minimumIntegerTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tolerance Failing Action.
   * @nullable
   */
  declare toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductCategoryAttributeDetailsValues} entity.
   */
  declare engineeringProductCategoryAttributeDetailsValue?: EngineeringProductCategoryAttributeDetailsValues<T> | null;

  constructor(_entityApi: EngineeringProductCategoryAttributeDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductCategoryAttributeDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  isInheritingAttribute?: NoYes | null;
  isMandatoryAttribute?: NoYes | null;
  isSynchronisedWithBatchAttribute?: NoYes | null;
  integerToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  maximumIntegerTolerance: DeserializedType<T, 'Edm.Decimal'>;
  minimumIntegerTolerance: DeserializedType<T, 'Edm.Decimal'>;
  toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  engineeringProductCategoryAttributeDetailsValue?: EngineeringProductCategoryAttributeDetailsValuesType<T> | null;
}
