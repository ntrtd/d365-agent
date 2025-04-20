/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationAdditionals } from './LtmDocumentClassificationAdditionals';
import { LtmDocumentClassificationAdditionalsRequestBuilder } from './LtmDocumentClassificationAdditionalsRequestBuilder';
import { LtmAdditionalFieldBehavior } from './LtmAdditionalFieldBehavior';
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
export class LtmDocumentClassificationAdditionalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LtmDocumentClassificationAdditionals<DeSerializersT>,
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
  ): LtmDocumentClassificationAdditionalsApi<DeSerializersT> {
    return new LtmDocumentClassificationAdditionalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmDocumentClassificationAdditionals;

  requestBuilder(): LtmDocumentClassificationAdditionalsRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationAdditionalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationAdditionals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationAdditionals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationAdditionals<DeSerializersT>,
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
    typeof LtmDocumentClassificationAdditionals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationAdditionals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AD_CUMULATIVE_AMOUNT_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_HOLDER_ACCOUNT_NUM_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_FEES_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_05_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_06_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_CHECK_SOURCE_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_CUMULATIVE_BASE_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_10_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_BANK_GROUP_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_TAX_PAYER_TYPE_ID_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_HOLDER_ACCOUNT_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AD_LIST_07_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_COUNTRY_REGION_ID_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_ORIGINAL_AMOUNT_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_STATE_ID_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_BENEFICIARY_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_STATE_DOC_NUM_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_08_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_CONCEPT_1_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_01_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_02_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_DOC_NUM_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_09_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_CONCEPT_3_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_03_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_LIST_04_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_TAX_RATE_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_CONCEPT_2_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_BUSSINES_NAME_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    AD_BASE_AMOUNT_BEHAVIOR: EnumField<
      LtmDocumentClassificationAdditionals<DeSerializers>,
      DeSerializersT,
      LtmAdditionalFieldBehavior,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmDocumentClassificationAdditionals<DeSerializers>>;
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
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link adCumulativeAmountBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_CUMULATIVE_AMOUNT_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdCumulativeAmountBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adHolderAccountNumBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_HOLDER_ACCOUNT_NUM_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdHolderAccountNumBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adFeesBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_FEES_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdFeesBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList05Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_05_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList05Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList06Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_06_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList06Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adCheckSourceBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_CHECK_SOURCE_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdCheckSourceBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adCumulativeBaseBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_CUMULATIVE_BASE_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdCumulativeBaseBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList10Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_10_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList10Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adBankGroupBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_BANK_GROUP_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdBankGroupBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adTaxPayerTypeIdBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_TAX_PAYER_TYPE_ID_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdTaxPayerTypeIdBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adHolderAccountMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_HOLDER_ACCOUNT_MASK: fieldBuilder.buildEdmTypeField(
          'AdHolderAccountMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adList07Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_07_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList07Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adCountryRegionIdBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_COUNTRY_REGION_ID_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdCountryRegionIdBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adOriginalAmountBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_ORIGINAL_AMOUNT_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdOriginalAmountBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adStateIdBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_STATE_ID_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdStateIdBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adBeneficiaryBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_BENEFICIARY_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdBeneficiaryBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adStateDocNumBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_STATE_DOC_NUM_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdStateDocNumBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList08Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_08_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList08Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adConcept1Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_CONCEPT_1_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdConcept1Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList01Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_01_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList01Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList02Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_02_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList02Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adDocNumBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_DOC_NUM_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdDocNumBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList09Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_09_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList09Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adConcept3Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_CONCEPT_3_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdConcept3Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList03Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_03_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList03Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adList04Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_LIST_04_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdList04Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adTaxRateBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_TAX_RATE_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdTaxRateBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adConcept2Behavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_CONCEPT_2_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdConcept2Behavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adBussinesNameBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_BUSSINES_NAME_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdBussinesNameBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        /**
         * Static representation of the {@link adBaseAmountBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AD_BASE_AMOUNT_BEHAVIOR: fieldBuilder.buildEnumField(
          'AdBaseAmountBehavior',
          LtmAdditionalFieldBehavior,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationAdditionals)
      };
    }

    return this._schema;
  }
}
