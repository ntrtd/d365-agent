/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderRequestStatus } from './InboundShipmentOrderRequestStatus';
import { InboundShipmentOrderRequestStatusRequestBuilder } from './InboundShipmentOrderRequestStatusRequestBuilder';
import { WhsewShipmentOrderRequestStatus } from './WhsewShipmentOrderRequestStatus';
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
export class InboundShipmentOrderRequestStatusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderRequestStatus<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderRequestStatusApi<DeSerializersT> {
    return new InboundShipmentOrderRequestStatusApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InboundShipmentOrderRequestStatus;

  requestBuilder(): InboundShipmentOrderRequestStatusRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderRequestStatusRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderRequestStatus<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderRequestStatus<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderRequestStatus<DeSerializersT>,
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
    typeof InboundShipmentOrderRequestStatus,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderRequestStatus,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequestStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_REQUEST_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequestStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_STATUS: EnumField<
      InboundShipmentOrderRequestStatus<DeSerializers>,
      DeSerializersT,
      WhsewShipmentOrderRequestStatus,
      true,
      true
    >;
    RESPONSE_MESSAGE: OrderableEdmTypeField<
      InboundShipmentOrderRequestStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderRequestStatus<DeSerializers>>;
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
         * Static representation of the {@link inboundShipmentOrderRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderRequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEnumField(
          'RequestStatus',
          WhsewShipmentOrderRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link responseMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_MESSAGE: fieldBuilder.buildEdmTypeField(
          'ResponseMessage',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderRequestStatus)
      };
    }

    return this._schema;
  }
}
