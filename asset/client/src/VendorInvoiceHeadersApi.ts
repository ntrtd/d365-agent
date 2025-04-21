/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInvoiceHeaders } from './VendorInvoiceHeaders';
import { VendorInvoiceHeadersRequestBuilder } from './VendorInvoiceHeadersRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { VendorInvoiceLinesApi } from './VendorInvoiceLinesApi';
import { VendorInvoiceDocumentAttachmentsApi } from './VendorInvoiceDocumentAttachmentsApi';
import { NoYes } from './NoYes';
import { FiscalDocumentSpecieBr } from './FiscalDocumentSpecieBr';
import { WmsFreightChargeTerms } from './WmsFreightChargeTerms';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { Listcode } from './Listcode';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TypeOfCTeBr } from './TypeOfCTeBr';
import { PurchInvoiceType } from './PurchInvoiceType';
import { SettlementType } from './SettlementType';
import { WmsFreightedBy } from './WmsFreightedBy';
import { PsnPurchasingCardTransactionType } from './PsnPurchasingCardTransactionType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorInvoiceHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorInvoiceHeaders<DeSerializersT>, DeSerializersT>
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
  ): VendorInvoiceHeadersApi<DeSerializersT> {
    return new VendorInvoiceHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VendorInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_LINE: OneToManyLink<
      VendorInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorInvoiceDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_DOCUMENT_ATTACHMENT: OneToManyLink<
      VendorInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceDocumentAttachmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      VendorInvoiceLinesApi<DeSerializersT>,
      VendorInvoiceDocumentAttachmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      VENDOR_INVOICE_LINE: new OneToManyLink(
        'VendorInvoiceLine',
        this,
        linkedApis[1]
      ),
      VENDOR_INVOICE_DOCUMENT_ATTACHMENT: new OneToManyLink(
        'VendorInvoiceDocumentAttachment',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = VendorInvoiceHeaders;

  requestBuilder(): VendorInvoiceHeadersRequestBuilder<DeSerializersT> {
    return new VendorInvoiceHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorInvoiceHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorInvoiceHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorInvoiceHeaders<DeSerializersT>,
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
    typeof VendorInvoiceHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorInvoiceHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_OPERATION_TYPE_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CARRIER_NAME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ERROR_INVALID_DISTRIBUTION: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UUID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_SPECIE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      FiscalDocumentSpecieBr,
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_FREIGHT_CHARGE_TERMS: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      WmsFreightChargeTerms,
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_DATE_COMMENT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_RECEIVED_DATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ON_HOLD: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECALCULATION: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CFPS_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANCE_APPROVED_DATE_TIME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_INVOICE_REVIEW_STATUS: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      VendInvoiceRequestStatus,
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_UUID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DESCRIPTION: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_PACKING_NAME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_SPECIFIC_SYMBOL: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONSTANT_SYMBOL: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_INVOICE_TYPE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      InvoiceTypeMy,
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_CODE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CORRECTION: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_OPERATION_PRESENCE_TYPE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    VENDOR_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANCE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_GROUP_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    C_TE_TYPE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      TypeOfCTeBr,
      true,
      true
    >;
    CHARGES_GROUP: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_DOCUMENT_SUBMISSION_ID_W: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SERVICE_CODE_ON_DELIVERY_ADDRESS: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_PAYMENT_RELEASE_DATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IMPORTED_SALES_TAX: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_VEHICLE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_IMPORT_DECLARATION_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRIANGULATION: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SECONDARY_EXCHANGE_RATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IGNORE_CALCULATED_SALES_TAX: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_REQUESTED_WORKER_EMAIL: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ROUNDING: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ROUND_OFF: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_BATCH: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_STATE_REGISTERED: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_TYPE_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINAL_USER: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVE_POSTING_WITH_MATCHING_DISCREPANCIES: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_ONLY_IMPORT: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_DECLARATION_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_INVOICE_TYPE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      PurchInvoiceType,
      true,
      true
    >;
    FISCAL_DOCUMENT_MODEL: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ELECTRONIC_INVOICE_FOR_SERVICE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_SERIES: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_GROUP: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICES_INCLUDE_SALES_TAX: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_SERIES: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICS_PROCEDURE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_RATE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_TRANSPORT_BRAND: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ID_RANGE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKINGSLIP_RANGE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    PURCH_RECEIPT_DATE_W: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FREIGHTED_BY: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      WmsFreightedBy,
      true,
      true
    >;
    ACCESS_KEY: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_MANAGER_FR: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_SERVICE_CODE_FR: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_INVOICE_FRAMEWORK_TYPE_FR: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJECT_MANAGER_SERVICE_CODE_FR: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_POSTING_DEFINITION_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_VENDOR_ACCOUNT_FOR_BALANCE_PAYOFF: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_REFERENCE_INVOICE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_PURCHASING_CARD_TRANSACTION_TYPE: EnumField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      PsnPurchasingCardTransactionType,
      true,
      true
    >;
    PSN_CARD_NUMBER_DIGITS: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_CARD_HOLDER_NAME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DTE_FILE_NAME: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DTE_DIGEST: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DTE_SHIPMENT_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_SET_ID: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VendorInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_LINE: OneToManyLink<
      VendorInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorInvoiceDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_DOCUMENT_ATTACHMENT: OneToManyLink<
      VendorInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceDocumentAttachmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorInvoiceHeaders<DeSerializers>>;
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
         * Static representation of the {@link headerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'HeaderReference',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          true
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
         * Static representation of the {@link paymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID: fieldBuilder.buildEdmTypeField(
          'PaymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link errorInvalidDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_INVALID_DISTRIBUTION: fieldBuilder.buildEnumField(
          'ErrorInvalidDistribution',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UUID: fieldBuilder.buildEdmTypeField('UUID', 'Edm.String', true),
        /**
         * Static representation of the {@link fiscalDocumentSpecie} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_SPECIE: fieldBuilder.buildEnumField(
          'FiscalDocumentSpecie',
          FiscalDocumentSpecieBr,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryFreightChargeTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_FREIGHT_CHARGE_TERMS: fieldBuilder.buildEnumField(
          'DeliveryFreightChargeTerms',
          WmsFreightChargeTerms,
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseDateComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReleaseDateComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceReceivedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RECEIVED_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceReceivedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOnHold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ON_HOLD: fieldBuilder.buildEnumField('IsOnHold', NoYes, true),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECALCULATION: fieldBuilder.buildEdmTypeField(
          'Recalculation',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link cfpsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFPS_CODE: fieldBuilder.buildEdmTypeField(
          'CFPSCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link varianceApprovedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_APPROVED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'VarianceApprovedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorInvoiceReviewStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_REVIEW_STATUS: fieldBuilder.buildEnumField(
          'VendorInvoiceReviewStatus',
          VendInvoiceRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_UUID: fieldBuilder.buildEdmTypeField(
          'InvoiceUUID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'VendorPaymentFineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'InvoiceDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPackingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_PACKING_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryPackingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankSpecificSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SPECIFIC_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankSpecificSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankConstantSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONSTANT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankConstantSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gstInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'GSTInvoiceType',
          InvoiceTypeMy,
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE: fieldBuilder.buildEnumField('ListCode', Listcode, true),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CORRECTION: fieldBuilder.buildEnumField(
          'CreditCorrection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fiscalOperationPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_OPERATION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'FiscalOperationPresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_FINANCIAL_INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'VendorPaymentFinancialInterestCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variancePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'VariancePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cTeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        C_TE_TYPE: fieldBuilder.buildEnumField('CTeType', TypeOfCTeBr, true),
        /**
         * Static representation of the {@link chargesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_GROUP: fieldBuilder.buildEdmTypeField(
          'ChargesGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessDocumentSubmissionIdW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DOCUMENT_SUBMISSION_ID_W: fieldBuilder.buildEdmTypeField(
          'BusinessDocumentSubmissionId_W',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link serviceCodeOnDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_ON_DELIVERY_ADDRESS: fieldBuilder.buildEnumField(
          'ServiceCodeOnDeliveryAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoicePaymentReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PAYMENT_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoicePaymentReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link countyOrigDest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ORIG_DEST: fieldBuilder.buildEdmTypeField(
          'CountyOrigDest',
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
         * Static representation of the {@link cashDiscountDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscountDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link importedSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_SALES_TAX: fieldBuilder.buildEdmTypeField(
          'ImportedSalesTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryVehicleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VEHICLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryVehicleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
        /**
         * Static representation of the {@link gstImportDeclarationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_IMPORT_DECLARATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'GSTImportDeclarationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link importedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ImportedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link triangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULATION: fieldBuilder.buildEnumField(
          'Triangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link secondaryExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SecondaryExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link ignoreCalculatedSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_CALCULATED_SALES_TAX: fieldBuilder.buildEnumField(
          'IgnoreCalculatedSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorRequestedWorkerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REQUESTED_WORKER_EMAIL: fieldBuilder.buildEdmTypeField(
          'VendorRequestedWorkerEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ROUNDING: fieldBuilder.buildEdmTypeField(
          'SalesTaxRounding',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'InvoiceRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH: fieldBuilder.buildEnumField('IsBatch', NoYes, true),
        /**
         * Static representation of the {@link deliveryStateRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATE_REGISTERED: fieldBuilder.buildEdmTypeField(
          'DeliveryStateRegistered',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINAL_USER: fieldBuilder.buildEnumField('IsFinalUser', NoYes, true),
        /**
         * Static representation of the {@link approvePostingWithMatchingDiscrepancies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVE_POSTING_WITH_MATCHING_DISCREPANCIES:
          fieldBuilder.buildEnumField(
            'ApprovePostingWithMatchingDiscrepancies',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link headerOnlyImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ONLY_IMPORT: fieldBuilder.buildEnumField(
          'HeaderOnlyImport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
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
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'VendorInvoiceType',
          PurchInvoiceType,
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_MODEL: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isElectronicInvoiceForService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ELECTRONIC_INVOICE_FOR_SERVICE: fieldBuilder.buildEnumField(
          'IsElectronicInvoiceForService',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_SERIES: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentSeries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_GROUP: fieldBuilder.buildEdmTypeField(
          'InvoiceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPricesIncludeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICES_INCLUDE_SALES_TAX: fieldBuilder.buildEnumField(
          'IsPricesIncludeSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SERIES: fieldBuilder.buildEdmTypeField(
          'InvoiceSeries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticsProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'StatisticsProcedure',
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
         * Static representation of the {@link fixedRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_RATE: fieldBuilder.buildEnumField('FixedRate', NoYes, true),
        /**
         * Static representation of the {@link deliveryTransportBrand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TRANSPORT_BRAND: fieldBuilder.buildEdmTypeField(
          'DeliveryTransportBrand',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchIdRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID_RANGE: fieldBuilder.buildEdmTypeField(
          'PurchIdRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingslipRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKINGSLIP_RANGE: fieldBuilder.buildEdmTypeField(
          'PackingslipRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_VOUCHER: fieldBuilder.buildEnumField(
          'SettleVoucher',
          SettlementType,
          true
        ),
        /**
         * Static representation of the {@link purchReceiptDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_RECEIPT_DATE_W: fieldBuilder.buildEdmTypeField(
          'PurchReceiptDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link freightedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHTED_BY: fieldBuilder.buildEnumField(
          'FreightedBy',
          WmsFreightedBy,
          true
        ),
        /**
         * Static representation of the {@link accessKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_KEY: fieldBuilder.buildEdmTypeField(
          'AccessKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectManagerFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MANAGER_FR: fieldBuilder.buildEdmTypeField(
          'ProjectManager_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountServiceCodeFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_SERVICE_CODE_FR: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountServiceCode_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicInvoiceFrameworkTypeFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_INVOICE_FRAMEWORK_TYPE_FR: fieldBuilder.buildEdmTypeField(
          'ElectronicInvoiceFrameworkType_FR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projectManagerServiceCodeFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MANAGER_SERVICE_CODE_FR: fieldBuilder.buildEdmTypeField(
          'ProjectManagerServiceCode_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnPostingDefinitionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_POSTING_DEFINITION_CODE: fieldBuilder.buildEdmTypeField(
          'PSNPostingDefinitionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnVendorAccountForBalancePayoff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_VENDOR_ACCOUNT_FOR_BALANCE_PAYOFF: fieldBuilder.buildEdmTypeField(
          'PSNVendorAccountForBalancePayoff',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnReferenceInvoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_REFERENCE_INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PSNReferenceInvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'PSNBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnPurchasingCardTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_PURCHASING_CARD_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'PSNPurchasingCardTransactionType',
          PsnPurchasingCardTransactionType,
          true
        ),
        /**
         * Static representation of the {@link psnCardNumberDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_CARD_NUMBER_DIGITS: fieldBuilder.buildEdmTypeField(
          'PSNCardNumberDigits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnCardHolderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_CARD_HOLDER_NAME: fieldBuilder.buildEdmTypeField(
          'PSNCardHolderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dteFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DTE_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'DTEFileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dteDigest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DTE_DIGEST: fieldBuilder.buildEdmTypeField(
          'DTEDigest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dteShipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DTE_SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'DTEShipmentID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_SET_ID: fieldBuilder.buildEdmTypeField(
          'WithholdingSetID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentClassificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorInvoiceHeaders)
      };
    }

    return this._schema;
  }
}
