/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailItemLabelsToPrint } from './RetailItemLabelsToPrint';
import { RetailItemLabelsToPrintRequestBuilder } from './RetailItemLabelsToPrintRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';
import { RetailLabelFutureLabelBase } from './RetailLabelFutureLabelBase';
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
export class RetailItemLabelsToPrintApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailItemLabelsToPrint<DeSerializersT>, DeSerializersT>
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
  ): RetailItemLabelsToPrintApi<DeSerializersT> {
    return new RetailItemLabelsToPrintApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RetailItemLabelsToPrint<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailItemLabelsToPrint;

  requestBuilder(): RetailItemLabelsToPrintRequestBuilder<DeSerializersT> {
    return new RetailItemLabelsToPrintRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailItemLabelsToPrint<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailItemLabelsToPrint<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailItemLabelsToPrint<DeSerializersT>,
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
    typeof RetailItemLabelsToPrint,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailItemLabelsToPrint,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_ON_DATE: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LABEL_TYPE: EnumField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      RetailLabelTypeBase,
      true,
      true
    >;
    VARIANT_ID: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BAR_CODE: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPARISON_PRICE_ON_SHELF_LABEL: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE: EnumField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      RetailLabelFutureLabelBase,
      true,
      true
    >;
    PRINTED: EnumField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEXT_1: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT_2: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_KEY: OrderableEdmTypeField<
      RetailItemLabelsToPrint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RetailItemLabelsToPrint<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailItemLabelsToPrint<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validOnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_ON_DATE: fieldBuilder.buildEdmTypeField(
          'ValidOnDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link labelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_TYPE: fieldBuilder.buildEnumField(
          'LabelType',
          RetailLabelTypeBase,
          true
        ),
        /**
         * Static representation of the {@link variantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'VariantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.String', true),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true),
        /**
         * Static representation of the {@link itemBarCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BAR_CODE: fieldBuilder.buildEdmTypeField(
          'ItemBarCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link configId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'ConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comparisonPriceOnShelfLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPARISON_PRICE_ON_SHELF_LABEL: fieldBuilder.buildEdmTypeField(
          'ComparisonPriceOnShelfLabel',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NAME: fieldBuilder.buildEdmTypeField(
          'ReportName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          RetailLabelFutureLabelBase,
          true
        ),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', NoYes, true),
        /**
         * Static representation of the {@link text1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_1: fieldBuilder.buildEdmTypeField('Text1', 'Edm.String', true),
        /**
         * Static representation of the {@link text2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_2: fieldBuilder.buildEdmTypeField('Text2', 'Edm.String', true),
        /**
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_KEY: fieldBuilder.buildEdmTypeField(
          'PrimaryKey',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailItemLabelsToPrint)
      };
    }

    return this._schema;
  }
}
