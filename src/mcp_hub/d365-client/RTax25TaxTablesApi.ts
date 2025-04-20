/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RTax25TaxTables } from './RTax25TaxTables';
import { RTax25TaxTablesRequestBuilder } from './RTax25TaxTablesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { RTax25TaxModule } from './RTax25TaxModule';
import { TaxTypeW } from './TaxTypeW';
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
export class RTax25TaxTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RTax25TaxTables<DeSerializersT>, DeSerializersT>
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
  ): RTax25TaxTablesApi<DeSerializersT> {
    return new RTax25TaxTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RTax25TaxTables<DeSerializersT>,
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

  entityConstructor = RTax25TaxTables;

  requestBuilder(): RTax25TaxTablesRequestBuilder<DeSerializersT> {
    return new RTax25TaxTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RTax25TaxTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RTax25TaxTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RTax25TaxTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RTax25TaxTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RTax25TaxTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE: EnumField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      RTax25TaxModule,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOWANCE_DECREASE_BASE_387: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWANCE_DECREASE_BASE_387_VALUE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWANCE_BY_REDUCTION_OF_TAX_VALUE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_REVENUE_CODE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWANCE_DECREASE_BASE_391: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWANCE_BY_REDUCTION_OF_RATE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWANCE_DECREASE_BASE_391_VALUE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWANCE_BY_REDUCTION_OF_RATE_VALUE: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE_OF_TAX: EnumField<
      RTax25TaxTables<DeSerializers>,
      DeSerializersT,
      TaxTypeW,
      true,
      true
    >;
    ALLOWANCE_BY_REDUCTION_OF_TAX: OrderableEdmTypeField<
      RTax25TaxTables<DeSerializers>,
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
      RTax25TaxTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RTax25TaxTables<DeSerializers>>;
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
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField('Module', RTax25TaxModule, true),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link allowanceDecreaseBase387} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_DECREASE_BASE_387: fieldBuilder.buildEdmTypeField(
          'AllowanceDecreaseBase387',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowanceDecreaseBase387Value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_DECREASE_BASE_387_VALUE: fieldBuilder.buildEdmTypeField(
          'AllowanceDecreaseBase387Value',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link allowanceByReductionOfTaxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_BY_REDUCTION_OF_TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'AllowanceByReductionOfTaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'BudgetRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowanceDecreaseBase391} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_DECREASE_BASE_391: fieldBuilder.buildEdmTypeField(
          'AllowanceDecreaseBase391',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowanceByReductionOfRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_BY_REDUCTION_OF_RATE: fieldBuilder.buildEdmTypeField(
          'AllowanceByReductionOfRate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowanceDecreaseBase391Value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_DECREASE_BASE_391_VALUE: fieldBuilder.buildEdmTypeField(
          'AllowanceDecreaseBase391Value',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowanceByReductionOfRateValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_BY_REDUCTION_OF_RATE_VALUE: fieldBuilder.buildEdmTypeField(
          'AllowanceByReductionOfRateValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link typeOfTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_TAX: fieldBuilder.buildEnumField('TypeOfTax', TaxTypeW, true),
        /**
         * Static representation of the {@link allowanceByReductionOfTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_BY_REDUCTION_OF_TAX: fieldBuilder.buildEdmTypeField(
          'AllowanceByReductionOfTax',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RTax25TaxTables)
      };
    }

    return this._schema;
  }
}
