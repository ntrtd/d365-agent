/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllocationBasisRuleSources } from './AllocationBasisRuleSources';
import { AllocationBasisRuleSourcesRequestBuilder } from './AllocationBasisRuleSourcesRequestBuilder';
import { AllocationBasisRulesApi } from './AllocationBasisRulesApi';
import { LedgerAllocationAccountDimension } from './LedgerAllocationAccountDimension';
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
export class AllocationBasisRuleSourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AllocationBasisRuleSources<DeSerializersT>, DeSerializersT>
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
  ): AllocationBasisRuleSourcesApi<DeSerializersT> {
    return new AllocationBasisRuleSourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link allocationBasisRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_BASIS_RULE: OneToOneLink<
      AllocationBasisRuleSources<DeSerializersT>,
      DeSerializersT,
      AllocationBasisRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AllocationBasisRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ALLOCATION_BASIS_RULE: new OneToOneLink(
        'AllocationBasisRule',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AllocationBasisRuleSources;

  requestBuilder(): AllocationBasisRuleSourcesRequestBuilder<DeSerializersT> {
    return new AllocationBasisRuleSourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllocationBasisRuleSources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AllocationBasisRuleSources<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AllocationBasisRuleSources<DeSerializersT>,
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
    typeof AllocationBasisRuleSources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AllocationBasisRuleSources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASIS_ID: OrderableEdmTypeField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASIS_CRITERIA: OrderableEdmTypeField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_SETTING: EnumField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      LedgerAllocationAccountDimension,
      true,
      true
    >;
    BASIS_DIMENSION_ATTRIBUTE_NAME: OrderableEdmTypeField<
      AllocationBasisRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationBasisRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_BASIS_RULE: OneToOneLink<
      AllocationBasisRuleSources<DeSerializersT>,
      DeSerializersT,
      AllocationBasisRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllocationBasisRuleSources<DeSerializers>>;
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
         * Static representation of the {@link basisId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIS_ID: fieldBuilder.buildEdmTypeField(
          'BasisId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link basisCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIS_CRITERIA: fieldBuilder.buildEdmTypeField(
          'BasisCriteria',
          'Edm.String',
          true
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
         * Static representation of the {@link fieldSetting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_SETTING: fieldBuilder.buildEnumField(
          'FieldSetting',
          LedgerAllocationAccountDimension,
          true
        ),
        /**
         * Static representation of the {@link basisDimensionAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIS_DIMENSION_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'BasisDimensionAttributeName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllocationBasisRuleSources)
      };
    }

    return this._schema;
  }
}
