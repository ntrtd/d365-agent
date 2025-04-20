/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetTableBiEntities } from './AssetTableBiEntities';
import { AssetTableBiEntitiesRequestBuilder } from './AssetTableBiEntitiesRequestBuilder';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { NoYes } from './NoYes';
import { VehicleTypeMx } from './VehicleTypeMx';
import { AssetClassificationJp } from './AssetClassificationJp';
import { AssetPropertyType } from './AssetPropertyType';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetTableBiEntitiesApi<DeSerializersT> {
    return new AssetTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetTableBiEntities;

  requestBuilder(): AssetTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetTableBiEntities<DeSerializersT>,
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
    typeof AssetTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PISCOFINS_CREDIT_PURPOSE_BR: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditPurposeBr,
      true,
      true
    >;
    MAKE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_MEMO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SORTING_ID_2: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_CONF_MX: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_ID_LV: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_REPLACE_COST: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MODEL_YEAR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PISCOFINS_CREDIT_INSTALLMENTS_BR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACQUISITION_PRICE_W: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSURANCE_DATE_2: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NEXT_MAINTENANCE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GIS_REFERENCE_NUMBER: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBVENTION_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRAILER_TYPE_MX: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MISSING: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODEL: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_TYPE_MX: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      VehicleTypeMx,
      true,
      true
    >;
    POLICY_AMOUNT: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_INVENTORY: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETURN_ON_INVESTMENTS_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GUARANTEE_DATE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONDITION: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ASSET_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCEPTION_TAXATION_CODE_JP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_INFO_1: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RENTED_JP: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCELERATED_DEP_GROUP_JP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_SECOND_HAND_JP: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_PROPERTY_GROUP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_BR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INSURED_AT_MARKET_VALUE: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACQUISITION_VALUE_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAINTENANCE_INFO_2: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_HOLDER: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURED_VALUE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ICMS_OUTGOING_BR: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_EXPIRATION: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_COUNTY_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_POLICY_NUM: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_DATE_1: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEHICLE_PLATE_NUM_MX: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAINTENANCE_INFO_3: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPOSAL_RESTRICTION: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_CLASSIFICATION_JP: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetClassificationJp,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERRED_FROM_INVENTORY_BR: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COFINS_TAXATION_CODE_BR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_SALE_PL: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_ACTIVITY_CODE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENTS: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_PRODUCTION_YEAR_PL: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_FACTOR_UPDATE_DATE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TECH_INFO_1: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_TYPE: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetPropertyType,
      true,
      true
    >;
    TECH_INFO_3: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECH_INFO_2: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PISCOFINS_APPROPRIATION_METHOD_BR: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetAppropMethodBr,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALUE_AT_19840101_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PIS_TAXATION_CODE_BR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_AGENT: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAJOR_TYPE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORKER_RESPONSIBLE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBVENTION_TAX_FREE_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WRK_CTR_ID_JP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LENDER_NAME_JP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSESSMENT_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROOM_NUMBER: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCEPTION_TAXATION_RATE_JP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_SOURCE_TYPE_CN: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_LINE_REC_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_CREDIT_INSTALLMENTS_BR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PHYSICAL_ASSET_NUMBER_BR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PISCOFINS_CREDIT_GROUP_BR: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditGroupBr,
      true,
      true
    >;
    PISCOFINS_RECEIVABLE_LONG_TERM_BR: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSESSMENT_TAX_NO: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERIAL_NUM: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARCEL_ID: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetType,
      true,
      true
    >;
    INSURANCE_VENDOR: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_DEFERRED_TYPE_JP: EnumField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDeferredTypeJp,
      true,
      true
    >;
    EXCEPTION_TAXATION_RATE_DENOMINATOR_JP: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING_ID_3: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MAINTENANCE: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACQUISITION_DATE_W: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_CONTACT_NAME: OrderableEdmTypeField<
      AssetTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link assetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField(
          'AssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link piscofinsCreditPurposeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_CREDIT_PURPOSE_BR: fieldBuilder.buildEnumField(
          'PISCOFINSCreditPurpose_BR',
          FbpiscofinsFixedAssetCreditPurposeBr,
          true
        ),
        /**
         * Static representation of the {@link make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAKE: fieldBuilder.buildEdmTypeField('Make', 'Edm.String', true),
        /**
         * Static representation of the {@link locationMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_MEMO: fieldBuilder.buildEdmTypeField(
          'LocationMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sortingId2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_2: fieldBuilder.buildEdmTypeField(
          'SortingId2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transConfMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_CONF_MX: fieldBuilder.buildEdmTypeField(
          'TransConf_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryIdLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID_LV: fieldBuilder.buildEdmTypeField(
          'CategoryId_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetReplaceCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_REPLACE_COST: fieldBuilder.buildEdmTypeField(
          'AssetReplaceCost',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link piscofinsCreditInstallmentsBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_CREDIT_INSTALLMENTS_BR: fieldBuilder.buildEdmTypeField(
          'PISCOFINSCreditInstallments_BR',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link acquisitionPriceW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_PRICE_W: fieldBuilder.buildEdmTypeField(
          'AcquisitionPrice_W',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link nextMaintenance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_MAINTENANCE: fieldBuilder.buildEdmTypeField(
          'NextMaintenance',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link subventionNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBVENTION_NO: fieldBuilder.buildEdmTypeField(
          'SubventionNO',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trailerTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_TYPE_MX: fieldBuilder.buildEdmTypeField(
          'TrailerType_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMissing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MISSING: fieldBuilder.buildEnumField('IsMissing', NoYes, true),
        /**
         * Static representation of the {@link model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL: fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vehicleTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_TYPE_MX: fieldBuilder.buildEnumField(
          'VehicleType_MX',
          VehicleTypeMx,
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
         * Static representation of the {@link physicalInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_INVENTORY: fieldBuilder.buildEdmTypeField(
          'PhysicalInventory',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link returnOnInvestmentsNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ON_INVESTMENTS_NO: fieldBuilder.buildEdmTypeField(
          'ReturnOnInvestmentsNO',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link condition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION: fieldBuilder.buildEdmTypeField(
          'Condition',
          'Edm.String',
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
         * Static representation of the {@link exceptionTaxationCodeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TAXATION_CODE_JP: fieldBuilder.buildEdmTypeField(
          'ExceptionTaxationCode_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceInfo1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_INFO_1: fieldBuilder.buildEdmTypeField(
          'MaintenanceInfo1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID: fieldBuilder.buildEdmTypeField(
          'SortingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRentedJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RENTED_JP: fieldBuilder.buildEnumField('IsRented_JP', NoYes, true),
        /**
         * Static representation of the {@link acceleratedDepGroupJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEP_GROUP_JP: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepGroup_JP',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isSecondHandJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SECOND_HAND_JP: fieldBuilder.buildEnumField(
          'IsSecondHand_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assetPropertyGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_PROPERTY_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetPropertyGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
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
         * Static representation of the {@link fiscalEstablishmentBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_BR: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishment_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link insuredAtMarketValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURED_AT_MARKET_VALUE: fieldBuilder.buildEnumField(
          'InsuredAtMarketValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link acquisitionValueNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_VALUE_NO: fieldBuilder.buildEdmTypeField(
          'AcquisitionValueNO',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maintenanceInfo2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_INFO_2: fieldBuilder.buildEdmTypeField(
          'MaintenanceInfo2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_HOLDER: fieldBuilder.buildEdmTypeField(
          'TitleHolder',
          'Edm.String',
          true
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
         * Static representation of the {@link taxIcmsOutgoingBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ICMS_OUTGOING_BR: fieldBuilder.buildEnumField(
          'TaxICMSOutgoing_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link policyExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'PolicyExpiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxCountyNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COUNTY_NO: fieldBuilder.buildEdmTypeField(
          'TaxCountyNO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link insurancePolicyNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_POLICY_NUM: fieldBuilder.buildEdmTypeField(
          'InsurancePolicyNum',
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
         * Static representation of the {@link vehiclePlateNumMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_PLATE_NUM_MX: fieldBuilder.buildEdmTypeField(
          'VehiclePlateNum_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link maintenanceInfo3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_INFO_3: fieldBuilder.buildEdmTypeField(
          'MaintenanceInfo3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disposalRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_RESTRICTION: fieldBuilder.buildEdmTypeField(
          'DisposalRestriction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetClassificationJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CLASSIFICATION_JP: fieldBuilder.buildEnumField(
          'AssetClassification_JP',
          AssetClassificationJp,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link transferredFromInventoryBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED_FROM_INVENTORY_BR: fieldBuilder.buildEnumField(
          'TransferredFromInventory_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cofinsTaxationCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COFINS_TAXATION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'COFINSTaxationCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowSalePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SALE_PL: fieldBuilder.buildEnumField('AllowSale_PL', NoYes, true),
        /**
         * Static representation of the {@link assetActivityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ACTIVITY_CODE: fieldBuilder.buildEdmTypeField(
          'AssetActivityCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link documents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENTS: fieldBuilder.buildEdmTypeField(
          'Documents',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetProductionYearPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_PRODUCTION_YEAR_PL: fieldBuilder.buildEdmTypeField(
          'AssetProductionYear_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastFactorUpdateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_FACTOR_UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'LastFactorUpdateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link techInfo1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECH_INFO_1: fieldBuilder.buildEdmTypeField(
          'TechInfo1',
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
         * Static representation of the {@link techInfo3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECH_INFO_3: fieldBuilder.buildEdmTypeField(
          'TechInfo3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link techInfo2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECH_INFO_2: fieldBuilder.buildEdmTypeField(
          'TechInfo2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link piscofinsAppropriationMethodBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_APPROPRIATION_METHOD_BR: fieldBuilder.buildEnumField(
          'PISCOFINSAppropriationMethod_BR',
          FbpiscofinsFixedAssetAppropMethodBr,
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link valueAt19840101No} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_AT_19840101_NO: fieldBuilder.buildEdmTypeField(
          'ValueAt19840101NO',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pisTaxationCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIS_TAXATION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'PISTaxationCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuranceAgent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_AGENT: fieldBuilder.buildEdmTypeField(
          'InsuranceAgent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link majorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAJOR_TYPE: fieldBuilder.buildEdmTypeField(
          'MajorType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link workerResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'WorkerResponsible',
          'Edm.Int64',
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
         * Static representation of the {@link subventionTaxFreeNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBVENTION_TAX_FREE_NO: fieldBuilder.buildEdmTypeField(
          'SubventionTaxFreeNO',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wrkCtrIdJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRK_CTR_ID_JP: fieldBuilder.buildEdmTypeField(
          'WrkCtrId_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lenderNameJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENDER_NAME_JP: fieldBuilder.buildEdmTypeField(
          'LenderName_JP',
          'Edm.String',
          true
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
         * Static representation of the {@link assessmentNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSMENT_NO: fieldBuilder.buildEdmTypeField(
          'AssessmentNO',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link exceptionTaxationRateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TAXATION_RATE_JP: fieldBuilder.buildEdmTypeField(
          'ExceptionTaxationRate_JP',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetSourceTypeCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_SOURCE_TYPE_CN: fieldBuilder.buildEdmTypeField(
          'AssetSourceType_CN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'PurchLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link icmsCreditInstallmentsBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_CREDIT_INSTALLMENTS_BR: fieldBuilder.buildEdmTypeField(
          'ICMSCreditInstallments_BR',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link physicalAssetNumberBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_ASSET_NUMBER_BR: fieldBuilder.buildEdmTypeField(
          'PhysicalAssetNumber_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE: fieldBuilder.buildEdmTypeField('Lease', 'Edm.String', true),
        /**
         * Static representation of the {@link piscofinsCreditGroupBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_CREDIT_GROUP_BR: fieldBuilder.buildEnumField(
          'PISCOFINSCreditGroup_BR',
          FbpiscofinsFixedAssetCreditGroupBr,
          true
        ),
        /**
         * Static representation of the {@link piscofinsReceivableLongTermBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_RECEIVABLE_LONG_TERM_BR: fieldBuilder.buildEnumField(
          'PISCOFINSReceivableLongTerm_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assessmentTaxNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSMENT_TAX_NO: fieldBuilder.buildEdmTypeField(
          'AssessmentTaxNO',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serialNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUM: fieldBuilder.buildEdmTypeField(
          'SerialNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parcelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARCEL_ID: fieldBuilder.buildEdmTypeField(
          'ParcelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE: fieldBuilder.buildEnumField('AssetType', AssetType, true),
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
         * Static representation of the {@link assetDeferredTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DEFERRED_TYPE_JP: fieldBuilder.buildEnumField(
          'AssetDeferredType_JP',
          AssetDeferredTypeJp,
          true
        ),
        /**
         * Static representation of the {@link exceptionTaxationRateDenominatorJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_TAXATION_RATE_DENOMINATOR_JP: fieldBuilder.buildEdmTypeField(
          'ExceptionTaxationRateDenominator_JP',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortingId3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_3: fieldBuilder.buildEdmTypeField(
          'SortingId3',
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
         * Static representation of the {@link acquisitionDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE_W: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerContactName',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetTableBiEntities)
      };
    }

    return this._schema;
  }
}
