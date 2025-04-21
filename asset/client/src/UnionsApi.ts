/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Unions } from './Unions';
import { UnionsRequestBuilder } from './UnionsRequestBuilder';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { CompensationFixedIncreaseBudgetsApi } from './CompensationFixedIncreaseBudgetsApi';
import { LaborUnionAgreementsApi } from './LaborUnionAgreementsApi';
import { PersonLaborUnionsApi } from './PersonLaborUnionsApi';
import { NoYes } from './NoYes';
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
export class UnionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Unions<DeSerializersT>, DeSerializersT>
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
  ): UnionsApi<DeSerializersT> {
    return new UnionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link laborUnionAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION_AGREEMENTS: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      LaborUnionAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personLaborUnions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_LABOR_UNIONS: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      PersonLaborUnionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationEligibilityRulesApi<DeSerializersT>,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>,
      LaborUnionAgreementsApi<DeSerializersT>,
      PersonLaborUnionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_ELIGIBILITY_RULES: new OneToManyLink(
        'CompensationEligibilityRules',
        this,
        linkedApis[0]
      ),
      COMPENSATION_FIXED_INCREASE_BUDGETS: new OneToManyLink(
        'CompensationFixedIncreaseBudgets',
        this,
        linkedApis[1]
      ),
      LABOR_UNION_AGREEMENTS: new OneToManyLink(
        'LaborUnionAgreements',
        this,
        linkedApis[2]
      ),
      PERSON_LABOR_UNIONS: new OneToManyLink(
        'PersonLaborUnions',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = Unions;

  requestBuilder(): UnionsRequestBuilder<DeSerializersT> {
    return new UnionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Unions<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Unions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Unions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Unions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Unions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNION_ID: OrderableEdmTypeField<
      Unions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Unions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITLED_TO_NEGOTIATE: EnumField<
      Unions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link laborUnionAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION_AGREEMENTS: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      LaborUnionAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personLaborUnions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_LABOR_UNIONS: OneToManyLink<
      Unions<DeSerializersT>,
      DeSerializersT,
      PersonLaborUnionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Unions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link unionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_ID: fieldBuilder.buildEdmTypeField(
          'UnionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link entitledToNegotiate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITLED_TO_NEGOTIATE: fieldBuilder.buildEnumField(
          'EntitledToNegotiate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Unions)
      };
    }

    return this._schema;
  }
}
