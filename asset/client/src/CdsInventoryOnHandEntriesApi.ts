/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsInventoryOnHandEntries } from './CdsInventoryOnHandEntries';
import { CdsInventoryOnHandEntriesRequestBuilder } from './CdsInventoryOnHandEntriesRequestBuilder';
import { CdsInventoryOnHandRequestsApi } from './CdsInventoryOnHandRequestsApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { WarehousesApi } from './WarehousesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsInventoryOnHandEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CdsInventoryOnHandEntries<DeSerializersT>, DeSerializersT>
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
  ): CdsInventoryOnHandEntriesApi<DeSerializersT> {
    return new CdsInventoryOnHandEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsInventoryOnHandRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_REQUESTS: OneToOneLink<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSites} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITES: OneToOneLink<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToOneLink<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsInventoryOnHandRequestsApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_INVENTORY_ON_HAND_REQUESTS: new OneToOneLink(
        'CDSInventoryOnHandRequests',
        this,
        linkedApis[0]
      ),
      OPERATIONAL_SITES: new OneToOneLink(
        'OperationalSites',
        this,
        linkedApis[1]
      ),
      WAREHOUSES: new OneToOneLink('Warehouses', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = CdsInventoryOnHandEntries;

  requestBuilder(): CdsInventoryOnHandEntriesRequestBuilder<DeSerializersT> {
    return new CdsInventoryOnHandEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsInventoryOnHandEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsInventoryOnHandEntries<DeSerializersT>,
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
    typeof CdsInventoryOnHandEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsInventoryOnHandEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATP_DATE: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVAILABLE_ORDERED_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_HAND_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATP_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVAILABLE_ON_HAND_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECTED_ISSUE_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECTED_ON_HAND_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_ORDER_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_AVAILABLE_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNAVAILABLE_ON_HAND_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECTED_RECEIPT_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_ORDERED_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_ON_HAND_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsInventoryOnHandRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_REQUESTS: OneToOneLink<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSites} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITES: OneToOneLink<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToOneLink<
      CdsInventoryOnHandEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsInventoryOnHandEntries<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link atpDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_DATE: fieldBuilder.buildEdmTypeField(
          'ATPDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link orderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link availableOrderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AvailableOrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link atpQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ATPQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link availableOnHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AvailableOnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectedIssueQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_ISSUE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProjectedIssueQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectedOnHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProjectedOnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAvailableQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AVAILABLE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalAvailableQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unavailableOnHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNAVAILABLE_ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UnavailableOnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectedReceiptQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_RECEIPT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProjectedReceiptQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedOrderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedOrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedOnHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedOnHandQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsInventoryOnHandEntries)
      };
    }

    return this._schema;
  }
}
