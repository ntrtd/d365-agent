/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecSetupBases } from './RecSetupBases';
import { RecSetupBasesRequestBuilder } from './RecSetupBasesRequestBuilder';
import { ProductGroupsApi } from './ProductGroupsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RecSetupBasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RecSetupBases<DeSerializersT>, DeSerializersT>
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
  ): RecSetupBasesApi<DeSerializersT> {
    return new RecSetupBasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link itemProductGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_PRODUCT_GROUP: OneToOneLink<
      RecSetupBases<DeSerializersT>,
      DeSerializersT,
      ProductGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      RecSetupBases<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductGroupsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_PRODUCT_GROUP: new OneToOneLink(
        'ItemProductGroup',
        this,
        linkedApis[0]
      ),
      ITEM: new OneToOneLink('Item', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RecSetupBases;

  requestBuilder(): RecSetupBasesRequestBuilder<DeSerializersT> {
    return new RecSetupBasesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecSetupBases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RecSetupBases<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RecSetupBases<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RecSetupBases, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RecSetupBases, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecSetupBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RecSetupBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_GROUP: OrderableEdmTypeField<
      RecSetupBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RecSetupBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemProductGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_PRODUCT_GROUP: OneToOneLink<
      RecSetupBases<DeSerializersT>,
      DeSerializersT,
      ProductGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      RecSetupBases<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecSetupBases<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link itemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecSetupBases)
      };
    }

    return this._schema;
  }
}
