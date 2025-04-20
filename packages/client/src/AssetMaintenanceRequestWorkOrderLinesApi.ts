/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestWorkOrderLines } from './AssetMaintenanceRequestWorkOrderLines';
import { AssetMaintenanceRequestWorkOrderLinesRequestBuilder } from './AssetMaintenanceRequestWorkOrderLinesRequestBuilder';
import { MaintenanceWorkOrderLineDocumentAttachmentsApi } from './MaintenanceWorkOrderLineDocumentAttachmentsApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AssetMaintenanceWorkOrderJobChecklistHeadersV2Api } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2Api';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
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
export class AssetMaintenanceRequestWorkOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
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
  ): AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT> {
    return new AssetMaintenanceRequestWorkOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link requestWorkOrderJobDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_WORK_ORDER_JOB_DOCUMENT_ATTACHMENT: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderJobChecklistHeadersMaintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAssetInstallationFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE_VARIANT: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REQUEST_WORK_ORDER_JOB_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'RequestWorkOrderJob_DocumentAttachment',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_REQUEST_WORK_ORDER_JOB:
        new OneToManyLink(
          'MaintenanceAssetBillOfMaterials_MaintenanceRequestWorkOrderJob',
          this,
          linkedApis[1]
        ),
      MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_REQUEST_WORK_ORDER_JOB:
        new OneToManyLink(
          'MaintenanceWorkOrderJobChecklistHeaders_MaintenanceRequestWorkOrderJob',
          this,
          linkedApis[2]
        ),
      ASSET: new OneToOneLink('Asset', this, linkedApis[3]),
      REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION:
        new OneToOneLink(
          'ReplacementMaintenanceAssetInstallationFunctionalLocation',
          this,
          linkedApis[4]
        ),
      REPLACEMENT_MAINTENANCE_ASSET: new OneToOneLink(
        'ReplacementMaintenanceAsset',
        this,
        linkedApis[5]
      ),
      MAINTENANCE_JOB_TYPE_VARIANT: new OneToOneLink(
        'MaintenanceJobTypeVariant',
        this,
        linkedApis[6]
      ),
      SCHEDULED_WORKER: new OneToOneLink(
        'ScheduledWorker',
        this,
        linkedApis[7]
      ),
      MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'MaintenanceJobTrade',
        this,
        linkedApis[8]
      ),
      MAINTENANCE_REQUEST: new OneToOneLink(
        'MaintenanceRequest',
        this,
        linkedApis[9]
      ),
      MAINTENANCE_WORK_ORDER_HEADER: new OneToOneLink(
        'MaintenanceWorkOrderHeader',
        this,
        linkedApis[10]
      ),
      MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceAssetFunctionalLocation',
        this,
        linkedApis[11]
      ),
      MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'MaintenanceJobType',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequestWorkOrderLines;

  requestBuilder(): AssetMaintenanceRequestWorkOrderLinesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestWorkOrderLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
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
    typeof AssetMaintenanceRequestWorkOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestWorkOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_JOB_DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_REQUEST_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_START_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ORDER_JOB_MAINTENANCE_WORKER_REMARKS: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_JOB_INTERNAL_NOTE: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_HOUR_QTY: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_SCHEDULE_LINK_TYPE: EnumField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      SchedJobLink,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequestWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestWorkOrderJobDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_WORK_ORDER_JOB_DOCUMENT_ATTACHMENT: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderJobChecklistHeadersMaintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAssetInstallationFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE_VARIANT: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRequestWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceRequestWorkOrderLines<DeSerializers>>;
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
         * Static representation of the {@link maintenanceRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceRequestId',
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRequestWorkOrderLines)
      };
    }

    return this._schema;
  }
}
