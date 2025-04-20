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
import type { ProductAttributesApi } from './ProductAttributesApi';
import { NoYes } from './NoYes';
import { AttributeDataType } from './AttributeDataType';
import {
  EngineeringChangeOrderProductAttributes,
  EngineeringChangeOrderProductAttributesType
} from './EngineeringChangeOrderProductAttributes';
import {
  ReleasedEngineeringProductVersionAttributeValues,
  ReleasedEngineeringProductVersionAttributeValuesType
} from './ReleasedEngineeringProductVersionAttributeValues';
import {
  ProductAttributeTranslations,
  ProductAttributeTranslationsType
} from './ProductAttributeTranslations';
import {
  ReleasedEngineeringProductVersionAttributes,
  ReleasedEngineeringProductVersionAttributesType
} from './ReleasedEngineeringProductVersionAttributes';
import {
  AttributeMetadatas,
  AttributeMetadatasType
} from './AttributeMetadatas';

/**
 * This class represents the entity "ProductAttributes" of service "d365_metadata".
 */
export class ProductAttributes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductAttributesType<T>
{
  /**
   * Technical entity name for ProductAttributes.
   */
  static override _entityName = 'ProductAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributes entity.
   */
  static _keys = ['ProductAttributeTypeName', 'AttributeName'];
  /**
   * Product Attribute Type Name.
   */
  declare productAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Currency Code.
   * @nullable
   */
  declare defaultCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Integer Value.
   */
  declare defaultIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Friendly Attribute Name.
   * @nullable
   */
  declare friendlyAttributeName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Data Type.
   * @nullable
   */
  declare dataType?: AttributeDataType | null;
  /**
   * Is Enabled As Pricing Attribute.
   * @nullable
   */
  declare isEnabledAsPricingAttribute?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductAttributes} entity.
   */
  declare engineeringChangeOrderProductAttributes: EngineeringChangeOrderProductAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedEngineeringProductVersionAttributeValues} entity.
   */
  declare releasedEngineeringProductVersionAttributeValues: ReleasedEngineeringProductVersionAttributeValues<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAttributeTranslations} entity.
   */
  declare productAttributeTranslations: ProductAttributeTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedEngineeringProductVersionAttributes} entity.
   */
  declare releasedEngineeringProductVersionAttributes: ReleasedEngineeringProductVersionAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeMetadatas} entity.
   */
  declare attributeMetadata: AttributeMetadatas<T>[];

  constructor(_entityApi: ProductAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  defaultCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultBooleanValue?: NoYes | null;
  defaultCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;
  attributeHelpText?: DeserializedType<T, 'Edm.String'> | null;
  attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  defaultIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  friendlyAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  defaultTextValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataType?: AttributeDataType | null;
  isEnabledAsPricingAttribute?: NoYes | null;
  engineeringChangeOrderProductAttributes: EngineeringChangeOrderProductAttributesType<T>[];
  releasedEngineeringProductVersionAttributeValues: ReleasedEngineeringProductVersionAttributeValuesType<T>[];
  productAttributeTranslations: ProductAttributeTranslationsType<T>[];
  releasedEngineeringProductVersionAttributes: ReleasedEngineeringProductVersionAttributesType<T>[];
  attributeMetadata: AttributeMetadatasType<T>[];
}
