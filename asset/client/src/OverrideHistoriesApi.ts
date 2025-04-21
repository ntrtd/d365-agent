/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OverrideHistories } from './OverrideHistories';
import { OverrideHistoriesRequestBuilder } from './OverrideHistoriesRequestBuilder';
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
export class OverrideHistoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OverrideHistories<DeSerializersT>, DeSerializersT>
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
  ): OverrideHistoriesApi<DeSerializersT> {
    return new OverrideHistoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OverrideHistories;

  requestBuilder(): OverrideHistoriesRequestBuilder<DeSerializersT> {
    return new OverrideHistoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OverrideHistories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OverrideHistories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<OverrideHistories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof OverrideHistories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OverrideHistories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ID: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_CODE: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVERRIDE_TIME: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_VALUE: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_AMOUNT: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDDEN_VALUE: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_REASON: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_AMOUNT: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AX_USER_ID: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_TRANS_REC_ID: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OVERRIDDEN_FIELD_NUMBER: OrderableEdmTypeField<
      OverrideHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<OverrideHistories<DeSerializers>>;
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
         * Static representation of the {@link salesOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderId',
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
         * Static representation of the {@link chargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link overrideTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_TIME: fieldBuilder.buildEdmTypeField(
          'OverrideTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_VALUE: fieldBuilder.buildEdmTypeField(
          'OriginalValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OverrideAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('Store', 'Edm.String', true),
        /**
         * Static representation of the {@link overriddenValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDDEN_VALUE: fieldBuilder.buildEdmTypeField(
          'OverriddenValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_REASON: fieldBuilder.buildEdmTypeField(
          'OverrideReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link axUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AX_USER_ID: fieldBuilder.buildEdmTypeField(
          'AxUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markupTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'MarkupTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.Int64', false),
        /**
         * Static representation of the {@link overriddenFieldNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDDEN_FIELD_NUMBER: fieldBuilder.buildEdmTypeField(
          'OverriddenFieldNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OverrideHistories)
      };
    }

    return this._schema;
  }
}
