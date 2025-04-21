/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustDisputes } from './CustDisputes';
import { CustDisputesRequestBuilder } from './CustDisputesRequestBuilder';
import { CustTransactionsApi } from './CustTransactionsApi';
import { CustVendDisputeStatus } from './CustVendDisputeStatus';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustDisputesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustDisputes<DeSerializersT>, DeSerializersT>
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
  ): CustDisputesApi<DeSerializersT> {
    return new CustDisputesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link custTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_TRANSACTION: OneToOneLink<
      CustDisputes<DeSerializersT>,
      DeSerializersT,
      CustTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CustTransactionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUST_TRANSACTION: new OneToOneLink('CustTransaction', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CustDisputes;

  requestBuilder(): CustDisputesRequestBuilder<DeSerializersT> {
    return new CustDisputesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustDisputes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustDisputes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustDisputes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustDisputes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustDisputes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_REC_ID: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_BALANCE: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS_CHANGED_DATE: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_TRANS: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATUS: EnumField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      CustVendDisputeStatus,
      true,
      true
    >;
    IS_AUTOMATIC_UPDATE: EnumField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_PAYMENT: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FOLLOW_UP_DATE: OrderableEdmTypeField<
      CustDisputes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_TRANSACTION: OneToOneLink<
      CustDisputes<DeSerializersT>,
      DeSerializersT,
      CustTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustDisputes<DeSerializers>>;
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
         * Static representation of the {@link sysRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_ID: fieldBuilder.buildEdmTypeField(
          'SysRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_BALANCE: fieldBuilder.buildEdmTypeField(
          'TransactionBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statusChangedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_CHANGED_DATE: fieldBuilder.buildEdmTypeField(
          'StatusChangedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link custTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TRANS: fieldBuilder.buildEdmTypeField(
          'CustTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reasonTableRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CustVendDisputeStatus,
          true
        ),
        /**
         * Static representation of the {@link isAutomaticUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOMATIC_UPDATE: fieldBuilder.buildEnumField(
          'IsAutomaticUpdate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAYMENT: fieldBuilder.buildEdmTypeField(
          'LastPayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link followUpDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLLOW_UP_DATE: fieldBuilder.buildEdmTypeField(
          'FollowUpDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustDisputes)
      };
    }

    return this._schema;
  }
}
