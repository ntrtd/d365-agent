/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PackingSlipTrackingInformation } from './PackingSlipTrackingInformation';
import { PackingSlipTrackingInformationRequestBuilder } from './PackingSlipTrackingInformationRequestBuilder';
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
export class PackingSlipTrackingInformationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PackingSlipTrackingInformation<DeSerializersT>, DeSerializersT>
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
  ): PackingSlipTrackingInformationApi<DeSerializersT> {
    return new PackingSlipTrackingInformationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PackingSlipTrackingInformation;

  requestBuilder(): PackingSlipTrackingInformationRequestBuilder<DeSerializersT> {
    return new PackingSlipTrackingInformationRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PackingSlipTrackingInformation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PackingSlipTrackingInformation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PackingSlipTrackingInformation<DeSerializersT>,
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
    typeof PackingSlipTrackingInformation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PackingSlipTrackingInformation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PackingSlipTrackingInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      PackingSlipTrackingInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKING_SLIP_NUMBER: OrderableEdmTypeField<
      PackingSlipTrackingInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      PackingSlipTrackingInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRACKING_NUMBER: OrderableEdmTypeField<
      PackingSlipTrackingInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRACKING_URL: OrderableEdmTypeField<
      PackingSlipTrackingInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PackingSlipTrackingInformation<DeSerializers>>;
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packingSlipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'PackingSlipNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link trackingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrackingNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link trackingUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_URL: fieldBuilder.buildEdmTypeField(
          'TrackingURL',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PackingSlipTrackingInformation)
      };
    }

    return this._schema;
  }
}
