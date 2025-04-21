/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundLoadPackingStructureLinesV2 } from './InboundLoadPackingStructureLinesV2';
import { InboundLoadPackingStructureLinesV2RequestBuilder } from './InboundLoadPackingStructureLinesV2RequestBuilder';
import { InboundLoadPackingStructuresApi } from './InboundLoadPackingStructuresApi';
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
export class InboundLoadPackingStructureLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InboundLoadPackingStructureLinesV2<DeSerializersT>,
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
  ): InboundLoadPackingStructureLinesV2Api<DeSerializersT> {
    return new InboundLoadPackingStructureLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link loadPackingStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE: OneToOneLink<
      InboundLoadPackingStructureLinesV2<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructuresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundLoadPackingStructuresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LOAD_PACKING_STRUCTURE: new OneToOneLink(
        'LoadPackingStructure',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InboundLoadPackingStructureLinesV2;

  requestBuilder(): InboundLoadPackingStructureLinesV2RequestBuilder<DeSerializersT> {
    return new InboundLoadPackingStructureLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundLoadPackingStructureLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundLoadPackingStructureLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundLoadPackingStructureLinesV2<DeSerializersT>,
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
    typeof InboundLoadPackingStructureLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundLoadPackingStructureLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKING_STRUCTURE_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_EXPIRATION_DATE: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CAPTURED_WEIGHT: OrderableEdmTypeField<
      InboundLoadPackingStructureLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loadPackingStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE: OneToOneLink<
      InboundLoadPackingStructureLinesV2<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructuresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundLoadPackingStructureLinesV2<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', InboundLoadPackingStructureLinesV2)
      };
    }

    return this._schema;
  }
}
