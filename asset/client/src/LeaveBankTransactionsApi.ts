/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveBankTransactions } from './LeaveBankTransactions';
import { LeaveBankTransactionsRequestBuilder } from './LeaveBankTransactionsRequestBuilder';
import { LeaveTypesApi } from './LeaveTypesApi';
import { LeavePlansV2Api } from './LeavePlansV2Api';
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
export class LeaveBankTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveBankTransactions<DeSerializersT>, DeSerializersT>
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
  ): LeaveBankTransactionsApi<DeSerializersT> {
    return new LeaveBankTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leavePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLAN: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      LeavePlansV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveTypesApi<DeSerializersT>,
      LeavePlansV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_TYPE: new OneToOneLink('LeaveType', this, linkedApis[0]),
      LEAVE_PLAN: new OneToOneLink('LeavePlan', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = LeaveBankTransactions;

  requestBuilder(): LeaveBankTransactionsRequestBuilder<DeSerializersT> {
    return new LeaveBankTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveBankTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveBankTransactions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveBankTransactions<DeSerializersT>,
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
    typeof LeaveBankTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveBankTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      LeaveTransactionType,
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    LEAVE_PLAN_ID: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      LeaveBankTransactions<DeSerializers>,
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
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leavePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLAN: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      LeavePlansV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveBankTransactions<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveBankTransactions<DeSerializers>>;
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
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveBankTransactions)
      };
    }

    return this._schema;
  }
}
