/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1LeaveBankTransactions } from './PayIntV1LeaveBankTransactions';
import { PayIntV1LeaveBankTransactionsRequestBuilder } from './PayIntV1LeaveBankTransactionsRequestBuilder';
import { LeaveTypesApi } from './LeaveTypesApi';
import { WorkersApi } from './WorkersApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { LeaveTransactionType } from './LeaveTransactionType';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1LeaveBankTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1LeaveBankTransactions<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1LeaveBankTransactionsApi<DeSerializersT> {
    return new PayIntV1LeaveBankTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_TYPE: new OneToOneLink('LeaveType', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = PayIntV1LeaveBankTransactions;

  requestBuilder(): PayIntV1LeaveBankTransactionsRequestBuilder<DeSerializersT> {
    return new PayIntV1LeaveBankTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1LeaveBankTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1LeaveBankTransactions<DeSerializersT>,
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
    typeof PayIntV1LeaveBankTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1LeaveBankTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      LeaveTransactionType,
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    LEAVE_PLAN_ID: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAVE_PLAN: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      PayIntV1LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      PayIntV1LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1LeaveBankTransactions<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          LeaveTransactionType,
          true
        ),
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link halfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'HalfDayDefinition',
          LeaveHalfDayDefinition,
          true
        ),
        /**
         * Static representation of the {@link leavePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'LeavePlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leavePlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_PLAN: fieldBuilder.buildEdmTypeField(
          'LeavePlan',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1LeaveBankTransactions)
      };
    }

    return this._schema;
  }
}
