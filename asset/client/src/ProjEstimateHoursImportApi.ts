/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjEstimateHoursImport } from './ProjEstimateHoursImport';
import { ProjEstimateHoursImportRequestBuilder } from './ProjEstimateHoursImportRequestBuilder';
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
export class ProjEstimateHoursImportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjEstimateHoursImport<DeSerializersT>, DeSerializersT>
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
  ): ProjEstimateHoursImportApi<DeSerializersT> {
    return new ProjEstimateHoursImportApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjEstimateHoursImport;

  requestBuilder(): ProjEstimateHoursImportRequestBuilder<DeSerializersT> {
    return new ProjEstimateHoursImportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjEstimateHoursImport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjEstimateHoursImport<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjEstimateHoursImport<DeSerializersT>,
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
    typeof ProjEstimateHoursImport,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjEstimateHoursImport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ESTIMATE_HOURS_IMPORT_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_CDS_RESOURCE_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    RESOURCE_CATEGORY_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_SALES_AMOUNT: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTRACT_LINE_ID: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_COST_AMOUNT: OrderableEdmTypeField<
      ProjEstimateHoursImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjEstimateHoursImport<DeSerializers>>;
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
         * Static representation of the {@link estimateHoursImportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE_HOURS_IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'EstimateHoursImportId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link duration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION: fieldBuilder.buildEdmTypeField(
          'Duration',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projCdsResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CDS_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ProjCDSResourceId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link resourceCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PlannedSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link contractLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ContractLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PlannedCostAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjEstimateHoursImport)
      };
    }

    return this._schema;
  }
}
