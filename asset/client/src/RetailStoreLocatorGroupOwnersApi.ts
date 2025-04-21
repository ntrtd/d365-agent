/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreLocatorGroupOwners } from './RetailStoreLocatorGroupOwners';
import { RetailStoreLocatorGroupOwnersRequestBuilder } from './RetailStoreLocatorGroupOwnersRequestBuilder';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { RetailStoresApi } from './RetailStoresApi';
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
export class RetailStoreLocatorGroupOwnersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStoreLocatorGroupOwners<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreLocatorGroupOwnersApi<DeSerializersT> {
    return new RetailStoreLocatorGroupOwnersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailStoreLocatorGroupOwners<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailStoreLocatorGroupOwners<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnlineChannelsApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL: new OneToOneLink('OnlineChannel', this, linkedApis[0]),
      RETAIL_STORE: new OneToOneLink('RetailStore', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RetailStoreLocatorGroupOwners;

  requestBuilder(): RetailStoreLocatorGroupOwnersRequestBuilder<DeSerializersT> {
    return new RetailStoreLocatorGroupOwnersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreLocatorGroupOwners<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreLocatorGroupOwners<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreLocatorGroupOwners<DeSerializersT>,
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
    typeof RetailStoreLocatorGroupOwners,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreLocatorGroupOwners,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STORE_LOCATOR_GROUP_NAME: OrderableEdmTypeField<
      RetailStoreLocatorGroupOwners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailStoreLocatorGroupOwners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailStoreLocatorGroupOwners<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailStoreLocatorGroupOwners<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStoreLocatorGroupOwners<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link storeLocatorGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_LOCATOR_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StoreLocatorGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreLocatorGroupOwners)
      };
    }

    return this._schema;
  }
}
