/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditManagementCustomerGuaranteeInsurances } from './CreditManagementCustomerGuaranteeInsurances';
import { CreditManagementCustomerGuaranteeInsurancesRequestBuilder } from './CreditManagementCustomerGuaranteeInsurancesRequestBuilder';
import { NoYes } from './NoYes';
import { CredManGuaranteeInsurance } from './CredManGuaranteeInsurance';
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
export class CreditManagementCustomerGuaranteeInsurancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CreditManagementCustomerGuaranteeInsurances<DeSerializersT>,
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
  ): CreditManagementCustomerGuaranteeInsurancesApi<DeSerializersT> {
    return new CreditManagementCustomerGuaranteeInsurancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditManagementCustomerGuaranteeInsurances;

  requestBuilder(): CreditManagementCustomerGuaranteeInsurancesRequestBuilder<DeSerializersT> {
    return new CreditManagementCustomerGuaranteeInsurancesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CreditManagementCustomerGuaranteeInsurances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditManagementCustomerGuaranteeInsurances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditManagementCustomerGuaranteeInsurances<DeSerializersT>,
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
    typeof CreditManagementCustomerGuaranteeInsurances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditManagementCustomerGuaranteeInsurances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GUARANTEE_NUMBER: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GUARANTEE_INSURANCE_TYPE: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCREASE_CREDIT_LIMIT_PERCENT: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCLUDE_IN_EXPOSURE: EnumField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INSURANCE_COVERAGE_TYPE: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUARANTOR_INSURER: OrderableEdmTypeField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUARANTEE_INSURANCE: EnumField<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>,
      DeSerializersT,
      CredManGuaranteeInsurance,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CreditManagementCustomerGuaranteeInsurances<DeSerializers>
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
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link guaranteeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_NUMBER: fieldBuilder.buildEdmTypeField(
          'GuaranteeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link guaranteeInsuranceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_INSURANCE_TYPE: fieldBuilder.buildEdmTypeField(
          'GuaranteeInsuranceType',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link increaseCreditLimitPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASE_CREDIT_LIMIT_PERCENT: fieldBuilder.buildEdmTypeField(
          'IncreaseCreditLimitPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link includeInExposure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_EXPOSURE: fieldBuilder.buildEnumField(
          'IncludeInExposure',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link insuranceCoverageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_COVERAGE_TYPE: fieldBuilder.buildEdmTypeField(
          'InsuranceCoverageType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guarantorInsurer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTOR_INSURER: fieldBuilder.buildEdmTypeField(
          'GuarantorInsurer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guaranteeInsurance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_INSURANCE: fieldBuilder.buildEnumField(
          'GuaranteeInsurance',
          CredManGuaranteeInsurance,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CreditManagementCustomerGuaranteeInsurances
        )
      };
    }

    return this._schema;
  }
}
