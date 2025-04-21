/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryTableModulesForAi } from './InventoryTableModulesForAi';
import { InventoryTableModulesForAiRequestBuilder } from './InventoryTableModulesForAiRequestBuilder';
import { ReleasedProductsForAiApi } from './ReleasedProductsForAiApi';
import { ModuleInventPurchSales } from './ModuleInventPurchSales';
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
export class InventoryTableModulesForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryTableModulesForAi<DeSerializersT>, DeSerializersT>
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
  ): InventoryTableModulesForAiApi<DeSerializersT> {
    return new InventoryTableModulesForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      InventoryTableModulesForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsForAiApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT: new OneToOneLink('ReleasedProduct', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = InventoryTableModulesForAi;

  requestBuilder(): InventoryTableModulesForAiRequestBuilder<DeSerializersT> {
    return new InventoryTableModulesForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryTableModulesForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryTableModulesForAi<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryTableModulesForAi<DeSerializersT>,
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
    typeof InventoryTableModulesForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryTableModulesForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryTableModulesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryTableModulesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE_TYPE: EnumField<
      InventoryTableModulesForAi<DeSerializers>,
      DeSerializersT,
      ModuleInventPurchSales,
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      InventoryTableModulesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      InventoryTableModulesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_QUANTITY: OrderableEdmTypeField<
      InventoryTableModulesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      InventoryTableModulesForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryTableModulesForAi<DeSerializers>>;
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
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          ModuleInventPurchSales,
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link priceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PriceQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryTableModulesForAi)
      };
    }

    return this._schema;
  }
}
