/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OrderCommittedLicensePlateReservations } from './OrderCommittedLicensePlateReservations';
import { OrderCommittedLicensePlateReservationsRequestBuilder } from './OrderCommittedLicensePlateReservationsRequestBuilder';
import { LicensePlatesApi } from './LicensePlatesApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductSizesApi } from './ProductSizesApi';
import { InventTransType } from './InventTransType';
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
export class OrderCommittedLicensePlateReservationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
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
  ): OrderCommittedLicensePlateReservationsApi<DeSerializersT> {
    return new OrderCommittedLicensePlateReservationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link licensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LicensePlatesApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductSizesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LICENSE_PLATE: new OneToOneLink('LicensePlate', this, linkedApis[0]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[1]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[2]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[3]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = OrderCommittedLicensePlateReservations;

  requestBuilder(): OrderCommittedLicensePlateReservationsRequestBuilder<DeSerializersT> {
    return new OrderCommittedLicensePlateReservationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OrderCommittedLicensePlateReservations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OrderCommittedLicensePlateReservations<DeSerializersT>,
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
    typeof OrderCommittedLicensePlateReservations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OrderCommittedLicensePlateReservations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESERVED_INVENTORY_QUANTITY: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_CATEGORY: EnumField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      InventTransType,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      OrderCommittedLicensePlateReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link licensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      OrderCommittedLicensePlateReservations<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      OrderCommittedLicensePlateReservations<DeSerializers>
    >;
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reservedInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_CATEGORY: fieldBuilder.buildEnumField(
          'ReferenceCategory',
          InventTransType,
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OrderCommittedLicensePlateReservations)
      };
    }

    return this._schema;
  }
}
