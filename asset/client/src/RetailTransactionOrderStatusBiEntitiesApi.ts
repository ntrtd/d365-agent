/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionOrderStatusBiEntities } from './RetailTransactionOrderStatusBiEntities';
import { RetailTransactionOrderStatusBiEntitiesRequestBuilder } from './RetailTransactionOrderStatusBiEntitiesRequestBuilder';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
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
export class RetailTransactionOrderStatusBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionOrderStatusBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailTransactionOrderStatusBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionOrderStatusBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionOrderStatusBiEntities;

  requestBuilder(): RetailTransactionOrderStatusBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionOrderStatusBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionOrderStatusBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionOrderStatusBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionOrderStatusBiEntities<DeSerializersT>,
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
    typeof RetailTransactionOrderStatusBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionOrderStatusBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderStatusType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_DETAIL: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETRY_COUNT: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_EDIT_USER: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUALLY_MODIFIED: EnumField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailTransactionOrderStatusBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionOrderStatusBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('store', 'Edm.String', false),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'transactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailTransactionOrderStatusType,
          true
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
         * Static representation of the {@link errorDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_DETAIL: fieldBuilder.buildEdmTypeField(
          'ErrorDetail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retryCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETRY_COUNT: fieldBuilder.buildEdmTypeField(
          'RetryCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lastEditUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EDIT_USER: fieldBuilder.buildEdmTypeField(
          'LastEditUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link manuallyModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUALLY_MODIFIED: fieldBuilder.buildEnumField(
          'ManuallyModified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionOrderStatusBiEntities)
      };
    }

    return this._schema;
  }
}
