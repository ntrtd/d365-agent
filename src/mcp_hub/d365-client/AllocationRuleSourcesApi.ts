/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllocationRuleSources } from './AllocationRuleSources';
import { AllocationRuleSourcesRequestBuilder } from './AllocationRuleSourcesRequestBuilder';
import { AllocationRulesApi } from './AllocationRulesApi';
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
export class AllocationRuleSourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AllocationRuleSources<DeSerializersT>, DeSerializersT>
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
  ): AllocationRuleSourcesApi<DeSerializersT> {
    return new AllocationRuleSourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link allocationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE: OneToOneLink<
      AllocationRuleSources<DeSerializersT>,
      DeSerializersT,
      AllocationRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AllocationRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ALLOCATION_RULE: new OneToOneLink('AllocationRule', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AllocationRuleSources;

  requestBuilder(): AllocationRuleSourcesRequestBuilder<DeSerializersT> {
    return new AllocationRuleSourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllocationRuleSources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AllocationRuleSources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AllocationRuleSources<DeSerializersT>,
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
    typeof AllocationRuleSources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AllocationRuleSources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllocationRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE: OrderableEdmTypeField<
      AllocationRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AllocationRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_CRITERIA: OrderableEdmTypeField<
      AllocationRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_NAME: OrderableEdmTypeField<
      AllocationRuleSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_SETTING: EnumField<
      AllocationRuleSources<DeSerializers>,
      DeSerializersT,
      LedgerAllocationAccountDimension,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE: OneToOneLink<
      AllocationRuleSources<DeSerializersT>,
      DeSerializersT,
      AllocationRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllocationRuleSources<DeSerializers>>;
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
         * Static representation of the {@link rule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE: fieldBuilder.buildEdmTypeField('Rule', 'Edm.String', false),
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
         * Static representation of the {@link sourceCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CRITERIA: fieldBuilder.buildEdmTypeField(
          'SourceCriteria',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeName',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllocationRuleSources)
      };
    }

    return this._schema;
  }
}
