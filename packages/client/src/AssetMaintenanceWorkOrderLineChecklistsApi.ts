/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLineChecklists } from './AssetMaintenanceWorkOrderLineChecklists';
import { AssetMaintenanceWorkOrderLineChecklistsRequestBuilder } from './AssetMaintenanceWorkOrderLineChecklistsRequestBuilder';
import { AssetMaintenanceAssetCountersApi } from './AssetMaintenanceAssetCountersApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceChecklistVariablesApi } from './AssetMaintenanceChecklistVariablesApi';
import { AssetMaintenanceWorkOrderJobChecklistHeadersV2Api } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2Api';
import { EntAssetChecklistCounterUpdate } from './EntAssetChecklistCounterUpdate';
import { NoYes } from './NoYes';
import { EntAssetChecklistActionType } from './EntAssetChecklistActionType';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';
import { EntAssetChecklistRefType } from './EntAssetChecklistRefType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderLineChecklistsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineChecklistsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link measurementCounterType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT_COUNTER_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCountersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_WORKER: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link measurementCounter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT_COUNTER: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCountersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobChecklistVariable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_VARIABLE: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceChecklistVariablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobChecklistHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_HEADER: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetCountersApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceAssetCountersApi<DeSerializersT>,
      AssetMaintenanceChecklistVariablesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MEASUREMENT_COUNTER_TYPE: new OneToOneLink(
        'MeasurementCounterType',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_WORKER: new OneToOneLink(
        'MaintenanceAssetWorker',
        this,
        linkedApis[1]
      ),
      MEASUREMENT_COUNTER: new OneToOneLink(
        'MeasurementCounter',
        this,
        linkedApis[2]
      ),
      JOB_CHECKLIST_VARIABLE: new OneToOneLink(
        'JobChecklistVariable',
        this,
        linkedApis[3]
      ),
      JOB_CHECKLIST_HEADER: new OneToOneLink(
        'JobChecklistHeader',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLineChecklists;

  requestBuilder(): AssetMaintenanceWorkOrderLineChecklistsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineChecklistsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLineChecklists,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLineChecklists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_LINE_NUM: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MEASURE_UPDATE: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistCounterUpdate,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MEASURE_MAX_VALUE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKED_COUNTER_REPLACED: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECKLIST_VARIABLE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistActionType,
      true,
      true
    >;
    CHECKED_BY_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASURE_UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKED_COUNTER_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MEASURE_MIN_VALUE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROUP_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHECKED_COUNTER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOT_APPLICABLE: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_STATUS: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistLineStatus,
      true,
      true
    >;
    CHECKED: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECKED_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIABLE_VALUE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKLIST_REF_TYPE: EnumField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistRefType,
      true,
      true
    >;
    CHECKED_MAINTENANCE_ASSET_COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASURE_VALUE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_CHECKED: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link measurementCounterType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT_COUNTER_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCountersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_WORKER: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link measurementCounter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT_COUNTER: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCountersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobChecklistVariable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_VARIABLE: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceChecklistVariablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobChecklistHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_HEADER: OneToOneLink<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLineChecklists<DeSerializers>
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
         * Static representation of the {@link externalLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ExternalLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link measureUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_UPDATE: fieldBuilder.buildEnumField(
          'MeasureUpdate',
          EntAssetChecklistCounterUpdate,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link measureMaxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_MAX_VALUE: fieldBuilder.buildEdmTypeField(
          'MeasureMaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link instructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'Instructions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkedCounterReplaced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED_COUNTER_REPLACED: fieldBuilder.buildEnumField(
          'CheckedCounterReplaced',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checklistVariableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_VARIABLE_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistVariableId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          EntAssetChecklistActionType,
          true
        ),
        /**
         * Static representation of the {@link checkedByPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED_BY_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'CheckedByPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link measureUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'MeasureUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkedCounterDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED_COUNTER_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CheckedCounterDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link measureMinValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_MIN_VALUE: fieldBuilder.buildEdmTypeField(
          'MeasureMinValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link groupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'GroupNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link checkedCounterTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED_COUNTER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CheckedCounterTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY: fieldBuilder.buildEnumField('Mandatory', NoYes, true),
        /**
         * Static representation of the {@link notApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_APPLICABLE: fieldBuilder.buildEnumField(
          'NotApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_STATUS: fieldBuilder.buildEnumField(
          'LineStatus',
          EntAssetChecklistLineStatus,
          true
        ),
        /**
         * Static representation of the {@link checked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED: fieldBuilder.buildEnumField('Checked', NoYes, true),
        /**
         * Static representation of the {@link checkedMaintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED_MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'CheckedMaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variableValueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_VALUE_ID: fieldBuilder.buildEdmTypeField(
          'VariableValueId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link checklistRefType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_REF_TYPE: fieldBuilder.buildEnumField(
          'ChecklistRefType',
          EntAssetChecklistRefType,
          true
        ),
        /**
         * Static representation of the {@link checkedMaintenanceAssetCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKED_MAINTENANCE_ASSET_COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'CheckedMaintenanceAssetCounterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link measureValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_VALUE: fieldBuilder.buildEdmTypeField(
          'MeasureValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dateChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_CHECKED: fieldBuilder.buildEdmTypeField(
          'DateChecked',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderLineChecklists)
      };
    }

    return this._schema;
  }
}
