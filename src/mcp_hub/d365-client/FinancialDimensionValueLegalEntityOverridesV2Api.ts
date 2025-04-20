/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialDimensionValueLegalEntityOverridesV2 } from './FinancialDimensionValueLegalEntityOverridesV2';
import { FinancialDimensionValueLegalEntityOverridesV2RequestBuilder } from './FinancialDimensionValueLegalEntityOverridesV2RequestBuilder';
import { OfficeAddinLegalEntitiesApi } from './OfficeAddinLegalEntitiesApi';
import { DimensionAttributesApi } from './DimensionAttributesApi';
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
export class FinancialDimensionValueLegalEntityOverridesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
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
  ): FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT> {
    return new FinancialDimensionValueLegalEntityOverridesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueLegalEntityOverrideEntityRelatedRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_RELATED_ROLE_LEGAL_ENTITY: OneToOneLink<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueLegalEntityOverrideV2EntityRelatedRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_V_2_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION: OneToOneLink<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_RELATED_ROLE_LEGAL_ENTITY:
        new OneToOneLink(
          'FinancialDimensionValueLegalEntityOverrideEntity_RelatedRole_LegalEntity',
          this,
          linkedApis[0]
        ),
      FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_V_2_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION:
        new OneToOneLink(
          'FinancialDimensionValueLegalEntityOverrideV2Entity_RelatedRole_FinancialDimension',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = FinancialDimensionValueLegalEntityOverridesV2;

  requestBuilder(): FinancialDimensionValueLegalEntityOverridesV2RequestBuilder<DeSerializersT> {
    return new FinancialDimensionValueLegalEntityOverridesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
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
    typeof FinancialDimensionValueLegalEntityOverridesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FinancialDimensionValueLegalEntityOverridesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FINANCIAL_DIMENSION: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_VALUE: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SUSPENDED: EnumField<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueLegalEntityOverrideEntityRelatedRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_RELATED_ROLE_LEGAL_ENTITY: OneToOneLink<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueLegalEntityOverrideV2EntityRelatedRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_V_2_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION: OneToOneLink<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FinancialDimensionValueLegalEntityOverridesV2<DeSerializers>
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FinancialDimensionValueLegalEntityOverridesV2
        )
      };
    }

    return this._schema;
  }
}
