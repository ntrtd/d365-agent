/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetGroups } from './FixedAssetGroups';
import { FixedAssetGroupsRequestBuilder } from './FixedAssetGroupsRequestBuilder';
import { FixedAssetsApi } from './FixedAssetsApi';
import { FixedAssetPostingProfilesApi } from './FixedAssetPostingProfilesApi';
import { AssetStatementRowsApi } from './AssetStatementRowsApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { FixedAssetsV2Api } from './FixedAssetsV2Api';
import { FixedAssetPostingProfileDisposalsApi } from './FixedAssetPostingProfileDisposalsApi';
import { AssetLocationsApi } from './AssetLocationsApi';
import { SequenceTablesApi } from './SequenceTablesApi';
import { AssetMajorTypesApi } from './AssetMajorTypesApi';
import { FixedAssetGroupBookSpecialDepreciationAllowancesApi } from './FixedAssetGroupBookSpecialDepreciationAllowancesApi';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { AssetPropertyType } from './AssetPropertyType';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';
import { NoYes } from './NoYes';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { AssetType } from './AssetType';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetClassificationJp } from './AssetClassificationJp';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FixedAssetGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FixedAssetGroups<DeSerializersT>, DeSerializersT>
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
  ): FixedAssetGroupsApi<DeSerializersT> {
    return new FixedAssetGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAssetPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_POSTING_PROFILE: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetStatementRow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_STATEMENT_ROW: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      AssetStatementRowsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2GroupAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_GROUP_ASSET: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFixedAssetV2GroupAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_V_2_GROUP_ASSET: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAssetPostingProfileDisposal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_POSTING_PROFILE_DISPOSAL: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfileDisposalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupAssetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_LOCATION: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link numberSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NUMBER_SEQUENCE: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      SequenceTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link barcodeNumberSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BARCODE_NUMBER_SEQUENCE: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      SequenceTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMajorType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAJOR_TYPE: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      AssetMajorTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAssetGroupSetupBonus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_GROUP_SETUP_BONUS: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetsApi<DeSerializersT>,
      FixedAssetPostingProfilesApi<DeSerializersT>,
      AssetStatementRowsApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetsV2Api<DeSerializersT>,
      FixedAssetPostingProfileDisposalsApi<DeSerializersT>,
      AssetLocationsApi<DeSerializersT>,
      SequenceTablesApi<DeSerializersT>,
      SequenceTablesApi<DeSerializersT>,
      AssetMajorTypesApi<DeSerializersT>,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_GROUP_ASSET: new OneToManyLink(
        'AssetGroupAsset',
        this,
        linkedApis[0]
      ),
      ASSET_GROUP_ASSET_POSTING_PROFILE: new OneToManyLink(
        'AssetGroupAssetPostingProfile',
        this,
        linkedApis[1]
      ),
      ASSET_STATEMENT_ROW: new OneToManyLink(
        'AssetStatementRow',
        this,
        linkedApis[2]
      ),
      ASSET_BOOK_V_2_GROUP_ASSET: new OneToManyLink(
        'AssetBookV2GroupAsset',
        this,
        linkedApis[3]
      ),
      ASSET_FIXED_ASSET_V_2_GROUP_ASSET: new OneToManyLink(
        'AssetFixedAssetV2GroupAsset',
        this,
        linkedApis[4]
      ),
      ASSET_GROUP_ASSET_POSTING_PROFILE_DISPOSAL: new OneToManyLink(
        'AssetGroupAssetPostingProfileDisposal',
        this,
        linkedApis[5]
      ),
      ASSET_GROUP_ASSET_LOCATION: new OneToOneLink(
        'AssetGroupAssetLocation',
        this,
        linkedApis[6]
      ),
      NUMBER_SEQUENCE: new OneToOneLink('NumberSequence', this, linkedApis[7]),
      BARCODE_NUMBER_SEQUENCE: new OneToOneLink(
        'BarcodeNumberSequence',
        this,
        linkedApis[8]
      ),
      ASSET_MAJOR_TYPE: new OneToOneLink('AssetMajorType', this, linkedApis[9]),
      ASSET_GROUP_ASSET_GROUP_SETUP_BONUS: new OneToManyLink(
        'AssetGroupAssetGroupSetupBonus',
        this,
        linkedApis[10]
      ),
      ASSET_GROUP_VALUE_MODEL: new OneToManyLink(
        'AssetGroupValueModel',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = FixedAssetGroups;

  requestBuilder(): FixedAssetGroupsRequestBuilder<DeSerializersT> {
    return new FixedAssetGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FixedAssetGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FixedAssetGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FixedAssetGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_ASSET_GROUP_ID: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROPERTY_TYPE: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      AssetPropertyType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_CREDIT_INSTALLMENTS: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GIS_LAYER_ID: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_TYPE: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      AssetDeferredTypeJp,
      true,
      true
    >;
    REPLACEMENT_COST_FACTOR: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTONUMBER_BAR_CODES: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAJOR_TYPE_ID: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROPRIATION_METHOD_FOR_PISCOFINS: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetAppropMethodBr,
      true,
      true
    >;
    TAXATION_CODE_FOR_PIS: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      AssetType,
      true,
      true
    >;
    PISCOFINS_CREDITS_INSTALLMENTS: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AUTONUMBER_FIXED_ASSETS: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_LOCATION_ID: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTGOING_ICMS: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPITALIZATION_THRESHOLD: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_ASSET_CREDIT_GROUP: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditGroupBr,
      true,
      true
    >;
    LONG_TERM_RECEIVABLE_PISCOFINS: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_CLASSIFICATION: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      AssetClassificationJp,
      true,
      true
    >;
    TAXATION_CODE_FOR_COFINS: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURED_VALUE_FACTOR: OrderableEdmTypeField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_ASSET_CREDIT_PURPOSE: EnumField<
      FixedAssetGroups<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditPurposeBr,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAssetPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_POSTING_PROFILE: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetStatementRow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_STATEMENT_ROW: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      AssetStatementRowsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2GroupAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_GROUP_ASSET: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFixedAssetV2GroupAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_V_2_GROUP_ASSET: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAssetPostingProfileDisposal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_POSTING_PROFILE_DISPOSAL: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfileDisposalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupAssetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_LOCATION: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link numberSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NUMBER_SEQUENCE: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      SequenceTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link barcodeNumberSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BARCODE_NUMBER_SEQUENCE: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      SequenceTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMajorType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAJOR_TYPE: OneToOneLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      AssetMajorTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupAssetGroupSetupBonus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_ASSET_GROUP_SETUP_BONUS: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL: OneToManyLink<
      FixedAssetGroups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedAssetGroups<DeSerializers>>;
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
         * Static representation of the {@link fixedAssetGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetGroupId',
          'Edm.String',
          false
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link gisLayerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIS_LAYER_ID: fieldBuilder.buildEdmTypeField(
          'GISLayerId',
          'Edm.String',
          true
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
         * Static representation of the {@link replacementCostFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_COST_FACTOR: fieldBuilder.buildEdmTypeField(
          'ReplacementCostFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link autonumberBarCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTONUMBER_BAR_CODES: fieldBuilder.buildEnumField(
          'AutonumberBarCodes',
          NoYes,
          true
        ),
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
         * Static representation of the {@link appropriationMethodForPiscofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROPRIATION_METHOD_FOR_PISCOFINS: fieldBuilder.buildEnumField(
          'AppropriationMethodForPISCOFINS',
          FbpiscofinsFixedAssetAppropMethodBr,
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
         * Static representation of the {@link barcodeNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'BarcodeNumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', AssetType, true),
        /**
         * Static representation of the {@link piscofinsCreditsInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_CREDITS_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'PISCOFINSCreditsInstallments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link autonumberFixedAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTONUMBER_FIXED_ASSETS: fieldBuilder.buildEnumField(
          'AutonumberFixedAssets',
          NoYes,
          true
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
         * Static representation of the {@link outgoingIcms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_ICMS: fieldBuilder.buildEnumField('OutgoingICMS', NoYes, true),
        /**
         * Static representation of the {@link capitalizationThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPITALIZATION_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'CapitalizationThreshold',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link longTermReceivablePiscofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONG_TERM_RECEIVABLE_PISCOFINS: fieldBuilder.buildEnumField(
          'LongTermReceivablePISCOFINS',
          NoYes,
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
         * Static representation of the {@link taxationCodeForCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE_FOR_COFINS: fieldBuilder.buildEdmTypeField(
          'TaxationCodeForCOFINS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuredValueFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURED_VALUE_FACTOR: fieldBuilder.buildEdmTypeField(
          'InsuredValueFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedAssetCreditPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_CREDIT_PURPOSE: fieldBuilder.buildEnumField(
          'FixedAssetCreditPurpose',
          FbpiscofinsFixedAssetCreditPurposeBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedAssetGroups)
      };
    }

    return this._schema;
  }
}
