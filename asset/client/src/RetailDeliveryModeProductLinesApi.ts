/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDeliveryModeProductLines } from './RetailDeliveryModeProductLines';
import { RetailDeliveryModeProductLinesRequestBuilder } from './RetailDeliveryModeProductLinesRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { RetailDlvModeExcludeIncludeType } from './RetailDlvModeExcludeIncludeType';
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
export class RetailDeliveryModeProductLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailDeliveryModeProductLines<DeSerializersT>, DeSerializersT>
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
  ): RetailDeliveryModeProductLinesApi<DeSerializersT> {
    return new RetailDeliveryModeProductLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RetailDeliveryModeProductLines<DeSerializersT>,
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

  entityConstructor = RetailDeliveryModeProductLines;

  requestBuilder(): RetailDeliveryModeProductLinesRequestBuilder<DeSerializersT> {
    return new RetailDeliveryModeProductLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDeliveryModeProductLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDeliveryModeProductLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDeliveryModeProductLines<DeSerializersT>,
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
    typeof RetailDeliveryModeProductLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDeliveryModeProductLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_MODE: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      RetailDlvModeExcludeIncludeType,
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailDeliveryModeProductLines<DeSerializers>,
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
      RetailDeliveryModeProductLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailDeliveryModeProductLines<DeSerializers>>;
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
         * Static representation of the {@link deliveryMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE: fieldBuilder.buildEdmTypeField(
          'DeliveryMode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          RetailDlvModeExcludeIncludeType,
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
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
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
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDeliveryModeProductLines)
      };
    }

    return this._schema;
  }
}
