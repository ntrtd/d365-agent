/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorStatisticalMeasures } from './CostAccountingDataConnectorStatisticalMeasures';
import { CostAccountingDataConnectorStatisticalMeasuresRequestBuilder } from './CostAccountingDataConnectorStatisticalMeasuresRequestBuilder';
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
export class CostAccountingDataConnectorStatisticalMeasuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializersT>,
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
  ): CostAccountingDataConnectorStatisticalMeasuresApi<DeSerializersT> {
    return new CostAccountingDataConnectorStatisticalMeasuresApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostAccountingDataConnectorStatisticalMeasures;

  requestBuilder(): CostAccountingDataConnectorStatisticalMeasuresRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorStatisticalMeasuresRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorStatisticalMeasures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorStatisticalMeasures<DeSerializersT>,
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
    typeof CostAccountingDataConnectorStatisticalMeasures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorStatisticalMeasures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_STATISTICAL_MEASURE_CONFIGURATION_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_IDENTIFIER: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_EXPIRED: EnumField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAGNITUDE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorStatisticalMeasures<DeSerializers>
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
         * Static representation of the {@link dataConnectorStatisticalMeasureConfigurationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_STATISTICAL_MEASURE_CONFIGURATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorStatisticalMeasureConfigurationName',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SourceIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isExpired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPIRED: fieldBuilder.buildEnumField('IsExpired', NoYes, true),
        /**
         * Static representation of the {@link magnitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNITUDE: fieldBuilder.buildEdmTypeField(
          'Magnitude',
          'Edm.Decimal',
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
            true
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostAccountingDataConnectorStatisticalMeasures
        )
      };
    }

    return this._schema;
  }
}
