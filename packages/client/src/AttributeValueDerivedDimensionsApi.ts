/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeValueDerivedDimensions } from './AttributeValueDerivedDimensions';
import { AttributeValueDerivedDimensionsRequestBuilder } from './AttributeValueDerivedDimensionsRequestBuilder';
import { DimensionAttributesApi } from './DimensionAttributesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AttributeValueDerivedDimensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AttributeValueDerivedDimensions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): AttributeValueDerivedDimensionsApi<DeSerializersT> {
    return new AttributeValueDerivedDimensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension9} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_9: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension8} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_8: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_10: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_1: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDrivingDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DRIVING_DIMENSION: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_3: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_2: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension5} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_5: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_4: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension7} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_7: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_6: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_9: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension9',
        this,
        linkedApis[0]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_8: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension8',
        this,
        linkedApis[1]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_10: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension10',
        this,
        linkedApis[2]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_1: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension1',
        this,
        linkedApis[3]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DRIVING_DIMENSION: new OneToOneLink(
        'DerivedDimension_RelatedRole_DrivingDimension',
        this,
        linkedApis[4]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_3: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension3',
        this,
        linkedApis[5]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_2: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension2',
        this,
        linkedApis[6]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_5: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension5',
        this,
        linkedApis[7]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_4: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension4',
        this,
        linkedApis[8]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_7: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension7',
        this,
        linkedApis[9]
      ),
      DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_6: new OneToOneLink(
        'DerivedDimension_RelatedRole_DerivedDimension6',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = AttributeValueDerivedDimensions;

  requestBuilder(): AttributeValueDerivedDimensionsRequestBuilder<DeSerializersT> {
    return new AttributeValueDerivedDimensionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AttributeValueDerivedDimensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AttributeValueDerivedDimensions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AttributeValueDerivedDimensions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AttributeValueDerivedDimensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DRIVING_DIMENSION_ATTRIBUTE_NAME: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DRIVING_DIMENSION_ATTRIBUTE_VALUE: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_9: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_6: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_3: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_8: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_9: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_5: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_8: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_1: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_10: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_3: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_2: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_5: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_4: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_7: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_VALUE_6: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_2: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_7: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_4: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_1: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DERIVED_DIMENSION_ATTRIBUTE_NAME_10: OrderableEdmTypeField<
      AttributeValueDerivedDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension9} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_9: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension8} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_8: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_10: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_1: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDrivingDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DRIVING_DIMENSION: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_3: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_2: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension5} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_5: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_4: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension7} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_7: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link derivedDimensionRelatedRoleDerivedDimension6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_RELATED_ROLE_DERIVED_DIMENSION_6: OneToOneLink<
      AttributeValueDerivedDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AttributeValueDerivedDimensions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link drivingDimensionAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVING_DIMENSION_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'DrivingDimensionAttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link drivingDimensionAttributeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVING_DIMENSION_ATTRIBUTE_VALUE: fieldBuilder.buildEdmTypeField(
          'DrivingDimensionAttributeValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_9: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_6: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_3: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_8: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_9: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_5: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_8: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_1: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_10: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_3: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_2: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_5: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_4: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_7: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeValue6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_VALUE_6: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeValue6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_2: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_7: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_4: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_1: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link derivedDimensionAttributeName10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_DIMENSION_ATTRIBUTE_NAME_10: fieldBuilder.buildEdmTypeField(
          'DerivedDimensionAttributeName10',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AttributeValueDerivedDimensions)
      };
    }

    return this._schema;
  }
}
