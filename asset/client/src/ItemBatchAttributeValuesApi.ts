/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemBatchAttributeValues } from './ItemBatchAttributeValues';
import { ItemBatchAttributeValuesRequestBuilder } from './ItemBatchAttributeValuesRequestBuilder';
import { PdsBatchAttribType } from './PdsBatchAttribType';
import { NoYes } from './NoYes';
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
export class ItemBatchAttributeValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemBatchAttributeValues<DeSerializersT>, DeSerializersT>
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
  ): ItemBatchAttributeValuesApi<DeSerializersT> {
    return new ItemBatchAttributeValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemBatchAttributeValues;

  requestBuilder(): ItemBatchAttributeValuesRequestBuilder<DeSerializersT> {
    return new ItemBatchAttributeValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemBatchAttributeValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemBatchAttributeValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemBatchAttributeValues<DeSerializersT>,
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
    typeof ItemBatchAttributeValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemBatchAttributeValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_ATTRIBUTE_ID: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATTRIBUTE_TYPE: EnumField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribType,
      true,
      true
    >;
    ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STRING_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INHERITED: EnumField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUALITY_ORDER_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItemBatchAttributeValues<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemBatchAttributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'ItemBatchAttributeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link integerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'IntegerValue',
          'Edm.Int32',
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
         * Static representation of the {@link attributeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttributeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'DecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link stringValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE: fieldBuilder.buildEdmTypeField(
          'StringValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_VALUE: fieldBuilder.buildEdmTypeField(
          'DateValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isInherited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INHERITED: fieldBuilder.buildEnumField('IsInherited', NoYes, true),
        /**
         * Static representation of the {@link qualityOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'QualityOrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemBatchAttributeValues)
      };
    }

    return this._schema;
  }
}
