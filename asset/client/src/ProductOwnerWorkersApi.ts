/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductOwnerWorkers } from './ProductOwnerWorkers';
import { ProductOwnerWorkersRequestBuilder } from './ProductOwnerWorkersRequestBuilder';
import { ProductOwnersApi } from './ProductOwnersApi';
import { WorkersApi } from './WorkersApi';
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
export class ProductOwnerWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductOwnerWorkers<DeSerializersT>, DeSerializersT>
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
  ): ProductOwnerWorkersApi<DeSerializersT> {
    return new ProductOwnerWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_OWNER: OneToOneLink<
      ProductOwnerWorkers<DeSerializersT>,
      DeSerializersT,
      ProductOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_WORKER: OneToOneLink<
      ProductOwnerWorkers<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductOwnersApi<DeSerializersT>, WorkersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_OWNER: new OneToOneLink('ProductOwner', this, linkedApis[0]),
      ASSIGNED_WORKER: new OneToOneLink('AssignedWorker', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProductOwnerWorkers;

  requestBuilder(): ProductOwnerWorkersRequestBuilder<DeSerializersT> {
    return new ProductOwnerWorkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductOwnerWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductOwnerWorkers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductOwnerWorkers<DeSerializersT>,
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
    typeof ProductOwnerWorkers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductOwnerWorkers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_OWNER_ID: OrderableEdmTypeField<
      ProductOwnerWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSIGNED_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProductOwnerWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_OWNER: OneToOneLink<
      ProductOwnerWorkers<DeSerializersT>,
      DeSerializersT,
      ProductOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_WORKER: OneToOneLink<
      ProductOwnerWorkers<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductOwnerWorkers<DeSerializers>>;
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
         * Static representation of the {@link assignedPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssignedPersonnelNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductOwnerWorkers)
      };
    }

    return this._schema;
  }
}
