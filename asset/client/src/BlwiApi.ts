/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Blwi } from './Blwi';
import { BlwiRequestBuilder } from './BlwiRequestBuilder';
import { TradeBlwiCustVend } from './TradeBlwiCustVend';
import { NoYes } from './NoYes';
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
export class BlwiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Blwi<DeSerializersT>, DeSerializersT>
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
  ): BlwiApi<DeSerializersT> {
    return new BlwiApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Blwi;

  requestBuilder(): BlwiRequestBuilder<DeSerializersT> {
    return new BlwiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Blwi<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Blwi<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Blwi<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Blwi, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Blwi, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BLWI_TRANSACTION: EnumField<
      Blwi<DeSerializers>,
      DeSerializersT,
      TradeBlwiCustVend,
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_DATE: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AUTO_GENERATED: EnumField<
      Blwi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION_GROUP_ROW_NUMBER: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_GROUP_ID: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDED: EnumField<Blwi<DeSerializers>, DeSerializersT, NoYes, true, true>;
    SURVEY_CODE: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_GROUP_BLWI_REPORTING: EnumField<
      Blwi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION_GROUP_DESCRIPTION: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_NAME: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_AMOUNT: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURPOSE_CODE: OrderableEdmTypeField<
      Blwi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Blwi<DeSerializers>>;
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link blwiTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLWI_TRANSACTION: fieldBuilder.buildEnumField(
          'BLWITransaction',
          TradeBlwiCustVend,
          true
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', false),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_DATE: fieldBuilder.buildEdmTypeField(
          'ReportingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link autoGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_GENERATED: fieldBuilder.buildEnumField(
          'AutoGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link countryRegionGroupRowNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_GROUP_ROW_NUMBER: fieldBuilder.buildEdmTypeField(
          'CountryRegionGroupRowNumber',
          'Edm.Int32',
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
         * Static representation of the {@link countryRegionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link included} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDED: fieldBuilder.buildEnumField('Included', NoYes, true),
        /**
         * Static representation of the {@link surveyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURVEY_CODE: fieldBuilder.buildEdmTypeField(
          'SurveyCode',
          'Edm.Int64',
          false
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
         * Static representation of the {@link countryRegionGroupBlwiReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_GROUP_BLWI_REPORTING: fieldBuilder.buildEnumField(
          'CountryRegionGroupBLWIReporting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link countryRegionGroupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CountryRegionGroupDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_NAME: fieldBuilder.buildEdmTypeField(
          'CountryRegionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'PurposeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Blwi)
      };
    }

    return this._schema;
  }
}
