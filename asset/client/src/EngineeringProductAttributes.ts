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
import type { EngineeringProductAttributesApi } from './EngineeringProductAttributesApi';
import { NoYes } from './NoYes';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
import {
  EngineeringProductAttributeTranslations,
  EngineeringProductAttributeTranslationsType
} from './EngineeringProductAttributeTranslations';

/**
 * This class represents the entity "EngineeringProductAttributes" of service "d365_metadata".
 */
export class EngineeringProductAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductAttributesType<T>
{
  /**
   * Technical entity name for EngineeringProductAttributes.
   */
  static override _entityName = 'EngineeringProductAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductAttributes entity.
   */
  static _keys = ['AttributeName'];
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Minimum Decimal Tolerance.
   */
  declare defaultMinimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Currency Code.
   * @nullable
   */
  declare defaultCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Decimal Tolerance Increment.
   */
  declare defaultDecimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Minimum Integer Tolerance.
   */
  declare defaultMinimumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Integer Tolerance Increment.
   */
  declare defaultIntegerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Maximum Decimal Tolerance.
   */
  declare defaultMaximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Boolean Value.
   * @nullable
   */
  declare defaultBooleanValue?: NoYes | null;
  /**
   * Default Currency Value.
   */
  declare defaultCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Attribute Help Text.
   * @nullable
   */
  declare attributeHelpText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Description.
   * @nullable
   */
  declare attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Decimal Value.
   */
  declare defaultDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Maximum Integer Tolerance.
   */
  declare defaultMaximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Integer Value.
   */
  declare defaultIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tolerance Failing Action.
   * @nullable
   */
  declare toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  /**
   * Friendly Attribute Name.
   * @nullable
   */
  declare friendlyAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Attribute Type Name.
   * @nullable
   */
  declare productAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Text Value.
   * @nullable
   */
  declare defaultTextValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Date Time Value.
   */
  declare defaultDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link EngineeringProductAttributeTranslations} entity.
   */
  declare engineeringProductAttributeTranslations: EngineeringProductAttributeTranslations<T>[];

  constructor(_entityApi: EngineeringProductAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  attributeName: DeserializedType<T, 'Edm.String'>;
  defaultMinimumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  defaultCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultDecimalToleranceIncrement: DeserializedType<T, 'Edm.Decimal'>;
  defaultMinimumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  defaultIntegerToleranceIncrement: DeserializedType<T, 'Edm.Int32'>;
  defaultMaximumDecimalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  defaultBooleanValue?: NoYes | null;
  defaultCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;
  attributeHelpText?: DeserializedType<T, 'Edm.String'> | null;
  attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  defaultMaximumIntegerTolerance: DeserializedType<T, 'Edm.Int32'>;
  defaultIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  toleranceFailingAction?: PdsBatchAttribToleranceAction | null;
  friendlyAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  productAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  defaultTextValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  engineeringProductAttributeTranslations: EngineeringProductAttributeTranslationsType<T>[];
}
