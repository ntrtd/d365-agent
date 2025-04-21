/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentCalendarExceptions } from './PaymentCalendarExceptions';
import { PaymentCalendarExceptionsRequestBuilder } from './PaymentCalendarExceptionsRequestBuilder';
import { PaymDayExceptionType } from './PaymDayExceptionType';
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
export class PaymentCalendarExceptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PaymentCalendarExceptions<DeSerializersT>, DeSerializersT>
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
  ): PaymentCalendarExceptionsApi<DeSerializersT> {
    return new PaymentCalendarExceptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PaymentCalendarExceptions;

  requestBuilder(): PaymentCalendarExceptionsRequestBuilder<DeSerializersT> {
    return new PaymentCalendarExceptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentCalendarExceptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PaymentCalendarExceptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymentCalendarExceptions<DeSerializersT>,
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
    typeof PaymentCalendarExceptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentCalendarExceptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAYMENT_CALENDAR_NAME: OrderableEdmTypeField<
      PaymentCalendarExceptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXCEPTION_DATE: OrderableEdmTypeField<
      PaymentCalendarExceptions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCEPTION_TYPE: EnumField<
      PaymentCalendarExceptions<DeSerializers>,
      DeSerializersT,
      PaymDayExceptionType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymentCalendarExceptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PaymentCalendarExceptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link paymentCalendarName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CALENDAR_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentCalendarName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link exceptionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_DATE: fieldBuilder.buildEdmTypeField(
          'ExceptionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exceptionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TYPE: fieldBuilder.buildEnumField(
          'ExceptionType',
          PaymDayExceptionType,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentCalendarExceptions)
      };
    }

    return this._schema;
  }
}
