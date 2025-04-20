/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductLifecycleStates } from './ProductLifecycleStates';
import { ProductLifecycleStatesRequestBuilder } from './ProductLifecycleStatesRequestBuilder';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ReleasedEngineeringProductVersionsApi } from './ReleasedEngineeringProductVersionsApi';
import { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { ReleasedProductVariantsV2Api } from './ReleasedProductVariantsV2Api';
import { ProductLifecycleStateProcessesApi } from './ProductLifecycleStateProcessesApi';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductLifecycleStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductLifecycleStates<DeSerializersT>, DeSerializersT>
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
  ): ProductLifecycleStatesApi<DeSerializersT> {
    return new ProductLifecycleStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsProductLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_PRODUCT_LIFECYCLE_STATE: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS_V_2: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productLifecycleStateProcesses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE_PROCESSES: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStateProcessesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      ReleasedProductVariantsApi<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>,
      ReleasedProductVariantsV2Api<DeSerializersT>,
      ProductLifecycleStateProcessesApi<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToManyLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCT_VARIANTS: new OneToManyLink(
        'ReleasedProductVariants',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: new OneToManyLink(
        'EngineeringChangeOrderProductsV3',
        this,
        linkedApis[2]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductsV2',
        this,
        linkedApis[3]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[4]
      ),
      RELEASED_ENGINEERING_PRODUCT_VERSIONS: new OneToManyLink(
        'ReleasedEngineeringProductVersions',
        this,
        linkedApis[5]
      ),
      ENT_ASSET_RELEASED_PRODUCTS_PRODUCT_LIFECYCLE_STATE: new OneToManyLink(
        'EntAssetReleasedProducts_ProductLifecycleState',
        this,
        linkedApis[6]
      ),
      RELEASED_PRODUCT_VARIANTS_V_2: new OneToManyLink(
        'ReleasedProductVariantsV2',
        this,
        linkedApis[7]
      ),
      PRODUCT_LIFECYCLE_STATE_PROCESSES: new OneToManyLink(
        'ProductLifecycleStateProcesses',
        this,
        linkedApis[8]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProducts',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = ProductLifecycleStates;

  requestBuilder(): ProductLifecycleStatesRequestBuilder<DeSerializersT> {
    return new ProductLifecycleStatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductLifecycleStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductLifecycleStates<DeSerializersT>,
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
    typeof ProductLifecycleStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductLifecycleStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      ProductLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT_ON_PRODUCT_RELEASE: EnumField<
      ProductLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFECYCLE_STATE_DESCRIPTION: OrderableEdmTypeField<
      ProductLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_FOR_PLANNING: EnumField<
      ProductLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsProductLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_PRODUCT_LIFECYCLE_STATE: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS_V_2: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productLifecycleStateProcesses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE_PROCESSES: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStateProcessesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductLifecycleStates<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductLifecycleStates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link lifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isDefaultOnProductRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_ON_PRODUCT_RELEASE: fieldBuilder.buildEnumField(
          'IsDefaultOnProductRelease',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifecycleStateDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LifecycleStateDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActiveForPlanning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE_FOR_PLANNING: fieldBuilder.buildEnumField(
          'IsActiveForPlanning',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductLifecycleStates)
      };
    }

    return this._schema;
  }
}
