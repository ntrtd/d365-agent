/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeasePostingAccounts } from './LeasePostingAccounts';
import { LeasePostingAccountsRequestBuilder } from './LeasePostingAccountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { AssetLeasePostingAccountCode } from './AssetLeasePostingAccountCode';
import { AssetLeasePostingTypes } from './AssetLeasePostingTypes';
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
export class LeasePostingAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeasePostingAccounts<DeSerializersT>, DeSerializersT>
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
  ): LeasePostingAccountsApi<DeSerializersT> {
    return new LeasePostingAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link operatingDimensionCombinationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_DIMENSION_COMBINATION_ENTITY: OneToOneLink<
      LeasePostingAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financeDimensionCombinationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCE_DIMENSION_COMBINATION_ENTITY: OneToOneLink<
      LeasePostingAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPERATING_DIMENSION_COMBINATION_ENTITY: new OneToOneLink(
        'OperatingDimensionCombinationEntity',
        this,
        linkedApis[0]
      ),
      FINANCE_DIMENSION_COMBINATION_ENTITY: new OneToOneLink(
        'FinanceDimensionCombinationEntity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = LeasePostingAccounts;

  requestBuilder(): LeasePostingAccountsRequestBuilder<DeSerializersT> {
    return new LeasePostingAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeasePostingAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeasePostingAccounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeasePostingAccounts<DeSerializersT>,
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
    typeof LeasePostingAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeasePostingAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      AssetLeasePostingAccountCode,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOOK_TABLE_BOOK_TYPE: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_TYPES_FOR_THE_LEASE: EnumField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      AssetLeasePostingTypes,
      true,
      true
    >;
    RELATION: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCE_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeasePostingAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingDimensionCombinationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_DIMENSION_COMBINATION_ENTITY: OneToOneLink<
      LeasePostingAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financeDimensionCombinationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCE_DIMENSION_COMBINATION_ENTITY: OneToOneLink<
      LeasePostingAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeasePostingAccounts<DeSerializers>>;
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', false),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          AssetLeasePostingAccountCode,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link bookTableBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TABLE_BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'BookTableBookType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingTypesForTheLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPES_FOR_THE_LEASE: fieldBuilder.buildEnumField(
          'PostingTypesForTheLease',
          AssetLeasePostingTypes,
          true
        ),
        /**
         * Static representation of the {@link relation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION: fieldBuilder.buildEdmTypeField(
          'Relation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financeLeaseMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCE_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'FinanceLeaseMainAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link operatingLeaseMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'OperatingLeaseMainAccountDisplayValue',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeasePostingAccounts)
      };
    }

    return this._schema;
  }
}
