/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanParameters } from './BudgetPlanParameters';
import { BudgetPlanParametersRequestBuilder } from './BudgetPlanParametersRequestBuilder';
import { BudgetPlanningSecurityModel } from './BudgetPlanningSecurityModel';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BudgetPlanParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanParameters<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanParametersApi<DeSerializersT> {
    return new BudgetPlanParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanParameters;

  requestBuilder(): BudgetPlanParametersRequestBuilder<DeSerializersT> {
    return new BudgetPlanParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanParameters<DeSerializersT>,
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
    typeof BudgetPlanParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetPlanParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_MODEL: EnumField<
      BudgetPlanParameters<DeSerializers>,
      DeSerializersT,
      BudgetPlanningSecurityModel,
      true,
      true
    >;
    DIMENSION_HIERARCHY_NAME: OrderableEdmTypeField<
      BudgetPlanParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_CURRENCY_CONVERSION: EnumField<
      BudgetPlanParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_BUDGET_PLANNING_USER_GROUPS: EnumField<
      BudgetPlanParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanParameters<DeSerializers>>;
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
         * Static representation of the {@link securityModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_MODEL: fieldBuilder.buildEnumField(
          'SecurityModel',
          BudgetPlanningSecurityModel,
          true
        ),
        /**
         * Static representation of the {@link dimensionHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipCurrencyConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CURRENCY_CONVERSION: fieldBuilder.buildEnumField(
          'SkipCurrencyConversion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useBudgetPlanningUserGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_BUDGET_PLANNING_USER_GROUPS: fieldBuilder.buildEnumField(
          'UseBudgetPlanningUserGroups',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanParameters)
      };
    }

    return this._schema;
  }
}
