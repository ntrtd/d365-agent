/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemBatchAttributeValuesV2 } from './ItemBatchAttributeValuesV2';
import { ItemBatchAttributeValuesV2RequestBuilder } from './ItemBatchAttributeValuesV2RequestBuilder';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { ItemBatchAttributesApi } from './ItemBatchAttributesApi';
import { ItemBatchesApi } from './ItemBatchesApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ItemBatchAttributeValuesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ItemBatchAttributeValuesV2<DeSerializersT>, DeSerializersT>
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
  ): ItemBatchAttributeValuesV2Api<DeSerializersT> {
    return new ItemBatchAttributeValuesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link qualityOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADER: OneToOneLink<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatchAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE: OneToOneLink<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      QualityOrderHeadersApi<DeSerializersT>,
      ItemBatchAttributesApi<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      QUALITY_ORDER_HEADER: new OneToOneLink(
        'QualityOrderHeader',
        this,
        linkedApis[0]
      ),
      ITEM_BATCH_ATTRIBUTE: new OneToOneLink(
        'ItemBatchAttribute',
        this,
        linkedApis[1]
      ),
      ITEM_BATCH: new OneToOneLink('ItemBatch', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ItemBatchAttributeValuesV2;

  requestBuilder(): ItemBatchAttributeValuesV2RequestBuilder<DeSerializersT> {
    return new ItemBatchAttributeValuesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemBatchAttributeValuesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemBatchAttributeValuesV2<DeSerializersT>,
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
    typeof ItemBatchAttributeValuesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemBatchAttributeValuesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_ATTRIBUTE_ID: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENUMERATE_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_TYPE: EnumField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribType,
      true,
      true
    >;
    ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STRING_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_VALUE: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INHERITED: EnumField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUALITY_ORDER_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ItemBatchAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link qualityOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADER: OneToOneLink<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatchAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE: OneToOneLink<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      ItemBatchAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemBatchAttributeValuesV2<DeSerializers>>;
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
         * Static representation of the {@link enumerateValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENUMERATE_VALUE: fieldBuilder.buildEdmTypeField(
          'EnumerateValue',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemBatchAttributeValuesV2)
      };
    }

    return this._schema;
  }
}
