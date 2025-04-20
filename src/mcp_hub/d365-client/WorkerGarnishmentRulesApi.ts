/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerGarnishmentRules } from './WorkerGarnishmentRules';
import { WorkerGarnishmentRulesRequestBuilder } from './WorkerGarnishmentRulesRequestBuilder';
import { AddressStatesApi } from './AddressStatesApi';
import { WorkersApi } from './WorkersApi';
import { DisposableIncomesApi } from './DisposableIncomesApi';
import { PayrollGarnishmentTaxLevyType } from './PayrollGarnishmentTaxLevyType';
import { NoYes } from './NoYes';
import { PayrollLimitMethod } from './PayrollLimitMethod';
import { PayrollMultipleGarnishmentMethod } from './PayrollMultipleGarnishmentMethod';
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
  EnumField,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkerGarnishmentRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerGarnishmentRules<DeSerializersT>, DeSerializersT>
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
  ): WorkerGarnishmentRulesApi<DeSerializersT> {
    return new WorkerGarnishmentRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link state} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATE: OneToOneLink<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link disposableIncome} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME: OneToOneLink<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT,
      DisposableIncomesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressStatesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      DisposableIncomesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      STATE: new OneToOneLink('State', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      DISPOSABLE_INCOME: new OneToOneLink(
        'DisposableIncome',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = WorkerGarnishmentRules;

  requestBuilder(): WorkerGarnishmentRulesRequestBuilder<DeSerializersT> {
    return new WorkerGarnishmentRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerGarnishmentRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerGarnishmentRules<DeSerializersT>,
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
    typeof WorkerGarnishmentRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerGarnishmentRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GARNISHMENT_TAX_LEVY_TYPE: EnumField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      PayrollGarnishmentTaxLevyType,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPOSABLE_EARNINGS_PERCENT: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATE_LIMIT: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPOSABLE_INCOME_NAME: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_REDUCTION: EnumField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_METHOD: EnumField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      PayrollLimitMethod,
      true,
      true
    >;
    DISPOSABLE_INCOME_EXEMPTION: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_WAGE: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_WAGE_MULTIPLIER: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTIPLE_METHOD: EnumField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      PayrollMultipleGarnishmentMethod,
      true,
      true
    >;
    EXEMPT_EARNING_AMOUNT: OrderableEdmTypeField<
      WorkerGarnishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link state} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATE: OneToOneLink<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link disposableIncome} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME: OneToOneLink<
      WorkerGarnishmentRules<DeSerializersT>,
      DeSerializersT,
      DisposableIncomesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerGarnishmentRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link garnishmentTaxLevyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GARNISHMENT_TAX_LEVY_TYPE: fieldBuilder.buildEnumField(
          'GarnishmentTaxLevyType',
          PayrollGarnishmentTaxLevyType,
          true
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField(
          'StateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link disposableEarningsPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSABLE_EARNINGS_PERCENT: fieldBuilder.buildEdmTypeField(
          'DisposableEarningsPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link alternateLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_LIMIT: fieldBuilder.buildEdmTypeField(
          'AlternateLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link disposableIncomeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSABLE_INCOME_NAME: fieldBuilder.buildEdmTypeField(
          'DisposableIncomeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowReduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_REDUCTION: fieldBuilder.buildEnumField(
          'AllowReduction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link limitMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_METHOD: fieldBuilder.buildEnumField(
          'LimitMethod',
          PayrollLimitMethod,
          true
        ),
        /**
         * Static representation of the {@link disposableIncomeExemption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSABLE_INCOME_EXEMPTION: fieldBuilder.buildEdmTypeField(
          'DisposableIncomeExemption',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumWage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_WAGE: fieldBuilder.buildEdmTypeField(
          'MinimumWage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumWageMultiplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_WAGE_MULTIPLIER: fieldBuilder.buildEdmTypeField(
          'MinimumWageMultiplier',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multipleMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_METHOD: fieldBuilder.buildEnumField(
          'MultipleMethod',
          PayrollMultipleGarnishmentMethod,
          true
        ),
        /**
         * Static representation of the {@link exemptEarningAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_EARNING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExemptEarningAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerGarnishmentRules)
      };
    }

    return this._schema;
  }
}
