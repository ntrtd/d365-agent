/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobilePerDiemDataForReportApprovals } from './ExpMobilePerDiemDataForReportApprovals';
import { ExpMobilePerDiemDataForReportApprovalsRequestBuilder } from './ExpMobilePerDiemDataForReportApprovalsRequestBuilder';
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
export class ExpMobilePerDiemDataForReportApprovalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExpMobilePerDiemDataForReportApprovals<DeSerializersT>,
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
  ): ExpMobilePerDiemDataForReportApprovalsApi<DeSerializersT> {
    return new ExpMobilePerDiemDataForReportApprovalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobilePerDiemDataForReportApprovals;

  requestBuilder(): ExpMobilePerDiemDataForReportApprovalsRequestBuilder<DeSerializersT> {
    return new ExpMobilePerDiemDataForReportApprovalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExpMobilePerDiemDataForReportApprovals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobilePerDiemDataForReportApprovals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobilePerDiemDataForReportApprovals<DeSerializersT>,
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
    typeof ExpMobilePerDiemDataForReportApprovals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobilePerDiemDataForReportApprovals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKFLOW_ITEM_REC_ID: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSIGNED_TO: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_BREAKFAST: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKFLOW_REF_TABLE_NAME: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_EXP_TRANS: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MEAL_DEDUCTION: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCHANGE_CODE: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_OF_LUNCH: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NUMBER_OF_DINNER: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MEALSAND_INCIDENTALS_MST: OrderableEdmTypeField<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ExpMobilePerDiemDataForReportApprovals<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workflowItemRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ITEM_REC_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowItemRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assignedTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_TO: fieldBuilder.buildEdmTypeField(
          'AssignedTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfBreakfast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_BREAKFAST: fieldBuilder.buildEdmTypeField(
          'NumberOfBreakfast',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workflowRefTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'WorkflowRefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trvExpTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_EXP_TRANS: fieldBuilder.buildEdmTypeField(
          'TrvExpTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mealDeduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_DEDUCTION: fieldBuilder.buildEdmTypeField(
          'MealDeduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exchangeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_CODE: fieldBuilder.buildEdmTypeField(
          'ExchangeCode',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link numberOfLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_LUNCH: fieldBuilder.buildEdmTypeField(
          'NumberOfLunch',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link numberOfDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DINNER: fieldBuilder.buildEdmTypeField(
          'NumberOfDinner',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mealsandIncidentalsMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEALSAND_INCIDENTALS_MST: fieldBuilder.buildEdmTypeField(
          'MealsandIncidentalsMST',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobilePerDiemDataForReportApprovals)
      };
    }

    return this._schema;
  }
}
