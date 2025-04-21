/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialDimensionValueLegalEntityOverrides } from './FinancialDimensionValueLegalEntityOverrides';
import { FinancialDimensionValueLegalEntityOverridesRequestBuilder } from './FinancialDimensionValueLegalEntityOverridesRequestBuilder';
import { DimensionAttributesApi } from './DimensionAttributesApi';
import { WorkersApi } from './WorkersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FinancialDimensionValueLegalEntityOverridesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
      DeSerializersT
    >
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
  ): FinancialDimensionValueLegalEntityOverridesApi<DeSerializersT> {
    return new FinancialDimensionValueLegalEntityOverridesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueLegalEntityOverrideEntityRelatedRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION: OneToOneLink<
      FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionAttributesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION:
        new OneToOneLink(
          'FinancialDimensionValueLegalEntityOverrideEntity_RelatedRole_FinancialDimension',
          this,
          linkedApis[0]
        ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = FinancialDimensionValueLegalEntityOverrides;

  requestBuilder(): FinancialDimensionValueLegalEntityOverridesRequestBuilder<DeSerializersT> {
    return new FinancialDimensionValueLegalEntityOverridesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
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
    typeof FinancialDimensionValueLegalEntityOverrides,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FinancialDimensionValueLegalEntityOverrides,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FINANCIAL_DIMENSION: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_VALUE: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SUSPENDED: EnumField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OWNER: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueLegalEntityOverrideEntityRelatedRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION: OneToOneLink<
      FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      FinancialDimensionValueLegalEntityOverrides<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FinancialDimensionValueLegalEntityOverrides<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link financialDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION: fieldBuilder.buildEdmTypeField(
          'FinancialDimension',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUSPENDED: fieldBuilder.buildEnumField('IsSuspended', NoYes, true),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FinancialDimensionValueLegalEntityOverrides
        )
      };
    }

    return this._schema;
  }
}
