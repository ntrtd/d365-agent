/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetValueModels } from './FixedAssetValueModels';
import { FixedAssetValueModelsRequestBuilder } from './FixedAssetValueModelsRequestBuilder';
import { DepreciationProfilesApi } from './DepreciationProfilesApi';
import { AssetProvisionTypesApi } from './AssetProvisionTypesApi';
import { AssetSortingsApi } from './AssetSortingsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { AcquisitionMethodsApi } from './AcquisitionMethodsApi';
import { CustomersV3Api } from './CustomersV3Api';
import { AssetConsumptionUnitsApi } from './AssetConsumptionUnitsApi';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { VendorsApi } from './VendorsApi';
import { ConsumptionFactorsApi } from './ConsumptionFactorsApi';
import { NoYes } from './NoYes';
import { AssetStatus } from './AssetStatus';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
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
export class FixedAssetValueModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FixedAssetValueModels<DeSerializersT>, DeSerializersT>
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
  ): FixedAssetValueModelsApi<DeSerializersT> {
    return new FixedAssetValueModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetProvisionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PROVISION_TYPE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetProvisionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelProvisionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_PROVISION_TYPE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetProvisionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelSortField1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SORT_FIELD_1: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetSortingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelValueModelId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_VALUE_MODEL_ID: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelSortField3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SORT_FIELD_3: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetSortingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelAcquisitionMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ACQUISITION_METHOD: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AcquisitionMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_CUSTOMER: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelConsumptionUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_CONSUMPTION_UNIT: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetConsumptionUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ASSET_GROUP: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCELERATED_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelSortField2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SORT_FIELD_2: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetSortingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_VENDOR: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      VendorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelConsumptionFactor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_CONSUMPTION_FACTOR: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      ConsumptionFactorsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DepreciationProfilesApi<DeSerializersT>,
      AssetProvisionTypesApi<DeSerializersT>,
      AssetProvisionTypesApi<DeSerializersT>,
      AssetSortingsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      AssetSortingsApi<DeSerializersT>,
      AcquisitionMethodsApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      AssetConsumptionUnitsApi<DeSerializersT>,
      FixedAssetGroupsApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      AssetSortingsApi<DeSerializersT>,
      VendorsApi<DeSerializersT>,
      ConsumptionFactorsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetAlternativeDepreciationProfile',
        this,
        linkedApis[0]
      ),
      ASSET_PROVISION_TYPE: new OneToOneLink(
        'AssetProvisionType',
        this,
        linkedApis[1]
      ),
      ASSET_VALUE_MODEL_PROVISION_TYPE: new OneToOneLink(
        'AssetValueModelProvisionType',
        this,
        linkedApis[2]
      ),
      ASSET_VALUE_MODEL_SORT_FIELD_1: new OneToOneLink(
        'AssetValueModelSortField1',
        this,
        linkedApis[3]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4]),
      ASSET_VALUE_MODEL_VALUE_MODEL_ID: new OneToOneLink(
        'AssetValueModelValueModelId',
        this,
        linkedApis[5]
      ),
      ASSET_VALUE_MODEL_SORT_FIELD_3: new OneToOneLink(
        'AssetValueModelSortField3',
        this,
        linkedApis[6]
      ),
      ASSET_VALUE_MODEL_ACQUISITION_METHOD: new OneToOneLink(
        'AssetValueModelAcquisitionMethod',
        this,
        linkedApis[7]
      ),
      ASSET_VALUE_MODEL_CUSTOMER: new OneToOneLink(
        'AssetValueModelCustomer',
        this,
        linkedApis[8]
      ),
      ASSET_VALUE_MODEL_CONSUMPTION_UNIT: new OneToOneLink(
        'AssetValueModelConsumptionUnit',
        this,
        linkedApis[9]
      ),
      ASSET_VALUE_MODEL_ASSET_GROUP: new OneToOneLink(
        'AssetValueModelAssetGroup',
        this,
        linkedApis[10]
      ),
      ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetExtraordinaryDepreciationProfile',
        this,
        linkedApis[11]
      ),
      ASSET_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetDepreciationProfile',
        this,
        linkedApis[12]
      ),
      ASSET_ACCELERATED_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetAcceleratedDepreciationProfile',
        this,
        linkedApis[13]
      ),
      ASSET_VALUE_MODEL_SORT_FIELD_2: new OneToOneLink(
        'AssetValueModelSortField2',
        this,
        linkedApis[14]
      ),
      ASSET_VALUE_MODEL_VENDOR: new OneToOneLink(
        'AssetValueModelVendor',
        this,
        linkedApis[15]
      ),
      ASSET_VALUE_MODEL_CONSUMPTION_FACTOR: new OneToOneLink(
        'AssetValueModelConsumptionFactor',
        this,
        linkedApis[16]
      )
    };
    return this;
  }

  entityConstructor = FixedAssetValueModels;

  requestBuilder(): FixedAssetValueModelsRequestBuilder<DeSerializersT> {
    return new FixedAssetValueModelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetValueModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FixedAssetValueModels<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetValueModels<DeSerializersT>,
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
    typeof FixedAssetValueModels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetValueModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_LIFE_YEARS: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_NET_BOOK_VALUE_HIGHER_THAN_ACQUISITION_COSTS: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_GROUP_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTING_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOW_VALUE_POOL_TRANSFER_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MIGRATED_ASSET: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATE_DEPRECIATION: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      AssetStatus,
      true,
      true
    >;
    DEROGATORY_TAX_MODEL: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUMMARIZE_BY_MAJOR_TYPE: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACQUISITION_PRICE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_PERIODS: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_START_CONVENTION: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      AssetSpecialDepAllocationConventionJp,
      true,
      true
    >;
    DEROGATORY_CALCULATION: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION_METHOD_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPOSAL_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPECTED_SCRAP_VALUE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_VALUE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLACED_IN_SERVICE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_UNIT_DEPRECIATION: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_LIFE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SORT_FIELD_2_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVISED_ACQUISITION_COST_START_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATE_DEPRECIATION_ADJUSTMENTS_WITH_BASIS_ADJUSTMENTS: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_UNIT: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      AssetAccrualFiscal,
      true,
      true
    >;
    REDUCING_BALANCE_STRAIGHT_LINE_FACTOR: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_INVOICE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ASSET_GROUP_DEPRECIATION: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTRAORDINARY_DEPRECIATION_LAST_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_TYPE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_LAST_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPRECIATION_PERIODS_REMAINING: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REDUCING_BALANCE_CHECK_MAXIMUM_PERCENT: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACQUISITION_METHOD_DESCRIPTION: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_3_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVISED_ACQUISITION_COST: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHORTENED_USEFUL_LIFE: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSUMPTION_UNIT_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_1_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_NEGATIVE_NET_BOOK_VALUE: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REDUCING_BALANCE_PERCENTAGE_AFTER_VALIDATION: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCELERATED_DEPRECIATION_LAST_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACQUISITION_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWABLE_LIMIT_FOR_ACCUMULATED_DEPRECIATION: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      AssetLimitForAccumulatedDepTypeJp,
      true,
      true
    >;
    DEPRECIATION_LAST_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLACEMENT_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_INVOICE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTRAORDINARY_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EQUALLY_DIVIDED_START_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALLOW_DEPRECIATION_WHEN_PLACED_IN_SERVICE_AND_DISPOSAL_ARE_IN_THE_SAME_FISCAL_YEAR: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REDUCTION_ENTRY_ALLOCATION_START_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCELERATED_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_PERIODS: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FAIR_VALUE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_ESTIMATED: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_ASSET_GROUP_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_CONVENTION: EnumField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      AssetDepreciationConvention,
      true,
      true
    >;
    SERVICE_LIFE_MONTHS: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REDUCTION_ENTRY_ALLOCATION_LAST_RUN_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOW_VALUE_POOL_TRANSFER_DATE: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_FACTOR_ID: OrderableEdmTypeField<
      FixedAssetValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetProvisionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PROVISION_TYPE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetProvisionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelProvisionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_PROVISION_TYPE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetProvisionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelSortField1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SORT_FIELD_1: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetSortingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelValueModelId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_VALUE_MODEL_ID: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelSortField3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SORT_FIELD_3: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetSortingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelAcquisitionMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ACQUISITION_METHOD: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AcquisitionMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_CUSTOMER: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelConsumptionUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_CONSUMPTION_UNIT: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetConsumptionUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ASSET_GROUP: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCELERATED_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelSortField2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SORT_FIELD_2: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      AssetSortingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_VENDOR: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      VendorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetValueModelConsumptionFactor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_CONSUMPTION_FACTOR: OneToOneLink<
      FixedAssetValueModels<DeSerializersT>,
      DeSerializersT,
      ConsumptionFactorsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedAssetValueModels<DeSerializers>>;
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
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ValueModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceLifeYears} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_YEARS: fieldBuilder.buildEdmTypeField(
          'ServiceLifeYears',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowNetBookValueHigherThanAcquisitionCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NET_BOOK_VALUE_HIGHER_THAN_ACQUISITION_COSTS:
          fieldBuilder.buildEnumField(
            'AllowNetBookValueHigherThanAcquisitionCosts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RevaluationGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_RUN_DATE: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationRunDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'PostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowValuePoolTransferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'LowValuePoolTransferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMigratedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MIGRATED_ASSET: fieldBuilder.buildEnumField(
          'IsMigratedAsset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculateDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_DEPRECIATION: fieldBuilder.buildEnumField(
          'CalculateDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', AssetStatus, true),
        /**
         * Static representation of the {@link derogatoryTaxModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEROGATORY_TAX_MODEL: fieldBuilder.buildEnumField(
          'DerogatoryTaxModel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link summarizeByMajorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARIZE_BY_MAJOR_TYPE: fieldBuilder.buildEnumField(
          'SummarizeByMajorType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link acquisitionPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_PRICE: fieldBuilder.buildEdmTypeField(
          'AcquisitionPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciationPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PERIODS: fieldBuilder.buildEdmTypeField(
          'DepreciationPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specialDepreciationAllocationStartConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_START_CONVENTION:
          fieldBuilder.buildEnumField(
            'SpecialDepreciationAllocationStartConvention',
            AssetSpecialDepAllocationConventionJp,
            true
          ),
        /**
         * Static representation of the {@link derogatoryCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEROGATORY_CALCULATION: fieldBuilder.buildEdmTypeField(
          'DerogatoryCalculation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acquisitionMethodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_METHOD_ID: fieldBuilder.buildEdmTypeField(
          'AcquisitionMethodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disposalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_DATE: fieldBuilder.buildEdmTypeField(
          'DisposalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expectedScrapValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_SCRAP_VALUE: fieldBuilder.buildEdmTypeField(
          'ExpectedScrapValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_VALUE: fieldBuilder.buildEdmTypeField(
          'SalesValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link placedInService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLACED_IN_SERVICE: fieldBuilder.buildEdmTypeField(
          'PlacedInService',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consumptionUnitDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_UNIT_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'ConsumptionUnitDepreciation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE: fieldBuilder.buildEdmTypeField(
          'ServiceLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sortField2Id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_2_ID: fieldBuilder.buildEdmTypeField(
          'SortField2Id',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revisedAcquisitionCostStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVISED_ACQUISITION_COST_START_DATE: fieldBuilder.buildEdmTypeField(
          'RevisedAcquisitionCostStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createDepreciationAdjustmentsWithBasisAdjustments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DEPRECIATION_ADJUSTMENTS_WITH_BASIS_ADJUSTMENTS:
          fieldBuilder.buildEnumField(
            'CreateDepreciationAdjustmentsWithBasisAdjustments',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link specialDepreciationAllocationUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_UNIT: fieldBuilder.buildEnumField(
          'SpecialDepreciationAllocationUnit',
          AssetAccrualFiscal,
          true
        ),
        /**
         * Static representation of the {@link reducingBalanceStraightLineFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCING_BALANCE_STRAIGHT_LINE_FACTOR: fieldBuilder.buildEdmTypeField(
          'ReducingBalanceStraightLineFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE: fieldBuilder.buildEdmTypeField(
          'VendorInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAssetGroupDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ASSET_GROUP_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsAssetGroupDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link extraordinaryDepreciationLastRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRAORDINARY_DEPRECIATION_LAST_RUN_DATE:
          fieldBuilder.buildEdmTypeField(
            'ExtraordinaryDepreciationLastRunDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_TYPE: fieldBuilder.buildEdmTypeField(
          'ProvisionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationAllocationLastRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_LAST_RUN_DATE:
          fieldBuilder.buildEdmTypeField(
            'SpecialDepreciationAllocationLastRunDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link depreciationPeriodsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PERIODS_REMAINING: fieldBuilder.buildEdmTypeField(
          'DepreciationPeriodsRemaining',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reducingBalanceCheckMaximumPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCING_BALANCE_CHECK_MAXIMUM_PERCENT: fieldBuilder.buildEnumField(
          'ReducingBalanceCheckMaximumPercent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link acquisitionMethodDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_METHOD_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AcquisitionMethodDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortField3Id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_3_ID: fieldBuilder.buildEdmTypeField(
          'SortField3Id',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revisedAcquisitionCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVISED_ACQUISITION_COST: fieldBuilder.buildEdmTypeField(
          'RevisedAcquisitionCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciationRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_RUN_DATE: fieldBuilder.buildEdmTypeField(
          'DepreciationRunDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shortenedUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORTENED_USEFUL_LIFE: fieldBuilder.buildEnumField(
          'ShortenedUsefulLife',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consumptionUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortField1Id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_1_ID: fieldBuilder.buildEdmTypeField(
          'SortField1Id',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowNegativeNetBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NEGATIVE_NET_BOOK_VALUE: fieldBuilder.buildEnumField(
          'AllowNegativeNetBookValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reducingBalancePercentageAfterValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCING_BALANCE_PERCENTAGE_AFTER_VALIDATION:
          fieldBuilder.buildEdmTypeField(
            'ReducingBalancePercentageAfterValidation',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link acceleratedDepreciationLastRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_LAST_RUN_DATE: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepreciationLastRunDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link acquisitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link depreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'DepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowableLimitForAccumulatedDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWABLE_LIMIT_FOR_ACCUMULATED_DEPRECIATION:
          fieldBuilder.buildEnumField(
            'AllowableLimitForAccumulatedDepreciation',
            AssetLimitForAccumulatedDepTypeJp,
            true
          ),
        /**
         * Static representation of the {@link depreciationLastRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_LAST_RUN_DATE: fieldBuilder.buildEdmTypeField(
          'DepreciationLastRunDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replacementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ReplacementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INVOICE: fieldBuilder.buildEdmTypeField(
          'CustomerInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link extraordinaryDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRAORDINARY_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ExtraordinaryDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link equallyDividedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUALLY_DIVIDED_START_DATE: fieldBuilder.buildEdmTypeField(
          'EquallyDividedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link allowDepreciationWhenPlacedInServiceAndDisposalAreInTheSameFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DEPRECIATION_WHEN_PLACED_IN_SERVICE_AND_DISPOSAL_ARE_IN_THE_SAME_FISCAL_YEAR:
          fieldBuilder.buildEnumField(
            'AllowDepreciationWhenPlacedInServiceAndDisposalAreInTheSameFiscalYear',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link reductionEntryAllocationStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_ENTRY_ALLOCATION_START_DATE: fieldBuilder.buildEdmTypeField(
          'ReductionEntryAllocationStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link acceleratedDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationAllocationPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_PERIODS: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationAllocationPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fairValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIR_VALUE: fieldBuilder.buildEdmTypeField(
          'FairValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumptionEstimated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_ESTIMATED: fieldBuilder.buildEdmTypeField(
          'ConsumptionEstimated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedAssetGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciationConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_CONVENTION: fieldBuilder.buildEnumField(
          'DepreciationConvention',
          AssetDepreciationConvention,
          true
        ),
        /**
         * Static representation of the {@link serviceLifeMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_MONTHS: fieldBuilder.buildEdmTypeField(
          'ServiceLifeMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reductionEntryAllocationLastRunDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_ENTRY_ALLOCATION_LAST_RUN_DATE:
          fieldBuilder.buildEdmTypeField(
            'ReductionEntryAllocationLastRunDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link lowValuePoolTransferDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_TRANSFER_DATE: fieldBuilder.buildEdmTypeField(
          'LowValuePoolTransferDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consumptionFactorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_FACTOR_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionFactorId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedAssetValueModels)
      };
    }

    return this._schema;
  }
}
