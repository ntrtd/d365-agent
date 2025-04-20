/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FolioAutoCostHeaders } from './FolioAutoCostHeaders';
import { FolioAutoCostHeadersRequestBuilder } from './FolioAutoCostHeadersRequestBuilder';
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
export class FolioAutoCostHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FolioAutoCostHeaders<DeSerializersT>, DeSerializersT>
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
  ): FolioAutoCostHeadersApi<DeSerializersT> {
    return new FolioAutoCostHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FolioAutoCostHeaders;

  requestBuilder(): FolioAutoCostHeadersRequestBuilder<DeSerializersT> {
    return new FolioAutoCostHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FolioAutoCostHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FolioAutoCostHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FolioAutoCostHeaders<DeSerializersT>,
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
    typeof FolioAutoCostHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FolioAutoCostHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FOLIO_COST_AUTO_NUMBER: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_LANDED_COST_TYPE_GROUP_ID: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_SHIPPING_PORT_ID: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_BROKER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_SHIPPING_PORT_ID: OrderableEdmTypeField<
      FolioAutoCostHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FolioAutoCostHeaders<DeSerializers>>;
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
         * Static representation of the {@link folioCostAutoNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_COST_AUTO_NUMBER: fieldBuilder.buildEdmTypeField(
          'FolioCostAutoNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorLandedCostTypeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_LANDED_COST_TYPE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorLandedCostTypeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'FromShippingPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsBrokerVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_BROKER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomsBrokerVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'ToShippingPortId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FolioAutoCostHeaders)
      };
    }

    return this._schema;
  }
}
