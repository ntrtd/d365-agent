/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Funds } from './Funds';
import { FundsRequestBuilder } from './FundsRequestBuilder';
import { NoYes } from './NoYes';
import { FundClassValue } from './FundClassValue';
import { LedgerFundYearEndOption } from './LedgerFundYearEndOption';
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
export class FundsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Funds<DeSerializersT>, DeSerializersT>
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
  ): FundsApi<DeSerializersT> {
    return new FundsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Funds;

  requestBuilder(): FundsRequestBuilder<DeSerializersT> {
    return new FundsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Funds<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Funds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Funds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Funds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Funds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Funds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUND_NUMBER: OrderableEdmTypeField<
      Funds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MAJOR: EnumField<
      Funds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FUND_CLASS: EnumField<
      Funds<DeSerializers>,
      DeSerializersT,
      FundClassValue,
      true,
      true
    >;
    FUND_NAME: OrderableEdmTypeField<
      Funds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR_END_OPTION: EnumField<
      Funds<DeSerializers>,
      DeSerializersT,
      LedgerFundYearEndOption,
      true,
      true
    >;
    OVERRIDE_YEAR_END_OPTION: EnumField<
      Funds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FUND_TYPE: OrderableEdmTypeField<
      Funds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NON_REPORTING_FUND: EnumField<
      Funds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSN_TREASURER_FUND_REPORT: EnumField<
      Funds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Funds<DeSerializers>>;
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
         * Static representation of the {@link fundNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_NUMBER: fieldBuilder.buildEdmTypeField(
          'FundNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isMajor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MAJOR: fieldBuilder.buildEnumField('IsMajor', NoYes, true),
        /**
         * Static representation of the {@link fundClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_CLASS: fieldBuilder.buildEnumField(
          'FundClass',
          FundClassValue,
          true
        ),
        /**
         * Static representation of the {@link fundName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_NAME: fieldBuilder.buildEdmTypeField(
          'FundName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yearEndOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_END_OPTION: fieldBuilder.buildEnumField(
          'YearEndOption',
          LedgerFundYearEndOption,
          true
        ),
        /**
         * Static representation of the {@link overrideYearEndOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_YEAR_END_OPTION: fieldBuilder.buildEnumField(
          'OverrideYearEndOption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fundType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_TYPE: fieldBuilder.buildEdmTypeField(
          'FundType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNonReportingFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NON_REPORTING_FUND: fieldBuilder.buildEnumField(
          'IsNonReportingFund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psnTreasurerFundReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_TREASURER_FUND_REPORT: fieldBuilder.buildEnumField(
          'PSNTreasurerFundReport',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Funds)
      };
    }

    return this._schema;
  }
}
