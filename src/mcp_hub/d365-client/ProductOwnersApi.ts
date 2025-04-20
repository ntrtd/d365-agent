/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductOwners } from './ProductOwners';
import { ProductOwnersRequestBuilder } from './ProductOwnersRequestBuilder';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { ProductOwnerWorkersApi } from './ProductOwnerWorkersApi';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductOwnersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductOwners<DeSerializersT>, DeSerializersT>
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
  ): ProductOwnersApi<DeSerializersT> {
    return new ProductOwnersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productOwnerWorkerAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_OWNER_WORKER_ASSIGNMENTS: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      ProductOwnerWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      ProductOwnerWorkersApi<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: new OneToManyLink(
        'EngineeringChangeOrderProductsV3',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductsV2',
        this,
        linkedApis[1]
      ),
      PRODUCT_OWNER_WORKER_ASSIGNMENTS: new OneToManyLink(
        'ProductOwnerWorkerAssignments',
        this,
        linkedApis[2]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProducts',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = ProductOwners;

  requestBuilder(): ProductOwnersRequestBuilder<DeSerializersT> {
    return new ProductOwnersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductOwners<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductOwners<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductOwners<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductOwners, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductOwners, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_OWNER_ID: OrderableEdmTypeField<
      ProductOwners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_OWNER_NAME: OrderableEdmTypeField<
      ProductOwners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productOwnerWorkerAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_OWNER_WORKER_ASSIGNMENTS: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      ProductOwnerWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductOwners<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductOwners<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'ProductOwnerId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productOwnerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_OWNER_NAME: fieldBuilder.buildEdmTypeField(
          'ProductOwnerName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductOwners)
      };
    }

    return this._schema;
  }
}
