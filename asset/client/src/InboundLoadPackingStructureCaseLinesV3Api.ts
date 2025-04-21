/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundLoadPackingStructureCaseLinesV3 } from './InboundLoadPackingStructureCaseLinesV3';
import { InboundLoadPackingStructureCaseLinesV3RequestBuilder } from './InboundLoadPackingStructureCaseLinesV3RequestBuilder';
import { InboundLoadPackingStructureCasesApi } from './InboundLoadPackingStructureCasesApi';
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
export class InboundLoadPackingStructureCaseLinesV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InboundLoadPackingStructureCaseLinesV3<DeSerializersT>,
      DeSerializersT
    >
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
  ): InboundLoadPackingStructureCaseLinesV3Api<DeSerializersT> {
    return new InboundLoadPackingStructureCaseLinesV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link loadPackingStructureCase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE: OneToOneLink<
      InboundLoadPackingStructureCaseLinesV3<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundLoadPackingStructureCasesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LOAD_PACKING_STRUCTURE_CASE: new OneToOneLink(
        'LoadPackingStructureCase',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InboundLoadPackingStructureCaseLinesV3;

  requestBuilder(): InboundLoadPackingStructureCaseLinesV3RequestBuilder<DeSerializersT> {
    return new InboundLoadPackingStructureCaseLinesV3RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundLoadPackingStructureCaseLinesV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundLoadPackingStructureCaseLinesV3<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundLoadPackingStructureCaseLinesV3<DeSerializersT>,
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
    typeof InboundLoadPackingStructureCaseLinesV3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundLoadPackingStructureCaseLinesV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKING_STRUCTURE_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_EXPIRATION_DATE: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CAPTURED_WEIGHT: OrderableEdmTypeField<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loadPackingStructureCase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE: OneToOneLink<
      InboundLoadPackingStructureCaseLinesV3<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      InboundLoadPackingStructureCaseLinesV3<DeSerializers>
    >;
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
         * Static representation of the {@link inboundShipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packingStructureLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_STRUCTURE_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PackingStructureLicensePlateNumber',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBatchExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ItemBatchExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link capturedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'CapturedWeight',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundLoadPackingStructureCaseLinesV3)
      };
    }

    return this._schema;
  }
}
