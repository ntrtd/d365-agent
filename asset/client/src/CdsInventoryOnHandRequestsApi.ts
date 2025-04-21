/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsInventoryOnHandRequests } from './CdsInventoryOnHandRequests';
import { CdsInventoryOnHandRequestsRequestBuilder } from './CdsInventoryOnHandRequestsRequestBuilder';
import { CdsInventoryOnHandEntriesApi } from './CdsInventoryOnHandEntriesApi';
import { CdsReleasedDistinctProductsApi } from './CdsReleasedDistinctProductsApi';
import { DvReleasedDistinctProductsApi } from './DvReleasedDistinctProductsApi';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsInventoryOnHandRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CdsInventoryOnHandRequests<DeSerializersT>, DeSerializersT>
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
  ): CdsInventoryOnHandRequestsApi<DeSerializersT> {
    return new CdsInventoryOnHandRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cdsInventoryOnHandEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_ENTRIES: OneToManyLink<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT,
      CdsReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsInventoryOnHandEntriesApi<DeSerializersT>,
      CdsReleasedDistinctProductsApi<DeSerializersT>,
      DvReleasedDistinctProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_INVENTORY_ON_HAND_ENTRIES: new OneToManyLink(
        'CDSInventoryOnHandEntries',
        this,
        linkedApis[0]
      ),
      CDS_RELEASED_DISTINCT_PRODUCTS: new OneToOneLink(
        'CDSReleasedDistinctProducts',
        this,
        linkedApis[1]
      ),
      DV_RELEASED_DISTINCT_PRODUCTS: new OneToOneLink(
        'DVReleasedDistinctProducts',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CdsInventoryOnHandRequests;

  requestBuilder(): CdsInventoryOnHandRequestsRequestBuilder<DeSerializersT> {
    return new CdsInventoryOnHandRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsInventoryOnHandRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsInventoryOnHandRequests<DeSerializersT>,
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
    typeof CdsInventoryOnHandRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsInventoryOnHandRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_NUMBER: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ATP_CALCULATION: EnumField<
      CdsInventoryOnHandRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsInventoryOnHandEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_ENTRIES: OneToManyLink<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT,
      CdsReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      CdsInventoryOnHandRequests<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsInventoryOnHandRequests<DeSerializers>>;
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
          true
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
         * Static representation of the {@link referenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CREATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineCreationSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAtpCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ATP_CALCULATION: fieldBuilder.buildEnumField(
          'IsATPCalculation',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsInventoryOnHandRequests)
      };
    }

    return this._schema;
  }
}
