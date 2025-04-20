/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterConfigurations } from './ProductMasterConfigurations';
import { ProductMasterConfigurationsRequestBuilder } from './ProductMasterConfigurationsRequestBuilder';
import { AllProductsApi } from './AllProductsApi';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductMasterConfigurationTranslationsApi } from './ProductMasterConfigurationTranslationsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductMasterConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductMasterConfigurations<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterConfigurationsApi<DeSerializersT> {
    return new ProductMasterConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterConfigurationTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATION_TRANSLATIONS: OneToManyLink<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AllProductsApi<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductMasterConfigurationTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EVERY_PRODUCT: new OneToOneLink('EveryProduct', this, linkedApis[0]),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[1]),
      PRODUCT_MASTER_CONFIGURATION_TRANSLATIONS: new OneToManyLink(
        'ProductMasterConfigurationTranslations',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterConfigurations;

  requestBuilder(): ProductMasterConfigurationsRequestBuilder<DeSerializersT> {
    return new ProductMasterConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterConfigurations<DeSerializersT>,
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
    typeof ProductMasterConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductMasterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTAINER_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductMasterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProductMasterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductMasterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterConfigurationTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATION_TRANSLATIONS: OneToManyLink<
      ProductMasterConfigurations<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductMasterNumber',
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
         * Static representation of the {@link containerUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINER_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ContainerUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displaySequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplaySequenceNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replenishmentWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWeight',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductMasterConfigurations)
      };
    }

    return this._schema;
  }
}
