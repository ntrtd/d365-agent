/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WmsPickingRouteBiEntities } from './WmsPickingRouteBiEntities';
import { WmsPickingRouteBiEntitiesRequestBuilder } from './WmsPickingRouteBiEntitiesRequestBuilder';
import { InventTransType } from './InventTransType';
import { WmsExpeditionStatus } from './WmsExpeditionStatus';
import { WmsShipmentType } from './WmsShipmentType';
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
export class WmsPickingRouteBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WmsPickingRouteBiEntities<DeSerializersT>, DeSerializersT>
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
  ): WmsPickingRouteBiEntitiesApi<DeSerializersT> {
    return new WmsPickingRouteBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WmsPickingRouteBiEntities;

  requestBuilder(): WmsPickingRouteBiEntitiesRequestBuilder<DeSerializersT> {
    return new WmsPickingRouteBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WmsPickingRouteBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WmsPickingRouteBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WmsPickingRouteBiEntities<DeSerializersT>,
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
    typeof WmsPickingRouteBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WmsPickingRouteBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICKING_ROUTE_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DLV_DATE: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_REF_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      InventTransType,
      true,
      true
    >;
    DLV_TERM_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPEDITION_STATUS: EnumField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      WmsExpeditionStatus,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_TYPE: EnumField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      WmsShipmentType,
      true,
      true
    >;
    ACTIVATION_DATE_TIME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OPERATOR_WORKER: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRINT_MGMT_SITE_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_EXPEDITION_TIME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MCR_PICKING_WAVE_REF: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_PACKING_BOX_NAME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_MODE_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_TRANSACTION_ID: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_DECREASE_QTY: EnumField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTER_COMPANY_POSTED: EnumField<
      WmsPickingRouteBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WmsPickingRouteBiEntities<DeSerializers>>;
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
         * Static representation of the {@link pickingRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'pickingRouteID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'shipmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dlvDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_DATE: fieldBuilder.buildEdmTypeField(
          'DlvDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REF_ID: fieldBuilder.buildEdmTypeField(
          'transRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'transType',
          InventTransType,
          true
        ),
        /**
         * Static representation of the {@link dlvTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM_ID: fieldBuilder.buildEdmTypeField(
          'DlvTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expeditionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPEDITION_STATUS: fieldBuilder.buildEnumField(
          'expeditionStatus',
          WmsExpeditionStatus,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_TYPE: fieldBuilder.buildEnumField(
          'shipmentType',
          WmsShipmentType,
          true
        ),
        /**
         * Static representation of the {@link activationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActivationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link operatorWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR_WORKER: fieldBuilder.buildEdmTypeField(
          'operatorWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'endDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link printMgmtSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_MGMT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'PrintMgmtSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedExpeditionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_EXPEDITION_TIME: fieldBuilder.buildEdmTypeField(
          'expectedExpeditionTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mcrPickingWaveRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PICKING_WAVE_REF: fieldBuilder.buildEdmTypeField(
          'MCRPickingWaveRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrPackingBoxName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PACKING_BOX_NAME: fieldBuilder.buildEdmTypeField(
          'MCRPackingBoxName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DlvModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'inventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysModifiedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'customer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoDecreaseQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_DECREASE_QTY: fieldBuilder.buildEnumField(
          'autoDecreaseQty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'startDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link interCompanyPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_POSTED: fieldBuilder.buildEnumField(
          'InterCompanyPosted',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WmsPickingRouteBiEntities)
      };
    }

    return this._schema;
  }
}
