/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DisposableIncomes } from './DisposableIncomes';
import { DisposableIncomesRequestBuilder } from './DisposableIncomesRequestBuilder';
import { DisposableIncomeBenefitsApi } from './DisposableIncomeBenefitsApi';
import { DisposableIncomeEarningsApi } from './DisposableIncomeEarningsApi';
import { WorkerGarnishmentRulesApi } from './WorkerGarnishmentRulesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DisposableIncomesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DisposableIncomes<DeSerializersT>, DeSerializersT>
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
  ): DisposableIncomesApi<DeSerializersT> {
    return new DisposableIncomesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link disposableIncomeBenefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME_BENEFITS: OneToManyLink<
      DisposableIncomes<DeSerializersT>,
      DeSerializersT,
      DisposableIncomeBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link disposableIncomeEarnings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME_EARNINGS: OneToManyLink<
      DisposableIncomes<DeSerializersT>,
      DeSerializersT,
      DisposableIncomeEarningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link garnishmentTaxLevyRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GARNISHMENT_TAX_LEVY_RULES: OneToManyLink<
      DisposableIncomes<DeSerializersT>,
      DeSerializersT,
      WorkerGarnishmentRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DisposableIncomeBenefitsApi<DeSerializersT>,
      DisposableIncomeEarningsApi<DeSerializersT>,
      WorkerGarnishmentRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISPOSABLE_INCOME_BENEFITS: new OneToManyLink(
        'DisposableIncomeBenefits',
        this,
        linkedApis[0]
      ),
      DISPOSABLE_INCOME_EARNINGS: new OneToManyLink(
        'DisposableIncomeEarnings',
        this,
        linkedApis[1]
      ),
      GARNISHMENT_TAX_LEVY_RULES: new OneToManyLink(
        'GarnishmentTaxLevyRules',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = DisposableIncomes;

  requestBuilder(): DisposableIncomesRequestBuilder<DeSerializersT> {
    return new DisposableIncomesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DisposableIncomes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DisposableIncomes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DisposableIncomes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DisposableIncomes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DisposableIncomes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      DisposableIncomes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DisposableIncomes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link disposableIncomeBenefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME_BENEFITS: OneToManyLink<
      DisposableIncomes<DeSerializersT>,
      DeSerializersT,
      DisposableIncomeBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link disposableIncomeEarnings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME_EARNINGS: OneToManyLink<
      DisposableIncomes<DeSerializersT>,
      DeSerializersT,
      DisposableIncomeEarningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link garnishmentTaxLevyRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GARNISHMENT_TAX_LEVY_RULES: OneToManyLink<
      DisposableIncomes<DeSerializersT>,
      DeSerializersT,
      WorkerGarnishmentRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DisposableIncomes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DisposableIncomes)
      };
    }

    return this._schema;
  }
}
