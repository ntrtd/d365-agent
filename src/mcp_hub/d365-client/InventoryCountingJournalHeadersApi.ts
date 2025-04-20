/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountingJournalHeaders } from './InventoryCountingJournalHeaders';
import { InventoryCountingJournalHeadersRequestBuilder } from './InventoryCountingJournalHeadersRequestBuilder';
import { InventoryCountingJournalLinesApi } from './InventoryCountingJournalLinesApi';
import { WorkersApi } from './WorkersApi';
import { NoYes } from './NoYes';
import { ItemReservation } from './ItemReservation';
import { DetailSummary } from './DetailSummary';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { InventCountingStatusRegistrationPolicy } from './InventCountingStatusRegistrationPolicy';
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
export class InventoryCountingJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryCountingJournalHeaders<DeSerializersT>, DeSerializersT>
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
  ): InventoryCountingJournalHeadersApi<DeSerializersT> {
    return new InventoryCountingJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountingJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_LINE: OneToManyLink<
      InventoryCountingJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InventoryCountingJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InventoryCountingJournalLinesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_COUNTING_JOURNAL_LINE: new OneToManyLink(
        'InventoryCountingJournalLine',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = InventoryCountingJournalHeaders;

  requestBuilder(): InventoryCountingJournalHeadersRequestBuilder<DeSerializersT> {
    return new InventoryCountingJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryCountingJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryCountingJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryCountingJournalHeaders<DeSerializersT>,
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
    typeof InventoryCountingJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryCountingJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_POSTED: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COUNTING_LICENSE_PLATE_SPECIFIC: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COUNTING_ITEM_BATCH_SPECIFIC: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_COUNTING_WAREHOUSE_LOCATION_SPECIFIC: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESERVATION_MODE: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    POSTING_DETAIL_LEVEL: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    DEFAULT_INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_NUMBER_SELECTION_RULE: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      InventJournalVoucherChange,
      true,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_COUNTING_ITEM_SERIAL_NUMBER_SPECIFIC: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER_NUMBER_ALLOCATION_RULE: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    IS_COUNTING_WAREHOUSE_SPECIFIC: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_LINES_DELETED_AFTER_POSTING: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_STATUS_REGISTRATION_POLICY: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      InventCountingStatusRegistrationPolicy,
      true,
      true
    >;
    IS_COUNTING_INVENTORY_STATUS_SPECIFIC: EnumField<
      InventoryCountingJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountingJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_LINE: OneToManyLink<
      InventoryCountingJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InventoryCountingJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryCountingJournalHeaders<DeSerializers>>;
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
         * Static representation of the {@link isCountingLicensePlateSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTING_LICENSE_PLATE_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCountingLicensePlateSpecific',
          NoYes,
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
         * Static representation of the {@link isCountingItemBatchSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTING_ITEM_BATCH_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCountingItemBatchSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCountingWarehouseLocationSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTING_WAREHOUSE_LOCATION_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCountingWarehouseLocationSpecific',
          NoYes,
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
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
         * Static representation of the {@link isCountingItemSerialNumberSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTING_ITEM_SERIAL_NUMBER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCountingItemSerialNumberSpecific',
          NoYes,
          true
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
         * Static representation of the {@link isCountingWarehouseSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTING_WAREHOUSE_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCountingWarehouseSpecific',
          NoYes,
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
         * Static representation of the {@link countingStatusRegistrationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_STATUS_REGISTRATION_POLICY: fieldBuilder.buildEnumField(
          'CountingStatusRegistrationPolicy',
          InventCountingStatusRegistrationPolicy,
          true
        ),
        /**
         * Static representation of the {@link isCountingInventoryStatusSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTING_INVENTORY_STATUS_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCountingInventoryStatusSpecific',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryCountingJournalHeaders)
      };
    }

    return this._schema;
  }
}
