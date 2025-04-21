/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessAdvisorWarehouseMaterialFlows } from './ProcessAdvisorWarehouseMaterialFlows';
import { ProcessAdvisorWarehouseMaterialFlowsRequestBuilder } from './ProcessAdvisorWarehouseMaterialFlowsRequestBuilder';
import { WhsWorkType } from './WhsWorkType';
import { WhsWorkTransType } from './WhsWorkTransType';
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
export class ProcessAdvisorWarehouseMaterialFlowsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializersT>,
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
  ): ProcessAdvisorWarehouseMaterialFlowsApi<DeSerializersT> {
    return new ProcessAdvisorWarehouseMaterialFlowsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessAdvisorWarehouseMaterialFlows;

  requestBuilder(): ProcessAdvisorWarehouseMaterialFlowsRequestBuilder<DeSerializersT> {
    return new ProcessAdvisorWarehouseMaterialFlowsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProcessAdvisorWarehouseMaterialFlows<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessAdvisorWarehouseMaterialFlows<DeSerializersT>,
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
    typeof ProcessAdvisorWarehouseMaterialFlows,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessAdvisorWarehouseMaterialFlows,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_ADVISOR_PROCESS_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WAREHOUSE_WORK_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_LINE_NUMBER: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_WORK_TYPE: EnumField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      WhsWorkType,
      true,
      true
    >;
    WAREHOUSE_WORK_ORDER_TYPE: EnumField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      WhsWorkTransType,
      true,
      true
    >;
    SOURCE_ORDER_NUMBER: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_QUANTITY: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETED_BY_USER_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WORK_LINE_SHORT_PICKED: EnumField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_PROFILE_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WORK_LINE_REPLENISHED: EnumField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ZONE_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_CLOSED_DATE_TIME: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_GROUP_ID: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      ProcessAdvisorWarehouseMaterialFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProcessAdvisorWarehouseMaterialFlows<DeSerializers>>;
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
         * Static representation of the {@link processAdvisorProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ADVISOR_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessAdvisorProcessId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link warehouseWorkId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warehouseWorkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_TYPE: fieldBuilder.buildEnumField(
          'WarehouseWorkType',
          WhsWorkType,
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_ORDER_TYPE: fieldBuilder.buildEnumField(
          'WarehouseWorkOrderType',
          WhsWorkTransType,
          true
        ),
        /**
         * Static representation of the {@link sourceOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'WorkQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completedByUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_BY_USER_ID: fieldBuilder.buildEdmTypeField(
          'CompletedByUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWorkLineShortPicked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORK_LINE_SHORT_PICKED: fieldBuilder.buildEnumField(
          'IsWorkLineShortPicked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY: fieldBuilder.buildEdmTypeField(
          'Activity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'LocationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWorkLineReplenished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORK_LINE_REPLENISHED: fieldBuilder.buildEnumField(
          'IsWorkLineReplenished',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkClosedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_CLOSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkClosedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'WorkQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessAdvisorWarehouseMaterialFlows)
      };
    }

    return this._schema;
  }
}
