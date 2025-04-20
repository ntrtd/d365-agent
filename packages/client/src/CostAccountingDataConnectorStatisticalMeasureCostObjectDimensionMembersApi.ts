/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers } from './CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers';
import { CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersRequestBuilder } from './CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersRequestBuilder';
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
export class CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializersT>,
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
  ): CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersApi<DeSerializersT> {
    return new CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers;

  requestBuilder(): CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializersT>,
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
    typeof CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_STATISTICAL_MEASURE_PERIOD_START_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATA_CONNECTOR_STATISTICAL_MEASURE_PERIOD_END_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATA_CONNECTOR_STATISTICAL_MEASURE_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_STATISTICAL_MEASURE_SOURCE_IDENTIFIER: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_COST_OBJECT_DIMENSION_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_OBJECT_DIMENSION_MEMBER_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataConnectorSystemInstanceSurrogateKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorSystemInstanceSurrogateKey',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link dataConnectorDataTransferSurrogateKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorDataTransferSurrogateKey',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link dataConnectorStatisticalMeasurePeriodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_STATISTICAL_MEASURE_PERIOD_START_DATE:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorStatisticalMeasurePeriodStartDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link dataConnectorStatisticalMeasurePeriodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_STATISTICAL_MEASURE_PERIOD_END_DATE:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorStatisticalMeasurePeriodEndDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link dataConnectorStatisticalMeasureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_STATISTICAL_MEASURE_NAME: fieldBuilder.buildEdmTypeField(
          'DataConnectorStatisticalMeasureName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataConnectorStatisticalMeasureSourceIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_STATISTICAL_MEASURE_SOURCE_IDENTIFIER:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorStatisticalMeasureSourceIdentifier',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link dataConnectorCostObjectDimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_COST_OBJECT_DIMENSION_NAME:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorCostObjectDimensionName',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link costObjectDimensionMemberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionMemberName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers
        )
      };
    }

    return this._schema;
  }
}
