/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimAttributeMainAccounts } from './DimAttributeMainAccounts';
import { DimAttributeMainAccountsRequestBuilder } from './DimAttributeMainAccountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DimAttributeMainAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DimAttributeMainAccounts<DeSerializersT>, DeSerializersT>
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
  ): DimAttributeMainAccountsApi<DeSerializersT> {
    return new DimAttributeMainAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link dimensionCombinationMainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION_MAIN_ACCOUNT: OneToManyLink<
      DimAttributeMainAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION_MAIN_ACCOUNT: new OneToManyLink(
        'DimensionCombinationMainAccount',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DimAttributeMainAccounts;

  requestBuilder(): DimAttributeMainAccountsRequestBuilder<DeSerializersT> {
    return new DimAttributeMainAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DimAttributeMainAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DimAttributeMainAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DimAttributeMainAccounts<DeSerializersT>,
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
    typeof DimAttributeMainAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DimAttributeMainAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VALUE: OrderableEdmTypeField<
      DimAttributeMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DimAttributeMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      DimAttributeMainAccounts<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountType,
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      DimAttributeMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dimensionCombinationMainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION_MAIN_ACCOUNT: OneToManyLink<
      DimAttributeMainAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DimAttributeMainAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          DimensionLedgerAccountType,
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimAttributeMainAccounts)
      };
    }

    return this._schema;
  }
}
