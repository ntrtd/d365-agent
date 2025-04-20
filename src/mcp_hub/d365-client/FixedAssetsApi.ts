/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssets } from './FixedAssets';
import { FixedAssetsRequestBuilder } from './FixedAssetsRequestBuilder';
import { AssetLocationsApi } from './AssetLocationsApi';
import { WorkersApi } from './WorkersApi';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { FixedAssetPostingProfilesApi } from './FixedAssetPostingProfilesApi';
import { AssetStatementRowsApi } from './AssetStatementRowsApi';
import { FixedAssetBookSpecialDepreciationAllowancesApi } from './FixedAssetBookSpecialDepreciationAllowancesApi';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetSortValue } from './AssetSortValue';
import { NoYes } from './NoYes';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { AssetClassificationJp } from './AssetClassificationJp';
import { AssetPropertyType } from './AssetPropertyType';
import { AssetTypeJp } from './AssetTypeJp';
import { AssetType } from './AssetType';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FixedAssetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FixedAssets<DeSerializersT>, DeSerializersT>
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
  ): FixedAssetsApi<DeSerializersT> {
    return new FixedAssetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetFixedAssetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_LOCATION: OneToOneLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetFixedAssetWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_WORKER_RESPONSIBLE: OneToOneLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetFixedAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_GROUP: OneToOneLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetNumberPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_NUMBER_POSTING_PROFILE: OneToManyLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetStatementRow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_STATEMENT_ROW: OneToManyLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      AssetStatementRowsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetBookSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: OneToManyLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetLocationsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      FixedAssetGroupsApi<DeSerializersT>,
      FixedAssetPostingProfilesApi<DeSerializersT>,
      AssetStatementRowsApi<DeSerializersT>,
      FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_FIXED_ASSET_LOCATION: new OneToOneLink(
        'AssetFixedAssetLocation',
        this,
        linkedApis[0]
      ),
      ASSET_FIXED_ASSET_WORKER_RESPONSIBLE: new OneToOneLink(
        'AssetFixedAssetWorkerResponsible',
        this,
        linkedApis[1]
      ),
      ASSET_FIXED_ASSET_GROUP: new OneToOneLink(
        'AssetFixedAssetGroup',
        this,
        linkedApis[2]
      ),
      FIXED_ASSET_NUMBER_POSTING_PROFILE: new OneToManyLink(
        'FixedAssetNumberPostingProfile',
        this,
        linkedApis[3]
      ),
      ASSET_STATEMENT_ROW: new OneToManyLink(
        'AssetStatementRow',
        this,
        linkedApis[4]
      ),
      FIXED_ASSET_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: new OneToManyLink(
        'FixedAssetBookSpecialDepreciationAllowance',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = FixedAssets;

  requestBuilder(): FixedAssetsRequestBuilder<DeSerializersT> {
    return new FixedAssetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FixedAssets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FixedAssets<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FixedAssets<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FixedAssets, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FixedAssets, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAXATION_CODE_FOR_PIS: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_YEAR: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_MAINTENANCE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_CODE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_LOCATION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_CREDIT_GROUP: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditGroupBr,
      true,
      true
    >;
    SORT_FIELD_3_SORTING: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetSortValue,
      true,
      true
    >;
    NAME_OF_THE_LENDER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCEPTION_TAXATION_CODE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MAINTENANCE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INFORMATION_2: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MISSING_ASSET: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_CREDIT_PURPOSE: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditPurposeBr,
      true,
      true
    >;
    LEASE_NOTE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_2_SORTING: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetSortValue,
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROPRIATION_METHOD: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetAppropMethodBr,
      true,
      true
    >;
    MAJOR_TYPE_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SECOND_HAND: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIS_REFERENCE_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_CLASSIFICATION: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetClassificationJp,
      true,
      true
    >;
    ACCELERATED_DEPRECIATION_FIXED_ASSET_EQUIPMENT_GROUP_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_CREDIT_INSTALLMENTS: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSFERRED_FROM_INVENTORY: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAKE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_1_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION_PRICE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CREDITS_INSTALLMENTS: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_CODE_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_TYPE: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetPropertyType,
      true,
      true
    >;
    DEPARTMENT_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLEHOLDER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_INVENTORY: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INSURED_VALUE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_VENDOR: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURED_AT_FAIR_MARKET_VALUE: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROPERTY_GROUP_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_EXPIRATION_DATE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INFORMATION_3: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_2_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_NAME: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENT: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE_OF_MAJOR_TYPE: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetTypeJp,
      true,
      true
    >;
    EXCEPTION_TAXATION_RATE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetType,
      true,
      true
    >;
    OUTGOING_ICMS: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TYPE_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_INFORMATION_1: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_INFORMATION_2: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_CONDITION_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_INFORMATION_3: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_3_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_1_SORTING: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetSortValue,
      true,
      true
    >;
    REPLACEMENT_COST: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_DATE_2: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_LOCATION_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_SEARCH_NAME: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARCEL_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCEPTION_TAXATION_RATE_DENOMINATOR: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_ASSET_GROUP_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_PERIODIC_VALUE_COST_UPDATE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISPOSAL_RESTRICTIONS: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAXATION_CODE_FOR_COFINS: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RENTED: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAJOR_TYPE_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUARANTEE_DATE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SORT_FIELD_2_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFORMATION_1: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_GROUP_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_AMOUNT: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRED_TYPE: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      AssetDeferredTypeJp,
      true,
      true
    >;
    MAIN_ASSET_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_1_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LONG_TERM_RECEIVABLE_TAX: EnumField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICAL_ASSET_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_DATE_1: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_CONDITION_DESCRIPTION: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_FIELD_3_ID: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION_DATE: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_LOCATION_NAME: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_MEMO: OrderableEdmTypeField<
      FixedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetFixedAssetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_LOCATION: OneToOneLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetFixedAssetWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_WORKER_RESPONSIBLE: OneToOneLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetFixedAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_GROUP: OneToOneLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetNumberPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_NUMBER_POSTING_PROFILE: OneToManyLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetStatementRow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_STATEMENT_ROW: OneToManyLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      AssetStatementRowsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetBookSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: OneToManyLink<
      FixedAssets<DeSerializersT>,
      DeSerializersT,
      FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedAssets<DeSerializers>>;
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
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxationCodeForPis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE_FOR_PIS: fieldBuilder.buildEdmTypeField(
          'TaxationCodeForPIS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modelYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_YEAR: fieldBuilder.buildEdmTypeField(
          'ModelYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextMaintenance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_MAINTENANCE: fieldBuilder.buildEdmTypeField(
          'NextMaintenance',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_CODE: fieldBuilder.buildEdmTypeField(
          'ActivityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'DocumentLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetCreditGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_CREDIT_GROUP: fieldBuilder.buildEnumField(
          'FixedAssetCreditGroup',
          FbpiscofinsFixedAssetCreditGroupBr,
          true
        ),
        /**
         * Static representation of the {@link sortField3Sorting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_3_SORTING: fieldBuilder.buildEnumField(
          'SortField3Sorting',
          AssetSortValue,
          true
        ),
        /**
         * Static representation of the {@link nameOfTheLender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_OF_THE_LENDER: fieldBuilder.buildEdmTypeField(
          'NameOfTheLender',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE: fieldBuilder.buildEdmTypeField(
          'Resource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exceptionTaxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'ExceptionTaxationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastMaintenance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MAINTENANCE: fieldBuilder.buildEdmTypeField(
          'LastMaintenance',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link information2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION_2: fieldBuilder.buildEdmTypeField(
          'Information2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link missingAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISSING_ASSET: fieldBuilder.buildEnumField('MissingAsset', NoYes, true),
        /**
         * Static representation of the {@link taxCreditPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_PURPOSE: fieldBuilder.buildEnumField(
          'TaxCreditPurpose',
          FbpiscofinsFixedAssetCreditPurposeBr,
          true
        ),
        /**
         * Static representation of the {@link leaseNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_NOTE: fieldBuilder.buildEdmTypeField(
          'LeaseNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortField2Sorting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_2_SORTING: fieldBuilder.buildEnumField(
          'SortField2Sorting',
          AssetSortValue,
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
         * Static representation of the {@link appropriationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROPRIATION_METHOD: fieldBuilder.buildEnumField(
          'AppropriationMethod',
          FbpiscofinsFixedAssetAppropMethodBr,
          true
        ),
        /**
         * Static representation of the {@link majorTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAJOR_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MajorTypeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSecondHand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SECOND_HAND: fieldBuilder.buildEnumField(
          'IsSecondHand',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gisReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIS_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'GISReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CLASSIFICATION: fieldBuilder.buildEnumField(
          'AssetClassification',
          AssetClassificationJp,
          true
        ),
        /**
         * Static representation of the {@link acceleratedDepreciationFixedAssetEquipmentGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_FIXED_ASSET_EQUIPMENT_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'AcceleratedDepreciationFixedAssetEquipmentGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link icmsCreditInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_CREDIT_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'ICMSCreditInstallments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transferredFromInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED_FROM_INVENTORY: fieldBuilder.buildEnumField(
          'TransferredFromInventory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAKE: fieldBuilder.buildEdmTypeField('Make', 'Edm.String', true),
        /**
         * Static representation of the {@link contactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortField1Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_1_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SortField1Description',
          'Edm.String',
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
         * Static representation of the {@link responsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCreditsInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDITS_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'TaxCreditsInstallments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ActivityCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propertyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_TYPE: fieldBuilder.buildEnumField(
          'PropertyType',
          AssetPropertyType,
          true
        ),
        /**
         * Static representation of the {@link departmentOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentOperatingUnitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleholder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLEHOLDER: fieldBuilder.buildEdmTypeField(
          'Titleholder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_INVENTORY: fieldBuilder.buildEdmTypeField(
          'PhysicalInventory',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link insuredValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURED_VALUE: fieldBuilder.buildEdmTypeField(
          'InsuredValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE: fieldBuilder.buildEdmTypeField(
          'Reference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuranceVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_VENDOR: fieldBuilder.buildEdmTypeField(
          'InsuranceVendor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuredAtFairMarketValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURED_AT_FAIR_MARKET_VALUE: fieldBuilder.buildEnumField(
          'InsuredAtFairMarketValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link propertyGroupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PropertyGroupDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
        /**
         * Static representation of the {@link policyExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'PolicyExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link information3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION_3: fieldBuilder.buildEdmTypeField(
          'Information3',
          'Edm.String',
          true
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
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL: fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true),
        /**
         * Static representation of the {@link responsibleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_NAME: fieldBuilder.buildEdmTypeField(
          'ResponsibleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT: fieldBuilder.buildEdmTypeField('Agent', 'Edm.String', true),
        /**
         * Static representation of the {@link assetTypeOfMajorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE_OF_MAJOR_TYPE: fieldBuilder.buildEnumField(
          'AssetTypeOfMajorType',
          AssetTypeJp,
          true
        ),
        /**
         * Static representation of the {@link exceptionTaxationRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TAXATION_RATE: fieldBuilder.buildEdmTypeField(
          'ExceptionTaxationRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', AssetType, true),
        /**
         * Static representation of the {@link outgoingIcms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_ICMS: fieldBuilder.buildEnumField('OutgoingICMS', NoYes, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalInformation1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_INFORMATION_1: fieldBuilder.buildEdmTypeField(
          'TechnicalInformation1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalInformation2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_INFORMATION_2: fieldBuilder.buildEdmTypeField(
          'TechnicalInformation2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetConditionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CONDITION_ID: fieldBuilder.buildEdmTypeField(
          'AssetConditionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalInformation3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_INFORMATION_3: fieldBuilder.buildEdmTypeField(
          'TechnicalInformation3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortField3Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_3_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SortField3Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortField1Sorting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_1_SORTING: fieldBuilder.buildEnumField(
          'SortField1Sorting',
          AssetSortValue,
          true
        ),
        /**
         * Static representation of the {@link replacementCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_COST: fieldBuilder.buildEdmTypeField(
          'ReplacementCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuranceDate2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_DATE_2: fieldBuilder.buildEdmTypeField(
          'InsuranceDate2',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AssetLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link departmentSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'DepartmentSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parcelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARCEL_ID: fieldBuilder.buildEdmTypeField(
          'ParcelID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roomNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoomNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exceptionTaxationRateDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TAXATION_RATE_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'ExceptionTaxationRateDenominator',
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
         * Static representation of the {@link lastPeriodicValueCostUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PERIODIC_VALUE_COST_UPDATE: fieldBuilder.buildEdmTypeField(
          'LastPeriodicValueCostUpdate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link disposalRestrictions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_RESTRICTIONS: fieldBuilder.buildEdmTypeField(
          'DisposalRestrictions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxationCodeForCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE_FOR_COFINS: fieldBuilder.buildEdmTypeField(
          'TaxationCodeForCOFINS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRented} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RENTED: fieldBuilder.buildEnumField('IsRented', NoYes, true),
        /**
         * Static representation of the {@link majorTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAJOR_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MajorTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guaranteeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_DATE: fieldBuilder.buildEdmTypeField(
          'GuaranteeDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sortField2Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_FIELD_2_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SortField2Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link information1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION_1: fieldBuilder.buildEdmTypeField(
          'Information1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propertyGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PropertyGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link policyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PolicyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferredType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TYPE: fieldBuilder.buildEnumField(
          'DeferredType',
          AssetDeferredTypeJp,
          true
        ),
        /**
         * Static representation of the {@link mainAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MainAssetId',
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
         * Static representation of the {@link policyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PolicyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link longTermReceivableTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONG_TERM_RECEIVABLE_TAX: fieldBuilder.buildEnumField(
          'LongTermReceivableTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link physicalAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PhysicalAssetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuranceDate1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_DATE_1: fieldBuilder.buildEdmTypeField(
          'InsuranceDate1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetConditionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CONDITION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AssetConditionDescription',
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
         * Static representation of the {@link acquisitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetLocationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LOCATION_NAME: fieldBuilder.buildEdmTypeField(
          'AssetLocationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_MEMO: fieldBuilder.buildEdmTypeField(
          'LocationMemo',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedAssets)
      };
    }

    return this._schema;
  }
}
