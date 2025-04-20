/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendPackingSlipJourBiEntities } from './VendPackingSlipJourBiEntities';
import { VendPackingSlipJourBiEntitiesRequestBuilder } from './VendPackingSlipJourBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { PurchaseType } from './PurchaseType';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { FreightSlipType } from './FreightSlipType';
import { ReceiptListDeviationTypeRu } from './ReceiptListDeviationTypeRu';
import { PurchDlvAddr } from './PurchDlvAddr';
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
export class VendPackingSlipJourBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendPackingSlipJourBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendPackingSlipJourBiEntitiesApi<DeSerializersT> {
    return new VendPackingSlipJourBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendPackingSlipJourBiEntities;

  requestBuilder(): VendPackingSlipJourBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendPackingSlipJourBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendPackingSlipJourBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendPackingSlipJourBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendPackingSlipJourBiEntities<DeSerializersT>,
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
    typeof VendPackingSlipJourBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendPackingSlipJourBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY_CODE_W: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ITEM_NUM: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNOR_ACCOUNT_RU: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_POSTED: EnumField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT_RU: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TAX_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OFF_SESSION_ID_RU: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHASE_TYPE: EnumField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      PurchaseType,
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_ATTENTION: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_SLIP_NUM: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_DISPATCH: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PACKING_SLIP_NUMBERING_CODE_LT: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_LC_IMPORT_LINE: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_ISSUE_DUE_DATE_W: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    INTER_COMPANY_SALES_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GRN_NUMBER_IN: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_SLIP_TYPE: EnumField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      FreightSlipType,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    END_DISC_RU: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_BALANCE_RU: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIPT_LIST_DEVIATION_TYPE_RU: EnumField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      ReceiptListDeviationTypeRu,
      true,
      true
    >;
    DELIVERY_TYPE: EnumField<
      VendPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      PurchDlvAddr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendPackingSlipJourBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'SourceDocumentHeader',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transportationDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'TransportationDocument',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link currencyCodeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE_W: fieldBuilder.buildEdmTypeField(
          'CurrencyCode_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnItemNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ITEM_NUM: fieldBuilder.buildEdmTypeField(
          'ReturnItemNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignorAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNOR_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ConsignorAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_POSTED: fieldBuilder.buildEnumField(
          'InterCompanyPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatFulfillmentDateHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FULFILLMENT_DATE_HU: fieldBuilder.buildEdmTypeField(
          'IntrastatFulfillmentDate_HU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link consigneeAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ConsigneeAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
        /**
         * Static representation of the {@link partyTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TAX_ID: fieldBuilder.buildEdmTypeField(
          'PartyTaxID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link offSessionIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFF_SESSION_ID_RU: fieldBuilder.buildEdmTypeField(
          'OffSessionId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBuyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemBuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link purchaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_TYPE: fieldBuilder.buildEnumField(
          'PurchaseType',
          PurchaseType,
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link reqAttention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_ATTENTION: fieldBuilder.buildEdmTypeField(
          'ReqAttention',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'PackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightSlipNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_SLIP_NUM: fieldBuilder.buildEdmTypeField(
          'FreightSlipNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatDispatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_DISPATCH: fieldBuilder.buildEdmTypeField(
          'IntrastatDispatch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requester} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER: fieldBuilder.buildEdmTypeField(
          'Requester',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link packingSlipNumberingCodeLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_NUMBERING_CODE_LT: fieldBuilder.buildEdmTypeField(
          'PackingSlipNumberingCode_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link bankLcImportLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LC_IMPORT_LINE: fieldBuilder.buildEdmTypeField(
          'BankLCImportLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceIssueDueDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ISSUE_DUE_DATE_W: fieldBuilder.buildEdmTypeField(
          'InvoiceIssueDueDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'InventProfileType_RU',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link interCompanySalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_SALES_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanySalesId',
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link grnNumberIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRN_NUMBER_IN: fieldBuilder.buildEdmTypeField(
          'GRNNumber_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightSlipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_SLIP_TYPE: fieldBuilder.buildEnumField(
          'FreightSlipType',
          FreightSlipType,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link endDiscRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC_RU: fieldBuilder.buildEdmTypeField(
          'EndDisc_RU',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderBalanceRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_BALANCE_RU: fieldBuilder.buildEdmTypeField(
          'OrderBalance_RU',
          'Edm.Decimal',
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
         * Static representation of the {@link receiptListDeviationTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_LIST_DEVIATION_TYPE_RU: fieldBuilder.buildEnumField(
          'ReceiptListDeviationType_RU',
          ReceiptListDeviationTypeRu,
          true
        ),
        /**
         * Static representation of the {@link deliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'DeliveryType',
          PurchDlvAddr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendPackingSlipJourBiEntities)
      };
    }

    return this._schema;
  }
}
