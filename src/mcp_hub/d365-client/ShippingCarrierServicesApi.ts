/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingCarrierServices } from './ShippingCarrierServices';
import { ShippingCarrierServicesRequestBuilder } from './ShippingCarrierServicesRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
import { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { TmsShippingLabelRequestType } from './TmsShippingLabelRequestType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ShippingCarrierServicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ShippingCarrierServices<DeSerializersT>, DeSerializersT>
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
  ): ShippingCarrierServicesApi<DeSerializersT> {
    return new ShippingCarrierServicesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      OutboundShipmentOrderHeadersApi<DeSerializersT>,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      OUTBOUND_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'OutboundShipmentOrderHeaders',
        this,
        linkedApis[1]
      ),
      SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentPackingSlipJournalHeaders',
        this,
        linkedApis[2]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[3]
      ),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[4]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ShippingCarrierServices;

  requestBuilder(): ShippingCarrierServicesRequestBuilder<DeSerializersT> {
    return new ShippingCarrierServicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShippingCarrierServices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingCarrierServices<DeSerializersT>,
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
    typeof ShippingCarrierServices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingCarrierServices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_LOAD_TEMPLATE_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_BILLING_GROUP_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_LABEL_REQUEST_TYPE: EnumField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      TmsShippingLabelRequestType,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_VOLUME_FACTOR: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_NAME: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_METHOD_ID: OrderableEdmTypeField<
      ShippingCarrierServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarrierServices<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ShippingCarrierServices<DeSerializers>>;
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
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ServiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link externalShippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalLoadTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_LOAD_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'PhysicalLoadTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationBillingGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BILLING_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBillingGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingLabelRequestType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_LABEL_REQUEST_TYPE: fieldBuilder.buildEnumField(
          'ShippingLabelRequestType',
          TmsShippingLabelRequestType,
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
         * Static representation of the {@link loadVolumeFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_VOLUME_FACTOR: fieldBuilder.buildEdmTypeField(
          'LoadVolumeFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationMethodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_METHOD_ID: fieldBuilder.buildEdmTypeField(
          'TransportationMethodId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingCarrierServices)
      };
    }

    return this._schema;
  }
}
