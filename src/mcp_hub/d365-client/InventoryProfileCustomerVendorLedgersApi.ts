/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryProfileCustomerVendorLedgers } from './InventoryProfileCustomerVendorLedgers';
import { InventoryProfileCustomerVendorLedgersRequestBuilder } from './InventoryProfileCustomerVendorLedgersRequestBuilder';
import { InventProfileTypeAllRu } from './InventProfileTypeAllRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class InventoryProfileCustomerVendorLedgersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InventoryProfileCustomerVendorLedgers<DeSerializersT>,
      DeSerializersT
    >
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
  ): InventoryProfileCustomerVendorLedgersApi<DeSerializersT> {
    return new InventoryProfileCustomerVendorLedgersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryProfileCustomerVendorLedgers;

  requestBuilder(): InventoryProfileCustomerVendorLedgersRequestBuilder<DeSerializersT> {
    return new InventoryProfileCustomerVendorLedgersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryProfileCustomerVendorLedgers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryProfileCustomerVendorLedgers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryProfileCustomerVendorLedgers<DeSerializersT>,
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
    typeof InventoryProfileCustomerVendorLedgers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryProfileCustomerVendorLedgers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryProfileCustomerVendorLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_PROFILE_RELATION: EnumField<
      InventoryProfileCustomerVendorLedgers<DeSerializers>,
      DeSerializersT,
      InventProfileTypeAllRu,
      true,
      true
    >;
    INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      InventoryProfileCustomerVendorLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIND_OF_ACTIVITY: EnumField<
      InventoryProfileCustomerVendorLedgers<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    CUSTOMER_POSTING_PROFILE: OrderableEdmTypeField<
      InventoryProfileCustomerVendorLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_POSTING_PROFILE: OrderableEdmTypeField<
      InventoryProfileCustomerVendorLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventoryProfileCustomerVendorLedgers<DeSerializers>>;
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
         * Static representation of the {@link inventoryProfileRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_RELATION: fieldBuilder.buildEnumField(
          'InventoryProfileRelation',
          InventProfileTypeAllRu,
          true
        ),
        /**
         * Static representation of the {@link inventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kindOfActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIND_OF_ACTIVITY: fieldBuilder.buildEnumField(
          'KindOfActivity',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link customerPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'CustomerPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'VendorPostingProfile',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryProfileCustomerVendorLedgers)
      };
    }

    return this._schema;
  }
}
