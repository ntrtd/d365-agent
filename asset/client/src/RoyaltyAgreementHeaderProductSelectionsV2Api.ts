/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoyaltyAgreementHeaderProductSelectionsV2 } from './RoyaltyAgreementHeaderProductSelectionsV2';
import { RoyaltyAgreementHeaderProductSelectionsV2RequestBuilder } from './RoyaltyAgreementHeaderProductSelectionsV2RequestBuilder';
import { RoyaltyAgreementHeadersApi } from './RoyaltyAgreementHeadersApi';
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
export class RoyaltyAgreementHeaderProductSelectionsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializersT>,
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
  ): RoyaltyAgreementHeaderProductSelectionsV2Api<DeSerializersT> {
    return new RoyaltyAgreementHeaderProductSelectionsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link royaltyAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER: OneToOneLink<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RoyaltyAgreementHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ROYALTY_AGREEMENT_HEADER: new OneToOneLink(
        'RoyaltyAgreementHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RoyaltyAgreementHeaderProductSelectionsV2;

  requestBuilder(): RoyaltyAgreementHeaderProductSelectionsV2RequestBuilder<DeSerializersT> {
    return new RoyaltyAgreementHeaderProductSelectionsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RoyaltyAgreementHeaderProductSelectionsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RoyaltyAgreementHeaderProductSelectionsV2<DeSerializersT>,
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
    typeof RoyaltyAgreementHeaderProductSelectionsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RoyaltyAgreementHeaderProductSelectionsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROYALTY_AGREEMENT_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALIFYING_SITE_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALIFYING_WAREHOUSE_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link royaltyAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER: OneToOneLink<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RoyaltyAgreementHeaderProductSelectionsV2<DeSerializers>
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
         * Static representation of the {@link royaltyAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RoyaltyAgreementId',
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
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qualifyingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALIFYING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'QualifyingSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qualifyingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALIFYING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'QualifyingWarehouseId',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultVendorAccountNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RoyaltyAgreementHeaderProductSelectionsV2
        )
      };
    }

    return this._schema;
  }
}
