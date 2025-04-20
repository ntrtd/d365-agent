/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOnHandForAi } from './InventoryOnHandForAi';
import { InventoryOnHandForAiRequestBuilder } from './InventoryOnHandForAiRequestBuilder';
import { InventoryWarehousesForAiApi } from './InventoryWarehousesForAiApi';
import { InventorySitesForAiApi } from './InventorySitesForAiApi';
import { ReleasedProductsForAiApi } from './ReleasedProductsForAiApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryOnHandForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventoryOnHandForAi<DeSerializersT>, DeSerializersT>
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
  ): InventoryOnHandForAiApi<DeSerializersT> {
    return new InventoryOnHandForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inventLocationAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_LOCATION_AI_ENTITY: OneToOneLink<
      InventoryOnHandForAi<DeSerializersT>,
      DeSerializersT,
      InventoryWarehousesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventSiteAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_SITE_AI_ENTITY: OneToOneLink<
      InventoryOnHandForAi<DeSerializersT>,
      DeSerializersT,
      InventorySitesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      InventoryOnHandForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InventoryWarehousesForAiApi<DeSerializersT>,
      InventorySitesForAiApi<DeSerializersT>,
      ReleasedProductsForAiApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INVENT_LOCATION_AI_ENTITY: new OneToOneLink(
        'InventLocationAIEntity',
        this,
        linkedApis[0]
      ),
      INVENT_SITE_AI_ENTITY: new OneToOneLink(
        'InventSiteAIEntity',
        this,
        linkedApis[1]
      ),
      RELEASED_PRODUCT: new OneToOneLink('ReleasedProduct', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = InventoryOnHandForAi;

  requestBuilder(): InventoryOnHandForAiRequestBuilder<DeSerializersT> {
    return new InventoryOnHandForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryOnHandForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventoryOnHandForAi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryOnHandForAi<DeSerializersT>,
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
    typeof InventoryOnHandForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryOnHandForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_STATUS: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AVAIL_PHYSICAL: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_AVAILABLE_PHYSICAL: OrderableEdmTypeField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_WAREHOUSE_ITEM: EnumField<
      InventoryOnHandForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventLocationAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_LOCATION_AI_ENTITY: OneToOneLink<
      InventoryOnHandForAi<DeSerializersT>,
      DeSerializersT,
      InventoryWarehousesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventSiteAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_SITE_AI_ENTITY: OneToOneLink<
      InventoryOnHandForAi<DeSerializersT>,
      DeSerializersT,
      InventorySitesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      InventoryOnHandForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryOnHandForAi<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', false),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS: fieldBuilder.buildEdmTypeField(
          'InventoryStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link availPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAIL_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'AvailPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedAvailablePhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AVAILABLE_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'CalculatedAvailablePhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isWarehouseItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAREHOUSE_ITEM: fieldBuilder.buildEnumField(
          'IsWarehouseItem',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryOnHandForAi)
      };
    }

    return this._schema;
  }
}
