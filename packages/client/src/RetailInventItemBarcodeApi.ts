/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInventItemBarcode } from './RetailInventItemBarcode';
import { RetailInventItemBarcodeRequestBuilder } from './RetailInventItemBarcodeRequestBuilder';
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
export class RetailInventItemBarcodeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailInventItemBarcode<DeSerializersT>, DeSerializersT>
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
  ): RetailInventItemBarcodeApi<DeSerializersT> {
    return new RetailInventItemBarcodeApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailInventItemBarcode;

  requestBuilder(): RetailInventItemBarcodeRequestBuilder<DeSerializersT> {
    return new RetailInventItemBarcodeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailInventItemBarcode<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInventItemBarcode<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInventItemBarcode<DeSerializersT>,
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
    typeof RetailInventItemBarcode,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInventItemBarcode,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BAR_CODE: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_VARIANT_ID: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BLOCKED: EnumField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_FOR_INPUT: EnumField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_SHOW_FOR_ITEM: EnumField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_FOR_PRINTING: EnumField<
      RetailInventItemBarcode<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailInventItemBarcode<DeSerializers>>;
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
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'barcodeSetupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'inventDimId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemId', 'Edm.String', false),
        /**
         * Static representation of the {@link itemBarCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BAR_CODE: fieldBuilder.buildEdmTypeField(
          'itemBarCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link retailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'RetailVariantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitID', 'Edm.String', false),
        /**
         * Static representation of the {@link blocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED: fieldBuilder.buildEnumField('Blocked', NoYes, true),
        /**
         * Static representation of the {@link useForInput} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FOR_INPUT: fieldBuilder.buildEnumField('useForInput', NoYes, true),
        /**
         * Static representation of the {@link retailShowForItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_SHOW_FOR_ITEM: fieldBuilder.buildEnumField(
          'RetailShowForItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link useForPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FOR_PRINTING: fieldBuilder.buildEnumField(
          'useForPrinting',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInventItemBarcode)
      };
    }

    return this._schema;
  }
}
