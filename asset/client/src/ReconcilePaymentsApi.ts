/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReconcilePayments } from './ReconcilePayments';
import { ReconcilePaymentsRequestBuilder } from './ReconcilePaymentsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ReconcilePaymentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReconcilePayments<DeSerializersT>, DeSerializersT>
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
  ): ReconcilePaymentsApi<DeSerializersT> {
    return new ReconcilePaymentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReconcilePayments;

  requestBuilder(): ReconcilePaymentsRequestBuilder<DeSerializersT> {
    return new ReconcilePaymentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReconcilePayments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReconcilePayments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReconcilePayments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ReconcilePayments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReconcilePayments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_TRANS_LINE_NUMBER: OrderableEdmTypeField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMENT_TIME: OrderableEdmTypeField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMENT_USER: OrderableEdmTypeField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT_NOTE: OrderableEdmTypeField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILE_STATUS: EnumField<
      ReconcilePayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReconcilePayments<DeSerializers>>;
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
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentTransLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TRANS_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PaymentTransLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commentTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT_TIME: fieldBuilder.buildEdmTypeField(
          'CommentTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link commentUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT_USER: fieldBuilder.buildEdmTypeField(
          'CommentUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commentNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT_NOTE: fieldBuilder.buildEdmTypeField(
          'CommentNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconcileStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILE_STATUS: fieldBuilder.buildEnumField(
          'ReconcileStatus',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReconcilePayments)
      };
    }

    return this._schema;
  }
}
