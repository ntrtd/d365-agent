/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1WorkerPayrollInfoes } from './PayIntV1WorkerPayrollInfoes';
import { PayIntV1WorkerPayrollInfoesRequestBuilder } from './PayIntV1WorkerPayrollInfoesRequestBuilder';
import { NoYes } from './NoYes';
import { PayrollPaymentMethodType } from './PayrollPaymentMethodType';
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
export class PayIntV1WorkerPayrollInfoesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1WorkerPayrollInfoes<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1WorkerPayrollInfoesApi<DeSerializersT> {
    return new PayIntV1WorkerPayrollInfoesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1WorkerPayrollInfoes;

  requestBuilder(): PayIntV1WorkerPayrollInfoesRequestBuilder<DeSerializersT> {
    return new PayIntV1WorkerPayrollInfoesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1WorkerPayrollInfoes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1WorkerPayrollInfoes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1WorkerPayrollInfoes<DeSerializersT>,
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
    typeof PayIntV1WorkerPayrollInfoes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1WorkerPayrollInfoes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayIntV1WorkerPayrollInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      PayIntV1WorkerPayrollInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1WorkerPayrollInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    READY_TO_PAY: EnumField<
      PayIntV1WorkerPayrollInfoes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_METHOD: EnumField<
      PayIntV1WorkerPayrollInfoes<DeSerializers>,
      DeSerializersT,
      PayrollPaymentMethodType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1WorkerPayrollInfoes<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link readyToPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READY_TO_PAY: fieldBuilder.buildEnumField('ReadyToPay', NoYes, true),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEnumField(
          'PaymentMethod',
          PayrollPaymentMethodType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1WorkerPayrollInfoes)
      };
    }

    return this._schema;
  }
}
