/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenancePlanWorkOrderLines } from './AssetMaintenancePlanWorkOrderLines';
import { AssetMaintenancePlanWorkOrderLinesRequestBuilder } from './AssetMaintenancePlanWorkOrderLinesRequestBuilder';
import { MaintenanceWorkOrderLineDocumentAttachmentsApi } from './MaintenanceWorkOrderLineDocumentAttachmentsApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenancePlansApi } from './AssetMaintenancePlansApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AssetMaintenanceWorkOrderJobChecklistHeadersV2Api } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2Api';
import { SchedJobLink } from './SchedJobLink';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenancePlanWorkOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
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
  ): AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT> {
    return new AssetMaintenancePlanWorkOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderJobDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_JOB_DOCUMENT_ATTACHMENT: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAssetInstallationFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_VARIANT: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderJobChecklistHeadersMaintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenancePlansApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_PLAN_WORK_ORDER_JOB_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'MaintenancePlanWorkOrderJob_DocumentAttachment',
        this,
        linkedApis[0]
      ),
      REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION:
        new OneToOneLink(
          'ReplacementMaintenanceAssetInstallationFunctionalLocation',
          this,
          linkedApis[1]
        ),
      MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'MaintenanceJobType',
        this,
        linkedApis[2]
      ),
      REPLACEMENT_MAINTENANCE_ASSET: new OneToOneLink(
        'ReplacementMaintenanceAsset',
        this,
        linkedApis[3]
      ),
      MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'MaintenanceJobTrade',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceAssetFunctionalLocation',
        this,
        linkedApis[5]
      ),
      SCHEDULED_WORKER: new OneToOneLink(
        'ScheduledWorker',
        this,
        linkedApis[6]
      ),
      MAINTENANCE_WORK_ORDER_HEADER: new OneToOneLink(
        'MaintenanceWorkOrderHeader',
        this,
        linkedApis[7]
      ),
      JOB_TYPE_VARIANT: new OneToOneLink('JobTypeVariant', this, linkedApis[8]),
      ASSET: new OneToOneLink('Asset', this, linkedApis[9]),
      MAINTENANCE_PLAN: new OneToOneLink(
        'MaintenancePlan',
        this,
        linkedApis[10]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_PLAN_WORK_ORDER_JOB:
        new OneToManyLink(
          'MaintenanceAssetBillOfMaterials_MaintenancePlanWorkOrderJob',
          this,
          linkedApis[11]
        ),
      MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_PLAN_WORK_ORDER_JOB:
        new OneToManyLink(
          'MaintenanceWorkOrderJobChecklistHeaders_MaintenancePlanWorkOrderJob',
          this,
          linkedApis[12]
        )
    };
    return this;
  }

  entityConstructor = AssetMaintenancePlanWorkOrderLines;

  requestBuilder(): AssetMaintenancePlanWorkOrderLinesRequestBuilder<DeSerializersT> {
    return new AssetMaintenancePlanWorkOrderLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
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
    typeof AssetMaintenancePlanWorkOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenancePlanWorkOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_PLAN_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_JOB_DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_START_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ORDER_JOB_MAINTENANCE_WORKER_REMARKS: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_JOB_INTERNAL_NOTE: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_HOUR_QTY: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_SCHEDULE_LINK_TYPE: EnumField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      SchedJobLink,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenancePlanWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderJobDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_JOB_DOCUMENT_ATTACHMENT: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAssetInstallationFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_VARIANT: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN: OneToOneLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderJobChecklistHeadersMaintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenancePlanWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenancePlanWorkOrderLines<DeSerializers>>;
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
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenancePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'MaintenancePlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementMaintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'ReplacementMaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderJobDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'WorkOrderJobDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetFunctionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_FUNCTIONAL_LOCATION_ID:
          fieldBuilder.buildEdmTypeField(
            'MaintenanceAssetFunctionalLocationId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link scheduledStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduledEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workOrderJobMaintenanceWorkerRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_JOB_MAINTENANCE_WORKER_REMARKS:
          fieldBuilder.buildEdmTypeField(
            'WorkOrderJobMaintenanceWorkerRemarks',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replacementMaintenanceAssetInstallationFunctionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION_ID:
          fieldBuilder.buildEdmTypeField(
            'ReplacementMaintenanceAssetInstallationFunctionalLocationId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link workOrderJobInternalNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_JOB_INTERNAL_NOTE: fieldBuilder.buildEdmTypeField(
          'WorkOrderJobInternalNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastHourQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_HOUR_QTY: fieldBuilder.buildEdmTypeField(
          'ForecastHourQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobScheduleLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_SCHEDULE_LINK_TYPE: fieldBuilder.buildEnumField(
          'JobScheduleLinkType',
          SchedJobLink,
          true
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduledWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduledWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenancePlanWorkOrderLines)
      };
    }

    return this._schema;
  }
}
