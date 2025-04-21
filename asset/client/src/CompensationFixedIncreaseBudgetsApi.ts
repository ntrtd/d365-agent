/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationFixedIncreaseBudgets } from './CompensationFixedIncreaseBudgets';
import { CompensationFixedIncreaseBudgetsRequestBuilder } from './CompensationFixedIncreaseBudgetsRequestBuilder';
import { CompensationRegionsApi } from './CompensationRegionsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DepartmentsApi } from './DepartmentsApi';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { UnionsApi } from './UnionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationFixedIncreaseBudgetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationFixedIncreaseBudgets<DeSerializersT>, DeSerializersT>
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
  ): CompensationFixedIncreaseBudgetsApi<DeSerializersT> {
    return new CompensationFixedIncreaseBudgetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_CURRENCY: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omOperatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_OPERATING_UNIT: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      UnionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationRegionsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>,
      UnionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOCATION: new OneToOneLink('Location', this, linkedApis[0]),
      COMPENSATION_CURRENCY: new OneToOneLink(
        'CompensationCurrency',
        this,
        linkedApis[1]
      ),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[2]),
      OM_OPERATING_UNIT: new OneToOneLink(
        'OMOperatingUnit',
        this,
        linkedApis[3]
      ),
      LABOR_UNION: new OneToOneLink('LaborUnion', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = CompensationFixedIncreaseBudgets;

  requestBuilder(): CompensationFixedIncreaseBudgetsRequestBuilder<DeSerializersT> {
    return new CompensationFixedIncreaseBudgetsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CompensationFixedIncreaseBudgets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationFixedIncreaseBudgets<DeSerializersT>,
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
    typeof CompensationFixedIncreaseBudgets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationFixedIncreaseBudgets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUDGET: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABOR_UNION_ID: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCREASE_PERCENT: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TARGET: OrderableEdmTypeField<
      CompensationFixedIncreaseBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_CURRENCY: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omOperatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_OPERATING_UNIT: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION: OneToOneLink<
      CompensationFixedIncreaseBudgets<DeSerializersT>,
      DeSerializersT,
      UnionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationFixedIncreaseBudgets<DeSerializers>>;
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
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link budget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET: fieldBuilder.buildEdmTypeField('Budget', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link laborUnionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_UNION_ID: fieldBuilder.buildEdmTypeField(
          'LaborUnionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link increasePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASE_PERCENT: fieldBuilder.buildEdmTypeField(
          'IncreasePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link target} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET: fieldBuilder.buildEdmTypeField('Target', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationFixedIncreaseBudgets)
      };
    }

    return this._schema;
  }
}
