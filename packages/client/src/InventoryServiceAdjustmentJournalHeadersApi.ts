/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryServiceAdjustmentJournalHeaders } from './InventoryServiceAdjustmentJournalHeaders';
import { InventoryServiceAdjustmentJournalHeadersRequestBuilder } from './InventoryServiceAdjustmentJournalHeadersRequestBuilder';
import { InventoryServiceAdjustmentJournalEntriesApi } from './InventoryServiceAdjustmentJournalEntriesApi';
import { NoYes } from './NoYes';
import { ItemReservation } from './ItemReservation';
import { DetailSummary } from './DetailSummary';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { InventoryServiceJournalExpectedStatus } from './InventoryServiceJournalExpectedStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryServiceAdjustmentJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InventoryServiceAdjustmentJournalHeaders<DeSerializersT>,
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
  ): InventoryServiceAdjustmentJournalHeadersApi<DeSerializersT> {
    return new InventoryServiceAdjustmentJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inventoryServiceAdjustmentJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SERVICE_ADJUSTMENT_JOURNAL_ENTRIES: OneToManyLink<
      InventoryServiceAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InventoryServiceAdjustmentJournalEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InventoryServiceAdjustmentJournalEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_SERVICE_ADJUSTMENT_JOURNAL_ENTRIES: new OneToManyLink(
        'InventoryServiceAdjustmentJournalEntries',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InventoryServiceAdjustmentJournalHeaders;

  requestBuilder(): InventoryServiceAdjustmentJournalHeadersRequestBuilder<DeSerializersT> {
    return new InventoryServiceAdjustmentJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryServiceAdjustmentJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryServiceAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryServiceAdjustmentJournalHeaders<DeSerializersT>,
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
    typeof InventoryServiceAdjustmentJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryServiceAdjustmentJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_POSTED: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_MODE: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    POSTING_DETAIL_LEVEL: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    DEFAULT_INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_NUMBER_SELECTION_RULE: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      InventJournalVoucherChange,
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER_NUMBER_ALLOCATION_RULE: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    VOUCHER_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_LINES_DELETED_AFTER_POSTING: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_JOURNAL_EXPECTED_STATUS: EnumField<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      InventoryServiceJournalExpectedStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryServiceAdjustmentJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SERVICE_ADJUSTMENT_JOURNAL_ENTRIES: OneToManyLink<
      InventoryServiceAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InventoryServiceAdjustmentJournalEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      InventoryServiceAdjustmentJournalHeaders<DeSerializers>
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
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
         * Static representation of the {@link defaultWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_MODE: fieldBuilder.buildEnumField(
          'ReservationMode',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link postingDetailLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DETAIL_LEVEL: fieldBuilder.buildEnumField(
          'PostingDetailLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link defaultInventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventorySiteId',
          'Edm.String',
          true
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
         * Static representation of the {@link voucherNumberSelectionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER_SELECTION_RULE: fieldBuilder.buildEnumField(
          'VoucherNumberSelectionRule',
          InventJournalVoucherChange,
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
         * Static representation of the {@link voucherNumberAllocationRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER_ALLOCATION_RULE: fieldBuilder.buildEnumField(
          'VoucherNumberAllocationRule',
          JournalVoucherDraw,
          true
        ),
        /**
         * Static representation of the {@link voucherNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'VoucherNumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areLinesDeletedAfterPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_LINES_DELETED_AFTER_POSTING: fieldBuilder.buildEnumField(
          'AreLinesDeletedAfterPosting',
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
        /**
         * Static representation of the {@link inventoryServiceJournalExpectedStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_JOURNAL_EXPECTED_STATUS: fieldBuilder.buildEnumField(
          'InventoryServiceJournalExpectedStatus',
          InventoryServiceJournalExpectedStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryServiceAdjustmentJournalHeaders)
      };
    }

    return this._schema;
  }
}
