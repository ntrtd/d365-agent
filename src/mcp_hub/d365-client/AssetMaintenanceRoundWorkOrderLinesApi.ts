/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRoundWorkOrderLines } from './AssetMaintenanceRoundWorkOrderLines';
import { AssetMaintenanceRoundWorkOrderLinesRequestBuilder } from './AssetMaintenanceRoundWorkOrderLinesRequestBuilder';
import { MaintenanceWorkOrderLineDocumentAttachmentsApi } from './MaintenanceWorkOrderLineDocumentAttachmentsApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenanceRoundsApi } from './AssetMaintenanceRoundsApi';
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
export class AssetMaintenanceRoundWorkOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
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
  ): AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT> {
    return new AssetMaintenanceRoundWorkOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link roundWorkOrderJobDocumentAttacment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUND_WORK_ORDER_JOB_DOCUMENT_ATTACMENT: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAssetInstallationFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE_VARIANT: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ROUND: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderJobChecklistHeadersMaintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceRoundsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUND_WORK_ORDER_JOB_DOCUMENT_ATTACMENT: new OneToOneLink(
        'RoundWorkOrderJob_DocumentAttacment',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_ROUND_WORK_ORDER_JOB:
        new OneToManyLink(
          'MaintenanceAssetBillOfMaterials_MaintenanceRoundWorkOrderJob',
          this,
          linkedApis[1]
        ),
      REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION:
        new OneToOneLink(
          'ReplacementMaintenanceAssetInstallationFunctionalLocation',
          this,
          linkedApis[2]
        ),
      MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'MaintenanceJobType',
        this,
        linkedApis[3]
      ),
      REPLACEMENT_MAINTENANCE_ASSET: new OneToOneLink(
        'ReplacementMaintenanceAsset',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'MaintenanceJobTrade',
        this,
        linkedApis[5]
      ),
      MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceAssetFunctionalLocation',
        this,
        linkedApis[6]
      ),
      SCHEDULED_WORKER: new OneToOneLink(
        'ScheduledWorker',
        this,
        linkedApis[7]
      ),
      MAINTENANCE_WORK_ORDER_HEADER: new OneToOneLink(
        'MaintenanceWorkOrderHeader',
        this,
        linkedApis[8]
      ),
      MAINTENANCE_JOB_TYPE_VARIANT: new OneToOneLink(
        'MaintenanceJobTypeVariant',
        this,
        linkedApis[9]
      ),
      MAINTENANCE_ROUND: new OneToOneLink(
        'MaintenanceRound',
        this,
        linkedApis[10]
      ),
      ASSET: new OneToOneLink('Asset', this, linkedApis[11]),
      MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_ROUND_WORK_ORDER_JOB:
        new OneToManyLink(
          'MaintenanceWorkOrderJobChecklistHeaders_MaintenanceRoundWorkOrderJob',
          this,
          linkedApis[12]
        )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRoundWorkOrderLines;

  requestBuilder(): AssetMaintenanceRoundWorkOrderLinesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRoundWorkOrderLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
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
    typeof AssetMaintenanceRoundWorkOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRoundWorkOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_JOB_DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_START_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ORDER_JOB_MAINTENANCE_WORKER_REMARKS: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_JOB_INTERNAL_NOTE: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_HOUR_QTY: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAINTENANCE_ROUND_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_SCHEDULE_LINK_TYPE: EnumField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      SchedJobLink,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRoundWorkOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link roundWorkOrderJobDocumentAttacment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUND_WORK_ORDER_JOB_DOCUMENT_ATTACMENT: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAssetInstallationFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET_INSTALLATION_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replacementMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE_VARIANT: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ROUND: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderJobChecklistHeadersMaintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_CHECKLIST_HEADERS_MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToManyLink<
      AssetMaintenanceRoundWorkOrderLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceRoundWorkOrderLines<DeSerializers>>;
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
         * Static representation of the {@link maintenanceRoundId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ROUND_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceRoundId',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRoundWorkOrderLines)
      };
    }

    return this._schema;
  }
}
