/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryReservationHierarchies } from './InventoryReservationHierarchies';
import { InventoryReservationHierarchiesRequestBuilder } from './InventoryReservationHierarchiesRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
export class InventoryReservationHierarchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryReservationHierarchies<DeSerializersT>, DeSerializersT>
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
  ): InventoryReservationHierarchiesApi<DeSerializersT> {
    return new InventoryReservationHierarchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      InventoryReservationHierarchies<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InventoryReservationHierarchies;

  requestBuilder(): InventoryReservationHierarchiesRequestBuilder<DeSerializersT> {
    return new InventoryReservationHierarchiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryReservationHierarchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryReservationHierarchies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryReservationHierarchies<DeSerializersT>,
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
    typeof InventoryReservationHierarchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryReservationHierarchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HIERARCHY_NAME: OrderableEdmTypeField<
      InventoryReservationHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_DESCRIPTION: OrderableEdmTypeField<
      InventoryReservationHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      InventoryReservationHierarchies<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryReservationHierarchies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hierarchyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'HierarchyDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryReservationHierarchies)
      };
    }

    return this._schema;
  }
}
