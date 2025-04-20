/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingCarriers } from './ShippingCarriers';
import { ShippingCarriersRequestBuilder } from './ShippingCarriersRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
import { FreightBillDetailsApi } from './FreightBillDetailsApi';
import { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { NoYes } from './NoYes';
import { TmsLoadTender } from './TmsLoadTender';
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
export class ShippingCarriersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ShippingCarriers<DeSerializersT>, DeSerializersT>
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
  ): ShippingCarriersApi<DeSerializersT> {
    return new ShippingCarriersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      OutboundShipmentOrderHeadersApi<DeSerializersT>,
      FreightBillDetailsApi<DeSerializersT>,
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
      FREIGHT_BILL_DETAILS: new OneToManyLink(
        'FreightBillDetails',
        this,
        linkedApis[2]
      ),
      SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentPackingSlipJournalHeaders',
        this,
        linkedApis[3]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[4]
      ),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[5]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ShippingCarriers;

  requestBuilder(): ShippingCarriersRequestBuilder<DeSerializersT> {
    return new ShippingCarriersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShippingCarriers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ShippingCarriers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ShippingCarriers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ShippingCarriers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingCarriers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARRIER_ID: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SHIPPING_CARRIER_ACTIVE: EnumField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CARRIER_NAME: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_TENDER_TYPE: EnumField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      TmsLoadTender,
      true,
      true
    >;
    SHIPPING_CARRIER_TRACKING_URL: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_WEBSITE_URL: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SHIPPING_CARRIER_RATING_ACTIVE: EnumField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRO_NUMBER_SEQUENCE_ID: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BROKER: EnumField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AVERAGE_CONTAINER_WEIGHT: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDARD_CARRIER_ALPHA_CODE: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ShippingCarriers<DeSerializers>,
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
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ShippingCarriers<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ShippingCarriers<DeSerializers>>;
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
         * Static representation of the {@link carrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'CarrierId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isShippingCarrierActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIPPING_CARRIER_ACTIVE: fieldBuilder.buildEnumField(
          'IsShippingCarrierActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link carrierName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_NAME: fieldBuilder.buildEdmTypeField(
          'CarrierName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationTenderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_TENDER_TYPE: fieldBuilder.buildEnumField(
          'TransportationTenderType',
          TmsLoadTender,
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierTrackingUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_TRACKING_URL: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierTrackingURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierWebsiteUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_WEBSITE_URL: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierWebsiteURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isShippingCarrierRatingActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIPPING_CARRIER_RATING_ACTIVE: fieldBuilder.buildEnumField(
          'IsShippingCarrierRatingActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link proNumberSequenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRO_NUMBER_SEQUENCE_ID: fieldBuilder.buildEdmTypeField(
          'ProNumberSequenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBroker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BROKER: fieldBuilder.buildEnumField('IsBroker', NoYes, true),
        /**
         * Static representation of the {@link averageContainerWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_CONTAINER_WEIGHT: fieldBuilder.buildEdmTypeField(
          'AverageContainerWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standardCarrierAlphaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_CARRIER_ALPHA_CODE: fieldBuilder.buildEdmTypeField(
          'StandardCarrierAlphaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingCarriers)
      };
    }

    return this._schema;
  }
}
