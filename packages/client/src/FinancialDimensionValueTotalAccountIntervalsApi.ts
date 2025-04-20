/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialDimensionValueTotalAccountIntervals } from './FinancialDimensionValueTotalAccountIntervals';
import { FinancialDimensionValueTotalAccountIntervalsRequestBuilder } from './FinancialDimensionValueTotalAccountIntervalsRequestBuilder';
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
export class FinancialDimensionValueTotalAccountIntervalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
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
  ): FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT> {
    return new FinancialDimensionValueTotalAccountIntervalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueTotalAccountIntervalEntityRelatedRoleOfficeAddinLegalEntityEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_RELATED_ROLE_OFFICE_ADDIN_LEGAL_ENTITY_ENTITY: OneToOneLink<
      FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueTotalAccountIntervalEntityRelatedRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToOneLink<
      FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
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
      FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_RELATED_ROLE_OFFICE_ADDIN_LEGAL_ENTITY_ENTITY:
        new OneToOneLink(
          'FinancialDimensionValueTotalAccountIntervalEntity_RelatedRole_OfficeAddinLegalEntityEntity',
          this,
          linkedApis[0]
        ),
      FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY:
        new OneToOneLink(
          'FinancialDimensionValueTotalAccountIntervalEntity_RelatedRole_DimensionAttributeEntity',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = FinancialDimensionValueTotalAccountIntervals;

  requestBuilder(): FinancialDimensionValueTotalAccountIntervalsRequestBuilder<DeSerializersT> {
    return new FinancialDimensionValueTotalAccountIntervalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
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
    typeof FinancialDimensionValueTotalAccountIntervals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FinancialDimensionValueTotalAccountIntervals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FINANCIAL_DIMENSION: OrderableEdmTypeField<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_VALUE: OrderableEdmTypeField<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_VALUE: OrderableEdmTypeField<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_VALUE: OrderableEdmTypeField<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVERT_TOTAL_SIGN: EnumField<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueTotalAccountIntervalEntityRelatedRoleOfficeAddinLegalEntityEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_RELATED_ROLE_OFFICE_ADDIN_LEGAL_ENTITY_ENTITY: OneToOneLink<
      FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueTotalAccountIntervalEntityRelatedRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToOneLink<
      FinancialDimensionValueTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FinancialDimensionValueTotalAccountIntervals<DeSerializers>
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
         * Static representation of the {@link fromValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_VALUE: fieldBuilder.buildEdmTypeField(
          'FromValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_VALUE: fieldBuilder.buildEdmTypeField(
          'ToValue',
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
          true
        ),
        /**
         * Static representation of the {@link invertTotalSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVERT_TOTAL_SIGN: fieldBuilder.buildEnumField(
          'InvertTotalSign',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FinancialDimensionValueTotalAccountIntervals
        )
      };
    }

    return this._schema;
  }
}
