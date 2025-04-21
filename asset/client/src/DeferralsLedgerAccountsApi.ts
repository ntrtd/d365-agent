/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeferralsLedgerAccounts } from './DeferralsLedgerAccounts';
import { DeferralsLedgerAccountsRequestBuilder } from './DeferralsLedgerAccountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { RDeferralsTransType } from './RDeferralsTransType';
import { RDeferralsTableGroupAllBook } from './RDeferralsTableGroupAllBook';
import { RDeferralsPostValue } from './RDeferralsPostValue';
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
export class DeferralsLedgerAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeferralsLedgerAccounts<DeSerializersT>, DeSerializersT>
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
  ): DeferralsLedgerAccountsApi<DeSerializersT> {
    return new DeferralsLedgerAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      DeferralsLedgerAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DeferralsLedgerAccounts;

  requestBuilder(): DeferralsLedgerAccountsRequestBuilder<DeSerializersT> {
    return new DeferralsLedgerAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeferralsLedgerAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DeferralsLedgerAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeferralsLedgerAccounts<DeSerializersT>,
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
    typeof DeferralsLedgerAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeferralsLedgerAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUM: OrderableEdmTypeField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      RDeferralsTransType,
      true,
      true
    >;
    GROUPINGS: EnumField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      RDeferralsTableGroupAllBook,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POST_VALUE: EnumField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      RDeferralsPostValue,
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      DeferralsLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      DeferralsLedgerAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeferralsLedgerAccounts<DeSerializers>>;
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
         * Static representation of the {@link num} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM: fieldBuilder.buildEdmTypeField('Num', 'Edm.String', false),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          RDeferralsTransType,
          true
        ),
        /**
         * Static representation of the {@link groupings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUPINGS: fieldBuilder.buildEnumField(
          'Groupings',
          RDeferralsTableGroupAllBook,
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_VALUE: fieldBuilder.buildEnumField(
          'PostValue',
          RDeferralsPostValue,
          true
        ),
        /**
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeferralsLedgerAccounts)
      };
    }

    return this._schema;
  }
}
