/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemBatchAttributes } from './ItemBatchAttributes';
import { ItemBatchAttributesRequestBuilder } from './ItemBatchAttributesRequestBuilder';
import { ItemBatchAttributeValuesV2Api } from './ItemBatchAttributeValuesV2Api';
import { SensorItemBatchAttributeMappingsApi } from './SensorItemBatchAttributeMappingsApi';
import { PdsBatchAttribType } from './PdsBatchAttribType';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ItemBatchAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemBatchAttributes<DeSerializersT>, DeSerializersT>
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
  ): ItemBatchAttributesApi<DeSerializersT> {
    return new ItemBatchAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemBatchAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE_VALUES: OneToManyLink<
      ItemBatchAttributes<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorItemBatchAttributeMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_ITEM_BATCH_ATTRIBUTE_MAPPINGS: OneToManyLink<
      ItemBatchAttributes<DeSerializersT>,
      DeSerializersT,
      SensorItemBatchAttributeMappingsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemBatchAttributeValuesV2Api<DeSerializersT>,
      SensorItemBatchAttributeMappingsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_BATCH_ATTRIBUTE_VALUES: new OneToManyLink(
        'ItemBatchAttributeValues',
        this,
        linkedApis[0]
      ),
      SENSOR_ITEM_BATCH_ATTRIBUTE_MAPPINGS: new OneToManyLink(
        'SensorItemBatchAttributeMappings',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ItemBatchAttributes;

  requestBuilder(): ItemBatchAttributesRequestBuilder<DeSerializersT> {
    return new ItemBatchAttributesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemBatchAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItemBatchAttributes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemBatchAttributes<DeSerializersT>,
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
    typeof ItemBatchAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemBatchAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_ID: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_DECIMAL_TOLERANCE: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATTRIBUTE_TYPE: EnumField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribType,
      true,
      true
    >;
    DECIMAL_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPTIMAL_DECIMAL: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTEGER_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPTIMAL_DATE: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPTIMAL_TEXT: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOLERANCE_FAILING_ACTION: EnumField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribToleranceAction,
      true,
      true
    >;
    MINIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MINIMUM_DECIMAL_TOLERANCE: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPTIMAL_INTEGER: OrderableEdmTypeField<
      ItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemBatchAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE_VALUES: OneToManyLink<
      ItemBatchAttributes<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorItemBatchAttributeMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_ITEM_BATCH_ATTRIBUTE_MAPPINGS: OneToManyLink<
      ItemBatchAttributes<DeSerializersT>,
      DeSerializersT,
      SensorItemBatchAttributeMappingsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemBatchAttributes<DeSerializers>>;
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
         * Static representation of the {@link attributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'AttributeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumDecimalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_DECIMAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MaximumDecimalTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link attributeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE: fieldBuilder.buildEnumField(
          'AttributeType',
          PdsBatchAttribType,
          true
        ),
        /**
         * Static representation of the {@link decimalToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'DecimalToleranceIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link optimalDecimal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIMAL_DECIMAL: fieldBuilder.buildEdmTypeField(
          'OptimalDecimal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link integerToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'IntegerToleranceIncrement',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link optimalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIMAL_DATE: fieldBuilder.buildEdmTypeField(
          'OptimalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link maximumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MaximumIntegerTolerance',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link attributeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttributeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link optimalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIMAL_TEXT: fieldBuilder.buildEdmTypeField(
          'OptimalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toleranceFailingAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_FAILING_ACTION: fieldBuilder.buildEnumField(
          'ToleranceFailingAction',
          PdsBatchAttribToleranceAction,
          true
        ),
        /**
         * Static representation of the {@link minimumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MinimumIntegerTolerance',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link minimumDecimalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_DECIMAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MinimumDecimalTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link optimalInteger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIMAL_INTEGER: fieldBuilder.buildEdmTypeField(
          'OptimalInteger',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemBatchAttributes)
      };
    }

    return this._schema;
  }
}
