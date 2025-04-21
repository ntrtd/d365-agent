/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillUnbilledRevenueAccounts } from './SubBillUnbilledRevenueAccounts';
import { SubBillUnbilledRevenueAccountsRequestBuilder } from './SubBillUnbilledRevenueAccountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { InventPostingItemCode } from './InventPostingItemCode';
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
export class SubBillUnbilledRevenueAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillUnbilledRevenueAccounts<DeSerializersT>, DeSerializersT>
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
  ): SubBillUnbilledRevenueAccountsApi<DeSerializersT> {
    return new SubBillUnbilledRevenueAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link unbilledDiscountAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_DISCOUNT_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shortTermUnbilledDiscountAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHORT_TERM_UNBILLED_DISCOUNT_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledRevenueOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_REVENUE_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shortTermUnbilledRevenueAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHORT_TERM_UNBILLED_REVENUE_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledRevenueAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_REVENUE_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledDiscountOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_DISCOUNT_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      UNBILLED_DISCOUNT_ACCOUNT_COMBINATION: new OneToOneLink(
        'UnbilledDiscountAccountCombination',
        this,
        linkedApis[0]
      ),
      SHORT_TERM_UNBILLED_DISCOUNT_ACCOUNT_COMBINATION: new OneToOneLink(
        'ShortTermUnbilledDiscountAccountCombination',
        this,
        linkedApis[1]
      ),
      UNBILLED_REVENUE_OFFSET_ACCOUNT_COMBINATION: new OneToOneLink(
        'UnbilledRevenueOffsetAccountCombination',
        this,
        linkedApis[2]
      ),
      SHORT_TERM_UNBILLED_REVENUE_ACCOUNT_COMBINATION: new OneToOneLink(
        'ShortTermUnbilledRevenueAccountCombination',
        this,
        linkedApis[3]
      ),
      UNBILLED_REVENUE_ACCOUNT_COMBINATION: new OneToOneLink(
        'UnbilledRevenueAccountCombination',
        this,
        linkedApis[4]
      ),
      UNBILLED_DISCOUNT_OFFSET_ACCOUNT_COMBINATION: new OneToOneLink(
        'UnbilledDiscountOffsetAccountCombination',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = SubBillUnbilledRevenueAccounts;

  requestBuilder(): SubBillUnbilledRevenueAccountsRequestBuilder<DeSerializersT> {
    return new SubBillUnbilledRevenueAccountsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillUnbilledRevenueAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillUnbilledRevenueAccounts<DeSerializersT>,
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
    typeof SubBillUnbilledRevenueAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillUnbilledRevenueAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_CODE: EnumField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      InventPostingItemCode,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHORT_TERM_UNBILLED_REVENUE_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_DISCOUNT_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_DISCOUNT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_TERM_UNBILLED_DISCOUNT_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledDiscountAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_DISCOUNT_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shortTermUnbilledDiscountAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHORT_TERM_UNBILLED_DISCOUNT_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledRevenueOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_REVENUE_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shortTermUnbilledRevenueAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHORT_TERM_UNBILLED_REVENUE_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledRevenueAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_REVENUE_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledDiscountOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_DISCOUNT_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillUnbilledRevenueAccounts<DeSerializers>>;
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
         * Static representation of the {@link shortTermUnbilledRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_UNBILLED_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShortTermUnbilledRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledDiscountAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DISCOUNT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledDiscountAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledDiscountOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DISCOUNT_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledDiscountOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenueOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledRevenueOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortTermUnbilledDiscountAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_UNBILLED_DISCOUNT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShortTermUnbilledDiscountAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillUnbilledRevenueAccounts)
      };
    }

    return this._schema;
  }
}
