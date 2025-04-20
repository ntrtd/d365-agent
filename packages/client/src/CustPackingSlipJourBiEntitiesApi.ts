/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustPackingSlipJourBiEntities } from './CustPackingSlipJourBiEntities';
import { CustPackingSlipJourBiEntitiesRequestBuilder } from './CustPackingSlipJourBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { RefNum } from './RefNum';
import { WmsFreightedBy } from './WmsFreightedBy';
import { Listcode } from './Listcode';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { FreightSlipType } from './FreightSlipType';
import { SalesType } from './SalesType';
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
export class CustPackingSlipJourBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustPackingSlipJourBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustPackingSlipJourBiEntitiesApi<DeSerializersT> {
    return new CustPackingSlipJourBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustPackingSlipJourBiEntities;

  requestBuilder(): CustPackingSlipJourBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustPackingSlipJourBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustPackingSlipJourBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustPackingSlipJourBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustPackingSlipJourBiEntities<DeSerializersT>,
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
    typeof CustPackingSlipJourBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustPackingSlipJourBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORTATION_DELIVERY_OWNER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPILER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETURN_ITEM_NUM: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_PACKING_SLIP_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_SALES_TAKER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTERNAL_PACKING_SLIP_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICING_NAME: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIP_CARRIER_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_MGMT_SITE_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_POSTED: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOL_ADDRESS: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TAX_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REF_NUM: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      RefNum,
      true,
      true
    >;
    OFF_SESSION_ID_RU: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_BLIND_SHIPMENT: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CARRIER_DELIVERY_CONTACT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_POSTAL_ADDRESS: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BOL_CARRIER_NAME: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOL_FREIGHTED_BY: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      WmsFreightedBy,
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_REASON: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_SLIP_NUM: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_DISPATCH: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_EMAIL: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_NUMBERING_CODE_LT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BOL_PACKAGE_APPEARANCE: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_TABLE_REF_BR: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSPORTATION_DELIVERY_LOADER: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DELIVERY_CONTRACTOR: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LIST_CODE: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    INVOICE_ISSUE_DUE_DATE_W: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_LC_EXPORT_LINE: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FREIGHT_SLIP_TYPE: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      FreightSlipType,
      true,
      true
    >;
    PRINT_BLANK_DATE_LT: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_TYPE: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      SalesType,
      true,
      true
    >;
    SHIP_CARRIER_PHONE: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_REASON: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTED: EnumField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_ACCOUNT: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_PURCH_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_LADING_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CustPackingSlipJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustPackingSlipJourBiEntities<DeSerializers>>;
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link transportationDeliveryOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DELIVERY_OWNER: fieldBuilder.buildEdmTypeField(
          'TransportationDeliveryOwner',
          'Edm.Int64',
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
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compiler} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPILER: fieldBuilder.buildEdmTypeField(
          'Compiler',
          'Edm.Int64',
          false
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
         * Static representation of the {@link returnPackingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'ReturnPackingSlipId',
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
         * Static representation of the {@link workerSalesTaker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_TAKER: fieldBuilder.buildEdmTypeField(
          'WorkerSalesTaker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link internalPackingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'InternalPackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_NAME: fieldBuilder.buildEdmTypeField(
          'InvoicingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link shipCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShipCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printMgmtSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_MGMT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'PrintMgmtSiteId',
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
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link bolAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'BOLAddress',
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
         * Static representation of the {@link refNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_NUM: fieldBuilder.buildEnumField('RefNum', RefNum, true),
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
         * Static representation of the {@link shipCarrierBlindShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_BLIND_SHIPMENT: fieldBuilder.buildEnumField(
          'ShipCarrierBlindShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipCarrierDeliveryContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_DELIVERY_CONTACT: fieldBuilder.buildEdmTypeField(
          'ShipCarrierDeliveryContact',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicePostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InvoicePostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bolCarrierName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOL_CARRIER_NAME: fieldBuilder.buildEdmTypeField(
          'BOLCarrierName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link pdsCwQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY: fieldBuilder.buildEdmTypeField(
          'PdsCWQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bolFreightedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOL_FREIGHTED_BY: fieldBuilder.buildEnumField(
          'BOLFreightedBy',
          WmsFreightedBy,
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
         * Static representation of the {@link volume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME: fieldBuilder.buildEdmTypeField('Volume', 'Edm.Decimal', false),
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
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'inventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_REASON: fieldBuilder.buildEdmTypeField(
          'DlvReason',
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
         * Static representation of the {@link customerRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REF: fieldBuilder.buildEdmTypeField(
          'CustomerRef',
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
         * Static representation of the {@link shipCarrierEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_EMAIL: fieldBuilder.buildEdmTypeField(
          'ShipCarrierEmail',
          'Edm.String',
          true
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
         * Static representation of the {@link bolPackageAppearance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOL_PACKAGE_APPEARANCE: fieldBuilder.buildEdmTypeField(
          'BOLPackageAppearance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonTableRefBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF_BR: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transportationDeliveryLoader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DELIVERY_LOADER: fieldBuilder.buildEdmTypeField(
          'TransportationDeliveryLoader',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link transportationDeliveryContractor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DELIVERY_CONTRACTOR: fieldBuilder.buildEdmTypeField(
          'TransportationDeliveryContractor',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link listCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE: fieldBuilder.buildEnumField('ListCode', Listcode, true),
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankLcExportLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LC_EXPORT_LINE: fieldBuilder.buildEdmTypeField(
          'BankLCExportLine',
          'Edm.Int64',
          false
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
         * Static representation of the {@link freightSlipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_SLIP_TYPE: fieldBuilder.buildEnumField(
          'FreightSlipType',
          FreightSlipType,
          true
        ),
        /**
         * Static representation of the {@link printBlankDateLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BLANK_DATE_LT: fieldBuilder.buildEnumField(
          'PrintBlankDate_LT',
          NoYes,
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
         * Static representation of the {@link salesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TYPE: fieldBuilder.buildEnumField('SalesType', SalesType, true),
        /**
         * Static representation of the {@link shipCarrierPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_PHONE: fieldBuilder.buildEdmTypeField(
          'ShipCarrierPhone',
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
         * Static representation of the {@link exportReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_REASON: fieldBuilder.buildEdmTypeField(
          'ExportReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', NoYes, true),
        /**
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link shipCarrierAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyPurchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_PURCH_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyPurchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfLadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_LADING_ID: fieldBuilder.buildEdmTypeField(
          'BillOfLadingId',
          'Edm.String',
          true
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustPackingSlipJourBiEntities)
      };
    }

    return this._schema;
  }
}
