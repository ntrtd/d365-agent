/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderExternalOriginLines } from './InboundShipmentOrderExternalOriginLines';
import { InboundShipmentOrderExternalOriginLinesRequestBuilder } from './InboundShipmentOrderExternalOriginLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class InboundShipmentOrderExternalOriginLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InboundShipmentOrderExternalOriginLines<DeSerializersT>,
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
  ): InboundShipmentOrderExternalOriginLinesApi<DeSerializersT> {
    return new InboundShipmentOrderExternalOriginLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InboundShipmentOrderExternalOriginLines;

  requestBuilder(): InboundShipmentOrderExternalOriginLinesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderExternalOriginLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderExternalOriginLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderExternalOriginLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderExternalOriginLines<DeSerializersT>,
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
    typeof InboundShipmentOrderExternalOriginLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderExternalOriginLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOriginLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      InboundShipmentOrderExternalOriginLines<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inboundShipmentOrderOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inboundShipmentOrderUpdateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_UPDATE_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderUpdateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderExternalOriginLines)
      };
    }

    return this._schema;
  }
}
