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
import type { AttributeValueDerivedDimensionsApi } from './AttributeValueDerivedDimensionsApi';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';

/**
 * This class represents the entity "AttributeValueDerivedDimensions" of service "d365_metadata".
 */
export class AttributeValueDerivedDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AttributeValueDerivedDimensionsType<T>
{
  /**
   * Technical entity name for AttributeValueDerivedDimensions.
   */
  static override _entityName = 'AttributeValueDerivedDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AttributeValueDerivedDimensions entity.
   */
  static _keys = [
    'DrivingDimensionAttributeName',
    'DrivingDimensionAttributeValue'
  ];
  /**
   * Driving Dimension Attribute Name.
   */
  declare drivingDimensionAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Driving Dimension Attribute Value.
   */
  declare drivingDimensionAttributeValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Derived Dimension Attribute Name 9.
   * @nullable
   */
  declare derivedDimensionAttributeName9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 6.
   * @nullable
   */
  declare derivedDimensionAttributeName6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 3.
   * @nullable
   */
  declare derivedDimensionAttributeName3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 8.
   * @nullable
   */
  declare derivedDimensionAttributeName8?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 9.
   * @nullable
   */
  declare derivedDimensionAttributeValue9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 5.
   * @nullable
   */
  declare derivedDimensionAttributeName5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 8.
   * @nullable
   */
  declare derivedDimensionAttributeValue8?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 1.
   * @nullable
   */
  declare derivedDimensionAttributeValue1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 10.
   * @nullable
   */
  declare derivedDimensionAttributeValue10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 3.
   * @nullable
   */
  declare derivedDimensionAttributeValue3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 2.
   * @nullable
   */
  declare derivedDimensionAttributeValue2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 5.
   * @nullable
   */
  declare derivedDimensionAttributeValue5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 4.
   * @nullable
   */
  declare derivedDimensionAttributeValue4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 7.
   * @nullable
   */
  declare derivedDimensionAttributeValue7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Value 6.
   * @nullable
   */
  declare derivedDimensionAttributeValue6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 2.
   * @nullable
   */
  declare derivedDimensionAttributeName2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 7.
   * @nullable
   */
  declare derivedDimensionAttributeName7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 4.
   * @nullable
   */
  declare derivedDimensionAttributeName4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 1.
   * @nullable
   */
  declare derivedDimensionAttributeName1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derived Dimension Attribute Name 10.
   * @nullable
   */
  declare derivedDimensionAttributeName10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension9?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension8?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension10?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension1?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDrivingDimension?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension3?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension2?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension5?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension4?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension7?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare derivedDimensionRelatedRoleDerivedDimension6?: DimensionAttributes<T> | null;

  constructor(_entityApi: AttributeValueDerivedDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface AttributeValueDerivedDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  drivingDimensionAttributeName: DeserializedType<T, 'Edm.String'>;
  drivingDimensionAttributeValue: DeserializedType<T, 'Edm.String'>;
  derivedDimensionAttributeName9?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName6?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName3?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName8?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue9?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName5?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue8?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue1?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue10?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue3?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue2?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue5?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue4?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue7?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeValue6?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName2?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName7?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName4?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName1?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionAttributeName10?: DeserializedType<T, 'Edm.String'> | null;
  derivedDimensionRelatedRoleDerivedDimension9?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension8?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension10?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension1?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDrivingDimension?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension3?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension2?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension5?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension4?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension7?: DimensionAttributesType<T> | null;
  derivedDimensionRelatedRoleDerivedDimension6?: DimensionAttributesType<T> | null;
}
