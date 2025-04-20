/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MyPayStatements } from './MyPayStatements';
import { MyPayStatementsRequestBuilder } from './MyPayStatementsRequestBuilder';
import { MyPayStatementDetailsApi } from './MyPayStatementDetailsApi';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class MyPayStatementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MyPayStatements<DeSerializersT>, DeSerializersT>
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
  ): MyPayStatementsApi<DeSerializersT> {
    return new MyPayStatementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      MyPayStatements<DeSerializersT>,
      DeSerializersT,
      MyPayStatementDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MyPayStatementDetailsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DETAILS: new OneToManyLink('Details', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MyPayStatements;

  requestBuilder(): MyPayStatementsRequestBuilder<DeSerializersT> {
    return new MyPayStatementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MyPayStatements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MyPayStatements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MyPayStatements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MyPayStatements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MyPayStatements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PAY: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_METHOD_TYPE: EnumField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      PayrollPaymentMethodType,
      true,
      true
    >;
    NET_PAY: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_CYCLE: OrderableEdmTypeField<
      MyPayStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      MyPayStatements<DeSerializersT>,
      DeSerializersT,
      MyPayStatementDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MyPayStatements<DeSerializers>>;
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
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PAY: fieldBuilder.buildEdmTypeField(
          'GrossPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentMethodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_TYPE: fieldBuilder.buildEnumField(
          'PaymentMethodType',
          PayrollPaymentMethodType,
          true
        ),
        /**
         * Static representation of the {@link netPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PAY: fieldBuilder.buildEdmTypeField('NetPay', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE: fieldBuilder.buildEdmTypeField(
          'PayCycle',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MyPayStatements)
      };
    }

    return this._schema;
  }
}
