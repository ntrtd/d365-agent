/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEodStatementControllerLogBiEntities } from './RetailEodStatementControllerLogBiEntities';
import { RetailEodStatementControllerLogBiEntitiesRequestBuilder } from './RetailEodStatementControllerLogBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailEodTransactionPostingStatus } from './RetailEodTransactionPostingStatus';
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
export class RetailEodStatementControllerLogBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailEodStatementControllerLogBiEntities<DeSerializersT>,
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
  ): RetailEodStatementControllerLogBiEntitiesApi<DeSerializersT> {
    return new RetailEodStatementControllerLogBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEodStatementControllerLogBiEntities;

  requestBuilder(): RetailEodStatementControllerLogBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailEodStatementControllerLogBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEodStatementControllerLogBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEodStatementControllerLogBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEodStatementControllerLogBiEntities<DeSerializersT>,
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
    typeof RetailEodStatementControllerLogBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEodStatementControllerLogBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_END_EVENT: EnumField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    START_EVENT_ID: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_STATE_MESSAGE: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_STATUS: EnumField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      RetailEodTransactionPostingStatus,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTING_BATCH_JOB_ID: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailEodStatementControllerLogBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailEodStatementControllerLogBiEntities<DeSerializers>
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isEndEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_END_EVENT: fieldBuilder.buildEnumField('IsEndEvent', NoYes, true),
        /**
         * Static representation of the {@link startEventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_EVENT_ID: fieldBuilder.buildEdmTypeField(
          'StartEventId',
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
         * Static representation of the {@link postingStateMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_STATE_MESSAGE: fieldBuilder.buildEdmTypeField(
          'PostingStateMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_STATUS: fieldBuilder.buildEnumField(
          'PostingStatus',
          RetailEodTransactionPostingStatus,
          true
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
        /**
         * Static representation of the {@link postingBatchJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_BATCH_JOB_ID: fieldBuilder.buildEdmTypeField(
          'PostingBatchJobId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'StatementId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailEodStatementControllerLogBiEntities
        )
      };
    }

    return this._schema;
  }
}
