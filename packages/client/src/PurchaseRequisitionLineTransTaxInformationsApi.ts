/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseRequisitionLineTransTaxInformations } from './PurchaseRequisitionLineTransTaxInformations';
import { PurchaseRequisitionLineTransTaxInformationsRequestBuilder } from './PurchaseRequisitionLineTransTaxInformationsRequestBuilder';
import { NoYes } from './NoYes';
import { GtaServiceCategoryIn } from './GtaServiceCategoryIn';
import { DirectSettlementIn } from './DirectSettlementIn';
import { TransTaxInformationTypeIn } from './TransTaxInformationTypeIn';
import { DirectionIn } from './DirectionIn';
import { ExciseTypeIn } from './ExciseTypeIn';
import { DisposalTypeIn } from './DisposalTypeIn';
import { VatGoodsTypeIn } from './VatGoodsTypeIn';
import { ServiceCategoryIn } from './ServiceCategoryIn';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { ItcCategoryIn } from './ItcCategoryIn';
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
export class PurchaseRequisitionLineTransTaxInformationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchaseRequisitionLineTransTaxInformations<DeSerializersT>,
      DeSerializersT
    >
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
  ): PurchaseRequisitionLineTransTaxInformationsApi<DeSerializersT> {
    return new PurchaseRequisitionLineTransTaxInformationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseRequisitionLineTransTaxInformations;

  requestBuilder(): PurchaseRequisitionLineTransTaxInformationsRequestBuilder<DeSerializersT> {
    return new PurchaseRequisitionLineTransTaxInformationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseRequisitionLineTransTaxInformations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseRequisitionLineTransTaxInformations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseRequisitionLineTransTaxInformations<DeSerializersT>,
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
    typeof PurchaseRequisitionLineTransTaxInformations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseRequisitionLineTransTaxInformations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCH_REQ_TABLE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_ACKNOWLEDGEMENT_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_NON_RECOVERABLE_PERCENT: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_TAX_GTA_SERVICE_CATEGORY: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      GtaServiceCategoryIn,
      true,
      true
    >;
    EXCISE_DIRECT_SETTLEMENT: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      DirectSettlementIn,
      true,
      true
    >;
    NON_BUSINESS_USAGE_PERCENTAGE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_CODE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_TARIFF_CODE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_DSA: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_LOCATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TAX_IS_RECOVERABLE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ACCOUNTING_CODE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      TransTaxInformationTypeIn,
      true,
      true
    >;
    TAX_INVENT_VAT_ITEM_ID: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TAX_INFORMATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_LOCATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_NATURE_OF_REMITTANCE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VATTIN_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TAX_INFORMATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TAX_INFORMATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HSN_CODE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_CONSIGNMENT: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_SOFTWARE_DECL_RECEIVED: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCISE_TARIFF_CODES: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TAX_CONSIGNMENT_NOTE_NUM: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_TARIFF_DIRECTION: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      DirectionIn,
      true,
      true
    >;
    EXCISE_TYPE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      ExciseTypeIn,
      true,
      true
    >;
    NON_GST: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIRECTION: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      DirectionIn,
      true,
      true
    >;
    EXCISE_DISPOSAL_TYPE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      DisposalTypeIn,
      true,
      true
    >;
    CUSTOMER_LOCATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_GOODS_TYPE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      VatGoodsTypeIn,
      true,
      true
    >;
    GSTIN_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_CENVAT_CREDIT_AVAILED: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_RATE_TYPE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_SCHEDULE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_COMMODITY_CODE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_TAX_INFORMATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TAX_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CATEGORY: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      ServiceCategoryIn,
      true,
      true
    >;
    EXCISE_ECC_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CST_SCHEDULE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_RECORD_TYPE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      ExciseRecordTypeIn,
      true,
      true
    >;
    TAN_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_FORM_TYPES: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_COUNTRY_REGION_TO_REMITTANCE: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_IEC_REGISTRATION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_NATURE_OF_ASSESSEE: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    ITC_CATEGORY: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      ItcCategoryIn,
      true,
      true
    >;
    VENDOR_LOCATION: OrderableEdmTypeField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_IS_SCRAP: EnumField<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      PurchaseRequisitionLineTransTaxInformations<DeSerializers>
    >;
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
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purchReqTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_TABLE: fieldBuilder.buildEdmTypeField(
          'PurchReqTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdAcknowledgementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ACKNOWLEDGEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAcknowledgementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', NoYes, true),
        /**
         * Static representation of the {@link vatNonRecoverablePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NON_RECOVERABLE_PERCENT: fieldBuilder.buildEdmTypeField(
          'VATNonRecoverablePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceTaxGtaServiceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_GTA_SERVICE_CATEGORY: fieldBuilder.buildEnumField(
          'ServiceTaxGTAServiceCategory',
          GtaServiceCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link exciseDirectSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_DIRECT_SETTLEMENT: fieldBuilder.buildEnumField(
          'ExciseDirectSettlement',
          DirectSettlementIn,
          true
        ),
        /**
         * Static representation of the {@link nonBusinessUsagePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_BUSINESS_USAGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'NonBusinessUsagePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsTariffCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TARIFF_CODE: fieldBuilder.buildEdmTypeField(
          'CustomsTariffCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseDsa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_DSA: fieldBuilder.buildEnumField('ExciseDSA', NoYes, true),
        /**
         * Static representation of the {@link bankLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LOCATION: fieldBuilder.buildEdmTypeField(
          'BankLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceTaxIsRecoverable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_IS_RECOVERABLE: fieldBuilder.buildEnumField(
          'ServiceTaxIsRecoverable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAccountingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          TransTaxInformationTypeIn,
          true
        ),
        /**
         * Static representation of the {@link taxInventVatItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVENT_VAT_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'TaxInventVATItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'CompanyTaxInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_LOCATION: fieldBuilder.buildEdmTypeField(
          'CompanyLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdNatureOfRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_NATURE_OF_REMITTANCE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdNatureOfRemittance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vattinRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VATTIN_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'VATTINRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.String', true),
        /**
         * Static representation of the {@link vendorTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'VendorTaxInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'BankTaxInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hsnCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE: fieldBuilder.buildEdmTypeField('HSNCode', 'Edm.String', true),
        /**
         * Static representation of the {@link exciseConsignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_CONSIGNMENT: fieldBuilder.buildEnumField(
          'ExciseConsignment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdSoftwareDeclReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_SOFTWARE_DECL_RECEIVED: fieldBuilder.buildEnumField(
          'TaxWithholdSoftwareDeclReceived',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exciseTariffCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TARIFF_CODES: fieldBuilder.buildEdmTypeField(
          'ExciseTariffCodes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceTaxConsignmentNoteNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_CONSIGNMENT_NOTE_NUM: fieldBuilder.buildEdmTypeField(
          'ServiceTaxConsignmentNoteNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsTariffDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TARIFF_DIRECTION: fieldBuilder.buildEnumField(
          'CustomsTariffDirection',
          DirectionIn,
          true
        ),
        /**
         * Static representation of the {@link exciseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TYPE: fieldBuilder.buildEnumField(
          'ExciseType',
          ExciseTypeIn,
          true
        ),
        /**
         * Static representation of the {@link nonGst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_GST: fieldBuilder.buildEnumField('NonGST', NoYes, true),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField('Direction', DirectionIn, true),
        /**
         * Static representation of the {@link exciseDisposalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_DISPOSAL_TYPE: fieldBuilder.buildEnumField(
          'ExciseDisposalType',
          DisposalTypeIn,
          true
        ),
        /**
         * Static representation of the {@link customerLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LOCATION: fieldBuilder.buildEdmTypeField(
          'CustomerLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link vatGoodsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_GOODS_TYPE: fieldBuilder.buildEnumField(
          'VATGoodsType',
          VatGoodsTypeIn,
          true
        ),
        /**
         * Static representation of the {@link gstinRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTIN_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'GSTINRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseCenvatCreditAvailed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_CENVAT_CREDIT_AVAILED: fieldBuilder.buildEnumField(
          'ExciseCENVATCreditAvailed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'VATSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesTaxRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'VATCommodityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'CustomerTaxInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceTaxRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceTaxRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY: fieldBuilder.buildEnumField(
          'ServiceCategory',
          ServiceCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link exciseEccRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_ECC_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExciseECCRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cstSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CST_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'CSTSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseRecordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_RECORD_TYPE: fieldBuilder.buildEnumField(
          'ExciseRecordType',
          ExciseRecordTypeIn,
          true
        ),
        /**
         * Static representation of the {@link tanRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAN_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TANRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxFormTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_FORM_TYPES: fieldBuilder.buildEdmTypeField(
          'SalesTaxFormTypes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdCountryRegionToRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_COUNTRY_REGION_TO_REMITTANCE:
          fieldBuilder.buildEdmTypeField(
            'TaxWithholdCountryRegionToRemittance',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link customsIecRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_IEC_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomsIECRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdNatureOfAssessee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_NATURE_OF_ASSESSEE: fieldBuilder.buildEnumField(
          'TaxWithholdNatureOfAssessee',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link itcCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITC_CATEGORY: fieldBuilder.buildEnumField(
          'ITCCategory',
          ItcCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link vendorLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_LOCATION: fieldBuilder.buildEdmTypeField(
          'VendorLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseIsScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_IS_SCRAP: fieldBuilder.buildEnumField(
          'ExciseIsScrap',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          PurchaseRequisitionLineTransTaxInformations
        )
      };
    }

    return this._schema;
  }
}
