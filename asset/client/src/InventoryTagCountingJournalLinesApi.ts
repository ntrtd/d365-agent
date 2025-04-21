/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryTagCountingJournalLines } from './InventoryTagCountingJournalLines';
import { InventoryTagCountingJournalLinesRequestBuilder } from './InventoryTagCountingJournalLinesRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { InventoryTagCountingJournalHeadersApi } from './InventoryTagCountingJournalHeadersApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductColorsApi } from './ProductColorsApi';
import { WorkersApi } from './WorkersApi';
import { ProductStylesApi } from './ProductStylesApi';
import { InventoryOwnersApi } from './InventoryOwnersApi';
import { ProductSizesApi } from './ProductSizesApi';
import { NoYes } from './NoYes';
import { InventJournalTagStatus } from './InventJournalTagStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryTagCountingJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryTagCountingJournalLines<DeSerializersT>, DeSerializersT>
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
  ): InventoryTagCountingJournalLinesApi<DeSerializersT> {
    return new InventoryTagCountingJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SITE: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryTagCountingJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_HEADER: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consignmentInventoryOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNMENT_INVENTORY_OWNER: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesApi<DeSerializersT>,
      InventoryTagCountingJournalHeadersApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      InventoryOwnersApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_SITE: new OneToOneLink('InventorySite', this, linkedApis[0]),
      INVENTORY_TAG_COUNTING_JOURNAL_HEADER: new OneToOneLink(
        'InventoryTagCountingJournalHeader',
        this,
        linkedApis[1]
      ),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[2]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[3]
      ),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[4]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[5]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[6]),
      CONSIGNMENT_INVENTORY_OWNER: new OneToOneLink(
        'ConsignmentInventoryOwner',
        this,
        linkedApis[7]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = InventoryTagCountingJournalLines;

  requestBuilder(): InventoryTagCountingJournalLinesRequestBuilder<DeSerializersT> {
    return new InventoryTagCountingJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryTagCountingJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryTagCountingJournalLines<DeSerializersT>,
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
    typeof InventoryTagCountingJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryTagCountingJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAG_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTED_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_DATE: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_POSTED: EnumField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAG_STATUS: EnumField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      InventJournalTagStatus,
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTED_QUANTITY: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryTagCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SITE: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryTagCountingJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_HEADER: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consignmentInventoryOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNMENT_INVENTORY_OWNER: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      InventoryTagCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryTagCountingJournalLines<DeSerializers>>;
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
         * Static representation of the {@link tagId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAG_ID: fieldBuilder.buildEdmTypeField('TagId', 'Edm.String', false),
        /**
         * Static representation of the {@link countedQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'CountedQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'CountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catchWeightUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'CatchWeightUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tagStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAG_STATUS: fieldBuilder.buildEnumField(
          'TagStatus',
          InventJournalTagStatus,
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
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
         * Static representation of the {@link countedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CountedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CountedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryTagCountingJournalLines)
      };
    }

    return this._schema;
  }
}
