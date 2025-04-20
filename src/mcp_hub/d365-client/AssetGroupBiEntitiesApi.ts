/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetGroupBiEntities } from './AssetGroupBiEntities';
import { AssetGroupBiEntitiesRequestBuilder } from './AssetGroupBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { AssetPropertyType } from './AssetPropertyType';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetClassificationJp } from './AssetClassificationJp';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { AssetType } from './AssetType';
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
export class AssetGroupBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetGroupBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetGroupBiEntitiesApi<DeSerializersT> {
    return new AssetGroupBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetGroupBiEntities;

  requestBuilder(): AssetGroupBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetGroupBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetGroupBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetGroupBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetGroupBiEntities<DeSerializersT>,
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
    typeof AssetGroupBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetGroupBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AUTO_NUMBER_BARCODE: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COFINS_TAXATION_CODE_BR: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_TYPE: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      AssetPropertyType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PISCOFINS_RECEIVABLE_LONG_TERM_BR: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ICMS_OUTGOING_BR: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PISCOFINS_APPROPRIATION_METHOD_BR: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetAppropMethodBr,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_DEFERRED_TYPE_JP: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDeferredTypeJp,
      true,
      true
    >;
    GIS_LAYER_ID: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_COST_FACTOR: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BARCODE_NUMBER_SEQUENCE_TABLE: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PISCOFINS_CREDIT_GROUP_BR: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditGroupBr,
      true,
      true
    >;
    ASSET_CLASSIFICATION_JP: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      AssetClassificationJp,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PIS_TAXATION_CODE_BR: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PISCOFINS_CREDIT_PURPOSE_BR: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      FbpiscofinsFixedAssetCreditPurposeBr,
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPITALIZATION_THRESHOLD: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTO_NUMBER: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ICMS_CREDIT_INSTALLMENTS_BR: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PISCOFINS_CREDIT_INSTALLMENTS_BR: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INSURED_VALUE_FACTOR: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAJOR_TYPE: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE: EnumField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      AssetType,
      true,
      true
    >;
    AUTO_NUMBER_SEQUENCE_TABLE: OrderableEdmTypeField<
      AssetGroupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetGroupBiEntities<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link autoNumberBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_NUMBER_BARCODE: fieldBuilder.buildEnumField(
          'AutoNumberBarcode',
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
         * Static representation of the {@link piscofinsReceivableLongTermBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_RECEIVABLE_LONG_TERM_BR: fieldBuilder.buildEnumField(
          'PISCOFINSReceivableLongTerm_BR',
          NoYes,
          true
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
         * Static representation of the {@link piscofinsAppropriationMethodBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PISCOFINS_APPROPRIATION_METHOD_BR: fieldBuilder.buildEnumField(
          'PISCOFINSAppropriationMethod_BR',
          FbpiscofinsFixedAssetAppropMethodBr,
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
         * Static representation of the {@link assetDeferredTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DEFERRED_TYPE_JP: fieldBuilder.buildEnumField(
          'AssetDeferredType_JP',
          AssetDeferredTypeJp,
          true
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
         * Static representation of the {@link replacementCostFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_COST_FACTOR: fieldBuilder.buildEdmTypeField(
          'ReplacementCostFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link barcodeNumberSequenceTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_NUMBER_SEQUENCE_TABLE: fieldBuilder.buildEdmTypeField(
          'BarcodeNumberSequenceTable',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link assetClassificationJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CLASSIFICATION_JP: fieldBuilder.buildEnumField(
          'AssetClassification_JP',
          AssetClassificationJp,
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
         * Static representation of the {@link pisTaxationCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIS_TAXATION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'PISTaxationCode_BR',
          'Edm.String',
          true
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
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link autoNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_NUMBER: fieldBuilder.buildEnumField('AutoNumber', NoYes, true),
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
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
         * Static representation of the {@link insuredValueFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURED_VALUE_FACTOR: fieldBuilder.buildEdmTypeField(
          'InsuredValueFactor',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link assetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE: fieldBuilder.buildEnumField('AssetType', AssetType, true),
        /**
         * Static representation of the {@link autoNumberSequenceTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_NUMBER_SEQUENCE_TABLE: fieldBuilder.buildEdmTypeField(
          'AutoNumberSequenceTable',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetGroupBiEntities)
      };
    }

    return this._schema;
  }
}
