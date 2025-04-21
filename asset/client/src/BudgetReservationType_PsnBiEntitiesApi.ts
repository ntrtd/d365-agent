/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetReservationType_PsnBiEntities } from './BudgetReservationType_PsnBiEntities';
import { BudgetReservationType_PsnBiEntitiesRequestBuilder } from './BudgetReservationType_PsnBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { BudgetReservationRelievingDocumentPsn } from './BudgetReservationRelievingDocumentPsn';
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
export class BudgetReservationType_PsnBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BudgetReservationType_PsnBiEntities<DeSerializersT>,
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
  ): BudgetReservationType_PsnBiEntitiesApi<DeSerializersT> {
    return new BudgetReservationType_PsnBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetReservationType_PsnBiEntities;

  requestBuilder(): BudgetReservationType_PsnBiEntitiesRequestBuilder<DeSerializersT> {
    return new BudgetReservationType_PsnBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetReservationType_PsnBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetReservationType_PsnBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetReservationType_PsnBiEntities<DeSerializersT>,
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
    typeof BudgetReservationType_PsnBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetReservationType_PsnBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REDUCE_CARRY_FORWARD_BUDGET: EnumField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_TABLE: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORKFLOW_TABLE_SEQUENCE_NUMBER: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIEVING_DOCUMENT: EnumField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetReservationRelievingDocumentPsn,
      true,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      BudgetReservationType_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetReservationType_PsnBiEntities<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link reduceCarryForwardBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCE_CARRY_FORWARD_BUDGET: fieldBuilder.buildEnumField(
          'ReduceCarryForwardBudget',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_TABLE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link workflowTableSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_TABLE_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkflowTableSequenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relievingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEVING_DOCUMENT: fieldBuilder.buildEnumField(
          'RelievingDocument',
          BudgetReservationRelievingDocumentPsn,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetReservationType_PsnBiEntities)
      };
    }

    return this._schema;
  }
}
