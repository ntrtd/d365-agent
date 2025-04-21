/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClmIntegrationReleasedProducts } from './ClmIntegrationReleasedProducts';
import { ClmIntegrationReleasedProductsRequestBuilder } from './ClmIntegrationReleasedProductsRequestBuilder';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { ItemType } from './ItemType';
import { EcoResProductSubtype } from './EcoResProductSubtype';
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
export class ClmIntegrationReleasedProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ClmIntegrationReleasedProducts<DeSerializersT>, DeSerializersT>
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
  ): ClmIntegrationReleasedProductsApi<DeSerializersT> {
    return new ClmIntegrationReleasedProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_UNIT_OF_MEASURE: OneToOneLink<
      ClmIntegrationReleasedProducts<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [UnitsOfMeasureApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_UNIT_OF_MEASURE: new OneToOneLink(
        'PurchaseUnitOfMeasure',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ClmIntegrationReleasedProducts;

  requestBuilder(): ClmIntegrationReleasedProductsRequestBuilder<DeSerializersT> {
    return new ClmIntegrationReleasedProductsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ClmIntegrationReleasedProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ClmIntegrationReleasedProducts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClmIntegrationReleasedProducts<DeSerializersT>,
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
    typeof ClmIntegrationReleasedProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClmIntegrationReleasedProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      ItemType,
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SUB_TYPE: EnumField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductSubtype,
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ClmIntegrationReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_UNIT_OF_MEASURE: OneToOneLink<
      ClmIntegrationReleasedProducts<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ClmIntegrationReleasedProducts<DeSerializers>>;
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
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          ItemType,
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
         * Static representation of the {@link productSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SUB_TYPE: fieldBuilder.buildEnumField(
          'ProductSubType',
          EcoResProductSubtype,
          true
        ),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClmIntegrationReleasedProducts)
      };
    }

    return this._schema;
  }
}
