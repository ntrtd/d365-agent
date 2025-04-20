/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Report347 } from './Report347';
import { Report347RequestBuilder } from './Report347RequestBuilder';
import { TaxRep347OperationKey } from './TaxRep347OperationKey';
import { NoYes } from './NoYes';
import { TaxRep347Presentation } from './TaxRep347Presentation';
import { TaxReportSituationCodeEs } from './TaxReportSituationCodeEs';
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
export class Report347Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Report347<DeSerializersT>, DeSerializersT>
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
  ): Report347Api<DeSerializersT> {
    return new Report347Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Report347;

  requestBuilder(): Report347RequestBuilder<DeSerializersT> {
    return new Report347RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Report347<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Report347<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Report347<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Report347, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Report347, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE_OF_ESTATE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_YEAR_FOR_CASH: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER_TRANS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_CODE: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      TaxRep347OperationKey,
      true,
      true
    >;
    COUNTRY_REGION_TRANS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_IN_CASH: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_OF_SUBVENTIONS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FLOOR: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_SETTLED: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PAYMENT: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNTRY_REGION_TENANTS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_BY: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ABBREVIATION: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TENANCY: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_OF_SALES: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER_DECLARATION: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPOSIT: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_SUBVENTIONS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPECIAL_REGIME_FOR_CASH_ACCOUNTING_METHOD: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZIP_POSTAL_CODE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_AMOUNT: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PURCHASE_FROM_PUBLIC_ENTITY: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_PROCESS: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPLACEMENT: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_NUM_OF_THE_DECLARATION: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_OF_PURCHASE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_QUARTER_3: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRESENTATION_TYPE: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      TaxRep347Presentation,
      true,
      true
    >;
    MINIMUM_AMOUNT_OF_PAYMENTS_IN_CASH: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_CHARGE: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_TENANTS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION_CODE_FOR_THE_BUILDING_PROPERTY: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      TaxReportSituationCodeEs,
      true,
      true
    >;
    COUNTY_TENANTS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPRESENTATIVE: EnumField<
      Report347<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_QUARTER_2: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PURCHASE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_QUARTER_4: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_QUARTER_1: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRESENTAITION_DATE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME_TENANTS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_DECLARATION_NUMBER: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_NAME: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_OF_PURCHASE_FROM_PUBLIC_ENTITY: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_DATE_AND_TIME: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_OF_PAYMENT: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_SALES: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STREET_NO: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOOR: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_TRANS: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRANCE: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT: OrderableEdmTypeField<
      Report347<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Report347<DeSerializers>>;
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
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link referenceOfEstate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_OF_ESTATE: fieldBuilder.buildEdmTypeField(
          'ReferenceOfEstate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceYearForCash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_YEAR_FOR_CASH: fieldBuilder.buildEdmTypeField(
          'InvoiceYearForCash',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxExemptNumberTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER_TRANS: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumberTrans',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_CODE: fieldBuilder.buildEnumField(
          'TaskCode',
          TaxRep347OperationKey,
          true
        ),
        /**
         * Static representation of the {@link countryRegionTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_TRANS: fieldBuilder.buildEdmTypeField(
          'CountryRegionTrans',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amountInCash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_CASH: fieldBuilder.buildEdmTypeField(
          'AmountInCash',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountOfSubventions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_OF_SUBVENTIONS: fieldBuilder.buildEdmTypeField(
          'AmountOfSubventions',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link floor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true),
        /**
         * Static representation of the {@link amountSettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_SETTLED: fieldBuilder.buildEdmTypeField(
          'AmountSettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'NumberOfPayment',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link countryRegionTenants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_TENANTS: fieldBuilder.buildEdmTypeField(
          'CountryRegionTenants',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_BY: fieldBuilder.buildEdmTypeField(
          'ReportedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link addressAbbreviation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ABBREVIATION: fieldBuilder.buildEdmTypeField(
          'AddressAbbreviation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tenancy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENANCY: fieldBuilder.buildEnumField('Tenancy', NoYes, true),
        /**
         * Static representation of the {@link amountOfSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_OF_SALES: fieldBuilder.buildEdmTypeField(
          'AmountOfSales',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxExemptNumberDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER_DECLARATION: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumberDeclaration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deposit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT: fieldBuilder.buildEnumField('Deposit', NoYes, true),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfSubventions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_SUBVENTIONS: fieldBuilder.buildEdmTypeField(
          'NumberOfSubventions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specialRegimeForCashAccountingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_REGIME_FOR_CASH_ACCOUNTING_METHOD: fieldBuilder.buildEnumField(
          'SpecialRegimeForCashAccountingMethod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link zipPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'ZipPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfPurchaseFromPublicEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PURCHASE_FROM_PUBLIC_ENTITY: fieldBuilder.buildEdmTypeField(
          'NumberOfPurchaseFromPublicEntity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link insuranceProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_PROCESS: fieldBuilder.buildEnumField(
          'InsuranceProcess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link replacement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT: fieldBuilder.buildEnumField('Replacement', NoYes, true),
        /**
         * Static representation of the {@link documentNumOfTheDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM_OF_THE_DECLARATION: fieldBuilder.buildEdmTypeField(
          'DocumentNumOfTheDeclaration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        /**
         * Static representation of the {@link amountOfPurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_OF_PURCHASE: fieldBuilder.buildEdmTypeField(
          'AmountOfPurchase',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountQuarter3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_QUARTER_3: fieldBuilder.buildEdmTypeField(
          'AmountQuarter3',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link presentationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENTATION_TYPE: fieldBuilder.buildEnumField(
          'PresentationType',
          TaxRep347Presentation,
          true
        ),
        /**
         * Static representation of the {@link minimumAmountOfPaymentsInCash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT_OF_PAYMENTS_IN_CASH: fieldBuilder.buildEdmTypeField(
          'MinimumAmountOfPaymentsInCash',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reverseCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE: fieldBuilder.buildEnumField(
          'ReverseCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amountTenants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TENANTS: fieldBuilder.buildEdmTypeField(
          'AmountTenants',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link locationCodeForTheBuildingProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_CODE_FOR_THE_BUILDING_PROPERTY: fieldBuilder.buildEnumField(
          'LocationCodeForTheBuildingProperty',
          TaxReportSituationCodeEs,
          true
        ),
        /**
         * Static representation of the {@link countyTenants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_TENANTS: fieldBuilder.buildEdmTypeField(
          'CountyTenants',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED: fieldBuilder.buildEnumField('Reported', NoYes, true),
        /**
         * Static representation of the {@link representative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPRESENTATIVE: fieldBuilder.buildEnumField(
          'Representative',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amountQuarter2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_QUARTER_2: fieldBuilder.buildEdmTypeField(
          'AmountQuarter2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfPurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PURCHASE: fieldBuilder.buildEdmTypeField(
          'NumberOfPurchase',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link amountQuarter4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_QUARTER_4: fieldBuilder.buildEdmTypeField(
          'AmountQuarter4',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountQuarter1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_QUARTER_1: fieldBuilder.buildEdmTypeField(
          'AmountQuarter1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link presentaitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENTAITION_DATE: fieldBuilder.buildEdmTypeField(
          'PresentaitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nameTenants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_TENANTS: fieldBuilder.buildEdmTypeField(
          'NameTenants',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link previousDeclarationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_DECLARATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreviousDeclarationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_NAME: fieldBuilder.buildEdmTypeField(
          'TransName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountOfPurchaseFromPublicEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_OF_PURCHASE_FROM_PUBLIC_ENTITY: fieldBuilder.buildEdmTypeField(
          'AmountOfPurchaseFromPublicEntity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createdDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'CreatedDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'AmountOfPayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_SALES: fieldBuilder.buildEdmTypeField(
          'NumberOfSales',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link streetNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NO: fieldBuilder.buildEdmTypeField(
          'StreetNo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link door} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOOR: fieldBuilder.buildEdmTypeField('Door', 'Edm.String', true),
        /**
         * Static representation of the {@link countyTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_TRANS: fieldBuilder.buildEdmTypeField(
          'CountyTrans',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entrance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRANCE: fieldBuilder.buildEdmTypeField(
          'Entrance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT: fieldBuilder.buildEdmTypeField('Contact', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Report347)
      };
    }

    return this._schema;
  }
}
