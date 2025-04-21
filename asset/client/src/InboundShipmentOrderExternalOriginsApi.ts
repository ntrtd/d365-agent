/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderExternalOrigins } from './InboundShipmentOrderExternalOrigins';
import { InboundShipmentOrderExternalOriginsRequestBuilder } from './InboundShipmentOrderExternalOriginsRequestBuilder';
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
export class InboundShipmentOrderExternalOriginsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InboundShipmentOrderExternalOrigins<DeSerializersT>,
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
  ): InboundShipmentOrderExternalOriginsApi<DeSerializersT> {
    return new InboundShipmentOrderExternalOriginsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InboundShipmentOrderExternalOrigins;

  requestBuilder(): InboundShipmentOrderExternalOriginsRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderExternalOriginsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderExternalOrigins<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderExternalOrigins<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderExternalOrigins<DeSerializersT>,
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
    typeof InboundShipmentOrderExternalOrigins,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderExternalOrigins,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INBOUND_SHIPMENT_ORDER_EXTERNAL_ORIGIN_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      InboundShipmentOrderExternalOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WAREHOUSE_ID: OrderableEdmTypeField<
      InboundShipmentOrderExternalOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_TYPE: OrderableEdmTypeField<
      InboundShipmentOrderExternalOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderExternalOrigins<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link inboundShipmentOrderExternalOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_EXTERNAL_ORIGIN_ID:
          fieldBuilder.buildEdmTypeField(
            'InboundShipmentOrderExternalOriginId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link consignerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsignerReference',
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
         * Static representation of the {@link externalWarehouseManagementSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseManagementSystemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderExternalOrigins)
      };
    }

    return this._schema;
  }
}
