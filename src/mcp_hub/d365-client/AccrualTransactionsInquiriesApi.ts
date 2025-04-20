/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualTransactionsInquiries } from './AccrualTransactionsInquiries';
import { AccrualTransactionsInquiriesRequestBuilder } from './AccrualTransactionsInquiriesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AccrualTransactionsInquiriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AccrualTransactionsInquiries<DeSerializersT>, DeSerializersT>
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
  ): AccrualTransactionsInquiriesApi<DeSerializersT> {
    return new AccrualTransactionsInquiriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AccrualTransactionsInquiries;

  requestBuilder(): AccrualTransactionsInquiriesRequestBuilder<DeSerializersT> {
    return new AccrualTransactionsInquiriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccrualTransactionsInquiries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AccrualTransactionsInquiries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccrualTransactionsInquiries<DeSerializersT>,
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
    typeof AccrualTransactionsInquiries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccrualTransactionsInquiries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRANS_DATE: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MANUAL_TRANS_COMMENTS: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRY_OVER: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_BY_USER_ID: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_SOURCE: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USED: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUAL_ID: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE_TIME: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCRUED: OrderableEdmTypeField<
      AccrualTransactionsInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AccrualTransactionsInquiries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link manualTransComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_TRANS_COMMENTS: fieldBuilder.buildEdmTypeField(
          'ManualTransComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carryOver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRY_OVER: fieldBuilder.buildEdmTypeField(
          'CarryOver',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createdByUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER_ID: fieldBuilder.buildEdmTypeField(
          'CreatedByUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_SOURCE: fieldBuilder.buildEdmTypeField(
          'TransSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link used} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED: fieldBuilder.buildEdmTypeField('Used', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreateDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUED: fieldBuilder.buildEdmTypeField(
          'Accrued',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccrualTransactionsInquiries)
      };
    }

    return this._schema;
  }
}
