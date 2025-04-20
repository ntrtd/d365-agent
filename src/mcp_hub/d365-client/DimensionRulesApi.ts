/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionRules } from './DimensionRules';
import { DimensionRulesRequestBuilder } from './DimensionRulesRequestBuilder';
import { DimensionAttributeType } from './DimensionAttributeType';
import { RtslDimensionAction } from './RtslDimensionAction';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DimensionRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DimensionRules<DeSerializersT>, DeSerializersT>
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
  ): DimensionRulesApi<DeSerializersT> {
    return new DimensionRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DimensionRules;

  requestBuilder(): DimensionRulesRequestBuilder<DeSerializersT> {
    return new DimensionRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DimensionRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DimensionRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DimensionRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DimensionRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DimensionRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_NAME: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DIMENSION_CODE: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DIMENSION_ATTRIBUTE_TYPE: EnumField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      DimensionAttributeType,
      true,
      true
    >;
    RULE_GROUP: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMESION_RULE_GROUP: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DIMENSION_CODE: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_CODE_TO: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONVERSION_METHOD: EnumField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      RtslDimensionAction,
      true,
      true
    >;
    TO_DIMENSION_ATTRIBUTE_NAME: OrderableEdmTypeField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_TYPE: EnumField<
      DimensionRules<DeSerializers>,
      DeSerializersT,
      DimensionAttributeType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DimensionRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link dimensionAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionAttribute_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDimensionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DIMENSION_CODE: fieldBuilder.buildEdmTypeField(
          'ToDimensionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDimensionAttributeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DIMENSION_ATTRIBUTE_TYPE: fieldBuilder.buildEnumField(
          'ToDimensionAttribute_Type',
          DimensionAttributeType,
          true
        ),
        /**
         * Static representation of the {@link ruleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_GROUP: fieldBuilder.buildEdmTypeField(
          'RuleGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimesionRuleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMESION_RULE_GROUP: fieldBuilder.buildEdmTypeField(
          'DimesionRuleGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDimensionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DIMENSION_CODE: fieldBuilder.buildEdmTypeField(
          'FromDimensionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionCodeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_CODE_TO: fieldBuilder.buildEdmTypeField(
          'DimensionCodeTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conversionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERSION_METHOD: fieldBuilder.buildEnumField(
          'ConversionMethod',
          RtslDimensionAction,
          true
        ),
        /**
         * Static representation of the {@link toDimensionAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DIMENSION_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'ToDimensionAttribute_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionAttributeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_TYPE: fieldBuilder.buildEnumField(
          'DimensionAttribute_Type',
          DimensionAttributeType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimensionRules)
      };
    }

    return this._schema;
  }
}
