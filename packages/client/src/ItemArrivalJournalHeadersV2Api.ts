/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemArrivalJournalHeadersV2 } from './ItemArrivalJournalHeadersV2';
import { ItemArrivalJournalHeadersV2RequestBuilder } from './ItemArrivalJournalHeadersV2RequestBuilder';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { WarehousesApi } from './WarehousesApi';
import { ReturnDispositionCodesApi } from './ReturnDispositionCodesApi';
import { VendorsV2Api } from './VendorsV2Api';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { SystemUsersApi } from './SystemUsersApi';
import { LicensePlatesApi } from './LicensePlatesApi';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';
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
export class ItemArrivalJournalHeadersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ItemArrivalJournalHeadersV2<DeSerializersT>, DeSerializersT>
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
  ): ItemArrivalJournalHeadersV2Api<DeSerializersT> {
    return new ItemArrivalJournalHeadersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINE: OneToManyLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_WAREHOUSE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReturnDispositionCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RETURN_DISPOSITION_CODE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      ReturnDispositionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultVendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_VENDOR_V_2: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_WAREHOUSE_LOCATION: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_SITE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postedUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSTED_USER: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingLicensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_LICENSE_PLATE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ReturnDispositionCodesApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      SystemUsersApi<DeSerializersT>,
      LicensePlatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_ARRIVAL_JOURNAL_LINE: new OneToManyLink(
        'ItemArrivalJournalLine',
        this,
        linkedApis[0]
      ),
      DEFAULT_RECEIVING_WAREHOUSE: new OneToOneLink(
        'DefaultReceivingWarehouse',
        this,
        linkedApis[1]
      ),
      DEFAULT_RETURN_DISPOSITION_CODE: new OneToOneLink(
        'DefaultReturnDispositionCode',
        this,
        linkedApis[2]
      ),
      DEFAULT_VENDOR_V_2: new OneToOneLink(
        'DefaultVendorV2',
        this,
        linkedApis[3]
      ),
      DEFAULT_RECEIVING_WAREHOUSE_LOCATION: new OneToOneLink(
        'DefaultReceivingWarehouseLocation',
        this,
        linkedApis[4]
      ),
      DEFAULT_RECEIVING_SITE: new OneToOneLink(
        'DefaultReceivingSite',
        this,
        linkedApis[5]
      ),
      POSTED_USER: new OneToOneLink('PostedUser', this, linkedApis[6]),
      DEFAULT_RECEIVING_LICENSE_PLATE: new OneToOneLink(
        'DefaultReceivingLicensePlate',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = ItemArrivalJournalHeadersV2;

  requestBuilder(): ItemArrivalJournalHeadersV2RequestBuilder<DeSerializersT> {
    return new ItemArrivalJournalHeadersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemArrivalJournalHeadersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemArrivalJournalHeadersV2<DeSerializersT>,
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
    typeof ItemArrivalJournalHeadersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemArrivalJournalHeadersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_POSTED: EnumField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_RECEIVING_SITE_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RETURN_ITEM_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ITEM_MOVED_TO_DEFAULT_ITEM_PICKING_WAREHOUSE_LOCATION: EnumField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKING_SLIP_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TRANSACTION_REFERENCE_TYPE: EnumField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      InventTransType,
      true,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RECEIVING_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_RECEIVING_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUARANTINE_ORDER_CREATED_FOR_RECEIVED_ITEM: EnumField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TRANSACTION_REFERENCE_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_LINES_DELETED_AFTER_POSTING: EnumField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RECEIVING_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINE: OneToManyLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_WAREHOUSE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReturnDispositionCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RETURN_DISPOSITION_CODE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      ReturnDispositionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultVendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_VENDOR_V_2: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_WAREHOUSE_LOCATION: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_SITE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postedUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSTED_USER: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReceivingLicensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_RECEIVING_LICENSE_PLATE: OneToOneLink<
      ItemArrivalJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemArrivalJournalHeadersV2<DeSerializers>>;
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
         * Static representation of the {@link defaultReceivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReturnItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RETURN_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultReturnItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isItemMovedToDefaultItemPickingWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_MOVED_TO_DEFAULT_ITEM_PICKING_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsItemMovedToDefaultItemPickingWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link packingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'PackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTransactionReferenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TRANSACTION_REFERENCE_TYPE: fieldBuilder.buildEnumField(
          'DefaultTransactionReferenceType',
          InventTransType,
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
         * Static representation of the {@link defaultReceivingWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReturnDispositionCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RETURN_DISPOSITION_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReturnDispositionCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultAccountNumber',
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
         * Static representation of the {@link defaultReceivingInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuarantineOrderCreatedForReceivedItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUARANTINE_ORDER_CREATED_FOR_RECEIVED_ITEM:
          fieldBuilder.buildEnumField(
            'IsQuarantineOrderCreatedForReceivedItem',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultReceivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTransactionReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TRANSACTION_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultTransactionReferenceNumber',
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
         * Static representation of the {@link defaultReceivingLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingLicensePlateNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemArrivalJournalHeadersV2)
      };
    }

    return this._schema;
  }
}
