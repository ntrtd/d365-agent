/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailItemLabels } from './RetailItemLabels';
import { RetailItemLabelsRequestBuilder } from './RetailItemLabelsRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { RetailLabelFutureLabelBase } from './RetailLabelFutureLabelBase';
import { NoYes } from './NoYes';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';
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
export class RetailItemLabelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailItemLabels<DeSerializersT>, DeSerializersT>
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
  ): RetailItemLabelsApi<DeSerializersT> {
    return new RetailItemLabelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RetailItemLabels<DeSerializersT>,
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

  entityConstructor = RetailItemLabels;

  requestBuilder(): RetailItemLabelsRequestBuilder<DeSerializersT> {
    return new RetailItemLabelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailItemLabels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailItemLabels<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailItemLabels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailItemLabels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailItemLabels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_ON_DATE: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BAR_CODE: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPARISON_PRICE_ON_SHELF_LABEL: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE: EnumField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      RetailLabelFutureLabelBase,
      true,
      true
    >;
    PRINTED: EnumField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEXT_1: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT_2: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_KEY: OrderableEdmTypeField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_TYPE: EnumField<
      RetailItemLabels<DeSerializers>,
      DeSerializersT,
      RetailLabelTypeBase,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RetailItemLabels<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailItemLabels<DeSerializers>>;
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
        /**
         * Static representation of the {@link labelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_TYPE: fieldBuilder.buildEnumField(
          'LabelType',
          RetailLabelTypeBase,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailItemLabels)
      };
    }

    return this._schema;
  }
}
