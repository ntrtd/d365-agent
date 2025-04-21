/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralDefaultAccounts } from './SubBillDeferralDefaultAccounts';
import { SubBillDeferralDefaultAccountsRequestBuilder } from './SubBillDeferralDefaultAccountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SubBillDeferralDefaultAccountType } from './SubBillDeferralDefaultAccountType';
import { InventPostingItemCode } from './InventPostingItemCode';
import { TableGroupAll } from './TableGroupAll';
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
export class SubBillDeferralDefaultAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralDefaultAccounts<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralDefaultAccountsApi<DeSerializersT> {
    return new SubBillDeferralDefaultAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      SubBillDeferralDefaultAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'LedgerDimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillDeferralDefaultAccounts;

  requestBuilder(): SubBillDeferralDefaultAccountsRequestBuilder<DeSerializersT> {
    return new SubBillDeferralDefaultAccountsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralDefaultAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralDefaultAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralDefaultAccounts<DeSerializersT>,
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
    typeof SubBillDeferralDefaultAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralDefaultAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      SubBillDeferralDefaultAccountType,
      true,
      true
    >;
    ITEM_CODE: EnumField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      InventPostingItemCode,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_RELATION: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INITIAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_TERM_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralDefaultAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      SubBillDeferralDefaultAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillDeferralDefaultAccounts<DeSerializers>>;
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          SubBillDeferralDefaultAccountType,
          true
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEnumField(
          'ItemCode',
          InventPostingItemCode,
          true
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_RELATION: fieldBuilder.buildEdmTypeField(
          'CategoryRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link initialRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InitialRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortTermAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShortTermAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RecognitionOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RecognitionAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralDefaultAccounts)
      };
    }

    return this._schema;
  }
}
