/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductsForAi } from './ReleasedProductsForAi';
import { ReleasedProductsForAiRequestBuilder } from './ReleasedProductsForAiRequestBuilder';
import { InventoryTableModulesForAiApi } from './InventoryTableModulesForAiApi';
import { InventoryOnHandForAiApi } from './InventoryOnHandForAiApi';
import { ProductApprovedVendorsForAiApi } from './ProductApprovedVendorsForAiApi';
import { PurchaseAgreementLinesForAiApi } from './PurchaseAgreementLinesForAiApi';
import { EcoResProductTranslationsForAiApi } from './EcoResProductTranslationsForAiApi';
import { PurchaseOrderLinesForAiApi } from './PurchaseOrderLinesForAiApi';
import { PmfProductType } from './PmfProductType';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import { NoYes } from './NoYes';
import { EcoResProductType } from './EcoResProductType';
import { Abc } from './Abc';
import { ItemType } from './ItemType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ReleasedProductsForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReleasedProductsForAi<DeSerializersT>, DeSerializersT>
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
  ): ReleasedProductsForAiApi<DeSerializersT> {
    return new ReleasedProductsForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      InventoryTableModulesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOnHand} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_ON_HAND: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      InventoryOnHandForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productApprovedVendors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_APPROVED_VENDORS: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      ProductApprovedVendorsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesAi} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_AI: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ecoResProductTranslationAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ECO_RES_PRODUCT_TRANSLATION_AI_ENTITY: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      EcoResProductTranslationsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InventoryTableModulesForAiApi<DeSerializersT>,
      InventoryOnHandForAiApi<DeSerializersT>,
      ProductApprovedVendorsForAiApi<DeSerializersT>,
      PurchaseAgreementLinesForAiApi<DeSerializersT>,
      EcoResProductTranslationsForAiApi<DeSerializersT>,
      PurchaseOrderLinesForAiApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT: new OneToManyLink(
        'ReleasedProduct',
        this,
        linkedApis[0]
      ),
      INVENTORY_ON_HAND: new OneToManyLink(
        'InventoryOnHand',
        this,
        linkedApis[1]
      ),
      PRODUCT_APPROVED_VENDORS: new OneToManyLink(
        'ProductApprovedVendors',
        this,
        linkedApis[2]
      ),
      PURCHASE_AGREEMENT_LINES_AI: new OneToManyLink(
        'PurchaseAgreementLinesAI',
        this,
        linkedApis[3]
      ),
      ECO_RES_PRODUCT_TRANSLATION_AI_ENTITY: new OneToManyLink(
        'EcoResProductTranslationAIEntity',
        this,
        linkedApis[4]
      ),
      PURCHASE_ORDER_LINES: new OneToManyLink(
        'PurchaseOrderLines',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductsForAi;

  requestBuilder(): ReleasedProductsForAiRequestBuilder<DeSerializersT> {
    return new ReleasedProductsForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductsForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReleasedProductsForAi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductsForAi<DeSerializersT>,
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
    typeof ReleasedProductsForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductsForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_KEY: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_TYPE: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIANT_CONFIGURATION_TECHNOLOGY: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      EcoResVariantConfigurationTechnologyType,
      true,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATIVE_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_STYLE_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PRODUCT_HEIGHT: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_SIZE_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PHANTOM: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_SHELF_LIFE: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PDS_SHELF_ADVICE: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALTERNATIVE_ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DUAL_USE_PRODUCT: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLANNING_FORMULA_ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    RETAIL_COLOR_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEIGHT: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATIVE_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUAL_USE_CODE: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_TOTAL_WEIGHT: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALUE_ABC_CODE: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    GROSS_PRODUCT_WIDTH: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_PRODUCT_DEPTH: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATIVE_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_PRODUCT_WEIGHT: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_TYPE: EnumField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      ItemType,
      true,
      true
    >;
    DEFAULT_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      InventoryTableModulesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOnHand} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_ON_HAND: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      InventoryOnHandForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productApprovedVendors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_APPROVED_VENDORS: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      ProductApprovedVendorsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesAi} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_AI: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ecoResProductTranslationAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ECO_RES_PRODUCT_TRANSLATION_AI_ENTITY: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      EcoResProductTranslationsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      ReleasedProductsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleasedProductsForAi<DeSerializers>>;
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
         * Static representation of the {@link productKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_KEY: fieldBuilder.buildEdmTypeField(
          'ProductKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_TYPE: fieldBuilder.buildEnumField(
          'ProductionType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link productionConsumptionWidthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionWidthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link variantConfigurationTechnology} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_CONFIGURATION_TECHNOLOGY: fieldBuilder.buildEnumField(
          'VariantConfigurationTechnology',
          EcoResVariantConfigurationTechnologyType,
          true
        ),
        /**
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link alternativeProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RetailStyleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailSizeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_SIZE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RetailSizeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPhantom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHANTOM: fieldBuilder.buildEnumField('IsPhantom', NoYes, true),
        /**
         * Static representation of the {@link productionConsumptionDensityConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDensityConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link pdsShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'PdsShelfLife',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pdsShelfAdvice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_SHELF_ADVICE: fieldBuilder.buildEdmTypeField(
          'PdsShelfAdvice',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link alternativeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'AlternativeItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDualUseProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DUAL_USE_PRODUCT: fieldBuilder.buildEnumField(
          'IsDualUseProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link planningFormulaItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_FORMULA_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlanningFormulaItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link retailColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RetailColorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('Height', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link alternativeProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dualUseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_USE_CODE: fieldBuilder.buildEdmTypeField(
          'DualUseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailTotalWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TOTAL_WEIGHT: fieldBuilder.buildEdmTypeField(
          'RetailTotalWeight',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link valueAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ABC_CODE: fieldBuilder.buildEnumField('ValueABCCode', Abc, true),
        /**
         * Static representation of the {@link grossProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'GrossProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grossProductDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_DEPTH: fieldBuilder.buildEdmTypeField(
          'GrossProductDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link alternativeProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionConsumptionDepthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDepthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField('ItemType', ItemType, true),
        /**
         * Static representation of the {@link defaultProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductColorId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReleasedProductsForAi)
      };
    }

    return this._schema;
  }
}
