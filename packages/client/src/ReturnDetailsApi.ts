/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReturnDetails } from './ReturnDetails';
import { ReturnDetailsRequestBuilder } from './ReturnDetailsRequestBuilder';
import { WhsReturnDetailOrderType } from './WhsReturnDetailOrderType';
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
export class ReturnDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReturnDetails<DeSerializersT>, DeSerializersT>
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
  ): ReturnDetailsApi<DeSerializersT> {
    return new ReturnDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReturnDetails;

  requestBuilder(): ReturnDetailsRequestBuilder<DeSerializersT> {
    return new ReturnDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReturnDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReturnDetails<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReturnDetails<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ReturnDetails, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ReturnDetails, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETURN_ID: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_DATE: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNT_NAME: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_SERVICE_CODE: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_RETURN_TRACKING_NUMBER: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_NAME: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TYPE: EnumField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      WhsReturnDetailOrderType,
      true,
      true
    >;
    CONTAINER_ID: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTED_DATE_AND_TIME: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CARRIER_CODE: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      ReturnDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReturnDetails<DeSerializers>>;
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
         * Static representation of the {@link returnId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ID: fieldBuilder.buildEdmTypeField(
          'ReturnID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ShipmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierServiceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierReturnTrackingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_RETURN_TRACKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'CarrierReturnTrackingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ReturnAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TYPE: fieldBuilder.buildEnumField(
          'OrderType',
          WhsReturnDetailOrderType,
          true
        ),
        /**
         * Static representation of the {@link containerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ContainerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printedDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'PrintedDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link carrierCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ReturnAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReturnDetails)
      };
    }

    return this._schema;
  }
}
