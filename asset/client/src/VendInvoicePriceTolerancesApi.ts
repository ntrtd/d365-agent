/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoicePriceTolerances } from './VendInvoicePriceTolerances';
import { VendInvoicePriceTolerancesRequestBuilder } from './VendInvoicePriceTolerancesRequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { VendorPriceToleranceGroupsApi } from './VendorPriceToleranceGroupsApi';
import { ItemPriceToleranceGroupsApi } from './ItemPriceToleranceGroupsApi';
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
export class VendInvoicePriceTolerancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoicePriceTolerances<DeSerializersT>, DeSerializersT>
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
  ): VendInvoicePriceTolerancesApi<DeSerializersT> {
    return new VendInvoicePriceTolerancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPriceToleranceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PRICE_TOLERANCE_GROUP: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      VendorPriceToleranceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemPriceToleranceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_PRICE_TOLERANCE_GROUP: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      ItemPriceToleranceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsV2Api<DeSerializersT>,
      VendorPriceToleranceGroupsApi<DeSerializersT>,
      ItemPriceToleranceGroupsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[0]),
      VENDOR_PRICE_TOLERANCE_GROUP: new OneToOneLink(
        'VendorPriceToleranceGroup',
        this,
        linkedApis[1]
      ),
      ITEM_PRICE_TOLERANCE_GROUP: new OneToOneLink(
        'ItemPriceToleranceGroup',
        this,
        linkedApis[2]
      ),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = VendInvoicePriceTolerances;

  requestBuilder(): VendInvoicePriceTolerancesRequestBuilder<DeSerializersT> {
    return new VendInvoicePriceTolerancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoicePriceTolerances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoicePriceTolerances<DeSerializersT>,
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
    typeof VendInvoicePriceTolerances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoicePriceTolerances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoicePriceTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_TOLERANCE_ITEM_NUMBER: OrderableEdmTypeField<
      VendInvoicePriceTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_TOLERANCE_ITEM_GROUP: OrderableEdmTypeField<
      VendInvoicePriceTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_TOLERANCE_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendInvoicePriceTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_TOLERANCE_ACCOUNT_GROUP: OrderableEdmTypeField<
      VendInvoicePriceTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENT_TOLERANCE: OrderableEdmTypeField<
      VendInvoicePriceTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPriceToleranceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PRICE_TOLERANCE_GROUP: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      VendorPriceToleranceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemPriceToleranceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_PRICE_TOLERANCE_GROUP: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      ItemPriceToleranceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      VendInvoicePriceTolerances<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendInvoicePriceTolerances<DeSerializers>>;
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
         * Static representation of the {@link priceToleranceItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'PriceToleranceItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceToleranceItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceToleranceItemGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceToleranceAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PriceToleranceAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceToleranceAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceToleranceAccountGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link percentTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'PercentTolerance',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoicePriceTolerances)
      };
    }

    return this._schema;
  }
}
