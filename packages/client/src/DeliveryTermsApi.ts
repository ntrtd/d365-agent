/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeliveryTerms } from './DeliveryTerms';
import { DeliveryTermsRequestBuilder } from './DeliveryTermsRequestBuilder';
import { ProspectsApi } from './ProspectsApi';
import { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
import { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { LogisticsLocationRoleType } from './LogisticsLocationRoleType';
import { NoYes } from './NoYes';
import { WmsFreightChargeTerms } from './WmsFreightChargeTerms';
import { CustomInventTransStatusRu } from './CustomInventTransStatusRu';
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
export class DeliveryTermsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeliveryTerms<DeSerializersT>, DeSerializersT>
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
  ): DeliveryTermsApi<DeSerializersT> {
    return new DeliveryTermsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProspectsApi<DeSerializersT>,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>,
      PurchaseAgreementsApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      OutboundShipmentOrderHeadersApi<DeSerializersT>,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[0]),
      BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationBundleParentLines',
        this,
        linkedApis[1]
      ),
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[2]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[3]
      ),
      OUTBOUND_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'OutboundShipmentOrderHeaders',
        this,
        linkedApis[4]
      ),
      SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentPackingSlipJournalHeaders',
        this,
        linkedApis[5]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[6]
      ),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[7]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[8]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = DeliveryTerms;

  requestBuilder(): DeliveryTermsRequestBuilder<DeSerializersT> {
    return new DeliveryTermsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeliveryTerms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeliveryTerms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DeliveryTerms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DeliveryTerms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DeliveryTerms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMS_CODE: OrderableEdmTypeField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_PROFILE: OrderableEdmTypeField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_CODE: OrderableEdmTypeField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_LOCATION_ROLE: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      LogisticsLocationRoleType,
      true,
      true
    >;
    IS_CASH_ON_DELIVERY: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_RETAIL_SALES_ORDERS_GET_TRANSPORTATION_CHARGES_ADDED: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_SHIPMENT_CONFIRMATION_TRANSFER_CHARGES: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMS_DESCRIPTION: OrderableEdmTypeField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_CHARGE_TERMS: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      WmsFreightChargeTerms,
      true,
      true
    >;
    RECEIPT_TRANSACTION_STATUS: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      CustomInventTransStatusRu,
      true,
      true
    >;
    PORT_MANDATORY: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GOODS_IN_TRANSIT_CONTROL: EnumField<
      DeliveryTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      DeliveryTerms<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeliveryTerms<DeSerializers>>;
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
         * Static representation of the {@link termsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'TermsCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE: fieldBuilder.buildEdmTypeField(
          'InventoryProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxLocationRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_LOCATION_ROLE: fieldBuilder.buildEnumField(
          'SalesTaxLocationRole',
          LogisticsLocationRoleType,
          true
        ),
        /**
         * Static representation of the {@link isCashOnDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CASH_ON_DELIVERY: fieldBuilder.buildEnumField(
          'IsCashOnDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link doRetailSalesOrdersGetTransportationChargesAdded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_RETAIL_SALES_ORDERS_GET_TRANSPORTATION_CHARGES_ADDED:
          fieldBuilder.buildEnumField(
            'DoRetailSalesOrdersGetTransportationChargesAdded',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willShipmentConfirmationTransferCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SHIPMENT_CONFIRMATION_TRANSFER_CHARGES:
          fieldBuilder.buildEnumField(
            'WillShipmentConfirmationTransferCharges',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link termsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TermsDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightChargeTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_CHARGE_TERMS: fieldBuilder.buildEnumField(
          'FreightChargeTerms',
          WmsFreightChargeTerms,
          true
        ),
        /**
         * Static representation of the {@link receiptTransactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'ReceiptTransactionStatus',
          CustomInventTransStatusRu,
          true
        ),
        /**
         * Static representation of the {@link portMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT_MANDATORY: fieldBuilder.buildEnumField(
          'PortMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link goodsInTransitControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_IN_TRANSIT_CONTROL: fieldBuilder.buildEnumField(
          'GoodsInTransitControl',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeliveryTerms)
      };
    }

    return this._schema;
  }
}
