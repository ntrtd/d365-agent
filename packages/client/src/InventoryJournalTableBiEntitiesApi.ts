/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryJournalTableBiEntities } from './InventoryJournalTableBiEntities';
import { InventoryJournalTableBiEntitiesRequestBuilder } from './InventoryJournalTableBiEntitiesRequestBuilder';
import { InventCountingStatusRegistrationPolicy } from './InventCountingStatusRegistrationPolicy';
import { ItemReservation } from './ItemReservation';
import { RetailReplenishmentType } from './RetailReplenishmentType';
import { InventoryServiceJournalExpectedStatus } from './InventoryServiceJournalExpectedStatus';
import { InventJournalType } from './InventJournalType';
import { NoYes } from './NoYes';
import { InventJournalOriginType } from './InventJournalOriginType';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { DetailSummary } from './DetailSummary';
import { RetailRetailStatusTypeBase } from './RetailRetailStatusTypeBase';
import { PlInventDocType } from './PlInventDocType';
import { InventJournalWorkflowApprovalStatus } from './InventJournalWorkflowApprovalStatus';
import { JournalVoucherDraw } from './JournalVoucherDraw';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class InventoryJournalTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryJournalTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventoryJournalTableBiEntitiesApi<DeSerializersT> {
    return new InventoryJournalTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryJournalTableBiEntities;

  requestBuilder(): InventoryJournalTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventoryJournalTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryJournalTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryJournalTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryJournalTableBiEntities<DeSerializersT>,
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
    typeof InventoryJournalTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryJournalTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTING_STATUS_REGISTRATION_POLICY: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventCountingStatusRegistrationPolicy,
      true,
      true
    >;
    RESERVATION: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUM_OF_LINES: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_REPLENISHMENT_TYPE: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailReplenishmentType,
      true,
      true
    >;
    JOURNAL_ID_ORIGNAL: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_JOURNAL_EXPECTED_STATUS: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventoryServiceJournalExpectedStatus,
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventJournalType,
      true,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SESSION_LOGIN_DATE_TIME: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SESSION_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_BLOCKED: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FSH_REPLENISHMENT_REF: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_OVER_UNDER_TRANS_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFF_SESSION_ID_RU: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_USER_GROUP_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_ORIGIN_TYPE: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventJournalOriginType,
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_USER_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_CHANGE: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventJournalVoucherChange,
      true,
      true
    >;
    POSTED: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RETAIL_COMMITTED: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DETAIL_SUMMARY: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    STORNO_RU: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_DIM_FIXED: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_RETAIL_STATUS_TYPE: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailRetailStatusTypeBase,
      true,
      true
    >;
    INVENT_DOC_TYPE_PL: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      PlInventDocType,
      true,
      true
    >;
    WORKFLOW_APPROVAL_STATUS: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventJournalWorkflowApprovalStatus,
      true,
      true
    >;
    VOUCHER_DRAW: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    DELETE_POSTED_LINES: EnumField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      InventoryJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventoryJournalTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countingStatusRegistrationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_STATUS_REGISTRATION_POLICY: fieldBuilder.buildEnumField(
          'CountingStatusRegistrationPolicy',
          InventCountingStatusRegistrationPolicy,
          true
        ),
        /**
         * Static representation of the {@link reservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION: fieldBuilder.buildEnumField(
          'Reservation',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PostedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link numOfLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_LINES: fieldBuilder.buildEdmTypeField(
          'NumOfLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link retailReplenishmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_REPLENISHMENT_TYPE: fieldBuilder.buildEnumField(
          'RetailReplenishmentType',
          RetailReplenishmentType,
          true
        ),
        /**
         * Static representation of the {@link journalIdOrignal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID_ORIGNAL: fieldBuilder.buildEdmTypeField(
          'JournalIdOrignal',
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
         * Static representation of the {@link inventoryServiceJournalExpectedStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_JOURNAL_EXPECTED_STATUS: fieldBuilder.buildEnumField(
          'InventoryServiceJournalExpectedStatus',
          InventoryServiceJournalExpectedStatus,
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          InventJournalType,
          true
        ),
        /**
         * Static representation of the {@link packedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'PackedExtensions',
          'Edm.Binary',
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
         * Static representation of the {@link sessionLoginDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_LOGIN_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SessionLoginDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sessionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_ID: fieldBuilder.buildEdmTypeField(
          'SessionId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link systemBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_BLOCKED: fieldBuilder.buildEnumField(
          'SystemBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fshReplenishmentRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FSH_REPLENISHMENT_REF: fieldBuilder.buildEdmTypeField(
          'FSHReplenishmentRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itmOverUnderTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_OVER_UNDER_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ITMOverUnderTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offSessionIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFF_SESSION_ID_RU: fieldBuilder.buildEdmTypeField(
          'OffSessionId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockUserGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_USER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BlockUserGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEdmTypeField('Source', 'Edm.String', true),
        /**
         * Static representation of the {@link journalOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'JournalOriginType',
          InventJournalOriginType,
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_USER_ID: fieldBuilder.buildEdmTypeField(
          'BlockUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_CHANGE: fieldBuilder.buildEnumField(
          'VoucherChange',
          InventJournalVoucherChange,
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link isRetailCommitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETAIL_COMMITTED: fieldBuilder.buildEnumField(
          'IsRetailCommitted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link detailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'DetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link stornoRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_RU: fieldBuilder.buildEnumField('Storno_RU', NoYes, true),
        /**
         * Static representation of the {@link inventDimFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_FIXED: fieldBuilder.buildEdmTypeField(
          'InventDimFixed',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailRetailStatusType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RETAIL_STATUS_TYPE: fieldBuilder.buildEnumField(
          'RetailRetailStatusType',
          RetailRetailStatusTypeBase,
          true
        ),
        /**
         * Static representation of the {@link inventDocTypePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DOC_TYPE_PL: fieldBuilder.buildEnumField(
          'InventDocType_PL',
          PlInventDocType,
          true
        ),
        /**
         * Static representation of the {@link workflowApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'WorkflowApprovalStatus',
          InventJournalWorkflowApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link voucherDraw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_DRAW: fieldBuilder.buildEnumField(
          'VoucherDraw',
          JournalVoucherDraw,
          true
        ),
        /**
         * Static representation of the {@link deletePostedLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_POSTED_LINES: fieldBuilder.buildEnumField(
          'DeletePostedLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postedUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_USER_ID: fieldBuilder.buildEdmTypeField(
          'PostedUserId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryJournalTableBiEntities)
      };
    }

    return this._schema;
  }
}
