/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPaymentInterestCodes } from './CustomerPaymentInterestCodes';
import { CustomerPaymentInterestCodesRequestBuilder } from './CustomerPaymentInterestCodesRequestBuilder';
import { DayMonth } from './DayMonth';
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
export class CustomerPaymentInterestCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerPaymentInterestCodes<DeSerializersT>, DeSerializersT>
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
  ): CustomerPaymentInterestCodesApi<DeSerializersT> {
    return new CustomerPaymentInterestCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerPaymentInterestCodes;

  requestBuilder(): CustomerPaymentInterestCodesRequestBuilder<DeSerializersT> {
    return new CustomerPaymentInterestCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPaymentInterestCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPaymentInterestCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPaymentInterestCodes<DeSerializersT>,
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
    typeof CustomerPaymentInterestCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPaymentInterestCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEREST_CODE: OrderableEdmTypeField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DAY_OR_MONTH: EnumField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      DayMonth,
      true,
      true
    >;
    GRACE_PERIOD_DAYS: OrderableEdmTypeField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTEREST_CALCULATION_PER: OrderableEdmTypeField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_PERCENTAGE: OrderableEdmTypeField<
      CustomerPaymentInterestCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustomerPaymentInterestCodes<DeSerializers>>;
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
         * Static representation of the {@link interestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'InterestCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dayOrMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_OR_MONTH: fieldBuilder.buildEnumField('DayOrMonth', DayMonth, true),
        /**
         * Static representation of the {@link gracePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRACE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'GracePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link interestCalculationPer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CALCULATION_PER: fieldBuilder.buildEdmTypeField(
          'InterestCalculationPer',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'InterestPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPaymentInterestCodes)
      };
    }

    return this._schema;
  }
}
