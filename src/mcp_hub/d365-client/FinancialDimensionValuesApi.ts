/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialDimensionValues } from './FinancialDimensionValues';
import { FinancialDimensionValuesRequestBuilder } from './FinancialDimensionValuesRequestBuilder';
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
export class FinancialDimensionValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FinancialDimensionValues<DeSerializersT>, DeSerializersT>
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
  ): FinancialDimensionValuesApi<DeSerializersT> {
    return new FinancialDimensionValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueEntityRelatedRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_RELATED_ROLE_LEGAL_ENTITY: OneToOneLink<
      FinancialDimensionValues<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueEntityRelatedRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION: OneToOneLink<
      FinancialDimensionValues<DeSerializersT>,
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
      FINANCIAL_DIMENSION_VALUE_ENTITY_RELATED_ROLE_LEGAL_ENTITY:
        new OneToOneLink(
          'FinancialDimensionValueEntity_RelatedRole_LegalEntity',
          this,
          linkedApis[0]
        ),
      FINANCIAL_DIMENSION_VALUE_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION:
        new OneToOneLink(
          'FinancialDimensionValueEntity_RelatedRole_FinancialDimension',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = FinancialDimensionValues;

  requestBuilder(): FinancialDimensionValuesRequestBuilder<DeSerializersT> {
    return new FinancialDimensionValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FinancialDimensionValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FinancialDimensionValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FinancialDimensionValues<DeSerializersT>,
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
    typeof FinancialDimensionValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FinancialDimensionValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FINANCIAL_DIMENSION: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_VALUE: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DIMENSION: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUSPENDED: EnumField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BLOCKED_FOR_MANUAL_ENTRY: EnumField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TOTAL: EnumField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OWNER: OrderableEdmTypeField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BALANCING_PSN: EnumField<
      FinancialDimensionValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueEntityRelatedRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_RELATED_ROLE_LEGAL_ENTITY: OneToOneLink<
      FinancialDimensionValues<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueEntityRelatedRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_RELATED_ROLE_FINANCIAL_DIMENSION: OneToOneLink<
      FinancialDimensionValues<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FinancialDimensionValues<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
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
         * Static representation of the {@link groupDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DIMENSION: fieldBuilder.buildEdmTypeField(
          'GroupDimension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUSPENDED: fieldBuilder.buildEnumField('IsSuspended', NoYes, true),
        /**
         * Static representation of the {@link isBlockedForManualEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BLOCKED_FOR_MANUAL_ENTRY: fieldBuilder.buildEnumField(
          'IsBlockedForManualEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TOTAL: fieldBuilder.buildEnumField('IsTotal', NoYes, true),
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
        /**
         * Static representation of the {@link isBalancingPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BALANCING_PSN: fieldBuilder.buildEnumField(
          'IsBalancing_PSN',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FinancialDimensionValues)
      };
    }

    return this._schema;
  }
}
