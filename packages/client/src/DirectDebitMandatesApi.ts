/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DirectDebitMandates } from './DirectDebitMandates';
import { DirectDebitMandatesRequestBuilder } from './DirectDebitMandatesRequestBuilder';
import { CustMandateStatus } from './CustMandateStatus';
import { CustMandateScheme } from './CustMandateScheme';
import { NoYes } from './NoYes';
import { CustMandatePaymentType } from './CustMandatePaymentType';
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
export class DirectDebitMandatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DirectDebitMandates<DeSerializersT>, DeSerializersT>
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
  ): DirectDebitMandatesApi<DeSerializersT> {
    return new DirectDebitMandatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DirectDebitMandates;

  requestBuilder(): DirectDebitMandatesRequestBuilder<DeSerializersT> {
    return new DirectDebitMandatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DirectDebitMandates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DirectDebitMandates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DirectDebitMandates<DeSerializersT>,
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
    typeof DirectDebitMandates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DirectDebitMandates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANDATE_ID: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ADDRESS: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAYS_FOR_RECURRING_PRENOTIFICATION: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      CustMandateStatus,
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCELLATION_DATE: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DAYS_FOR_FIRST_PRENOTIFICATION: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_BANK_ACCOUNT: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_DATE: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MANDATE_SCHEME: EnumField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      CustMandateScheme,
      true,
      true
    >;
    DAYS_FOR_FIRST_BANK_SUBMISSION: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USAGE_COUNT: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FIRST: EnumField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPECTED_NUMBER_OF_PAYMENTS: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MANDATE_PAYMENT_TYPE: EnumField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      CustMandatePaymentType,
      true,
      true
    >;
    CREDITOR_BANK_ACCOUNT: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_LOCATION: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAYS_FOR_RECURRING_BANK_SUBMISSION: OrderableEdmTypeField<
      DirectDebitMandates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DirectDebitMandates<DeSerializers>>;
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
         * Static representation of the {@link mandateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATE_ID: fieldBuilder.buildEdmTypeField(
          'MandateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CustomerAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link daysForRecurringPrenotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_FOR_RECURRING_PRENOTIFICATION: fieldBuilder.buildEdmTypeField(
          'DaysForRecurringPrenotification',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', CustMandateStatus, true),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cancellationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_DATE: fieldBuilder.buildEdmTypeField(
          'CancellationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link daysForFirstPrenotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_FOR_FIRST_PRENOTIFICATION: fieldBuilder.buildEdmTypeField(
          'DaysForFirstPrenotification',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_DATE: fieldBuilder.buildEdmTypeField(
          'SignatureDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mandateScheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATE_SCHEME: fieldBuilder.buildEnumField(
          'MandateScheme',
          CustMandateScheme,
          true
        ),
        /**
         * Static representation of the {@link daysForFirstBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_FOR_FIRST_BANK_SUBMISSION: fieldBuilder.buildEdmTypeField(
          'DaysForFirstBankSubmission',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link usageCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_COUNT: fieldBuilder.buildEdmTypeField(
          'UsageCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIRST: fieldBuilder.buildEnumField('IsFirst', NoYes, true),
        /**
         * Static representation of the {@link expectedNumberOfPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_NUMBER_OF_PAYMENTS: fieldBuilder.buildEdmTypeField(
          'ExpectedNumberOfPayments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mandatePaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATE_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'MandatePaymentType',
          CustMandatePaymentType,
          true
        ),
        /**
         * Static representation of the {@link creditorBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITOR_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CreditorBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_LOCATION: fieldBuilder.buildEdmTypeField(
          'SignatureLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link daysForRecurringBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_FOR_RECURRING_BANK_SUBMISSION: fieldBuilder.buildEdmTypeField(
          'DaysForRecurringBankSubmission',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DirectDebitMandates)
      };
    }

    return this._schema;
  }
}
