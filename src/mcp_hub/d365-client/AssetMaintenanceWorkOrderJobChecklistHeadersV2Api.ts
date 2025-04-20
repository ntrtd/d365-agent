/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderJobChecklistHeadersV2 } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2';
import { AssetMaintenanceWorkOrderJobChecklistHeadersV2RequestBuilder } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2RequestBuilder';
import { AssetMaintenanceWorkOrderLineChecklistsApi } from './AssetMaintenanceWorkOrderLineChecklistsApi';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT> {
    return new AssetMaintenanceWorkOrderJobChecklistHeadersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesJobChecklistHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_JOB_CHECKLIST_HEADER: OneToManyLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unplannedWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNPLANNED_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workOrderJobV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_JOB_V_2: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_CHECKLIST_LINES_JOB_CHECKLIST_HEADER: new OneToManyLink(
        'JobChecklistLines_JobChecklistHeader',
        this,
        linkedApis[0]
      ),
      UNPLANNED_WORK_ORDER_JOB: new OneToOneLink(
        'UnplannedWorkOrderJob',
        this,
        linkedApis[1]
      ),
      WORK_ORDER_JOB_V_2: new OneToOneLink(
        'WorkOrderJobV2',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_REQUEST_WORK_ORDER_JOB: new OneToOneLink(
        'MaintenanceRequestWorkOrderJob',
        this,
        linkedApis[3]
      ),
      MAINTENANCE_PLAN_WORK_ORDER_JOB: new OneToOneLink(
        'MaintenancePlanWorkOrderJob',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_ROUND_WORK_ORDER_JOB: new OneToOneLink(
        'MaintenanceRoundWorkOrderJob',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderJobChecklistHeadersV2;

  requestBuilder(): AssetMaintenanceWorkOrderJobChecklistHeadersV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderJobChecklistHeadersV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderJobChecklistHeadersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderJobChecklistHeadersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_WORK_ORDER_JOB_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATUS: EnumField<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistLineStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesJobChecklistHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_JOB_CHECKLIST_HEADER: OneToManyLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unplannedWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNPLANNED_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workOrderJobV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_JOB_V_2: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<DeSerializers>
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
         * Static representation of the {@link maintenanceWorkOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceWorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceWorkOrderJobLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_WORK_ORDER_JOB_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'MaintenanceWorkOrderJobLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          EntAssetChecklistLineStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceWorkOrderJobChecklistHeadersV2
        )
      };
    }

    return this._schema;
  }
}
