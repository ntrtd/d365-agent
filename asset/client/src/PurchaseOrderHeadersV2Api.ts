/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderHeadersV2 } from './PurchaseOrderHeadersV2';
import { PurchaseOrderHeadersV2RequestBuilder } from './PurchaseOrderHeadersV2RequestBuilder';
import { EmploymentContractorsApi } from './EmploymentContractorsApi';
import { CdsPurchaseOrderLinesApi } from './CdsPurchaseOrderLinesApi';
import { PurchaseOrderLinesApi } from './PurchaseOrderLinesApi';
import { PurchaseOrderHeaderDocumentAttachmentsApi } from './PurchaseOrderHeaderDocumentAttachmentsApi';
import { PurchaseOrderLinesV2Api } from './PurchaseOrderLinesV2Api';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { PurchaseOrderHeaderChargesApi } from './PurchaseOrderHeaderChargesApi';
import { VendorsV2Api } from './VendorsV2Api';
import { DimensionSetsApi } from './DimensionSetsApi';
import { PlannedOrdersApi } from './PlannedOrdersApi';
import { NoYes } from './NoYes';
import { SettlementType } from './SettlementType';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { BankDocumentType } from './BankDocumentType';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { Listcode } from './Listcode';
import { PurchStatus } from './PurchStatus';
import { VersioningDocumentState } from './VersioningDocumentState';
import { Timezone } from './Timezone';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderHeadersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchaseOrderHeadersV2<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderHeadersV2Api<DeSerializersT> {
    return new PurchaseOrderHeadersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link employmentContractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CONTRACTORS: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      EmploymentContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPurchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PURCHASE_ORDER_LINES: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      CdsPurchaseOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderDocumentAttachmentEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_DOCUMENT_ATTACHMENT_ENTITY: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES_V_2: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmploymentContractorsApi<DeSerializersT>,
      CdsPurchaseOrderLinesApi<DeSerializersT>,
      PurchaseOrderLinesApi<DeSerializersT>,
      PurchaseOrderHeaderDocumentAttachmentsApi<DeSerializersT>,
      PurchaseOrderLinesV2Api<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      PurchaseOrderHeaderChargesApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYMENT_CONTRACTORS: new OneToManyLink(
        'EmploymentContractors',
        this,
        linkedApis[0]
      ),
      CDS_PURCHASE_ORDER_LINES: new OneToManyLink(
        'CDSPurchaseOrderLines',
        this,
        linkedApis[1]
      ),
      PURCHASE_ORDER_LINES: new OneToManyLink(
        'PurchaseOrderLines',
        this,
        linkedApis[2]
      ),
      PURCHASE_ORDER_HEADER_DOCUMENT_ATTACHMENT_ENTITY: new OneToManyLink(
        'PurchaseOrderHeaderDocumentAttachmentEntity',
        this,
        linkedApis[3]
      ),
      PURCHASE_ORDER_LINES_V_2: new OneToManyLink(
        'PurchaseOrderLinesV2',
        this,
        linkedApis[4]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[5]
      ),
      PURCHASE_ORDER_HEADER_CHARGES: new OneToManyLink(
        'PurchaseOrderHeaderCharges',
        this,
        linkedApis[6]
      ),
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[7]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[8]),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = PurchaseOrderHeadersV2;

  requestBuilder(): PurchaseOrderHeadersV2RequestBuilder<DeSerializersT> {
    return new PurchaseOrderHeadersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderHeadersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderHeadersV2<DeSerializersT>,
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
    typeof PurchaseOrderHeadersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderHeadersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_OPERATION_TYPE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_STORE_AVAILABLE_SALES_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_INVOICE_DECLARATION_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHANGE_MANAGEMENT_ACTIVE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TRANSACTION_SETTLEMENT_TYPE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    DELIVERY_CITY_IN_KANA: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET_IN_KANA: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_TEMPLATE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_REBATE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTY: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_HEADER_CREATION_METHOD: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      PurchPurchaseOrderCreationMethod,
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CONSOLIDATED_INVOICE_TARGET: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONFIRMING_PURCHASE_ORDER_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      BankDocumentType,
      true,
      true
    >;
    EXPECTED_STORE_RECEIPT_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_SERVICE_CATEGORY_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_POOL_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIP_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPECTED_CROSS_DOCKING_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_INVOICE_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSACTION_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMING_PURCHASE_ORDER_CODE_LANGUAGE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TYPE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      InvoiceTypeMy,
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_SELF_BILLED_INVOICE_APPROVAL_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERED_DIRECTLY: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONFIRMED_SHIP_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CALENDAR_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_STATISTICS_PROCEDURE_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ORDER_REFERENCE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSPORTATION_DOCUMENT_LINE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_POSTING_PROFILE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES_LIST_CODE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    IMPORT_DECLARATION_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_STATUS: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_APPROVAL_STATUS: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      VersioningDocumentState,
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    ATTENTION_INFORMATION: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_VENDOR: EnumField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_PORT_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STATE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RECEIVING_SITE_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_CONTRACT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADE_END_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      PurchaseOrderHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentContractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CONTRACTORS: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      EmploymentContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPurchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PURCHASE_ORDER_LINES: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      CdsPurchaseOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderDocumentAttachmentEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_DOCUMENT_ATTACHMENT_ENTITY: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES_V_2: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      PurchaseOrderHeadersV2<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderHeadersV2<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentOperationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_OPERATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentOperationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedStoreAvailableSalesDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_STORE_AVAILABLE_SALES_DATE: fieldBuilder.buildEdmTypeField(
          'ExpectedStoreAvailableSalesDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorInvoiceDeclarationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_DECLARATION_ID: fieldBuilder.buildEdmTypeField(
          'VendorInvoiceDeclarationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
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
         * Static representation of the {@link isChangeManagementActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHANGE_MANAGEMENT_ACTIVE: fieldBuilder.buildEnumField(
          'IsChangeManagementActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorTransactionSettlementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TRANSACTION_SETTLEMENT_TYPE: fieldBuilder.buildEnumField(
          'VendorTransactionSettlementType',
          SettlementType,
          true
        ),
        /**
         * Static representation of the {@link deliveryCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CashDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NAME: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multilineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseRebateVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REBATE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseRebateVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requesterPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequesterPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderHeaderCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_HEADER_CREATION_METHOD: fieldBuilder.buildEnumField(
          'PurchaseOrderHeaderCreationMethod',
          PurchPurchaseOrderCreationMethod,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isConsolidatedInvoiceTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSOLIDATED_INVOICE_TARGET: fieldBuilder.buildEnumField(
          'IsConsolidatedInvoiceTarget',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link confirmingPurchaseOrderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMING_PURCHASE_ORDER_CODE: fieldBuilder.buildEdmTypeField(
          'ConfirmingPurchaseOrderCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'BankDocumentType',
          BankDocumentType,
          true
        ),
        /**
         * Static representation of the {@link expectedStoreReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_STORE_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ExpectedStoreReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replenishmentServiceCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_SERVICE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ReplenishmentServiceCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedShipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expectedCrossDockingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_CROSS_DOCKING_DATE: fieldBuilder.buildEdmTypeField(
          'ExpectedCrossDockingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedInvoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_INVOICE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedInvoiceAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmingPurchaseOrderCodeLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMING_PURCHASE_ORDER_CODE_LANGUAGE_ID:
          fieldBuilder.buildEdmTypeField(
            'ConfirmingPurchaseOrderCodeLanguageId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE: fieldBuilder.buildEnumField(
          'InvoiceType',
          InvoiceTypeMy,
          true
        ),
        /**
         * Static representation of the {@link arePricesIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_INCLUDING_SALES_TAX: fieldBuilder.buildEnumField(
          'ArePricesIncludingSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gstSelfBilledInvoiceApprovalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_SELF_BILLED_INVOICE_APPROVAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'GSTSelfBilledInvoiceApprovalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveredDirectly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERED_DIRECTLY: fieldBuilder.buildEnumField(
          'IsDeliveredDirectly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link confirmedShipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'ShipCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatStatisticsProcedureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICS_PROCEDURE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticsProcedureCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'VendorOrderReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replenishmentWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'FixedDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transportationDocumentLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationDocumentLineId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorPostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'VendorPostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodSpecificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'VendorPaymentMethodSpecificationName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoiceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReceivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euSalesListCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST_CODE: fieldBuilder.buildEnumField(
          'EUSalesListCode',
          Listcode,
          true
        ),
        /**
         * Static representation of the {@link importDeclarationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DECLARATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ImportDeclarationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_STATUS: fieldBuilder.buildEnumField(
          'PurchaseOrderStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'DocumentApprovalStatus',
          VersioningDocumentState,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link attentionInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTENTION_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AttentionInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatTransportModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSPORT_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransportModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_VENDOR: fieldBuilder.buildEnumField(
          'IsOneTimeVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PORT_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ordererPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrdererPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'VendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReceivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationRoutePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'TransportationRoutePlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatContractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ZakatContractNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tradeEndCustomerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_END_CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'TradeEndCustomerAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseOrderHeadersV2)
      };
    }

    return this._schema;
  }
}
